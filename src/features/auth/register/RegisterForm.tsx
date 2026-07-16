"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@heroui/react";
import { uploadImage } from "@/services/image/uploadImage";
import Container from "@/components/common/container/Container";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Camera } from "lucide-react";
import { useState } from "react";

const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Full name is required")
      .min(3, "Full name must be at least 3 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email"),

    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),

    image: z
      .any()
      .optional(),

    acceptTerms: z.boolean().refine((value) => value, {
      message: "You must accept the Terms & Conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: undefined,
      acceptTerms: false,
    },
  });
  const imageRegister = register("image");

  const router = useRouter();
  const [preview, setPreview] = useState<string>("");

  const onSubmit = async (data: RegisterFormValues) => {
    let image = "";
    try {
      if (data.image?.[0]) {
        image = await uploadImage(data.image[0]);
      }
      const result = await signUp.email({
        name: data.fullName,
        email: data.email,
        password: data.password,
        image,
      });

      console.log("Result from signup:", result)

      if (result.error) {
        toast.error(result.error.message);
        return;
      }

      toast.success("Registration successful");

      router.push("/");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Registration failed"
      );
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Decorative premium color background ambient blurs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-[#14B8A6]/10 blur-[80px]" />

      <Container>
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-background/60 p-8 shadow-[0_25px_50px_-12px_rgba(30,58,138,0.25)] backdrop-blur-2xl transition-all duration-300 hover:border-white/20">
            <div className="text-center">
              <h1 className="bg-gradient-to-r from-[#1E3A8A] via-[#14B8A6] to-[#F59E0B] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                Create Account
              </h1>

              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Join SkillBridge and start your learning journey.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mt-8 space-y-5"
            >
              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="relative">
                  <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-default-200/60 transition-all duration-200 hover:border-[#14B8A6]/50 shadow-inner">
                    {preview ? (
                      <Image
                        src={preview}
                        alt="Preview"
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-default-100 text-3xl font-bold text-foreground/40">
                        ?
                      </div>
                    )}
                  </div>

                  <label
                    htmlFor="image"
                    className="absolute bottom-0 right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] text-white shadow-lg transition duration-200 hover:scale-105 active:scale-95"
                  >
                    <Camera size={18} />
                  </label>

                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...imageRegister}
                    onChange={(e) => {
                      imageRegister.onChange(e);

                      const file = e.target.files?.[0];

                      if (file) {
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                </div>

                <p className="text-sm font-medium text-foreground/60">
                  Upload Profile Photo
                </p>
              </div>

              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-foreground/80"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  {...register("fullName")}
                  className="w-full rounded-xl border border-default-300/60 bg-background/50 px-4 py-3 text-sm outline-none transition duration-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                />

                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground/80"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  spellCheck={false}
                  autoCapitalize="none"
                  {...register("email")}
                  className="w-full rounded-xl border border-default-300/60 bg-background/50 px-4 py-3 text-sm outline-none transition duration-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-foreground/80"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  spellCheck={false}
                  {...register("password")}
                  className="w-full rounded-xl border border-default-300/60 bg-background/50 px-4 py-3 text-sm outline-none transition duration-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                />

                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-foreground/80"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  spellCheck={false}
                  {...register("confirmPassword")}
                  className="w-full rounded-xl border border-default-300/60 bg-background/50 px-4 py-3 text-sm outline-none transition duration-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                />

                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-3 text-sm cursor-pointer select-none text-foreground/80">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-default-300 text-[#1E3A8A] focus:ring-[#1E3A8A]/40 accent-[#1E3A8A]"
                    {...register("acceptTerms")}
                  />

                  <span>
                    I accept the{" "}
                    <Link
                      href="/terms"
                      className="font-medium text-[#1E3A8A] transition duration-200 hover:text-[#14B8A6] hover:underline"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </span>
                </label>

                {errors.acceptTerms && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.acceptTerms.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                isDisabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] text-white font-medium shadow-lg shadow-[#1E3A8A]/20 transition-all duration-200 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99]"
              >
                {isSubmitting ? "Creating Account..." : "Register"}
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-foreground/70">
              <span>Already have an account? </span>

              <Link
                href="/login"
                className="font-semibold text-[#1E3A8A] transition duration-200 hover:text-[#14B8A6] hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
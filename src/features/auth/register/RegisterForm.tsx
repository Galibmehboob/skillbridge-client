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

console.log("Result from signup:",result)

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
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="w-full max-w-md rounded-3xl border border-default-200 bg-background/70 p-8 shadow-2xl backdrop-blur-2xl">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight">
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
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  {...register("fullName")}
                  className="w-full rounded-xl border border-default-300 bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
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
                  className="mb-2 block text-sm font-medium"
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
                  className="w-full rounded-xl border border-default-300 bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
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
                  className="mb-2 block text-sm font-medium"
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
                  className="w-full rounded-xl border border-default-300 bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
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
                  className="mb-2 block text-sm font-medium"
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
                  className="w-full rounded-xl border border-default-300 bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />

                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

   <div className="flex flex-col items-center gap-4">
  <div className="relative">
    <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-default-200">
      {preview ? (
        <Image
          src={preview}
          alt="Preview"
          width={112}
          height={112}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-default-100 text-3xl font-bold">
          ?
        </div>
      )}
    </div>

    <label
      htmlFor="image"
      className="absolute bottom-0 right-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-lg"
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

  <p className="text-sm text-foreground/60">
    Upload Profile Photo
  </p>
</div>

              <div>
                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                    {...register("acceptTerms")}
                  />

                  <span>
                    I accept the{" "}
                    <Link
                      href="/terms"
                      className="font-medium text-primary hover:underline"
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
                className="w-full"
              >
                {isSubmitting ? "Creating Account..." : "Register"}
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-foreground/70">
              <span>Already have an account? </span>

              <Link
                href="/login"
                className="font-semibold text-primary hover:underline"
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
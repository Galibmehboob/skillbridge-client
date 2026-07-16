"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@heroui/react";
import { signIn } from "@/lib/auth-client";

import Container from "@/components/common/container/Container";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  remember: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: data.remember,
        callbackURL: "/",
      });

      if (result.error) {
        toast.error(result.error.message);
        return;
      }

      toast.success("Login successful");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Login failed"
      );
    }
  };

  const handleDemoCredentials = () => {
    setValue("email", "user@skillbridge.com", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });

    setValue("password", "User@123", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
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
                Welcome Back
              </h1>

              <p className="mt-3 text-sm leading-6 text-foreground/70">
                Sign in to continue your SkillBridge journey.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-5"
              noValidate
            >
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
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  {...register("password")}
                  className="w-full rounded-xl border border-default-300/60 bg-background/50 px-4 py-3 text-sm outline-none transition duration-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                />

                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-sm cursor-pointer select-none text-foreground/80">
                  <input
                    type="checkbox"
                    {...register("remember")}
                    className="h-4 w-4 rounded border-default-300 text-[#1E3A8A] focus:ring-[#1E3A8A]/40 accent-[#1E3A8A]"
                  />
                  <span>Remember Me</span>
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-[#1E3A8A] transition duration-200 hover:text-[#14B8A6] hover:underline"
                >
                  Forgot Password
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] text-white font-medium shadow-lg shadow-[#1E3A8A]/20 transition-all duration-200 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99]"
                isDisabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Login"}
              </Button>

              <Button
                type="button"
                className="w-full border border-default-200 bg-background/40 font-medium text-foreground transition-all duration-200 hover:bg-background/80 hover:border-[#F59E0B]/50 hover:text-[#F59E0B]"
                onClick={handleDemoCredentials}
                isDisabled={isSubmitting}
              >
                Use Demo Credentials
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-foreground/70">
              <span>Don&apos;t have an account? </span>

              <Link
                href="/register"
                className="font-semibold text-[#1E3A8A] transition duration-200 hover:text-[#14B8A6] hover:underline"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
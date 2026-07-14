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
    formState: { errors,isSubmitting  },
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
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="w-full max-w-md rounded-3xl border border-default-200 bg-background/70 p-8 shadow-2xl backdrop-blur-2xl">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight">
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
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
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
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  {...register("password")}
                  className="w-full rounded-xl border border-default-300 bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />

                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    {...register("remember")}
                    className="h-4 w-4 rounded border-default-300"
                  />
                  <span>Remember Me</span>
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-primary transition hover:underline"
                >
                  Forgot Password
                </button>
              </div>

              <Button
  type="submit"
  className="w-full"
  isDisabled={isSubmitting}
>
  {isSubmitting ? "Signing in..." : "Login"}
</Button>

              <Button
  type="button"
  className="w-full"
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
                className="font-semibold text-primary transition hover:underline"
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
import AuthLayout from "@/features/auth/components/AuthLayout";
import LoginForm from "@/features/auth/login/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
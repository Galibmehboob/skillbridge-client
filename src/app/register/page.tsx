import AuthLayout from "@/features/auth/components/AuthLayout";
import RegisterForm from "@/features/auth/register/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
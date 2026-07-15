import AuthLayout from "@/features/auth/components/AuthLayout";
import GuestGuard from "@/features/auth/components/GuestGuard";
import RegisterForm from "@/features/auth/register/RegisterForm";

export default function RegisterPage() {
  return (
    <GuestGuard>
      <AuthLayout>
      <RegisterForm />
    </AuthLayout>
    </GuestGuard>
  );
}
import AuthLayout from "@/features/auth/components/AuthLayout";
import GuestGuard from "@/features/auth/components/GuestGuard";

import LoginForm from "@/features/auth/login/LoginForm";

export default function LoginPage() {
  return (
   <GuestGuard>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
   </GuestGuard>
   
  );
}
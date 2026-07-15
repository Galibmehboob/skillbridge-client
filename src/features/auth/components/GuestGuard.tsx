"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "@/lib/auth-client";

type GuestGuardProps = {
  children: React.ReactNode;
};

export default function GuestGuard({
  children,
}: GuestGuardProps) {
  const router = useRouter();

  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && session) {
      router.replace("/");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-foreground/70">
          Checking authentication...
        </p>
      </div>
    );
  }

  if (session) {
    return null;
  }

  return <>{children}</>;
}
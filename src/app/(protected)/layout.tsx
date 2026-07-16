"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@heroui/react";
import {
  ArrowLeft,
  Briefcase,
  LayoutDashboard,
  Menu,
  Plus,
  User,
  Users,
  Shield,
  X,
} from "lucide-react";

import { useSession } from "@/lib/auth-client";

type SidebarProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ setOpen }: SidebarProps) {
   const { data: session } = useSession();
   console.log(session);
  return (
    <div className="flex h-full flex-col bg-white dark:bg-black">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        <Link
          href="/dashboard"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-default-100"
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/profile"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-default-100"
        >
          <User size={18} />
          <span>My Profile</span>
        </Link>

        <Link
          href="/collaboration"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-default-100"
        >
          <Users size={18} />
          <span>Collaboration</span>
        </Link>
        {
  (session?.user as { role?: string })?.role === "admin" && (
    <Link
      href="/admin"
      onClick={() => setOpen(false)}
      className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-default-100"
    >
      <Shield size={18} />
      <span>Admin Dashboard</span>
    </Link>
  )
}

        <Link
  href="/items/add"
  onClick={() => setOpen(false)}
  className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-default-100"
>
   <Plus size={18} />
  <span>Add Skill</span>
</Link>

        <Link
          href="/items/manage"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-default-100"
        >
          <Briefcase size={18} />
          <span>Manage Skills</span>
        </Link>

        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="mt-8 flex items-center gap-3 rounded-lg border px-4 py-3 transition hover:bg-default-100"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </nav>
    </div>
  );
}

export default function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!session) return null;

    return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 border-r lg:block">
        <Sidebar setOpen={setOpen} />
      </aside>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between border-b bg-background px-4 lg:hidden">
        <h2 className="text-lg font-bold">
          Dashboard
        </h2>

        <Button
          isIconOnly
          variant="primary"
          onPress={() => setOpen(true)}
        >
          <Menu size={22} />
        </Button>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setOpen(false)}
          />

          <aside className="fixed left-0 top-0 z-50 h-screen w-72 border-r bg-background lg:hidden">
            <div className="flex justify-end p-3">
              <Button
                isIconOnly
                variant="outline"
                onPress={() => setOpen(false)}
              >
                <X size={20} />
              </Button>
            </div>

            <Sidebar setOpen={setOpen} />
          </aside>
        </>
      )}

      {/* Page Content */}
      <main className="flex-1 p-6 pt-24 lg:p-8">
        {children}
      </main>
    </div>
  );
}
import { redirect } from "next/navigation";

import { authClient } from "@/lib/auth-client";


export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return children;
}
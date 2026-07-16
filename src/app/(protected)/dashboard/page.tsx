"use client";

import Link from "next/link";

import { Button, Card } from "@heroui/react";
import {
  ArrowRight,
  Briefcase,
  User,
  Users,
} from "lucide-react";

import { useSession } from "@/lib/auth-client";

export default function DashboardPage() {
  const { data: session } = useSession();

console.log(session?.user)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome, {session?.user.name}
        </h1>

        <p className="mt-2 text-default-500">
          Manage your SkillBridge account from one place.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Card className="p-6">
          <User className="mb-4" size={28} />

          <h2 className="text-xl font-semibold">
            My Profile
          </h2>

          <p className="mt-2 text-sm text-default-500">
            View and update your profile information.
          </p>

          <Link
            href="/profile"
            className="mt-5 inline-block"
          >
          <Button variant="outline">
  <span className="flex items-center gap-2">
    Open
    <ArrowRight size={16} />
  </span>
</Button>
          </Link>
        </Card>

        <Card className="p-6">
          <Users className="mb-4" size={28} />

          <h2 className="text-xl font-semibold">
            Collaboration
          </h2>

          <p className="mt-2 text-sm text-default-500">
            View and manage collaboration requests.
          </p>

          <Link
            href="/collaboration"
            className="mt-5 inline-block"
          >
            <Button variant="outline">
  <span className="flex items-center gap-2">
    Open
    <ArrowRight size={16} />
  </span>
</Button>
          </Link>
        </Card>

        <Card className="p-6">
          <Briefcase className="mb-4" size={28} />

          <h2 className="text-xl font-semibold">
            Manage Skills
          </h2>

          <p className="mt-2 text-sm text-default-500">
            View your listed skills.
          </p>

          <Link
            href="/items/manage"
            className="mt-5 inline-block"
          >
           <Button variant="outline">
  <span className="flex items-center gap-2">
    Open
    <ArrowRight size={16} />
  </span>
</Button>
          </Link>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold">
          Quick Overview
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border p-5">
            <p className="text-sm text-default-500">
              Skills
            </p>

            <h3 className="mt-2 text-3xl font-bold">
             {/* {session?.user.skills?.length || 0} */}
            </h3>
          </div>

          <div className="rounded-xl border p-5">
            <p className="text-sm text-default-500">
              Pending Requests
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              0
            </h3>
          </div>

          <div className="rounded-xl border p-5">
            <p className="text-sm text-default-500">
              Collaborations
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              0
            </h3>
          </div>
        </div>
      </Card>
    </div>
  );
}
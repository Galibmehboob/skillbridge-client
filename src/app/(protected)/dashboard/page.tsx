import { Card } from "@heroui/react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <h2 className="text-lg font-semibold">
            Profile
          </h2>

          <p className="mt-2 text-sm text-default-500">
            Manage your profile.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold">
            Collaboration
          </h2>

          <p className="mt-2 text-sm text-default-500">
            View collaboration requests.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold">
            Skills
          </h2>

          <p className="mt-2 text-sm text-default-500">
            Manage your skills.
          </p>
        </Card>
      </div>
    </div>
  );
}
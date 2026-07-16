"use client";

import { Card, Button } from "@heroui/react";

import { useMySkills } from "@/hooks/useMySkills";
import { useDeleteSkill } from "@/hooks/useDeleteSkill";
import { Skill } from "@/features/auth/types/skill";

export default function ManageSkillsPage() {
  const { data, isPending } =
    useMySkills();

  const { mutate: deleteSkill } =
    useDeleteSkill();

if (isPending) {
  return (
    <div className="space-y-4">
      <Card>
        <Card.Content className="h-28 animate-pulse" />
      </Card>

      <Card>
        <Card.Content className="h-28 animate-pulse" />
      </Card>

      <Card>
        <Card.Content className="h-28 animate-pulse" />
      </Card>
    </div>
  );
}

 const skills: Skill[] = data?.data ?? [];
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Manage Skills
        </h1>

        <p className="text-default-500">
          View and manage all of your
          listed skills.
        </p>
      </div>

      {skills.length === 0 && (
        <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold">
            No Skills Added
          </h2>

          <p className="mt-2 text-default-500">
            Add your first skill from
            the Add Skill page.
          </p>
        </Card>
      )}

      <div className="grid gap-5">
        {skills.map((skill) => (
          <Card
            key={skill._id}
            className="p-6"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div className="space-y-2">

                <h2 className="text-xl font-semibold">
                  {skill.title}
                </h2>

                <p className="text-default-500">
                  {skill.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 text-sm">

                  <span>
                    {skill.category}
                  </span>

                  <span>
                    •
                  </span>

                  <span>
                    {skill.level}
                  </span>

                  <span>
                    •
                  </span>

                  <span>
                    ${skill.hourlyRate}/hr
                  </span>

                </div>
              </div>

              <div className="flex gap-3">

                <Button
                  variant="secondary"
                >
                  View
                </Button>

                <Button
                  variant="danger-soft"
                  onPress={() =>
                    deleteSkill(
                      skill._id
                    )
                  }
                >
                  Delete
                </Button>

              </div>

            </div>
          </Card>
        ))}
      </div>

    </div>
  );
}
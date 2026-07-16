"use client";

import Link from "next/link";


import {
  Avatar,
  Button,
  Card,
} from "@heroui/react";

import { useUser } from "@/hooks/useUsers";
import { useSendCollaborationRequest } from "@/hooks/useSendCollaborationRequest";

import { toast } from "sonner";

type UserDetailsProps = {
  id: string;
};

export default function UserDetails({
  id,
}: UserDetailsProps) {
  

  const {
    data: user,
    isPending,
  } = useUser(id);

  const {
    mutate,
    isPending: isSending,
  } =
    useSendCollaborationRequest();

  const handleCollaborate = () => {
   mutate(user.userId, {
        onSuccess: () => {
          toast.success(
            "Collaboration request sent."
          );
        },

        onError: (
          error: Error
        ) => {
          toast.error(
            error.message
          );
        },
      }
    );
  };

  if (isPending) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-10">

        <Card>

          <Card.Content className="h-80 animate-pulse" />

        </Card>

      </section>
    );
  }
console.log(user);
  if (!user) {
    return (
      <section className="py-20 text-center">

        User not found.

      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">

      <Card>

        <Card.Content className="p-8">

          <div className="flex flex-col gap-8 lg:flex-row">

            <div className="flex flex-col items-center lg:w-72">

              <Avatar size="lg">

                {user.image ? (
                  <Avatar.Image
                    src={user.image}
                    alt={user.name}
                  />
                ) : null}

                <Avatar.Fallback>
                  {user.name
                    ?.charAt(0)
                    .toUpperCase()}
                </Avatar.Fallback>

              </Avatar>

              <h1 className="mt-5 text-3xl font-bold">

                {user.name}

              </h1>

              <p className="mt-2 text-default-500">

                {user.location ||
                  "Location not provided"}

              </p>
                            <div className="mt-6 flex w-full flex-col gap-3">

                <Button
                  variant="primary"
                  isDisabled={isSending}
                  onPress={handleCollaborate}
                >
                  {isSending
                    ? "Sending..."
                    : "Collaborate"}
                </Button>

                {user.portfolio && (
                  <Link
                    href={user.portfolio}
                    target="_blank"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      Portfolio
                    </Button>
                  </Link>
                )}

                {user.github && (
                  <Link
                    href={user.github}
                    target="_blank"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      GitHub
                    </Button>
                  </Link>
                )}

                {user.linkedin && (
                  <Link
                    href={user.linkedin}
                    target="_blank"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      LinkedIn
                    </Button>
                  </Link>
                )}

              </div>

            </div>

            <div className="flex-1">

              <h2 className="text-2xl font-bold">
                About
              </h2>

              <p className="mt-4 leading-7 text-default-600">
                {user.bio ||
                  "No biography has been added yet."}
              </p>

              <div className="mt-10">

                <h2 className="text-2xl font-bold">
                  Skills
                </h2>

                <div className="mt-6 grid gap-5"></div>                {user.skills &&
                user.skills.length > 0 ? (
                  user.skills.map(
                    (
                      skill: {
                        _id: string;
                        title: string;
                        category: string;
                        hourlyRate: number;
                        description: string;
                        portfolio?: string;
                        liveProject?: string;
                      }
                    ) => (
                      <Card
                        key={skill._id}
                      >
                        <Card.Content className="p-6">

                          <div className="flex items-start justify-between">

                            <div>

                              <h3 className="text-xl font-semibold">
                                {skill.title}
                              </h3>

                              <p className="mt-1 text-sm text-default-500">
                                {skill.category}
                              </p>

                            </div>

                            <span className="rounded-full border px-3 py-1 text-sm font-medium">
                              ${skill.hourlyRate}/hr
                            </span>

                          </div>

                          <p className="mt-5 text-default-600">
                            {skill.description}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-3">

                            {skill.portfolio && (
                              <Link
                                href={skill.portfolio}
                                target="_blank"
                              >
                                <Button variant="outline">
                                  Portfolio
                                </Button>
                              </Link>
                            )}

                            {skill.liveProject && (
                              <Link
                                href={skill.liveProject}
                                target="_blank"
                              >
                                <Button variant="outline">
                                  Live Project
                                </Button>
                              </Link>
                            )}

                          </div>

                        </Card.Content>
                      </Card>
                    )
                  )
                ) : (
                  <Card>
                    <Card.Content className="py-10 text-center">
                      <p className="text-default-500">
                        No skills added yet.
                      </p>
                    </Card.Content>
                  </Card>
                )}

              </div>

            </div>

          </div>

        </Card.Content>

      </Card>

    </section>
  );
}
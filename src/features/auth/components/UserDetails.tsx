"use client";

import { Avatar, AvatarFallback, AvatarImage, Button } from "@heroui/react";
import { toast } from "sonner";


import { useSendCollaborationRequest } from "@/hooks/useSendCollaborationRequest";
import { useUser } from "@/hooks/useUsers";

type Props = {
  id: string;
};

export default function UserDetails({ id }: Props) {
  const {
    data: user,
    isPending,
  } = useUser(id);

  const {
    mutateAsync: sendRequest,
    isPending: isSending,
  } = useSendCollaborationRequest();

  if (isPending) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="py-20 text-center">
        User not found
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="rounded-3xl border p-8">
        <div className="flex flex-col items-center">
          <Avatar className="h-32 w-32">
            {user.image && (
              <AvatarImage src={user.image} />
            )}

            <AvatarFallback>
              {user.name?.[0]}
            </AvatarFallback>
          </Avatar>

          <h1 className="mt-6 text-3xl font-bold">
            {user.name}
          </h1>

          <p className="mt-4 text-center">
            {user.bio}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {user.skills?.map((skill: string) => (
              <span
                key={skill}
                className="rounded-full bg-primary px-4 py-1 text-white"
              >
                {skill}
              </span>
            ))}
          </div>

          <Button
            className="mt-8"
            isPending={isSending}
            onPress={async () => {
              try {
                await sendRequest(user._id);

                toast.success(
                  "Collaboration request sent."
                );
              } catch (error) {
                toast.error(
                  error instanceof Error
                    ? error.message
                    : "Something went wrong."
                );
              }
            }}
          >
            Collaborate
          </Button>
        </div>
      </div>
    </section>
  );
}
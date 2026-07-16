"use client";

import Link from "next/link";

import {
  Avatar,
  Button,
  Card,
} from "@heroui/react";

import type { User } from "@/features/auth/types/user";

type Props = {
  user: User;
};

export default function UserCard({
  user,
}: Props) {
  return (
    <Card>
      <Card.Content className="p-6">

        <div className="flex flex-col items-center text-center">

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

          <h2 className="mt-4 text-xl font-semibold">
            {user.name}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm text-default-500">
            {user.bio ||
              "No bio added yet."}
          </p>

          <div className="mt-5 flex w-full flex-col gap-3 rounded-xl border p-4">

            <div className="flex items-center justify-between">

              <span className="text-sm text-default-500">
                Location
              </span>

              <span className="text-sm font-medium">
                {user.location ||
                  "Not provided"}
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-sm text-default-500">
                Email
              </span>

              <span className="max-w-[180px] truncate text-sm font-medium">
                {user.email}
              </span>

            </div>

          </div>

          <div className="mt-6 w-full">
            <Link
              href={`/users/${user._id}`}
              className="block w-full"
            >
              <Button
                className="w-full"
                variant="secondary"
              >
                View Profile
              </Button>
            </Link>
          </div>

        </div>

      </Card.Content>
    </Card>
  );
}
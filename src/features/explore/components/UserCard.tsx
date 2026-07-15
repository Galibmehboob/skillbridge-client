"use client";

import Link from "next/link";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
} from "@heroui/react";

type User = {
  _id: string;
  name: string;
  image?: string;
  bio?: string;
  location?: string;
  skills?: string[];
};

export default function UserCard({
  user,
}: {
  user: User;
}) {
  return (
    <div className="rounded-3xl border p-6 shadow-sm transition hover:shadow-lg">

      <div className="flex flex-col items-center">

        <Avatar className="h-20 w-20">

          {user.image && (
            <AvatarImage
              src={user.image}
            />
          )}

          <AvatarFallback>
            {user.name[0]}
          </AvatarFallback>

        </Avatar>

        <h2 className="mt-4 text-lg font-bold">
          {user.name}
        </h2>

        <p className="mt-2 text-center text-sm text-foreground/60">
          {user.bio || "No bio yet."}
        </p>

        <p className="mt-3 text-sm">
          📍 {user.location || "Unknown"}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">

          {user.skills?.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-primary px-3 py-1 text-xs text-white"
            >
              {skill}
            </span>
          ))}

        </div>

        <Link
          href={`/users/${user._id}`}
          className="mt-6 w-full"
        >
          <Button className="w-full">
            View Profile
          </Button>
        </Link>

      </div>
    </div>
  );
}
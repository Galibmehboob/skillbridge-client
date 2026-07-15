"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@heroui/react";

import { Camera } from "lucide-react";
import { motion } from "framer-motion";

import EditProfileButton from "./EditProfileButton";

type Profile = {
  name?: string;
  image?: string;
  bio?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  skills?: string[];
};

type Props = {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };

  profile?: Profile | null;
};

export default function ProfileHeader({
  user,
  profile,
}: Props) {
  const displayName = profile?.name || user.name;

  const displayImage = profile?.image || user.image;

  return (
    <>
      {/* Cover */}
      <div className="relative h-52 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="-mt-16 flex flex-col items-center gap-5 md:flex-row md:items-end"
      >
        {/* Avatar */}
        <div className="relative">
          <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
            {displayImage ? (
              <AvatarImage
                src={displayImage}
                alt={displayName}
              />
            ) : null}

            <AvatarFallback>
              {displayName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <button
            type="button"
            className="absolute bottom-1 right-1 rounded-full bg-primary p-2 text-white shadow-lg"
          >
            <Camera size={18} />
          </button>
        </div>

        {/* User Info */}
        <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl font-bold">
  {profile?.name || user.name}
</h1>

          <p className="mt-2 text-foreground/70">
            {user.email}
          </p>
        </div>

        {profile?.bio && (
  <p className="mt-3 max-w-xl text-sm text-foreground/70">
    {profile.bio}
  </p>
)}

        {/* Edit Button */}
        <EditProfileButton />
      </motion.div>
    </>
  );
}
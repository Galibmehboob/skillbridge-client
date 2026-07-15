"use client";

import { Mail, Calendar, Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@heroui/react";

type Profile = {
  bio?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  skills?: string[];
};

type Props = {
  user: {
    email: string;
    createdAt?: Date | string;
  };

  profile?: Profile | null;
};

export default function ProfileInfo({
  user,
  profile,
}: Props){
  const joined =
    user.createdAt
      ? new Date(user.createdAt).toLocaleDateString()
      : "Recently";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="mt-10 space-y-8"
    >
      {/* Info Cards */}
      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl border border-default-200 p-6">
          <div className="mb-3 flex items-center gap-2 font-semibold">
            <Mail size={18} />
            Email
          </div>

          <p className="text-sm text-foreground/70">
            {user.email}
          </p>
        </div>

        <div className="rounded-2xl border border-default-200 p-6">
          <div className="mb-3 flex items-center gap-2 font-semibold">
            <Calendar size={18} />
            Joined
          </div>

          <p className="text-sm text-foreground/70">
            {joined}
          </p>
        </div>

      </div>

      {/* Statistics */}

      <div className="grid gap-5 sm:grid-cols-3">

        <div className="rounded-2xl border p-6 text-center">
          <h2 className="text-3xl font-bold text-primary">
           {profile?.skills?.length || 0}
          </h2>

          <p className="mt-2 text-sm text-foreground/60">
            Skills
          </p>
        </div>

        <div className="rounded-2xl border p-6 text-center">
          <h2 className="text-3xl font-bold text-primary">
            0
          </h2>

          <p className="mt-2 text-sm text-foreground/60">
            Applications
          </p>
        </div>

        <div className="rounded-2xl border p-6 text-center">
          <h2 className="text-3xl font-bold text-primary">
            0
          </h2>

          <p className="mt-2 text-sm text-foreground/60">
            Connections
          </p>
        </div>

      </div>

      {/* Bio */}

      <div className="rounded-2xl border border-default-200 p-6">
        <h3 className="text-lg font-semibold">
          About Me
        </h3>

        <p className="mt-3 text-sm leading-7 text-foreground/70">
  {profile?.bio ||
    "Tell everyone about yourself."}
</p>
      </div>

      {/* Extra */}

      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl border border-default-200 p-6">
  <div className="mb-4 font-semibold">
    Skills
  </div>

  <div className="flex flex-wrap gap-2">
    {profile?.skills?.length ? (
      profile.skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full bg-primary px-3 py-1 text-sm text-white"
        >
          {skill}
        </span>
      ))
    ) : (
      <p className="text-sm text-foreground/60">
        No skills added yet.
      </p>
    )}
  </div>
</div>

        <div className="rounded-2xl border border-default-200 p-6">
          <div className="mb-3 flex items-center gap-2 font-semibold">
            <MapPin size={18} />
            Location
          </div>

          <p className="text-sm text-foreground/70">
          {profile?.location || "No location added yet."}
          </p>
        </div>

        <div className="rounded-2xl border border-default-200 p-6">
  <h3 className="mb-4 text-lg font-semibold">
    Social Links
  </h3>

  <div className="space-y-2 text-sm">
    {profile?.github && (
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-primary hover:underline"
      >
        GitHub
      </a>
    )}

    {profile?.linkedin && (
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-primary hover:underline"
      >
        LinkedIn
      </a>
    )}

    {profile?.portfolio && (
      <a
        href={profile.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-primary hover:underline"
      >
        Portfolio
      </a>
    )}
  </div>
</div>

<div className="mb-6">
  <Link href="/">
    <Button
      variant="outline"
      className="flex items-center gap-2 rounded-full"
    >
      <ArrowLeft size={18} />
      Back to Home
    </Button>
  </Link>
</div>

      </div>
    </motion.div>
  );
}
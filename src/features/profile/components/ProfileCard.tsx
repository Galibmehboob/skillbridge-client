"use client";


import { useSession } from "@/lib/auth-client";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import { useMyProfile } from "@/hooks/useMyProfile";



export default function ProfileCard() {

const { data: profile, isPending: profileLoading } =
  useMyProfile  ();


  const { data: session, isPending } = useSession();

  if (isPending || profileLoading) {
    return (
      <div className="mx-auto mt-20 max-w-4xl animate-pulse rounded-3xl border p-8">
        <div className="h-28 w-28 rounded-full bg-default-200" />

        <div className="mt-6 h-6 w-52 rounded bg-default-200" />

        <div className="mt-3 h-4 w-72 rounded bg-default-200" />
      </div>
    );
  }

  if (!session) return null;

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="rounded-3xl border border-default-200 bg-background p-8 shadow-xl">
      <ProfileHeader
  user={session.user}
  profile={profile}
/>

<ProfileInfo
  user={session.user}
  profile={profile}
/>
        
      </div>
    </section>
  );
}
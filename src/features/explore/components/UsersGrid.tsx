"use client";

import { useState } from "react";

import { useUsers } from "@/hooks/useUsers";
import { Button, Pagination } from "@heroui/react";
import UserCard from "./UserCard";
import ExploreFilters from "./ExploreFilters";
import { User } from "@/features/auth/types/user";




export default function UsersGrid() {
  const [search, setSearch] = useState("");

  const [skill, setSkill] = useState("");

  const [page, setPage] = useState(1);

  const { data, isPending } = useUsers({
    search,
    skill,
    page,
  });
const pagination = data?.pagination;
  if (isPending) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">

      <ExploreFilters
        search={search}
        setSearch={setSearch}
        skill={skill}
        setSkill={setSkill}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    {data?.data?.map((user: User) => (
  <UserCard
    key={user._id}
    user={user}
  />
))}

      </div>

    <div className="mt-10 flex items-center justify-center gap-4">
  <Button
    variant="outline"
    isDisabled={page === 1}
    onPress={() => setPage((prev) => prev - 1)}
  >
    Previous
  </Button>

  <div className="rounded-xl border px-4 py-2 text-sm font-semibold">
    Page {page} of {pagination?.totalPages ?? 1}
  </div>

  <Button
    variant="outline"
    isDisabled={page >= (pagination?.totalPages ?? 1)}
    onPress={() => setPage((prev) => prev + 1)}
  >
    Next
  </Button>
</div>
    </section>
  );
}
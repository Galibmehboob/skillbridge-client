"use client";

import { useState } from "react";

import {
  Button,
  Card,
} from "@heroui/react";

import ExploreFilters from "./ExploreFilters";
import UserCard from "./UserCard";

import { useUsers } from "@/hooks/useUsers";
import type { User } from "@/features/auth/types/user";

export default function UsersGrid() {
  const [search, setSearch] =
    useState("");

  const [skill, setSkill] =
    useState("");

  const [page, setPage] =
    useState(1);

  const {
    data,
    isPending,
  } = useUsers({
    search,
    skill,
    page,
  });

  if (isPending) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Explore Developers
          </h1>

          <p className="mt-2 text-default-500">
            Find talented developers and
            collaborate on exciting
            projects.
          </p>
        </div>

        <ExploreFilters
          search={search}
          setSearch={setSearch}
          skill={skill}
          setSkill={setSkill}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {Array.from({
            length: 6,
          }).map((_, index) => (
            <Card key={index}>
              <Card.Content className="h-72 animate-pulse" />
            </Card>
          ))}

        </div>

      </section>
    );
  }

  const users =
    data?.data ?? [];

 const pagination = data?.meta;

      return (
    <section className="mx-auto max-w-7xl px-4 py-16">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Explore Developers
        </h1>

        <p className="mt-2 text-default-500">
          Discover developers, explore their
          profiles and start collaborating.
        </p>
      </div>

      <ExploreFilters
        search={search}
        setSearch={setSearch}
        skill={skill}
        setSkill={setSkill}
      />

      {users.length === 0 ? (
        <Card>
          <Card.Content className="py-16 text-center">

            <h2 className="text-xl font-semibold">
              No developers found
            </h2>

            <p className="mt-2 text-default-500">
              Try changing your search or
              skill filter.
            </p>

          </Card.Content>
        </Card>
      ) : (
        <>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {users.map((user: User) => (
              <UserCard
                key={user._id}
                user={user}
              />
            ))}

          </div>

          <div className="mt-12 flex items-center justify-center gap-4">

            <Button
              variant="outline"
              isDisabled={page <= 1}
              onPress={() =>
                setPage((prev) => prev - 1)
              }
            >
              Previous
            </Button>

            <div className="rounded-xl border px-5 py-2 text-sm font-medium">

              Page {page} of{" "}
              {pagination?.totalPage ?? 1}

            </div>

            <Button
              variant="outline"
              isDisabled={
                page >=
                (pagination?.totalPage ??
                  1)
              }
              onPress={() =>
                setPage((prev) => prev + 1)
              }
            >
              Next
            </Button>

          </div>

        </>
      )}

    </section>
  );
}
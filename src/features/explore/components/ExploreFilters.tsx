"use client";

import { Input } from "@heroui/react";

type Props = {
  search: string;
  setSearch: (v: string) => void;

  skill: string;
  setSkill: (v: string) => void;
};

export default function ExploreFilters({
  search,
  setSearch,
  skill,
  setSkill,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2">

      <Input
        value={search}
        placeholder="Search users..."
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <Input
        value={skill}
        placeholder="Skill..."
        onChange={(e) =>
          setSkill(e.target.value)
        }
      />

    </div>
  );
}
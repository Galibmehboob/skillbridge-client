"use client";

import {
  Button,
  Input,
  Label,
  ListBox,
  Select,
} from "@heroui/react";

type Props = {
  search: string;
  setSearch: (value: string) => void;

  skill: string;
  setSkill: (value: string) => void;
};

const skillOptions = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "UI/UX",
];

export default function ExploreFilters({
  search,
  setSearch,
  skill,
  setSkill,
}: Props) {
  return (
    <div className="rounded-3xl border p-6">

      <div className="grid gap-5 lg:grid-cols-3">

        {/* Search */}

        <div className="space-y-2">

          <Label>Search Developer</Label>

          <Input
            value={search}
            placeholder="Name..."
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* Skill */}

        <div className="space-y-2">

          <Label>Skill</Label>

          <Select
            placeholder="Select Skill"
            selectedKey={
              skill || undefined
            }
          onSelectionChange={(key) => {
  setSkill(key ? String(key) : "");
}}
          >
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>

              <ListBox>

                {skillOptions.map(
                  (item) => (
                    <ListBox.Item
                      key={item}
                      id={item}
                      textValue={item}
                    >
                      {item}

                      <ListBox.ItemIndicator />

                    </ListBox.Item>
                  )
                )}

              </ListBox>

            </Select.Popover>

          </Select>

        </div>

        {/* Clear */}

        <div className="flex items-end">

          <Button
            variant="outline"
            className="w-full"
            onPress={() => {
              setSearch("");
              setSkill("");
            }}
          >
            Clear Filters
          </Button>

        </div>

      </div>

    </div>
  );
}
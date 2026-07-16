"use client";

import { useState, ChangeEvent } from "react";
import { 
  Button, 
  Card, 
  Input, 
  Select, 
  ListBox, 
  Label, 
  TextArea 
} from "@heroui/react";

import { useAddSkill } from "@/hooks/useAddSkill";

const categories = [
  "Frontend",
  "Backend",
  "Full Stack",
  "UI/UX",
  "Mobile",
  "DevOps",
] as const;

const levels = [
  "Beginner",
  "Intermediate",
  "Advanced",
] as const;

const availability = [
  "Available",
  "Busy",
  "Unavailable",
] as const;

export default function AddSkillPage() {
  const { mutate, isPending } = useAddSkill();

  const [form, setForm] = useState({
    category: "",
    title: "",
    level: "",
    hourlyRate: "",
    shortDescription: "",
    description: "",
    portfolio: "",
    liveProject: "",
    github: "",
    technologies: "",
    availability: "Available",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    mutate({
      category: form.category,
      title: form.title,
      level: form.level,
      hourlyRate: Number(form.hourlyRate),
      shortDescription: form.shortDescription,
      description: form.description,
      portfolio: form.portfolio,
      liveProject: form.liveProject,
      github: form.github,
      technologies: form.technologies
        .split(",")
        .map((item) => item.trim()),
      availability: form.availability as
        | "Available"
        | "Busy"
        | "Unavailable",
    });
  };

  return (
    <div className="mx-auto max-w-5xl">
      <Card className="space-y-6 p-8">
        <h1 className="text-3xl font-bold">
          Add New Skill
        </h1>

        <div className="grid gap-5 md:grid-cols-2">
          
          {/* Category Select */}
          <Select
            className="w-full"
            placeholder="Select Category"
            selectedKey={form.category}
            onSelectionChange={(key) =>
              handleChange("category", String(key))
            }
          >
            <Label>Category</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {categories.map((item) => (
                  <ListBox.Item key={item} id={item} textValue={item}>
                    {item}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Skill Title */}
          <Input
            placeholder="Skill Title"
            value={form.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("title", e.target.value)
            }
          />

          {/* Experience Level Select */}
          <Select
            className="w-full"
            placeholder="Select Level"
            selectedKey={form.level}
            onSelectionChange={(key) =>
              handleChange("level", String(key))
            }
          >
            <Label>Experience Level</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {levels.map((item) => (
                  <ListBox.Item key={item} id={item} textValue={item}>
                    {item}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Hourly Rate */}
          <Input
            type="number"
            placeholder="Hourly Rate ($)"
            value={form.hourlyRate}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("hourlyRate", e.target.value)
            }
          />

          {/* Portfolio URL */}
          <Input
            placeholder="Portfolio URL"
            value={form.portfolio}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("portfolio", e.target.value)
            }
          />

          {/* Live Project URL */}
          <Input
            placeholder="Live Project URL"
            value={form.liveProject}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("liveProject", e.target.value)
            }
          />

          {/* GitHub Repository URL */}
          <Input
            placeholder="GitHub Repository URL"
            value={form.github}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("github", e.target.value)
            }
          />

          {/* Technologies */}
          <Input
            placeholder="Technologies (React, Next.js, MongoDB)"
            value={form.technologies}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("technologies", e.target.value)
            }
          />

          {/* Availability Select */}
          <Select
            className="w-full"
            placeholder="Select Availability"
            selectedKey={form.availability}
            onSelectionChange={(key) =>
              handleChange("availability", String(key))
            }
          >
            <Label>Availability</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {availability.map((item) => (
                  <ListBox.Item key={item} id={item} textValue={item}>
                    {item}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* Short Description */}
        <Input
          placeholder="Short Description"
          value={form.shortDescription}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("shortDescription", e.target.value)
          }
        />

        {/* Full Description */}
        <TextArea
          placeholder="Describe your skill, experience and services..."
          value={form.description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            handleChange("description", e.target.value)
          }
          rows={6}
        />

        {/* Submit Button */}
        <Button
          onPress={handleSubmit}
          isDisabled={isPending}
        >
          {isPending ? "Adding Skill..." : "Add Skill"}
        </Button>
      </Card>
    </div>
  );
}
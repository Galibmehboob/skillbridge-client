import { z } from "zod";

export const profileSchema = z.object({
  image: z.string().optional(),

  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  bio: z
    .string()
    .max(300, "Bio cannot exceed 300 characters")
    .optional(),

  location: z.string().optional(),

  github: z
    .string()
    .url("Invalid Github URL")
    .or(z.literal(""))
    .optional(),

  linkedin: z
    .string()
    .url("Invalid LinkedIn URL")
    .or(z.literal(""))
    .optional(),

  portfolio: z
    .string()
    .url("Invalid Portfolio URL")
    .or(z.literal(""))
    .optional(),

 skills: z.array(z.string()).optional(),
});

export type ProfileFormValues = z.infer<
  typeof profileSchema
>;
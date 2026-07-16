"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  addSkill,
  AddSkillPayload,
} from "@/services/skill.service";

export const useAddSkill = () => {
  return useMutation({
    mutationFn: (
      payload: AddSkillPayload
    ) => addSkill(payload),

    onSuccess: () => {
      toast.success(
        "Skill added successfully"
      );
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
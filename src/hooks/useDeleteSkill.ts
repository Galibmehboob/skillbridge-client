"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import { deleteSkill } from "@/services/skill.service";

export const useDeleteSkill = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: deleteSkill,

    onSuccess: () => {
      toast.success(
        "Skill deleted"
      );

      queryClient.invalidateQueries({
        queryKey: ["my-skills"],
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
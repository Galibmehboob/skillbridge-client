"use client";

import { updateMyProfile } from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMyProfile,

    onSuccess: () => {
      toast.success("Profile updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["my-profile"],
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
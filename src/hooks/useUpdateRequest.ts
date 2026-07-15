"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateRequest } from "@/services/collaboration.service";

export const useUpdateRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: "accepted" | "rejected";
    }) => updateRequest(id, status),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["received-requests"],
      });
    },
  });
};
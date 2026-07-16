"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import {
  acceptRequest,
  rejectRequest,
} from "@/services/collaboration.service";

export const useUpdateRequest = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status:
        | "accepted"
        | "rejected";
    }) =>
      status === "accepted"
        ? acceptRequest(id)
        : rejectRequest(id),

    onSuccess: () => {
      toast.success("Updated");

      queryClient.invalidateQueries({
        queryKey: [
          "received-requests",
        ],
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
"use client";

import { useMutation } from "@tanstack/react-query";

import { sendCollaborationRequest } from "@/services/collaboration.service";

export const useSendCollaborationRequest =
  () => {
    return useMutation({
      mutationFn: sendCollaborationRequest,
    });
  };
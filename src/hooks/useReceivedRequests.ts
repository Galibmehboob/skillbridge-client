"use client";

import { useQuery } from "@tanstack/react-query";
import { getReceivedRequests } from "@/services/collaboration.service";

export const useReceivedRequests = () => {
  return useQuery({
    queryKey: ["received-requests"],
    queryFn: getReceivedRequests,
  });
};
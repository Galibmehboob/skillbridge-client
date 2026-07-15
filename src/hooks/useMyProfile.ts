"use client";

import { getMyProfile } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useUpdateProfile } from "@/hooks/useUpdateProfile";



export const useMyProfile = () => {
  
  return useQuery({
    queryKey: ["my-profile"],
    queryFn: getMyProfile,
  });
};
"use client";

import { useQuery } from "@tanstack/react-query";

import { getMySkills } from "@/services/skill.service";

export const useMySkills = () => {
  return useQuery({
    queryKey: ["my-skills"],
    queryFn: getMySkills,
  });
};
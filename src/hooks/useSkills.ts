"use client";

import { useQuery } from "@tanstack/react-query";

import { getAllSkills } from "@/services/skill.service";

export const useSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: getAllSkills,
  });
};
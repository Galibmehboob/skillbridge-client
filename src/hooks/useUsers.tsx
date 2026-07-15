"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser, getUsers } from "@/services/user.service";

type Props = {
  search?: string;
  skill?: string;
  page?: number;
};

export const useUsers = ({
    
  search = "",
  skill = "",
  page = 1,
}: Props) => {
  return useQuery({
    queryKey: [
      "users",
      search,
      skill,
      page,
    ],

    queryFn: () =>
      getUsers({
        search,
        skill,
        page,
      }),
      
  });
};


export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],

    queryFn: () => getUser(id),

    enabled: !!id,
  });
};
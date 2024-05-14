/* eslint-disable react-hooks/rules-of-hooks */
import { useSuspenseQuery } from "@tanstack/react-query";

import { getFestiavalByUniversity } from "@/api/univ";

export const useQueryFestivalInfoByUniversity = (id: string | null) => {
  if (!id) return { data: null };

  const { data, error } = useSuspenseQuery({
    queryKey: ["festival-info", id],
    queryFn: () => getFestiavalByUniversity(id),
    staleTime: 10000,
    gcTime: 300000,
  });

  if (error) {
    throw error;
  }

  return { data };
};

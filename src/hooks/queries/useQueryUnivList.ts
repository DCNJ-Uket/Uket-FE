import { useSuspenseQuery } from "@tanstack/react-query";

import { getFestivalUniversityList } from "@/api/univ";

export const useQueryUnivList = () => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["univ-search"],
    queryFn: getFestivalUniversityList,
    staleTime: 10000,
    gcTime: 300000,
  });

  if (error) {
    throw error;
  }

  const univList = Array.isArray(data) ? data : [];

  return { data: univList };
};

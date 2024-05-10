import { useSuspenseQuery } from "@tanstack/react-query";

import { getFestivalUniversityList } from "@/api/univ";

export const useQueryFestivalUnivList = () => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["univ-select"],
    queryFn: getFestivalUniversityList,
    staleTime: 20000,
    gcTime: 300000,
  });

  if (error) {
    throw error;
  }

  const univList = Array.isArray(data) ? data : [];

  return { data: univList };
};

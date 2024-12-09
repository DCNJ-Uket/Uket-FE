import { useSuspenseQuery } from "@tanstack/react-query";

import { getFestivalUniversityList } from "@/api/univ";

export const useQueryFestivalUnivList = () => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["univ-select"],
    queryFn: getFestivalUniversityList,
  });

  if (error) {
    throw error;
  }
  
  return { data };
};

import { useQuery } from "@tanstack/react-query";

import { searchUniversityList } from "@/api/univ";

export const useQueryUniversityList = () => {
  const { data, error } = useQuery({
    queryKey: ["university-list"],
    queryFn: searchUniversityList,
  });

  if (error) {
    throw error;
  }

  return { data: data || [] };
};

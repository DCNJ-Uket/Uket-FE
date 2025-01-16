import { useQuery } from "@tanstack/react-query";

import { searchUniversityList } from "@/api/univ";

export const useQueryUniversityList = () => {
  const { data } = useQuery({
    queryKey: ["university-list"],
    queryFn: searchUniversityList,
  });
  
  return { data: data || [] };
};

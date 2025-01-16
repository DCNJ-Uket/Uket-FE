 
import { useSuspenseQuery } from "@tanstack/react-query";

import { getFestiavalByUniversity } from "@/api/univ";

export const useQueryFestivalInfoByUniversity = (id: string | null) => {
  const { data } = useSuspenseQuery({
    queryKey: ["festival-info", id],
    queryFn: () => getFestiavalByUniversity(id),
  });

  return { data };
};

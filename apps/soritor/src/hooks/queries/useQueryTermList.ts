import { useSuspenseQuery } from "@tanstack/react-query";

import { getTermList } from "@/api/term";

export const useQueryTermList = () => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["term-list"],
    queryFn: getTermList,
  });

  if (error) {
    throw error;
  }

  return { data };
};

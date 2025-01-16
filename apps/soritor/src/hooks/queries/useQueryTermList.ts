import { useSuspenseQuery } from "@tanstack/react-query";

import { getTermList } from "@/api/term";

export const useQueryTermList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["term-list"],
    queryFn: getTermList,
  });

  return { data };
};

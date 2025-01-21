import { useSuspenseQuery } from "@tanstack/react-query";
import { createQueryKeys } from "@lukemorales/query-key-factory";

import { getTermList } from "@/api/term";

export const term = createQueryKeys("term", {
  list: () => ({
    queryKey: ["term-list"],
    queryFn: getTermList,
  }),
});

/**
 * 약관 목록을 조회합니다.
 * @returns {Term[]}
 */
export const useQueryTermList = () => {
  return useSuspenseQuery(term.list());
};

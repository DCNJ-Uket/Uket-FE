import { useQuery } from "@tanstack/react-query";

import { MajorInfo, UniversityInfo } from "@/types/univType";

import { useDebounce } from "../useDebounce";

export const useQueryUnivOrMajor = <T extends UniversityInfo | MajorInfo>(
  query: string,
  callback: (query: string) => Promise<T[]>,
) => {
  const debouncedQuery = useDebounce(query, 500);

  const { data, error } = useQuery<T[] | undefined, Error>({
    queryKey: ["univ-or-major", debouncedQuery],
    queryFn: () => callback(debouncedQuery),
    enabled: !!debouncedQuery,
  });

  if (error) {
    throw error;
  }

  return { data: data || [] };
};

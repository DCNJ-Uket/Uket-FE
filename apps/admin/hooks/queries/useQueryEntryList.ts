import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getEntryList } from "@/api/entry";

import { formatDate } from "@uket/util/time";

export const useQueryEntryList = ({ page = 1 }: { page: number }) => {
  const {
    isPending,
    isError,
    error,
    data,
    isFetching,
    isPlaceholderData,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["entry-list", page],
    queryFn: () => getEntryList({ page }),
    placeholderData: keepPreviousData,
    select: data => {
      const newContent = data.content.map(item => {
        return {
          ...item,
          enterTime: formatDate(item.enterTime, "fullCompact"),
          ticketDate: formatDate(item.ticketDate, "fullCompact"),
        };
      });

      return {
        ...data,
        content: newContent,
      };
    },
    refetchInterval: 1000 * 10,
    throwOnError: false,
  });

  return {
    isPending,
    isError,
    data,
    error,
    isFetching,
    isPlaceholderData,
    refetch,
    isRefetching,
  };
};

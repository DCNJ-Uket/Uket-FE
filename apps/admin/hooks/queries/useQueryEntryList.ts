import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getEntryList } from "@/api/entry";

import { useFormat } from "@/hooks/useFormat";

export const useQueryEntryList = ({ page = 1 }: { page: number }) => {
  const { handleFormatDate } = useFormat();

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
        const formattedEnterTime = handleFormatDate(item.enterTime);
        const formattedTicketDate = handleFormatDate(item.ticketDate);
        return {
          ...item,
          enterTime: formattedEnterTime,
          ticketDate: formattedTicketDate,
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

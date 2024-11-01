import dayjs from "dayjs";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getEntryList } from "@/api/entry";

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
        const formattedEnterTime = dayjs(item.enterTime).format(
          "YY.MM.DD HH:mm",
        );
        const formattedTicketDate = dayjs(item.ticketDate).format(
          "YY.MM.DD HH:mm",
        );
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

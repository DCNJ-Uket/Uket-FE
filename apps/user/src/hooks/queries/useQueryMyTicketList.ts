import { useSuspenseQuery } from "@tanstack/react-query";

import { formatDate } from "@/utils/handleTicket";

import { getMyTicketList } from "@/api/ticket";

export const useQueryMyTicketList = () => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["my-ticket-list"],
    queryFn: () => getMyTicketList(),
    select: data => {
      return data.items.map(item => ({
        ...item,
        createdAt: formatDate(item.createdAt, "full"),
        showDate: formatDate(item.showDate, "short"),
        enterStartTime: formatDate(item.enterStartTime, "time"),
        enterEndTime: formatDate(item.enterEndTime, "time"),
      }));
    },
  });

  if (error) {
    throw error;
  }

  return { data };
};

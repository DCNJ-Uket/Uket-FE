import { useSuspenseQuery } from "@tanstack/react-query";

import { getTicketList } from "@/api/ticket";

export const useQueryTicketList = () => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["ticket-list"],
    queryFn: () => getTicketList(),
  });

  if (error) {
    throw error;
  }
  return { data };
};

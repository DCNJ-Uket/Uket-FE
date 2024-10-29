import { useQuery } from "@tanstack/react-query";

import { getTicketList } from "@/api/ticket";

export const useQueryTicketList = (page: number = 1, options = {}) => {
  const { data, error, refetch } = useQuery({
    queryKey: ["ticket-list", page],
    queryFn: () => getTicketList(page),
    ...options,
  });

  if (error) {
    throw error;
  }
  return { data, refetch };
};

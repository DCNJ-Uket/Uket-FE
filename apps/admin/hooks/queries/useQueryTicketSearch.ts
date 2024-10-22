import { useQuery } from "@tanstack/react-query";

import { getSearchTicket } from "@/api/ticket";

export const useQueryTicketSearch = (searchType: string, value: string) => {
  const { data, error, refetch } = useQuery({
    queryKey: ["ticket-search"],
    queryFn: () => getSearchTicket(searchType, value),
    enabled: false,
  });

  if (error) {
    throw error;
  }
  return { data, refetch };
};

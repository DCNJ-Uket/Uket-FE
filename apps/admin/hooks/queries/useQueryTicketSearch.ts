import { useQuery } from "@tanstack/react-query";

import { getSearchTicket } from "@/api/ticket";

export const useQueryTicketSearch = (
  searchType: string,
  value: string,
  page: number = 1,
  options = {},
) => {
  const { data, error, refetch } = useQuery({
    queryKey: ["ticket-search", searchType, value, page],
    queryFn: () => getSearchTicket(searchType, value, page),
    ...options,
  });

  if (error) {
    throw error;
  }
  return { data, refetch };
};

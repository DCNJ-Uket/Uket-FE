import { useSuspenseQuery } from "@tanstack/react-query";

import { getTicketingList } from "@/api/show";

export const useQueryTicketingList = (id: string | null) => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["ticketing-info", id],
    queryFn: () => getTicketingList(id),
  });

  if (error) {
    throw error;
  }

  return { data };
};

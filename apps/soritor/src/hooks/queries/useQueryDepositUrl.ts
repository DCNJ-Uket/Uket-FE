import { useQuery } from "@tanstack/react-query";

import { getDepositUrl } from "@/api/ticket";

import { TicketItem } from "@/types/ticketType";


export const useQueryDepositUrl = (
  eventId: TicketItem["eventId"],
  ticketStatus: TicketItem["ticketStatus"],
) => {
  const { data, error } = useQuery({
    queryKey: ["deposit", eventId],
    queryFn: () => getDepositUrl(eventId),
    enabled: !!eventId && ticketStatus === "입금 확인중",
  });

  if (error) throw error;

  return { data };
};

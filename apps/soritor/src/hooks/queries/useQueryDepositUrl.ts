import { useQuery } from "@tanstack/react-query";

import { getDepositUrl } from "@/api/ticket";

import { TicketItem } from "@/types/ticketType";


export const useQueryDepositUrl = (
  ticketId: TicketItem["ticketId"],
  ticketStatus: TicketItem["ticketStatus"],
) => {
  const { data, error } = useQuery({
    queryKey: ["deposit-url", ticketId],
    queryFn: () => getDepositUrl(ticketId),
    enabled: !!ticketId && ticketStatus === "입금 확인중",
  });

  if (error) throw error;

  return { data };
};

import { useQuery } from "@tanstack/react-query";

import { getTicketQRCode } from "@/api/ticket";

import { TicketItem } from "@/types/ticketType";

import { createBlobURL } from "@/utils/handleTicket";

export const useQueryTicketQRCode = (
  ticketId: TicketItem["ticketId"],
  ticketStatus: TicketItem["ticketStatus"],
) => {
  const { data, refetch } = useQuery({
    queryKey: ["qrcode", ticketId],
    queryFn: () => getTicketQRCode(ticketId),
    select: data => {
      return createBlobURL(data);
    },
    staleTime: 0,
    enabled: !!ticketId && ticketStatus !== "입금 확인중",
  });

  return { data, refetch };
};

import { useQuery } from "@tanstack/react-query";

import { getTicketQRCode } from "@/api/ticket";

import { TicketItem } from "@/types/ticketType";

import { createBlobURL } from "@/utils/handleTicket";


export const useQueryTicketQRCode = (
  ticketId: TicketItem["ticketId"],
  ticketStatus: TicketItem["ticketStatus"],
) => {
  const { data, error, refetch } = useQuery({
    queryKey: ["qrcode", ticketId],
    queryFn: () => getTicketQRCode(ticketId),
    select: data => {
      return createBlobURL(data);
    },
    enabled: !!ticketId && ticketStatus !== "입금 확인중",
  });

  if (error) {
    throw error;
  }

  return { data, refetch };
};

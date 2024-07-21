import { useQuery } from "@tanstack/react-query";

import { TicketItem } from "@/types/ticketType";

import { createBlobURL } from "@/utils/handleTicket";

import { getTicketQRCode } from "@/api/ticket";

export const useQueryTicketQRCode = (ticketId: TicketItem["ticketId"]) => {
  const { data, error, refetch } = useQuery({
    queryKey: ["qrcode", ticketId],
    queryFn: () => getTicketQRCode(ticketId),
    select: data => {
      return createBlobURL(data);
    },
  });

  if (error) {
    throw error;
  }

  return { data, refetch };
};

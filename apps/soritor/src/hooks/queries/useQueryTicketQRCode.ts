import { useSuspenseQuery } from "@tanstack/react-query";

import { getTicketQRCode } from "@/api/ticket";

import { TicketItem } from "@/types/ticketType";

import { createBlobURL } from "@/utils/handleTicket";


export const useQueryTicketQRCode = (ticketId: TicketItem["ticketId"]) => {
  const { data, error, refetch } = useSuspenseQuery({
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

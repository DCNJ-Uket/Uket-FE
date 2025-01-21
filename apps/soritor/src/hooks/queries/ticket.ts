import { useQuery } from "@tanstack/react-query";
import { createQueryKeys } from "@lukemorales/query-key-factory";

import { getTicketQRCode } from "@/api/ticket";

import { TicketItem } from "@/types/ticketType";

import { createBlobURL } from "@/utils/handleTicket";

export const ticket = createQueryKeys("ticket", {
  qrcode: (ticketId: TicketItem["ticketId"]) => ({
    queryKey: ["qrcode", ticketId],
    queryFn: () => getTicketQRCode(ticketId),
  }),
});

/**
 * 공연 티켓의 QR 코드를 발급받습니다.
 * @param {TicketItem["ticketId"]} ticketId
 * @param {TicketItem["ticketStatus"]} ticketStatus
 * @returns {any}
 */
export const useQueryTicketQrcode = (
  ticketId: TicketItem["ticketId"],
  ticketStatus: TicketItem["ticketStatus"],
) => {
  return useQuery({
    ...ticket.qrcode(ticketId),
    select: data => createBlobURL(data),
    staleTime: 0,
    enabled: !!ticketId && ticketStatus !== "입금 확인중",
  });
};

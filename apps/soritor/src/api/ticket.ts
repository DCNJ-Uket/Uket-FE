import {
  DepositResponse,
  MyTicketListInfoResponse,
  MyTicketQRCodeResponse,
  TicketItem,
} from "@/types/ticketType";

import { fetcher } from "./instance";

export const getTicketQRCode = async (ticketId: TicketItem["ticketId"]) => {
  const { data } = await fetcher.get<MyTicketQRCodeResponse>(
    `/tickets/${ticketId}/qrcode`,
    {
      mode: "BOUNDARY",
      responseType: "blob",
    },
  );

  return data;
};

export const getMyTicketList = async () => {
  const { data } =
    await fetcher.get<MyTicketListInfoResponse>("/users/tickets");

  return data;
};

export const cancelTicket = async (ticketId: TicketItem["ticketId"]) => {
  const { data } = await fetcher.delete(`/tickets/${ticketId}/cancel`, {
    mode: "TOAST_UI",
    errorContent: {
      title: '티켓 취소 오류',
      description: '잠시 후 다시 시도해 주세요.'
    }
  });

  return data;
};

export const getDepositUrl = async (ticketId: TicketItem["ticketId"]) => {
  const { data } = await fetcher.get<DepositResponse>(
    `/events/${ticketId}/account`,
  );

  return data;
};

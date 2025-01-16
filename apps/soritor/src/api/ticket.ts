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
  const { data } = await fetcher.delete(`/tickets/${ticketId}/cancel`);

  return data;
};

export const getDepositUrl = async (ticketId: TicketItem["ticketId"]) => {
  const { data } = await fetcher.get<DepositResponse>(
    `/events/${ticketId}/account`,
  );

  return data;
};

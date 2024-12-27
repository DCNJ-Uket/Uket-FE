import {
  DepositResponse,
  MyTicketListInfoResponse,
  MyTicketQRCodeResponse,
  TicketItem,
} from "@/types/ticketType";

import { instance } from "./instance";

export const getTicketQRCode = async (ticketId: TicketItem["ticketId"]) => {
  const { data } = await instance.get<MyTicketQRCodeResponse>(
    `/tickets/${ticketId}/qrcode`,
    {
      responseType: "blob",
    },
  );

  return data;
};

export const getMyTicketList = async () => {
  const { data } =
    await instance.get<MyTicketListInfoResponse>("/users/tickets");

  return data;
};

export const cancelTicket = async (ticketId: TicketItem["ticketId"]) => {
  const { data } = await instance.delete(`/tickets/${ticketId}/cancel`);

  return data;
};

export const getDepositUrl = async (ticketId: TicketItem["ticketId"]) => {
  const { data } = await instance.get<DepositResponse>(
    `/events/${ticketId}/account`,
  );

  return data;
};

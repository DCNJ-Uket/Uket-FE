import { TicketQrCodeResponse } from "@/types/ticketType";

import { instance } from "./instance";

export const scanQrCode = async (token: string) => {
  const { data } = await instance.get<TicketQrCodeResponse>(
    `/ticket/${token}/enter`,
  );

  return data;
};

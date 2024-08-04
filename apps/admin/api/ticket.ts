import { TicketQrCodeResponse } from "@/types/ticketType";

import { instance } from "./instance";

export const scanQrCode = async (token: string | null) => {
  const { data } = await instance.get<TicketQrCodeResponse>(
    `/ticket/${token}/enter`,
  );

  return data;
};

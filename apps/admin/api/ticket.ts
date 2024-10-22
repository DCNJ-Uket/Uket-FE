import {
  getSearchRequest,
  TicketListResponse,
  TicketQrCodeResponse,
} from "@/types/ticketType";

import { instance } from "./instance";

export const scanQrCode = async (token: string | null) => {
  const { data } = await instance.get<TicketQrCodeResponse>(
    `/ticket/${token}/enter`,
  );

  return data;
};

export const getTicketList = async () => {
  const { data } = await instance.get<TicketListResponse>(`/ticket/search/all`);

  return data;
};

export const getSearchTicket = async (searchType: string, value: string) => {
  const searchRequest = getSearchRequest(searchType, value);
  const { data } = await instance.get<TicketListResponse>(`/ticket/search`, {
    params: {
      searchType: searchType,
      [searchRequest.type]: searchRequest.value,
    },
  });

  return data;
};

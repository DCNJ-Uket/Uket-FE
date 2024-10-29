import {
  ChangeTicketParams,
  ChangeTicketResponse,
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

export const getTicketList = async (page: number) => {
  const { data } = await instance.get<TicketListResponse>(
    `/ticket/search/all`,
    {
      params: { page: page },
    },
  );

  return data;
};

export const getSearchTicket = async (
  searchType: string,
  value: string,
  page: number,
) => {
  const searchRequest = getSearchRequest(searchType, value);
  if (searchRequest !== null) {
    const { data } = await instance.get<TicketListResponse>(`/ticket/search`, {
      params: {
        searchType: searchType,
        [searchRequest.type]: searchRequest.value,
        page: page,
      },
    });

    return data;
  } else {
    return { content: [], totalPages: 0 };
  }
};

export const changeTicketStatus = async ({
  ticketId,
  status,
}: ChangeTicketParams) => {
  const { data } = await instance.patch<ChangeTicketResponse>(
    `/ticket/${ticketId}/status/${status}`,
  );

  return data;
};

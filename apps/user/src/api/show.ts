import { ShowInfoResponse, TicketingInfoResponse } from "@/types/showType";

import { getAccessToken } from "@/utils/handleToken";

import { instance } from "./instance";

export const getShowList = async (id: string | null) => {
  const accessToken = getAccessToken();

  const { data } = await instance.get<ShowInfoResponse>(`/events/${id}/shows`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data.shows;
};

export const getTicketingList = async (id: string | null) => {
  const accessToken = getAccessToken();

  const { data } = await instance.get<TicketingInfoResponse>(
    `/events/shows/${id}/ticketings`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return data.ticketings;
};

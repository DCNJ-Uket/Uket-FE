import { ShowInfoResponse, ReservationInfoResponse } from "@/types/showType";

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

export const getReservationList = async (id: string | null) => {
  const accessToken = getAccessToken();

  const { data } = await instance.get<ReservationInfoResponse>(
    `/events/shows/${id}/reservations`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return data.reservations;
};

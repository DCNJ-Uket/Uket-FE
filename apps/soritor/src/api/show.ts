import { FormSchemaType } from "@/hooks/useTicketStackForm";

import {
  ShowInfoResponse,
  ReservationInfoResponse,
  TicketResponse,
} from "@/types/showType";

import { getAccessToken } from "@/utils/handleToken";

import { fetcher } from "./instance";

export const getShowList = async (id: string | null) => {
  const accessToken = getAccessToken();

  const { data } = await fetcher.get<ShowInfoResponse>(`/events/${id}/shows`, {
    mode: "BOUNDARY",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return { reservationUserType: data.reservationUserType, shows: data.shows };
};

export const getReservationList = async (
  id: string | null,
  reservationUserType: string | null,
) => {
  const accessToken = getAccessToken();

  const { data } = await fetcher.get<ReservationInfoResponse>(
    `/events/shows/${id}/reservations/${reservationUserType}`,
    {
      mode: "BOUNDARY",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return data.reservations;
};

export const buyTicket = async (
  formData: FormSchemaType,
): Promise<TicketResponse> => {
  const { data } = await fetcher.post<TicketResponse>("/tickets", formData);
  return data;
};

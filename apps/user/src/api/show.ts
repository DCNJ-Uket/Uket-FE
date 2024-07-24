import { FormSchemaType } from "@/hooks/useTicketStackForm";

import {
  ShowInfoResponse,
  ReservationInfoResponse,
  TicketResponse,
} from "@/types/showType";

import { getAccessToken } from "@/utils/handleToken";

import { instance } from "./instance";

export const getShowList = async (id: string | null) => {
  const accessToken = getAccessToken();

  const { data } = await instance.get<ShowInfoResponse>(`/events/${id}/shows`, {
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

  const { data } = await instance.get<ReservationInfoResponse>(
    `/events/shows/${id}/reservations/${reservationUserType}`,
    {
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
  const { data } = await instance.post<TicketResponse>("/tickets", formData);
  return data;
};

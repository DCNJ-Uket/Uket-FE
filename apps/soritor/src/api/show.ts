import { FormSchemaType } from "@/hooks/useTicketStackForm";

import { FestivalInfo } from "@/types/univType";
import {
  ShowInfoResponse,
  ReservationInfoResponse,
  TicketResponse,
  ShowInfo,
} from "@/types/showType";

import { getAccessToken } from "@/utils/handleToken";

import { fetcher } from "./instance";

export const getShowList = async (id: FestivalInfo["id"]) => {
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
  id: ShowInfo["id"],
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

import axios from "axios";

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

export const buyTicket = async (
  formData: FormSchemaType,
): Promise<TicketResponse> => {
  const accessToken = getAccessToken();

  try {
    const { data } = await instance.post<TicketResponse>("/tickets", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorResponse = error.response.data;
      return errorResponse;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

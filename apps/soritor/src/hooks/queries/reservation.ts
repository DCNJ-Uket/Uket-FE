import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { createQueryKeys } from "@lukemorales/query-key-factory";

import { getDepositUrl } from "@/api/ticket";
import { getSurveyList } from "@/api/survey";
import { getReservationList, getShowList } from "@/api/show";

import { FestivalInfo } from "@/types/univType";
import { TicketItem } from "@/types/ticketType";
import { ShowInfo } from "@/types/showType";


export const reservation = createQueryKeys("reservation", {
  show: (id: FestivalInfo["id"]) => ({
    queryKey: ["show-info", id],
    queryFn: () => getShowList(id),
  }),
  survey: (id: FestivalInfo["id"]) => ({
    queryKey: ["survey-list", id],
    queryFn: () => getSurveyList(id),
  }),
  time: (id: ShowInfo["id"], reservationUserType: string = "일반인") => ({
    queryKey: ["time-info", id],
    queryFn: () => getReservationList(id, reservationUserType),
  }),
  account: (
    ticketId: TicketItem["ticketId"],
    eventId: TicketItem["eventId"],
  ) => ({
    queryKey: ["deposit", eventId, ticketId],
    queryFn: () => getDepositUrl(eventId),
  }),
});

export const useQueryShowList = (id: FestivalInfo["id"]) => {
  return useSuspenseQuery(reservation.show(id));
};

export const useQuerySurveyList = (id: FestivalInfo["id"]) => {
  return useSuspenseQuery(reservation.survey(id));
};

export const useQueryReservationList = (
  id: ShowInfo["id"],
  reservationUserType: string = "일반인",
) => {
  const userType =
    reservationUserType !== undefined ? reservationUserType : "일반인";

  return useSuspenseQuery({ ...reservation.time(id, userType), staleTime: 0 });
};

export const useQueryDepositurl = (
  ticketId: TicketItem["ticketId"],
  eventId: TicketItem["eventId"],
  ticketStatus: TicketItem["ticketStatus"],
) => {
  return useQuery({
    ...reservation.account(ticketId, eventId),
    enabled: !!eventId && ticketStatus === "입금 확인중",
  });
};

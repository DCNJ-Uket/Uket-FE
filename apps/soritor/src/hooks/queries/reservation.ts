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

/**
 * 선택한 공연의 id로 예매 가능한 공연 목록을 조회합니다.
 * @param {FestivalInfo["id"]} id
 * @returns {any}
 */
export const useQueryShowList = (id: FestivalInfo["id"]) => {
  return useSuspenseQuery(reservation.show(id));
};

/**
 * 공연 별 질의응답 문항을 조회합니다.
 * @param {FestivalInfo["id"]} id
 * @returns {any}
 */
export const useQuerySurveyList = (id: FestivalInfo["id"]) => {
  return useSuspenseQuery(reservation.survey(id));
};

/**
 * 공연 별 예매 가능 시간을 조회합니다.
 * @param {FestivalInfo["id"]} id
 * @param {string} reservationUserType
 * @returns {any}
 */
export const useQueryReservationList = (
  id: ShowInfo["id"],
  reservationUserType: string = "일반인",
) => {
  const userType =
    reservationUserType !== undefined ? reservationUserType : "일반인";

  return useSuspenseQuery({ ...reservation.time(id, userType), staleTime: 0 });
};

/**
 * 공연 주최측의 계좌 정보를 조회합니다.
 * @param {TicketItem["ticketId"]} ticketId
 * @param {TicketItem["eventId"]} eventId
 * @param {TicketItem["ticketStatus"]} ticketStatus
 * @returns {any}
 */
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

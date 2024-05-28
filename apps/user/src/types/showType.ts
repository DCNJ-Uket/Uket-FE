export type ShowInfo = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  ticketingDate: string;
  totalTicketCount: number;
  location: string;
};

export type ShowInfoResponse = {
  universityName: string;
  shows: ShowInfo[];
};

export type ReservationInfo = {
  id: number;
  type: string;
  startTime: string;
  endTime: string;
  reservedCount: number;
  totalCount: number;
};

export type ReservationInfoResponse = {
  showName: string;
  reservations: ReservationInfo[];
};

export type EntryTicketStatus =
  | "BEFORE_ENTER"
  | "FINISH_ENTER"
  | "BEFORE_PAYMENT"
  | "RESERVATION_CANCEL"
  | "EXPIRED";

export type Content = {
  enterTime: string;
  name: string;
  ticketDate: string;
  phoneNumber: string;
  ticketStatus: EntryTicketStatus;
};

export type EntryListResponse = {
  content: Content[];
  pageNumber: number;
  pageSize: number;
  first: boolean;
  last: boolean;
  totalElements: number;
  totalPages: number;
  empty: boolean;
};

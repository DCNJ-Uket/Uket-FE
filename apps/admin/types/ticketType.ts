// TODO: status를 enum으로 변경

export type TicketQrCodeRequestParams = {};
export type TicketQrCodeResponse = {
  ticketId: number;
  userId: number;
  userName: string;
  status: string;
  msg: string;
};

export type TicketResponse = {
  ticketId: number;
  depositorName: string;
  telephone: string;
  showTime: string;
  orderDate: string;
  updateDate: string;
  ticketStatus: string;
  userType: string;
};

export type TicketListResponse = {
  content: TicketResponse[];
  pageNumber: number;
  pageSize: number;
  first: boolean;
  last: boolean;
  totalElements: number;
  totalPages: number;
  empty: boolean;
};

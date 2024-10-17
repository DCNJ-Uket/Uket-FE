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
  showDate: string;
  orderDate: string;
  updateDate: string;
  ticketStatus: string;
  userType: string;
  phoneNumber: string;
};

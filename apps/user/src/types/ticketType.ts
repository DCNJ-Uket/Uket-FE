export type TicketItem = {
  userName: string;
  showDate: string;
  enterStartTime: string;
  enterEndTime: string;
  showLocation: string;
  universityName: string;
  ticketStatus: "입금 확인중" | "예매 완료" | "입장 완료";
  ticketNo: string;
  userType: string;
  showName: string;
  eventName: string;
  ticketId: number;
  createdAt: string;
};

export type QRCodeType = string;

export interface MyTicketListInfoResponse {
  items: TicketItem[];
}

export type MyTicketQRCodeResponse = QRCodeType;

export type CancelTicketResponse = {
  ticketId: number;
  ticketStatus: string;
};

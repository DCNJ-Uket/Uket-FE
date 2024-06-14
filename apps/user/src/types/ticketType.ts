export type TicketItem = {
  userName: string;
  showDate: string;
  enterStartTime: string;
  enterEndTime: string;
  showLocation: string;
  universityName: string;
  ticketStatus: string;
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

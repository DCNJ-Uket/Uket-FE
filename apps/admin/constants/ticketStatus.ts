interface ticketDetail {
  value: string;
  text: string;
  color: string;
}

export const TICKET_STATUS: ticketDetail[] = [
  { value: "BEFORE_PAYMENT", text: "입금 확인중", color: "#FFF382" },
  { value: "BEFORE_ENTER", text: "예매 완료", color: "#81B0FE" },
  { value: "FINISH_ENTER", text: "입장 완료", color: "#9981FE" },
  { value: "EXPIRED", text: "기간 만료", color: "#CCCCCC" },
  { value: "RESERVATION_CANCEL", text: "예매 취소", color: "#FD9A81" },
];

interface ticketDetail {
  value: string;
  text: string;
  color: string;
}

export const TICKET_STATUS: ticketDetail[] = [
  {
    value: "BEFORE_PAYMENT",
    text: "입금 확인중",
    color: "rgba(255, 243, 130, 0.9)",
  },
  {
    value: "BEFORE_ENTER",
    text: "예매 완료",
    color: "rgba(129, 176, 254, 0.9)",
  },
  {
    value: "FINISH_ENTER",
    text: "입장 완료",
    color: "rgba(153, 129, 254, 0.9)",
  },
  { value: "EXPIRED", text: "기간 만료", color: "rgba(204, 204, 204, 0.9)" },
  {
    value: "RESERVATION_CANCEL",
    text: "예매 취소",
    color: "rgba(253, 154, 129, 0.9)",
  },
];

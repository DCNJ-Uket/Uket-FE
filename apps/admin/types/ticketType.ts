// TODO: status를 enum으로 변경

import { USER_TYPE } from "@/constants/userStatus";
import { TICKET_STATUS } from "@/constants/ticketStatus";

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
  updatedDate: string;
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

interface SearchRequest {
  type: string;
  value: string;
}

export const getSearchRequest = (searchType: string, value: string) => {
  const searchRequest: SearchRequest = { type: "", value: "" };

  if (searchType === "PHONE_NUMBER") {
    searchRequest.type = "phoneNumberLastFourDigits";
    searchRequest.value = value;
  } else if (searchType === "STATUS") {
    searchRequest.type = "status";
    const request_value = TICKET_STATUS.find(status => status.text === value);
    if (request_value === undefined) {
      return null;
    } else {
      searchRequest.value = request_value.value;
    }
  } else if (searchType === "USER_NAME") {
    searchRequest.type = "userName";
    searchRequest.value = value;
  } else if (searchType === "SHOW_DATE") {
    searchRequest.type = "showDate";

    const dateParts = value.split(".");
    if (dateParts.length === 3) {
      const year = `20${dateParts[0]}`;
      const month = dateParts[1].padStart(2, "0");
      const day = dateParts[2].padStart(2, "0");
      searchRequest.value = `${year}-${month}-${day}`;
    } else {
      return null;
    }
  } else if (searchType === "RESERVATION_USER_TYPE") {
    searchRequest.type = "reservationUserType";
    const request_value = USER_TYPE.find(type => type.text === value);
    if (request_value === undefined) {
      return null;
    } else {
      searchRequest.value = request_value.value;
    }
  }

  return searchRequest;
};

export type ChangeTicketParams = {
  ticketId: number;
  status: string;
};

export type ChangeTicketResponse = ChangeTicketParams;

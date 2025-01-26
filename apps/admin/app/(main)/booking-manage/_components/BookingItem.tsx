import { TicketResponse } from "@/types/ticketType";

import TicketStatus from "./TicketStatus";

interface BookingItemProps {
  ticket: TicketResponse;
  page: number;
}

function BookingItem(props: BookingItemProps) {
  const { ticket, page } = props;

  return (
    <tr className="h-8 text-base font-medium text-[#5E5E6E]">
      <td>{ticket.depositorName}</td>
      <td>{ticket.userType}</td>
      <td>{ticket.showTime}</td>
      <td>{ticket.telephone}</td>
      <td>{ticket.updatedDate}</td>
      <td>{ticket.orderDate}</td>
      <td className="flex items-center justify-center">
        <TicketStatus
          id={ticket.ticketId}
          status={ticket.ticketStatus}
          userName={ticket.depositorName}
          page={page}
        />
      </td>
      <td>{ticket.formAnswers[0].answer}</td>
    </tr>
  );
}

export default BookingItem;

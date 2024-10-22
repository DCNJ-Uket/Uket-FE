import { TicketResponse } from "@/types/ticketType";

import TicketStatus from "./TicketStatus";

interface BookingItemProps {
  ticket: TicketResponse;
}

function BookingItem(props: BookingItemProps) {
  const { ticket } = props;

  return (
    <tr className="h-[30px] text-base">
      <td>{ticket.depositorName}</td>
      <td>{ticket.userType}</td>
      <td>{ticket.showTime}</td>
      <td>{ticket.telephone}</td>
      <td>{ticket.updateDate}</td>
      <td>{ticket.orderDate}</td>
      <td className="flex items-center justify-center">
        <TicketStatus status={ticket.ticketStatus} />
      </td>
    </tr>
  );
}

export default BookingItem;

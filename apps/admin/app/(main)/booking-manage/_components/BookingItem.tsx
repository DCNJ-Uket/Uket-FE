import { TicketResponse } from "@/types/ticketType";

interface BookingItemProps {
  ticket: TicketResponse;
}

function BookingItem(props: BookingItemProps) {
  const { ticket } = props;

  return (
    <tr className="h-[30px] text-base">
      <td>{ticket.depositorName}</td>
      <td>{ticket.userType}</td>
      <td>{ticket.showDate}</td>
      <td>{ticket.phoneNumber}</td>
      <td>{ticket.updateDate}</td>
      <td>{ticket.orderDate}</td>
      <td>{ticket.ticketStatus}</td>
    </tr>
  );
}

export default BookingItem;

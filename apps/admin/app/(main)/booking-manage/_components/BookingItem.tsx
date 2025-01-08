import { useFormat } from "@/hooks/useFormat";

import { TicketResponse } from "@/types/ticketType";

import TicketStatus from "./TicketStatus";

interface BookingItemProps {
  ticket: TicketResponse;
  page: number;
}

function BookingItem(props: BookingItemProps) {
  const { ticket, page } = props;

  const { handleFormatDate } = useFormat();

  const formatShowTime = handleFormatDate(ticket.showTime);
  const formatUpdateDate = handleFormatDate(ticket.updatedDate);
  const formatOrderDate = handleFormatDate(ticket.orderDate);

  return (
    <tr className="h-8 text-base font-medium text-[#5E5E6E]">
      <td>{ticket.depositorName}</td>
      <td>{ticket.userType}</td>
      <td>{formatShowTime}</td>
      <td>{ticket.telephone}</td>
      <td>{formatUpdateDate}</td>
      <td>{formatOrderDate}</td>
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

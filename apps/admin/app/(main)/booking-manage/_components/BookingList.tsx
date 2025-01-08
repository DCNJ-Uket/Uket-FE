import Pagination from "@/components/Pagination";

import { TicketResponse } from "@/types/ticketType";

import BookingItem from "./BookingItem";

interface BookingListProps {
  tickets: TicketResponse[];
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

function BookingList(props: BookingListProps) {
  const { tickets, page, setPage, totalPages } = props;

  const headers = [
    "입금자명",
    "사용자 구분",
    "티켓 날짜",
    "전화번호",
    "업데이트 일시",
    "주문 일시",
    "티켓 상태",
    "지인",
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <table className="w-full border-separate border-spacing-y-4 rounded-lg bg-white px-5 py-px text-center shadow-sm">
        <thead>
          <tr className="text-sm text-[#8989A1]">
            {headers.map((header, index) => (
              <th key={index} className="font-normal">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <BookingItem key={ticket.ticketId} ticket={ticket} page={page} />
          ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </section>
  );
}

export default BookingList;

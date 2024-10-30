import Pagination from "@/components/Pagination";

import { TicketResponse } from "@/types/ticketType";

import BookingItem from "./BookingItem";

interface BookingListProps {
  tickets: TicketResponse[];
  page: number;
  handlePage: (page: number) => void;
  totalPages: number;
}

function BookingList(props: BookingListProps) {
  const { tickets, page, handlePage, totalPages } = props;

  const headers = [
    "입금자명",
    "사용자 구분",
    "티켓 날짜",
    "전화번호",
    "업데이트 일시",
    "주문 일시",
    "티켓 상태",
  ];

  const limit = 10;
  const emptyRows = limit - tickets.length;

  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <table
        className="w-full border-separate border-spacing-y-4 rounded-lg bg-white px-5 py-px text-center"
        style={{
          boxShadow: "1px 1px 10px 0px #0000000F",
        }}
      >
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

          {emptyRows > 0 &&
            Array.from({ length: emptyRows }).map((_, index) => (
              <tr key={`empty-${index}`} className="h-[30px]">
                <td colSpan={headers.length}></td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} page={page} handlePage={handlePage} />
    </section>
  );
}

export default BookingList;

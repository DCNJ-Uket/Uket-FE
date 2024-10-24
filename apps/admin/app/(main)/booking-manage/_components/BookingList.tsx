import { useState } from "react";

import Pagination from "@/components/Pagination";

import BookingItem from "./BookingItem";

function BookingList() {
  const generateTickets = (count: number) => {
    const baseTicket = {
      depositorName: "이영희",
      userType: "VIP",
      showDate: "2024-10-20",
      phoneNumber: "010-9876-5432",
      updateDate: "2024-10-19",
      orderDate: "2024-10-18",
      ticketStatus: "BEFORE_PAYMENT",
    };

    return Array.from({ length: count }, (_, index) => ({
      ticketId: index + 1,
      ...baseTicket,
    }));
  };

  const tickets = generateTickets(65);

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
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const paginatedTickets = tickets.slice(offset, offset + limit);
  const emptyRows = limit - paginatedTickets.length;

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
          {paginatedTickets.map(ticket => (
            <BookingItem key={ticket.ticketId} ticket={ticket} />
          ))}

          {emptyRows > 0 &&
            Array.from({ length: emptyRows }).map((_, index) => (
              <tr key={`empty-${index}`} className="h-[30px]">
                <td colSpan={headers.length}></td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        total={tickets.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </section>
  );
}

export default BookingList;

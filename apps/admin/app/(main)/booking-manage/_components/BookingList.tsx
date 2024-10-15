import BookingItem from "./BookingItem";

function BookingList() {
  const tickets = [
    {
      ticketId: 1,
      depositorName: "김철수",
      userType: "일반",
      showDate: "2024-10-14",
      phoneNumber: "010-1234-5678",
      updateDate: "2024-10-13",
      orderDate: "2024-10-12",
      ticketStatus: "발급 완료",
    },
    {
      ticketId: 2,
      depositorName: "이영희",
      userType: "VIP",
      showDate: "2024-10-20",
      phoneNumber: "010-9876-5432",
      updateDate: "2024-10-19",
      orderDate: "2024-10-18",
      ticketStatus: "미발급",
    },
  ];

  const headers = [
    "입금자명",
    "사용자 구분",
    "티켓 날짜",
    "전화번호",
    "업데이트 일시",
    "주문 일시",
    "티켓 상태",
  ];

  // 한 페이지 최대 예약 관리 개수
  const maxItems = 10;

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <table
        className="w-full border-separate border-spacing-y-4 rounded-lg bg-white px-5 text-center"
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
        <tbody className="">
          {tickets.map((ticket, index) => (
            <BookingItem key={index} ticket={ticket} />
          ))}
          {Array.from({ length: maxItems - tickets.length }).map((_, index) => (
            <tr key={`empty-${index}`} className="h-[30px]">
              <td colSpan={headers.length}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default BookingList;

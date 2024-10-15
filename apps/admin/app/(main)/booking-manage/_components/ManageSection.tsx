"use client";

import BookingList from "./BookingList";

function ManageSection() {
  return (
    <section className="flex grow flex-col gap-8 bg-[#F2F2F2] pl-16 pr-20 pt-20">
      <div className="flex items-start justify-between">
        <h1 className="text-[34px] font-bold">예매 내역 관리</h1>
        <div>검색필드 들어올 부분</div>
      </div>
      <BookingList />
    </section>
  );
}

export default ManageSection;

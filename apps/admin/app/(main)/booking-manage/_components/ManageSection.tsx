"use client";

import SearchSection from "./SearchSection";
import BookingList from "./BookingList";

function ManageSection() {
  return (
    <section className="flex grow flex-col gap-8 bg-[#F2F2F2] pl-16 pr-20 pt-20">
      <div className="flex items-center justify-between">
        <h1 className="text-[34px] font-bold">예매 내역 관리</h1>
        <SearchSection />
      </div>
      <BookingList />
    </section>
  );
}

export default ManageSection;

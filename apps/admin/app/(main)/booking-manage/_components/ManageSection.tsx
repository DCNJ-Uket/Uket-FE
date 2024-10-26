"use client";

import { useState } from "react";

import { useQueryTicketList } from "@/hooks/queries/useQueryTicketList";

import SearchSection from "./SearchSection";
import BookingList from "./BookingList";

function ManageSection() {
  const { data, refetch } = useQueryTicketList();
  const [tickets, setTickets] = useState(data);

  const handleViewAllTicket = () => {
    refetch().then(response => setTickets(response.data!));
  };

  return (
    <section className="flex grow flex-col gap-8 bg-[#F2F2F2] pl-16 pr-20 pt-20">
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-4">
          <h1 className="text-[34px] font-bold">예매 내역 관리</h1>
          <p
            className="mb-1 text-sm font-medium text-[#5E5E6E] underline decoration-1 hover:cursor-pointer"
            onClick={handleViewAllTicket}
          >
            전체 내역 보기
          </p>
        </div>
        <SearchSection handleTickets={setTickets} />
      </div>
      <BookingList tickets={tickets} />
    </section>
  );
}

export default ManageSection;

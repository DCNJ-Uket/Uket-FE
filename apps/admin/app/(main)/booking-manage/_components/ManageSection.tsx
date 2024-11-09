"use client";

import { useEffect, useState } from "react";

import { useQueryTicketSearch } from "@/hooks/queries/useQueryTicketSearch";
import { useQueryTicketList } from "@/hooks/queries/useQueryTicketList";

import { TicketResponse } from "@/types/ticketType";

import SearchSection from "./SearchSection";
import BookingList from "./BookingList";

function ManageSection() {
  const [page, setPage] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const [searchType, setSearchType] = useState("PHONE_NUMBER");
  const [searchInputValue, setSearchInputValue] = useState("");

  const { data: listData } = useQueryTicketList(page, { enabled: !isSearch });
  const { data: searchData } = useQueryTicketSearch(
    searchType,
    searchInputValue,
    page,
    {
      enabled: isSearch,
    },
  );

  const [tickets, setTickets] = useState<TicketResponse[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const data = isSearch ? searchData : listData;
    if (data) {
      setTickets(data.content);
      setTotalPages(data.totalPages);
    }
  }, [isSearch, listData, searchData]);

  const handleViewAllTicket = () => {
    setIsSearch(false);
    setPage(1);
  };

  const handleTicketSearch = (type: string, value: string) => {
    if (value.length > 0) {
      setSearchType(type);
      setSearchInputValue(value);
      setIsSearch(true);
      setPage(1);
    }
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
        <SearchSection handleTicketSearch={handleTicketSearch} />
      </div>
      <BookingList
        tickets={tickets}
        setPage={setPage}
        page={page}
        totalPages={totalPages}
      />
    </section>
  );
}

export default ManageSection;

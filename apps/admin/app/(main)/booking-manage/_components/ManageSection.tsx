"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useQueryTicketSearch } from "@/hooks/queries/useQueryTicketSearch";
import { useQueryTicketList } from "@/hooks/queries/useQueryTicketList";

import SearchSection from "./SearchSection";
import BookingTable from "./BookingTable";

function ManageSection() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const searchType = searchParams.get("searchType") || "USER_NAME";
  const searchValue = searchParams.get("searchValue") || "";
  const isSearchMode = Boolean(searchValue);

  const { data: listData } = useQueryTicketList(page, {
    enabled: !isSearchMode,
  });

  const { data: searchData } = useQueryTicketSearch(
    searchType,
    searchValue,
    page,
    {
      enabled: isSearchMode,
    },
  );

  const tickets = isSearchMode
    ? searchData?.timezoneData
    : listData?.timezoneData;

  const totalPages = isSearchMode
    ? searchData?.totalPages
    : listData?.totalPages;

  const updateQuery = (params: Record<string, string | number | null>) => {
    const newParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value === null) newParams.delete(key);
      else newParams.set(key, String(value));
    });

    router.push(`?${newParams.toString()}`, { scroll: false });
  };

  const handleViewAllTicket = () => {
    updateQuery({ page: 1, searchType: null, searchValue: null });
  };

  const handleTicketSearch = (type: string, value: string) => {
    if (value.trim().length > 0) {
      updateQuery({ page: 1, searchType: type, searchValue: value });
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
      {tickets && (
        <BookingTable
          data={tickets}
          pageIndex={page}
          setPageIndex={newPage => updateQuery({ page: newPage })}
          pageCount={totalPages || 1}
        />
      )}
    </section>
  );
}

export default ManageSection;

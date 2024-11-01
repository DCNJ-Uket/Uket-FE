"use client";

import React, { useState } from "react";
import { RefreshCwIcon } from "@ui/components/ui/icon";
import { Button } from "@ui/components/ui/button";

import { useQueryEntryList } from "@/hooks/queries/useQueryEntryList";

import EntryDataTable, { columns } from "./EntryDataTable";

function EntryCheckSection() {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, refetch, isRefetching } = useQueryEntryList({
    page: pageIndex,
  });

  const handleRefetch = () => {
    refetch();
  };

  return (
    <section className="flex grow flex-col gap-8 bg-[#F2F2F2] pl-16 pr-20 pt-20">
      <div className="flex items-end justify-between">
        <h1 className="text-[34px] font-bold">실시간 입장 조회</h1>
        <aside className="flex items-center">
          <p className="text-sm text-[#9191A1]">
            입장 조회 내역은 10초마다 또는 새로고침 버튼을 누르면 갱신됩니다.
          </p>
          <Button
            disabled={isRefetching}
            variant="ghost"
            className="flex items-center gap-2 text-[#5e5e6e]"
            onClick={handleRefetch}
          >
            <RefreshCwIcon className="h-6 w-6 rounded-md bg-white p-1" />
            <span className="text-sm font-bold">내역 갱신</span>
          </Button>
        </aside>
      </div>
      {data && data.content && (
        <EntryDataTable
          columns={columns}
          data={data.content}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          pageCount={data.totalPages || 1}
        />
      )}
    </section>
  );
}

export default EntryCheckSection;

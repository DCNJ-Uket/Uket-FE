import React, { useState } from "react";
import { cn } from "@ui/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "@ui/components/ui/icon";
import { Button } from "@ui/components/ui/button";

interface PaginationProps {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
}

function Pagination(props: PaginationProps) {
  const { totalPages, page, setPage } = props;
  const maxButtons = 5;
  const [pageGroup, setPageGroup] = useState(0);

  const handleFirst = () => {
    setPageGroup(0);
    setPage(1);
  };

  const handleLast = () => {
    const lastGroup = Math.floor((totalPages - 1) / maxButtons);
    setPageGroup(lastGroup);
    setPage(totalPages);
  };

  const handleNextGroup = () => {
    if ((pageGroup + 1) * maxButtons < totalPages) {
      setPageGroup(prev => prev + 1);
      setPage((pageGroup + 1) * maxButtons + 1);
    }
  };

  const handlePrevGroup = () => {
    if (pageGroup > 0) {
      setPageGroup(prev => prev - 1);
      setPage(Math.max(pageGroup * maxButtons, 1));
    }
  };

  const startPage = pageGroup * maxButtons;
  const endPage = Math.min(startPage + maxButtons, totalPages);
  const pageNumbers = Array.from(
    { length: endPage - startPage },
    (_, index) => startPage + index,
  );

  return (
    <div className="flex items-center justify-center space-x-6">
      {pageGroup > 0 && (
        <div className="space-x-2">
          <Button
            variant="ghost"
            onClick={handleFirst}
            className="p-0 text-sm font-light text-[#5E5E6E] hover:bg-inherit"
          >
            <ChevronsLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            onClick={handlePrevGroup}
            className="p-0 text-sm font-light text-[#5E5E6E] hover:bg-inherit"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
        </div>
      )}
      {pageNumbers.map(pageNum => (
        <Button
          key={pageNum}
          variant="ghost"
          onClick={() => setPage(pageNum + 1)}
          className={cn(
            "p-0 text-sm font-light text-[#5E5E6E] hover:bg-inherit",
            page === pageNum + 1 && "font-semibold text-[#17171B]",
          )}
        >
          {pageNum + 1}
        </Button>
      ))}
      {endPage < totalPages && (
        <div className="space-x-2">
          <Button
            variant="ghost"
            onClick={handleNextGroup}
            className="p-0 text-sm font-light text-[#5E5E6E] hover:bg-inherit"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            onClick={handleLast}
            className="p-0 text-sm font-light text-[#5E5E6E] hover:bg-inherit"
          >
            <ChevronsRightIcon className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

export default Pagination;

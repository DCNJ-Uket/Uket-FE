import { cn } from "@ui/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "@ui/components/ui/icon";

interface PaginationProps {
  totalPages: number;
  page: number;
  handlePage: (page: number) => void;
}

function Pagination(props: PaginationProps) {
  const { totalPages, page, handlePage } = props;

  const maxVisiblePages = 5;

  const currentGroup = Math.floor((page - 1) / maxVisiblePages);
  const startPage = currentGroup * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  return (
    <nav className="flex items-center justify-center gap-10 text-base font-light text-[#5E5E6E]">
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => handlePage(startPage - maxVisiblePages)}
          disabled={startPage <= 1}
        >
          <ChevronsLeftIcon strokeWidth={1} />
        </button>
        <button onClick={() => handlePage(page - 1)} disabled={page === 1}>
          <ChevronLeftIcon strokeWidth={1} />
        </button>
      </div>
      <div className="flex items-center justify-center gap-7">
        {Array.from({ length: endPage - startPage + 1 }).map((_, i) => {
          const pageNumber = startPage + i;
          return (
            <button
              key={pageNumber}
              onClick={() => handlePage(pageNumber)}
              aria-current={page === pageNumber ? "page" : undefined}
              className={cn(page === pageNumber && "font-bold text-[#17171B]")}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => handlePage(page + 1)}
          disabled={page === totalPages}
        >
          <ChevronRightIcon strokeWidth={1} />
        </button>
        <button
          onClick={() => handlePage(startPage + maxVisiblePages)}
          disabled={endPage >= totalPages}
        >
          <ChevronsRightIcon strokeWidth={1} />
        </button>
      </div>
    </nav>
  );
}

export default Pagination;

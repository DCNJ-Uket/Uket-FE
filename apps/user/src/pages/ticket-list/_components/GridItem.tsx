import { Link } from "react-router-dom";
import { cn } from "@uket/ui/lib/utils";
import { ChevronRightIcon } from "@uket/ui/components/ui/icon";

interface GridItemProps {
  title: string;
  content: string;
  isTicketNo?: boolean;
  isPlace?: boolean;
}

const GridItem = (props: GridItemProps) => {
  const { title, content, isTicketNo, isPlace } = props;
  const goToMapLink = `https://map.kakao.com/?q=${content}`;

  const item = isPlace ? (
    <Link
      to={isPlace ? goToMapLink : "#"}
      target="_blank"
      className="flex items-center font-bold"
    >
      {title}
      {isPlace && <ChevronRightIcon className="h-4 w-4 pt-0.5" />}
    </Link>
  ) : (
    <p className="font-bold">{title}</p>
  );

  return (
    <div
      className="space-y-2 text-xs"
      onClick={e => {
        isPlace && e.stopPropagation();
      }}
    >
      {item}
      <p
        className={cn(
          isTicketNo
            ? "truncate text-[#7250FD]"
            : "line-clamp-2 text-[#5E5E6E]",
        )}
      >
        {content}
      </p>
    </div>
  );
};

export default GridItem;

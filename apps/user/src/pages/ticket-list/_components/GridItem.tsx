import { cn } from "@uket/ui/lib/utils";

interface GridItemProps {
  title: string;
  content: string;
  isTicketNo?: boolean;
}

const GridItem = (props: GridItemProps) => {
  const { title, content, isTicketNo } = props;

  return (
    <div className="space-y-2 text-xs">
      <p className="font-bold">{title}</p>
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

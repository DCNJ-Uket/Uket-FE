import { Badge } from "@uket/ui/components/ui/badge";

interface TicketHeaderProps {
  university: string;
  title: string;
  day: string;
}

const TicketHeader = (props: TicketHeaderProps) => {
  const { university, title, day } = props;

  return (
    <header className="space-y-1">
      <p className="text-xs text-[#5E5E6E]">{university}</p>
      <h1 className="flex items-center gap-3 font-black">
        <p className="text-2xl">{title}</p>
        <Badge
          variant="secondary"
          className="rounded-lg bg-[#D9D9D9] px-3 py-0 text-base font-black text-[#5E5E6E]"
        >
          {day}
        </Badge>
      </h1>
    </header>
  );
};

export default TicketHeader;

import { Badge } from "@uket/ui/components/ui/badge";

import { TicketItem } from "@/types/ticketType";

interface TicketHeaderProps
  extends Pick<TicketItem, "universityName" | "eventName" | "showName"> {}

const TicketHeader = (props: TicketHeaderProps) => {
  const { universityName, eventName, showName } = props;

  return (
    <header className="space-y-1">
      <p className="text-xs text-[#5E5E6E]">{universityName}</p>
      <h1 className="flex items-center gap-3 font-black">
        <p className="text-2xl">{eventName}</p>
        <Badge
          variant="secondary"
          className="rounded-lg bg-[#D9D9D9] px-3 py-0 text-base font-black text-[#5E5E6E]"
        >
          {showName}
        </Badge>
      </h1>
    </header>
  );
};

export default TicketHeader;

import { TicketItem } from "@uket/api/types/ticket";

interface TicketHeaderProps
  extends Pick<TicketItem, "universityName" | "eventName"> {}

const TicketHeader = (props: TicketHeaderProps) => {
  const { universityName, eventName } = props;

  return (
    <header className="space-y-1">
      <p className="text-xs text-[#5E5E6E]">{universityName}</p>
      <h1 className="flex items-center gap-3 font-black">
        <p className="text-[22px]">{eventName}</p>
      </h1>
    </header>
  );
};

export default TicketHeader;

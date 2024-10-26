import { cn } from "@ui/lib/utils";

import { TICKET_STATUS } from "@/constants/ticketStatus";

interface TicketChangeItemProps {
  status: string;
  before?: boolean;
}

function TicketChangeItem(props: TicketChangeItemProps) {
  const { status, before } = props;

  const color = TICKET_STATUS.find(item => item.text === status)!.color;

  return (
    <p className="flex items-center gap-1.5">
      <span
        className={cn("text-[13px] text-black", before && "text-[#8989A1]")}
      >
        {status}
      </span>
      <span
        className="h-4 w-4 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
    </p>
  );
}

export default TicketChangeItem;

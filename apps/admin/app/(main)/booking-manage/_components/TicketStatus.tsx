import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/ui/select";

import { TICKET_STATUS } from "@/constants/ticketStatus";

interface TicketStatusProps {
  status: string;
}

function TicketStatus(props: TicketStatusProps) {
  const { status } = props;

  const ticketStatus = TICKET_STATUS;

  const [selectedText, setSelectedText] = useState(status);

  const currentItem = useMemo(
    () => ticketStatus.find(item => item.text === selectedText)!,
    [selectedText, ticketStatus],
  );

  const handleSelectChange = (text: string) => {
    setSelectedText(text);
  };

  return (
    <Select defaultValue={currentItem.text} onValueChange={handleSelectChange}>
      <SelectTrigger
        className="h-7 max-w-28 gap-2 rounded-lg px-2 py-px leading-tight text-[#2F2F37]"
        style={{ backgroundColor: currentItem.color }}
      >
        <SelectValue placeholder={currentItem.text} />
      </SelectTrigger>
      <SelectContent>
        {ticketStatus.map(item => (
          <SelectItem key={item.value} value={item.text}>
            {item.text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default TicketStatus;

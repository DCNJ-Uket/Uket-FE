import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/ui/select";

import { TICKET_STATUS } from "@/constants/ticketstatus";

interface TicketStatusProps {
  status: string;
}

function TicketStatus(props: TicketStatusProps) {
  const { status } = props;

  const ticketStatus = TICKET_STATUS;

  const [selectedValue, setSelectedValue] = useState(status);

  const currentItem = ticketStatus.find(item => item.value === selectedValue)!;

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Select defaultValue={currentItem.value} onValueChange={handleSelectChange}>
      <SelectTrigger
        className="h-7 max-w-28 gap-2 rounded-lg px-2 py-px leading-tight text-[#2F2F37]"
        style={{ backgroundColor: currentItem.color }}
      >
        <SelectValue placeholder={currentItem.text} />
      </SelectTrigger>
      <SelectContent>
        {ticketStatus.map(item => (
          <SelectItem key={item.value} value={item.value}>
            {item.text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default TicketStatus;

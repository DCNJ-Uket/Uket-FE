import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/ui/select";

import { TICKET_STATUS } from "@/constants/ticketStatus";

import TicketChangeDialog from "./TicketChangeDialog";
import { useMutationChangeTicketStatus } from "@/hooks/mutations/useMutationChangeTicketStatus";

interface TicketStatusProps {
  id: number;
  status: string;
  userName: string;
}

function TicketStatus(props: TicketStatusProps) {
  const { id, status, userName } = props;

  const ticketStatus = TICKET_STATUS;

  const [selectedText, setSelectedText] = useState(status);
  const [openDialog, setOpenDialog] = useState(false);
  const [newStatus, setNewStatus] = useState(selectedText);

  const currentItem = useMemo(
    () => ticketStatus.find(item => item.text === selectedText)!,
    [selectedText, ticketStatus],
  );

  const handleSelectChange = (text: string) => {
    setNewStatus(text);
    setOpenDialog(true);
  };

  const mutation = useMutationChangeTicketStatus();

  const handleConfirmChange = () => {
    const newTicketValue = ticketStatus.find(
      item => item.text === newStatus,
    )!.value;

    mutation.mutate(
      { ticketId: id, status: newTicketValue },
      {
        onSuccess: () => {
          setOpenDialog(false);
          setSelectedText(newStatus);
        },
      },
    );
  };

  return (
    <>
      <Select value={currentItem.text} onValueChange={handleSelectChange}>
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

      <TicketChangeDialog
        userName={userName}
        openDialog={openDialog}
        handleOpenDialog={setOpenDialog}
        beforeStatus={selectedText}
        newStatus={newStatus}
        handleConfirmChange={handleConfirmChange}
      />
    </>
  );
}

export default TicketStatus;

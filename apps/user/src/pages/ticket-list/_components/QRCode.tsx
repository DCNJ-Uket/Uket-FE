import { useMemo } from "react";
import { Separator } from "@uket/ui/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@uket/ui/components/ui/dialog";
import { Button } from "@uket/ui/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";

import Indicator from "@/components/Indicator";

import {
  MyTicketListInfoResponse,
  QRCodeType,
  TicketItem,
} from "@/types/ticketType";

import { formatDate } from "@/utils/handleTicket";

import TicketHeader from "./TicketHeader";
import TicketDetail from "./TicketDetail";
import ConfirmModal from "./ConfirmModal";

interface QRCodeProps {
  id: TicketItem["ticketId"];
  qrCode: QRCodeType;
}

const QRCode = (props: QRCodeProps) => {
  const { id, qrCode } = props;

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MyTicketListInfoResponse>([
    "my-ticket-list",
  ])!;

  const ticket: TicketItem = useMemo(() => {
    const item = data.items.filter(item => item.ticketId === id)[0];

    return {
      ...item,
      createdAt: formatDate(item.createdAt, "full"),
      showDate: formatDate(item.showDate, "short"),
      enterStartTime: formatDate(item.enterStartTime, "time"),
      enterEndTime: formatDate(item.enterEndTime, "time"),
    };
  }, [data]);

  const {
    userName,
    showDate,
    enterStartTime,
    enterEndTime,
    showLocation,
    universityName,
    ticketStatus,
    ticketNo,
    userType,
    showName,
    eventName,
    createdAt,
  } = ticket;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-24 w-24 border-none p-0">
          <img
            src={qrCode}
            alt="qrcode"
            width={100}
            height={100}
            className="aspect-square object-cover"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs rounded-lg sm:max-w-md">
        <DialogHeader className="gap-3">
          <div className="text-left">
            <Indicator
              variant={"darkdeposit"}
              title={ticketStatus}
              rounded
              className="relative left-0 top-0"
            />
          </div>
          <DialogDescription className="flex flex-col items-center justify-center">
            <img
              src={qrCode}
              alt="qrcode"
              width={100}
              height={100}
              className="aspect-square h-36 w-36"
            />
            <span className="text-xs text-[#7250FD]">{ticketNo}</span>
          </DialogDescription>
        </DialogHeader>
        <section className="flex flex-col gap-3">
          <TicketHeader
            universityName={universityName}
            eventName={eventName}
            showName={showName}
          />
          <Separator className="bg-[#5E5E6E]" />
          <TicketDetail
            userName={userName}
            showDate={showDate}
            enterTime={`${enterStartTime} ~ ${enterEndTime}`}
            showLocation={showLocation}
            createdAt={createdAt}
            userType={userType}
          />
          <Separator className="bg-[#5E5E6E]" />
          <footer>
            <ConfirmModal />
          </footer>
        </section>
        <DialogFooter className="rounded-lg bg-[#FDC950] py-3 text-center sm:justify-center">
          <h1 className="text-sm font-bold">
            학생증 또는 신분증을 제시해 주세요!
          </h1>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default QRCode;

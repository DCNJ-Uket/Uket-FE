import { useMemo } from "react";
import { Separator } from "@uket/ui/components/ui/separator";
import { RefreshCwIcon } from "@uket/ui/components/ui/icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@uket/ui/components/ui/card";
import { Button } from "@uket/ui/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";

import Indicator from "@/components/Indicator";

import { useQueryTicketQRCode } from "@/hooks/queries/useQueryTicketQRCode";

import { MyTicketListInfoResponse, TicketItem } from "@/types/ticketType";

import { formatDate } from "@/utils/handleTicket";

import TicketHeader from "./TicketHeader";
import TicketDetail from "./TicketDetail";
import ConfirmModal from "./ConfirmModal";

interface QRCodeProps {
  id: TicketItem["ticketId"];
}

const QRCode = (props: QRCodeProps) => {
  const { id } = props;

  const { data: qrcode, refetch } = useQueryTicketQRCode(id);
  
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
  }, [data, id]);

  const {
    userName,
    showDate,
    enterStartTime,
    enterEndTime,
    showLocation,
    universityName,
    ticketStatus,
    userType,
    showName,
    eventName,
    createdAt,
  } = ticket;

  const handleReissueQRCode = () => {
    refetch();
  };
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="gap-3">
        <CardTitle>
          <div className="text-left">
            <Indicator
              variant={ticketStatus}
              title={ticketStatus}
              rounded
              className="relative left-0 top-0"
            />
          </div>
        </CardTitle>
        <CardDescription className="flex flex-col items-center justify-center">
          <img
            src={qrcode}
            alt="qrcode"
            width={100}
            height={100}
            className="aspect-square h-36 w-36 scale-125"
          />
          <Button variant="ghost" size="icon" className="z-50 rounded-full">
            <RefreshCwIcon className="h-5 w-5" onClick={handleReissueQRCode} />
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
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
            <ConfirmModal ticketId={id} />
          </footer>
        </section>
      </CardContent>
      <CardFooter className="mx-5 mb-3 justify-center overflow-hidden rounded-lg bg-[#FDC950] py-3">
        <div className="inline-flex min-w-full flex-nowrap items-center">
          <h1 className="animate-infinite-scroll min-w-full text-center text-sm font-bold">
            <span>학생증 또는 신분증을 제시해 주세요!</span>
          </h1>
          <h1
            className="animate-infinite-scroll min-w-full text-center text-sm font-bold"
            aria-hidden={true}
          >
            <span>학생증 또는 신분증을 제시해 주세요!</span>
          </h1>
          <h1
            className="animate-infinite-scroll min-w-full text-center text-sm font-bold"
            aria-hidden={true}
          >
            <span>학생증 또는 신분증을 제시해 주세요!</span>
          </h1>
        </div>
      </CardFooter>
    </Card>
  );
};
export default QRCode;

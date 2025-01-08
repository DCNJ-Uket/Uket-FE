import { Separator } from "@uket/ui/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@uket/ui/components/ui/card";

import Indicator from "@/components/Indicator";
import QrCodeAndDepositErrorFallback from "@/components/fallback/QrcodeAndDepositErrorFallback";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { TicketItem } from "@/types/ticketType";

import TicketHeader from "./TicketHeader";
import TicketDetail from "./TicketDetail";
import QrcodeAndDeposit from "./QrcodeAndDeposit";
import ConfirmModal from "./ConfirmModal";

interface TicketModalProps {
  ticket: TicketItem;
}

const TicketModal = (props: TicketModalProps) => {
  const {
    ticket: {
      userName,
      showDate,
      enterStartTime,
      enterEndTime,
      showLocation,
      universityName,
      ticketStatus,
      eventId,
      eventName,
      ticketId,
      createdAt,
    },
  } = props;
  const isTicketCancelAvailable =
    ticketStatus === "입금 확인중" || ticketStatus === "예매 완료";

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
        <CardDescription className="flex flex-col items-center justify-center text-[12px] sm:text-sm">
          <RetryErrorBoundary fallbackComponent={QrCodeAndDepositErrorFallback}>
            <QrcodeAndDeposit
              ticketId={ticketId}
              eventId={eventId}
              ticketStatus={ticketStatus}
            />
          </RetryErrorBoundary>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="flex flex-col gap-3">
          <TicketHeader
            universityName={universityName}
            eventName={eventName}
          />
          <Separator className="bg-[#5E5E6E]" />
          <TicketDetail
            userName={userName}
            showDate={showDate}
            enterTime={`${enterStartTime} ~ ${enterEndTime}`}
            showLocation={showLocation}
            createdAt={createdAt}
          />
          <Separator className="bg-[#5E5E6E]" />
          <footer>
            {isTicketCancelAvailable && <ConfirmModal ticketId={ticketId} />}
          </footer>
        </section>
      </CardContent>
      {ticketStatus !== "입금 확인중" && (
        <CardFooter className="mx-5 mb-3 justify-center overflow-hidden rounded-lg bg-[#FDC950] py-3">
          <div className="inline-flex flex-nowrap items-center">
            <h1 className="text-center text-sm text-[#5E5E6E]">
              입장 시 신분증을 함께 제시해 주세요!
            </h1>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};
export default TicketModal;

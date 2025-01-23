import { Separator } from "@uket/ui/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@uket/ui/components/ui/card";
import { TicketItem } from "@uket/api/types/ticket";

import Indicator from "@/components/Indicator";
import QrCodeAndDepositErrorFallback from "@/components/fallback/QrcodeAndDepositErrorFallback";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";



import TicketHeader from "./TicketHeader";
import TicketDetail from "./TicketDetail";
import Qrcode from "./Qrcode";
import Deposit from "./Deposit";
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
            {ticketStatus === "입금 확인중" && (
              <Deposit
                ticketId={ticketId}
                ticketStatus={ticketStatus}
                eventId={eventId}
              />
            )}
            {ticketStatus === "예매 완료" && (
              <Qrcode ticketId={ticketId} ticketStatus={ticketStatus} />
            )}
            {ticketStatus === "입장 완료" && (
              <div className="flex flex-col items-center text-desc h-40 justify-center gap-2">
                <h1 className="font-black text-xl">입장 완료! 공연을 즐겨보세요</h1>
                <h2 className="font-medium text-sm">재입장은 관리자에게 문의 바랍니다.</h2>
              </div>
            )}
          </RetryErrorBoundary>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="flex flex-col gap-3">
          <TicketHeader universityName={universityName} eventName={eventName} />
          <Separator className="bg-desc" />
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
          <div className="inline-flex min-w-full flex-nowrap items-center gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <h1
                key={index}
                className="animate-infinite-scroll min-w-full text-center text-sm text-[#5E5E6E]"
                aria-hidden={true}
              >
                <span>입장 시 신분증을 함께 제시해 주세요!</span>
              </h1>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
};
export default TicketModal;

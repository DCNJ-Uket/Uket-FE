import { lazy } from "react";
import { Card, CardContent } from "@uket/ui/components/ui/card";
import { AspectRatio } from "@uket/ui/components/ui/aspect-ratio";

import Indicator from "@/components/Indicator";

import { QRCodeType, TicketItem } from "@/types/ticketType";

import TicketHeader from "./TicketHeader";
import TicketDetail from "./TicketDetail";
import GridItem from "./GridItem";

const QRCode = lazy(() => import("./QRCode"));
const ConfirmModal = lazy(() => import("./ConfirmModal"));

interface TicketProps {
  ticket: TicketItem;
  qrCode: QRCodeType;
}

const Ticket = (props: TicketProps) => {
  const {
    ticket: {
      userName,
      showDate,
      enterStartTime,
      enterEndTime,
      showLocation,
      universityName,
      ticketStatus,
      ticketNo,
      showName,
      eventName,
      ticketId,
    },
    qrCode,
  } = props;

  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardContent className="flex flex-col divide-y divide-dashed p-0">
        <section className="flex basis-3/4 flex-col overflow-hidden rounded-b-3xl rounded-t-xl bg-white shadow-xl">
          <header className="relative">
            <AspectRatio ratio={16 / 9}>
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="ticket"
              />
            </AspectRatio>
            <Indicator
              variant={"darkdeposit"}
              title={ticketStatus}
              rounded
              className="left-3 top-3"
            />
          </header>
          <main className="container flex grow flex-col justify-around gap-3 py-5">
            <TicketHeader
              universityName={universityName}
              eventName={eventName}
              showName={showName}
            />
            <TicketDetail
              userName={userName}
              showDate={showDate}
              enterTime={`${enterStartTime} ~ ${enterEndTime}`}
              showLocation={showLocation}
            />
          </main>
        </section>
        <footer className="flex basis-1/4 justify-around rounded-b-xl rounded-t-3xl bg-white py-5 pl-5 shadow-md">
          <aside className="flex flex-col items-start justify-between">
            <div className="w-32 truncate">
              <GridItem title="일련번호" content={ticketNo} isTicketNo />
            </div>
            <ConfirmModal />
          </aside>
          <aside>
            <QRCode qrCode={qrCode} id={ticketId} />
          </aside>
        </footer>
      </CardContent>
    </Card>
  );
};

export default Ticket;

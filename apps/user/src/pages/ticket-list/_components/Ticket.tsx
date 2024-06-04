import { Card, CardContent } from "@uket/ui/components/ui/card";
import { AspectRatio } from "@uket/ui/components/ui/aspect-ratio";

import Indicator from "@/components/Indicator";

import TicketHeader from "./TicketHeader";
import TicketDetail from "./TicketDetail";
import QRCode from "./QRCode";
import GridItem from "./GridItem";
import ConfirmModal from "./ConfirmModal";

// TODO: 실제 QR Code 추가
const Ticket = () => {
  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardContent className="flex h-[500px] flex-col divide-y-2 divide-dashed p-0">
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
              title="입금 확인중"
              rounded
              className="left-3 top-3"
            />
          </header>
          <main className="container flex grow flex-col justify-around py-5">
            <TicketHeader
              university="건국대학교"
              title="녹색지대"
              day="DAY 1"
            />
            <TicketDetail
              owner="김건국"
              enterDate="4월 21일 (수)"
              enterTime="17:00~17:20"
              location="건국대학교 노천극장"
            />
          </main>
        </section>
        <footer className="container flex basis-1/4 justify-between rounded-b-xl rounded-t-3xl bg-white py-5 shadow-md">
          <aside className="flex flex-col items-start justify-between">
            <GridItem title="일련번호" content="102389751" />
            <ConfirmModal />
          </aside>
          <aside>
            <QRCode />
          </aside>
        </footer>
      </CardContent>
    </Card>
  );
};

export default Ticket;

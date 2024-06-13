import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@uket/ui/components/ui/carousel";
import Ticket from "./Ticket";
import { useQueryMyTicketList } from "@/hooks/queries/useQueryMyTicketList";
import { useQueryTicketQRCode } from "@/hooks/queries/useQueryTicketQRCode";

const TicketListSection = () => {
  const { data: myTicketList } = useQueryMyTicketList();
  const { data } = useQueryTicketQRCode(myTicketList);

  return (
    <Carousel className="w-full max-w-full" opts={{ loop: true }}>
      <CarouselContent className="-ml-1">
        {myTicketList.length > 0 &&
          myTicketList.map(ticket => (
            <CarouselItem
              key={ticket.ticketId}
              className="basis-4/5 pl-2 sm:basis-1/2 sm:pl-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
            >
              <div className="p-1">
                <Ticket ticket={ticket} qrCode={data[ticket.ticketId]} />
              </div>
            </CarouselItem>
          ))}
        {myTicketList.length === 0 && (
          <div className="container flex h-60 items-center justify-center text-center">
            <div className="text-lg font-bold text-gray-500">
              예매한 티켓이 없어요..!
            </div>
          </div>
        )}
      </CarouselContent>
    </Carousel>
  );
};

export default TicketListSection;

import { cn } from "@uket/ui/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@uket/ui/components/ui/carousel";

import { useQueryTicketQRCode } from "@/hooks/queries/useQueryTicketQRCode";
import { useQueryMyTicketList } from "@/hooks/queries/useQueryMyTicketList";

import Ticket from "./Ticket";

const TicketListSection = () => {
  const { data: myTicketList } = useQueryMyTicketList();
  const { data } = useQueryTicketQRCode(myTicketList);

  return (
    <Carousel className="w-full max-w-full" opts={{ loop: true }}>
      <CarouselContent
        className={cn(
          "-ml-1",
          myTicketList.length === 1 && "flex justify-center",
        )}
      >
        {myTicketList.length > 0 &&
          myTicketList.map(ticket => (
            <CarouselItem
              key={ticket.ticketId}
              className="basis-5/6 pb-2 pl-2 sm:basis-1/2 sm:pl-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3"
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
{
  /* <Carousel className="w-full max-w-full" opts={{ loop: true }}>
      <CarouselContent
        className={cn(
          "-ml-1",
          myTicketList.length === 1 && "flex justify-center",
        )}
      >
        {myTicketList.length > 0 &&
          myTicketList.map(ticket => (
            <CarouselItem
              key={ticket.ticketId}
              className=" basis-11/12 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/4"
            >
              <div className="px-0.5 pb-2">
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
    </Carousel> */
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@uket/ui/components/ui/carousel";

import Ticket from "./_components/Ticket";

// TODO: 하드코딩 값을 API 응답 값으로 수정
const TicketList = () => {
  const ticketCount = 14;

  return (
    <main className="relative flex h-full flex-col items-center justify-evenly bg-[#F2F2F2]">
      <main className="mb-10 mt-6 flex h-full w-full flex-col gap-4">
        <header className="container text-xl font-bold">
          <p>내 티켓</p>
        </header>
        <section className="flex w-full justify-center py-10">
          <Carousel className="w-full max-w-full" opts={{ loop: true }}>
            <CarouselContent className="-ml-1">
              {Array.from({ length: ticketCount }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-4/5 pl-2 sm:basis-1/2 sm:pl-10 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                >
                  <div className="p-1">
                    <Ticket />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </main>
    </main>
  );
};

export default TicketList;

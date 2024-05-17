import { useTicketSlide } from "@/hooks/useTicketSlide";

import TicketItem from "./_components/TicketItem";

const TicketList = () => {
  const ticketCount = 14; // 티켓 아이템의 개수
  const ticketWidth = 287; //TicketItem의 너비
  const gapWidth = 10; //TicketItem 사이 gap

  const {
    selectedTicket,
    slidePosition,
    onTouchStart,
    onTouchEnd,
    handleSelectTicket,
  } = useTicketSlide(ticketCount, ticketWidth, gapWidth);

  return (
    <main className="relative flex h-full flex-col items-center justify-evenly bg-[#F2F2F2]">
      <main className="container mb-10 mt-6 flex h-full w-full flex-col gap-4">
        <header className="text-xl font-black">
          <p>내 티켓</p>
        </header>
        <section className="h-full overflow-hidden">
          <div
            className="flex h-full flex-row items-center"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{
              transition: "transform 0.4s ease-in-out",
              transform: `translateX(-${slidePosition}px)`,
              gap: gapWidth,
            }}
          >
            {Array.from({ length: ticketCount }).map((_, index) => (
              <TicketItem
                key={index}
                selected={selectedTicket === index}
                onSelect={() => handleSelectTicket(index)}
              />
            ))}
          </div>
        </section>
      </main>
    </main>
  );
};

export default TicketList;
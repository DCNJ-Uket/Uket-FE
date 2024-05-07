import { useState } from "react";

import TicketItem from "./_components/TicketItem";

const TicketList = () => {
  const [selectedTicket, setSelectedTicket] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [slidePosition, setSlidePosition] = useState<number>(0);

  const ticketWidth = 287; //TicketItem의 너비
  const gapWidth = 10; //TicketItem 사이 gap
  const slideWidth = ticketWidth + gapWidth;
  const ticketCount = 14; // 티켓 아이템의 개수

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0].pageX);
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = event.changedTouches[0].pageX;
    const distanceX = touchStartX - touchEndX;

    const maxSlidePosition = (ticketCount - 1) * slideWidth;

    let newPosition =
      distanceX < 0 ? slidePosition - slideWidth : slidePosition + slideWidth;

    // 슬라이드 이동 범위 제한
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > maxSlidePosition) {
      newPosition = maxSlidePosition;
    }

    setSelectedTicket(Math.round(newPosition / slideWidth));
    setSlidePosition(newPosition);
  };

  const handleSelectTicket = (index: number) => {
    setSelectedTicket(index);
    setSlidePosition(index * slideWidth);
  };

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

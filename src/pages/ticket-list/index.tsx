import { useState } from "react";

import TicketItem from "./_components/TicketItem";

const TicketList = () => {
  const [selectedTicket, setSelectedTicket] = useState<number | null>(0);

  const handleSelectTicket = (index: number) => {
    setSelectedTicket(index);
  };

  return (
    <main className="relative flex h-full flex-col items-center justify-evenly bg-[#F2F2F2]">
      <main className="container mb-10 mt-6 flex h-full w-full flex-col gap-4">
        <header className="text-xl font-black">
          <p>내 티켓</p>
        </header>
        <section className="flex h-full flex-row items-center gap-[10px] overflow-hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <TicketItem
              key={index}
              selected={selectedTicket === index}
              onSelect={() => handleSelectTicket(index)}
            />
          ))}
        </section>
      </main>
    </main>
  );
};

export default TicketList;

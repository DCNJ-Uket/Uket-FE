

import TicketItem from "./_components/TicketItem";


const TicketList = () => {
  return (
    <main className="relative flex h-full flex-col items-center justify-evenly bg-[#F2F2F2]">
      <main className="container mb-10 mt-6 flex h-full w-full flex-col gap-4">
        <header className="text-[17px] font-bold">
          <p>내 티켓</p>
        </header>
        <section className="flex h-full flex-row">
          <TicketItem />
        </section>
      </main>
    </main>
  );
};

export default TicketList;

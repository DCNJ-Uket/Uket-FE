import TimeItem from "./_components/TimeItem";

const BuyTicket = () => {
  return (
    <main className="relative flex h-full flex-col items-center justify-evenly bg-[#F2F2F2]">
      <main className="container mb-10 mt-6 flex h-full w-full flex-col gap-4">
        <section className="flex h-full w-full flex-col gap-4 overflow-y-scroll">
          {Array.from({ length: 10 }).map((_, index) => (
            <TimeItem key={index} title={`Day ${index + 1}`} />
          ))}
        </section>
      </main>
    </main>
  );
};

export default BuyTicket;

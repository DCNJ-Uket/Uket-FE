import TicketFallback from "./TicketFallback";

const TicketListSectionFallback = () => {
  return (
    <main className="flex flex-row items-center gap-5">
      {Array.from({ length: 3 }).map((_, index) => (
        <TicketFallback key={index} />
      ))}
    </main>
  );
};

export default TicketListSectionFallback;

import TicketListSection from "./_components/TicketListSection";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";
import { Suspense } from "react";
import TicketListSectionFallback from "./_components/fallback/TicketListSectionFallback";

const TicketListPage = () => {
  return (
    <main className="relative flex h-full flex-col items-center justify-evenly bg-[#F2F2F2]">
      <main className="mb-10 mt-6 flex h-full w-full flex-col gap-4">
        <header className="container text-xl font-bold">
          <p>내 티켓</p>
        </header>
        <section className="flex w-full justify-center py-10">
          <RetryErrorBoundary>
            <Suspense fallback={<TicketListSectionFallback />}>
              <TicketListSection />
            </Suspense>
          </RetryErrorBoundary>
        </section>
      </main>
    </main>
  );
};

export default TicketListPage;

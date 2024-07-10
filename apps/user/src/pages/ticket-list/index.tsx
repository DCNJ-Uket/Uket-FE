import { Suspense } from "react";

import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import TicketListSection from "./_components/TicketListSection";
import TicketListSectionFallback from "./_components/fallback/TicketListSectionFallback";

const TicketListPage = () => {
  return (
    <main className="relative flex h-full flex-col items-center justify-evenly bg-[#F2F2F2]">
      <main className="mb-10 mt-6 flex h-full w-full flex-col gap-4">
        <header className="container flex items-center justify-between text-xl font-bold">
          <p>내 티켓</p>
          <p className="text-brand border-brand bg-brand/10 w-fit rounded-md border-[0.5px] px-2 py-1 text-xs">
            티켓을 터치하여 QR 제시
          </p>
        </header>
        <section className="flex w-full justify-center py-10 lg:container">
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

import { Suspense } from "react";

import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { Stack } from "@/utils/buyTicketFlow";

const BuyTicket = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <RetryErrorBoundary>
        <Suspense>
          <Stack />
        </Suspense>
      </RetryErrorBoundary>
    </main>
  );
};

export default BuyTicket;

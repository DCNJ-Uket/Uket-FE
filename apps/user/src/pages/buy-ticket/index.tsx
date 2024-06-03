import { Suspense } from "react";

import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { Stack } from "@/utils/buyTicketFlow";

const BuyTicket = () => {
  return (
    <main>
      <RetryErrorBoundary>
        <Suspense>
          <Stack />
        </Suspense>
      </RetryErrorBoundary>
    </main>
  );
};

export default BuyTicket;

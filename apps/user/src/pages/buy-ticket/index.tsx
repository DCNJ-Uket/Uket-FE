import { FallbackProps } from "react-error-boundary";
import { Suspense } from "react";

import BuyTicketErrorFallback from "@/components/fallback/BuyTicketErrorFallback";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { Stack } from "@/utils/buyTicketFlow";

const BuyTicket = () => {
  return (
    <main className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 items-center justify-center sm:w-[500px]">
      <RetryErrorBoundary
        fallbackComponent={(props: FallbackProps) => (
          <BuyTicketErrorFallback {...props} />
        )}
      >
        <Suspense>
          <Stack />
        </Suspense>
      </RetryErrorBoundary>
    </main>
  );
};

export default BuyTicket;

import { FallbackProps } from "react-error-boundary";
import { Suspense } from "react";

import BuyTicketErrorFallback from "@/components/fallback/BuyTicketErrorFallback";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { Stack } from "@/utils/buyTicketFlow";

const BuyTicket = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
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

import { Suspense } from "react";

import { Stack } from "@/utils/buyTicketFlow";

const BuyTicket = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Suspense>
        <Stack />
      </Suspense>
    </main>
  );
};

export default BuyTicket;

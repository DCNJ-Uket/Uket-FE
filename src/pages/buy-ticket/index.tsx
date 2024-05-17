import { Suspense } from "react";

import { Stack } from "@/utils/buyTicketFlow";

const BuyTicket = () => {
  return (
    <main>
      <Suspense>
        <Stack />
      </Suspense>
    </main>
  );
};

export default BuyTicket;

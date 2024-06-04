import type { TypeActivities } from "./buyTicketFlow";

import { useActions } from "@stackflow/react";

export const useTicketFlow = () => {
  return useActions<TypeActivities>();
};

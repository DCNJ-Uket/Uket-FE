import { useSuspenseQuery } from "@tanstack/react-query";

import { getReservationList } from "@/api/show";

export const useQueryReservationList = (id: string | null) => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["reservation-info", id],
    queryFn: () => getReservationList(id),
  });

  if (error) {
    throw error;
  }

  return { data };
};

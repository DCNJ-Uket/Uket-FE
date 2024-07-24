import { useSuspenseQuery } from "@tanstack/react-query";

import { getReservationList } from "@/api/show";

export const useQueryReservationList = (
  id: string | null,
  reservationUserType: string | null,
) => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["reservation-info", id, reservationUserType],
    queryFn: () => getReservationList(id, reservationUserType),
  });

  if (error) {
    throw error;
  }

  return { data };
};

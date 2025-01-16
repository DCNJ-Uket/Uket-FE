import { useSuspenseQuery } from "@tanstack/react-query";

import { getReservationList } from "@/api/show";

export const useQueryReservationList = (
  id: string | null,
  reservationUserType?: string | null,
) => {
  const userType =
    reservationUserType !== undefined ? reservationUserType : "일반인";
  const { data } = useSuspenseQuery({
    queryKey: ["reservation-info", id, userType],
    queryFn: () => getReservationList(id, userType),
    staleTime: 0,
  });

  return { data };
};

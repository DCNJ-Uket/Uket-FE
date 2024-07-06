import { useSuspenseQuery } from "@tanstack/react-query";

import { getShowList } from "@/api/show";

export const useQueryShowList = (id: string | null) => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["show-info", id],
    queryFn: () => getShowList(id),
  });

  if (error) {
    throw error;
  }
  return { data };
};

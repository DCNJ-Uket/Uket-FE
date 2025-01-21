import { useSuspenseQuery } from "@tanstack/react-query";

import { getShowList } from "@/api/show";

export const useQueryShowList = (id: string | null) => {
  const { data } = useSuspenseQuery({
    queryKey: ["show-info", id],
    queryFn: () => getShowList(id),
  });

  return { data };
};

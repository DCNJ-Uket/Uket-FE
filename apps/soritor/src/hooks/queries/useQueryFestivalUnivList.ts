import dayjs from "dayjs";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getFestivalUniversityList } from "@/api/univ";

export const useQueryFestivalUnivList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["univ-select"],
    queryFn: getFestivalUniversityList,
    select: data => {
      return data.map(item => ({
        ...item,
        startDateTime: dayjs(item.startDateTime).format("YYYY.MM.DD HH:mm"),
      }));
    },
  });

  return { data };
};

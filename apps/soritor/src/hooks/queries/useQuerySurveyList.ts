import { useSuspenseQuery } from "@tanstack/react-query";

import { getSurveyList } from "@/api/survey";

export const useQuerySurveyList = (eventId: string | null) => {
  const { data } = useSuspenseQuery({
    queryKey: ["survey-list", eventId],
    queryFn: () => getSurveyList(eventId),
  });

  return { data };
};

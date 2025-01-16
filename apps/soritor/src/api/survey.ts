import { SurveyRequest, SurveyResponse } from "@/types/surveyType";

import { fetcher } from "./instance";

export const getSurveyList = async (id: string | null) => {
  const { data } = await fetcher.get<SurveyResponse>(`/events/${id}/survey`);

  return { surveyId: data.surveyId, surveys: data.forms };
};

export const submitSurvey = async (surveyForm: SurveyRequest) => {
  const { data } = await fetcher.post("/survey", surveyForm);
  return data;
};

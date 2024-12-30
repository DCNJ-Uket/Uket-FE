import { SurveyRequest, SurveyResponse } from "@/types/surveyType";

import { instance } from "./instance";

export const getSurveyList = async (id: string | null) => {
  const { data } = await instance.get<SurveyResponse>(`/events/${id}/survey`);

  return { surveyId: data.surveyId, surveys: data.forms };
};

export const submitSurvey = async (surveyForm: SurveyRequest) => {
  const { data } = await instance.post("/survey", surveyForm);
  return data;
};

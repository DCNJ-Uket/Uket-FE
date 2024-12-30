import { useMutation } from "@tanstack/react-query";

import { submitSurvey } from "@/api/survey";

import { SurveyFormSchemaType } from "@/hooks/useSurveyForm";

export const useMutationSubmitSurvey = () => {
  const mutation = useMutation({
    mutationFn: (data: SurveyFormSchemaType) => submitSurvey(data),
    onSuccess: data => {
      return data;
    },
  });

  return mutation;
};

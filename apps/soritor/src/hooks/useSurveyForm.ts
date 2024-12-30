import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMutationSubmitSurvey } from "@/hooks/mutations/useMutationSubmitSurvey";

export type SurveyFormSchemaType = z.infer<typeof SurveyRequestSchema>;
export type SurveyFormType = UseFormReturn<
  SurveyFormSchemaType,
  unknown,
  undefined
>;

export const SurveyRequestyFormTypeSchema = z.object({
  formId: z.number(),
  response: z.string(),
});

export const SurveyRequestSchema = z.object({
  surveyId: z.number(),
  responses: z.array(SurveyRequestyFormTypeSchema),
});

export const useSurveyForm = () => {
  const { mutateAsync, isPending } = useMutationSubmitSurvey();

  const surveyForm = useForm<SurveyFormSchemaType>({
    resolver: zodResolver(SurveyRequestSchema),
    defaultValues: {
      surveyId: -1,
      responses: [],
    },
    mode: "onChange",
  });

  const onSurveySubmit = async (data: SurveyFormSchemaType) => {
    const { surveyId, responses } = data;

    const response = await mutateAsync({ surveyId, responses });
    return response;
  };

  return { surveyForm, onSurveySubmit, isSurveyPending: isPending };
};

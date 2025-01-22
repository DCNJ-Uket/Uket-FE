import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuerySurveyList } from "@uket/api/queries/reservation";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { useSurveyForm } from "@/hooks/useSurveyForm";

import SelectHeader from "./SelectHeader";
import QuestionSection from "./QuestionSection";
import NextButton from "./NextButton";
import HeaderItem from "./HeaderItem";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

interface QuestionParams extends ActivityParams {
  univName: string;
  showDate: string;
  showTime: string;
}

const QuestionActivity: ActivityComponentType<QuestionParams> = ({
  params,
}) => {
  const { form, univName, showDate, showTime } = params;

  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("eventId");

  const { data } = useQuerySurveyList(Number(eventId));
  const { surveyId, surveys } = data;

  const [performer, setPerformer] = useState("");

  const { surveyForm } = useSurveyForm();
  surveyForm.setValue("surveyId", surveyId);
  useEffect(() => {
    if (performer) {
      surveyForm.setValue("responses", [
        { formId: surveys[0].formId, response: performer },
      ]);
    }
  }, [performer, surveys, surveyForm]);

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <SelectHeader
            univName={univName}
            formatShowDate={showDate}
            formatSelectTime={showTime}
          />
          <div className="flex grow flex-col justify-start gap-5 py-6">
            <ActivityHeader className="px-5">
              <HeaderItem step={"03"} content={"아래 질문에 답변해 주세요."} />
            </ActivityHeader>
            <QuestionSection
              isNecessary={surveys[0].isNecessary}
              performer={performer}
              setPerformer={setPerformer}
              question={surveys[0].question}
              performerList={surveys[0].options}
            />
          </div>
          <ActivityFooter className="z-50">
            <NextButton
              type="submit"
              activityName={"CompleteActivity" as never}
              disabled={surveys[0].isNecessary && performer === ""}
              params={{
                univName: univName,
                form: form,
              }}
              survey={{
                form: surveyForm,
              }}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuestionActivity;

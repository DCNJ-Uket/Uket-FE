import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

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
  const { form, showDate, univName, showTime } = params;

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
            <QuestionSection />
          </div>
          <ActivityFooter className="z-50">
            <NextButton
              type="submit"
              activityName={"CompleteActivity" as never}
              disabled={false}
              params={{
                form: form,
              }}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuestionActivity;

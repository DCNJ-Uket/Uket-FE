import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";


import TimeItem from "./TimeItem";
import NextButton from "./NextButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

const TimeActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <p className="text-[15px] font-light text-[#5E5E6E]">STEP 02</p>
            <h1 className="text-[23px] font-black">
              <p>예매 시간을 선택해주세요.</p>
            </h1>
          </ActivityHeader>
          {Array.from({ length: 14 }).map((_, index) => (
            <TimeItem key={index} title={`Time ${index + 1}`} />
          ))}
          <ActivityFooter>
            <NextButton
              activityName={"CompleteActivity" as never}
              disabled={false}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default TimeActivity;

import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NextButton from "./NextButton";
import DateItem from "./DateItem";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";


const DateActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <p className="text-[15px] font-light text-[#5E5E6E]">STEP 01</p>
            <h1 className="text-[23px] font-black">
              <p>예매 날짜를 선택해주세요.</p>
            </h1>
          </ActivityHeader>
          {Array.from({ length: 14 }).map((_, index) => (
            <DateItem key={index} title={`Day ${index + 1}`} />
          ))}

          <ActivityFooter>
            <NextButton
              activityName={"TimeActivity" as never}
              disabled={false}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default DateActivity;

import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NextButton from "./NextButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";


const CompleteActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <h1 className="text-[23px] font-black">
              <p>티켓 예매 완료</p>
            </h1>
          </ActivityHeader>
          <ActivityFooter>
            <NextButton
              activityName={"MainActivity" as never}
              disabled={false}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default CompleteActivity;

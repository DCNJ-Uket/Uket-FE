import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NextStepButton from "./NextStepButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

// TODO: 다음 Stack 이동 로직 변경
const CompleteActivity: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={{
        border: false,
      }}
    >
      <Activity>
        <ActivityContent>
          <ActivityHeader className="justify-center items-center">
            <h1 className="text-2xl font-bold">회원가입이 완료되었습니다!</h1>
            <h2 className="text-lg font-bold">
              <p>이제 학교 축제 티켓을</p>
              <p>예매하러 가볼까요?</p>
            </h2>
          </ActivityHeader>
          <ActivityFooter>
            <NextStepButton
              activityName={"MainActivity" as never}
              disabled={false}
            />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default CompleteActivity;

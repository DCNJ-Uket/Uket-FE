import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NextStepButton from "./NextStepButton";

// TODO: 다음 Stack 이동 로직 변경
const CompleteActivity: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={{
        border: false,
      }}
    >
      <main className="flex flex-col justify-center items-center h-full">
        <header className="container flex flex-col gap-12 justify-center items-center w-full grow">
          <h1 className="text-2xl font-bold">회원가입이 완료되었습니다!</h1>
          <h2 className="text-lg font-bold">
            <p>이제 학교 축제 티켓을</p>
            <p>예매하러 가볼까요?</p>
          </h2>
        </header>
        <footer className="w-full">
          <NextStepButton
            activityName={"MainActivity" as never}
            disabled={false}
          />
        </footer>
      </main>
    </AppScreen>
  );
};

export default CompleteActivity;

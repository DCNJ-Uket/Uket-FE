import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NextStepButton from "./NextStepButton";
import ChooseItem from "./ChooseItem";

const ChooseActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <main className="flex flex-col items-center h-full">
        <section className="container flex flex-col gap-10 justify-center grow">
          <header className="flex flex-col gap-4 w-full">
            <h1 className="text-xl font-bold">
              <p>대학생인가요?</p>
              <p>일반인인가요?</p>
            </h1>
          </header>
          <section className="flex flex-col gap-2 justify-center items-center">
            <ChooseItem title="대학생" desc="소속 학교가 있는 대학생이에요" />
            <ChooseItem title="일반인" desc="소속 학교가 없는 일반인이에요" />
          </section>
        </section>
        <footer className="w-full">
          <NextStepButton activityName={"NameActivity" as never} />
        </footer>
      </main>
    </AppScreen>
  );
};

export default ChooseActivity;
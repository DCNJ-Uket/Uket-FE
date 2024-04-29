import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Input } from "@/components/ui/input";

import NextStepButton from "./NextStepButton";

const PhoneActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ border: false }}>
      <main className="flex flex-col items-center h-full">
        <section className="container flex flex-col gap-12 justify-center grow">
          <header className="flex flex-col gap-2 w-full">
            <h1 className="text-xl font-bold">
              <p>전화번호를 입력해 주세요</p>
            </h1>
            <h2 className="text-[#B6B7B8]">
              <p>하이픈(-)없이</p>
              <p>숫자로만 입력해 주세요.</p>
            </h2>
          </header>
          <section>
            <Input
              placeholder="전화번호를 입력해 주세요"
              className="border-2 border-black"
            />
          </section>
        </section>
        <footer className="w-full">
          <NextStepButton activityName={"UnivActivity" as never} />
        </footer>
      </main>
    </AppScreen>
  );
};

export default PhoneActivity;

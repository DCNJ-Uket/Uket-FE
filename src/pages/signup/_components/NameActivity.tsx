import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Input } from "@/components/ui/input";

import NextStepButton from "./NextStepButton";

const NameActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ border: false }}>
      <main className="flex flex-col items-center h-full">
        <section className="container flex flex-col gap-10 justify-center grow">
          <header className="flex flex-col gap-3 w-full">
            <h1 className="text-xl font-bold">
              <p>입금자명 확인을 위해</p>
              <p>성함을 입력해주세요</p>
            </h1>
            <h2 className="text-[#B6B7B8]">예금주명과 동일하게 작성해주세요</h2>
          </header>
          <section>
            <Input placeholder="예금주명을 입력하세요" className="border-2 border-black" />
          </section>
        </section>
        <footer className="w-full">
          <NextStepButton activityName={"PhoneActivity" as never} />
        </footer>
      </main>
    </AppScreen>
  );
};

export default NameActivity;

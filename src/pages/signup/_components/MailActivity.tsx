import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Input } from "@/components/ui/input";

import NextStepButton from "./NextStepButton";

const MailActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ border: false }}>
      <main className="flex flex-col items-center h-full">
        <section className="container flex flex-col gap-10 justify-center grow">
          <header className="flex flex-col gap-3 w-full">
            <h1 className="text-xl font-bold">
              <p>학생 인증을 위해</p>
              <p>학교 메일 인증이 필요해요</p>
            </h1>
          </header>
          <section className="flex flex-col gap-3">
            <div>
              <Input
                type="email"
                id="email"
                placeholder="학교 메일 주소 입력하기"
                className="border-2 border-black"
              />
            </div>
          </section>
        </section>
        <footer className="w-full">
          <NextStepButton
            activityName={"MailAuthActivity" as never}
            params={{ email: "pisik05@konkuk.ac.kr" }}
          />
        </footer>
      </main>
    </AppScreen>
  );
};

export default MailActivity;

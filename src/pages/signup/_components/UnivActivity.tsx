import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import NextStepButton from "./NextStepButton";

const UnivActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ border: false }}>
      <main className="flex flex-col items-center h-full">
        <section className="container flex flex-col gap-3 justify-center grow">
          <header className="flex flex-col gap-3 w-full">
            <h1 className="text-xl font-bold">
              <p>학교와 학과, 학번을 입력해 주세요</p>
            </h1>
          </header>
          <section className="flex flex-col gap-3">
            <div>
              <Label htmlFor="univ">학교</Label>
              <Input
                type="text"
                id="univ"
                placeholder="학교 검색"
                className="border-2 border-black"
              />
            </div>
            <div>
              <Label htmlFor="major">학과</Label>
              <Input
                type="text"
                id="major"
                placeholder="학과 검색"
                className="border-2 border-black"
              />
            </div>
            <div>
              <Label htmlFor="number">학번</Label>
              <Input
                type="number"
                id="number"
                placeholder="학번 입력"
                className="border-2 border-black"
              />
            </div>
          </section>
        </section>
        <footer className="w-full">
          <NextStepButton activityName={"MailActivity" as never} />
        </footer>
      </main>
    </AppScreen>
  );
};

export default UnivActivity;

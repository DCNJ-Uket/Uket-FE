import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import NextStepButton from "./NextStepButton";

interface MailAuthActivityProps {
  email: string;
}

// TODO: 메일 인증 로직 & 다음 Stack 로직 추가
const MailAuthActivity: ActivityComponentType<MailAuthActivityProps> = ({
  params,
}) => {
  return (
    <AppScreen appBar={{ border: false }}>
      <main className="flex flex-col items-center h-full">
        <section className="container flex flex-col gap-10 justify-center grow">
          <header className="flex flex-col gap-3 w-full">
            <h1 className="text-xl font-bold">
              <p>{params.email}로</p>
              <p>보낸 메일에 적힌 숫자를 입력해 주세요</p>
            </h1>
          </header>
          <section className="flex flex-col">
            <Input
              autoComplete="off"
              id="email"
              placeholder="인증 번호 입력하기"
              className="border-2 border-black"
            />
            <aside className="flex justify-between items-center text-sm">
              <div>2:32</div>
              <div className="flex gap-2 items-center text-xs">
                <span>메일이 오지 않았나요?</span>
                <Button variant="link" className="p-0 text-xs text-[#7B7B7B]">
                  다시 보내기
                </Button>
              </div>
            </aside>
          </section>
        </section>
        <footer className="w-full">
          <NextStepButton activityName={"CompleteActivity" as never} />
        </footer>
      </main>
    </AppScreen>
  );
};

export default MailAuthActivity;

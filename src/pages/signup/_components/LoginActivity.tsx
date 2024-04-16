import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Button } from "@/components/ui/button";

const LoginActivity: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={{
        border: false,
      }}
    >
      <main className="container flex flex-col justify-evenly items-center h-full">
        <header className="flex flex-col gap-4 w-full">
          <h1 className="text-3xl font-bold">
            <p>학교 축제 티켓을</p>
            <p>예매해볼까요?</p>
          </h1>
          <h2 className="text-[#454545]">
            회원가입/로그인 방식을 선택해주세요
          </h2>
        </header>
        <section className="flex flex-col gap-2 justify-center items-center w-full">
          <Button className="w-full bg-[#FEE500] text-[#191919]">
            카카오 계정으로 계속하기
          </Button>
          <Button className="w-full text-black bg-transparent border">
            구글 계정으로 계속하기
          </Button>
        </section>
      </main>
    </AppScreen>
  );
};

export default LoginActivity;

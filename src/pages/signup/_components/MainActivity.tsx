import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { Button } from "@/components/ui/button";

import { useMyFlow } from "@/utils/useMyFlow";

const MainActivity: ActivityComponentType = () => {
  const { push } = useMyFlow();

  const handleClickLoginButton = () => {
    push("LoginActivity", {});
  };

  return (
    <AppScreen
      appBar={{
        border: false,
        renderLeft: () => <div className="px-3 font-bold">Uket</div>,
        renderRight: () => (
          <Button
            variant="ghost"
            className="pt-3 font-bold"
            onClick={handleClickLoginButton}
          >
            로그인
          </Button>
        ),
      }}
    >
      <main className="container flex flex-col justify-evenly items-center h-full">
        <header className="w-full">
          <h1 className="text-xl font-bold">
            <p>학교 축제 공연 감상,</p>
            <p>기다림 없이</p>
          </h1>
        </header>
        <section className="flex flex-col gap-2 justify-center items-center w-full">
          <Button className="w-full text-white bg-brand hover:bg-brand/80 sm:w-80">
            축제 예매하기
          </Button>
          <Button className="w-full bg-transparent border border-brand text-brand hover:bg-primary-foreground sm:w-80">
            내 티켓 확인하기
          </Button>
        </section>
      </main>
    </AppScreen>
  );
};

export default MainActivity;

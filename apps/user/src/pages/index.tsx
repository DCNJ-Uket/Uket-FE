import { Button } from "@uket/ui/components/ui/button";

import Nav from "@/components/Nav";
import AuthRequiredModalButton from "@/components/AuthRequiredModalButton";

import { useNavigate } from "@/router";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <main className="landing-container flex h-full flex-col items-center justify-evenly">
      <header className="sticky left-0 top-0 z-10 w-full">
        <Nav />
      </header>
      <main className="container flex h-full w-full flex-col justify-evenly">
        <section className="mt-10 flex w-full grow flex-col items-center gap-5">
          <h1 className="text-center text-3xl font-bold text-white">
            <p>학교 축제 공연 감상,</p>
            <p>기다림 없이 UKET</p>
          </h1>
        </section>
        <section className="mb-5 flex w-full flex-col items-center justify-center gap-2">
          <Button
            variant="secondary"
            className="w-full rounded-xl bg-white p-7 text-base font-bold text-black hover:bg-slate-200 sm:w-80"
            onClick={() => navigate("/select-univ")}
          >
            축제 예매하기
          </Button>
          <AuthRequiredModalButton
            title="내 티켓 확인하기"
            path="/ticket-list"
            className="w-full rounded-xl border border-white bg-black p-7 text-base text-white sm:w-80"
          />
        </section>
      </main>
    </main>
  );
};

export default LandingPage;

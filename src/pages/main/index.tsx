import { Button } from "@/components/ui/button";

import LandingTicket from "/landingTicket.png";

import { Link } from "@/router";

const MainPage = () => {
  return (
    <main className="flex flex-col justify-evenly items-center h-full">
      <main className="container flex flex-col justify-evenly w-full h-full">
        <header className="flex flex-col gap-5 items-center w-full">
          <img src={LandingTicket} width={82} loading="lazy" />
          <h1 className="text-xl font-bold text-center">
            <p>학교 축제 공연 감상,</p>
            <p>기다림 없이</p>
          </h1>
        </header>
        <section className="flex flex-col gap-2 justify-center items-center w-full">
          <Link to="/select-univ" className="w-full">
            <Button className="p-6 w-full text-base text-white rounded-xl border border-brand bg-brand hover:bg-brand/80 sm:w-80">
              축제 예매하기
            </Button>
          </Link>
          <Button className="p-6 w-full text-base bg-transparent rounded-xl border border-brand text-brand hover:bg-primary-foreground sm:w-80">
            내 티켓 확인하기
          </Button>
        </section>
      </main>
    </main>
  );
};

export default MainPage;

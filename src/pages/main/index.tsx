import { Button } from "@/components/ui/button";

import { Link } from "@/router";

const MainPage = () => {
  return (
    <main className="flex flex-col justify-evenly items-center h-full">
      <header className="container flex justify-between items-center self-stretch mt-2 w-full h-fit">
        <div className="text-2xl font-bold">Uket</div>
        <Link to="/login">
          <Button variant="ghost" className="pt-3 font-bold">
            로그인
          </Button>
        </Link>
      </header>
      <main className="container flex flex-col justify-evenly w-full h-full">
        <section className="flex flex-col items-center w-full">
          <h1 className="text-xl font-bold text-center">
            <p>학교 축제 공연 감상,</p>
            <p>기다림 없이</p>
          </h1>
        </section>
        <section className="flex flex-col gap-2 justify-center items-center w-full">
          <Button className="w-full text-white bg-brand hover:bg-brand/80 sm:w-80">
            축제 예매하기
          </Button>
          <Button className="w-full bg-transparent border border-brand text-brand hover:bg-primary-foreground sm:w-80">
            내 티켓 확인하기
          </Button>
        </section>
      </main>
    </main>
  );
};

export default MainPage;

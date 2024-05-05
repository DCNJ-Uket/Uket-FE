import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

import UnivSelector from "./_components/UnivSelector";

// TODO: 대학교 목록 API 호출로 데이터 받아오기 & 선택한 대학교를 query로 관리 & select-univ 페이지에서 선택한 대학교를 query로 넘기기 e.g. ?select=건국대학교 & 입장 위치에 사용할 지도 API 연결
const HomePage = () => {
  return (
    <main className="relative flex h-full flex-col items-center bg-[#F2F2F2]">
      <main className="container flex flex-col gap-3 mt-2 w-full h-full bg-white">
        <UnivSelector />
        <section className="grow">
          <div className="flex flex-col gap-3">
            <div className="space-y-2">
              <h1 className="text-lg font-bold">축제 일정﹒라인업</h1>
              <div>
                <Skeleton className="w-full h-44 rounded-lg" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-lg font-bold">입장 위치</h1>
              <div>
                <Skeleton className="w-full h-40 rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <footer className="flex gap-3 justify-center items-center mb-3 w-full bg-white">
          <Button className="bg-white rounded-lg border basis-1/2 border-brand text-brand hover:bg-primary-foreground sm:w-80">
            내 티켓 확인
          </Button>
          <Button className="rounded-lg border basis-1/2 border-brand bg-brand hover:bg-brand/80 sm:w-80">
            예매하기
          </Button>
        </footer>
      </main>
    </main>
  );
};

export default HomePage;

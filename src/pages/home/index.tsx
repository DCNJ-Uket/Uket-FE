import { useSearchParams } from "react-router-dom";
import { Suspense } from "react";

import { Button } from "@/components/ui/button";
import RetryErrorBoundary from "@/components/RetryErrorBoundary";

import UnivSelector from "./_components/UnivSelector";
import FestivalSection from "./_components/FestivalSection";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const univId = searchParams.get("id");
  const univName = searchParams.get("select-univ");

  const handleSelectUnivItem = (id: string, name: string) => {
    searchParams.set("select-univ", name);
    searchParams.set("id", id);
    setSearchParams(searchParams);
  };

  return (
    <main className="relative flex h-full flex-col items-center bg-[#F2F2F2]">
      <main className="container flex flex-col gap-3 mt-2 w-full h-full bg-white">
        <UnivSelector currentUniv={univName} onSelect={handleSelectUnivItem} />
        <RetryErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <FestivalSection univId={univId} />
          </Suspense>
        </RetryErrorBoundary>
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

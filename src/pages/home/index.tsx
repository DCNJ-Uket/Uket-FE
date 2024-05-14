import { useSearchParams } from "react-router-dom";
import { Suspense } from "react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import RetryErrorBoundary from "@/components/RetryErrorBoundary";

import UnivSelector from "./_components/UnivSelector";
import FestivalSection from "./_components/FestivalSection";
import FestivalSectionFallback from "./_components/fallback/FestivalSectionFallback";

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
    <main className="relative flex h-full flex-col items-center">
      <Separator className="h-3 bg-[#F2F2F2]" />
      <main className="container mt-2 flex h-full w-full flex-col gap-3 bg-white">
        <UnivSelector currentUniv={univName} onSelect={handleSelectUnivItem} />
        <RetryErrorBoundary resetKeys={[univId]}>
          <Suspense fallback={<FestivalSectionFallback />}>
            <FestivalSection univId={univId} />
          </Suspense>
        </RetryErrorBoundary>
        <footer className="mb-3 flex w-full items-center justify-center gap-3 bg-white">
          <Button className="basis-1/2 rounded-lg border border-brand bg-white text-brand hover:bg-primary-foreground sm:w-80">
            내 티켓 확인
          </Button>
          <Button className="basis-1/2 rounded-lg border border-brand bg-brand hover:bg-brand/80 sm:w-80">
            예매하기
          </Button>
        </footer>
      </main>
    </main>
  );
};

export default HomePage;

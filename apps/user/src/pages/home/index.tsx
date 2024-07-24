import { useSearchParams } from "react-router-dom";
import { FallbackProps } from "react-error-boundary";
import { Suspense, useState } from "react";
import { Separator } from "@uket/ui/components/ui/separator";

import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";
import AuthRequiredModalButton from "@/components/AuthRequiredModalButton";

import UnivSelector from "./_components/UnivSelector";
import FestivalSection from "./_components/FestivalSection";
import UnivSelectorSuspenseFallback from "./_components/fallback/UnivSelectorSuspenseFallback";
import UnivSelectorErrorFallback from "./_components/fallback/UnivSelectorErrorFallback";
import FestivalSectionSuspenseFallback from "./_components/fallback/FestivalSectionSusepnseFallback";

import { useNavigate } from "@/router";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const univId = searchParams.get("id");
  const univName = searchParams.get("select-univ");

  const handleSelectUnivItem = (id: string, name: string) => {
    searchParams.set("select-univ", name);
    searchParams.set("id", id);
    setSearchParams(searchParams);
  };

  //Test
  const [eventId, setEventId] = useState<number>(-1);
  const handleUpdateEventId = (id: number) => {
    setEventId(id);
  };

  const handleBuyTicketNavigate = () => {
    if (eventId !== -1) {
      navigate({
        pathname: "/buy-ticket",
        search: `?univName=${univName}&univId=${univId}&eventId=${eventId}`,
      });
    }
  };

  return (
    <main className="relative flex h-full flex-col items-center">
      <Separator className="h-3 bg-[#F2F2F2]" />
      <main className="container mt-2 flex h-full w-full flex-col gap-3 bg-white">
        <header>
          <RetryErrorBoundary
            fallbackComponent={(props: FallbackProps) => (
              <UnivSelectorErrorFallback {...props} />
            )}
          >
            <Suspense fallback={<UnivSelectorSuspenseFallback />}>
              <UnivSelector
                currentUniv={univName}
                onSelect={handleSelectUnivItem}
              />
            </Suspense>
          </RetryErrorBoundary>
        </header>
        <section className="grow">
          <RetryErrorBoundary resetKeys={[univId]}>
            <Suspense fallback={<FestivalSectionSuspenseFallback />}>
              <FestivalSection
                univId={univId}
                onUpdateEventId={handleUpdateEventId}
              />
            </Suspense>
          </RetryErrorBoundary>
        </section>
        <footer className="mb-3 flex w-full items-center justify-center gap-3 bg-white">
          <AuthRequiredModalButton
            title="내 티켓 확인"
            path="/ticket-list"
            variant="brandsub"
          />
          <AuthRequiredModalButton
            title="예매하기"
            variant="brand"
            onClick={handleBuyTicketNavigate}
          />
        </footer>
      </main>
    </main>
  );
};

export default HomePage;

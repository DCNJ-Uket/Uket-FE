/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSearchParams } from "react-router-dom";
import { Suspense, useState } from "react";
import { Separator } from "@uket/ui/components/ui/separator";

import { useNavigate } from "@/router";

import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";
import AuthRequiredModalButton from "@/components/AuthRequiredModalButton";

import SectionItem from "./_components/SectionItem";
import FestivalSection from "./_components/FestivalSection";
import FestivalDetailSection from "./_components/FestivalDetailSection";
import FestivalSectionSuspenseFallback from "./_components/fallback/FestivalSectionSusepnseFallback";


const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const univId = searchParams.get("id");
  const univName = searchParams.get("select-univ");

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
        <header className="mb-5 pt-3 text-3xl font-bold">{univName}</header>
        <section className="mb-5 grow space-y-5">
          <RetryErrorBoundary resetKeys={[univId]}>
            <Suspense fallback={<FestivalSectionSuspenseFallback />}>
              <FestivalSection
                univName={univName}
                univId={univId}
                onUpdateEventId={handleUpdateEventId}
              />
            </Suspense>
          </RetryErrorBoundary>
          <SectionItem title="상세 정보" item={<FestivalDetailSection />} />
        </section>
        <footer className="sticky bottom-5 z-10 mb-3 flex w-full items-center justify-center gap-3">
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

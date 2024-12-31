import { FallbackProps } from "react-error-boundary";
import { Suspense } from "react";
import { cn } from "@uket/ui/lib/utils";
import { Button } from "@uket/ui/components/ui/button";

import UnivListErrorFallback from "@/components/fallback/UnivListErrorFallback";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";
import DynamicMetaTag from "@/components/DynamicMetaTag";

import { useSelectUniversity } from "@/hooks/useSelectUniversity";

import UnivList from "./_components/UnivList";
import UnivListFallback from "./_components/fallback/UnivListFallback";

const SelectUnivPage = () => {
  const { selectedUnivId, handleSelectUniv, handleNavigate } =
    useSelectUniversity();

  return (
    <main className="relative flex h-full flex-col items-center justify-evenly bg-[#F2F2F2]">
      <DynamicMetaTag
        title="Uket | 공연 선택"
        description="진행 중인 공연을 확인해 보세요!"
        url="https://uket.site/select-univ"
      />
      <main className="container mb-10 mt-7 flex h-full w-full flex-col gap-10 overflow-y-scroll">
        <header className="text-[27px] font-black">
          <p>원하는 공연을 찾아보세요.</p>
        </header>
        <section className="grow">
          <RetryErrorBoundary
            fallbackComponent={(props: FallbackProps) => (
              <UnivListErrorFallback {...props} />
            )}
          >
            <Suspense fallback={<UnivListFallback />}>
              <UnivList
                selectedUnivId={selectedUnivId}
                onSelect={handleSelectUniv}
              />
            </Suspense>
          </RetryErrorBoundary>
        </section>
      </main>
      <footer className="container sticky bottom-5 flex w-full flex-col items-center justify-center">
        <Button
          className={cn(
            "bg-formInput text-buttonDisabled hover:bg-formInput w-full rounded-xl p-6 text-base font-black sm:w-80",
            selectedUnivId && "bg-brand hover:bg-brand/80 text-white",
          )}
          onClick={handleNavigate}
        >
          다음으로
        </Button>
      </footer>
    </main>
  );
};

export default SelectUnivPage;

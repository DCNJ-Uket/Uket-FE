import GreetingHeader from "@/components/GreetingHeader";

import ManageSection from "./_components/ManageSection";
import { isMobile } from "@/utils/isMobile";

export default function BookingManagePage() {
  const mobile = isMobile();

  return (
    <main className="flex h-full flex-col">
      {mobile ? (
        <>
          <GreetingHeader />
          <section className="flex grow flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl font-bold text-[#7250FD]">
              예매 내역 관리는
              <br />
              PC에서만 지원됩니다.
            </p>
            <p className="text-center text-base font-medium text-[#5E5E6E]">
              이 기능은 모바일 환경에서 사용이 어렵습니다.
              <br />
              불편하시더라도 PC로 접속해 주세요.
            </p>
          </section>
        </>
      ) : (
        <main className="flex h-full flex-col">
          <ManageSection />
        </main>
      )}
    </main>
  );
}

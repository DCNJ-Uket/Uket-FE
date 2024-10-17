import { isBrowser } from "react-device-detect";

import GreetingHeader from "@/components/GreetingHeader";

import ManageSection from "./_components/ManageSection";

export default function BookingManagePage() {
  return (
    <main className="flex h-full flex-col">
      {isBrowser ? (
        <main className="flex h-full flex-col">
          <ManageSection />
        </main>
      ) : (
        <>
          <GreetingHeader />
          <section className="flex grow items-center justify-center">
            <p className="text-xl">
              예매 내역 관리 기능은
              <br />
              PC에서만 지원됩니다.
            </p>
          </section>
        </>
      )}
    </main>
  );
}

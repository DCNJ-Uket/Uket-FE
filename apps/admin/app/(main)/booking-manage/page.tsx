import { isBrowser } from "react-device-detect";

import GreetingHeader from "@/components/GreetingHeader";

export default function BookingManagePage() {
  return (
    <main className="flex h-full flex-col">
      {isBrowser ? (
        <>
          <h1 className="py-5 pl-7 text-xl font-bold">예매 내역 관리</h1>
          <section className="grow">룰루</section>
        </>
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

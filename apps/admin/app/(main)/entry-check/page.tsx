import { isBrowser } from "react-device-detect";

import GreetingHeader from "@/components/GreetingHeader";

export default function EntryCheckPage() {
  return (
    <main className="flex h-full flex-col">
      {isBrowser ? (
        <>
          <h1 className="py-5 pl-7 text-xl font-bold">실시간 입장 조회</h1>
          <section className="grow">룰루</section>
        </>
      ) : (
        <>
          <GreetingHeader />
          <section className="flex grow items-center justify-center">
            <p className="text-xl">
              실시간 입장 조회 기능은
              <br />
              PC에서만 지원됩니다.
            </p>
          </section>
        </>
      )}
    </main>
  );
}

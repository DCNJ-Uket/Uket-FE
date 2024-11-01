import { isBrowser } from "react-device-detect";

import GreetingHeader from "@/components/GreetingHeader";

import EntryCheckSection from "./_components/EntryCheckSection";

export default function EntryCheckPage() {
  return (
    <main className="flex h-full flex-col">
      {isBrowser ? (
        <main className="flex h-full flex-col">
          <EntryCheckSection />
        </main>
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

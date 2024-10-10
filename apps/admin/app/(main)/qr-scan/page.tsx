import { isBrowser } from "react-device-detect";

import GreetingHeader from "@/components/GreetingHeader";

import QRReaderSection from "./_components/QRReaderSection";

export default function QRReadPage() {
  return (
    <main className="flex h-full flex-col">
      {isBrowser ? (
        <>
          <h1 className="py-5 pl-7 text-xl font-bold">QR 스캔하기</h1>
          <section className="flex grow items-center justify-center">
            <p className="text-xl">
              QR 스캔하기 기능은 모바일 기기에서만 지원됩니다.
            </p>
          </section>
        </>
      ) : (
        <>
          <GreetingHeader />
          <QRReaderSection />
        </>
      )}
    </main>
  );
}

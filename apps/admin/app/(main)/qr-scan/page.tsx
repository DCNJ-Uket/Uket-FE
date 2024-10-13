import GreetingHeader from "@/components/GreetingHeader";

import QRReaderSection from "./_components/QRReaderSection";

export default function QRReadPage() {
  return (
    <main className="flex h-full flex-col">
      <GreetingHeader />
      <QRReaderSection />
    </main>
  );
}

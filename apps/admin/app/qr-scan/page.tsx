import QRReaderSection from "./_components/QRReaderSection";
import GreetingHeader from "./_components/GreetingHeader";

export default function QRReadPage() {
  return (
    <main className="flex h-full flex-col">
      <GreetingHeader />
      <QRReaderSection />
    </main>
  );
}

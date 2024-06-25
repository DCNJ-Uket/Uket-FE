import React from "react";
import dynamic from "next/dynamic";
import { LoaderCircleIcon } from "@ui/components/ui/icon";

const QRScanner = dynamic(() => import("./QRScanner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center text-brand">
      <LoaderCircleIcon className="w-8 h-8 animate-spin"/>
    </div>
  ),
});

const QRReaderSection = () => {
  return (
    <section className="flex grow justify-center">
      <main className="relative h-full sm:max-w-fit">
        <QRScanner />
      </main>
    </section>
  );
};

export default QRReaderSection;

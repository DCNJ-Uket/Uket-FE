"use client";

import React from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

import QRFinderIcon from "./QRFinderIcon";

// TODO: onScan에 실제 스캔 후 동작할 함수 연결
const QRScanner = () => {
  return (
    <div className="relative h-full">
      <Scanner
        formats={["qr_code"]}
        onScan={result => result}
        classNames={{ video: "object-cover" }}
        styles={{ finderBorder: 1 }}
        components={{ finder: false }}
      >
        <QRFinderIcon />
        <h1 className="absolute left-0 top-6 w-full text-2xl font-bold text-white sm:text-3xl">
          <p className="flex justify-center">
            <span className="bg-brand px-1">입장 QR 코드를 스캔</span>
            <span>해 주세요.</span>
          </p>
        </h1>
        <footer className="absolute bottom-16 left-0 w-full text-white">
          <p className="flex justify-center font-medium">
            QR 코드를 가운데 위치 시키세요.
          </p>
        </footer>
      </Scanner>
    </div>
  );
};

export default QRScanner;

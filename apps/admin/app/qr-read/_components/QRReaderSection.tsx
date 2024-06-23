"use client";

import React, { useEffect, useRef, useState } from "react";
import { SwitchCameraIcon, ScanIcon } from "@ui/components/ui/icon";
import { Button } from "@ui/components/ui/button";

const QRReaderSection = () => {
  const cameraRef = useRef<HTMLVideoElement>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [errorMessage, setErrorMessage] = useState<string | null>(
    "카메라에 접근할 수 없습니다. 권한을 확인해주세요.",
  );

  const handleToggleFacingMode = () => {
    setFacingMode(prevMode => (prevMode === "user" ? "environment" : "user"));
  };

  useEffect(() => {
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode, width: 640, height: 480 },
        });
        if (cameraRef.current) {
          cameraRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error(error);
        console.error((error as Error).name);
        setErrorMessage("카메라에 접근할 수 없습니다. 권한을 확인해주세요.");
        console.error("Error accessing the camera: ", error);
      }
    };

    initCamera();
    return () => {
      if (cameraRef.current && cameraRef.current.srcObject) {
        const tracks = (cameraRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => {
          track.stop();
        });
      }
    };
  }, [facingMode]);

  return (
    <section className="flex grow flex-col items-center gap-10 overflow-x-hidden">
      <main className="relative flex flex-col gap-5 sm:max-w-fit">
        {errorMessage ? (
          <p className="mt-20 font-bold text-red-500">{errorMessage}</p>
        ) : (
          <div className="relative">
            <video ref={cameraRef} autoPlay playsInline />
            <aside className="absolute right-1.5 top-1/2 z-50 -translate-y-1/2">
              <Button
                size="icon"
                variant="ghost"
                onClick={handleToggleFacingMode}
                className="hover:bg-black/30"
              >
                <SwitchCameraIcon className="text-white" />
              </Button>
            </aside>
            <h1 className="absolute left-0 top-6 w-full text-2xl font-bold text-white sm:text-3xl">
              <p className="flex justify-center">
                <span className="bg-brand px-1">입장 QR 코드를 스캔</span>
                <span>해 주세요.</span>
              </p>
            </h1>
            <div>
              <ScanIcon className="text-brand absolute left-0 top-0 h-full w-full stroke-[0.3]" />
            </div>
            <footer className="absolute bottom-16 left-0 w-full text-white">
              <p className="flex justify-center font-medium">
                QR 코드를 가운데 위치 시키세요.
              </p>
            </footer>
          </div>
        )}
      </main>
    </section>
  );
};

export default QRReaderSection;

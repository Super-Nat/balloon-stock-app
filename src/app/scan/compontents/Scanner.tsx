"use client";

import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

type Props = {
  onResult: (value: string) => void;
};

export function Scanner({ onResult }: Props) {
  useEffect(() => {
    const qr = new Html5Qrcode("qr-reader");

    qr.start(
      { facingMode: "environment" }, // กล้องหลัง
      {
        fps: 10,
        qrbox: { width: 300, height: 300 },
      },
      (decodedText) => {
        onResult(decodedText);
        qr.stop().catch(() => {});
      },
      () => {}
    );

    return () => {
      qr.stop().catch(() => {});
    };
  }, [onResult]);

  return <div id="qr-reader" className="w-[300px] h-[300px] bg-black" />;
}

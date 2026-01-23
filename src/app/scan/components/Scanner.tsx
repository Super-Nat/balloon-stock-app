"use client";

import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "next/navigation";

export default function QRScanner() {
  const router = useRouter();
  const startedRef = useRef(false);
  const handledRef = useRef(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const scanner = new Html5Qrcode("qr-reader");
    scannerRef.current = scanner;

    scanner
      .start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 260 },
        async (text) => {
          if (handledRef.current) return;
          handledRef.current = true;

          if (scanner.getState() === 2) {
            await scanner.stop();
          }

          router.replace(`/product/${text}`);
        },
        () => {}
      )
      .catch(console.error);

    return () => {
      const s = scannerRef.current;
      if (s && s.getState() === 2) {
        s.stop().catch(() => {});
      }
    };
  }, [router]);

  return (
    <div className="fixed inset-0 bg-white">
      {/* CAMERA (ต้องเต็มจอ) */}
      <div id="qr-reader" className="absolute inset-0" />
    </div>
  );
}

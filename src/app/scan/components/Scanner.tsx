"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "next/navigation";
import ScannerOverlay from "./ScannerOverlay";
import ScannerTabs from "./ScannerTabs";
import EnterCode from "./EnterCode";

export default function QRScanner() {
  const router = useRouter();
  const startedRef = useRef(false);
  const handledRef = useRef(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [tabState, setTabState] = useState<"scan" | "enter">("scan");

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const scanner = new Html5Qrcode("qr-reader");
    scannerRef.current = scanner;

    scanner
      .start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 300 },
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
      <div id="qr-reader" className="absolute inset-0" />
      {tabState === "scan" && <ScannerOverlay />}
      {tabState === "enter" && <EnterCode />}
      <ScannerTabs onTabChange={setTabState} />
    </div>
  );
}

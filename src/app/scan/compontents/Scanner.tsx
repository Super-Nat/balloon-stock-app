"use client";

import { Scanner } from "@yudiel/react-qr-scanner";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import FinderOverlay from "./FinderOverlay";

type QRScannerProps = {
  onResult?: (value: string) => void;
};

export function QRScanner({ onResult }: QRScannerProps) {
  const router = useRouter();
  const scannedRef = useRef(false);
  const [detected, setDetected] = useState(false);

  return (
    <div className="absolute inset-0 w-full h-full object-cover">
      <Scanner
        constraints={{
          facingMode: "environment",
        }}
        onScan={(result) => {
          if (!result || scannedRef.current) return;

          scannedRef.current = true;
          navigator.vibrate?.(50);

          const text =
            typeof result === "string" ? result : result[0]?.rawValue;

          if (!text) return;

          if (onResult) {
            onResult(text);
          } else {
            if (!detected) {
              setDetected(true);

              setTimeout(() => {
                router.push(`/product/${text}`);
              }, 600);
            }
          }
        }}
        onError={() => {}}
        components={{
          finder: false,
          zoom: true,
        }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "next/navigation";

export default function QRScanner() {
  const router = useRouter();
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    const scanner = new Html5Qrcode("qr-reader");
    scannerRef.current = scanner;

    scanner
      .start(
        { facingMode: "environment" }, // 🔥 กล้องหลังเท่านั้น
        {
          fps: 10,
          qrbox: 260, // 🔥 อ่านเฉพาะกลาง
        },
        (text) => {
          scanner.stop().then(() => {
            router.push(`/product/${text}`);
          });
        },
        () => {}
      )
      .catch(console.error);

    return () => {
      scanner.stop().catch(() => {});
    };
  }, [router]);

  return (
    <div className="fixed inset-0 bg-black">
      {/* CAMERA (ต้องเต็มจอ) */}
      <div id="qr-reader" className="absolute inset-0" />

      {/* OVERLAY */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[260px] aspect-square rounded-2xl shadow-[0_0_0_9999px_rgba(0,0,0,0.55)]" />
      </div>
    </div>
  );
}

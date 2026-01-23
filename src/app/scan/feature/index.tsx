"use client";

import { Button } from "@/components/ui/button";
import { LowStockAlert } from "../components/LowStockAlert";
import QRScanner from "../components/Scanner";
import { useStockStore } from "@/store/store";

export default function ScanFeature() {
  const { setProduct } = useStockStore();

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-white flex flex-col items-center justify-center">
      <LowStockAlert />
      <QRScanner />
    </div>
  );
}

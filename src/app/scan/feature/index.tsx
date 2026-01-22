"use client";

import { Button } from "@/components/ui/button";
import { LowStockAlert } from "../components/LowStockAlert";
import QRScanner from "../components/Scanner";
import { useStockStore } from "@/store/store";
import FinderOverlay from "../components/FinderOverlay";

export default function ScanFeature() {
  const { setProduct } = useStockStore();

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black">
      <LowStockAlert />

      {/* Camera placeholder */}
      <QRScanner />
      {/* <FinderOverlay /> */}
      {/* <div className="relative w-full  max-h-[70vh] bg-black">
        <div className="absolute bottom-4 w-full text-center text-white text-sm">
          Align QR inside frame
        </div>
      </div> */}

      {/* <div className="p-4 space-y-3">
        <Button variant="outline" className="w-full h-12 text-lg">
          Search SKU
        </Button>
      </div> */}
    </div>
  );
}

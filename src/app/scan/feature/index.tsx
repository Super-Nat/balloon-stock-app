"use client";

import { Button } from "@/components/ui/button";
import { LowStockAlert } from "../compontents/LowStockAlert";
import { Scanner } from "../compontents/Scanner";
import { useStockStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function ScanFeature() {
  const router = useRouter();
  const { setProduct } = useStockStore();
  const handleScan = (sku: string) => {
    setProduct({
      id: sku,
      sku,
      qty: 1, // mock (ต่อ backend ทีหลัง)
    });

    router.push(`/product/${sku}`);
  };
  return (
    <div className="flex flex-col flex-1 pb-safe">
      <LowStockAlert />

      {/* Camera placeholder */}
      <div className="flex-1 m-2 rounded-lg bg-muted flex items-center justify-center aspect-square">
        <span className="text-muted-foreground text-sm">
          <Scanner onResult={handleScan} />
        </span>
      </div>

      <div className="p-4 space-y-3">
        <Button className="w-full h-12 text-lg">Scan QR Code</Button>

        <Button variant="outline" className="w-full h-12 text-lg">
          Search SKU
        </Button>
      </div>
    </div>
  );
}

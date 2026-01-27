"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useStockStore } from "@/store/store";
import { useRouter } from "next/navigation";
export function LowStockAlert() {
  const product = useStockStore((state) => state.product);
  const router = useRouter();
  if (!product || product.qty !== 1) return null;

  return (
    <div className="absolute top-4 w-full p-2 z-10">
      <Alert className=" border-0">
        <AlertTitle>⚠️ Low stock</AlertTitle>
        <AlertDescription className="flex justify-between items-center">
          products have quantity = 1
          <Button
            variant="link"
            className="p-0 h-auto"
            onClick={() => router.push("/product/stock-list")}
          >
            View
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
}

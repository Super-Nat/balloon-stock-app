"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useStockStore } from "@/store/store";

export function LowStockAlert() {
  const product = useStockStore((state) => state.product);
  if (!product || product.qty !== 1) return null;

  return (
    <div className="p-2">
      <Alert>
        <AlertTitle>⚠️ Low stock</AlertTitle>
        <AlertDescription className="flex justify-between items-center">
          products have quantity = 1
          <Button variant="link" className="p-0 h-auto">
            View
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
}

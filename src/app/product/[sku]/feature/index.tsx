"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useStockStore } from "@/store/store";
import { useRouter } from "next/navigation";
export function ProductFeature() {
  const { product, increase, decrease } = useStockStore();
  const router = useRouter();
  return (
    <Card className="m-4">
      <CardContent className="p-6 space-y-6 text-center">
        <div>
          <h2 className="text-xl font-semibold">{product?.name}</h2>
          <p className="text-sm text-muted-foreground">SKU: {product?.sku}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Current Stock</p>
          <p className="text-5xl font-bold mt-1">{product?.qty}</p>
        </div>

        <div className="flex gap-4">
          <Button
            variant="destructive"
            className="flex-1 h-14 text-2xl"
            onClick={decrease}
          >
            −
          </Button>

          <Button className="flex-1 h-14 text-2xl" onClick={increase}>
            +
          </Button>
        </div>

        <Button className="w-full h-12 text-lg">Save</Button>
        <Button
          className="w-full h-12 text-lg"
          onClick={() => router.push("/scan")}
        >
          Back to Scan
        </Button>
      </CardContent>
    </Card>
  );
}

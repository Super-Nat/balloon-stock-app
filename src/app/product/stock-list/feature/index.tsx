"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
const StockListFeature = () => {
  const router = useRouter();
  const products = [
    {
      id: 1,
      sku: "B-1001",
      name: "Product 1",
      qty: 1,
    },
    {
      id: 2,
      sku: "B-1002",
      name: "Product 2",
      qty: 1,
    },
    {
      id: 3,
      sku: "B-1003",
      name: "Product 3",
      qty: 1,
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex  items-center  mb-4 ">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/scan")}
        >
          <ChevronLeft />
        </Button>
        <h1 className="text-2xl font-bold text-center">Stock List</h1>
      </div>

      <div className="grid grid-cols-4 items-center border-b border-gray-200 pb-2 gap-2 font-bold text-center">
        <p className="text-sm ">SKU</p>
        <p className="text-sm">Name</p>
        <p className="text-sm ">Quantity</p>
        <p className="text-sm text-center">view</p>
      </div>

      {products.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-4 items-center gap-2 text-center"
        >
          <p className="text-sm text-muted-foreground">{product.sku}</p>
          <p className="text-sm">{product.name}</p>
          <p className="text-sm text-muted-foreground">{product.qty}</p>
          <Button
            variant="outline"
            onClick={() => router.push(`/product/${product.sku}`)}
          >
            view
          </Button>
        </div>
      ))}
    </div>
  );
};

export default StockListFeature;

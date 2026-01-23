"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ScannerOverlay = () => {
  const router = useRouter();
  const [code, setCode] = useState<string>("");

  const handleSearch = () => {
    router.push(`/product/${code}`);
  };

  return (
    <div className=" absolute inset-0 flex items-center justify-center flex-col z-10">
      <div className="scanner-header w-full z-10 mb-8">
        <div className="w-full text-center text-white">
          <h1 className="text-[32px] font-bold mb-2">Enter Code</h1>
          <p className="text-sm">
            Enter product code
            <br />
            to manage product stock
          </p>
        </div>
      </div>
      <div className="bg-black/50 absolute inset-0" />
      <div className="z-10 w-full px-20 flex items-center gap-2">
        <Input
          type="text"
          placeholder="Enter product code"
          className="w-full h-12 bg-white border-0 rounded-md shadow-xs focus-visible:ring-0 focus-visible:ring-offset-0 "
          value={code}
          onChange={(e) => setCode(e.target.value)}
          autoFocus
        />
        <Button
          variant="ghost"
          size="icon"
          aria-label="Submit"
          className="h-12 w-12 ml-[-60px]"
          onClick={handleSearch}
        >
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
};

export default ScannerOverlay;

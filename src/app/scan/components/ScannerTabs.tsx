import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dispatch, SetStateAction } from "react";

interface ScannerTabsProps {
  onTabChange: Dispatch<SetStateAction<"scan" | "enter">>;
}

const ScannerTabs = ({ onTabChange }: ScannerTabsProps) => {
  return (
    <div className="fixed bottom-2 w-full z-10 flex justify-center">
      <Tabs
        defaultValue="scan"
        className="w-full px-10"
        onValueChange={(value) => onTabChange(value as "scan" | "enter")}
      >
        <TabsList className="bg-white/50 w-full h-14 p-2">
          <TabsTrigger value="scan">Scan Code</TabsTrigger>
          <TabsTrigger value="enter">Enter Code</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ScannerTabs;

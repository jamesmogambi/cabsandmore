import React from "react";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

const BookTransportTotal = ({ className }) => {
  return (
    <div className={cn("bg-[#F3F3F3] rounded-[5px] py-5", className)}>
      <div className="px-3 space-y-3">
        <div className="flex justify-between  text-black">
          <Label className="text-lg">Distance Travel</Label>
          <Label className="text-lg">0 Km</Label>
        </div>
        <div className="flex justify-between  text-black">
          <Label className="text-lg">Taken Time</Label>
          <Label className="text-lg">0 Min</Label>
        </div>

        <div className="flex justify-between  text-black">
          <Label className="text-lg">Base Fare</Label>
          <Label className="text-lg">Ksh 0</Label>
        </div>
      </div>
      <Separator className="bg-neutral-200 mt-2" />
      <div className="p-3 space-y-3">
        <div className="flex justify-between text-black">
          <Label className="text-lg">Sub Total</Label>
          <Label className="text-lg">Ksh 0</Label>
        </div>
        <div className="flex justify-between text-black">
          <Label className="text-lg">Tax</Label>
          <Label className="text-lg">Ksh 0</Label>
        </div>
      </div>
      <Separator className="bg-neutral-200" />
      <div className="px-3 ">
        <div className="flex justify-between text-black">
          <Label className="font-semibold text-lg">Total</Label>
          <Label className="font-semibold text-lg">Ksh 0</Label>
        </div>
      </div>
    </div>
  );
};

export default BookTransportTotal;

import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus, X } from "lucide-react";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

const CouponCartItem = ({ item, className }) => {
  const { name, details, price, quantity } = item;

  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg p-0 hover:text-lightgreen cursor-pointer">
          {name}
        </div>
        <Button className="rounded-full h-5 w-5 flex justify-center items-center p-1 hover:bg-neutral-200 bg-neutral-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0f172a"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Button>
      </div>
      <p className="text-lg text-[#9fa7a7]">{details}</p>

      <div className="flex pb-2.5 justify-between items-center">
        <div className="flex items-center gap-2.5">
          <Button
            size="icon"
            className="bg-[#4ab574] hover:bg-green-700 h-5 w-5 rounded-full text-white"
          >
            <Minus className="h-4 w-4" />
          </Button>

          <Label className="text-base">{quantity}</Label>

          <Button
            size="icon"
            className="bg-[#4ab574] h-5 w-5 hover:bg-green-700 rounded-full text-white"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <strong className="font-bold">Ksh {price}</strong>
      </div>
      <Separator className="bg-neutral-200 " />
    </div>
  );
};

export default CouponCartItem;

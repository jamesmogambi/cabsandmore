import { cn } from "@/lib/utils";
import { Minus, Plus, X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const CartItem = ({ className, item }) => {
  const { name, quantity, price } = item;
  return (
    <div>
      <div className={cn("py-2 pl-4 pr-1 flex flex-row", className)}>
        <div className="flex-1 ">
          {/* item details */}
          <div>
            <h4 className="text-[24px] mb-4 ">{name}</h4>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2.5">
                <Button
                  className="border h-6 w-6  cursor-pointer border-red-600 rounded-[5px]"
                  variant="outline"
                  size="icon"
                >
                  <Minus className=" h-4 w-4 text-red-600" />
                </Button>

                <input className="w-10 text-center" value={quantity} />

                <Button
                  className=" h-6 w-6  cursor-pointer  border-lightgreen rounded-[5px]"
                  variant="outline"
                  size="icon"
                >
                  <Plus className="text-lightgreen h-4 w-4" />
                </Button>
              </div>

              <span className="">Ksh {price}</span>
            </div>
          </div>
        </div>
        <Button className=" h-5 w-5" variant="" size="icon">
          <X className="hover:text-red-600" />
        </Button>
      </div>
      <Separator className="bg-neutral-200 mt-2" />
    </div>
  );
};

export default CartItem;

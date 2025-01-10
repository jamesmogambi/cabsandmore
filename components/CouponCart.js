import React from "react";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import CouponCartItem from "./CouponCartItem";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const items = [
  {
    name: "AUDI X",
    details: "Audi X",
    price: 680,
    quantity: 2,
  },
  {
    name: "Pizza 30",
    details: "Pizza",
    price: 500,
    quantity: 1,
  },
  {
    name: "Burger 15",
    details: "Burger King",
    price: 680,
    quantity: 4,
  },
];
const CouponCart = ({ className }) => {
  return (
    <div
      className={cn(
        "border rounded-[5px] border-neutral-300 overflow-hidden",
        className
      )}
    >
      <div className="bg-stonelighter p-4">
        <div className="space-x-2">
          <span className="font-semibold text-[#363636] text-lg">
            Coupon List
          </span>
        </div>
      </div>
      <Separator className="bg-neutral-300" />

      {/* display cart items */}
      <ScrollArea className="w-full  h-72 px-5 pt-2 ">
        {items.map((i, k) => (
          <CouponCartItem className={"mb-3"} item={i} key={k} />
        ))}
      </ScrollArea>

      <div className=" bg-stonelighter">
        <Separator className="bg-neutral-200" />
        <div className="p-4 pt-0">
          <Button className=" bg-[#4ab574] mt-6 py-6 hover:bg-white hover:text-lightgreen hover:border hover:border-lightgreen rounded-[5px] w-full text-white text-lg">
            Proceed To Pay Ksh 1455
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CouponCart;

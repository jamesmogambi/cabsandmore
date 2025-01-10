import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import Image from "next/image";

const CouponItem = ({ coupon, className }) => {
  const { name, details, price, quantity, image } = coupon;
  return (
    <div className={cn("cursor-pointer p-3 pt-0 ", className)}>
      <div className="hover:shadow-2xl">
        <div className="relative w-full h-[130px]">
          <Image src={image} className="object-cover" fill quality={90} />
        </div>

        <div className="p-5 bg-stonelight space-y-2">
          <div className="text-lg font-semibold">{name}</div>
          <p className="text-base text-[#9fa7a7]">{details}</p>
          <div className="flex justify-between">
            <strong className="font-semibold text-base">Ksh {price}</strong>
            <Button className="bg-lightgreen hover:bg-[#4ab574] h-9 w-10 text-white font-semibold rounded-[5px]">
              GET
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponItem;

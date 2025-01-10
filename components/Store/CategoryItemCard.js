import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import AddItemCartModal from "../Modals/AddItemCartModal";
import RemoveItemCartModal from "../Modals/RemoveItemCartModal";

const CategoryItemCard = ({ item, className, category }) => {
  const { name, image, price } = item;
  return (
    <div className={cn(" py-4 px-2   border-neutral-300", className)}>
      <div className="border border-neutral-300 rounded-[5px]">
        <div className="w-full p-1">
          <div className="w-full relative  h-[180px]">
            <Image src={image} fill quality={100} className="" />
          </div>
        </div>

        <div className="m-4">
          <div className="space-y-4">
            <h4 className="text-[20px] truncate font-semibold text-[#5e5e5e]">
              {name}
            </h4>
            <h5 className=" text-[#8c8c8c]">{category}</h5>
          </div>
          <Separator className="bg-neutral-300 mt-3" />

          <div className="mt-3 flex justify-between items-center">
            <strong className="font-bold text-[#333333]">Ksh {price}</strong>
            <AddItemCartModal item={item}>
              {/* <RemoveItemCartModal> */}
              <Button className="bg-lightgreen rounded-[5px] hover:bg-green-600 text-white">
                Add to Cart
              </Button>
              {/* </RemoveItemCartModal> */}
            </AddItemCartModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItemCard;

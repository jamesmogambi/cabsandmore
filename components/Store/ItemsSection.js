import React from "react";
import { Separator } from "../ui/separator";
import CategoryItemCard from "./CategoryItemCard";

const ItemsSection = ({ category }) => {
  const { name, items } = category;
  return (
    <div className="w-full">
      <div className="p-4 space-y-3">
        <h4 className="text-[24px] text-[#333333]">{name}</h4>
        <Separator className="bg-neutral-200" />
      </div>
      {/* render children items */}
      <div className="flex flex-wrap">
        {items.map((i, k) => (
          <CategoryItemCard
            key={k}
            item={i}
            className={"basis-full md:basis-1/3"}
            category={name}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsSection;

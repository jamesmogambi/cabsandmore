import { foodStores } from "@/data/store";
import { cn } from "@/lib/utils";
import React from "react";
import StoreCard from "../StoreCard";
import { Button } from "../ui/button";
import Link from "next/link";

const StoreList = ({ className }) => {
  const foodstores = foodStores.slice(0, 6);
  return (
    <div className={cn("my-10", className)}>
      <div className="max-w-[1140px] m-auto">
        <div className="flex flex-wrap ">
          {foodstores.map((i, k) => (
            <StoreCard key={k} data={i} className={"w-full md:basis-1/3"} />
          ))}
        </div>
        <div className=" mt-3 flex justify-center">
          <Button
            asChild
            className="bg-lightgreen rounded-[5px] text-white text-lg hover:bg-white hover:text-lightgreen hover:border hover:border-lightgreen"
          >
            <Link href="">Browse Store List</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoreList;

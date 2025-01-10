import Link from "next/link";
import React from "react";
import StoreCard from "../StoreCard";
import { cn } from "@/lib/utils";

const Stores = ({ title = "", data, className = "" }) => {
  return (
    <div className={cn("", className)}>
      <div className="p-8 px-4  max-w-[1140px] m-auto">
        <div className="flex justify-between px-2">
          <h3 className="text-[22px] font-bold text-black mb-3.5">{title}</h3>

          <Link className="text-[14px] font-bold text-black" href="">
            view all
          </Link>
        </div>

        <div className="flex flex-wrap">
          {data.map((i, k) => (
            <StoreCard data={i} key={k} className="w-full md:basis-1/3 " />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;

import Link from "next/link";
import React from "react";
import StoreCard from "../StoreCard";
import { cn } from "@/lib/utils";

const Stores = ({ title = "", data = [], href = "/stores", className = "" }) => {
  return (
    <div className={cn("", className)}>
      <div className="p-8 px-4  max-w-[1140px] m-auto">
        <div className="flex justify-between px-2">
          <h3 className="text-[22px] font-bold text-black mb-3.5">{title}</h3>

          <Link className="text-[14px] font-bold text-black" href={href}>
            view all
          </Link>
        </div>

        {data.length > 0 ? (
          <div className="flex flex-wrap">
            {data.map((i, k) => (
              <StoreCard data={i} key={k} className="w-full md:basis-1/3 " />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 px-2 py-4">
            No stores available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Stores;

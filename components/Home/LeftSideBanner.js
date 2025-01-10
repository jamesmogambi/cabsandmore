import Image from "next/image";
import React from "react";
import GooglePlay from "../ActionButtons/GooglePlay";
import AppleStore from "../ActionButtons/AppleStore";
import WebAdmin from "../ActionButtons/WebAdmin";
import { cn } from "@/lib/utils";

const LeftSideBanner = ({ image, title, className }) => {
  return (
    <div className={cn("p-3", className)}>
      <div className="max-w-[1140px] m-auto flex flex-col md:flex-row">
        <div className="basis-full md:basis-1/2 flex flex-col justify-center gap-6 ">
          <Image src={image} height={433} width={496} quality={90} priority />
        </div>
        <div className="basis-full md:basis-1/2 flex flex-col justify-center gap-6 ">
          <h2 className="text-[42px]  leading-normal max-w-[325px] text-[#343434] font-bold">
            {title}
          </h2>

          <div className="flex gap-2">
            <GooglePlay />
            <AppleStore />
            <WebAdmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBanner;

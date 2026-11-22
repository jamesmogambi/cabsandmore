import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ProcessWorkItem = ({ image = "", title, description, className }) => {
  return (
    <div
      className={cn(" flex flex-col justify-center items-center", className)}
    >
      <Image alt={title} src={image} height={200} width={300} priority />
      <h3 className="text-[#111111] my-3  text-[22px] font-semibold">
        {title}
      </h3>
      <p className="max-w-[350px] text-center">{description}</p>
    </div>
  );
};

export default ProcessWorkItem;

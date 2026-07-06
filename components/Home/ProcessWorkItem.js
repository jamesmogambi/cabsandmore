import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProcessWorkItem = ({ image = "", title, description, className }) => {
  return (
    <div
      className={cn(" flex flex-col justify-center items-center", className)}
    >
      <Image alt={title} src={image} height={200} width={300} priority />
      <Link className="text-[#111111] my-3  text-[22px]" href="">
        {title}
      </Link>
      <p className="max-w-[350px] text-center">{description}</p>
    </div>
  );
};

export default ProcessWorkItem;

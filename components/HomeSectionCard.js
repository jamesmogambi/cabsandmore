import { cn } from "@/lib/utils";
import React from "react";

const HomeSectionCard = ({ children, className, title }) => {
  return (
    <div
      className={cn(
        "border-[1.5px]  overflow-hidden  border-neutral-300 rounded-[5px]",
        className
      )}
    >
      <div className="p-4 bg-[#FBFAFA] flex justify-between">
        <h5 className="text-[20px] font-bold">{title}</h5>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HomeSectionCard;

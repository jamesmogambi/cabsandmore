import HomeSideBar from "@/components/HomeSideBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="bg-stonelight py-10 px-10 min-h-[600px] md:px-60">
      <div className="flex  gap-5 border-red-600">
        <div className=" w-1/3 hidden md:flex">
          <HomeSideBar />
        </div>
        <div className="flex-1  border-green-500">{children}</div>
      </div>
    </div>
  );
};

export default layout;

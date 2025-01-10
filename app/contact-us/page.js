import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <div className="p-4 h-screen">
      <div className="pb-12">
        <h2 className="font-medium text-[32px] ml-8 mb-8">Contact Us :</h2>
        <span className="font-extrabold text-base">
          Media and Business Inquiries
        </span>

        <p className="text-lg mt-10">
          <span className="font-[400]">Email us :</span>{" "}
          <span className="text-lightgreen">foxdeliveryapp@gmail.com</span>
        </p>
      </div>
      <Separator className="bg-black" />
      <div className="pb-12">
        <h2 className="font-extrabold text-base mt-5">
          General and Tecnical Inquiries
        </h2>

        <p className="text-lg mt-10">
          <span className="font-[400]">Email us :</span>{" "}
          <span className="text-lightgreen">foxdeliveryapp@gmail.com</span>
        </p>
      </div>
      <Separator className="bg-black" />
    </div>
  );
};

export default page;

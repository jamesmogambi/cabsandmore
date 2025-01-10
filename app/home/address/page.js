import AddressSection from "@/components/AddressSection";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-[32px] mb-4 font-medium">Delivery Address</h2>
        <span className="text-base">User Add Only Five Address</span>
      </div>
      <AddressSection />
    </div>
  );
};

export default page;

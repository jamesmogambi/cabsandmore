import React from "react";
import HomeSectionCard from "./HomeSectionCard";
import { coupons } from "@/data/coupons";

const CouponList = () => {
  return (
    <HomeSectionCard title={"My Coupon Lists"}>
      <div className="bg-white p-4">
        {coupons.length > 0 ? (
          <></>
        ) : (
          <div className="h-48 flex justify-center items-center">
            <h2 className="text-[20px] font-bold">No Coupons Found</h2>
          </div>
        )}
      </div>
    </HomeSectionCard>
  );
};

export default CouponList;

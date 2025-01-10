import CouponItem from "@/components/CouponItem";
import { coupons } from "@/data/coupons";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-wrap mt-4 mb-6">
      {coupons.map((i, k) => (
        <CouponItem
          key={k}
          coupon={i}
          className={"basis-full md:basis-1/3 mb-3 "}
        />
      ))}
    </div>
  );
};

export default page;

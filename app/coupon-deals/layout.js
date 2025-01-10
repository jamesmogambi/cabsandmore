import CouponCart from "@/components/CouponCart";
import CouponItem from "@/components/CouponItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { coupons } from "@/data/coupons";
import Link from "next/link";
import React from "react";

const categories = ["Food", "Rental", "Grocery", "On Demand", "Drive"];

const layout = ({ children }) => {
  return (
    <>
      {/* header section */}
      <div className="bg-stonelighter mb-6 flex justify-center items-center  ">
        <div className="w-3/4 py-4">
          <div className="flex gap-1 items-center">
            <Button variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#26C165"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-left"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </Button>

            <p className="text-lg font-bold">Coupon Details</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-4">
        <div className="w-full md:w-1/4  flex flex-col  items-end  ">
          <div className=" border-red-500 w-1/2">
            <div className=" space-y-3">
              <h4 className="font-semibold text-right text-[#363636]">
                Category List
              </h4>
              <Separator className="bg-neutral-200 " />
            </div>

            <ul className=" ">
              {categories.map((i, k) => (
                <li key={k}>
                  <Button
                    asChild
                    className="w-full font-semibold  py-6 items-center justify-end flex hover:bg-neutral-100 rounded-xl text-[#0b0b0b78]"
                  >
                    <Link href="">{i}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:flex-1 pl-4 ">
          <div className=" space-y-3">
            <h4 className=" text-[#363636] font-semibold">Food</h4>
            <Separator className="bg-neutral-200 " />
          </div>
          {children}
        </div>
        <div className="w-full md:w-1/4 px-4  ">
          <CouponCart />
        </div>
      </div>
    </>
  );
};

export default layout;

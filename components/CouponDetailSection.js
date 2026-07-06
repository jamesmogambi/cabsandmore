import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { coupons } from "@/data/coupons";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CouponDetailSection = () => {
  const {
    name,
    details,
    code,
    category,
    price,
    id,
    link,
    image,
    validity,
    process,
    terms,
  } = coupons[0];
  return (
    <div>
      {/* header */}
      <div>
        <div className="flex items-center ">
          <Button className="text-lightgreen " size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
          <div className="text-[17px] font-bold">{name}</div>
        </div>
      </div>

      <div className="md:w-3/4  w-full mt-4 h-[270px] border rounded-[5px] overflow-hidden relative">
        <Image
          src={image}
          fill
          quality={97}
          priority
          className="object-cover"
        />
      </div>

      <div className="text-[17px] space-y-4 mt-4 w-full md:w-3/4 font-semibold">
        <div className="flex justify-between">
          <div>Coupon Details</div>
          <div>Ksh {price}</div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="text-[16px]">Product Details</div>
            <div className="text-sm font-light">{details}</div>
          </div>
          <Button className="bg-lightgreen hover:bg-[#4ab574] h-9 w-11 text-white font-semibold rounded-[5px]">
            GET
          </Button>
        </div>

        <div>
          <div className="text-[15px] mb-2">Coupon Code</div>
          <div className="p-3 bg-[#F4F9FD] ">
            <div className="text-lightgreen font-bold">{code}</div>
          </div>
        </div>

        <div>
          <div className="text-[15px] mb-1">Link</div>
          <Link href="" className="font-bold pl-5 text-lightgreen">
            {link}
          </Link>
        </div>

        <div className="pb-4">
          <div className="text-[15px] mb-2 ">Coupon Validity</div>
          <div className="font-light pl-5">{validity}</div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="bg-neutral-100  rounded-[5px] px-2 "
        >
          <AccordionItem className="no-underline border-none " value="item-1">
            <AccordionTrigger className="font-bold">
              How to Redeem
            </AccordionTrigger>
            <AccordionContent>
              {process.map((i, k) => (
                <div
                  key={k}
                  className="font-extralight gap-2 text-[#0b0b0b78] flex text-[15px]"
                >
                  <div>{k + 1}.</div> <div> {i}</div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="bg-neutral-100  rounded-[5px] px-2 "
        >
          <AccordionItem className="no-underline border-none " value="item-1">
            <AccordionTrigger className="font-bold">
              Term and Conditions of Use (Coupons)
            </AccordionTrigger>
            <AccordionContent>
              {terms.map((i, k) => (
                <div
                  key={k}
                  className="font-extralight gap-2 text-[#0b0b0b78] flex text-[15px]"
                >
                  <div>{k + 1}.</div> <div> {i}</div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default CouponDetailSection;

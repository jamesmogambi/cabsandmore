import { cn } from "@/lib/utils";
import React from "react";
import StatusBadge from "./StatusBadge";
import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";
import { Separator } from "./ui/separator";

const OrderItem = ({ order, className }) => {
  const { icon, type, date, time, orderID, cost, status, origin, destination } =
    order;

  return (
    <div className={cn(" bg-[#FBFAFA]", className)}>
      <div className="flex justify-end">
        <StatusBadge status={status} />
      </div>
      <div className="p-4">
        <div className="flex gap-3.5">
          <Image src={icon} height={22} width={22} quality={100} priority />
          <h3 className="text-lightgreen font-bold ">{type}</h3>
        </div>
        <div className="flex justify-between flex-wrap gap-2 mt-3 items-center">
          <div className="flex items-center gap-3">
            <CalendarDays />
            <div>{date}</div>
          </div>

          <div className="flex items-center gap-3">
            <Clock />
            <div>{time}</div>
          </div>

          <div className="font-semibold">
            <span className="">OrderID : </span>
            <span className="text-lightgreen">{orderID}</span>
          </div>

          <div
            className={`${status === "Pending" && "text-[#ffa500]"} ${
              status === "Completed" && "text-emerald-400"
            } ${status === "Canceled" && "text-red-400"} font-semibold`}
          >
            Ksh {cost}
          </div>
        </div>
        <Separator className="bg-amber-100 mt-3  shadow-inner " />
        <div className="mt-2 flex flex-wrap">
          <div className="flex w-full lg:w-1/2 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f87171"
              class="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-[14px]">{origin}</div>
          </div>

          <div className="flex gap-3 w-full lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#22c55e"
              class="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-[14px]">{destination}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Label } from "./ui/label";

const WalletHistoryItem = ({ className, transaction }) => {
  const { id, type, date, creditor, description, amount } = transaction;
  return (
    <div className={cn("p-4 pb-6 border-b-2 border-neutral-100", className)}>
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <Image
            src={
              type === "Credit"
                ? "/images/transaction_plus.png"
                : "/images/transection_up_arrow.png"
            }
            height={36}
            width={36}
            priority
            quality={90}
          />

          <div className="flex flex-col gap-2">
            <Label className="font-semibold text-black">{description}</Label>
            <Label className="text-textneutral">{date}</Label>
          </div>
        </div>

        <div className="">
          {type === "Credit" ? (
            <span className="text-lightgreen font-semibold">Ksh {amount}</span>
          ) : (
            <span className="text-red-400 font-semibold">- Ksh {amount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletHistoryItem;

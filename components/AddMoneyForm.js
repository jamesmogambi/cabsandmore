import React from "react";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const AddMoneyForm = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="gap-1 flex flex-col">
        <Label className="font-bold text-[17px]">Add Money</Label>
        <Label className="text-textneutral text-base">
          We Used Secure Technology to Protect Your Data
        </Label>
      </div>

      <form className="mt-8 mb-4 bg-stonelighter p-3 pt-2">
        <Label className="text-[14px] text-textneutral">Recharge Amount:</Label>
        <div className="flex mt-5 flex-col gap-4 md:flex-row">
          <Input
            className="basis-full  pl-0 border-neutral-300 md:basis-2/3 border-x-0  text-base border-y-0 border-l-0 border-b-2 font-semibold"
            placeholder="Enter Amount"
          />
          <Button className="text-lg border bg-[#4ab574] border-neutral-500 rounded-[5px] text-white basis-full md:basis-1/3 hover:bg-neutral-400">
            Add Amount
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMoneyForm;

import React from "react";
import { Label } from "./ui/label";
import AddItemCartModal from "./Modals/AddItemCartModal";
import AddMoneyForm from "./AddMoneyForm";

const AddWalletSection = () => {
  return (
    <div className="border-[1.5px]  overflow-hidden  border-neutral-300 rounded-[5px]">
      <div className="p-4 bg-[#FBFAFA] flex justify-between">
        <h5 className="text-[20px] font-bold">Add Wallet</h5>
      </div>

      <div className="bg-white p-5">
        <div className="bg-stonelighter py-8 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <Label className="text-black text-lg">Current Balance</Label>
            <span className="text-black text-lg font-bold">Ksh 7500.76</span>
          </div>
        </div>
        <AddMoneyForm className={"mt-8"} />
      </div>
    </div>
  );
};

export default AddWalletSection;

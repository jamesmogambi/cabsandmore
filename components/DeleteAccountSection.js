import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import WarningModal from "./Modals/WarningModal";

const items = [
  "Your rides/order will be lost",
  "Your all data will be lost",
  "You will not be able to recover your data again",
];
const DeleteAccountSection = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "border-[1.5px]  overflow-hidden  border-red-500 rounded-[5px]",
        className
      )}
    >
      <div className="p-4 bg-[#FBFAFA] flex justify-between">
        <h5 className="text-[20px] font-bold text-red-500">
          Delete My Account
        </h5>
      </div>

      <div className="bg-white p-5">
        <h5 className="text-[20px] font-medium mb-4">
          If you delete your account
        </h5>
        <ul className="list-disc pl-4">
          {items.map((i, k) => (
            <li className="text-base" key={k}>
              {i}
            </li>
          ))}
        </ul>
        <WarningModal
          title={"Delete User Account"}
          description={"If you press yes, them it will be deleted"}
        >
          <Button className="text-white hover:bg-red-700 my-2 mt-5 rounded-[6px] bg-red-500 text-lg font-light">
            Delete Account
          </Button>
        </WarningModal>
      </div>
    </div>
  );
};

export default DeleteAccountSection;

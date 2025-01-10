import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const WarningModal = ({ title, description, handleAction, children }) => {
  return (
    <AlertDialog className="">
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="bg-white  border-none rounded-2xl  ">
        <AlertDialogHeader className={""}>
          <div className="flex gap-5 justify-center items-center flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-alert text-yellow-600"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            <AlertDialogTitle className="text-[32px] font-medium">
              {title}
            </AlertDialogTitle>
          </div>
        </AlertDialogHeader>

        <AlertDialogDescription className="text-center">
          {description}
        </AlertDialogDescription>

        <AlertDialogFooter>
          <div className="w-full  gap-1 flex justify-center items-center">
            <AlertDialogCancel className="border-none p-6 text-xl bg-neutral-200 hover:bg-neutral-200/70 hover:border hover:border-neutral-200 text-black rounded-[5px]">
              No
            </AlertDialogCancel>
            <AlertDialogAction className="p-6 text-xl hover:bg-red-600/70 text-white bg-red-500 rounded-[5px]">
              Yes
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default WarningModal;

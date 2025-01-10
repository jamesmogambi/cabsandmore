"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "../ui/label";

const OTPVerificationModal = ({ children }) => {
  const [value, setValue] = useState("");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent className="bg-white  translate-y-[-30%] p-0 border-none top-[30%]  ">
        <AlertDialogHeader className="bg-lightgreen py-3  border-pink-400 flex justify-end items-end">
          <div className="w-2/3 flex justify-between items-center ">
            <h2 className="text-2xl text-white">OTP Verification</h2>
            <AlertDialogCancel className="border-none">
              <Button className="px-0 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Button>
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className={"p-5"}>
          <form className=" w-full space-y-5">
            <div className="space-y-2">
              <Label className="text-lg font-[600]">Enter OTP: *</Label>
              <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup className="gap-3">
                  <InputOTPSlot
                    index={0}
                    className="border-2 first:border-2 py-10 px-7 text-4xl first:rounded-l-[5px] font-bold text-black rounded-[5px]"
                  />
                  <InputOTPSlot
                    index={1}
                    className="border-2 border-y-2  py-10 px-7 text-4xl  font-bold text-black rounded-[5px]"
                  />
                  <InputOTPSlot
                    index={2}
                    className="border-2 border-y-2  py-10 px-7 text-4xl  font-bold text-black rounded-[5px]"
                  />
                  <InputOTPSlot
                    index={3}
                    className="border-2 border-y-2  py-10 px-7 text-4xl  font-bold text-black rounded-[5px]"
                  />
                  <InputOTPSlot
                    className="border-2 border-y-2  py-10 px-7 text-4xl  font-bold text-black rounded-[5px]"
                    index={4}
                  />
                  <InputOTPSlot
                    className="border-2 last:border-2 py-10 px-7 text-4xl last:rounded-r-[5px] font-bold text-black rounded-[5px]"
                    index={5}
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button className="border-none pl-0 text-lightgreen font-bold text-lg">
              Resend OTP
            </Button>
            <Button
              type="submit"
              className="bg-lightgreen py-6 w-full text-white text-lg hover:bg-lightgreen/90"
            >
              Verify
            </Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OTPVerificationModal;

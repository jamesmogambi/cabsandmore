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
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import PhoneInput from "react-phone-input-2";
import { Label } from "../ui/label";
import OTPVerificationModal from "./OTPVerificationModal";

const LoginModal = ({ children }) => {
  const [phone, setPhone] = useState("");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent className="bg-white  translate-y-[-30%] p-0 border-none top-[30%]  ">
        <AlertDialogHeader className="bg-lightgreen py-3  border-pink-400 flex justify-end items-end">
          <div className="w-2/3 flex justify-between items-center ">
            <h2 className="text-2xl text-white">Login</h2>
            <AlertDialogCancel className="border-none">
              <Button className="px-0 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
              <Label className="text-lg">Contact Number: *</Label>
              <PhoneInput
                country={"ke"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  width: "100%",
                  height: 45,
                  fontSize: 18,
                }}
              />
            </div>

            <Button
              type="submit"
              className="bg-lightgreen py-6 w-full text-white text-lg hover:bg-lightgreen/90"
            >
              Log In
            </Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoginModal;

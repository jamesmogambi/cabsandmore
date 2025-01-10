import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EditAddressForm = ({
  closeButton,
  title = "Add New Address",
  className,
}) => {
  return (
    <div className={cn("mb-6", className)}>
      <h3 className="text-[28px] font-medium">{title}</h3>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Button
            variant="outline"
            // size="icon"
            className="border-2 p-0.5 mt-3 border-black"
            onClick={closeButton}
          >
            <X />
          </Button>
          {/* TODO:Add map component that allows user to choose location */}
          <div></div>
        </div>
        <div className="w-full md:w-1/2">
          <form className="w-full ">
            <div className="space-y-12">
              <div className="space-y-3">
                <Label className=" text-lg ">Address :</Label>
                <Input
                  type=""
                  className="bg-white  py-5 border-neutral-200 rounded-[6px] text-lg"
                  placeholder="Enter Location"
                />
              </div>
              <div className="space-y-3">
                <Label className=" text-lg ">Door/Flat No :</Label>
                <Input
                  type=""
                  className="bg-white  py-5 border-neutral-200 rounded-[6px] text-lg"
                />
              </div>
              <div className="space-y-3">
                <Label className=" text-lg ">Landmark :</Label>
                <Input
                  type=""
                  className="bg-white  py-5 border-neutral-200 rounded-[6px] text-lg"
                />
              </div>
              <div className="space-y-3">
                <Label className=" text-lg ">Address Type :</Label>
                <Select>
                  <SelectTrigger className="w-full bg-white rounded-[6px] py-5 border-neutral-200 text-lg">
                    <SelectValue placeholder="Home" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-neutral-200 rounded-[6px]">
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="work">Work</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className=" mt-4">
              <Button
                type="submit"
                className="text-black font-light text-base border-black border-2"
              >
                Save & Proceed
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAddressForm;

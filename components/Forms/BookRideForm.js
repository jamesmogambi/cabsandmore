"use client";

import { Circle, EllipsisVertical } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { bikes } from "@/data/vehicle";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import PhoneInput from "react-phone-input-2";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import BookTransportTotal from "./BookTransportTotal";

const BookRideForm = ({ mode = "Bike" }) => {
  const [bookOther, setBookOther] = useState(false);
  const [phone, setPhone] = useState("");
  const [bookType, setBookType] = useState("");

  return (
    <form className="">
      {/* location fields */}
      <div className="bg-[#F3F3F3] py-4 px-3">
        <div className="flex items-center gap-3">
          <div className="text-[#d60764]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <Input
            type="text"
            placeholder="Pick up location"
            className="border-x-0 border-t-0 text-neutral-400 text-lg border-neutral-300"
          />
        </div>
        <EllipsisVertical className="h-6 w-6 " />
        <div className="flex items-center gap-3">
          <div className="text-lightgreen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-7 h-7 "
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <Input
            type="text"
            placeholder="Drop off location"
            className="border-x-0 border-t-0 text-neutral-400 text-lg border-neutral-300"
          />
        </div>
      </div>

      <div className="px-3 space-y-3">
        {/* vehicles */}
        <div className=" space-y-2 mt-3">
          <span className="font-semibold text-[#000000]">Type of Bike</span>
          <div className="border rounded-[5px] border-neutral-300 pt-2">
            <RadioGroup defaultValue={bikes[0].name}>
              {bikes.map((i, k) => (
                <div
                  key={k}
                  className="flex p-2 justify-between border-b border-neutral-200"
                >
                  <div className="flex gap-3">
                    <RadioGroupItem
                      value={i.name}
                      id="option-one"
                      className=""
                    />
                    <div className="flex gap-2 items-center">
                      <Image
                        src={i.image}
                        quality={90}
                        height={25}
                        width={49}
                      />
                      <Label htmlFor={i.name}>{i.name}</Label>
                    </div>
                  </div>

                  <div>
                    <span className="text-sm">Ksh {i.price}</span>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* payment mode */}
        <div className="space-y-3">
          <span className="text-black font-semibold">Mode of Payment</span>
          <Select>
            <SelectTrigger className="w-full py-6 rounded-[5px] border-neutral-200">
              <SelectValue placeholder="Select payment mode" />
            </SelectTrigger>
            <SelectContent className="bg-white text-lg border-neutral-300 rounded-[5px]">
              <SelectGroup>
                <SelectLabel>Mode</SelectLabel>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="wallet">Wallet</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* book for other */}
        <div>
          <span className="text-black font-semibold">Ride Book For Other</span>
          <div className="flex gap-3 mt-3 items-center">
            <Checkbox
              id="bookOther"
              className="rounded-[5px] bg-neutral-200 border-none data-[state=checked]:bg-lightgreen h-5 w-5 data-[state=checked]:text-white"
              checked={bookOther}
              onCheckedChange={() => setBookOther(!bookOther)}
            />
            <label htmlFor="bookOther" className="text-base">
              Ride Book For Other
            </label>
          </div>
          {bookOther && (
            <PhoneInput
              country={"ke"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              containerClass="mt-5 mb-10"
              inputStyle={{
                width: "100%",
                height: 45,
                fontSize: 18,
              }}
            />
          )}
        </div>

        {/* book type */}
        <div>
          <span className="text-black font-semibold">Ride Book Type</span>
          <RadioGroup
            defaultValue="rideNow"
            onValueChange={(e) => setBookType(e)}
            className="flex gap-8 mt-2"
          >
            <div className="flex gap-2 items-center">
              <RadioGroupItem
                value="rideNow"
                id="rideNow"
                className="text-lightgreen "
              />
              <label htmlFor="rideNow" className="text-base ">
                Ride Now
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <RadioGroupItem
                value="scheduleRide"
                id="scheduleRide"
                className="text-lightgreen "
              />
              <label htmlFor="scheduleRide" className="text-base ">
                Schedule Ride
              </label>
            </div>
          </RadioGroup>

          {/* // TODO: ADD SELECT DATE & TIME INPUT */}
          {bookType === "scheduleRide" && (
            <input
              className="w-full mt-3 p-3 py-1.5 border border-neutral-200 rounded-[5px] text-lg"
              type="datetime-local"
              id="birthdaytime"
              name="birthdaytime"
            ></input>
          )}
        </div>

        {/* total */}

        <BookTransportTotal />

        {/* submit button */}
        <div className="px-6 pt-2 pb-10">
          <Button className="text-white w-full text-lg border-slate-200 rounded-[5px] bg-[#4AB574]">
            RIDE NOW
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BookRideForm;

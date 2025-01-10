"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import BookTransportTotal from "./BookTransportTotal";
import { Button } from "../ui/button";

const weights = [
  "1 Kg - 5 Kg",
  "5 Kg - 10 Kg",
  "50 Kg - 100 Kg",
  " 200 Kg - 300 Kg",
  "300 Kg - 500 Kg",
];

const documents = [
  "Business Document",
  "Faabric",
  "Educational Document",
  "Furniture",
  "Glass Item",
  "Other",
];
const BookCourierForm = () => {
  const [bookType, setBookType] = useState("");

  return (
    <form className="p-4 space-y-3">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="sender" className="border-neutral-200">
          <AccordionTrigger className="text-black font-semibold text-[15px]">
            Sender Information
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <Select>
                <SelectTrigger className="w-full border-neutral-200 rounded-[5px] text-base text-neutral-400">
                  <SelectValue placeholder="Select weight" />
                </SelectTrigger>
                <SelectContent className="bg-white text-base rounded-[5px] border-neutral-300">
                  <SelectGroup>
                    <SelectLabel>Weight Range</SelectLabel>
                    {weights.map((i, k) => (
                      <SelectItem key={k} value={i}>
                        {i}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                className="border-neutral-200 text-neutral-400 rounded-[5px] text-base"
                placeholder="Pick up location"
              />
              <Input
                className="border-neutral-200 text-neutral-400 rounded-[5px] text-base"
                placeholder="Shop Name / Building Name"
              />
              <Input
                className="border-neutral-200 text-neutral-400 rounded-[5px] text-base"
                placeholder="House Name / Land mark"
              />
              <Input
                className="border-neutral-200 text-neutral-400 rounded-[5px] text-base"
                placeholder="Sender Name"
              />
              <Input
                className="border-neutral-200 text-neutral-400 rounded-[5px] text-base"
                placeholder="Sender Contact Number"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="receiver" className="border-neutral-200">
          <AccordionTrigger className="text-black font-semibold text-[15px]">
            Receiver Information
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <Input
                className="border-neutral-200 text-neutral-400 rounded-[5px] text-base"
                placeholder="Drop off location"
              />

              <Input
                className="border-neutral-200 text-neutral-400 rounded-[5px] text-base"
                placeholder="House Name / Land mark"
              />
              <Input
                className="border-neutral-200 text-neutral-400 rounded-[5px] text-base"
                placeholder="Receiver Name"
              />
              <Input
                className="border-neutral-200 text-neutral-400 rounded-[5px] text-base"
                placeholder="Receiver Contact Number"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="package" className="border-neutral-200">
          <AccordionTrigger className="text-black font-semibold text-[15px]">
            Package Information
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <Select>
                <SelectTrigger className="w-full border-neutral-200 rounded-[5px] text-base text-neutral-400">
                  <SelectValue placeholder="Package Type" />
                </SelectTrigger>
                <SelectContent className="bg-white text-base rounded-[5px] border-neutral-300">
                  <SelectGroup>
                    <SelectLabel>Select Package Type</SelectLabel>
                    {documents.map((i, k) => (
                      <SelectItem key={k} value={i}>
                        {i}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                className="border-neutral-200 text-neutral-400 rounded-[5px] text-base"
                placeholder="Estimated Value"
              />

              <Input
                className="border-neutral-200 text-neutral-400 rounded-[5px] text-base"
                placeholder="Delivery Instruction"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* payment mode */}
      <div className="space-y-3">
        <span className="text-black font-semibold">Mode of Payment</span>
        <Select>
          <SelectTrigger className="w-full py-4 text-base rounded-[5px] border-neutral-200">
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
      <div className="pt-4">
        <BookTransportTotal />
      </div>

      {/* submit button */}
      <div className="px-6 pt-2 pb-10">
        <Button className="text-white hover:bg-lightgreen/70 uppercase w-full text-lg border-slate-200 rounded-[5px] bg-[#4AB574]">
          bOOK NOW
        </Button>
      </div>
    </form>
  );
};

export default BookCourierForm;

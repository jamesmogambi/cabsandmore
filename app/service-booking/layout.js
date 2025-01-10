"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProviderList from "@/components/ProviderList";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const cactegories = ["Pet Grooming", "Pet Daycare", "Pet Training"];
const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col-reverse md:flex-row md:h-[700px] ">
      <ScrollArea className=" mb-10  w-full md:w-1/3  ">
        {/* header */}
        <div className="p-1.5 flex items-center">
          <Button
            size="icon"
            onClick={() => router.back()}
            className="text-lightgreen pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
          <span className="text-[20px] text-[#000000] font-bold">Pet Care</span>
        </div>

        {/* location */}
        <div className="flex items-center p-4 bg-[#F3F3F3] gap-3">
          <div className="text-lightgreen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-7 h-7 "
            >
              <path
                fill-rule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <Input
            type="text"
            placeholder="Your location"
            className="border-x-0 border-t-0 text-neutral-400 text-lg border-neutral-300"
          />
        </div>

        <div className="p-4 space-y-4">
          <div>
            <div className="space-y-3">
              <Label className="text-base text-black font-semibold">
                Select Category
              </Label>
              <Select>
                <SelectTrigger className="w-full border-neutral-300 py-5 text-base  rounded-[5px]">
                  <SelectValue placeholder="Please Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-white text-base border-neutral-200 rounded-[5px]">
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    {cactegories.map((i, k) => (
                      <SelectItem key={k} value={i}>
                        {i}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* provider list */}

          <div>
            <Label className="text-base text-black font-semibold">
              Provider Lists
            </Label>

            <ProviderList />
          </div>
        </div>
      </ScrollArea>

      <div className="w-full md:flex-1   border-red-500">{children}</div>
    </div>
  );
};

export default Layout;

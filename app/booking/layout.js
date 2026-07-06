"use client";
import BookCourierForm from "@/components/Forms/BookCourierForm";
import BookRideForm from "@/components/Forms/BookRideForm";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import React from "react";

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
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
          <span className="text-[20px] text-[#000000] font-bold">
            Ride Booking
          </span>
        </div>

        {/* tabs */}
        <div className="">
          <Tabs defaultValue="bike-ride" className="w-full ">
            <TabsList className=" w-full h-[80px]  space-x-3 px-2.5 bg-[#F3F3F3]">
              <TabsTrigger
                value="bike-ride"
                className="basis-1/3 bg-white data-[state=active]:border-none data-[state=active]:text-white data-[state=active]:bg-lightgreen border rounded-[5px] text-lg border-neutral-300  text-black "
              >
                Bike Ride
              </TabsTrigger>
              <TabsTrigger
                value="taxi-ride"
                className="basis-1/3 bg-white data-[state=active]:border-none data-[state=active]:text-white data-[state=active]:bg-lightgreen border rounded-[5px] text-lg border-neutral-300  text-black "
              >
                Taxi Ride
              </TabsTrigger>
              <TabsTrigger
                value="courier-service"
                className="basis-1/3 bg-white data-[state=active]:border-none data-[state=active]:text-white data-[state=active]:bg-lightgreen border rounded-[5px] text-lg border-neutral-300  text-black "
              >
                Courier Service
              </TabsTrigger>
            </TabsList>
            <div className="-mt-3">
              <TabsContent value="bike-ride" className="">
                <BookRideForm />
              </TabsContent>
              <TabsContent value="taxi-ride" className="">
                <BookRideForm mode="taxi" />
              </TabsContent>
              <TabsContent value="courier-service" className="">
                <BookCourierForm />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </ScrollArea>

      <div className="w-full md:flex-1   border-red-500">{children}</div>
    </div>
  );
};

export default Layout;

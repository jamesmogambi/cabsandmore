"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDown, Search, X } from "lucide-react";
import { useState } from "react";

const options = [
  "Beer",
  "Bourbon",
  "Rum",
  "Whiskey",
  "Wine",
  "Vodka",
  "Gin",
  "Tequila",
  "Jameson",
  "Kenya Cane",
  "Brandy",
  "Cider",
  "Tusker",
  "Guiness",
  "Amarula",
];
const FilterSection = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="py-4 px-8">
      <div className="flex flex-col md:flex-row justify-between">
        {/* number of stores */}
        <span className="text-[20px] ">5 Stores</span>

        <div className="flex gap-2 flex-wrap items-center justify-center">
          <span className="text-[13px] text-[#cccccc] uppercase">
            Filter by :
          </span>
          <Button
            asChild
            variant="outline"
            className="text-[15px] px-2 border-neutral-300 rounded-[5px] text-black"
          >
            <Link href="">All Stores</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-neutral-300  rounded-[5px]"
          >
            <Link href="">
              <span className="mr-1">Search</span>{" "}
              <Search className="h-5 w-5" />
            </Link>
          </Button>

          <Button
            onClick={() => setShowOptions(!showOptions)}
            asChild
            variant="outline"
            className="border-neutral-300 text-black text-[15px] rounded-[5px]"
          >
            <Link href="">
              <span>Category</span> <ChevronDown className="h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-neutral-300 text-black text-[15px] rounded-[5px]"
          >
            <Link href="">Show Offer</Link>
          </Button>
        </div>
      </div>

      {showOptions && (
        <div className="flex flex-col md:flex-row flex-wrap  mt-7 ">
          {options.map((i, k) => (
            <div key={k} className="p-4 basis-full md:basis-1/6 ">
              <Button className="bg-lightgreen focus:bg-lightgreen hover:bg-lightgreen text-lg rounded-[7px] w-full text-white">
                {i}
              </Button>
            </div>
          ))}

          <Button onClick={() => setShowOptions(false)} variant="ghost">
            <X />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterSection;

import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const selectItems = [
  "Food Delivery",
  "Grocery Delivery",
  "Liquor Delivery",
  "Flower Delivery",
];

const StoreBanner = () => {
  return (
    <div className="flex min-h-screen relative ">
      <Image
        src="https://media.istockphoto.com/id/1326431774/photo/happy-african-american-woman-receiving-box-from-courier-at-home.jpg?s=2048x2048&w=is&k=20&c=TrQCUU8Mvs2Wpm4nIcUU_XL90LqLFBAMWvwTzTtORk8="
        fill
        alt="banner image"
        className="object-cover"
        quality={100}
      />
      {/* Transparent green overlay */}
      <div className="absolute inset-0 bg-lightgreen opacity-50"></div>
      {/* Content */}
      <div className="absolute inset-0 flex justify-center items-center ">
        <div className=" md:w-[1140px]  flex justify-center items-center">
          <div className="w-3/4  gap-5 m-auto flex flex-col justify-center items-center ">
            <h3 className="text-white text-center text-[28px] leading-tight">
              Order From Favourite Stores Near You
            </h3>
            <div className="flex w-full gap-4 md:gap-0 flex-wrap">
              <Input
                type="text"
                className="bg-white text-base w-full  md:w-2/3 border-none rounded-l-xl "
                placeholder="Search by Store/Product Name"
              />

              <Select>
                <SelectTrigger className=" text-base bg-white w-full md:w-1/5 border-neutral-200">
                  <SelectValue placeholder="Select Delivery" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-2xl">
                  <SelectGroup>
                    <SelectLabel>Delivery</SelectLabel>
                    {selectItems.map((i, k) => (
                      <SelectItem value={i} key={k}>
                        {i}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="bg-lightgreen  rounded-xl md:rounded-none focus:bg-lightgreen/80 hover:bg-lightgreen/80 md:rounded-r-xl text-base text-white flex-1 ">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreBanner;

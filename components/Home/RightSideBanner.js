import { cn } from "@/lib/utils";
import GooglePlay from "../ActionButtons/GooglePlay";
import AppleStore from "../ActionButtons/AppleStore";
import WebAdmin from "../ActionButtons/WebAdmin";
import Image from "next/image";

const RightSideBanner = ({ image, title, className }) => {
  return (
    <div className={cn("p-3 ", className)}>
      <div className="max-w-[1140px] m-auto flex flex-col md:flex-row">
        <div className="basis-full md:basis-1/2 flex flex-col justify-center gap-6 ">
          <h2 className="text-[42px]  leading-normal max-w-[350px] text-[#343434] font-bold">
            {title}
          </h2>

          <div className="flex gap-2">
            <GooglePlay />
            <AppleStore />
            {/* <WebAdmin /> */}
          </div>
        </div>
        <div className="basis-full md:basis-1/2  p-8">
          <Image
            src={image}
            height={483}
            className="bg-white"
            width={570}
            quality={90}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideBanner;

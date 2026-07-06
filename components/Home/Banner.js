import Image from "next/image";
import GooglePlayButton from "../ActionButtons/GooglePlayButton";
import AppleStoreButton from "../ActionButtons/AppleStoreButton";
// #D7F3E3
const Banner = () => {
  return (
    <div className=" bg-gradient-to-b from-[#D4F5E3] to-[#D4F5E3]/90 flex-1 border-red-600 min-h-screen flex justify-center ">
      <div className=" flex flex-col md:flex-row  w-full md:max-w-[1140px] ">
        <div className=" h-3/4 md:h-auto w-full md:w-1/2 flex flex-col justify-center">
          <div>
            <h1 className="text-[66px] text-center md:text-left leading-tight mb-6  font-bold  text-lightgreen">
              Everything You Need, Delivered in One App.
            </h1>
            <p className="text-[23px] text-center md:text-left text-black font-bold leading-tight ">
              Rides, food delivery, groceries, parcels, home services, and
              everything in between.
            </p>

            <div className="flex flex-col  items-center  md:justify-start  md:flex-row gap-3 mt-7">
              <div className="cursor-pointer ">
                <GooglePlayButton />
              </div>

              <div className="cursor-pointer">
                <AppleStoreButton />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2">
          <Image
            alt="Banner Image"
            src={"/images/banner6.png"}
            height={516.79}
            width={590}
            quality={90}
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

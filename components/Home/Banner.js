import Image from "next/image";

const Banner = () => {
  return (
    <div className=" bg-gradient-to-b from-[#BFEDD2] to-[#F3FBF6] flex-1 border-red-600 min-h-screen flex justify-center ">
      <div className=" flex flex-col md:flex-row  w-full md:max-w-[1140px] ">
        <div className=" h-3/4 md:h-auto w-full md:w-1/2 flex flex-col justify-center">
          <div>
            <h1 className="text-[66px] text-center md:text-left leading-tight mb-6  font-bold  text-lightgreen">
              Your Life Made Simple And Convenient
            </h1>
            <p className="text-[23px] text-center md:text-left text-black font-bold leading-tight ">
              Order a Taxi, Food, Groceries, Medicine, Delivery Of Parcels
              Delivered To You - Quick, Reliable And Affordable
            </p>

            <div className="flex flex-col  items-center  md:justify-start  md:flex-row gap-3 mt-7">
              <div className="cursor-pointer ">
                <Image
                  alt="google-play-badge"
                  src={"/images/google-play-badge-black.png"}
                  height={57}
                  width={180}
                  quality={90}
                  priority
                  className="object-contain"
                />
              </div>

              <div className="cursor-pointer">
                <Image
                  alt="app-store-badge"
                  src={"/images/app-store-badge-black.png"}
                  height={57}
                  width={180}
                  quality={90}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2">
          <Image
            alt="Banner Image"
            src={"/images/Mockup8_new.webp"}
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

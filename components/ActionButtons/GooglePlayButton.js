import Image from "next/image";
import Link from "next/link";
import React from "react";

const GooglePlayButton = () => {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.yourapp"
      className="flex flex-row bg-black text-white rounded-xl p-2 py-1 flex-grow min-w-[180px] justify-center items-center gap-2 hover:bg-gray-800 transition-colors duration-200"
    >
      <div>
        <Image
          width={30}
          height={30}
          src={"/images/android-play.webp"}
          className=""
          alt="play-store-logo"
          quality={75}
        />
      </div>

      <div className="flex flex-col flex-1">
        <span className="text-[13px]font-semibold">Available On</span>
        <span className="text-[20px] -mt-1 font-extrabold">Google Play</span>
      </div>
    </Link>
  );
};

export default GooglePlayButton;

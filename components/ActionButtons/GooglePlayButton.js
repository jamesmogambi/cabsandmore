import Image from "next/image";
import Link from "next/link";
import React from "react";

const GooglePlayButton = ({ variant = "dark", className = "" }) => {
  const styles = {
    dark: "bg-black text-white hover:bg-gray-800",
    light: "bg-white text-black border border-white/30 hover:bg-gray-100",
    outline: "border border-white/40 text-white hover:bg-white/10",
  }[variant];

  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.yourapp"
      className={`flex flex-row rounded-xl p-2 py-1 flex-grow min-w-[180px] justify-center items-center gap-2 transition-colors duration-200 ${styles} ${className}`}
    >
      <div>
        <Image
          width={30}
          height={30}
          src={"/images/android-play.webp"}
          className=""
          alt="Get it on Google Play"
          quality={75}
        />
      </div>

      <div className="flex flex-col flex-1">
        <span className="text-[13px] font-semibold">Available On</span>
        <span className="text-[20px] -mt-1 font-extrabold">Google Play</span>
      </div>
    </Link>
  );
};

export default GooglePlayButton;
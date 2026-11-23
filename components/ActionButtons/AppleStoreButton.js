import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppleStoreButton = ({ variant = "dark", className = "" }) => {
  const styles = {
    dark: "bg-black text-white hover:bg-gray-800",
    light: "bg-white text-black border border-white/30 hover:bg-gray-100",
    outline: "border border-white/40 text-white hover:bg-white/10",
  }[variant];

  const logo =
    variant === "light"
      ? "/images/app-store-logo-black.webp"
      : "/images/mac-os.png";

  return (
    <Link
      href="https://apps.apple.com/us/app/your-app-name/id123456789"
      className={`flex flex-row rounded-xl p-2 py-1 flex-grow min-w-[180px] justify-center items-center gap-2 transition-colors duration-200 ${styles} ${className}`}
    >
      <div>
        <Image
          width={30}
          height={30}
          src={logo}
          className="size-[30px]"
          alt="Download on the App Store"
          quality={75}
        />
      </div>

      <div className="flex flex-col flex-1">
        <span className="text-[13px] font-semibold">Available On</span>
        <span className="text-[20px] -mt-1 font-extrabold">App Store</span>
      </div>
    </Link>
  );
};

export default AppleStoreButton;
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppleStoreButton = () => {
  return (
    <Link
      Link
      href="https://apps.apple.com/us/app/your-app-name/id123456789"
      className="flex flex-row bg-black text-white rounded-xl p-2 py-1 flex-grow min-w-[180px] justify-center items-center gap-2 hover:bg-gray-800 transition-colors duration-200"
    >
      <div>
        <Image
          width={18}
          height={18}
          src={"/images/mac-os.png"}
          className="size-10"
          alt="play-store-logo"
          quality={75}
        />
      </div>

      <div className="flex flex-col flex-1">
        <span className="text-[13px]font-semibold">Available On</span>
        <span className="text-[20px] -mt-1 font-extrabold">App Store</span>
      </div>
    </Link>
  );
};

export default AppleStoreButton;

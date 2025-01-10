import Image from "next/image";
import Link from "next/link";

const AppleStore = () => {
  return (
    <Link href="">
      <div className="px-4  flex-row group flex  relative  py-1 gap-3   text-titledark border rounded-xl border-black  cursor-pointer hover:bg-black hover:text-white">
        <Image
          width={30}
          height={30}
          src={"/images/app-store-logo-black.webp "}
          className="object-contain absolute inset-y-0 h-full visible group-hover:invisible "
          alt="play-store-logo"
          quality={75}
        />

        <Image
          width={30}
          height={30}
          src={"/images/app-store-logo-white.webp"}
          className="invisible object-contain  group-hover:visible "
          alt="play-store-logo"
          quality={75}
        />

        <div className="flex flex-col flex-1">
          <span className="text-[13px]">Available On</span>
          <span className="text-[20px] -mt-1 font-bold">App Store</span>
        </div>
      </div>
    </Link>
  );
};

export default AppleStore;

import Image from "next/image";
import Link from "next/link";

const GooglePlay = () => {
  return (
    <Link href="">
      <div className="px-3 py-1 flex flex-row gap-3 text-titledark border rounded-xl border-black  cursor-pointer hover:bg-black hover:text-white">
        <Image
          width={30}
          height={30}
          src={"/images/play-store-logo.webp"}
          className="object-contain "
          alt="play-store-logo"
          quality={75}
        />
        <div className="flex flex-col">
          <span className="text-[13px]">Available On</span>
          <span className="text-[20px] -mt-1 font-bold">Google Play</span>
        </div>
      </div>
    </Link>
  );
};

export default GooglePlay;

import Image from "next/image";
import Link from "next/link";

const WebAdmin = () => {
  return (
    <Link href="">
      <div className="px-3 py-1 flex flex-row gap-3 text-titledark rounded-xl border-black/20 border-[0.5px]  cursor-pointer hover:bg-black hover:text-white">
        <Image
          width={30}
          height={30}
          src={"/images/web-admin-logo.webp"}
          className="object-contain "
          alt="web-admin-logo"
          quality={75}
        />
        <div className="flex flex-col">
          <span className="text-[13px]">Log in</span>
          <span className="text-[20px] -mt-1 font-bold">Web Admin</span>
        </div>
      </div>
    </Link>
  );
};

export default WebAdmin;

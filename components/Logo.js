import Image from "next/image";
import React from "react";

const Logo = ({ title = "Cabs&More" }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Image
        width={40}
        height={40}
        src={"/images/logo.png"}
        style={{
          width: "auto",
          height: "auto",
        }}
        alt="logo"
        priority
        quality={60}
      />
      <h2 className="uppercase text-base font-extrabold tracking-wide text-titledark">
        {title}
      </h2>
    </div>
  );
};

export default Logo;

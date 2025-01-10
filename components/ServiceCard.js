"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const ServiceCard = ({ service, ...props }) => {
  const { image, name, description, category } = service;

  const router = useRouter();

  function handleNavigation() {
    if (category === "Transport") {
      router.push("/booking");
    }
    if (category === "On-demand") {
      router.push(`/stores/${name}`);
    }

    if (category === "Handyman") {
      router.push(`/service-booking/${name}`);
    }
  }
  return (
    <div
      className="border hover:border-neutral-400 hover:shadow-md group rounded-[5px] overflow-hidden border-neutral-300"
      {...props}
    >
      <div className="w-full relative  h-[130px] overflow-hidden">
        <Image
          fill
          src={image}
          className="object-cover  bg-[#00000080]"
          alt="service-image"
          quality={90}
        />
        <div className=" flex group-hover:visible justify-center items-center absolute opacity-80 inset-0 invisible bg-neutral-800">
          <Button
            onClick={handleNavigation}
            className="border  text-white py-2  border-white rounded-[7px] p-4"
          >
            Place Order
          </Button>
        </div>
      </div>

      <div className="flex my-6 flex-col justify-center items-center px-6 gap-3">
        <h4 className="text-[18px] font-bold text-black">{name}</h4>
        <p className="text-center text-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

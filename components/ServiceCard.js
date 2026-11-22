import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service, ...props }) => {
  const { image, name, description, category } = service;

  const href =
    category === "Transport"
      ? "/booking"
      : category === "On-demand"
        ? `/stores/${name}`
        : category === "Handyman"
          ? `/service-booking/${name}`
          : "#";

  return (
    <Link
      href={href}
      className="group block rounded-[5px] overflow-hidden border border-neutral-300 hover:border-neutral-400 hover:shadow-md"
      {...props}
    >
      <div className="w-full relative h-[130px] overflow-hidden">
        <Image
          fill
          src={image}
          className="object-cover bg-[#00000080]"
          alt={name}
          quality={90}
        />
        <div className="flex justify-center items-center absolute inset-0 bg-neutral-800/60 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
          <span className="border text-white py-2 border-white rounded-[7px] px-4">
            Place Order
          </span>
        </div>
      </div>

      <div className="flex my-6 flex-col justify-center items-center px-6 gap-3">
        <h4 className="text-[18px] font-bold text-black">{name}</h4>
        <p className="text-center text-[14px]">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;

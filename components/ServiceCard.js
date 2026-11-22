import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categoryLabels = {
  Transport: "Ride",
  "On-demand": "Delivery",
  Handyman: "Home service",
};

const ServiceCard = ({ service, ...props }) => {
  const { image, name, description, category } = service;

  const slug = name?.toLowerCase().replace(/\s+/g, "-") || "service";

  const href =
    category === "Transport"
      ? "/booking"
      : name === "Food Delivery"
        ? "/stores/food-delivery"
        : name === "Grocery Delivery"
          ? "/stores/grocery-delivery"
          : `/service-booking/${slug}`;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#26C165]/40 hover:shadow-xl"
      {...props}
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          fill
          src={image}
          alt={name}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#1b7f45] backdrop-blur">
          {categoryLabels[category] || category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[19px] font-bold text-[#111827]">{name}</h3>
        <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#6b7280]">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-bold text-[#26C165]">
          Book now
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
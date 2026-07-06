// components/ItemServiceCard.jsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Package,
  Car,
  Utensils,
  ShoppingBag,
  Wrench,
  HeartPulse,
  Sparkles,
  Store,
  ShieldCheck,
  Truck,
} from "lucide-react";

// Map service names to icons for fallback
const iconMap = {
  Transportation: Car,
  "Food Delivery": Utensils,
  "Grocery Stores": ShoppingBag,
  "Home Services": Wrench,
  Healthcare: HeartPulse,
  "Beauty & Wellness": Sparkles,
  "Online Store": Store,
  "Verified Professionals": ShieldCheck,
  "Courier Service": Package,
  "Delivery Service": Truck,
  "On-Demand Service": Sparkles,
};

const ItemServiceCard = ({ className = "", item }) => {
  const { name, image, iconImage } = item;
  const [imageError, setImageError] = useState(false);

  // Get icon from map or use Package as default
  const IconComponent = iconMap[name] || iconMap["default"] || Package;

  // Generate a safe slug for the URL
  const slug = name?.toLowerCase().replace(/\s+/g, "-") || "service";

  // Validate image URL
  const isValidImage = iconImage && iconImage.trim() !== "" && !imageError;

  return (
    <Link
      href={`/service-booking/${slug}`}
      className={`bg-white h-[130px] flex justify-center items-center rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 hover:border-[#26C165] ${className}`}
    >
      <div className="flex gap-3 px-4 flex-col items-center">
        {/* Image or Icon Fallback */}
        <div className="relative w-10 h-10 flex items-center justify-center">
          {isValidImage ? (
            <Image
              src={iconImage}
              height={45}
              width={45}
              alt={`${name || "Service"} image`}
              quality={80}
              className="object-contain"
              style={{ width: "40px", height: "auto" }} // Fix aspect ratio
              onError={() => setImageError(true)}
              loading="lazy"
              // Add sizes for responsive images if needed
              sizes="40px"
            />
          ) : (
            <IconComponent className="w-8 h-8 text-[#26C165]" />
          )}
        </div>

        <h5 className="text-black font-bold text-center text-sm line-clamp-2">
          {name || "Service"}
        </h5>
      </div>
    </Link>
  );
};

export default ItemServiceCard;

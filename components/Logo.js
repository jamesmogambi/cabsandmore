// components/Logo.jsx
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const Logo = ({
  title = "Cabs&More",
  variant = "default", // default, light, dark, minimal
  size = "md", // sm, md, lg, xl
  showTagline = false,
  className = "",
  animated = false,
}) => {
  // Fixed size configuration - no auto dimensions
  const sizes = {
    sm: {
      image: 32,
      text: "text-base",
      gap: "gap-1.5",
      tagline: "text-[10px]",
    },
    md: { image: 40, text: "text-xl", gap: "gap-2", tagline: "text-xs" },
    lg: { image: 56, text: "text-3xl", gap: "gap-3", tagline: "text-sm" },
    xl: { image: 72, text: "text-4xl", gap: "gap-4", tagline: "text-base" },
  };

  const variants = {
    default: {
      text: "text-slate-900 font-black",
      tagline: "text-slate-600 font-semibold",
      hover: "hover:scale-105",
    },
    light: {
      text: "text-white font-black",
      tagline: "text-slate-300 font-semibold",
      hover: "hover:scale-105",
    },
    dark: {
      text: "text-slate-900 font-black",
      tagline: "text-slate-700 font-semibold",
      hover: "hover:scale-105",
    },
    minimal: {
      text: "text-slate-900 font-black",
      tagline: "text-slate-500 font-semibold",
      hover: "hover:opacity-80",
    },
  };

  const currentSize = sizes[size];
  const currentVariant = variants[variant];

  return (
    <div
      className={cn(
        "flex items-center transition-all duration-300 select-none",
        currentSize.gap,
        currentVariant.hover,
        animated && "hover:scale-105 active:scale-95",
        className,
      )}
    >
      {/* Fixed size logo image */}
      <div className="relative flex-shrink-0">
        <Image
          width={currentSize.image}
          height={currentSize.image}
          src="/images/logo.png"
          className="object-contain"
          alt={`${title} logo`}
          priority
          quality={80}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col leading-none">
        <h2
          className={cn(
            "font-bold tracking-tight uppercase leading-none transition-colors duration-300",
            currentSize.text,
            currentVariant.text,
          )}
        >
          {title}
          <span className="inline-block ml-0.5 text-[#26C165]">.</span>
        </h2>

        {showTagline && (
          <p
            className={cn(
              "font-semibold tracking-wider uppercase leading-none mt-0.5 transition-colors duration-300",
              currentSize.tagline,
              currentVariant.tagline,
            )}
          >
            Everyday Services
          </p>
        )}
      </div>
    </div>
  );
};

// Simplified Gradient Logo
export const GradientLogo = ({ title = "Cabs&More", size = "md" }) => {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 72,
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  return (
    <div className="flex items-center gap-2 group select-none">
      <Image
        width={sizes[size]}
        height={sizes[size]}
        src="/images/logo.png"
        className="transition-transform duration-300 group-hover:scale-110 object-contain"
        alt={`${title} logo`}
        priority
        quality={80}
      />
      <h1
        className={cn(
          "font-sans font-black tracking-tight uppercase leading-none",
          textSizes[size],
          "bg-gradient-to-r from-[#26C165] to-emerald-600 bg-clip-text text-transparent",
        )}
      >
        {title}
      </h1>
    </div>
  );
};

// Simplified Monochrome Logo
export const MonochromeLogo = ({
  title = "Cabs&More",
  size = "md",
  color = "black",
}) => {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 72,
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  const textColor = color === "white" ? "text-white" : "text-slate-900";

  return (
    <div className="flex items-center gap-2 select-none">
      <Image
        width={sizes[size]}
        height={sizes[size]}
        src="/images/logo.png"
        className="grayscale object-contain"
        alt={`${title} logo`}
        priority
        quality={80}
      />
      <h2
        className={cn(
          "font-sans font-black tracking-tight uppercase leading-none",
          textSizes[size],
          textColor,
        )}
      >
        {title}
      </h2>
    </div>
  );
};

// Simplified Compact Logo
export const CompactLogo = ({ title = "Cabs&More" }) => {
  return (
    <div className="flex items-center gap-1.5 select-none">
      <Image
        width={28}
        height={28}
        src="/images/logo.png"
        className="object-contain"
        alt={`${title} logo`}
        priority
        quality={80}
      />
      <span className="font-sans font-black tracking-tight text-sm uppercase text-slate-900 leading-none">
        {title}
      </span>
    </div>
  );
};

// Simplified Ultra Bold Logo
export const UltraBoldLogo = ({ title = "Cabs&More", size = "lg" }) => {
  const sizes = {
    sm: 40,
    md: 56,
    lg: 72,
    xl: 96,
  };

  const textSizes = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-5xl",
    xl: "text-6xl",
  };

  return (
    <div className="flex items-center gap-3 select-none">
      <Image
        width={sizes[size]}
        height={sizes[size]}
        src="/images/logo.png"
        className="transition-transform duration-300 hover:scale-110 object-contain"
        alt={`${title} logo`}
        priority
        quality={80}
      />
      <h2
        className={cn(
          "font-sans font-black tracking-tight uppercase leading-none",
          textSizes[size],
          "text-slate-900",
        )}
      >
        {title}
      </h2>
    </div>
  );
};

export default Logo;

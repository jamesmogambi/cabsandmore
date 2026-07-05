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
  // Size configurations
  const sizes = {
    sm: {
      image: 32,
      text: "text-base",
      gap: "gap-1.5",
      tagline: "text-[10px]",
    },
    md: {
      image: 40,
      text: "text-xl",
      gap: "gap-2",
      tagline: "text-xs",
    },
    lg: {
      image: 56,
      text: "text-3xl",
      gap: "gap-3",
      tagline: "text-sm",
    },
    xl: {
      image: 72,
      text: "text-4xl",
      gap: "gap-4",
      tagline: "text-base",
    },
  };

  // Variant configurations - with bolder and darker text
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
      {/* Logo Image with enhanced styling */}
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-[#26C165]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Image
          width={currentSize.image}
          height={currentSize.image}
          src="/images/logo.png"
          className={cn(
            "relative object-contain transition-all duration-300",
            animated && "hover:rotate-[-5deg]",
          )}
          style={{
            width: "auto",
            height: "auto",
          }}
          alt={`${title} logo`}
          priority
          quality={80}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col leading-none">
        <h2
          className={cn(
            "  font-bold tracking-tight uppercase leading-none transition-colors duration-300",
            currentSize.text,
            currentVariant.text,
            // Extra boldness with text-shadow for darker appearance
            "drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
          )}
          style={{
            letterSpacing: "-0.02em",
            textShadow: "0 1px 2px rgba(0,0,0,0.03)",
          }}
        >
          {title}
          {/* Decorative dot after title */}
          <span className="inline-block ml-0.5 text-[#26C165]">.</span>
        </h2>

        {/* Tagline */}
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

// Alternative logo with gradient text - bolder
export const GradientLogo = ({ title = "Cabs&More", size = "md" }) => {
  const sizes = {
    sm: { image: 32, text: "text-base" },
    md: { image: 40, text: "text-xl" },
    lg: { image: 56, text: "text-3xl" },
    xl: { image: 72, text: "text-4xl" },
  };

  const currentSize = sizes[size];

  return (
    <div className="flex items-center gap-2 group select-none">
      <Image
        width={currentSize.image}
        height={currentSize.image}
        src="/images/logo.png"
        className="transition-transform duration-300 group-hover:scale-110"
        style={{
          width: "auto",
          height: "auto",
        }}
        alt={`${title} logo`}
        priority
        quality={80}
      />
      <h1
        className={cn(
          "font-sans font-black tracking-tight uppercase leading-none",
          currentSize.text,
          "bg-gradient-to-r from-[#26C165] to-emerald-600 bg-clip-text text-transparent",
          "drop-shadow-[0_1px_2px_rgba(38,193,101,0.2)]",
        )}
        style={{
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h1>
    </div>
  );
};

// Monochrome logo version - bolder
export const MonochromeLogo = ({
  title = "Cabs&More",
  size = "md",
  color = "black",
}) => {
  const sizes = {
    sm: { image: 32, text: "text-base" },
    md: { image: 40, text: "text-xl" },
    lg: { image: 56, text: "text-3xl" },
    xl: { image: 72, text: "text-4xl" },
  };

  const currentSize = sizes[size];
  const textColor = color === "white" ? "text-white" : "text-slate-900";

  return (
    <div className="flex items-center gap-2 select-none">
      <Image
        width={currentSize.image}
        height={currentSize.image}
        src="/images/logo.png"
        className="grayscale"
        style={{
          width: "auto",
          height: "auto",
        }}
        alt={`${title} logo`}
        priority
        quality={80}
      />
      <h2
        className={cn(
          "font-sans font-black tracking-tight uppercase leading-none",
          currentSize.text,
          textColor,
          "drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
        )}
        style={{
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
    </div>
  );
};

// Compact logo for mobile/navigation - bolder
export const CompactLogo = ({ title = "Cabs&More" }) => {
  return (
    <div className="flex items-center gap-1.5 select-none">
      <Image
        width={28}
        height={28}
        src="/images/logo.png"
        className="rounded-full"
        style={{
          width: "auto",
          height: "auto",
        }}
        alt={`${title} logo`}
        priority
        quality={80}
      />
      <span className="font-sans font-black tracking-tight text-sm uppercase text-slate-900 leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        {title}
      </span>
    </div>
  );
};

// Logo with badge - bolder
export const LogoWithBadge = ({
  title = "Cabs&More",
  badge = "✓ Verified",
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative">
        <Image
          width={48}
          height={48}
          src="/images/logo.png"
          className="rounded-full"
          style={{
            width: "auto",
            height: "auto",
          }}
          alt={`${title} logo`}
          priority
          quality={80}
        />
        {/* Badge */}
        <div className="absolute -bottom-1 -right-1 bg-[#26C165] text-white text-[8px] font-black px-1.5 py-0.5 rounded-full">
          {badge}
        </div>
      </div>
      <div>
        <h2 className="font-sans font-black tracking-tight uppercase text-xl text-slate-900 leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
          {title}
        </h2>
        <p className="text-xs text-slate-500 font-semibold mt-0.5">
          Trusted Platform
        </p>
      </div>
    </div>
  );
};

// Ultra bold version - for headlines
export const UltraBoldLogo = ({ title = "Cabs&More", size = "lg" }) => {
  const sizes = {
    sm: { image: 40, text: "text-2xl" },
    md: { image: 56, text: "text-4xl" },
    lg: { image: 72, text: "text-5xl" },
    xl: { image: 96, text: "text-6xl" },
  };

  const currentSize = sizes[size];

  return (
    <div className="flex items-center gap-3 select-none">
      <Image
        width={currentSize.image}
        height={currentSize.image}
        src="/images/logo.png"
        className="transition-transform duration-300 hover:scale-110"
        style={{
          width: "auto",
          height: "auto",
        }}
        alt={`${title} logo`}
        priority
        quality={80}
      />
      <h2
        className={cn(
          "font-sans font-black tracking-tight uppercase leading-none",
          currentSize.text,
          "text-slate-900",
          "drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]",
        )}
        style={{
          letterSpacing: "-0.03em",
          textShadow: "0 2px 4px rgba(0,0,0,0.06)",
        }}
      >
        {title}
      </h2>
    </div>
  );
};

export default Logo;

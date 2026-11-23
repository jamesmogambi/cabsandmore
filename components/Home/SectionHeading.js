import { cn } from "@/lib/utils";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-lightgreen">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[32px] font-bold leading-tight tracking-tight text-titledark md:text-[40px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[17px] leading-relaxed text-[#666666] md:text-[18px]">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProcessWorkItem = ({
  number,
  image = "",
  title,
  description,
  className,
}) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="relative w-full max-w-[230px]">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white p-2 shadow-sm">
          <Image
            alt={title}
            src={image}
            width={400}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="absolute -left-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#26C165] text-sm font-bold text-white shadow-lg ring-4 ring-white">
          {number}
        </span>
      </div>
      <h3 className="mt-5 text-[19px] font-bold text-[#111827]">{title}</h3>
      <p className="mt-2 max-w-[280px] text-[14px] leading-relaxed text-[#6b7280]">
        {description}
      </p>
    </div>
  );
};

export default ProcessWorkItem;
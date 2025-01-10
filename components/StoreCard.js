import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

const StoreCard = ({ data, className }) => {
  const {
    image,
    name,
    cuisines,
    rating,
    openingHour,
    closingHour,
    promo,
    contact,
  } = data;
  const cuisineItems = cuisines.slice(0, 2);
  return (
    <div className={cn(" p-2.5 ", className)}>
      <Link href={`/store-detail/${name}`}>
        <div className="border-[1.5px] hover:shadow-neutral-400 rounded-2xl border-neutral-200 overflow-hidden shadow-lg">
          <div className="w-full relative h-[130px] ">
            <Image
              alt="store image"
              src={image}
              className="object-cover"
              fill
            />
          </div>
          <div className="px-5 mt-5">
            <div>
              <h5 className="text-black text-[18px] font-bold">{name}</h5>

              <h6 className="text-[13px] text-[#868E96]">
                {cuisineItems.map((i, k) => (
                  <>{i} ,</>
                ))}
                <> ,More...</>
              </h6>
            </div>
            <div className="flex gap-2 items-center mt-7">
              <div className="flex justify-center px-1 gap-1 text-white items-center bg-lightgreen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="text-[15px]">{rating}</span>
              </div>
              <p className="text-[14px] text-[#777777]">
                <span className="uppercase ">{openingHour}</span> to{" "}
                <span className="uppercase ">{closingHour}</span>
              </p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#26c165"
                  class="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <p className="text-[13px] text-[#777777]">{contact}</p>
              </div>
            </div>
            <Separator className="my-3 bg-neutral-200" />

            <div className="flex gap-2 items-center mb-2">
              <Image src={"/images/discount-24.png"} width={26} height={25} />
              <p className="text-black text-[14px]">
                <span>Ksh {promo.discount}</span> off on orders above{" "}
                <span>Ksh {promo.cap}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StoreCard;

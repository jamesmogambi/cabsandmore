import { storeDetail } from "@/data/store";
import Image from "next/image";
import { Label } from "../ui/label";

const StoreHeader = () => {
  const {
    image,
    name,
    rating,
    categories,
    orderMinAmount,
    offerDetails,
    contact,
    address,
  } = storeDetail;
  return (
    <div className="py-5 border-[0.5px] rounded-[5px] border-neutral-300">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
          <div className="w-full relative h-[250px]">
            <Image
              src={image}
              fill
              alt="store-image"
              className=""
              quality={100}
              priority
            />
          </div>
        </div>

        {/* second portion */}
        <div className="w-full flex-col md:flex-1 py-8 md:pl-8 pr-5">
          <div className="flex justify-between">
            <h1 className="text-[40px] leading-tight">{name}</h1>
            <div className="bg-lightgreen cursor-pointer flex gap-2 h-10 text-white rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[20px]">{rating}</span>
            </div>
          </div>

          <div className="flex mt-6 flex-col w-full md:flex-row">
            <div className="w-full md:w-1/3 space-y-2 ">
              <Label className="font-bold text-lg">
                Opening Hours :{" "}
                <span className="font-light text-lightgreen">Open</span>
              </Label>

              <p className="text-lg">Today 12:01 AM to 11:59 PM</p>

              <div className="">
                <Label className="font-bold text-lg">Category :</Label>
                <p className="text-lg">
                  {categories.map((i, k) => (
                    <span key={k}>
                      {i.name} {k !== categories.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="w-full md:flex-1 flex flex-col space-y-2">
              <Label className="font-bold text-lg">
                Order Min Amount :{" "}
                <span className="font-light ">Ksh {orderMinAmount}</span>
              </Label>

              <Label className="font-bold text-lg">
                Offer :{" "}
                <span className="font-light text-lightgreen ">
                  Ksh {offerDetails.discount} discount on min Order Ksh{" "}
                  {offerDetails.cap}
                </span>
              </Label>
            </div>
            <div className="w-full md:w-1/4 flex flex-col space-y-2">
              <Label className="font-bold text-lg">
                Phone Number :{" "}
                <span className="font-light text-lightgreen ">{contact}</span>
              </Label>
              <Label className="font-bold text-lg">
                Delivery Time :{" "}
                <span className="font-light text-lightgreen ">40 mins</span>
              </Label>
              <div>
                <Label className="font-bold text-lg">Address : </Label>
                <p className="text-lg">{address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;

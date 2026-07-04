import { itemServices } from "@/data/service";
import ItemServiceCard from "../ItemServiceCard";

const ItemServices = () => {
  return (
    <div className="flex justify-center my-10 py-6 items-center bg-[#FAFAFA]">
      <div className="md:max-w-[1140px] w-full pt-6 pb-8">
        <h1 className="text-black text-center text-[40px] mb-6">
          More Services
        </h1>

        <div className="flex  flex-1    flex-row flex-wrap ">
          {itemServices.map((i, k) => (
            <div
              key={k}
              className="md:basis-1/6 basis-1/2  flex-wrap cursor-pointer  p-5  hover:shadow-2xl"
            >
              <ItemServiceCard item={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemServices;

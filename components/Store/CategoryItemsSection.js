import { storeDetail } from "@/data/store";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Button } from "../ui/button";
import ItemsSection from "./ItemsSection";
import Cart from "./Cart";

const CategoryItemsSection = () => {
  const { categories } = storeDetail;
  return (
    <div className="flex flex-col md:flex-row  mt-7 mb-4  ">
      <div className="w-full md:w-1/4  flex flex-col  items-end  ">
        <div className=" border-red-500 w-1/2">
          <div className=" space-y-3">
            <h4 className="text-[24px] text-right text-[#363636]">
              Category List
            </h4>
            <Separator className="bg-neutral-200 " />
          </div>

          <ul className=" ">
            {categories.map((i, k) => (
              <li key={k}>
                <Button
                  asChild
                  className="w-full text-lg py-6 text-lightgreen items-center justify-end flex hover:bg-neutral-100 rounded-xl"
                >
                  <Link href="">{i.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full md:flex-1 ">
        {categories.map((i, k) => (
          <ItemsSection key={k} category={i} />
        ))}
      </div>
      <div className="w-full md:w-1/4 px-4  ">
        <Cart />
      </div>
    </div>
  );
};

export default CategoryItemsSection;

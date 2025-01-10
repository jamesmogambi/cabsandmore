import FilterSection from "@/components/Store/FilterSection";
import SearchInput from "@/components/Store/SearchInput";
import StoreCard from "@/components/StoreCard";
import { foodStores } from "@/data/store";

const page = () => {
  return (
    <div className="py-5">
      <div>
        <SearchInput className={"w-1/2  m-auto"} />
      </div>
      <FilterSection />

      <div className="max-w-[1140px] mt-12 mb-5 flex flex-wrap m-auto ">
        {foodStores.map((i, k) => (
          <StoreCard data={i} key={k} className={"basis-full md:basis-1/3"} />
        ))}
      </div>
    </div>
  );
};

export default page;

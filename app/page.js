import Banner from "@/components/Home/Banner";
import ItemServices from "@/components/Home/ItemServices";
import LeftSideBanner from "@/components/Home/LeftSideBanner";
import ProcessWork from "@/components/Home/ProcessWork";
import RightSideBanner from "@/components/Home/RightSideBanner";
import Services from "@/components/Home/Services";
import Stores from "@/components/Home/Stores";
import { foodStores, groceryStores } from "@/data/store";

export default function Home() {
  const foodstores = foodStores.slice(0, 3);
  const grocerystores = groceryStores.slice(0, 3);
  return (
    <main className="flex min-h-screen  flex-col justify-between ">
      <Banner />
      <Services />
      <ItemServices />
      <Stores title="Food Delivery" data={[]} className="my-10" />
      <Stores title="Grocery Stores" data={[]} />
      <RightSideBanner
        title={"Register Your Self As Provider"}
        image={"/images/provider-registration3.png"}
        className="my-5 lg:my-10"
      />
      <LeftSideBanner
        title={"Register You Store"}
        image={"/images/store-registration.png"}
        className="my-5 lg:my-10 "
      />
      <RightSideBanner
        title="Register Your Self As Driver / Delivery"
        image="/images/driver-registration.png"
        className="my-5 lg:my-10"
      />
      <ProcessWork />
    </main>
  );
}

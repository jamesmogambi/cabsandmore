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
    <main className="flex min-h-screen flex-col justify-between ">
      <Banner />
      <Services />
      <ItemServices />
      <Stores title="Food Delivery" data={foodstores} className="mb-6" />
      <Stores title="Grocery Stores" data={grocerystores} />
      <RightSideBanner
        title={"Register Your Self As Provider"}
        image={
          "https://foxjekapp24.startuptrinity.com/assets/front/img/register-provider-banner.webp"
        }
      />
      <LeftSideBanner
        title={"Register You Store"}
        image={
          "https://foxjekapp24.startuptrinity.com/assets/front/img/register-store-banner.webp"
        }
      />
      <RightSideBanner
        title="Register Your Self As Driver / Delivery"
        image="https://foxjekapp24.startuptrinity.com/assets/front/img/register-driver-banner.webp"
      />
      <ProcessWork />
    </main>
  );
}

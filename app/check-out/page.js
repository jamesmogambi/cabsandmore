import Cart from "@/components/Store/Cart";
import DeliveryAddressSection from "@/components/Store/DeliveryAddressSection";

const page = () => {
  return (
    <div className="bg-stonelight min-h-screen">
      <div className="flex flex-1 flex-col md:flex-row">
        <div className=" px-4 py-7 w-full md:flex-1">
          <DeliveryAddressSection />
        </div>
        <div className=" border-red-400 px-4 py-7 w-full md:w-2/6">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default page;

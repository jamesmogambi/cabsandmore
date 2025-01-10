import Link from "next/link";
import { Button } from "../ui/button";

const DeliveryAddressSection = () => {
  return (
    <div className="bg-white w-full px-3 py-6">
      <div className="pl-8">
        <h1 className="text-[40px] mb-6 text-[#808080]">Delivery Address</h1>
        <span className="text-[#808080]">
          Multiple addresses in this location.
        </span>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className=" w-full md:w-1/2 p-3">
          <div className="border border-neutral-200 p-5 hover:shadow-2xl">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#D3D3D3"
                class="w-12 h-12"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>

              <div className="space-y-5">
                <h3 className="text-[22px] text-[#292929]">Home</h3>
                <p className="text-[#93959f] text-sm">
                  Home P1600, Amphitheatre Parkway, Mountain View, Santa Clara
                  County, 94043, California,
                </p>

                <Button
                  asChild
                  className="bg-lightgreen hover:bg-lightgreen/85 text-white font-semibold text-[17px]"
                >
                  <Link href="">Delivery Here</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full md:w-1/2 p-3">
          <div className="border hover:shadow-2xl border-neutral-300 h-full border-dotted  p-5">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#D3D3D3"
                class="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-[22px] text-[#292929]">Add New Address</h3>
                <div className="flex justify-center items-center mt-4">
                  <Button className="text-lightgreen text-[17px] font-semibold bg-white border border-lightgreen hover:text-white hover:bg-lightgreen">
                    <Link href="">Add Address</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddressSection;

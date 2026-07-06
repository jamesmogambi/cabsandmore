"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

const CartFooter = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      {pathname === "/check-out" ? (
        <div className="bg-[#f5f5f5] py-6 px-4 ">
          <div className="flex justify-between">
            <span className="text-lg">To Pay</span>
            <span className="text-lg">Ksh 150.25</span>
          </div>
          <div className="flex justify-end w-full">
            <Button
              onClick={() => router.back()}
              className="text-lightgreen flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="lucide lucide-arrow-left"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>

              <span className="text-lg">Back To Store</span>
            </Button>
          </div>

          <Button className="bg-lightgreen mt-6 py-6 hover:bg-lightgreen/80 rounded-[5px] w-full text-white text-lg">
            Place Order
          </Button>
        </div>
      ) : (
        <div className="bg-[#f5f5f5] pt-6 px-4 pb-2">
          <div className="flex justify-between">
            <span className="text-lg">Subtotal</span>
            <span className="text-lg">Ksh 50</span>
          </div>
          <p className="text-[18px]">Extra Charges may apply</p>

          <Button
            asChild
            className="bg-lightgreen mt-6 py-6 hover:bg-lightgreen/80 rounded-[5px] w-full text-white text-lg"
          >
            <Link href="/check-out">Checkout</Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default CartFooter;

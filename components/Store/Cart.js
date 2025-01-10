import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

const items = [
  {
    name: "Cherry",
    quantity: 3,
    price: 200,
  },
  {
    name: "Waffle",
    quantity: 3,
    price: 200,
  },
];
const Cart = ({ className }) => {
  return (
    <div
      className={cn(
        "border rounded-[5px] border-neutral-300 overflow-hidden",
        className
      )}
    >
      <div className="bg-[#f5f5f5] p-4">
        <div className="space-x-2">
          <span className="font-semibold text-[#363636] ">Cart</span>
          <Badge className="bg-[#333333] hover:bg-[#333333] font-semibold text-[#f5f5f5]">
            0
          </Badge>
        </div>
      </div>
      <Separator className="bg-neutral-300" />
      {/* display cart items */}
      {items.length > 0 && (
        <ScrollArea className="w-full h-72">
          <div className="p-4 py-3 bg-[#efdef5]">
            <div className="text-[19px] font-bold">Kapseret Store</div>
          </div>
          <div className="bg-white">
            {items.map((i, k) => (
              <CartItem key={k} item={i} />
            ))}
          </div>

          {/* cart summary */}
          <div className="p-4 bg-[#f5f5f5]">
            <div className="flex justify-between">
              <span className="text-lg">Item Total</span>
              <span className="text-lg">Ksh 250</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg">Discount</span>
              <span className="text-lg">Ksh 250</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg">Tax</span>
              <span className="text-lg">Ksh 250</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg">Delivery Charges</span>
              <span className="text-lg">Ksh 0</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg">Packaging Charges</span>
              <span className="text-lg">Ksh 0</span>
            </div>
          </div>
        </ScrollArea>
      )}

      {/* cart subtotal */}
      <div>
        <Separator className="bg-neutral-200" />
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;

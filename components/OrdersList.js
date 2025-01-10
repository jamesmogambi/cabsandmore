import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { orders } from "@/data/order";
import OrderItem from "./OrderItem";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const filters = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Today",
    value: "today",
  },
  {
    name: "Last 30 days",
    value: "Last 30 days",
  },
  {
    name: "Upcoming",
    value: "upcoming",
  },
];
const OrdersList = () => {
  return (
    <div className="border-[1.5px]  overflow-hidden  border-neutral-300 rounded-[5px]">
      <div className="p-4 bg-[#FBFAFA] flex justify-between">
        <h5 className="text-[20px] font-bold">Order History</h5>
        <Select>
          <SelectTrigger className="w-[200px] bg-white border-neutral-300 rounded-[5px]">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent className="bg-white border-neutral-300 rounded-[5px]">
            <SelectGroup>
              <SelectLabel>Delivery</SelectLabel>
              {filters.map((i, k) => (
                <SelectItem value={i.value} key={k}>
                  {i.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-white p-4">
        <Tabs defaultValue="transport" className="w-full">
          <TabsList className="w-full  space-y-3 md:space-y-0  block md:flex gap-6 mb-16  md:mb-5 ">
            <TabsTrigger
              value="transport"
              className="basis-1/3 data-[state=active]:border-none data-[state=active]:text-white data-[state=active]:bg-lightgreen border rounded-[5px] text-lg border-neutral-300  text-black "
            >
              Transport Service
            </TabsTrigger>
            <TabsTrigger
              value="delivery"
              className="basis-1/3 data-[state=active]:border-none data-[state=active]:text-white data-[state=active]:bg-lightgreen border rounded-[5px] text-lg border-neutral-300  text-black "
            >
              Delivery Service
            </TabsTrigger>
            <TabsTrigger
              value="demand"
              className="basis-1/3 data-[state=active]:border-none data-[state=active]:text-white data-[state=active]:bg-lightgreen border rounded-[5px] text-lg border-neutral-300  text-black "
            >
              On-Demand Service
            </TabsTrigger>
          </TabsList>
          <TabsContent value="transport" className="space-y-4">
            {orders.map((i, k) => (
              <OrderItem key={k} order={i} />
            ))}
          </TabsContent>
        </Tabs>

        <div className="flex justify-end mt-4">
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem className="hover:bg-neutral-100 text-lightgreen rounded-[5px]">
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem className="hover:bg-neutral-100 focus:bg-lightgreen focus:text-white text-lightgreen rounded-[5px]">
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem className="hover:bg-neutral-100 focus:bg-lightgreen focus:text-white text-lightgreen rounded-[5px]">
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem className="hover:bg-neutral-100 focus:bg-lightgreen focus:text-white text-lightgreen rounded-[5px]">
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;

// components/OrdersList.jsx
"use client";

import { useState, useEffect } from "react";
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import OrderItem from "./OrderItem";
import { getOrders, getOrdersByDateRange } from "@/actions/order";

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lightgreen"></div>
  </div>
);

const filters = [
  { name: "All", value: "all" },
  { name: "Today", value: "today" },
  { name: "Last 30 days", value: "last30days" },
  { name: "Upcoming", value: "upcoming" },
];

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("transport");
  const [isFiltering, setIsFiltering] = useState(false);

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const result = await getOrders();
        if (result.success) {
          setOrders(result.data);
        } else {
          setError(result.error || "Failed to fetch orders");
        }
      } catch (err) {
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Handle filter change with server action
  const handleFilterChange = async (filter) => {
    setSelectedFilter(filter);
    setIsFiltering(true);

    try {
      const result = await getOrdersByDateRange(filter);
      if (result.success) {
        setOrders(result.data);
      } else {
        setError(result.error || "Failed to filter orders");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsFiltering(false);
    }
  };

  // Filter orders by tab type
  const getOrdersByTab = (tabValue) => {
    const typeMap = {
      transport: "Courier Service",
      delivery: "Delivery Service",
      demand: "On-Demand Service",
    };

    return orders.filter(
      (order) =>
        order.type === typeMap[tabValue] ||
        (tabValue === "transport" && order.type === "Courier Service"),
    );
  };

  if (loading) {
    return (
      <div className="border-[1.5px] overflow-hidden border-neutral-300 rounded-[5px] p-8">
        <LoadingSpinner />
        <p className="text-center text-gray-500 mt-4">Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-[1.5px] overflow-hidden border-neutral-300 rounded-[5px] p-8">
        <p className="text-center text-red-500">Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 mx-auto block px-4 py-2 bg-lightgreen text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="border-[1.5px] overflow-hidden border-neutral-300 rounded-[5px]">
      <div className="p-4 bg-[#FBFAFA] flex justify-between">
        <h5 className="text-[20px] font-bold">Order History</h5>
        <Select onValueChange={handleFilterChange} value={selectedFilter}>
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
        <Tabs
          defaultValue="transport"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="w-full space-y-3 md:space-y-0 block md:flex gap-6 mb-16 md:mb-5">
            <TabsTrigger
              value="transport"
              className="basis-1/3 data-[state=active]:border-none data-[state=active]:text-white data-[state=active]:bg-lightgreen border rounded-[5px] text-lg border-neutral-300 text-black"
            >
              Transport Service
            </TabsTrigger>
            <TabsTrigger
              value="delivery"
              className="basis-1/3 data-[state=active]:border-none data-[state=active]:text-white data-[state=active]:bg-lightgreen border rounded-[5px] text-lg border-neutral-300 text-black"
            >
              Delivery Service
            </TabsTrigger>
            <TabsTrigger
              value="demand"
              className="basis-1/3 data-[state=active]:border-none data-[state=active]:text-white data-[state=active]:bg-lightgreen border rounded-[5px] text-lg border-neutral-300 text-black"
            >
              On-Demand Service
            </TabsTrigger>
          </TabsList>

          {["transport", "delivery", "demand"].map((tab) => (
            <TabsContent key={tab} value={tab} className="space-y-4">
              {isFiltering && (
                <div className="flex justify-center py-4">
                  <LoadingSpinner />
                </div>
              )}
              {!isFiltering && getOrdersByTab(tab).length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                  No orders found
                </p>
              ) : (
                !isFiltering &&
                getOrdersByTab(tab).map((order, index) => (
                  <OrderItem key={order.id || index} order={order} />
                ))
              )}
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-end mt-4">
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
  );
};

export default OrdersList;

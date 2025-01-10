import CategoryItemsSection from "@/components/Store/CategoryItemsSection";
import StoreHeader from "@/components/Store/StoreHeader";
import React from "react";

const page = () => {
  return (
    <div className="relative px-4 min-h-screen">
      <StoreHeader />
      <CategoryItemsSection />
    </div>
  );
};

export default page;

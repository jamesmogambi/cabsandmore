import React from "react";
import HomeSectionCard from "./HomeSectionCard";
import { transcations } from "@/data/wallet";
import WalletHistoryItem from "./WalletHistoryItem";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const WalletHistory = () => {
  return (
    <HomeSectionCard title={"User wallet histroy"}>
      <div className="bg-white p-3">
        <>
          {transcations.map((i, k) => (
            <WalletHistoryItem key={k} transaction={i} />
          ))}
        </>{" "}
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
    </HomeSectionCard>
  );
};

export default WalletHistory;

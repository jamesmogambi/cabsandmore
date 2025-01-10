"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import EditAddressForm from "./Forms/EditAddressForm";

const AddressSection = () => {
  const [showAdressForm, setShowAddressForm] = useState(false);
  return (
    <>
      {showAdressForm && (
        <EditAddressForm
          closeButton={() => setShowAddressForm(false)}
          className={"mt-3"}
        />
      )}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="space-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-12 h-12"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
          <h3 className="text-[28px] font-medium">Home</h3>
          <p className="text-base">
            Langas, Ngeria Block, Kona Mbaya Uasin Gishu , Kenya
          </p>

          <div className="flex flex-row gap-1">
            <Button className="border-2  text-black text-lg">Edit</Button>
            <Button className="border-2  text-black text-lg">Delete</Button>
          </div>
        </div>

        <div className="space-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-12 h-12"
          >
            <path
              fill-rule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 className="text-[28px] font-medium">Add New Address</h3>
          <Button
            className="border-2 text-lg text-black"
            onClick={() => setShowAddressForm(true)}
          >
            Add New
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddressSection;

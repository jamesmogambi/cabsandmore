// import React from "react";
// import { Button } from "../ui/button";
// import { X } from "lucide-react";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import { cn } from "@/lib/utils";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const EditAddressForm = ({
//   closeButton,
//   title = "Add New Address",
//   className,
// }) => {
//   return (
//     <div className={cn("mb-6", className)}>
//       <h3 className="text-[28px] font-medium">{title}</h3>

//       <div className="flex flex-col md:flex-row">
//         <div className="w-full md:w-1/2">
//           <Button
//             variant="outline"
//             // size="icon"
//             className="border-2 p-0.5 mt-3 border-black"
//             onClick={closeButton}
//           >
//             <X />
//           </Button>
//           {/* TODO:Add map component that allows user to choose location */}
//           <div></div>
//         </div>
//         <div className="w-full md:w-1/2">
//           <form className="w-full ">
//             <div className="space-y-12">
//               <div className="space-y-3">
//                 <Label className=" text-lg ">Address :</Label>
//                 <Input
//                   type=""
//                   className="bg-white  py-5 border-neutral-200 rounded-[6px] text-lg"
//                   placeholder="Enter Location"
//                 />
//               </div>
//               <div className="space-y-3">
//                 <Label className=" text-lg ">Door/Flat No :</Label>
//                 <Input
//                   type=""
//                   className="bg-white  py-5 border-neutral-200 rounded-[6px] text-lg"
//                 />
//               </div>
//               <div className="space-y-3">
//                 <Label className=" text-lg ">Landmark :</Label>
//                 <Input
//                   type=""
//                   className="bg-white  py-5 border-neutral-200 rounded-[6px] text-lg"
//                 />
//               </div>
//               <div className="space-y-3">
//                 <Label className=" text-lg ">Address Type :</Label>
//                 <Select>
//                   <SelectTrigger className="w-full bg-white rounded-[6px] py-5 border-neutral-200 text-lg">
//                     <SelectValue placeholder="Home" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border-neutral-200 rounded-[6px]">
//                     <SelectItem value="home">Home</SelectItem>
//                     <SelectItem value="work">Work</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             <div className=" mt-4">
//               <Button
//                 type="submit"
//                 className="text-black font-light text-base border-black border-2"
//               >
//                 Save & Proceed
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditAddressForm;

// components/Forms/EditAddressForm.jsx
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { X, MapPin, Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addAddress, updateAddress } from "@/actions/address";
import { toast } from "sonner";

const EditAddressForm = ({
  closeButton,
  title = "Add New Address",
  className,
  address = null,
  onSave,
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "Home",
    address: "",
    doorFlat: "",
    landmark: "",
    city: "",
    country: "Kenya",
    isDefault: false,
  });

  // Load address data if editing
  useEffect(() => {
    if (address) {
      setFormData({
        type: address.type || "Home",
        address: address.address || "",
        doorFlat: address.doorFlat || "",
        landmark: address.landmark || "",
        city: address.city || "",
        country: address.country || "Kenya",
        isDefault: address.isDefault || false,
      });
    }
  }, [address]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.address || !formData.city) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);

      let result;
      if (address) {
        // Update existing address
        result = await updateAddress(address.id, formData);
      } else {
        // Add new address
        result = await addAddress(formData);
      }

      if (result.success) {
        toast.success(
          address
            ? "Address updated successfully"
            : "Address added successfully",
        );
        if (onSave) onSave();
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to save address");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "mb-8 bg-white rounded-2xl shadow-lg border border-slate-200 p-6",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 rounded-xl">
            <MapPin className="w-6 h-6 text-[#26C165]" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            {address ? "Edit Address" : "Add New Address"}
          </h3>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="border-2 border-slate-300 hover:border-red-500 hover:bg-red-50 rounded-xl"
          onClick={closeButton}
          disabled={loading}
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="min-h-[300px] bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
          <div className="text-center p-6">
            <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">Select Location on Map</p>
            <p className="text-sm text-slate-400">
              Click to choose your delivery location
            </p>
            <Button
              variant="outline"
              className="mt-4 border-[#26C165] text-[#26C165] hover:bg-green-50"
              disabled={loading}
            >
              Open Map
            </Button>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Address */}
            <div>
              <Label className="text-sm font-semibold text-slate-700">
                Address <span className="text-red-500">*</span>
              </Label>
              <Input
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="bg-white py-3 border-slate-200 rounded-xl focus:border-[#26C165] focus:ring-[#26C165] text-base"
                placeholder="Enter your street address"
                required
                disabled={loading}
              />
            </div>

            {/* Door/Flat No */}
            <div>
              <Label className="text-sm font-semibold text-slate-700">
                Door/Flat No
              </Label>
              <Input
                value={formData.doorFlat}
                onChange={(e) =>
                  setFormData({ ...formData, doorFlat: e.target.value })
                }
                className="bg-white py-3 border-slate-200 rounded-xl focus:border-[#26C165] focus:ring-[#26C165] text-base"
                placeholder="Enter door or flat number"
                disabled={loading}
              />
            </div>

            {/* Landmark */}
            <div>
              <Label className="text-sm font-semibold text-slate-700">
                Landmark
              </Label>
              <Input
                value={formData.landmark}
                onChange={(e) =>
                  setFormData({ ...formData, landmark: e.target.value })
                }
                className="bg-white py-3 border-slate-200 rounded-xl focus:border-[#26C165] focus:ring-[#26C165] text-base"
                placeholder="Nearby landmark (e.g., Near City Mall)"
                disabled={loading}
              />
            </div>

            {/* City */}
            <div>
              <Label className="text-sm font-semibold text-slate-700">
                City <span className="text-red-500">*</span>
              </Label>
              <Input
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="bg-white py-3 border-slate-200 rounded-xl focus:border-[#26C165] focus:ring-[#26C165] text-base"
                placeholder="Enter your city"
                required
                disabled={loading}
              />
            </div>

            {/* Address Type */}
            <div>
              <Label className="text-sm font-semibold text-slate-700">
                Address Type <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.type}
                onValueChange={(value) =>
                  setFormData({ ...formData, type: value })
                }
                disabled={loading}
              >
                <SelectTrigger className="w-full bg-white rounded-xl py-3 border-slate-200 text-base focus:border-[#26C165] focus:ring-[#26C165]">
                  <SelectValue placeholder="Select address type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200 rounded-xl">
                  <SelectItem value="Home" className="text-base">
                    🏠 Home
                  </SelectItem>
                  <SelectItem value="Work" className="text-base">
                    💼 Work
                  </SelectItem>
                  <SelectItem value="Other" className="text-base">
                    📍 Other
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Set as Default */}
            {!address?.isDefault && (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isDefault"
                  checked={formData.isDefault}
                  onChange={(e) =>
                    setFormData({ ...formData, isDefault: e.target.checked })
                  }
                  className="w-4 h-4 text-[#26C165] border-slate-300 rounded focus:ring-[#26C165]"
                  disabled={loading}
                />
                <Label
                  htmlFor="isDefault"
                  className="text-sm text-slate-700 cursor-pointer"
                >
                  Set as default address
                </Label>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
            <Button
              type="submit"
              className="bg-[#26C165] hover:bg-[#1fa854] text-white font-semibold text-base px-8 py-3 rounded-xl flex-1"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {address ? "Updating..." : "Saving..."}
                </>
              ) : address ? (
                "Update Address"
              ) : (
                "Save Address"
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-slate-300 text-slate-600 hover:bg-slate-50 text-base px-8 py-3 rounded-xl"
              onClick={closeButton}
              disabled={loading}
            >
              Cancel
            </Button>
          </div>

          {/* Address Limit Note */}
          <p className="text-xs text-slate-500 text-center">
            You can add up to 5 delivery addresses
          </p>
        </form>
      </div>
    </div>
  );
};

export default EditAddressForm;

// "use client";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import EditAddressForm from "./Forms/EditAddressForm";

// const AddressSection = () => {
//   const [showAdressForm, setShowAddressForm] = useState(false);
//   return (
//     <>
//       {showAdressForm && (
//         <EditAddressForm
//           closeButton={() => setShowAddressForm(false)}
//           className={"mt-3"}
//         />
//       )}
//       <div className="flex flex-col md:flex-row justify-between">
//         <div className="space-y-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             class="w-12 h-12"
//           >
//             <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
//             <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
//           </svg>
//           <h3 className="text-[28px] font-medium">Home</h3>
//           <p className="text-base">
//             Langas, Ngeria Block, Kona Mbaya Uasin Gishu , Kenya
//           </p>

//           <div className="flex flex-row gap-1">
//             <Button className="border-2  text-black text-lg">Edit</Button>
//             <Button className="border-2  text-black text-lg">Delete</Button>
//           </div>
//         </div>

//         <div className="space-y-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             class="w-12 h-12"
//           >
//             <path
//               fill-rule="evenodd"
//               d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
//               clip-rule="evenodd"
//             />
//           </svg>
//           <h3 className="text-[28px] font-medium">Add New Address</h3>
//           <Button
//             className="border-2 text-lg text-black"
//             onClick={() => setShowAddressForm(true)}
//           >
//             Add New
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddressSection;

// components/AddressSection.jsx
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import EditAddressForm from "./Forms/EditAddressForm";
import {
  Home,
  MapPin,
  Plus,
  Trash2,
  Edit,
  Briefcase,
  Loader2,
} from "lucide-react";
// import {
//   getUserAddresses,
//   deleteAddress,
//   setDefaultAddress,
// } from "@/app/actions/address";
import { toast } from "sonner";
import {
  getUserAddresses,
  setDefaultAddress,
  deleteAddress,
} from "@/actions/address";

// Map address type to icon
const getAddressIcon = (type) => {
  const icons = {
    Home: <Home className="w-6 h-6 text-[#26C165]" />,
    Work: <Briefcase className="w-6 h-6 text-blue-500" />,
    Other: <MapPin className="w-6 h-6 text-purple-500" />,
  };
  return icons[type] || <MapPin className="w-6 h-6 text-[#26C165]" />;
};

// Get color based on address type
const getAddressColor = (type) => {
  const colors = {
    Home: "bg-green-50 border-green-200",
    Work: "bg-blue-50 border-blue-200",
    Other: "bg-purple-50 border-purple-200",
  };
  return colors[type] || "bg-slate-50 border-slate-200";
};

const AddressSection = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  // Fetch addresses on mount
  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const result = await getUserAddresses();
      if (result.success) {
        setAddresses(result.data);
      } else {
        toast.error(result.error || "Failed to load addresses");
      }
    } catch (error) {
      toast.error("Failed to load addresses");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this address?"))
      return;

    try {
      setActionLoading(id);
      const result = await deleteAddress(id);
      if (result.success) {
        await fetchAddresses();
        toast.success("Address deleted successfully");
      } else {
        toast.error(result.error || "Failed to delete address");
      }
    } catch (error) {
      toast.error("Failed to delete address");
    } finally {
      setActionLoading(null);
    }
  };

  const handleSetDefault = async (id) => {
    try {
      setActionLoading(id);
      const result = await setDefaultAddress(id);
      if (result.success) {
        await fetchAddresses();
        toast.success("Default address updated");
      } else {
        toast.error(result.error || "Failed to set default address");
      }
    } catch (error) {
      toast.error("Failed to set default address");
    } finally {
      setActionLoading(null);
    }
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setShowAddressForm(true);
  };

  const handleFormClose = () => {
    setShowAddressForm(false);
    setEditingAddress(null);
  };

  const handleFormSave = async () => {
    await fetchAddresses();
    setShowAddressForm(false);
    setEditingAddress(null);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-[#26C165] animate-spin" />
        <p className="mt-4 text-slate-500">Loading your addresses...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Edit Address Form */}
      {showAddressForm && (
        <EditAddressForm
          closeButton={handleFormClose}
          className="mt-3"
          address={editingAddress}
          onSave={handleFormSave}
        />
      )}

      {/* Address Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Display Addresses */}
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`relative rounded-2xl border-2 p-6 transition-all hover:shadow-lg ${getAddressColor(address.type)} ${
              address.isDefault ? "ring-2 ring-[#26C165] ring-offset-2" : ""
            }`}
          >
            {/* Default Badge */}
            {address.isDefault && (
              <span className="absolute -top-2 -right-2 bg-[#26C165] text-white text-xs font-bold px-3 py-1 rounded-full">
                Default
              </span>
            )}

            {/* Address Type Icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                {getAddressIcon(address.type)}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {address.type}
              </h3>
            </div>

            {/* Address Details */}
            <div className="space-y-2 text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-slate-400" />
                <span>{address.address}</span>
              </p>
              {address.doorFlat && (
                <p className="pl-6 text-sm text-slate-500">
                  Door/Flat: {address.doorFlat}
                </p>
              )}
              {address.landmark && (
                <p className="pl-6 text-sm text-slate-500">
                  Landmark: {address.landmark}
                </p>
              )}
              <p className="pl-6 text-sm text-slate-500">
                {address.city}, {address.country || "Kenya"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:border-[#26C165] hover:text-[#26C165] transition"
                onClick={() => handleEdit(address)}
                disabled={actionLoading === address.id}
              >
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 text-red-600 hover:border-red-500 hover:bg-red-50 transition"
                onClick={() => handleDelete(address.id)}
                disabled={actionLoading === address.id}
              >
                {actionLoading === address.id ? (
                  <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4 mr-1" />
                )}
                Delete
              </Button>
              {!address.isDefault && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-300 text-[#26C165] hover:border-[#26C165] hover:bg-green-50 transition"
                  onClick={() => handleSetDefault(address.id)}
                  disabled={actionLoading === address.id}
                >
                  Set as Default
                </Button>
              )}
            </div>
          </div>
        ))}

        {/* Add New Address Card */}
        {addresses.length < 5 && (
          <div
            className="relative rounded-2xl border-2 border-dashed border-slate-300 p-6 transition-all hover:border-[#26C165] hover:bg-green-50 cursor-pointer group"
            onClick={() => {
              setEditingAddress(null);
              setShowAddressForm(true);
            }}
          >
            <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
              <div className="w-16 h-16 rounded-full bg-slate-100 group-hover:bg-[#26C165] transition flex items-center justify-center">
                <Plus className="w-8 h-8 text-slate-400 group-hover:text-white transition" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-700 group-hover:text-[#26C165] transition">
                Add New Address
              </h3>
              <p className="text-sm text-slate-500 text-center mt-1">
                Add a new delivery address
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Address Limit Warning */}
      {addresses.length >= 5 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
          <p className="text-yellow-700">
            <span className="font-semibold">Note:</span> You've reached the
            maximum limit of 5 addresses. Please delete an existing address to
            add a new one.
          </p>
        </div>
      )}

      {/* Address Count */}
      <div className="text-sm text-slate-500 text-center">
        {addresses.length} of 5 addresses used
      </div>
    </div>
  );
};

export default AddressSection;

// "use client";
// import { itemServices } from "@/data/service";
// import ItemServiceCard from "../ItemServiceCard";
// import useServicesStore from "@/store/servicesStore";
// import { useMemo } from "react";

// const ItemServices = () => {
//   // Get services from store
//   const services = useServicesStore((state) => state.services);
//   const loading = useServicesStore((state) => state.loading);
//   const isInitialized = useServicesStore((state) => state.isInitialized);

//   // Get all categories except the main ones (if you want to show all services)
//   // Or filter specific categories you want to show in "More Services"
//   const displayServices = useMemo(() => {
//     if (!isInitialized || loading) return [];

//     // Option 1: Show all services
//     return services;

//     // Option 2: Show only specific categories
//     // return services.filter(service =>
//     //   service.category === 'provider-service' ||
//     //   service.category === 'video-consulting-services'
//     // );

//     // Option 3: Show all services except main categories
//     // return services.filter(service =>
//     //   service.category !== 'delivery' &&
//     //   service.category !== 'transport'
//     // );

//     // Option 4: Show only active services
//     // return services.filter(service => service.status === 'Active');
//   }, [services, isInitialized, loading]);

//   // Show loading state
//   if (loading || !isInitialized) {
//     return (
//       <div className="flex justify-center my-10 py-6 items-center bg-[#FAFAFA]">
//         <div className="md:max-w-[1140px] w-full pt-6 pb-8">
//           <h1 className="text-black text-center text-[40px] mb-6">
//             More Services
//           </h1>
//           <div className="flex justify-center items-center min-h-[200px]">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Show empty state if no services
//   if (displayServices.length === 0) {
//     return (
//       <div className="flex justify-center my-10 py-6 items-center bg-[#FAFAFA]">
//         <div className="md:max-w-[1140px] w-full pt-6 pb-8">
//           <h1 className="text-black text-center text-[40px] mb-6">
//             More Services
//           </h1>
//           <div className="text-center text-gray-500 py-8">
//             <p>No services available at the moment</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   console.log("Displaying services:", displayServices);

//   return (
//     <div className="flex justify-center my-10 py-6 items-center bg-[#FAFAFA]">
//       <div className="md:max-w-[1140px] w-full pt-6 pb-8">
//         <h1 className="text-black text-center text-[40px] mb-6">
//           More Services
//         </h1>

//         <div className="flex flex-1 flex-row flex-wrap justify-center">
//           {displayServices.map((service) => (
//             <div
//               key={service.id}
//               className="md:basis-1/6 basis-1/2 flex-wrap cursor-pointer p-5 hover:shadow-2xl"
//             >
//               <ItemServiceCard item={service} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemServices;

"use client";
import { useState, useMemo, useEffect } from "react";
import ItemServiceCard from "../ItemServiceCard";
import useServicesStore from "@/store/servicesStore";
import { ChevronDown, Loader2 } from "lucide-react";

const ItemServices = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const BATCH_SIZE = 8;

  const services = useServicesStore((state) => state.services);
  const loading = useServicesStore((state) => state.loading);
  const isInitialized = useServicesStore((state) => state.isInitialized);

  const displayServices = useMemo(() => {
    if (!isInitialized || loading) return [];
    return services;
  }, [services, isInitialized, loading]);

  const visibleServices = useMemo(() => {
    return displayServices.slice(0, visibleCount);
  }, [displayServices, visibleCount]);

  const hasMore = visibleCount < displayServices.length;

  const loadMore = () => {
    setIsLoadingMore(true);
    // Simulate loading delay for smoother UX
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + BATCH_SIZE, displayServices.length),
      );
      setIsLoadingMore(false);
    }, 500);
  };

  if (loading || !isInitialized) {
    return (
      <div className="flex justify-center my-10 py-6 items-center bg-[#FAFAFA]">
        <div className="md:max-w-[1140px] w-full pt-6 pb-8">
          <h1 className="text-black text-center text-[40px] mb-6">
            More Services
          </h1>
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader2 className="h-12 w-12 animate-spin text-[#26C165]" />
          </div>
        </div>
      </div>
    );
  }

  if (displayServices.length === 0) {
    return (
      <div className="flex justify-center my-10 py-6 items-center bg-[#FAFAFA]">
        <div className="md:max-w-[1140px] w-full pt-6 pb-8">
          <h1 className="text-black text-center text-[40px] mb-6">
            More Services
          </h1>
          <div className="text-center text-gray-500 py-8">
            <p className="text-lg">No services available at the moment</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-10 py-6 items-center bg-[#FAFAFA]">
      <div className="md:max-w-[1140px] w-full pt-6 pb-8">
        <h1 className="text-black text-center text-[40px] mb-6">
          More Services
        </h1>

        <div className="flex flex-1 flex-row flex-wrap justify-center">
          {visibleServices.map((service, index) => (
            <div
              key={service.id}
              className={`md:basis-1/6 basis-1/2 flex-wrap cursor-pointer p-5 hover:shadow-2xl transition-all duration-300
                animate-fadeIn`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <ItemServiceCard item={service} />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              disabled={isLoadingMore}
              className="group flex items-center gap-2 px-8 py-3 bg-[#26C165] text-white rounded-xl font-semibold hover:bg-[#1fa855] transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <span>View More Services</span>
                  <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        <div className="text-center text-sm text-gray-500 mt-4">
          Showing {visibleServices.length} of {displayServices.length} services
        </div>
      </div>
    </div>
  );
};

export default ItemServices;

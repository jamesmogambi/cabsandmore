"use client";
import React from "react";
import dynamic from "next/dynamic";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo";

const GoogleMapReact = dynamic(() => import("google-map-react"), {
  ssr: false,
});

const page = ({ params }) => {
  const slug = params?.slug || "pet-care";
  const serviceData = {
    name: "Pet Care Services",
    description:
      "Book professional pet care services including pet grooming, pet daycare, and pet training on Cabs&More. Find trusted pet care providers near you in Kenya.",
    serviceType: "Pet Care",
    category: "Pet Care",
    url: `https://cabsandmore.online/service-booking/${slug}`,
    provider: {
      "@type": "Organization",
      name: "Cabs&More",
    },
  };

  const serviceStructuredData = [
    serviceSchema(serviceData),
    breadcrumbSchema([
      { name: "Home", url: "https://cabsandmore.online" },
      { name: "Service Booking", url: "https://cabsandmore.online/service-booking" },
      { name: "Pet Care", url: `https://cabsandmore.online/service-booking/${slug}` },
    ]),
  ];

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <JsonLd schema={serviceStructuredData} id="service-booking-schema" />
      <div className="md:h-full h-[600px] w-full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default page;
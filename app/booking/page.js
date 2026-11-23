"use client";
import React from "react";
import dynamic from "next/dynamic";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

const GoogleMapReact = dynamic(() => import("google-map-react"), {
  ssr: false,
});

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const page = () => {
  const bookingBreadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://cabsandmore.online" },
    { name: "Book Ride", url: "https://cabsandmore.online/booking" },
  ]);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <JsonLd schema={bookingBreadcrumb} id="booking-breadcrumb" />
      <div className="md:h-full h-[600px] w-full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default page;
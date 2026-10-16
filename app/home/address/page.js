import AddressSection from "@/components/AddressSection";
import React from "react";

export const metadata = {
  title: "Home Address – Manage Your Addresses | Cabs&More",
  description: "Manage your delivery addresses on Cabs&More. Add, edit, and set default addresses for faster checkout across Kenya.",
  keywords: [
    "address Cabs&More",
    "Cabs&More",
    "Kenya super app",
    "address management",
  ],
  openGraph: {
    title: "Home Address – Manage Your Addresses | Cabs&More",
    description: "Manage your delivery addresses on Cabs&More. Add, edit, and set default addresses for faster checkout across Kenya.",
    url: "https://cabsandmore.online/home/address",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Home Address – Manage Your Addresses | Cabs&More",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Address – Manage Your Addresses | Cabs&More",
    description: "Manage your delivery addresses on Cabs&More. Add, edit, and set default addresses for faster checkout across Kenya.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/home/address",
  },
};

const page = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-[32px] mb-4 font-medium">Delivery Address</h2>
        <span className="text-base">User Add Only Five Address</span>
      </div>
      <AddressSection />
    </div>
  );
};

export default page;

import CouponList from "@/components/CouponList";
import React from "react";

export const metadata = {
  title: "My Coupons – Cabs&More",
  description: "View your available coupons and discounts on Cabs&More. Save on rides, food, and more.",
  keywords: [
    "my coupons Cabs&More",
    "Cabs&More",
    "Kenya super app",
    "my coupons management",
  ],
  openGraph: {
    title: "My Coupons – Cabs&More",
    description: "View your available coupons and discounts on Cabs&More. Save on rides, food, and more.",
    url: "https://cabsandmore.online/home/my-coupons",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Coupons – Cabs&More",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Coupons – Cabs&More",
    description: "View your available coupons and discounts on Cabs&More. Save on rides, food, and more.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/home/my-coupons",
  },
};

const page = () => {
  return (
    <div>
      <CouponList />
    </div>
  );
};

export default page;

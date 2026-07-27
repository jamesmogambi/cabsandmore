import CouponItem from "@/components/CouponItem";
import { coupons } from "@/data/coupons";
import React from "react";

export const metadata = {
  title: "Coupon Deals – Save Big on Cabs&More",
  description:
    "Browse the latest coupon deals on Cabs&More. Save on rides, food delivery, grocery shopping, home services, and more across Kenya.",
  keywords: [
    "coupon deals Kenya",
    "discounts Kenya",
    "Cabs&More coupons",
    "ride discounts Kenya",
    "food delivery coupons",
    "promo codes Kenya",
    "save on delivery Kenya",
  ],
  openGraph: {
    title: "Coupon Deals – Save Big on Cabs&More",
    description:
      "Browse the latest coupon deals on Cabs&More. Save on rides, food delivery, grocery shopping, home services, and more.",
    url: "https://cabsandmore.online/coupon-deals/coupon-lists",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coupon Deals – Cabs&More",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coupon Deals – Save Big on Cabs&More",
    description:
      "Browse the latest coupon deals on Cabs&More. Save on rides, food delivery, grocery shopping, home services, and more.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/coupon-deals/coupon-lists",
  },
};

const page = () => {
  return (
    <div className="flex flex-wrap mt-4 mb-6">
      {coupons.map((i, k) => (
        <CouponItem
          key={k}
          coupon={i}
          className={"basis-full md:basis-1/3 mb-3 "}
        />
      ))}
    </div>
  );
};

export default page;

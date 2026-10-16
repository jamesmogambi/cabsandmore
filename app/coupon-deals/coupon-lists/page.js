import CouponItem from "@/components/CouponItem";
import { coupons } from "@/data/coupons";
import React from "react";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema, breadcrumbSchema } from "@/lib/seo";

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

// ---------- Structured Data ----------
const couponFaqs = [
  {
    question: "How do I use a coupon on Cabs&More?",
    answer:
      "Browse available coupons, select the one you want, and apply the promo code at checkout. The discount will be automatically applied to your order total.",
  },
  {
    question: "Can I use multiple coupons on one order?",
    answer: "Typically, one coupon can be applied per order. Check the specific coupon terms for details on stacking or combination offers.",
  },
  {
    question: "Do coupons expire?",
    answer: "Yes, most coupons have an expiration date. Each coupon listing shows the validity period so you can use it before it expires.",
  },
  {
    question: "Are coupons applicable to all services?",
    answer: "Coupons may be service-specific. Some apply only to rides, others to food delivery, grocery, or home services. Check each coupon's terms for details.",
  },
];

const couponStructuredData = [
  faqPageSchema(couponFaqs),
  breadcrumbSchema([
    { name: "Home", url: "https://cabsandmore.online" },
    { name: "Coupon Deals", url: "https://cabsandmore.online/coupon-deals/coupon-lists" },
  ]),
];

const page = () => {
  return (
    <>
      <JsonLd schema={couponStructuredData} id="coupon-schema" />
      <div className="flex flex-wrap mt-4 mb-6">
        {coupons.map((i, k) => (
          <CouponItem
            key={k}
            coupon={i}
            className={"basis-full md:basis-1/3 mb-3 "}
          />
        ))}
      </div>
    </>
  );
};

export default page;
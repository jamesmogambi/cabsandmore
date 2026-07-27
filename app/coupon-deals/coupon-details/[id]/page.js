import CouponDetailSection from "@/components/CouponDetailSection";
import { Button } from "@/components/ui/button";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  return {
    title: `Coupon Details – Cabs&More`,
    description:
      'View coupon details and save on your next order with Cabs&More.',
    keywords: [
      'coupon details Kenya',
      'Cabs&More coupon',
      'promo code Kenya',
      'discount code Kenya',
    ],
    openGraph: {
      title: 'Coupon Details – Cabs&More',
      description: 'View coupon details and save on your next order with Cabs&More.',
      url: `https://cabsandmore.online/coupon-deals/coupon-details/${id}`,
      siteName: 'Cabs&More',
      type: 'website',
      locale: 'en_KE',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Coupon Details – Cabs&More',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Coupon Details – Cabs&More',
      description: 'View coupon details and save on your next order with Cabs&More.',
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `https://cabsandmore.online/coupon-deals/coupon-details/${id}`,
    },
  };
}

const page = () => {
  return (
    <div className="mb-6">
      <CouponDetailSection />
    </div>
  );
};

export default page;

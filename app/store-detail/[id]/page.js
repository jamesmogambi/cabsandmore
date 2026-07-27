import CategoryItemsSection from "@/components/Store/CategoryItemsSection";
import StoreHeader from "@/components/Store/StoreHeader";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  return {
    title: `Store Details – Cabs&More`,
    description:
      "View store details, browse products, and place your order on Cabs&More.",
    keywords: [
      "store details Kenya",
      "online store Kenya",
      "Cabs&More store",
      "shop online Kenya",
      "store products Kenya",
    ],
    openGraph: {
      title: `Store Details – Cabs&More`,
      description:
        "View store details, browse products, and place your order on Cabs&More.",
      url: `https://cabsandmore.online/store-detail/${id}`,
      siteName: "Cabs&More",
      type: "website",
      locale: "en_KE",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Store Details – Cabs&More",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Store Details – Cabs&More`,
      description:
        "View store details, browse products, and place your order on Cabs&More.",
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `https://cabsandmore.online/store-detail/${id}`,
    },
  };
}

const page = () => {
  return (
    <div className="relative px-4 min-h-screen">
      <StoreHeader />
      <CategoryItemsSection />
    </div>
  );
};

export default page;

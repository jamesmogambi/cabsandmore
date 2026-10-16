import CategoryItemsSection from "@/components/Store/CategoryItemsSection";
import StoreHeader from "@/components/Store/StoreHeader";
import React from "react";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/seo";

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

const page = ({ params }) => {
  const storeId = params?.id || "store";
  const storeStructuredData = [
    localBusinessSchema({
      name: `Store #${storeId} – Cabs&More`,
      description:
        "Browse products and place your order on this store through Cabs&More's online marketplace.",
      url: `https://cabsandmore.online/store-detail/${storeId}`,
    }),
    breadcrumbSchema([
      { name: "Home", url: "https://cabsandmore.online" },
      { name: "Stores", url: "https://cabsandmore.online/stores" },
      { name: `Store #${storeId}`, url: `https://cabsandmore.online/store-detail/${storeId}` },
    ]),
  ];

  return (
    <>
      <JsonLd schema={storeStructuredData} id="store-detail-schema" />
      <div className="relative px-4 min-h-screen">
        <StoreHeader />
        <CategoryItemsSection />
      </div>
    </>
  );
};

export default page;

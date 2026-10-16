import FilterSection from "@/components/Store/FilterSection";
import SearchInput from "@/components/Store/SearchInput";
import StoreCard from "@/components/StoreCard";
import { foodStores } from "@/data/store";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "All Stores – Food, Grocery & More | Cabs&More",
  description:
    "Browse all stores on Cabs&More. Find food, grocery, pharmacy, and other stores near you across Kenya.",
  keywords: [
    "all stores Kenya",
    "store list Kenya",
    "food stores Kenya",
    "grocery stores Kenya",
    "Cabs&More stores",
    "browse stores Kenya",
  ],
  openGraph: {
    title: "All Stores – Food, Grocery & More | Cabs&More",
    description:
      "Browse all stores on Cabs&More. Find food, grocery, pharmacy, and other stores near you across Kenya.",
    url: "https://cabsandmore.online/store-list/all",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "All Stores – Cabs&More",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Stores – Food, Grocery & More | Cabs&More",
    description:
      "Browse all stores on Cabs&More. Find food, grocery, pharmacy, and other stores near you across Kenya.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/store-list/all",
  },
};

// ---------- Structured Data ----------
const storeListBreadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://cabsandmore.online" },
  { name: "Stores", url: "https://cabsandmore.online/stores" },
  { name: "All Stores", url: "https://cabsandmore.online/store-list/all" },
]);

const page = () => {
  return (
    <>
      <JsonLd schema={storeListBreadcrumb} id="store-list-breadcrumb" />
      <div className="py-5">
        <div>
          <SearchInput className={"w-1/2  m-auto"} />
        </div>
        <FilterSection />

        <div className="max-w-[1140px] mt-12 mb-5 flex flex-wrap m-auto ">
          {foodStores.map((i, k) => (
            <StoreCard data={i} key={k} className={"basis-full md:basis-1/3"} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
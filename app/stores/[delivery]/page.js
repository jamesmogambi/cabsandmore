import DownloadSection from "@/components/Store/DownloadSection";
import PartnerSection from "@/components/Store/PartnerSection";
import StoreBanner from "@/components/Store/StoreBanner";
import StoreList from "@/components/Store/StoreList";

export const metadata = {
  title: "Browse Stores – Food, Grocery & More | Cabs&More",
  description:
    "Browse stores on Cabs&More for food delivery, grocery shopping, pharmacy, and more. Find your favorite stores and order online across Kenya.",
  keywords: [
    "browse stores Kenya",
    "food delivery stores",
    "grocery stores Kenya",
    "online stores Kenya",
    "Cabs&More stores",
    "order food online Kenya",
    "grocery delivery Nairobi",
    "pharmacy delivery Kenya",
  ],
  openGraph: {
    title: "Browse Stores – Food, Grocery & More | Cabs&More",
    description:
      "Browse stores on Cabs&More for food delivery, grocery shopping, pharmacy, and more. Find your favorite stores and order online across Kenya.",
    url: "https://cabsandmore.online/stores",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Browse Stores – Cabs&More",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse Stores – Food, Grocery & More | Cabs&More",
    description:
      "Browse stores on Cabs&More for food delivery, grocery shopping, pharmacy, and more. Find your favorite stores and order online across Kenya.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/stores",
  },
};

const page = () => {
  return (
    <div className=" flex min-h-screen flex-col justify-between ">
      <StoreBanner />
      <StoreList />
      <DownloadSection />
      <PartnerSection />
    </div>
  );
};

export default page;

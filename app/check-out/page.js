import Cart from "@/components/Store/Cart";
import DeliveryAddressSection from "@/components/Store/DeliveryAddressSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Check Out – Complete Your Order | Cabs&More",
  description:
    "Complete your order on Cabs&More. Secure checkout with M-Pesa, bank transfer, and card payments.",
  keywords: [
    "checkout Kenya",
    "M-Pesa payment Kenya",
    "order payment Kenya",
    "secure checkout Cabs&More",
    "complete order Kenya",
  ],
  openGraph: {
    title: "Check Out – Complete Your Order | Cabs&More",
    description:
      "Complete your order on Cabs&More. Secure checkout with M-Pesa, bank transfer, and card payments.",
    url: "https://cabsandmore.online/check-out",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Check Out – Cabs&More",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Check Out – Complete Your Order | Cabs&More",
    description:
      "Complete your order on Cabs&More. Secure checkout with M-Pesa, bank transfer, and card payments.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/check-out",
  },
};

// ---------- Structured Data ----------
const checkoutBreadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://cabsandmore.online" },
  { name: "Stores", url: "https://cabsandmore.online/stores" },
  { name: "Check Out", url: "https://cabsandmore.online/check-out" },
]);

const page = () => {
  return (
    <>
      <JsonLd schema={checkoutBreadcrumb} id="checkout-breadcrumb" />
      <div className="bg-stonelight min-h-screen">
        <div className="flex flex-1 flex-col md:flex-row">
          <div className=" px-4 py-7 w-full md:flex-1">
            <DeliveryAddressSection />
          </div>
          <div className=" border-red-400 px-4 py-7 w-full md:w-2/6">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
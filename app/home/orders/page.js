import OrdersList from "@/components/OrdersList";

export const metadata = {
  title: "My Orders – Cabs&More",
  description: "Track and manage your orders on Cabs&More. View order history and status.",
  keywords: [
    "orders Cabs&More",
    "Cabs&More",
    "Kenya super app",
    "orders management",
  ],
  openGraph: {
    title: "My Orders – Cabs&More",
    description: "Track and manage your orders on Cabs&More. View order history and status.",
    url: "https://cabsandmore.online/home/orders",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Orders – Cabs&More",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Orders – Cabs&More",
    description: "Track and manage your orders on Cabs&More. View order history and status.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/home/orders",
  },
};

const page = () => {
  return (
    <div>
      {" "}
      <OrdersList />
    </div>
  );
};

export default page;

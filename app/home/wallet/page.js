import AddWalletSection from "@/components/AddWalletSection";
import WalletHistory from "@/components/WalletHistory";

export const metadata = {
  title: "My Wallet – Cabs&More",
  description: "Manage your wallet on Cabs&More. Add funds, view transaction history, and make payments.",
  keywords: [
    "wallet Cabs&More",
    "Cabs&More",
    "Kenya super app",
    "wallet management",
  ],
  openGraph: {
    title: "My Wallet – Cabs&More",
    description: "Manage your wallet on Cabs&More. Add funds, view transaction history, and make payments.",
    url: "https://cabsandmore.online/home/wallet",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Wallet – Cabs&More",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Wallet – Cabs&More",
    description: "Manage your wallet on Cabs&More. Add funds, view transaction history, and make payments.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/home/wallet",
  },
};

const page = () => {
  return (
    <div className="space-y-7">
      <AddWalletSection />
      <WalletHistory />
    </div>
  );
};

export default page;

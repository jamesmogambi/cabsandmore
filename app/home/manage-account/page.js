import DeleteAccountSection from "@/components/DeleteAccountSection";
import LogoutSection from "@/components/LogoutSection";
import React from "react";

export const metadata = {
  title: "Manage Account – Cabs&More",
  description: "Manage your Cabs&More account settings, profile information, and preferences.",
  keywords: [
    "manage account Cabs&More",
    "Cabs&More",
    "Kenya super app",
    "manage account management",
  ],
  openGraph: {
    title: "Manage Account – Cabs&More",
    description: "Manage your Cabs&More account settings, profile information, and preferences.",
    url: "https://cabsandmore.online/home/manage-account",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manage Account – Cabs&More",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manage Account – Cabs&More",
    description: "Manage your Cabs&More account settings, profile information, and preferences.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/home/manage-account",
  },
};

const page = () => {
  return (
    <div className="space-y-5">
      {/* TODO: Add a section to manage account settings, including options to delete the account and log out. */}
      {/* <DeleteAccountSection /> */}
      <LogoutSection />
    </div>
  );
};

export default page;

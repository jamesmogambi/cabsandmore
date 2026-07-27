import ProfileForm from "@/components/Forms/ProfileForm";
import React from "react";

export const metadata = {
  title: "My Profile – Cabs&More",
  description: "View and edit your profile on Cabs&More. Manage your personal information and preferences.",
  keywords: [
    "profile Cabs&More",
    "Cabs&More",
    "Kenya super app",
    "profile management",
  ],
  openGraph: {
    title: "My Profile – Cabs&More",
    description: "View and edit your profile on Cabs&More. Manage your personal information and preferences.",
    url: "https://cabsandmore.online/home/profile",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Profile – Cabs&More",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Profile – Cabs&More",
    description: "View and edit your profile on Cabs&More. Manage your personal information and preferences.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/home/profile",
  },
};

const page = () => {
  return (
    <div className="">
      <ProfileForm />
    </div>
  );
};

export default page;

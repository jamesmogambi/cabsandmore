import { Separator } from "@/components/ui/separator";
import React from "react";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Contact Cabs&More – Kenya's All‑in‑One Super App",
  description:
    "Get in touch with Cabs&More. Reach us for media inquiries, business partnerships, or technical support.",
  keywords: [
    "contact Cabs&More",
    "Cabs&More email",
    "Cabs&More phone",
    "support cabsandmore",
    "Kenya super app contact",
  ],
  openGraph: {
    title: "Contact Cabs&More – Kenya's All‑in‑One Super App",
    description:
      "Get in touch with Cabs&More. Reach us for media inquiries, business partnerships, or technical support.",
    url: "https://cabsandmore.online/contact-us",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Cabs&More",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Cabs&More – Kenya's All‑in‑One Super App",
    description:
      "Get in touch with Cabs&More. Reach us for media inquiries, business partnerships, or technical support.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/contact-us",
  },
};

// ---------- Structured Data ----------
const contactStructuredData = [
  localBusinessSchema({
    name: "Cabs&More – Customer Support",
    description:
      "Contact Cabs&More for media inquiries, business partnerships, or technical support. Reach us via email at info@cabsandmore.com or support@cabsandmore.com.",
  }),
  breadcrumbSchema([
    { name: "Home", url: "https://cabsandmore.online" },
    { name: "Contact Us", url: "https://cabsandmore.online/contact-us" },
  ]),
];

const page = () => {
  return (
    <>
      <JsonLd schema={contactStructuredData} id="contact-schema" />
      <div className="p-4 h-screen">
        <div className="pb-12">
          <h2 className="font-medium text-[32px] ml-8 mb-8">Contact Us：</h2>
          <span className="font-extrabold text-base">
            Media and Business Inquiries
          </span>

          <p className="text-lg mt-10">
            <span className="font-[400]">Email us ：</span>{" "}
            <span className="text-lightgreen">info@cabsandmore.com</span>
          </p>
        </div>
        <Separator className="bg-black" />
        <div className="pb-12">
          <h2 className="font-extrabold text-base mt-5">
            General and Tecnical Inquiries
          </h2>

          <p className="text-lg mt-10">
            <span className="font-[400]">Email us ：</span>{" "}
            <span className="text-lightgreen">support@cabsandmore.com</span>
          </p>
        </div>
        <Separator className="bg-black" />
      </div>
    </>
  );
};

export default page;
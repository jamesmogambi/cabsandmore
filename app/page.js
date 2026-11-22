import Banner from "@/components/Home/Banner";
import TrustBar from "@/components/Home/TrustBar";
import Services from "@/components/Home/Services";
import ProcessWork from "@/components/Home/ProcessWork";
import WhyCabsAndMore from "@/components/Home/WhyCabsAndMore";
import PartnerCTA from "@/components/Home/PartnerCTA";
import FAQ from "@/components/Home/FAQ";
import FinalCTA from "@/components/Home/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import { homeFaqs } from "@/data/faq";

export const metadata = {
  title: "Cabs&More – Kenya's All‑in‑One Super App for Rides, Food, Services & More",
  description:
    "Book rides (taxi, boda boda, airport transfers), order food & grocery delivery, find trusted home services (electricians, plumbers, cleaners), book video consultations with doctors and lawyers, and shop online — all in one app across Kenya.",
  keywords: [
    "Kenya super app",
    "ride hailing Kenya",
    "boda boda booking",
    "taxi booking Kenya",
    "food delivery Kenya",
    "grocery delivery Kenya",
    "home services Kenya",
    "electrician Kenya",
    "plumber Kenya",
    "video consultation Kenya",
    "online store Kenya",
    "M-Pesa payments",
    "super app Kenya",
    "Kenya delivery app",
    "ride sharing Kenya",
    "airport transfer Kenya",
  ],
  openGraph: {
    title: "Cabs&More – Kenya's All‑in‑One Super App",
    description:
      "Book rides, order food & grocery delivery, find trusted home services, book video consultations, and shop online — all in one app.",
    url: "https://cabsandmore.online",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cabs&More – Kenya's All‑in‑One Super App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabs&More – Kenya's All‑in‑One Super App",
    description:
      "Book rides, order food & grocery delivery, find trusted home services, book video consultations, and shop online — all in one app.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online",
  },
};

const homeFaqSchema = faqPageSchema(homeFaqs);

export default function Home() {
  return (
    <>
      <JsonLd schema={homeFaqSchema} id="home-faq-schema" />
      <main className="flex flex-col">
        <Banner />
        <TrustBar />
        <Services />
        <ProcessWork />
        <WhyCabsAndMore />
        <PartnerCTA />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
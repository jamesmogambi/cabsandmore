import Banner from "@/components/Home/Banner";
import ItemServices from "@/components/Home/ItemServices";
import LeftSideBanner from "@/components/Home/LeftSideBanner";
import ProcessWork from "@/components/Home/ProcessWork";
import RightSideBanner from "@/components/Home/RightSideBanner";
import Services from "@/components/Home/Services";
import Stores from "@/components/Home/Stores";
import { foodStores, groceryStores } from "@/data/store";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";

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

// ---------- FAQ Structured Data ----------
const homeFaqs = [
  {
    question: "What is Cabs&More?",
    answer:
      "Cabs&More is Kenya's all-in-one super app that brings rides (taxi, boda boda, airport transfers), food & grocery delivery, home services, healthcare consultations, online stores, and professional services together in one trusted platform.",
  },
  {
    question: "Which services does Cabs&More offer?",
    answer:
      "We offer ride-hailing (taxi, boda boda, airport transfers), food delivery, grocery delivery, parcel delivery, pharmacy delivery, home services (electricians, plumbers, cleaners, etc.), beauty & wellness services, video consultations with doctors and lawyers, and an online marketplace for local businesses.",
  },
  {
    question: "Is Cabs&More available across Kenya?",
    answer:
      "Yes, Cabs&More is available across Kenya. We operate in Nairobi, Mombasa, Kisumu, Eldoret, Nakuru, and other major towns. Our service area continues to expand to bring everyday services to more Kenyans.",
  },
  {
    question: "What payment methods does Cabs&More accept?",
    answer:
      "Cabs&More accepts M-Pesa mobile money, bank transfers, credit/debit cards, and mobile wallets. All transactions are encrypted and secure for your peace of mind.",
  },
  {
    question: "How do I book a ride on Cabs&More?",
    answer:
      "Download the Cabs&More app, create an account, select your pickup and drop-off locations, choose your ride type (taxi, boda boda, or airport transfer), and confirm your booking. The app will connect you with a nearby driver in minutes.",
  },
  {
    question: "Can I order food and groceries on Cabs&More?",
    answer:
      "Yes! Browse local restaurants, grocery stores, pharmacies, and other stores on Cabs&More. Add items to your cart, place your order, and get fast delivery to your doorstep.",
  },
  {
    question: "How do I book home services like electricians or plumbers?",
    answer:
      "Browse our home services category, select the service you need (electrician, plumber, cleaner, etc.), choose your preferred provider, pick a date and time, and confirm your booking. Verified professionals will arrive at your location as scheduled.",
  },
  {
    question: "Can I create my own online store on Cabs&More?",
    answer:
      "Yes! Cabs&More offers an Online Store feature that lets businesses create their own digital storefront, list products, manage inventory, accept payments, and reach customers across Kenya — all from one easy-to-use platform.",
  },
  {
    question: "Is my data secure on Cabs&More?",
    answer:
      "We take data security seriously. All personal data is encrypted in transit and at rest using industry-standard protocols. We use secure servers with advanced firewalls and intrusion detection, and we implement strict access controls to protect your information.",
  },
  {
    question: "How can I contact Cabs&More customer support?",
    answer:
      "You can reach our customer support team by email at support@cabsandmore.com or by phone at +254 743 129 621. We aim to respond to all inquiries within 24 hours.",
  },
];

const homeFaqSchema = faqPageSchema(homeFaqs);

export default function Home() {
  const foodstores = foodStores.slice(0, 3);
  const grocerystores = groceryStores.slice(0, 3);
  return (
    <>
      <JsonLd schema={homeFaqSchema} id="home-faq-schema" />
      <main className="flex min-h-screen  flex-col justify-between ">
      <Banner />
      <Services />
      <ItemServices />
      <Stores title="Food Delivery" data={[]} className="my-10" />
      <Stores title="Grocery Stores" data={[]} />
      <RightSideBanner
        title={"Register Your Self As Provider"}
        image={"/images/provider-registration3.png"}
        className="my-5 lg:my-10"
      />
      <LeftSideBanner
        title={"Register You Store"}
        image={"/images/store-registration.png"}
        className="my-5 lg:my-10 "
      />
      <RightSideBanner
        title="Register Your Self As Driver / Delivery"
        image="/images/driver-registration.png"
        className="my-5 lg:my-10"
      />
      <ProcessWork />
      </main>
    </>
  );
}

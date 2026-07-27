import Banner from "@/components/Home/Banner";
import ItemServices from "@/components/Home/ItemServices";
import LeftSideBanner from "@/components/Home/LeftSideBanner";
import ProcessWork from "@/components/Home/ProcessWork";
import RightSideBanner from "@/components/Home/RightSideBanner";
import Services from "@/components/Home/Services";
import Stores from "@/components/Home/Stores";
import { foodStores, groceryStores } from "@/data/store";

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

export default function Home() {
  const foodstores = foodStores.slice(0, 3);
  const grocerystores = groceryStores.slice(0, 3);
  return (
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
  );
}

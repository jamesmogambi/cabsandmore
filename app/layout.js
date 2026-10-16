import "@fontsource/source-sans-pro";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "react-phone-input-2/lib/style.css";
import { ClerkProvider } from "@clerk/nextjs";
import ServicesWrapper from "@/components/ServicesWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "sonner";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo";

// ---------- SEO Metadata ----------
export const metadata = {
  metadataBase: new URL("https://cabsandmore.online"),
  title: {
    default: "Cabs&More – Kenya's All‑in‑One Super App for Rides, Food, Services & More",
    template: "%s | Cabs&More",
  },
  description:
    "Cabs&More is Kenya's all‑in‑one super app. Book rides (taxi, boda boda, airport transfers), order food & grocery delivery, find trusted home services (electricians, plumbers, cleaners), book video consultations with doctors and lawyers, and shop online — all in one app. Available across Kenya.",
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
    "cleaning service Kenya",
    "video consultation Kenya",
    "doctor consultation Kenya",
    "lawyer consultation Kenya",
    "online store Kenya",
    "M-Pesa payments",
    "parcel delivery Kenya",
    "beauty services Kenya",
    "barber Kenya",
    "hairdresser Kenya",
    "massage therapist Kenya",
    "nurse at home Kenya",
    "car wash Kenya",
    "mobile mechanic Kenya",
    "event services Kenya",
    "photographer Kenya",
    "wedding videographer Kenya",
    "cabs and more",
    "cabsandmore",
    "super app Kenya",
    "on-demand services Kenya",
    "everyday services app",
    "Kenya delivery app",
    "ride sharing Kenya",
    "airport transfer Kenya",
    "intercity shuttle Kenya",
    "food delivery Nairobi",
    "grocery delivery Nairobi",
    "home cleaning Kenya",
    "pest control Kenya",
    "gardening services Kenya",
    "waste collection Kenya",
    "TV repair Kenya",
    "fridge repair Kenya",
    "washing machine repair Kenya",
    "car wash Nairobi",
    "tire replacement Kenya",
    "battery jumpstart Kenya",
    "fuel delivery Kenya",
    "makeup artist Kenya",
    "nail technician Kenya",
    "babysitter Kenya",
    "house help Kenya",
    "elderly care Kenya",
    "pet care Kenya",
    "photographer Nairobi",
    "DJ hire Kenya",
    "event planner Kenya",
    "graphic design Kenya",
    "web development Kenya",
    "digital marketing Kenya",
    "content writing Kenya",
    "tutor Kenya",
    "private tutoring Kenya",
    "career coaching Kenya",
    "financial advisor Kenya",
    "business consultant Kenya",
    "courier delivery Kenya",
    "documents delivery Kenya",
    "pharmacy delivery Kenya",
    "moving services Kenya",
    "truck hire Kenya",
    "car rental Kenya",
    "school transport Kenya",
    "solar installation Kenya",
    "CCTV installation Kenya",
    "borehole services Kenya",
    "interior design Kenya",
    "water delivery Kenya",
    "gas cylinder delivery Kenya",
    "flower delivery Kenya",
    "gift delivery Kenya",
    "laundry pickup delivery Kenya",
  ],
  authors: [{ name: "Cabs&More" }],
  creator: "Cabs&More",
  publisher: "Cabs&More",
  applicationName: "Cabs&More",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Cabs&More – Kenya's All‑in‑One Super App for Rides, Food, Services & More",
    description:
      "Book rides, order food & grocery delivery, find trusted home services, book video consultations, and shop online — all in one app. Kenya's next‑generation super app.",
    url: "https://cabsandmore.online",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    alternateLocale: "en_US",
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
    title: "Cabs&More – Kenya's All‑in‑One Super App for Rides, Food, Services & More",
    description:
      "Book rides, order food & grocery delivery, find trusted home services, book video consultations, and shop online — all in one app.",
    images: ["/og-image.jpg"],
    site: "@cabsandmore",
    creator: "@cabsandmore",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "Z96_MimsWSyf2m2TiiY_w2O-PNu9Ga3xR9JiOkJUS14",
  },
  alternates: {
    canonical: "https://cabsandmore.online",
  },
  category: "Transportation and Services",
  classification: "Super App",
  other: {
    "twitter:site:id": "@cabsandmore",
    "og:type": "website",
    "og:locale": "en_KE",
    "og:locale:alternate": "en_US",
    "fb:app_id": "",
  },
};

// ---------- Structured Data ----------
const structuredData = [organizationSchema(), websiteSchema()];

// ---------- Layout ----------
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <JsonLd schema={structuredData} id="organization-website-schema" strategy="beforeInteractive" />
          <Script
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "yvjvz4rmxs");
              `,
            }}
          />
        </head>
        <body>
          <ServicesWrapper>
            <div className="min-h-screen flex flex-col">
              <Header />
              {children}
              <Toaster position="top-right" richColors />
              <Footer />
            </div>
          </ServicesWrapper>
          <ScrollToTop />
        </body>
      </html>
    </ClerkProvider>
  );
}

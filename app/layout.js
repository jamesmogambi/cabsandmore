import "@fontsource/source-sans-pro";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "react-phone-input-2/lib/style.css";
import { ClerkProvider } from "@clerk/nextjs";
import ServicesWrapper from "@/components/ServicesWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "sonner";

// ---------- SEO Metadata ----------
export const metadata = {
  metadataBase: new URL("https://cabsandmore.online"),
  title: {
    default: "Cabs&More – Ride, Eat & Shop. All‑in‑One Super App",
    template: "%s | Cabs&More",
  },
  description:
    "With the super app Cabs&More, you can access on-demand daily services such as ride-hailing, on-demand services, food and grocery delivery, and payments.",
  keywords: [
    "ride-hailing",
    "food delivery",
    "grocery delivery",
    "payments",
    "super app",
    "on-demand services",
    "Cabs&More",
  ],
  authors: [{ name: "Cabs&More" }],
  creator: "Cabs&More",
  publisher: "Cabs&More",
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
    title: "Cabs&More – Ride, Eat & Shop. All‑in‑One Super App",
    description:
      "With the super app Cabs&More, you can access on-demand daily services such as ride-hailing, food and grocery delivery, and payments.",
    url: "https://cabsandmore.online",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg", // create this image (1200x630) in /public
        width: 1200,
        height: 630,
        alt: "Cabs&More – All‑in‑One Super App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabs&More – Ride, Eat & Shop. All‑in‑One Super App",
    description:
      "With the super app Cabs&More, you can access on-demand daily services such as ride-hailing, food and grocery delivery, and payments.",
    images: ["/og-image.jpg"],
    site: "@cabsandmore", // change to your actual Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "Z96_MimsWSyf2m2TiiY_w2O-PNu9Ga3xR9JiOkJUS14",
    // ⚠️ This code is for the old domain (.com).
    // You must re-verify for cabsandmore.online and replace it.
  },
  alternates: {
    canonical: "https://cabsandmore.online",
  },
};

// ---------- Layout ----------
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
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

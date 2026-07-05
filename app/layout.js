import "@fontsource/source-sans-pro";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "react-phone-input-2/lib/style.css";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";
import ServicesWrapper from "@/components/ServicesWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "sonner";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <title>Cabs&More </title>
          <meta
            name="description"
            content="With the super app Cabs&More, you can access on-demand daily services such as ride-hailing, food and grocery delivery, and payments.
"
          />
          <meta
            property="og:title"
            content="Cabs&More - Ride, Eat & Shop. the All In One Super App"
          />
          <meta
            property="og:description"
            content="With the super app Cabs&More, you can access on-demand daily services such as ride-hailing, food and grocery delivery, and payments."
          />
          <meta property="og:url" content="https://www.cabsandmore.com/" />
          <meta property="og:type" content="website" />
          {/* <meta
          name="google-site-verification"
          content="Z96_MimsWSyf2m2TiiY_w2O-PNu9Ga3xR9JiOkJUS14"
        /> */}
        </Head>
        <body>
          <ServicesWrapper>
            <div className="min-h-screen flex  flex-col">
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

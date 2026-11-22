import Link from "next/link";
import { Clock, Heart, Mail, MapPin, Phone } from "lucide-react";
import GooglePlayButton from "./ActionButtons/GooglePlayButton";
import AppleStoreButton from "./ActionButtons/AppleStoreButton";
import Logo from "./Logo";

const serviceLinks = [
  { name: "Ride", href: "/booking" },
  { name: "Food Delivery", href: "/stores/food-delivery" },
  { name: "Grocery", href: "/stores/grocery-delivery" },
  { name: "Parcel Delivery", href: "/booking" },
  { name: "Home Services", href: "/service-booking/home-cleaning" },
  { name: "Coupon Deals", href: "/coupon-deals/coupon-lists" },
];

const companyLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Become a Partner", href: "/contact-us" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/cabsandmore",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cabsandmore",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/cabsandmore",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.88-1.75-2.88-1.75 0-2.02 1.37-2.02 2.79V21h-4z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0B1F14] text-white">
      <div className="h-1 w-full bg-gradient-to-r from-[#26C165] via-[#FFB81C] to-[#26C165]" />
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#26C165]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1140px] px-4 py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12 md:gap-8">
          <div className="col-span-2 md:col-span-4">
            <Logo variant="light" size="md" />

            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/70">
              Cabs&More is your all-in-one super app for everyday services.
              Book rides, order food and groceries, send parcels, hire trusted
              professionals, and much more — all from one easy-to-use platform.
            </p>

            <div className="mt-6 flex gap-2.5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cabs&More on ${social.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#26C165] hover:text-white"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div className="mt-7">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/50">
                Get the app
              </p>
              <div className="mt-3 flex max-w-[260px] flex-col gap-3">
                <GooglePlayButton variant="light" />
                <AppleStoreButton variant="light" />
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/50">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-[15px]">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/50">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-[15px]">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/50">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3.5 text-[15px]">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#26C165]" />
                <a
                  href="tel:+254743129621"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  +254 743 129 621
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#26C165]" />
                <a
                  href="mailto:support@cabsandmore.com"
                  className="break-all text-white/80 transition-colors hover:text-white"
                >
                  support@cabsandmore.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#26C165]" />
                <span className="text-white/80">
                  123 Business Park, Westlands, Nairobi
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#26C165]" />
                <span className="text-white/80">
                  Mon–Fri 8am–8pm · Sat 9am–6pm
                </span>
              </li>
            </ul>

            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#26C165] px-6 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1fa855]"
            >
              Contact support
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-white/50">
            <span>© 2026 Cabs&More. All rights reserved.</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5 text-[#26C165]" />
              Made in Kenya
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-white/60">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
            <Link
              href="/contact-us"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white/70">
              M-PESA
            </span>
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white/70">
              VISA
            </span>
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white/70">
              MASTERCARD
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
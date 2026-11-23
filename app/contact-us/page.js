import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import {
  localBusinessSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import CopyEmailButton from "@/components/CopyEmailButton";
import FinalCTA from "@/components/Home/FinalCTA";
import SectionHeading from "@/components/Home/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Contact Cabs&More – Support, Partnerships & Enquiries",
  description:
    "Contact Cabs&More for support, partnerships, or general enquiries. Call +254 743 129 621, email support@cabsandmore.com, or visit us in Westlands, Nairobi.",
  keywords: [
    "contact Cabs&More",
    "Cabs&More support",
    "Cabs&More phone",
    "Cabs&More email",
    "Cabs&More address",
    "Westlands Nairobi",
    "Kenya super app contact",
  ],
  openGraph: {
    title: "Contact Cabs&More – Support, Partnerships & Enquiries",
    description:
      "Contact Cabs&More for support, partnerships, or general enquiries. Call +254 743 129 621, email support@cabsandmore.com, or visit us in Westlands, Nairobi.",
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
    title: "Contact Cabs&More – Support, Partnerships & Enquiries",
    description:
      "Contact Cabs&More for support, partnerships, or general enquiries. Call +254 743 129 621, email support@cabsandmore.com, or visit us in Westlands, Nairobi.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/contact-us",
  },
};

const contactMethods = [
  {
    label: "Call us",
    value: "+254 743 129 621",
    description: "Mon–Fri 8am–8pm · Sat 9am–6pm",
    href: "tel:+254743129621",
    icon: Phone,
    external: false,
  },
  {
    label: "Email support",
    value: "support@cabsandmore.com",
    description: "Bookings, payments, and app support",
    href: "mailto:support@cabsandmore.com",
    icon: Mail,
    external: false,
  },
  {
    label: "Business & partnerships",
    value: "info@cabsandmore.com",
    description: "Media, partnerships, and general enquiries",
    href: "mailto:info@cabsandmore.com",
    icon: Handshake,
    external: false,
  },
  {
    label: "Visit us",
    value: "123 Business Park, Westlands",
    description: "Nairobi, Kenya",
    href: "https://www.google.com/maps/search/?api=1&query=Westlands+Nairobi+Kenya",
    icon: MapPin,
    external: true,
  },
];

const contactFaqs = [
  {
    question: "How quickly will I hear back?",
    answer:
      "We aim to reply within one business day, Monday to Saturday. If your message is urgent, call us on +254 743 129 621 during support hours.",
  },
  {
    question: "How do I get help with an existing booking?",
    answer:
      "Include your booking reference, the service you booked, and the date and time of the booking. You can also contact support directly from the booking screen in the app.",
  },
  {
    question: "Can I change or cancel a booking?",
    answer:
      "Yes. Open the booking in the app and choose “Change” or “Cancel”. Any applicable fees are shown before you confirm. For help, contact support with your booking reference.",
  },
  {
    question: "Do you work with business and partnership enquiries?",
    answer:
      "Yes. Email info@cabsandmore.com with a short overview of your business, partnership idea, or media request, and our team will get back to you.",
  },
  {
    question: "What are your support hours?",
    answer:
      "Our support team is available Monday to Friday, 8am–8pm, and Saturday, 9am–6pm. You can email us at any time and we'll reply during support hours.",
  },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/cabsandmore" },
  { name: "Instagram", href: "https://www.instagram.com/cabsandmore" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/cabsandmore" },
];

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
  faqPageSchema(contactFaqs),
];

const page = () => {
  return (
    <>
      <JsonLd schema={contactStructuredData} id="contact-schema" />

      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF9F0] via-[#F7FDF9] to-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#26C165]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#FFB81C]/10 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1140px] px-4 pb-12 pt-14 md:pb-16 md:pt-20">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#26C165]/10 text-[#1b7f45]">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#1b7f45]">
                Contact
              </p>
            </div>

            <h1 className="mt-5 max-w-3xl text-[40px] font-bold leading-[1.08] tracking-tight text-titledark sm:text-[52px] lg:text-[62px]">
              We&apos;re here to help
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#4b5563] md:text-[18px]">
              Questions about a booking, a delivery, or a partnership? Reach
              the Cabs&More team — we usually reply within one business day.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-[#4b5563]">
              <a
                href="tel:+254743129621"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#1b7f45]"
              >
                <Phone className="h-4 w-4 text-[#1b7f45]" aria-hidden="true" />
                +254 743 129 621
              </a>
              <a
                href="mailto:support@cabsandmore.com"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#1b7f45]"
              >
                <Mail className="h-4 w-4 text-[#1b7f45]" aria-hidden="true" />
                support@cabsandmore.com
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#1b7f45]" aria-hidden="true" />
                Mon–Fri 8am–8pm · Sat 9am–6pm
              </span>
            </div>
          </div>
        </section>

        {/* Contact methods */}
        <section className="mx-auto w-full max-w-[1140px] px-4 pt-4 md:pt-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#26C165]/40 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#26C165]/10 text-[#1b7f45]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b7280]">
                    {method.label}
                  </p>
                  <p className="mt-2 text-[16px] font-bold leading-snug text-[#111827] transition-colors group-hover:text-[#1b7f45]">
                    {method.value}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#6b7280]">
                    {method.description}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        {/* Form and info */}
        <section className="mx-auto w-full max-w-[1140px] px-4 py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />

            <aside className="rounded-3xl border border-neutral-200 bg-[#FAFAFA] p-6 md:p-8">
              <h2 className="text-[24px] font-bold text-[#111827] md:text-[28px]">
                Good to know
              </h2>

              <ul className="mt-6 space-y-5">
                <li className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#26C165]/10 text-[#1b7f45]">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-[#111827]">
                      Replies within 1 business day
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-[#6b7280]">
                      We aim to respond to every message within one business
                      day, Monday to Saturday.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#26C165]/10 text-[#1b7f45]">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-[#111827]">
                      Include your booking reference
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-[#6b7280]">
                      It helps us find your booking and get you an answer
                      faster.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#26C165]/10 text-[#1b7f45]">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-[#111827]">
                      Your details stay private
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-[#6b7280]">
                      We only use your information to respond to your enquiry.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 border-t border-neutral-200 pt-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#6b7280]">
                  Follow Cabs&More
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-[13px] font-semibold text-[#374151] transition-colors hover:border-[#26C165] hover:text-[#1b7f45]"
                    >
                      {social.name}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <CopyEmailButton email="support@cabsandmore.com" />
              </div>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#FAFAFA] py-16 md:py-24">
          <div className="mx-auto grid w-full max-w-[1140px] gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Support"
                title="Contact questions"
                description="Quick answers to the things people ask us most."
              />

              <Link
                href="tel:+254743129621"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#26C165] px-6 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1fa855]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call support
              </Link>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {contactFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`contact-faq-${index}`}
                  className="border-neutral-200"
                >
                  <AccordionTrigger className="py-5 text-left text-[16px] font-semibold text-[#111827] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[15px] leading-relaxed text-[#6b7280]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <FinalCTA />
      </main>
    </>
  );
};

export default page;
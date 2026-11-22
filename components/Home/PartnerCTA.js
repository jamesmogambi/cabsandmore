import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const partners = [
  {
    title: "Become a driver",
    description:
      "Earn on your own schedule. Sign up to drive or deliver with Cabs&More.",
    image: "/images/partnerCTA/why-4-live-tracking.png",
    cta: "Start earning",
    href: "/contact-us",
  },
  {
    title: "Grow your business",
    description:
      "Reach more customers and manage orders in one simple dashboard.",
    image: "/images/partnerCTA/why-1-all-in-one.png",
    cta: "Add your store",
    href: "/contact-us",
  },
  {
    title: "Offer your services",
    description:
      "Connect with customers who need your skills and grow your client base.",
    image: "/images/partnerCTA/why-3-verified-professionals.png",
    cta: "Become a partner",
    href: "/contact-us",
  },
];

const PartnerCTA = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1140px] px-4">
        <SectionHeading
          eyebrow="Partner with us"
          title="Grow with Cabs&More"
          description="Join thousands of drivers, shops, and professionals earning and growing on Cabs&More."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.title}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-[#F5F5F5]">
                <Image
                  src={partner.image}
                  alt={partner.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[20px] font-bold text-[#111827]">
                  {partner.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#6b7280]">
                  {partner.description}
                </p>
                <Link
                  href={partner.href}
                  className="mt-5 inline-flex items-center gap-1 text-[15px] font-bold text-[#26C165]"
                >
                  {partner.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
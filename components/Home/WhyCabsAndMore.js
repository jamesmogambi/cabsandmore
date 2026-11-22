import {
  BadgeCheck,
  Headphones,
  Layers,
  Route,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Layers,
    title: "Everything in one app",
    description:
      "Rides, delivery, home services, health, shopping and more — no switching between apps.",
  },
  {
    icon: Wallet,
    title: "Pay your way",
    description:
      "M-Pesa, card, or cash. Fast, secure checkout every single time.",
  },
  {
    icon: ShieldCheck,
    title: "Verified professionals",
    description:
      "Every provider is vetted and rated, so you always know who is coming.",
  },
  {
    icon: Route,
    title: "Live tracking",
    description:
      "Follow your driver, courier, or service provider in real time.",
  },
  {
    icon: Headphones,
    title: "Here when you need us",
    description:
      "Friendly support in English and Swahili, seven days a week.",
  },
  {
    icon: BadgeCheck,
    title: "Built for Kenya",
    description:
      "Local payments, local cities, and fair, transparent pricing.",
  },
];

const WhyCabsAndMore = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1140px] px-4">
        <SectionHeading
          eyebrow="Why Cabs&More"
          title="Less hassle, more living"
          description="We built Cabs&More to make everyday life in Kenya simpler, safer, and more affordable."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#26C165]/40 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#26C165]/10 text-[#26C165]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-[19px] font-bold text-[#111827]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#6b7280]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyCabsAndMore;
import { Layers, MapPin, ShieldCheck, Wallet } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "10+ services",
    subtitle: "All in one app",
  },
  {
    icon: Wallet,
    title: "M-Pesa & cards",
    subtitle: "Safe, instant payments",
  },
  {
    icon: ShieldCheck,
    title: "Verified providers",
    subtitle: "Trusted and rated",
  },
  {
    icon: MapPin,
    title: "Nationwide",
    subtitle: "Available across Kenya",
  },
];

const TrustBar = () => {
  return (
    <section className="border-y border-neutral-100 bg-white">
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-2 gap-x-4 gap-y-6 px-4 py-8 md:grid-cols-4 md:divide-x md:divide-neutral-100">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-center gap-3 md:justify-center"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#26C165]/10 text-[#26C165]">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[15px] font-bold text-[#111827]">
                  {item.title}
                </p>
                <p className="text-[13px] text-[#6b7280]">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBar;
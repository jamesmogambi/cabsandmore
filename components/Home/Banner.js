import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import GooglePlayButton from "../ActionButtons/GooglePlayButton";
import AppleStoreButton from "../ActionButtons/AppleStoreButton";

const trustPoints = [
  "M-Pesa accepted",
  "Verified providers",
  "Nationwide coverage",
];

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#D4F5E3] via-[#E9FBF1] to-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#26C165]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#FFB81C]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1140px] flex-col items-center gap-12 px-4 py-14 md:flex-row md:gap-10 md:py-20">
        <div className="w-full md:w-1/2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#26C165]/30 bg-white/70 px-4 py-1.5 text-[13px] font-semibold text-[#1b7f45] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#26C165]" />
            Kenya&apos;s all-in-one super app
          </span>

          <h1 className="mt-6 text-[40px] font-bold leading-[1.08] tracking-tight text-[#0B1F14] sm:text-[52px] lg:text-[62px]">
            Everything you need,{" "}
            <span className="text-[#26C165]">delivered in one app.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-[#4b5563] md:text-[20px]">
            Ride, order food and groceries, send parcels, hire trusted
            professionals, and shop online — all from one simple app built for
            Kenya.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GooglePlayButton />
            <AppleStoreButton />
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[15px] font-medium text-[#374151]"
              >
                <CheckCircle2 className="h-5 w-5 text-[#26C165]" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden w-full md:block md:w-1/2">
          <div className="relative mx-auto max-w-[440px]">
            <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-gradient-to-tr from-[#26C165]/25 to-[#FFB81C]/20 blur-3xl" />
            <Image
              alt="Cabs&More app showing rides, delivery, and everyday services"
              src="/images/banners/banner-phones.jpg"
              width={640}
              height={704}
              priority
              quality={90}
              className="relative h-auto w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-black/5"
            />
            <div className="absolute -bottom-5 -left-6 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur lg:block">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af]">
                One app
              </p>
              <p className="text-[15px] font-bold text-[#111827]">
                10+ everyday services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
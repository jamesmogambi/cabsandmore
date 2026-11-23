import GooglePlayButton from "../ActionButtons/GooglePlayButton";
import AppleStoreButton from "../ActionButtons/AppleStoreButton";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#26C165] to-[#1FA855] py-16 md:py-20">
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10" />

      <div className="relative mx-auto flex w-full max-w-[1140px] flex-col items-center px-4 text-center">
        <h2 className="text-[34px] font-bold leading-tight tracking-tight text-white md:text-[44px]">
          Your everyday, in one app.
        </h2>
        <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/90 md:text-[19px]">
          Join thousands of Kenyans who ride, shop, and get things done with
          Cabs&More.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <GooglePlayButton />
          <AppleStoreButton />
        </div>

        <p className="mt-5 text-[13px] font-medium text-white/80">
          Available on iOS and Android
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
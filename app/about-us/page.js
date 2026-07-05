import {
  Car,
  Truck,
  Wrench,
  HeartPulse,
  Sparkles,
  ShieldCheck,
  Users,
  Target,
  Eye,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Transportation",
    description:
      "Ride-hailing, boda boda, airport transfers, corporate transport and more.",
    icon: Car,
  },
  {
    title: "Delivery",
    description:
      "Food, groceries, pharmacy, parcels and document delivery at your convenience.",
    icon: Truck,
  },
  {
    title: "Home Services",
    description:
      "Trusted electricians, plumbers, cleaners, carpenters, painters and technicians.",
    icon: Wrench,
  },
  {
    title: "Healthcare",
    description:
      "Virtual consultations with doctors and professionals from anywhere.",
    icon: HeartPulse,
  },
  {
    title: "Beauty & Wellness",
    description:
      "Barbers, hairdressers, makeup artists, massage therapists and more.",
    icon: Sparkles,
  },
  {
    title: "Verified Professionals",
    description:
      "Every service is designed around trust, quality and convenience.",
    icon: ShieldCheck,
  },
];

const values = [
  "Customer First",
  "Trust & Transparency",
  "Innovation",
  "Quality Service",
  "Community Growth",
  "Secure Payments",
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#26C16540,transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-green-200 backdrop-blur">
              About Cabs&More
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
              One App.
              <br />
              Everyday Services.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
              Cabs&More is building Kenya's next-generation super-app that
              brings transportation, deliveries, home services, healthcare,
              beauty, and professional services together in one trusted
              platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-[#26C165] px-7 py-4 font-semibold text-white transition hover:bg-[#1fa854]">
                Get Started
              </button>

              <button className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-wider text-[#26C165]">
              Why We Exist
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Making everyday life simpler.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Millions of people still rely on phone calls, WhatsApp groups,
              social media, and referrals to find trusted service providers.
              Booking everyday services should be faster, safer, and more
              convenient.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Cabs&More connects customers with verified professionals through
              one seamless platform where they can discover, book, pay and
              manage services with confidence.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-10">
            <div className="space-y-8">
              <div className="flex gap-5">
                <Target className="h-10 w-10 text-[#26C165]" />

                <div>
                  <h3 className="text-xl font-semibold">Mission</h3>

                  <p className="mt-2 text-slate-600">
                    To simplify everyday living by connecting customers with
                    trusted service providers through innovative technology.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Eye className="h-10 w-10 text-[#26C165]" />

                <div>
                  <h3 className="text-xl font-semibold">Vision</h3>

                  <p className="mt-2 text-slate-600">
                    To become Africa's most trusted platform for everyday
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-widest text-[#26C165]">
              Our Ecosystem
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Everything you need,
              <br />
              all in one app.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl hover:border-[#26C165] hover:border-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-[#26C165] group-hover:text-white">
                    <Icon className="h-7 w-7 text-[#26C165] transition group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-[#26C165]">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Built on trust.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Everything we build is focused on creating a reliable ecosystem
              where customers and service providers can interact with
              confidence.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#26C165] hover:shadow-md"
              >
                <CheckCircle2 className="text-[#26C165]" size={24} />

                <span className="font-medium text-slate-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-[#26C165] to-emerald-700 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
          <div className="text-center">
            <h3 className="text-5xl font-bold">10+</h3>
            <p className="mt-3 text-emerald-100">Service Categories</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">1 App</h3>
            <p className="mt-3 text-emerald-100">
              One platform for everyday services
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">∞</h3>
            <p className="mt-3 text-emerald-100">
              Endless possibilities as we continue expanding.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl rounded-[40px] bg-slate-950 px-10 py-20 text-center text-white">
          <Users className="mx-auto h-16 w-16 text-[#26C165]" />

          <h2 className="mt-8 text-5xl font-bold">
            Join the future of everyday services.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300">
            Whether you need transportation, deliveries, home services,
            healthcare, or professional expertise, Cabs&More is building one
            trusted platform to connect you with the services you need every
            day.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#26C165] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#1fa854]">
            Get Started
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}

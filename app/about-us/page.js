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
  Store,
  ShoppingBag,
  Package,
  TrendingUp,
  Building2,
  CreditCard,
  MapPin,
  Clock,
  Star,
  Globe,
  Smartphone,
  Headphones,
} from "lucide-react";
import Link from "next/link";

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
    title: "Online Store",
    description:
      "Create your own online store, sell products, and reach customers across Kenya.",
    icon: Store,
  },
  {
    title: "Verified Professionals",
    description:
      "Every service is designed around trust, quality and convenience.",
    icon: ShieldCheck,
  },
];

const onlineStoreFeatures = [
  {
    title: "Easy Store Setup",
    description:
      "Create your online store in minutes with our simple setup wizard",
    icon: ShoppingBag,
  },
  {
    title: "Product Management",
    description:
      "Upload products, manage inventory, and track sales in real-time",
    icon: Package,
  },
  {
    title: "Secure Payments",
    description: "Accept payments via M-Pesa, bank transfers, and mobile money",
    icon: CreditCard,
  },
  {
    title: "Order Management",
    description:
      "Track orders, manage deliveries, and handle customer requests",
    icon: TrendingUp,
  },
  {
    title: "Store Analytics",
    description: "Get insights into your sales, customers, and business growth",
    icon: Building2,
  },
  {
    title: "Customer Reviews",
    description: "Build trust with customer ratings and reviews",
    icon: Star,
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

const storeStats = [
  { value: "500+", label: "Active Stores" },
  { value: "10K+", label: "Products Listed" },
  { value: "1M+", label: "Orders Processed" },
  { value: "4.8★", label: "Average Rating" },
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
              beauty, online stores, and professional services together in one
              trusted platform.
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
              social media, and referrals to find trusted service providers and
              products. Booking everyday services and shopping should be faster,
              safer, and more convenient.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Cabs&More connects customers with verified professionals and
              businesses through one seamless platform where they can discover,
              book, shop, pay, and manage services with confidence.
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
                    trusted service providers and businesses through innovative
                    technology.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Eye className="h-10 w-10 text-[#26C165]" />

                <div>
                  <h3 className="text-xl font-semibold">Vision</h3>

                  <p className="mt-2 text-slate-600">
                    To become Africa's most trusted platform for everyday
                    services and commerce.
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

                  {service.title === "Online Store" && (
                    <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-[#26C165]">
                      <TrendingUp size={14} />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Online Store Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-[#26C165]">
                <Store className="mr-2 h-4 w-4" />
                Online Store
              </div>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Grow Your Business
                <br />
                <span className="text-[#26C165]">With Online Store</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Whether you're a small business owner, artisan, or entrepreneur,
                Cabs&More gives you the tools to create your own online store
                and reach customers across Kenya.
              </p>

              <div className="mt-8 space-y-4">
                {onlineStoreFeatures.slice(0, 3).map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#26C165] hover:shadow-md"
                    >
                      <div className="flex-shrink-0 rounded-xl bg-green-100 p-3">
                        <Icon className="h-5 w-5 text-[#26C165]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  Why Choose Our Online Store?
                </h3>
                <div className="mt-6 space-y-4">
                  {onlineStoreFeatures.slice(3).map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                      >
                        <Icon className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-900">
                            {feature.title}
                          </p>
                          <p className="text-sm text-slate-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Store Stats */}
              {/* <div className="grid grid-cols-2 gap-4">
                {storeStats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-slate-200 p-5 text-center transition hover:border-[#26C165] hover:shadow-md"
                  >
                    <p className="text-2xl font-bold text-[#26C165]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Online Store */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#26C165] font-semibold uppercase tracking-widest text-sm">
              Get Started
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Launch Your Online Store in{" "}
              <span className="text-[#26C165]">4 Simple Steps</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your business account in minutes",
                icon: Users,
              },
              {
                step: "2",
                title: "Setup Store",
                description: "Add your products and set up your store",
                icon: Store,
              },
              {
                step: "3",
                title: "Start Selling",
                description: "Reach customers across Kenya",
                icon: ShoppingBag,
              },
              {
                step: "4",
                title: "Grow Business",
                description: "Track sales and expand your reach",
                icon: TrendingUp,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative text-center">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-[#26C165]/10 flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-[#26C165]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#26C165] text-white text-sm font-bold flex items-center justify-center">
                        {item.step}
                      </div>
                      {index < 3 && (
                        <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#26C165]/30 -translate-y-1/2" />
                      )}
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
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
              where customers, service providers, and businesses can interact
              with confidence.
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

          {/* <div className="text-center">
            <h3 className="text-5xl font-bold">500+</h3>
            <p className="mt-3 text-emerald-100">Active Online Stores</p>
          </div> */}
          {/* <div className="text-center">
            <h3 className="text-5xl font-bold">1 App</h3>
            <p className="mt-3 text-emerald-100">
              One platform for everyday services
            </p>
          </div> */}
          <div className="text-center">
            <h3 className="text-5xl font-bold">1 App</h3>
            <p className="mt-3 text-emerald-100">One platform for everything</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">∞</h3>
            <p className="mt-3 text-emerald-100">Endless possibilities</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#26C165] font-semibold uppercase tracking-widest text-sm">
              Benefits
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Why Choose <span className="text-[#26C165]">Cabs&More</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Nationwide Reach",
                description:
                  "Connect with customers and service providers across all counties in Kenya.",
              },
              {
                icon: Smartphone,
                title: "Mobile First",
                description:
                  "Access all services from your phone. No website needed to get started.",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description:
                  "Get help anytime with our dedicated support team always available.",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white p-8 text-center border border-slate-200 transition hover:border-[#26C165] hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 mx-auto">
                    <Icon className="h-8 w-8 text-[#26C165]" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-slate-600">{benefit.description}</p>
                </div>
              );
            })}
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
            healthcare, want to shop online, or start your own store, Cabs&More
            is building one trusted platform to connect you with the services
            you need every day.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-3 rounded-xl bg-[#26C165] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#1fa854]">
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/10">
              <Store size={20} />
              Open a Store
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

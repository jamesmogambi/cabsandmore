// app/terms/page.jsx
import {
  FileText,
  Shield,
  CheckCircle2,
  AlertCircle,
  Users,
  Mail,
  Phone,
  MapPin,
  Globe,
  Scale,
  Gavel,
  Handshake,
  UserCheck,
  Lock,
  CreditCard,
  Truck,
  Store,
  HeartPulse,
  ArrowRight,
  ExternalLink,
  Clock,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#26C16540,transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-green-200 backdrop-blur">
              <Scale className="mr-2 h-4 w-4" />
              Terms of Service
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
              Our Terms of
              <br />
              <span className="text-[#26C165]">Service</span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
              By using Cabs&More, you agree to these terms. Please read them
              carefully before using our services.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm text-white backdrop-blur">
                <Clock className="h-4 w-4" />
                Effective: December 2024
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm text-white backdrop-blur">
                <Award className="h-4 w-4" />
                Version 3.0
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-200 py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Acceptance", id: "acceptance" },
              { label: "Our Services", id: "services" },
              { label: "User Accounts", id: "accounts" },
              { label: "Payments", id: "payments" },
              { label: "User Responsibilities", id: "responsibilities" },
              { label: "Termination", id: "termination" },
              { label: "Limitations", id: "limitations" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-600 transition hover:text-[#26C165] px-3 py-2 rounded-lg hover:bg-green-50 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-16">
            {/* Acceptance of Terms */}
            <div id="acceptance">
              <div className="flex items-center gap-3 mb-6">
                <Handshake className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Acceptance of Terms
                </h2>
              </div>

              <div className="rounded-3xl bg-slate-50 p-8 lg:p-12">
                <p className="text-lg leading-8 text-slate-600">
                  By accessing or using Cabs&More's mobile application, website,
                  and services (collectively, the "Services"), you agree to be
                  bound by these Terms of Service. If you do not agree to these
                  terms, please do not use our Services.
                </p>

                <div className="mt-6 rounded-xl bg-white p-4 shadow-sm border border-slate-200">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">📌 Important:</span> These
                    terms constitute a legally binding agreement between you and
                    Cabs&More.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div id="services">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Our Services
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    icon: Truck,
                    title: "Transportation",
                    description:
                      "Ride-hailing, airport transfers, corporate transport",
                  },
                  {
                    icon: Store,
                    title: "Delivery & Stores",
                    description: "Food, parcels, and online shopping services",
                  },
                  {
                    icon: HeartPulse,
                    title: "Home & Healthcare",
                    description:
                      "Home services, beauty, and virtual consultations",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 p-6 text-center hover:border-[#26C165] transition"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 mx-auto">
                      <service.icon className="h-7 w-7 text-[#26C165]" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* User Accounts */}
            <div id="accounts">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  User Accounts
                </h2>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Account Creation",
                      items: [
                        "Must be 18 years or older",
                        "Provide accurate information",
                        "Maintain account security",
                        "One account per user",
                      ],
                    },
                    {
                      title: "Account Responsibilities",
                      items: [
                        "Keep login credentials secure",
                        "Notify us of unauthorized use",
                        "Update account information",
                        "Accept responsibility for account activity",
                      ],
                    },
                  ].map((section, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-slate-600"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#26C165] flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payments */}
            <div id="payments">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Payments & Billing
                </h2>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-white border border-slate-200 p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      {
                        title: "Payment Methods",
                        items: [
                          "M-Pesa mobile money",
                          "Bank transfers",
                          "Credit/Debit cards",
                          "Mobile wallets",
                        ],
                      },
                      {
                        title: "Billing Terms",
                        items: [
                          "Prices displayed in KES",
                          "Taxes included where applicable",
                          "Payment due at time of service",
                          "Receipts provided for all transactions",
                        ],
                      },
                    ].map((section, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-slate-600"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[#26C165] flex-shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">💳 Secure Payments:</span>{" "}
                    All transactions are encrypted and secure. We do not store
                    your payment information on our servers.
                  </p>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div id="responsibilities">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  User Responsibilities
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Do's ✓",
                    icon: CheckCircle2,
                    items: [
                      "Provide accurate information",
                      "Respect service providers",
                      "Use services lawfully",
                      "Report issues promptly",
                      "Keep account information current",
                    ],
                    color: "text-green-600",
                    bg: "bg-green-50",
                  },
                  {
                    title: "Don'ts ✗",
                    icon: AlertCircle,
                    items: [
                      "Share account credentials",
                      "Harass service providers",
                      "Use services illegally",
                      "Provide false information",
                      "Interfere with other users",
                    ],
                    color: "text-red-600",
                    bg: "bg-red-50",
                  },
                ].map((section, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl ${section.bg} p-8 border border-slate-200`}
                  >
                    <h3
                      className={`text-xl font-semibold ${section.color} mb-4`}
                    >
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-slate-700"
                        >
                          <section.icon
                            className={`h-4 w-4 ${section.color} flex-shrink-0 mt-1`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Termination */}
            <div id="termination">
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Termination & Suspension
                </h2>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      Termination by User
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "You may delete your account at any time",
                        "Data retained for 30 days after deletion",
                        "Pending transactions will be completed",
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-slate-600"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#26C165] flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      Termination by Cabs&More
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Violation of terms",
                        "Fraudulent activity",
                        "Extended account inactivity",
                        "Legal compliance requirements",
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-slate-600"
                        >
                          <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitations of Liability */}
            <div id="limitations">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Limitations of Liability
                </h2>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-slate-50 p-8 border border-slate-200">
                  <p className="text-lg leading-8 text-slate-600">
                    To the maximum extent permitted by law, Cabs&More shall not
                    be liable for any indirect, incidental, special,
                    consequential, or punitive damages resulting from your use
                    of our services.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      title: "Service Interruptions",
                      description:
                        "We strive for 99.9% uptime but cannot guarantee uninterrupted service",
                      icon: AlertCircle,
                    },
                    {
                      title: "Third-Party Services",
                      description:
                        "We are not responsible for third-party services linked through our app",
                      icon: ExternalLink,
                    },
                    {
                      title: "Maximum Liability",
                      description:
                        "Our total liability is limited to the amount paid for services",
                      icon: Scale,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-white border border-slate-200 p-6"
                    >
                      <item.icon className="h-6 w-6 text-[#26C165] mb-3" />
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div id="law">
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Governing Law
                </h2>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <p className="text-lg leading-8 text-slate-600">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the Republic of Kenya. Any disputes arising
                  from these terms shall be subject to the exclusive
                  jurisdiction of the courts of Kenya.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <h4 className="font-semibold text-slate-900">
                      🏛️ Jurisdiction
                    </h4>
                    <p className="text-sm text-slate-600">
                      Courts of Kenya have exclusive jurisdiction
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <h4 className="font-semibold text-slate-900">
                      📝 Dispute Resolution
                    </h4>
                    <p className="text-sm text-slate-600">
                      Mediation and arbitration encouraged before litigation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div id="changes">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Changes to Terms
                </h2>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-8">
                <p className="text-lg leading-8 text-slate-600">
                  We reserve the right to modify these terms at any time. We
                  will notify users of significant changes through:
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      method: "Email Notification",
                      description: "Direct email to registered users",
                      icon: Mail,
                    },
                    {
                      method: "App Notification",
                      description: "In-app alerts and messages",
                      icon: Globe,
                    },
                    {
                      method: "Website Update",
                      description: "Updated terms posted on our website",
                      icon: FileText,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200 p-4 text-center"
                    >
                      <item.icon className="h-6 w-6 text-[#26C165] mx-auto mb-2" />
                      <h4 className="font-semibold text-slate-900 text-sm">
                        {item.method}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-green-50 p-4 border border-green-200">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">📌 Note:</span> Continued
                    use of our services constitutes acceptance of updated terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact">
              <div className="flex items-center gap-3 mb-6">
                <Handshake className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Contact Us
                </h2>
              </div>

              <div className="rounded-3xl bg-gradient-to-r from-green-50 to-emerald-50 p-8 lg:p-12 border border-green-200">
                <p className="text-lg leading-8 text-slate-600">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a
                        href="mailto:legal@cabsandmore.com"
                        className="text-[#26C165] hover:underline"
                      >
                        support@cabsandmore.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <a
                        href="tel:+254712345678"
                        className="text-[#26C165] hover:underline"
                      >
                        +254 743 129 621
                      </a>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Address</p>
                      <p className="text-slate-600">
                        123 Business Park, Westlands
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div> */}
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Website</p>
                      <a
                        href="https://cabsandmore.com"
                        className="text-[#26C165] hover:underline"
                      >
                        cabsandmore.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Response Time:</span> We aim
                    to respond to all legal inquiries within 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Scale className="mx-auto h-16 w-16 text-[#26C165]" />
          <h2 className="mt-6 text-3xl font-bold text-white lg:text-4xl">
            Clear Terms, Fair Service
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            We believe in transparency and fairness. Our terms are designed to
            protect both our users and our platform.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#26C165] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#1fa854]"
            >
              <Mail size={20} />
              Contact Legal Team
            </Link>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Shield size={20} />
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

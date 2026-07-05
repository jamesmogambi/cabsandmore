// app/privacy-policy/page.jsx
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle2,
  ArrowRight,
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  Smartphone,
  Database,
  Cookie,
  Share2,
  AlertCircle,
  UserCheck,
  ShieldCheck,
  HeartPulse,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#26C16540,transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-green-200 backdrop-blur">
              <Shield className="mr-2 h-4 w-4" />
              Privacy Policy
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
              Your Privacy
              <br />
              <span className="text-[#26C165]">Matters to Us</span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
              At Cabs&More, we are committed to protecting your privacy and
              ensuring the security of your personal information.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm text-white backdrop-blur">
                <Clock className="h-4 w-4" />
                Last Updated: December 2025
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm text-white backdrop-blur">
                <FileText className="h-4 w-4" />
                Version 2.0
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-200 py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: "Information We Collect", id: "information" },
              { label: "How We Use Data", id: "usage" },
              { label: "Data Security", id: "security" },
              { label: "Your Rights", id: "rights" },
              { label: "Cookies", id: "cookies" },
              { label: "Contact Us", id: "contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-600 transition hover:text-[#26C165] px-3 py-2 rounded-lg hover:bg-green-50"
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
            {/* Introduction */}
            <div id="intro" className="rounded-3xl bg-slate-50 p-8 lg:p-12">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#26C165]/10 p-3 flex-shrink-0">
                  <Shield className="h-6 w-6 text-[#26C165]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Introduction
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Cabs&More ("we," "our," or "us") is committed to protecting
                    your privacy. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you use
                    our mobile application and services.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    By using Cabs&More, you agree to the collection and use of
                    information in accordance with this policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div id="information">
              <div className="flex items-center gap-3 mb-6">
                <Database className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Information We Collect
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: UserCheck,
                    title: "Personal Information",
                    items: [
                      "Full name",
                      "Email address",
                      "Phone number",
                      "Physical address",
                      "Date of birth",
                      "Government ID (for verification)",
                    ],
                  },
                  {
                    icon: Smartphone,
                    title: "Usage Information",
                    items: [
                      "Device information",
                      "IP address",
                      "Location data",
                      "App usage patterns",
                      "Transaction history",
                      "Service preferences",
                    ],
                  },
                  {
                    icon: CreditCard,
                    title: "Payment Information",
                    items: [
                      "Payment method details",
                      "M-Pesa transactions",
                      "Bank account details",
                      "Billing address",
                      "Payment history",
                    ],
                  },
                  {
                    icon: Cookie,
                    title: "Cookies & Tracking",
                    items: [
                      "Session cookies",
                      "Preference cookies",
                      "Analytics cookies",
                      "Third-party tracking",
                      "Device fingerprints",
                    ],
                  },
                ].map((section, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 p-6 hover:border-[#26C165] transition"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <section.icon className="h-5 w-5 text-[#26C165]" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        {section.title}
                      </h3>
                    </div>
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

            {/* How We Use Your Information */}
            <div id="usage">
              <div className="flex items-center gap-3 mb-6">
                <Share2 className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  How We Use Your Information
                </h2>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Service Delivery",
                      description:
                        "To provide, maintain, and improve our services",
                      icon: CheckCircle2,
                    },
                    {
                      title: "Communication",
                      description:
                        "To send updates, notifications, and important information",
                      icon: Mail,
                    },
                    {
                      title: "Personalization",
                      description:
                        "To customize your experience and preferences",
                      icon: UserCheck,
                    },
                    {
                      title: "Security",
                      description:
                        "To detect, prevent, and address technical issues",
                      icon: Lock,
                    },
                    {
                      title: "Analytics",
                      description:
                        "To understand how users interact with our app",
                      icon: Eye,
                    },
                    {
                      title: "Legal Compliance",
                      description:
                        "To comply with legal obligations and regulations",
                      icon: FileText,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div id="security">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Data Security
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Encryption",
                    description:
                      "All data is encrypted in transit and at rest using industry-standard protocols",
                    icon: Lock,
                  },
                  {
                    title: "Secure Servers",
                    description:
                      "We use secure servers with advanced firewalls and intrusion detection",
                    icon: Shield,
                  },
                  {
                    title: "Access Control",
                    description:
                      "Strict access controls and authentication measures for data protection",
                    icon: UserCheck,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 p-6 text-center hover:border-[#26C165] transition"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 mx-auto">
                      <item.icon className="h-7 w-7 text-[#26C165]" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Rights */}
            <div id="rights">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Your Rights
                </h2>
              </div>

              <div className="rounded-2xl bg-slate-50 p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Access Your Data",
                      description:
                        "Request a copy of the personal data we hold about you",
                    },
                    {
                      title: "Correct Data",
                      description:
                        "Request corrections to inaccurate or incomplete data",
                    },
                    {
                      title: "Delete Data",
                      description:
                        "Request deletion of your personal data (subject to legal requirements)",
                    },
                    {
                      title: "Withdraw Consent",
                      description:
                        "Withdraw your consent for data processing at any time",
                    },
                    {
                      title: "Data Portability",
                      description:
                        "Receive your data in a structured, machine-readable format",
                    },
                    {
                      title: "Lodge Complaint",
                      description:
                        "Complain to regulatory authorities about our data practices",
                    },
                  ].map((right, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="h-5 w-5 rounded-full bg-[#26C165]/10 flex items-center justify-center">
                          <CheckCircle2 className="h-3 w-3 text-[#26C165]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {right.title}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {right.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div id="cookies">
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Cookie Policy
                </h2>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <p className="text-lg leading-8 text-slate-600">
                  We use cookies and similar tracking technologies to enhance
                  your experience, analyze usage, and improve our services. You
                  can control cookie preferences through your browser settings.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      type: "Essential",
                      description:
                        "Required for basic functionality and security",
                    },
                    {
                      type: "Performance",
                      description: "Help us understand how you use our app",
                    },
                    {
                      type: "Marketing",
                      description: "Used to deliver relevant advertisements",
                    },
                  ].map((cookie, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200 p-4 text-center"
                    >
                      <h4 className="font-semibold text-slate-900">
                        {cookie.type}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600">
                        {cookie.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div id="retention">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Data Retention
                </h2>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-8">
                <p className="text-lg leading-8 text-slate-600">
                  We retain your personal data only for as long as necessary to
                  fulfill the purposes outlined in this policy, unless a longer
                  retention period is required or permitted by law.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <h4 className="font-semibold text-slate-900">
                      Active Accounts
                    </h4>
                    <p className="text-sm text-slate-600">
                      Data retained while your account is active
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <h4 className="font-semibold text-slate-900">
                      Inactive Accounts
                    </h4>
                    <p className="text-sm text-slate-600">
                      Data retained for 12 months after account closure
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <h4 className="font-semibold text-slate-900">
                      Legal Requirements
                    </h4>
                    <p className="text-sm text-slate-600">
                      May be retained longer if required by law
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <h4 className="font-semibold text-slate-900">
                      Anonymized Data
                    </h4>
                    <p className="text-sm text-slate-600">
                      May be retained for analytics purposes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div id="children">
              <div className="flex items-center gap-3 mb-6">
                <HeartPulse className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Children's Privacy
                </h2>
              </div>

              <div className="rounded-2xl bg-slate-50 p-8">
                <p className="text-lg leading-8 text-slate-600">
                  Our services are not directed to individuals under the age of
                  18. We do not knowingly collect personal information from
                  minors. If we become aware that a minor has provided us with
                  personal data, we will take steps to delete such information.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div id="changes">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Changes to This Policy
                </h2>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <p className="text-lg leading-8 text-slate-600">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the "Last Updated" date.
                </p>

                <div className="mt-4 rounded-xl bg-green-50 p-4 border border-green-200">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">📌 Note:</span> We encourage
                    you to review this policy periodically for any changes.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div id="contact">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="h-8 w-8 text-[#26C165]" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Contact Us
                </h2>
              </div>

              <div className="rounded-3xl bg-gradient-to-r from-green-50 to-emerald-50 p-8 lg:p-12 border border-green-200">
                <p className="text-lg leading-8 text-slate-600">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy, please contact our Data Protection
                  Officer:
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a
                        href="mailto:privacy@cabsandmore.com"
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
                        +254 743129621
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
                    to respond to all privacy-related inquiries within 48 hours.
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
          <Shield className="mx-auto h-16 w-16 text-[#26C165]" />
          <h2 className="mt-6 text-3xl font-bold text-white lg:text-4xl">
            Your Privacy is Our Priority
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            We are committed to protecting your personal information and
            ensuring transparency in our data practices.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#26C165] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#1fa854]"
            >
              <Mail size={20} />
              Contact Privacy Team
            </Link>
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <FileText size={20} />
              View Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

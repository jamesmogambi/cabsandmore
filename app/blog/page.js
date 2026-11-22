import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Clock } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { blogSchema, breadcrumbSchema } from "@/lib/seo";
import { blogPosts, featuredPost } from "@/data/blogPosts";
import PostCard from "@/components/blog/PostCard";

export const metadata = {
  title: "Blog – Guides, Tips & Updates",
  description:
    "Practical guides and updates from Cabs&More: booking rides in Nairobi, food and grocery delivery, home services, boda boda safety, and parcel delivery.",
  keywords: [
    "Cabs&More blog",
    "Nairobi ride guide",
    "food delivery Nairobi",
    "grocery delivery Kenya",
    "home services Kenya",
    "boda boda safety",
    "parcel delivery Kenya",
  ],
  openGraph: {
    title: "Cabs&More Blog – Guides, Tips & Updates",
    description:
      "Practical guides and updates from Cabs&More: booking rides in Nairobi, food and grocery delivery, home services, boda boda safety, and parcel delivery.",
    url: "https://cabsandmore.online/blog",
    siteName: "Cabs&More",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cabs&More Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabs&More Blog – Guides, Tips & Updates",
    description:
      "Practical guides and updates from Cabs&More: booking rides in Nairobi, food and grocery delivery, home services, boda boda safety, and parcel delivery.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cabsandmore.online/blog",
  },
};

const BlogPage = () => {
  const latestPosts = blogPosts.filter(
    (post) => post.slug !== featuredPost.slug,
  );

  const structuredData = [
    breadcrumbSchema([
      { name: "Home", url: "https://cabsandmore.online" },
      { name: "Blog", url: "https://cabsandmore.online/blog" },
    ]),
    blogSchema(blogPosts),
  ];

  return (
    <>
      <JsonLd schema={structuredData} id="blog-schema" />

      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF9F0] via-[#F7FDF9] to-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#26C165]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#FFB81C]/10 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1140px] px-4 pb-20 pt-14 md:pb-28 md:pt-20">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#26C165]/10 text-[#1b7f45]">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#1b7f45]">
                The Cabs&More journal
              </p>
            </div>

            <h1 className="mt-5 max-w-3xl text-[40px] font-bold leading-[1.08] tracking-tight text-titledark sm:text-[52px] lg:text-[62px]">
              Stories, guides, and updates from Cabs&More
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#4b5563] md:text-[18px]">
              Practical tips for getting around Nairobi, ordering food, finding
              trusted help, and making the most of the Cabs&More app.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-[#4b5563]">
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-[#1b7f45]" aria-hidden="true" />
                {blogPosts.length} stories
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays
                  className="h-4 w-4 text-[#1b7f45]"
                  aria-hidden="true"
                />
                Updated weekly
              </span>
            </div>
          </div>
        </section>

        {/* Featured post */}
        <section className="relative mx-auto -mt-10 w-full max-w-[1140px] px-4 md:-mt-16">
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group relative block aspect-[16/10] overflow-hidden bg-[#F5F5F5] lg:aspect-auto lg:min-h-[420px]"
                aria-label={`Read ${featuredPost.title}`}
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1b7f45] shadow-sm">
                  {featuredPost.category}
                </span>
              </Link>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[#6b7280]">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {featuredPost.displayDate}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-neutral-300" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="mt-4 text-[28px] font-bold leading-tight text-[#111827] md:text-[34px]">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="transition-colors hover:text-[#1b7f45]"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="mt-4 text-[16px] leading-relaxed text-[#4b5563] md:text-[17px]">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#26C165]/10 text-[13px] font-bold text-[#1b7f45]">
                    CM
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#111827]">
                      {featuredPost.author}
                    </p>
                    <p className="text-[13px] text-[#6b7280]">
                      {featuredPost.displayDate} · {featuredPost.readTime}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-[15px] font-bold text-[#1b7f45] transition-colors hover:text-[#14663a]"
                >
                  Read the story
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest posts */}
        <section className="mx-auto w-full max-w-[1140px] px-4 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#1b7f45]">
                Latest stories
              </p>
              <h2 className="mt-3 text-[32px] font-bold leading-tight text-[#111827] md:text-[40px]">
                More from the journal
              </h2>
            </div>
            <p className="text-[14px] text-[#6b7280]">
              {latestPosts.length} stories
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto w-full max-w-[1140px] px-4 pb-16 md:pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-[#0B1F14] px-7 py-12 text-white md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#26C165]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#FFB81C]/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-[30px] font-bold leading-tight md:text-[36px]">
                  Ready to try Cabs&More?
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-white/70">
                  Book a ride, order food, or find a trusted professional — all
                  from one app.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#26C165] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1fa855]"
                >
                  Explore services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock,
  Share2,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  getAllBlogSlugs,
} from "@/lib/sanity";
import PostCard from "@/components/blog/PostCard";
import PortableText from "@/components/blog/PortableText";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Story not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "Cabs&More", "Kenya"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://cabsandmore.online/blog/${post.slug}`,
      siteName: "Cabs&More",
      type: "article",
      locale: "en_KE",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: post.image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || "/og-image.jpg"],
    },
    alternates: {
      canonical: `https://cabsandmore.online/blog/${post.slug}`,
    },
  };
}

const BlogPostPage = async ({ params }) => {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
    return null;
  }

  const relatedPosts = await getRelatedPosts(slug);
  const shareUrl = `https://cabsandmore.online/blog/${post.slug}`;
  const shareText = post.title;

  const structuredData = [
    articleSchema(post),
    breadcrumbSchema([
      { name: "Home", url: "https://cabsandmore.online" },
      { name: "Blog", url: "https://cabsandmore.online/blog" },
      {
        name: post.title,
        url: `https://cabsandmore.online/blog/${post.slug}`,
      },
    ]),
  ];

  return (
    <>
      <JsonLd schema={structuredData} id="blog-post-schema" />

      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF9F0] via-[#F7FDF9] to-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#26C165]/10 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1140px] px-4 py-12 md:py-16">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[13px] text-[#6b7280]"
            >
              <Link
                href="/"
                className="transition-colors hover:text-[#1b7f45]"
              >
                Home
              </Link>
              <ChevronRight
                className="h-3.5 w-3.5 text-neutral-400"
                aria-hidden="true"
              />
              <Link
                href="/blog"
                className="transition-colors hover:text-[#1b7f45]"
              >
                Blog
              </Link>
              <ChevronRight
                className="h-3.5 w-3.5 text-neutral-400"
                aria-hidden="true"
              />
              <span className="truncate text-[#111827]">{post.category}</span>
            </nav>

            <div className="mt-8 max-w-3xl">
              <span className="inline-flex rounded-full bg-[#26C165]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1b7f45]">
                {post.category}
              </span>

              <h1 className="mt-4 text-[34px] font-bold leading-[1.12] tracking-tight text-titledark md:text-[48px]">
                {post.title}
              </h1>

              <p className="mt-5 text-[17px] leading-relaxed text-[#4b5563] md:text-[19px]">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-[#6b7280]">
                <span className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#26C165]/10 text-[12px] font-bold text-[#1b7f45]">
                    CM
                  </span>
                  <span className="font-semibold text-[#111827]">
                    {post.author}
                  </span>
                </span>
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {post.displayDate}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Cover image */}
        <div className="mx-auto -mt-2 w-full max-w-[1140px] px-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-neutral-200 bg-[#F5F5F5] shadow-sm md:aspect-[21/9]">
            <Image
              src={post.image || "/og-image.jpg"}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 1140px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Article body */}
        <article className="mx-auto w-full max-w-[760px] px-4 py-12 md:py-16">
          <PortableText blocks={post.body} />

          {/* Author */}
          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#26C165]/10 text-[15px] font-bold text-[#1b7f45]">
              CM
            </span>
            <div>
              <p className="text-[15px] font-bold text-[#111827]">
                {post.author}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-[#6b7280]">
                The Cabs&More team shares practical guides and updates to help
                you get more from the app.
              </p>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-neutral-100 pt-8">
            <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#111827]">
              <Share2 className="h-4 w-4" aria-hidden="true" />
              Share this story
            </span>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-3.5 py-1.5 text-[13px] font-semibold text-[#374151] transition-colors hover:border-[#26C165] hover:text-[#1b7f45]"
            >
              X
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-3.5 py-1.5 text-[13px] font-semibold text-[#374151] transition-colors hover:border-[#26C165] hover:text-[#1b7f45]"
            >
              Facebook
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-3.5 py-1.5 text-[13px] font-semibold text-[#374151] transition-colors hover:border-[#26C165] hover:text-[#1b7f45]"
            >
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </article>

        {/* Related posts */}
        <section className="mx-auto w-full max-w-[1140px] px-4 pb-16 md:pb-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[28px] font-bold leading-tight text-[#111827] md:text-[34px]">
              More stories
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#1b7f45] transition-colors hover:text-[#14663a]"
            >
              View all
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <PostCard key={related.slug} post={related} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto w-full max-w-[1140px] px-4 pb-16 md:pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-[#0B1F14] px-7 py-12 text-center text-white md:px-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#26C165]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#FFB81C]/10 blur-3xl" />

            <h2 className="relative text-[28px] font-bold leading-tight md:text-[34px]">
              Ready to book with Cabs&More?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
              Rides, food, groceries, home services and more — all from one
              app.
            </p>

            <div className="relative mt-7 flex flex-col justify-center gap-3 sm:flex-row">
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
        </section>
      </main>
    </>
  );
};

export default BlogPostPage;

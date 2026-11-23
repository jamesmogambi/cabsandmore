import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";

const PostCard = ({ post }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#26C165]/40 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1b7f45] shadow-sm">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-medium text-[#6b7280]">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {post.displayDate}
          </span>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>

        <h3 className="mt-3 text-[20px] font-bold leading-snug text-[#111827] transition-colors group-hover:text-[#1b7f45]">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-[#6b7280]">
          {post.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#1b7f45]">
          Read story
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
};

export default PostCard;
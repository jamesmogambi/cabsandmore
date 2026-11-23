import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

import {
  blogPosts,
  featuredPost,
  getPostBySlug,
  getRelatedPosts as getStaticRelatedPosts,
} from "@/data/blogPosts";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2024-01-01",
  useCdn: true,
};

const isConfigured =
  !!config.projectId &&
  config.projectId !== "your-project-id" &&
  !!config.dataset;

export const sanityClient = isConfigured
  ? createClient(config)
  : null;

const imageBuilder = isConfigured ? createImageUrlBuilder(config) : null;

export const urlForImage = (source) => {
  if (!imageBuilder || !source) return null;
  return imageBuilder.image(source).url();
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export async function getBlogPosts() {
  if (!sanityClient) return blogPosts;

  try {
    const posts = await sanityClient.fetch(
      `*[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        "category": category->title,
        "author": author->name,
        mainImage,
        publishedAt,
        readTime,
        featured,
      }`
    );

    if (!posts || posts.length === 0) return blogPosts;

    return posts.map((post) => ({
      ...post,
      image: post.mainImage ? urlForImage(post.mainImage) : null,
      displayDate: formatDate(post.publishedAt),
    }));
  } catch (err) {
    console.error("Sanity fetch failed, falling back to static data", err);
    return blogPosts;
  }
}

export async function getBlogPostBySlug(slug) {
  if (!sanityClient) return getPostBySlug(slug);

  try {
    const post = await sanityClient.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        "category": category->title,
        "author": author->name,
        "authorImage": author->image,
        mainImage,
        body,
        publishedAt,
        readTime,
      }`,
      { slug }
    );

    if (!post) return getPostBySlug(slug);

    return {
      ...post,
      image: post.mainImage ? urlForImage(post.mainImage) : null,
      authorImage: post.authorImage ? urlForImage(post.authorImage) : null,
      displayDate: formatDate(post.publishedAt),
    };
  } catch (err) {
    console.error("Sanity fetch failed, falling back to static data", err);
    return getPostBySlug(slug);
  }
}

export async function getRelatedPosts(slug, limit = 3) {
  if (!sanityClient) return getStaticRelatedPosts(slug, limit);

  try {
    const post = await getBlogPostBySlug(slug);
    if (!post) return [];

    const projection = `{
        _id,
        title,
        "slug": slug.current,
        excerpt,
        "category": category->title,
        "author": author->name,
        mainImage,
        publishedAt,
        readTime,
      }`;

    const sameCategory = await sanityClient.fetch(
      `*[_type == "blogPost" && slug.current != $slug && category->title == $category] | order(publishedAt desc)[0...$limit] ${projection}`,
      { slug, category: post.category, limit }
    );

    let related = sameCategory;

    if (related.length < limit) {
      const seen = new Set([slug, ...related.map((p) => p.slug)]);
      const others = await sanityClient.fetch(
        `*[_type == "blogPost" && slug.current != $slug] | order(publishedAt desc)[0...$limit] ${projection}`,
        { slug, limit }
      );
      related = [
        ...related,
        ...others.filter((p) => !seen.has(p.slug)),
      ].slice(0, limit);
    }

    return related.map((p) => ({
      ...p,
      image: p.mainImage ? urlForImage(p.mainImage) : null,
      displayDate: formatDate(p.publishedAt),
    }));
  } catch (err) {
    console.error("Sanity fetch failed, falling back to static data", err);
    return getStaticRelatedPosts(slug, limit);
  }
}

export async function getAllBlogSlugs() {
  if (!sanityClient) return blogPosts.map((p) => p.slug);

  try {
    const slugs = await sanityClient.fetch(
      `*[_type == "blogPost"]["slug"].current`
    );
    if (!slugs || slugs.length === 0) return blogPosts.map((p) => p.slug);
    return slugs;
  } catch (err) {
    console.error("Sanity fetch failed, falling back to static data", err);
    return blogPosts.map((p) => p.slug);
  }
}

export { featuredPost };

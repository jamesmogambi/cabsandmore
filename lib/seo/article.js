/**
 * Article and Blog schema builders for AEO/GEO optimization.
 */

export function articleSchema(post) {
  const url = `https://cabsandmore.online/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`https://cabsandmore.online${post.image}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Cabs&More",
      logo: {
        "@type": "ImageObject",
        url: "https://cabsandmore.online/images/logo-mark.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function blogSchema(posts) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Cabs&More Journal",
    description: "Guides, tips, and updates from Cabs&More.",
    url: "https://cabsandmore.online/blog",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: `https://cabsandmore.online${post.image}`,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
      },
      url: `https://cabsandmore.online/blog/${post.slug}`,
    })),
  };
}
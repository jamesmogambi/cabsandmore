/**
 * Organization schema for Cabs&More.
 * Used on the root layout to help search engines understand the brand.
 *
 * @param {object} [overrides] - Optional field overrides
 * @returns {object} schema.org Organization object
 */
export function organizationSchema(overrides = {}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cabs&More",
    url: "https://cabsandmore.online",
    logo: "https://cabsandmore.online/logo.png",
    description:
      "Cabs&More is Kenya's all-in-one super app for rides, food delivery, groceries, parcel delivery, pharmacy, and professional services.",
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "Nairobi, Kenya",
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+254743129621",
        contactType: "customer service",
        email: "support@cabsandmore.com",
        areaServed: "KE",
        availableLanguage: ["English", "Swahili"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/cabsandmore",
      "https://www.instagram.com/cabsandmore",
      "https://www.linkedin.com/company/cabsandmore",
    ],
    ...overrides,
  };
  return base;
}

/**
 * WebSite schema with searchAction for sitelinks search box.
 *
 * @param {object} [overrides] - Optional field overrides
 * @returns {object} schema.org WebSite object
 */
export function websiteSchema(overrides = {}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cabs&More",
    url: "https://cabsandmore.online",
    description:
      "Cabs&More is Kenya's all-in-one super app for rides, food delivery, groceries, parcel delivery, pharmacy, and professional services.",
    inLanguage: "en-KE",
    publisher: {
      "@type": "Organization",
      name: "Cabs&More",
      logo: {
        "@type": "ImageObject",
        url: "https://cabsandmore.online/logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://cabsandmore.online/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    ...overrides,
  };
  return base;
}
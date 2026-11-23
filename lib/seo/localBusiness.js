/**
 * LocalBusiness schema for Cabs&More.
 * Used on contact page and store pages to help with local SEO.
 *
 * @param {object} [overrides] - Optional field overrides
 * @returns {object} schema.org LocalBusiness object
 */
export function localBusinessSchema(overrides = {}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cabs&More",
    image: "https://cabsandmore.online/logo.png",
    url: "https://cabsandmore.online",
    telephone: "+254743129621",
    email: "info@cabsandmore.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Park, Westlands",
      addressLocality: "Nairobi",
      addressCountry: "KE",
      postalCode: "00100",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.2644,
      longitude: 36.7936,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    description:
      "Cabs&More is Kenya's all-in-one super app for rides, food delivery, groceries, parcel delivery, pharmacy, and professional services.",
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    ...overrides,
  };
  return base;
}
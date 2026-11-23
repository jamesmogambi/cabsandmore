/**
 * Service schema.
 * Used to describe service offerings for better AEO/GEO visibility.
 *
 * @param {object} data - Service data
 * @param {object} [overrides] - Optional field overrides
 * @returns {object} schema.org Service object
 */
export function serviceSchema(data, overrides = {}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: data.provider || {
      "@type": "Organization",
      name: "Cabs&More",
    },
    areaServed: data.areaServed || {
      "@type": "Country",
      name: "Kenya",
    },
    serviceType: data.serviceType || data.name,
    ...(data.url && { url: data.url }),
    ...(data.image && { image: data.image }),
    ...(data.price && {
      offers: {
        "@type": "Offer",
        price: data.price,
        priceCurrency: "KES",
      },
    }),
    ...(data.category && {
      category: data.category,
    }),
    ...overrides,
  };
  return base;
}
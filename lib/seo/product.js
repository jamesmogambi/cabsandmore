/**
 * Product schema.
 * Used to describe products for better AEO/GEO visibility.
 *
 * @param {object} data - Product data
 * @param {object} [overrides] - Optional field overrides
 * @returns {object} schema.org Product object
 */
export function productSchema(data, overrides = {}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    image: data.image,
    description: data.description,
    ...(data.sku && { sku: data.sku }),
    ...(data.brand && {
      brand: {
        "@type": "Brand",
        name: data.brand,
      },
    }),
    ...(data.price && {
      offers: {
        "@type": "Offer",
        url: data.url,
        price: data.price,
        priceCurrency: "KES",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Cabs&More",
        },
      },
    }),
    ...(data.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: data.rating,
        reviewCount: data.reviewCount || 0,
        bestRating: "5",
        worstRating: "1",
      },
    }),
    ...overrides,
  };
  return base;
}
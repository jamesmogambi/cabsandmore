/**
 * FAQPage schema.
 * Used to add FAQ rich snippets to pages for better AEO/GEO visibility.
 *
 * @param {Array<{question: string, answer: string}>} faqs - List of FAQ items
 * @param {object} [overrides] - Optional field overrides
 * @returns {object} schema.org FAQPage object
 */
export function faqPageSchema(faqs, overrides = {}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    ...overrides,
  };
  return base;
}
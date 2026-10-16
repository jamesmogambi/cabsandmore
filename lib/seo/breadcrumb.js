/**
 * BreadcrumbList schema.
 * Used to add breadcrumb rich snippets for better navigation visibility in search.
 *
 * @param {Array<{name: string, url: string}>} crumbs - List of breadcrumb items
 * @param {object} [overrides] - Optional field overrides
 * @returns {object} schema.org BreadcrumbList object
 */
export function breadcrumbSchema(crumbs, overrides = {}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemCount: crumbs.length,
    listItem: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
    ...overrides,
  };
  return base;
}
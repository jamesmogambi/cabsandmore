import Script from "next/script";

/**
 * JSON-LD structured data component for AEO/GEO optimization.
 * Renders one or more schema.org JSON-LD objects as a single script block.
 *
 * @param {{ object | object[] }} schema - One or more schema.org JSON-LD objects
 * @param {string} [id] - Optional id for the script tag
 * @param {string} [strategy] - Next.js Script strategy: "beforeInteractive" | "afterInteractive" | "lazyOnload"
 */
export default function JsonLd({ schema, id, strategy = "afterInteractive" }) {
  const data = Array.isArray(schema) ? schema : [schema];

  return (
    <Script
      id={id}
      strategy={strategy}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
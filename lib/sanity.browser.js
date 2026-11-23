import { createClient } from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2024-01-01",
  useCdn: true,
  perspective: "published",
};

export const sanityBrowserClient = createClient(config);

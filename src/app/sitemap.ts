import { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { SITEMAP_QUERY } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const paths = await sanityFetch({
      query: SITEMAP_QUERY,
      tags: ["page", "service", "caseStudy", "media"],
    });

    if (!paths) return [];

    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    return paths
      .filter((path) => path !== null)
      .map((path) => ({
        url: new URL(path.href!, baseUrl).toString(),
        lastModified: new Date(path._updatedAt),
      }));
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}

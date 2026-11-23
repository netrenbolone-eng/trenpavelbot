import type { MetadataRoute } from "next";

export const SITE_URL = "https://bodysupport.ru";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin*", "/api/*", "/_next/*", "/private*"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

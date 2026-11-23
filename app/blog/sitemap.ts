import { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/blog";
import { SITE_URL } from "@/lib/site-url";

type SitemapEntry = MetadataRoute.Sitemap[number];

const blogRoutes: SitemapEntry[] = ARTICLES.map((article) => ({
  url: `${SITE_URL}/blog/${article.slug}`,
  lastModified: new Date(article.date),
  changeFrequency: "monthly",
  priority: 0.6,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return blogRoutes;
}

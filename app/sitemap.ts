import { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/blog";
import { SITE_URL } from "@/lib/site-url";

type SitemapEntry = MetadataRoute.Sitemap[number];

const baseRoutes: SitemapEntry[] = [
  {
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: `${SITE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/oferta`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: `${SITE_URL}/privacy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  },
];

const blogRoutes: SitemapEntry[] = ARTICLES.map((article) => ({
  url: `${SITE_URL}/blog/${article.slug}`,
  lastModified: new Date(article.date),
  changeFrequency: "monthly",
  priority: 0.6,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...baseRoutes, ...blogRoutes];
}

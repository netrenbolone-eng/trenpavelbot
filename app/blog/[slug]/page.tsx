import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getArticle, ARTICLES } from "@/lib/blog";
import { botLink } from "@/lib/site";
import { SITE_URL } from "@/lib/site-url";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const article = getArticle((await params).slug as string);
  if (!article) return { title: "Статья не найдена" };

  const url = `${SITE_URL}/blog/${article.slug}`;

  return {
    title: `${article.title} — TREN.PAVEL`,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      publishedTime: article.date,
      authors: ["TREN.PAVEL"],
      images: [{ url: `${SITE_URL}/og-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [`${SITE_URL}/og-image`],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug as string);
  if (!article) notFound();

  return (
    <main className="scroll-smooth paged:h-screen paged:snap-y paged:snap-mandatory paged:overflow-y-auto paged:overscroll-contain">
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden border-b border-line paged:snap-start paged:snap-always">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12">
          <Link
            href="/blog"
            className="inline-flex h-10 items-center justify-center rounded-full border border-line px-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted hover:border-accent/70 hover:text-accent transition-colors mb-8"
          >
            ← Назад в блог
          </Link>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
            {article.date}
          </span>
          <h1 className="mt-6 max-w-3xl text-[length:clamp(2rem,6.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-tight">
            {article.title}
          </h1>
          <div className="mt-10 max-w-2xl text-base leading-relaxed text-muted">
            {article.content.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
            <a
              href={botLink(article.botStart)}
              target="_blank"
              rel="noopener noreferrer"
              data-ym-goal
              className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 font-mono text-sm font-medium uppercase tracking-[0.12em] text-ink hover:bg-accent-hover transition-colors mt-8"
            >
              Начать движение
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
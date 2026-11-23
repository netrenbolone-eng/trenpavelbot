import Link from "next/link";
import { ARTICLES } from "@/lib/blog";

export const metadata = {
  title: "Блог TREN.PAVEL — тренировки, питание, фитнес",
  description:
    "Статьи про программу тренировок на месяц, питание при наборе массы, разгрузку и фитнес, который вписывается в жизнь.",
};

export default function BlogPage() {
  return (
    <main className="scroll-smooth paged:h-screen paged:snap-y paged:snap-mandatory paged:overflow-y-auto paged:overscroll-contain">
      <section className="flex min-h-[100svh] flex-col justify-center border-b border-line py-16 paged:snap-start paged:snap-always">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <h2 className="mt-8 text-[length:clamp(2rem,6.5vw,4.5rem)] font-semibold uppercase leading-[1.05] tracking-tight text-center">
            Блог TREN.PAVEL
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-muted text-center sm:text-lg">
            Статьи про тренировки, питание и фитнес, который вписывается в твою жизнь.
          </p>
        </div>
      </section>
      <section className="border-b border-line py-20 paged:snap-start paged:snap-always">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col border border-line bg-ink p-6 sm:p-8 hover:bg-surface-raised transition-colors duration-300"
              >
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                  {article.date}
                </span>
                <h3 className="mt-4 text-lg font-semibold uppercase leading-tight tracking-tight">
                  <Link href={`/blog/${article.slug}`} className="text-paper hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">{article.excerpt}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-line px-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted hover:border-accent/70 hover:text-accent transition-colors"
                >
                  Читать
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

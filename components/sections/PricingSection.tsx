"use client";

import { motion } from "framer-motion";
import ActionLink from "@/components/ui/ActionLink";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { LINKS, PLAN } from "@/lib/site";
import ProcessSection from "@/components/sections/ProcessSection";

export default function PricingSection() {
  return (
    <section
      id="additional-services"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden border-b border-line py-16 paged:snap-start paged:snap-always"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 left-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_42%_48%,black_0%,black_35%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_42%_48%,black_0%,black_35%,transparent_100%)] lg:right-[28%]">
          <ParallaxBackground
            src="/images/coaching-bg.webp"
            sizes="(min-width: 1024px) 72vw, 100vw"
            className="absolute inset-0 scale-[1.03]"
            imageClassName="object-cover object-[center_24%] opacity-40 grayscale blur-[2px]"
            alt="Фон секции дополнительных услуг и персонального ведения"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45 lg:from-ink lg:via-ink/80 lg:to-ink/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink/35 to-ink/80 lg:from-transparent lg:via-ink/20 lg:to-ink/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={stagger(0.05, 0.12)}
          initial={false}
          whileInView="show"
          viewport={viewportOnce}
        >
            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-5">
              <motion.h2
                variants={fadeUp}
                className="text-[length:clamp(1.75rem,7vw,3.75rem)] font-semibold uppercase leading-[1]"
              >
                План, который <span className="text-accent">переживёт вторник.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-md text-base leading-relaxed text-muted"
              >
                Персональное ведение — отдельный формат работы с тренером. На консультации обсудим
                цели, график и опыт, чтобы подобрать подходящий вариант.
              </motion.p>
            </div>

            <motion.article
              variants={fadeUp}
              className="relative overflow-hidden border border-line bg-ink p-4 sm:p-8 lg:col-span-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,rgba(197,246,90,0.1),transparent)]"
              />

              <div className="relative flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
                <p className="break-words font-mono text-sm tracking-normal text-muted">
                  {PLAN.name}
                </p>
                <span className="shrink-0 rounded-full border border-line px-3 py-1 font-mono text-sm tracking-normal text-muted">
                  Отдельная услуга
                </span>
              </div>

              <p className="relative mt-6 flex items-baseline gap-3">
                <span className="font-mono text-sm tracking-normal text-accent">от</span>
                <span className="text-[length:clamp(2.75rem,15vw,6rem)] font-semibold leading-none tracking-tighter">
                  {PLAN.price}
                </span>
                <span className="text-3xl text-muted">{PLAN.currency}</span>
              </p>
              <p className="relative mt-2 text-sm text-muted">в месяц</p>

              <ul className="relative mt-6 divide-y divide-line border-t border-line">
                {PLAN.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 py-2.5 text-sm text-paper sm:text-base"
                  >
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <ActionLink
                href={LINKS.messenger}
                external
                variant="ghost"
                className="relative mt-6 w-full sm:w-auto"
              >
                Обсудить с тренером
              </ActionLink>
            </motion.article>
          </div>
          <ProcessSection />
        </motion.div>
      </div>
    </section>
  );
}

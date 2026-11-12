"use client";

import { motion } from "framer-motion";
import ActionLink from "@/components/ui/ActionLink";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { fadeUp, stagger } from "@/lib/motion";
import { LINKS } from "@/lib/site";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden border-b border-line paged:snap-start paged:snap-always"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <ParallaxBackground
          src="/images/trainer-hero.webp"
          sizes="(min-width: 1024px) 68vw, 100vw"
          priority
          className="absolute inset-y-0 right-0 w-full lg:w-[68%]"
          imageClassName="object-cover object-[center_20%] opacity-40 grayscale"
          alt="Тренер Pavel на фоне героя"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45 lg:from-ink lg:via-ink/80 lg:to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-48 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(197,246,90,0.08),transparent)]" />
      </div>

      <motion.div
        variants={stagger(0.15, 0.1)}
        initial={false}
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 pb-12 pt-6 sm:px-8 lg:px-12"
      >
        <motion.header
          variants={fadeUp}
          className="flex items-center font-mono text-sm tracking-normal text-muted"
        >
          <span className="text-paper">TREN.PAVEL</span>
        </motion.header>

        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[1.05fr_0.75fr]">
          <div className="flex flex-col justify-center py-10">
            <h1 className="max-w-5xl text-[length:clamp(2rem,6.5vw,4.5rem)] font-semibold uppercase leading-[1.05] tracking-tight">
              Фитнес, который <span className="text-accent">вписывается в твою жизнь.</span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            >
              Научный подход к тренировкам и питанию — без марафонов и жёстких ограничений.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <p
                className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
                aria-label="Твоя фитнес-программа всего за 660 рублей"
              >
                <span className="font-mono text-sm uppercase tracking-[0.12em] text-muted">
                  Твоя фитнес-программа всего за
                </span>
                <span className="text-2xl font-semibold text-accent">660 ₽</span>
              </p>
              <ActionLink href={LINKS.bot} external className="w-full sm:w-auto">
                Открыть бота
              </ActionLink>
              <ActionLink href="#additional-services" variant="ghost" className="w-full sm:w-auto">
                Персональное ведение
              </ActionLink>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex items-center justify-between font-mono text-sm uppercase tracking-[0.12em] text-olive"
        >
          <span>Листай вниз</span>
          <span aria-hidden className="motion-safe:animate-float text-base text-accent">
            ↓
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { STEPS } from "@/lib/site";

export default function ProcessSection() {
  return (
    <div id="personal-process" className="mt-14 border-t border-line pt-10">
      <h3 className="text-[length:clamp(1.5rem,5vw,2.25rem)] font-semibold uppercase leading-tight tracking-tighter">
        Как устроено персональное ведение
      </h3>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
        Это отдельная услуга с персональным планом, разбором техники и корректировкой. Она не входит
        в продукт Telegram за 660 ₽.
      </p>
      <motion.div
        variants={stagger(0.05, 0.08)}
        initial={false}
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.ul
          variants={stagger(0.1, 0.1)}
          className="mt-6 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, index) => (
            <motion.li
              key={step.id}
              variants={fadeUp}
              className="group relative flex min-h-[200px] flex-col justify-between bg-ink p-5 transition-colors duration-300 hover:bg-surface-raised sm:p-6"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(197,246,90,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {index < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-5 top-5 font-mono text-olive transition-colors duration-300 group-hover:text-accent sm:right-6 sm:top-6"
                >
                  →
                </span>
              )}

              <span className="text-outline relative text-5xl font-semibold leading-none tracking-tighter transition-colors duration-300 group-hover:text-accent">
                {step.id}
              </span>

              <div className="relative mt-8">
                <h4 className="text-lg font-semibold uppercase leading-tight tracking-tight">
                  {step.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { LINKS } from "@/lib/site";

export default function BotOfferSection() {
  return (
    <section
      id="bot"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden border-b border-line bg-surface paged:snap-start paged:snap-always"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(197,246,90,0.08),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <SectionLabel index="02" title="Telegram Bot" total="07" />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-sm uppercase tracking-[0.12em] text-accent">
              Самостоятельный формат в Telegram
            </p>
            <h2 className="mt-5 text-[length:clamp(2rem,6.5vw,4.5rem)] font-semibold uppercase leading-[1.05] tracking-tight">
              ТРЕНИРОВКИ И ПИТАНИЕ
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              В боте TREN.PAVEL можно подобрать программу тренировок, разобраться с питанием и
              отслеживать свои результаты.
            </p>
          </div>

          <div className="relative isolate overflow-hidden border border-line bg-ink p-6 sm:p-8 lg:col-span-5">
            <Image
              src="/images/bot-product.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="z-0 object-cover opacity-30"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-ink/85 via-ink/80 to-ink/70"
            />
            <div className="relative z-20">
              <p className="font-mono text-sm uppercase tracking-[0.12em] text-muted">
                Стоимость
              </p>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-6xl font-semibold leading-none text-accent sm:text-7xl">
                  660
                </span>
                <span className="text-3xl font-medium text-accent">₽</span>
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Это отдельный продукт в Telegram. Персональное ведение и разбор техники в эту
                стоимость не входят.
              </p>
              <ActionLink href={LINKS.bot} external className="mt-6 w-full">
                Открыть бота
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
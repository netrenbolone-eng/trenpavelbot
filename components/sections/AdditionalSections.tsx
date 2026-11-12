import ActionLink from "@/components/ui/ActionLink";
import Image from "next/image";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { LINKS } from "@/lib/site";

const FAQ_ITEMS = [
  {
    question: "Что представляет собой продукт за 660 ₽?",
    answer:
      "Это продукт TREN.PAVEL в Telegram: в боте можно подобрать тренировки под себя, разобраться с питанием и вести свои результаты.",
  },
  {
    question: "Что входит в стоимость?",
    answer:
      "На сайте указана стоимость 660 ₽ и описаны возможности бота: подбор тренировок, информация о питании и ведение результатов. Срок и условия оплаты уточни в боте до оплаты.",
  },
  {
    question: "Как начать пользоваться ботом?",
    answer:
      "Нажми «Открыть бота» — ссылка ведёт в Telegram. Порядок запуска и дальнейшие шаги смотри в самом боте.",
  },
  {
    question: "Кому подойдёт этот формат?",
    answer:
      "Тем, кто хочет подобрать тренировки под себя, разобраться с питанием и вести свои результаты в Telegram.",
  },
  {
    question: "Нужно ли специальное оборудование?",
    answer:
      "Требования к оборудованию для продукта в боте на сайте не указаны. Уточни этот вопрос в боте до оплаты.",
  },
  {
    question: "Как получить доступ и как работает оплата?",
    answer:
      "Срок доступа и условия оплаты на сайте не указаны. Проверь актуальные условия непосредственно в Telegram-боте перед оплатой.",
  },
] as const;

const TARIFFS = [
  {
    name: "Тренировки",
    description:
      "План под твою цель, опыт, график и оборудование.",
    prices: [
      { period: "15 дней", price: "1 900 ₽" },
      { period: "Месяц", price: "3 100 ₽" },
    ],
  },
  {
    name: "Питание",
    description:
      "Ориентиры по калориям и белку, рекомендации по рациону и замены продуктов под привычки.",
    prices: [
      { period: "15 дней", price: "1 400 ₽" },
      { period: "Месяц", price: "2 200 ₽" },
    ],
  },
  {
    name: "Тренировки + питание",
    description:
      "План тренировок и рекомендации по питанию. В месячном формате — корректировка после первых двух недель.",
    prices: [
      { period: "15 дней", price: "2 800 ₽" },
      { period: "Месяц", price: "4 700 ₽" },
    ],
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-[100svh] flex-col justify-center border-b border-line py-16 paged:snap-start paged:snap-always"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-12">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-sm">
          <Image
            src="/images/trainer-about.webp"
            alt="Павел в чёрно-белом портрете из тренажёрного зала."
            fill
            sizes="(min-width: 1024px) 34vw, 90vw"
            className="object-cover object-center opacity-65"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-ink/25"
          />
        </div>
        <div>
          <h2 className="mt-8 text-[length:clamp(2rem,6.5vw,4.5rem)] font-semibold uppercase leading-[1.05] tracking-tight">
            Я — Павел. <span className="text-accent">TREN.PAVEL.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            В основе моего подхода — научный взгляд на тренировки и питание. Без марафонов и жёстких
            ограничений: система должна вписываться в реальную жизнь.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProductDetailsSection() {
  return (
    <section
      id="product-details"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden border-b border-line py-16 paged:snap-start paged:snap-always"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <ParallaxBackground
          src="/images/product-details-bg.webp"
          sizes="100vw"
          className="absolute inset-0"
          imageClassName="object-cover object-[center_20%] opacity-45"
          alt="Фон продукта с деталями тренировок"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-ink/75 to-ink/80" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <h2 className="mt-8 max-w-4xl text-[length:clamp(1.5rem,6.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-tight">
          ТРЕНИРОВКИ В УДОБНОМ ФОРМАТЕ
        </h2>
        <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
          {[
            ["01", "Подобрать тренировки под себя"],
            ["02", "Разобраться с питанием"],
            ["03", "Вести свои результаты"],
          ].map(([index, title]) => (
            <article
              key={index}
              className="flex min-h-36 flex-col justify-between bg-ink p-5 sm:p-6"
            >
              <span className="text-outline font-mono text-3xl">{index}</span>
              <h3 className="mt-6 text-lg font-semibold uppercase leading-tight">{title}</h3>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
          Это самостоятельный продукт в боте. Персональный разбор техники и сопровождение тренером
          относятся к отдельному формату онлайн-ведения.
        </p>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section
      id="faq"
      className="flex min-h-[100svh] flex-col justify-center border-b border-line py-16 paged:snap-start paged:snap-always"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <h2 className="mt-8 text-[length:clamp(1.5rem,6.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-tight">
          Частые вопросы
        </h2>
        <div className="mt-10 border-t border-line">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <details key={question} className="group border-b border-line">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-base font-medium marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&::-webkit-details-marker]:hidden sm:text-lg">
                {question}
                <span
                  aria-hidden
                  className="shrink-0 text-xl text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-3xl pb-6 pr-10 text-base leading-relaxed text-muted">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TariffsSection() {
  return (
    <section
      id="tariffs"
      className="flex min-h-[100svh] flex-col justify-center border-b border-line py-16 paged:snap-start paged:snap-always"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <h2 className="max-w-4xl text-[length:clamp(1.75rem,6.5vw,3rem)] font-semibold uppercase leading-[1.05] tracking-tight">
          Другие форматы работы
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          Дополнительные услуги тренера — отдельно от продукта в Telegram за 660 ₽.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {TARIFFS.map((tariff) => (
            <article
              key={tariff.name}
              className="flex flex-col border border-line bg-ink p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold uppercase leading-tight tracking-tight">
                {tariff.name}
              </h3>
              <p className="mt-4 min-h-20 text-base leading-relaxed text-muted">
                {tariff.description}
              </p>
              <ul className="mt-6 divide-y divide-line border-t border-line">
                {tariff.prices.map(({ period, price }) => (
                  <li
                    key={period}
                    className="flex items-center justify-between gap-4 py-4 text-base"
                  >
                    <span className="text-muted">{period}</span>
                    <span className="font-semibold text-accent">{price}</span>
                  </li>
                ))}
              </ul>
              <ActionLink
                href={LINKS.messenger}
                external
                variant="ghost"
                className="mt-6 w-full"
              >
                Уточнить у тренера
              </ActionLink>
            </article>
          ))}
        </div>
        <details className="mt-6 border-t border-line pt-4">
          <summary className="cursor-pointer text-base font-medium text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            Консультации и персональные тренировки в зале
          </summary>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted">
            Также доступны консультации по тренировкам или питанию — 900 ₽ и разбор текущей
            программы — 1 100 ₽. Персональные тренировки в зале: разовая — 1 600 ₽, блок на 15 дней
            (4 тренировки) — 5 600 ₽, блок на месяц (8 тренировок) — 10 000 ₽.
          </p>
        </details>
      </div>
    </section>
  );
}

export function FinalBotCTASection() {
  return (
    <section
      id="start"
      className="relative flex min-h-[70svh] flex-col justify-center overflow-hidden border-b border-line py-20 paged:snap-start paged:snap-always"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(197,246,90,0.12),transparent_65%)]"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 text-center sm:px-8 lg:px-12">
        <h2 className="mx-auto mt-10 max-w-4xl text-[length:clamp(2rem,6.5vw,4.5rem)] font-semibold uppercase leading-[1.05] tracking-tight">
          Тренировки.
          <br />
          Питание.
          <br />
          <span className="text-accent">Твоя новая форма.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Тренировочная программа в Telegram, гайд по питанию и личная консультация от меня.
        </p>
        <p className="mt-5 text-2xl font-semibold uppercase text-accent sm:text-3xl">
          Всё за 660 ₽
        </p>
        <ActionLink href={LINKS.bot} external className="mx-auto mt-8 w-full sm:w-auto">
          Открыть бота
        </ActionLink>
      </div>
    </section>
  );
}

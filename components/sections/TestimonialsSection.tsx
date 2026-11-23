export function TestimonialsSection() {
  const TESTIMONIALS = [
    {
      name: "Анна",
      text: "Программа подошла с первой недели. Занятия по 40 минут, не нужно ехать в зал — всё дома. За месяц ушло 3 кг, спина перестала болеть.",
      side: "left",
    },
    {
      name: "Михаил",
      text: "Набор шёл медленно, пока не взял программу. Павел подстроил нагрузку под мой график — теперь тренируюсь 3 раза в неделю, результат есть.",
      side: "right",
    },
    {
      name: "Ольга",
      text: "Гайд по питанию выручил: понятно, что есть, чтобы набирать массу, а не жир. В боте всегда можно задать вопрос тренеру.",
      side: "left",
    },
    {
      name: "Сергей",
      text: "Четвёртая неделя — разгрузка, это важно. Первые 6 недель минус 4 см в талии, сил стало больше. Рекомендую.",
      side: "right",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative flex min-h-[70svh] flex-col justify-center border-b border-line py-20 paged:snap-start paged:snap-always"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" />
        <div
          className="absolute top-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(197,246,90,0.06),transparent)] blur-3xl"
        />
        <div
          className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(197,246,90,0.04),transparent)] blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 text-center sm:px-8 lg:px-12">
        <h2 className="mx-auto mt-10 max-w-4xl text-[length:clamp(2rem,6.5vw,4.5rem)] font-semibold uppercase leading-[1.05] tracking-tight">
          НЕ ОБЕЩАНИЯ.
          <br />
          <span className="text-accent">РЕАЛЬНЫЙ ОПЫТ</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Отклики клиентов из бота TREN.PAVEL
        </p>

        <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-center lg:gap-12">
          {TESTIMONIALS.map(({ name, text, side }, index) => (
            <div
              key={name}
              className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4"
              style={{ flexDirection: side === "right" ? "row-reverse" : "row" }}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 sm:p-5 shadow-lg ${
                  side === "right"
                    ? "bg-accent text-ink ml-auto"
                    : "bg-surface-raised text-paper border border-line mr-auto"
                }`}
              >
                <p className="text-base leading-relaxed">
                  {text}
                </p>
                <span className="mt-2 block text-[10px] uppercase tracking-wider text-muted opacity-70 font-mono">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

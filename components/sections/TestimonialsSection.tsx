export function TestimonialsSection() {
  const TESTIMONIALS = [
    {
      name: "Анна, 29",
      text: "Программа подошла с первой недели. Занятия по 40 минут, не нужно ехать в зал — всё дома. За месяц ушло 3 кг, спина перестала болеть.",
    },
    {
      name: "Михаил, 34",
      text: "Набор шёл медленно, пока не взял программу. Павел подстроил нагрузку под мой график — теперь тренируюсь 3 раза в неделю, результат есть.",
    },
    {
      name: "Ольга, 26",
      text: "Гайд по питанию выручил: понятно, что есть, чтобы набирать массу, а не жир. В боте всегда можно задать вопрос тренеру.",
    },
    {
      name: "Сергей, 41",
      text: "Четвёртая неделя — разгрузка, это важно. Первые 6 недель минус 4 см в талии, сил стало больше. Рекомендую.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative flex min-h-[70svh] flex-col justify-center border-b border-line py-20 paged:snap-start paged:snap-always"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 text-center sm:px-8 lg:px-12">
        <h2 className="mx-auto mt-10 max-w-4xl text-[length:clamp(2rem,6.5vw,4.5rem)] font-semibold uppercase leading-[1.05] tracking-tight">
          Результаты,
          <br />
          <span className="text-accent">которых ждут.</span>
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {TESTIMONIALS.map(({ name, text }, index) => (
            <article
              key={name}
              className="relative overflow-hidden border border-line bg-ink p-6 sm:p-8 transition-colors duration-300 hover:bg-surface-raised"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(197,246,90,0.06),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <p className="mb-4 text-base leading-relaxed text-muted italic">
                «{text}»
              </p>
              <p className="font-mono text-sm uppercase tracking-[0.12em] text-paper">{name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

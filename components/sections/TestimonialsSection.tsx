export function TestimonialsSection() {
  const TESTIMONIALS = [
    {
      name: "Анна",
      text: "Мне программа с первой недели подошла. Тренировки минут по 40, иногда занимаюсь дома, подстроили под мой инвентарь домашние тренировки. Всего месяц, а уже минус 3 кг, и спина перестала болеть. Очень рада, что решила попробовать.",
      side: "left",
    },
    {
      name: "Михаил",
      text: "Наконец то сдвинулся вес. Тренироватьсься стал меньше, а вес и отражение в зеркале меняется быстрее. Хорошо ты подстроил нагрузку под мой график, так гораздо проще придерживаться плана.",
      side: "right",
    },
    {
      name: "Ольга",
      text: "Инструкция по питанию которая шла в комплекте, очень пригодилась. Наконец стало понятно, что и в каких количествах кушать, что бы не просто вес набирать а мышцы. И удобно что всегда можно задать вопрос, если что-то непонятно.",
      side: "left",
    },
    {
      name: "Сергей",
      text: "Понравилось что есть и разгрузочные дни, а не просто постоянное увеличение нагрузки. С моим графиком это отлично вписывается в жизнь. По результатам, силовые выросли, плечи стали шире, рельефность мышц проявилась. Буду продолжать.",
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
                <span className={`mt-2 block text-[10px] uppercase tracking-wider font-mono font-semibold ${
                  side === "right"
                    ? "text-ink"
                    : "text-paper"
                } opacity-90`}
                >
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

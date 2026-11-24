"use client";

import { useState, useRef, useEffect } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Анна",
    age: 29,
    text: "Мне программа с первой недели подошла. Тренировки минут по 40, иногда занимаюсь дома, подстроили под мой инвентарь домашние тренировки. Всего месяц, а уже минус 3 кг, и спина перестала болеть. Очень рада, что решила попробовать.",
  },
  {
    id: 2,
    name: "Михаил",
    age: 25,
    text: "Наконец-то сдвинулся вес. Тренироваться стал меньше, а вес и отражение в зеркале меняется быстрее. Хорошо ты подстроил нагрузку под мой график, так гораздо проще придерживаться плана.",
  },
  {
    id: 3,
    name: "Ольга",
    age: 34,
    text: "Инструкция по питанию, которая шла в комплекте, очень пригодилась. Наконец стало понятно, что и в каких количествах кушать, чтобы не просто вес набирать, а мышцы. И удобно, что всегда можно задать вопрос, если что-то непонятно.",
  },
  {
    id: 4,
    name: "Сергей",
    age: 27,
    text: "Понравилось, что есть и разгрузочные дни, а не просто постоянное увеличение нагрузки. С моим графиком это отлично вписывается в жизнь. По результатам, силовые выросли, плечи стали шире, рельефность мышц проявилась. Буду продолжать.",
  },
];

export default function TestimonialsSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="testimonials"
      className="relative flex min-h-[70svh] flex-col justify-center border-b border-line py-20 paged:snap-start paged:snap-always overflow-x-hidden"
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

        <div className="mt-16 flex flex-col gap-4 sm:max-w-3xl mx-auto w-full">
          {TESTIMONIALS.map(({ id, name, age, text }) => (
            <TestimonialCard
              key={id}
              id={id}
              name={name}
              age={age}
              text={text}
              isOpen={openId === id}
              onClick={() => toggle(id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  id: number;
  name: string;
  age: number;
  text: string;
  isOpen: boolean;
  onClick: () => void;
}

function TestimonialCard({ id, name, age, text, isOpen, onClick }: TestimonialCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className="relative w-full max-w-2xl mx-auto"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div
        className={`relative rounded-2xl p-5 sm:p-6 bg-surface-raised border border-line transition-all duration-500 ease-in-out ${
          isOpen ? "shadow-xl ring-2 ring-accent/30" : "shadow-lg hover:shadow-xl hover:border-accent/30"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0 text-left">
            <p className="font-semibold text-paper text-base sm:text-lg truncate">
              {name}
            </p>
            <p className="text-xs font-mono uppercase tracking-wider text-muted mt-0.5">
              {age} лет
            </p>
          </div>
          <span
            className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-accent/10 text-accent transition-transform duration-500 ease-in-out"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>

        <div
          className="overflow-hidden"
          style={{
            maxHeight: isOpen ? contentHeight : 0,
            marginTop: isOpen ? 16 : 0,
            opacity: isOpen ? 1 : 0,
            filter: isOpen ? "blur(0px)" : "blur(4px)",
            transform: isOpen ? "translateY(0)" : "translateY(-8px)",
            transition: "max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), margin-top 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div ref={contentRef} className="pt-4 border-t border-line/50">
            <p className="text-base leading-relaxed text-muted whitespace-pre-line">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";

export const metadata = {
  title: "Оферта — TREN.PAVEL",
  description: "Публичная оферта на подписку TREN.PAVEL — тренировки и питание в Telegram за 660 ₽ в месяц.",
};

export default function OfertaPage() {
  return (
    <main className="scroll-smooth paged:h-screen paged:snap-y paged:snap-mandatory paged:overflow-y-auto paged:overscroll-contain">
      <section className="flex min-h-[100svh] flex-col justify-center border-b border-line py-20 paged:snap-start paged:snap-always">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <h2 className="mt-8 text-[length:clamp(2rem,6.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-tight">
            Публичная оферта
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Данный документ является офертой продавца (самозанятого) на заключение договора о предоставлении доступа к программе тренировок и питания в формате онлайн-бота TREN.PAVEL.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Стоимость подписки: 660 ₽ в месяц. Доступ к боту предоставляется после прохождения опроса и оплаты. Срок действия подписки — один календарный месяц с момента оплаты.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Продавец: самозанятый. Идентификационные и реквизитные данные для оплаты предоставляются в боте перед подтверждением заказа.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Вопросы по оплате и доступу задавайте в боте TREN.PAVEL или в поддержку по контактам в подвале сайта.
          </p>
          <p className="mt-6 text-xs text-muted">
            Текст оферты рекомендуется сверить с юристом перед использованием.
          </p>
          <p className="mt-8">
            <Link href="/" className="text-accent hover:underline">
              ← На главную
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

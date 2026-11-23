import Link from "next/link";

export const metadata = {
  title: "Политика конфиденциальности — TREN.PAVEL",
  description: "Политика конфиденциальности TREN.PAVEL: обработка персональных данных пользователей бота и сайта.",
};

export default function PrivacyPage() {
  return (
    <main className="scroll-smooth paged:h-screen paged:snap-y paged:snap-mandatory paged:overflow-y-auto paged:overscroll-contain">
      <section className="flex min-h-[100svh] flex-col justify-center border-b border-line py-20 paged:snap-start paged:snap-always">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <h2 className="mt-8 text-[length:clamp(2rem,6.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-tight">
            Политика конфиденциальности
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Мы собираем и обрабатываем персональные данные (имя, номер телефона, имя пользователя Telegram) только для предоставления доступа к боту TREN.PAVEL, оформления подписки и обратной связи.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Данные не передаются третьим лицам, за исключением случаев, предусмотренных законом, и работы платёжных сервисов.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Пользователь может запросить копию своих данных или их удаление, написав в поддержку в боте или по контактам в подвале сайта.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Продолжая использование бота и сайта, вы соглашаетесь с обработкой своих персональных данных на условиях настоящей политики.
          </p>
          <p className="mt-6 text-xs text-muted">
            Текст политики рекомендуется сверить с юристом перед использованием.
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

import Link from "next/link";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Публичная оферта — TREN.PAVEL",
  description: "Публичная оферта на подписку TREN.PAVEL — тренировки и питание в Telegram за 660 ₽ в месяц.",
  alternates: { canonical: "/oferta" },
  openGraph: {
    title: "Публичная оферта — TREN.PAVEL",
    description: "Публичная оферта на подписку TREN.PAVEL — тренировки и питание в Telegram за 660 ₽ в месяц.",
    url: `${SITE_URL}/oferta`,
    type: "website",
    images: [{ url: `${SITE_URL}/og-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Публичная оферта — TREN.PAVEL",
    description: "Публичная оферта на подписку TREN.PAVEL — тренировки и питание в Telegram за 660 ₽ в месяц.",
    images: [`${SITE_URL}/og-image`],
  },
  robots: { index: true, follow: true },
};

export default function OfertaPage() {
  return (
    <main className="scroll-smooth paged:h-screen paged:snap-y paged:snap-mandatory paged:overflow-y-auto paged:overscroll-contain">
      <section className="flex min-h-[100svh] flex-col justify-center border-b border-line py-20 paged:snap-start paged:snap-always">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <h2 className="mt-8 text-[length:clamp(2rem,6.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-tight">
            Публичная оферта
          </h2>
          <p className="mt-6 text-sm text-muted">
            Версия от {new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="mt-12 space-y-10 text-base leading-relaxed text-muted">
            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">1. Общие положения</h3>
              <p className="mt-4">
                Настоящая Публичная оферта (далее — «Оферта») адресована неопределенному кругу лиц и
                составляет официальное предложение Индивидуального предпринимателя (далее — «Продавец»)
                заключить договор купли-продажи подписки на доступ к программе тренировок и питания
                в формате онлайн-бота TREN.PAVEL (далее — «Продукт») на условиях, указанных ниже.
              </p>
              <p className="mt-4">
                Получая доступ к Продукту и оплачивая подписку, Пользователь (далее — «Покупатель»)
                принимает условия настоящей Оферты в полном объеме и безоговорочно.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">2. Сведения о Продавце</h3>
              <p className="mt-4">
                Индивидуальный предприниматель (далее — ИП), зарегистрированный в соответствии с
                законодательством РФ. Точные реквизиты (ФИО, ИНН, ОГРНИП, адрес регистрации)
                предоставляются в боте TREN.PAVEL перед оформлением заказа и в чеке после оплаты.
              </p>
              <p className="mt-4">
                Статус: самозанятый (НПД) в соответствии с ФЗ-422.
              </p>
              <p className="mt-4">
                Контакты для претензий и вопросов: через бота TREN.PAVEL или почту,
                указанную в чеке/профиле бота.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">3. Предмет Оферты</h3>
              <p className="mt-4">
                Продавец обязуется предоставить Покупателю доступ к Продукту — программе тренировок
                и питания в формате онлайн-бота в Telegram (бот TREN.PAVEL), а Покупатель обязуется
                оплатить и принять доступ на условиях настоящей Оферты.
              </p>
              <p className="mt-4">
                В состав Продукта входит:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Индивидуальная тренировочная программа на месяц, составленная под цель, уровень подготовки, график и доступное оборудование;</li>
                <li>Гайд по питанию с расчётом калорий, БЖУ и рекомендациями по рациону;</li>
                <li>Доступ к ведению результатов (трекер прогресса) в боте;</li>
                <li>Ежемесячное обновление программы и корректировка под прогресс;</li>
                <li>Возможность задавать вопросы тренеру в боте в рамках подписки (текстовый формат).</li>
              </ul>
              <p className="mt-4">
                Не входит в стоимость подписки: персональное онлайн-ведение, разбор техники по видео,
                платные консультации, персональные тренировки в зале — это отдельные услуги.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">4. Цена и порядок оплаты</h3>
              <p className="mt-4">
                Стоимость подписки: <strong>660 ₽ в месяц</strong>.
              </p>
              <p className="mt-4">
                Оплата производится через платёжный шлюз, интегрированный в бота TREN.PAVEL
                (банковские карты РФ, СБП, иные доступные способы). Моментом оплаты считается
                момент списания средств со счёта Покупателя.
              </p>
              <p className="mt-4">
                Доступ к боту открывается автоматически после успешной оплаты и прохождения
                вводного опроса в боте.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">5. Срок действия и продление</h3>
              <p className="mt-4">
                Срок действия подписки — 1 календарный месяц с момента оплаты.
              </p>
              <p className="mt-4">
                Подписка не продлевается автоматически. Для продолжения доступа Покупатель должен
                самостоятельно оформить новую оплату за следующий период. О автоматическом
                продлении отдельно уведомляется в боте при необходимости.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">6. Предоставление доступа</h3>
              <p className="mt-4">
                Доступ к Продукту предоставляется исключительно через бота TREN.PAVEL в Telegram.
                После оплаты Покупатель проходит вводный опрос (цель, уровень, график, здоровье,
                оборудование), на основе которого формируется индивидуальная программа.
              </p>
              <p className="mt-4">
                Программа формируется в течение 24 часов после завершения опроса. В редких случаях
                срок может увеличиться до 48 часов — об этом Покупатель уведомляется в боте.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">7. Права и обязанности сторон</h3>
              <p className="mt-4"><strong>Покупатель имеет право:</strong></p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Получить доступ к Продукту в установленный срок;</li>
                <li>Задавать вопросы тренеру в боте в рамках подписки;</li>
                <li>Получить справку об оплате (чек) через бота или email;</li>
                <li>Обратиться с претензией в случае нарушения сроков или условий.</li>
              </ul>
              <p className="mt-4"><strong>Покупатель обязан:</strong></p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Предоставлять достоверные данные в опросе (здоровье, цели, опыт);</li>
                <li>Не передавать доступ третьим лицам;</li>
                <li>Не копировать, не распространять и не публиковать содержимое Продукта;</li>
                <li>Прекратить использование при истечении подписки.</li>
              </ul>
              <p className="mt-4"><strong>Продавец имеет право:</strong></p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Временно ограничить доступ к боту для технических работ (не более 24 часов в месяц);</li>
                <li>Отказать в предоставлении доступа при обнаружении нарушений условий;</li>
                <li>Изменять состав Продукта с уведомлением за 7 дней.</li>
              </ul>
              <p className="mt-4"><strong>Продавец обязан:</strong></p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Предоставить доступ к Продукту в установленный срок;</li>
                <li>Обеспечить работоспособность бота и корректность программы;</li>
                <li>Отвечать на вопросы в боте в рабочее время (10:00–20:00 МСК, будни);</li>
                <li>Соблюдать конфиденциальность данных Покупателя.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">7. Отказ от услуги и возврат средств</h3>
              <p className="mt-4">
                Поскольку Продукт представляет собой цифровой контент, доступ к которому
                предоставляется немедленно после оплаты, и индивидуально формируется под Покупателя,
                <strong>возврат средств после предоставления доступа не производится</strong>
                (ст. 32 Закона РФ «О защите прав потребителей», п. 25 Постановления Правительства РФ № 1473).
              </p>
              <p className="mt-4">
                Возврат возможен только в случае, если доступ к боту не был предоставлен в течение
                48 часов после оплаты по вине Продавца. Заявка на возврат направляется в боте
                или на контактную почту.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">8. Ответственность сторон</h3>
              <p className="mt-4">
                Продавец не несёт ответственности за: временную недоступность Telegram или бота
                по техническим причинам со стороны Telegram; действия Покупателя, приведшие к
                травмам или ухудшению здоровья при самостоятельных тренировках; утерю данных
                при сбоях со стороны Telegram.
              </p>
              <p className="mt-4">
                Продавец не даёт медицинских гарантий. Продукт — информационный и образовательный
                характер. Перед началом тренировок Покупатель обязан проконсультироваться с врачом.
              </p>
              <p className="mt-4">
                В случае доказанной вины Продавца ответственность ограничивается суммой оплаченной
                подписки за текущий месяц.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">9. Разрешение споров</h3>
              <p className="mt-4">
                Претензии направляются в боте TREN.PAVEL или на контактную почту. Ответ в течение
                10 рабочих дней. При недостижении согласия спор передаётся в суд по месту
                регистрации Продавца.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">10. Прочие условия</h3>
              <p className="mt-4">
                Настоящая Оферта вступает в силу с момента публикации на сайте и действует до
                отзыва. Изменения вступают в силу с момента публикации новой версии.
                Отношения сторон регулируются законодательством РФ.
              </p>
            </section>

            <p className="mt-10 text-xs text-muted">
            </p>
            <p className="mt-6">
              <Link href="/" className="text-accent hover:underline">
                ← На главную
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
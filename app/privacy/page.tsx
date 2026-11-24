import Link from "next/link";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — TREN.PAVEL",
  description: "Политика конфиденциальности TREN.PAVEL: обработка персональных данных пользователей бота и сайта.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Политика конфиденциальности — TREN.PAVEL",
    description: "Политика конфиденциальности TREN.PAVEL: обработка персональных данных пользователей бота и сайта.",
    url: `${SITE_URL}/privacy`,
    type: "website",
    images: [{ url: `${SITE_URL}/og-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Политика конфиденциальности — TREN.PAVEL",
    description: "Политика конфиденциальности TREN.PAVEL: обработка персональных данных пользователей бота и сайта.",
    images: [`${SITE_URL}/og-image`],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="scroll-smooth paged:h-screen paged:snap-y paged:snap-mandatory paged:overflow-y-auto paged:overscroll-contain">
      <section className="flex min-h-[100svh] flex-col justify-center border-b border-line py-20 paged:snap-start paged:snap-always">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <h2 className="mt-8 text-[length:clamp(2rem,6.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-tight">
            Политика конфиденциальности
          </h2>
          <p className="mt-6 text-sm text-muted">
            Версия от {new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="mt-12 space-y-10 text-base leading-relaxed text-muted">
            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">1. Общие положения</h3>
              <p className="mt-4">
                Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок
                обработки и защиты персональных данных пользователей (далее — «Пользователи»)
                сайта bodysupport.ru (далее — «Сайт») и бота TREN.PAVEL в Telegram (далее — «Бот»)
                Индивидуальным предпринимателем (далее — «Оператор»).
              </p>
              <p className="mt-4">
                Оператор действует в соответствии с Конституцией РФ, Федеральным законом
                № 152-ФЗ «О персональных данных» от 27.07.2006, Гражданским кодексом РФ,
                Законом РФ «О защите прав потребителей» и иными нормативными правовыми актами РФ.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">2. Категории собираемых персональных данных</h3>
              <p className="mt-4">
                Оператор обрабатывает следующие категории персональных данных:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li><strong>Идентификационные данные:</strong> имя (или никнейм), username в Telegram, user_id в Telegram, номер телефона (если предоставлен пользователем добровольно при оплате);</li>
                <li><strong>Антропометрические и медицинские данные (по добровольному согласию):</strong> пол, возраст, рост, вес, уровень физической подготовки, цели, травмы, заболевания, противопоказания — предоставляются пользователем добровольно при заполнении вводного опроса в боте для формирования индивидуальной программы;</li>
                <li><strong>Технические данные:</strong> IP-адрес, тип браузера/устройства, язык интерфейса, время посещения, реферер — собираются автоматически при посещении Сайта через счетчики аналитики;</li>
                <li><strong>Платёжные данные:</strong> обрабатываются исключительно платёжным шлюзом (банк/платёжный агрегатор), Оператор не получает и не хранит номера карт, CVV, сроки действия.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">3. Цели обработки персональных данных</h3>
              <p className="mt-4">
                Персональные данные обрабатываются исключительно для следующих целей:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Формирование индивидуальной тренировочной программы и гайда по питанию на основе антропометрических и медицинских данных;</li>
                <li>Предоставление доступа к боту и функционалу продукта (трекер, программа, гайд);</li>
                <li>Оформление и учёт оплаты подписки, выдача чека;</li>
                <li>Связь с пользователем: ответы на вопросы в боте, уведомления о сроках подписки, технические сообщения;</li>
                <li>Ведение учёта подписок, контроль доступа к боту;</li>
                <li>Аналитика посещаемости Сайта (анонимизированные данные);</li>
                <li>Выполнение требований законодательства РФ (бухгалтерский учёт, налоговый учёт, ответ на запросы госорганов).</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">4. Правовые основания обработки</h3>
              <p className="mt-4">
                Обработка осуществляется на основании:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Согласия Пользователя (п. 1 ч. 1 ст. 6 ФЗ-152) — при заполнении опроса, оплате, обращении в бот;</li>
                <li>Исполнения договора (п. 2 ч. 1 ст. 6 ФЗ-152) — для предоставления услуг по подписке;</li>
                <li>Законного интереса Оператора (п. 3 ч. 1 ст. 6 ФЗ-152) — аналитика, безопасность, претензионная работа;</li>
                <li>Исполнения законодательства РФ (п. 4 ч. 1 ст. 6 ФЗ-152) — бухучёт, налоги, запросы госорганов.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">5. Передача данных третьим лицам</h3>
              <p className="mt-4">
                Персональные данные не передаются третьим лицам, за исключением:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Платёжным шлюзам (банк/агрегатор) — для проведения оплаты (минимально необходимый объём: сумма, email/телефон для чека);</li>
                <li>Telegram — username, user_id для работы бота (в рамках политики Telegram);</li>
                <li>Сервисам аналитики (Яндекс.Метрика, Google Analytics) — анонимизированные технические данные (IP замаскирован);</li>
                <li>Государственным органам — по законным запросам в установленном законом порядке.</li>
              </ul>
              <p className="mt-4">
                Данные не продаются, не сдаются в аренду и не передаются в рекламные сети
                для таргетинга без отдельного согласия.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">6. Хранение и защита данных</h3>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Данные хранятся на серверах в РФ (Telegram-бот, платёжный шлюз, хостинг Сайта);</li>
                <li>Срок хранения: пока активно соглашение (подписка) + 3 года после прекращения для бухгалтерского и налогового учёта (ст. 14 ФЗ-152, Налоговый кодекс РФ);</li>
                <li>Антропометрические/медицинские данные удаляются по запросу пользователя или через 30 дней после истечения подписки, если не получено новое согласие;</li>
                <li>Применяются организационные и технические меры: HTTPS/TLS, ограничение доступа к админке, регулярные обновления, бэкапы.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">7. Права субъекта персональных данных</h3>
              <p className="mt-4">
                Пользователь имеет право (ст. 18 ФЗ-152):
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Получить подтверждение обработки и копию своих данных;</li>
                <li>Требовать уточнения неточных данных или удаления неполных/неактуальных;</li>
                <li>Отозвать согласие на обработку (с учётом сохранения данных для бух/налог учёта);</li>
                <li>Получить информацию о третьих лицах, получающих данные;</li>
                <li>Обжаловать действия Оператора в Роскомнадзоре или суде.</li>
              </ul>
              <p className="mt-4">
                Для реализации прав напишите в бот TREN.PAVEL или на контактную почту,
                указанную в чеке/профиле бота. Ответ в течение 30 дней (ст. 21 ФЗ-152).
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">8. Cookies и аналитика</h3>
              <p className="mt-4">
                Сайт использует технические cookies (сессия, настройки языка) и аналитику
                (Яндекс.Метрика, Google Analytics). IP-адрес анонимизируется (маскировка
                последнего октета). Данные не позволяют идентифицировать личность без
                дополнительных сведений. Пользователь может отключить cookies в настройках
                браузера — функционал Сайта может быть ограничен.
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">9. Контактная информация Оператора</h3>
              <p className="mt-4">
                Индивидуальный предприниматель (самозанятый). Точные реквизиты (ФИО, ИНН, ОГРНИП)
                предоставляются в боте перед оплатой и в чеке.
              </p>
              <p className="mt-4">
                Каналы связи для вопросов по персональным данным: бот TREN.PAVEL, контактная почта
                (указана в профиле бота/чеке).
              </p>
            </section>

            <section>
              <h3 className="font-semibold uppercase tracking-tight text-paper">10. Изменения Политики</h3>
              <p className="mt-4">
                Оператор вправе вносить изменения в настоящую Политику. Новая версия вступает
                в силу с момента публикации на Сайте. О существенных изменениях Пользователи
                уведомляются через боте или на Сайте за 7 дней до вступления в силу.
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
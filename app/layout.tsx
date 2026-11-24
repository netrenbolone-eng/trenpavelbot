import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import MotionProvider from "@/components/MotionProvider";
import CookieConsent from "@/components/ui/CookieConsent";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  title: "Программа тренировок в Telegram за 660 ₽ — TREN.PAVEL",
  description:
    "Тренировки в Telegram от TREN.PAVEL за 660 ₽ в месяц. Программа тренировок и питания под цель и уровень. Четвёртая неделя — разгрузка.",
  applicationName: "TREN.PAVEL",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Программа тренировок в Telegram за 660 ₽ — TREN.PAVEL",
    description:
      "Тренировки в Telegram от TREN.PAVEL за 660 ₽ в месяц. Программа тренировок и питания под цель и уровень. Четвёртая неделя — разгрузка.",
    siteName: "TREN.PAVEL",
    locale: "ru_RU",
    type: "website",
    url: SITE_URL,
    images: [{ url: "https://bodysupport.ru/og-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Программа тренировок в Telegram за 660 ₽ — TREN.PAVEL",
    description:
      "Тренировки в Telegram от TREN.PAVEL за 660 ₽ в месяц. Программа тренировок и питания под цель и уровень.",
    images: ["https://bodysupport.ru/og-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#10120f",
  colorScheme: "dark",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
        <CookieConsent />
        {/* Яндекс.Метрика — вставьте свой ID счётчика вместо XXXXXXXX и раскомментируйте блок */}
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */}
        {/* 
        <script defer>
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(XXXXXXX, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
          `}
        </script>
        */}
        {/* Google Search Console — вставьте свой код верификации */}
        {/* <meta name="google-site-verification" content="XXXXXXXX" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TREN.PAVEL",
              url: SITE_URL,
              logo: `${SITE_URL}/icon.svg`,
              sameAs: [
                "https://t.me/trenviet",
                "https://www.instagram.com/tren.pavel/",
                "https://www.tiktok.com/@tren.pavel",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "ru",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TREN.PAVEL",
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Что представляет собой продукт за 660 ₽?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Это продукт TREN.PAVEL в Telegram: в боте можно подобрать тренировки под себя, разобраться с питанием и вести свои результаты.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Что входит в стоимость?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "На сайте указана стоимость 660 ₽ в месяц и описаны возможности бота: подбор тренировок, информация о питании и ведение результатов. Срок и условия оплаты уточни в боте до оплаты.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Как начать пользоваться ботом?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Нажми «Открыть бота» — ссылка ведёт в Telegram. Порядок запуска и дальнейшие шаги смотри в самом боте.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Кому подойдёт этот формат?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Тем, кто хочет подобрать тренировки под себя, разобраться с питанием и вести свои результаты в Telegram.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "TREN.PAVEL — Программа тренировок и питания в Telegram",
              description:
                "Индивидуальная тренировочная программа и гайд по питанию в Telegram-боте. Подбор под цель, уровень, график и оборудование. Ежемесячное обновление. Вопросы тренеру в боте.",
              brand: {
                "@type": "Brand",
                name: "TREN.PAVEL",
              },
              offers: {
                "@type": "Offer",
                url: SITE_URL,
                priceCurrency: "RUB",
                price: "660",
                priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split("T")[0],
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "TREN.PAVEL",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
        {/* sendBotGoal — цель Яндекс.Метрики на клик по кнопке бота.
             Вставьте реальный ID счётчика и раскомментируйте инициализацию выше.
             Функция вызывается кликом по ссылке бота (data-goal="bot_click"). */}
        <script
          id="bot-goal-tracker"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var goalName = 'bot_click';
                var counterId = XXXXXXXX; // <-- вставьте ID счётчика Яндекс.Метрики
                function sendBotGoal(event){
                  var link = event.currentTarget;
                  if (!link || !link.dataset || link.dataset.goalSent === '1') return;
                  link.dataset.goalSent = '1';
                  if (window.ym && typeof window.ym === 'function' && counterId) {
                    try { window.ym(counterId, 'reachGoal', goalName); } catch (e) {}
                  }
                }
                document.querySelectorAll('a[data-ym-goal]').forEach(function(link){
                  link.addEventListener('click', sendBotGoal);
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.CF_PAGES_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ТРЕНИРОВКИ И ПИТАНИЕ",
  description:
    "Тренировки в Telegram от TREN.PAVEL за 660 ₽. Программа на месяц под цель и уровень. Четвёртая неделя — разгрузка.",
  applicationName: "TREN.PAVEL",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "ТРЕНИРОВКИ И ПИТАНИЕ",
    description:
      "Тренировки в Telegram от TREN.PAVEL за 660 ₽. Программа на месяц под цель и уровень. Четвёртая неделя — разгрузка.",
    siteName: "TREN.PAVEL",
    locale: "ru_RU",
    type: "website",
    url: siteUrl,
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
      <body>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TREN.PAVEL",
              url: siteUrl,
              logo: `${siteUrl}/icon.svg`,
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
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
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
                    text: "На сайте указана стоимость 660 ₽ и описаны возможности бота: подбор тренировок, информация о питании и ведение результатов. Срок и условия оплаты уточни в боте до оплаты.",
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
      </body>
    </html>
  );
}

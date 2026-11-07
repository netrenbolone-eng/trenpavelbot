import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ТРЕНИРОВКИ И ПИТАНИЕ",
  description:
    "Тренировки в Telegram от TREN.PAVEL за 660 ₽. Научный подход к тренировкам и питанию без марафонов и жёстких ограничений.",
  applicationName: "TREN.PAVEL",
  openGraph: {
    title: "ТРЕНИРОВКИ И ПИТАНИЕ",
    description:
      "Тренировки в Telegram от TREN.PAVEL за 660 ₽. Научный подход к тренировкам и питанию без марафонов и жёстких ограничений.",
    siteName: "TREN.PAVEL",
    locale: "ru_RU",
    type: "website",
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
    <html lang="ru" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

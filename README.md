# TREN.PAVEL

Сайт trenera TREN.PAVEL — тренировки и питание в Telegram за 660 ₽.

## Стек технологий

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3
- Framer Motion (анимации)
- Cloudflare Workers (деплой через OpenNext)

## Структура проекта

```
app/              — страницы и макет Next.js (App Router)
  layout.tsx      — корневой макет, метаданные, JSON-LD, canonical URL
  page.tsx        — главная страница, сборка секций
  globals.css     — глобальные стили, цвета, шрифты
  robots.ts       — robots.txt для поисковиков
  sitemap.ts      — карта сайта (SEO)
  opengraph-image.tsx — OG-превью для соцсетей
  icon.svg        — иконка сайта
components/       — React-компоненты
  sections/       — секции лендинга (героя, oferta, детали, обо мне, FAQ, тарифы, CTA)
  ui/             — UI-компоненты (кнопки, иконки, параллакс, моб. CTA)
  MotionProvider.tsx — провайдер анимаций Framer Motion
lib/              — данные и утилиты
  site.ts         — ссылки, шаги процесса, тарифы
  motion.ts       — варианты анимации
public/images/    — изображения сайта (7 файлов .webp)
.github/agents/site-builder.agent.md — инструкция для поддержки сайта
```

## Запуск в разработке

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Открыть http://localhost:3000
```

## Сборка для продакшена

```bash
# Собрать проект
npm run build

# Запустить продакшен-сервер локально
npm run start
```

## Деплой на Cloudflare Workers

```bash
# Собрать и задеплоить
npm run deploy
```

Требуется настроить переменные окружения в wrangler.jsonc или через Cloudflare dashboard:
- `NEXT_PUBLIC_SITE_URL` — URL вашего сайта

## SEO

- `app/sitemap.ts` — карта сайта для поисковиков
- `app/robots.ts` — правила индексации
- JSON-LD структурированные данные (Organization, WebSite, FAQPage) в `app/layout.tsx`
- Canonical URL в мета-тегах
- OG-изображение в `app/opengraph-image.tsx`

## Передача покупателю

Репозиторий содержит только исходный код сайта и конфигурацию. Перед передачей:

1. Убедитесь, что `npm run build` проходит без ошибок
2. Настройте `NEXT_PUBLIC_SITE_URL` для вашего домена
3. Задеплойте на Cloudflare Workers через `npm run deploy`
4. При必要, добавьте аналитику (Яндекс.Метрика / GA4)

## Лицензия

Частный проект. Все права защищены.
# cache bust Tue Nov 24 09:40:56 UTC 2026

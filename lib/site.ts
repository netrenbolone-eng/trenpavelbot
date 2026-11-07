// Замените ссылки-заглушки на свои.
export const LINKS = {
  messenger: "https://t.me/trenpavel",
  bot: "https://t.me/Trenpavel_bot",
  guide: "https://trenpavel.framer.ai/",
  telegram: "https://t.me/trenviet",
  instagram: "https://www.instagram.com/tren.pavel/",
  tiktok: "https://www.tiktok.com/@tren.pavel",
} as const;

export interface Step {
  readonly id: string;
  readonly title: string;
  readonly text: string;
}

export const STEPS: readonly Step[] = [
  {
    id: "01",
    title: "Анализ",
    text: "Разбираем цели, образ жизни, опыт и ограничения. Фиксируем стартовую точку.",
  },
  {
    id: "02",
    title: "Индивидуальный план",
    text: "Тренировки и питание, собранные под твой график, уровень и доступный инвентарь.",
  },
  {
    id: "03",
    title: "Личный контроль по видео",
    text: "Присылаешь видео упражнений — получаешь разбор техники и точные правки.",
  },
  {
    id: "04",
    title: "Калибровка",
    text: "Регулярно сверяем результат и корректируем нагрузку и питание.",
  },
];

export const PLAN = {
  name: "Персональное онлайн-ведение",
  price: "3 000",
  currency: "₽",
  features: [
    "Учитываем твои цели и возможности и ритм жизни",
    "Подбираем формат тренировок",
    "Отслеживаем прогресс",
    "Корректируем план по мере необходимости",
    "Все нюансы и итоговую стоимость обсуждаем до старта",
  ],
} as const;

import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { InstagramIcon, TelegramIcon, TikTokIcon } from "@/components/ui/Icons";
import { botLink, LINKS } from "@/lib/site";

interface Social {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const SOCIALS: readonly Social[] = [
  { label: "Telegram @trenviet", href: LINKS.telegram, Icon: TelegramIcon },
  { label: "Instagram @tren.pavel", href: LINKS.instagram, Icon: InstagramIcon },
  { label: "TikTok @tren.pavel", href: LINKS.tiktok, Icon: TikTokIcon },
];

const LEGAL_LINKS = [
  { label: "Оферта", href: LINKS.oferta },
  { label: "Политика конфиденциальности", href: LINKS.privacy },
] as const;

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-5 pb-24 pt-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-24 lg:px-12 md:pb-5">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
          <p className="font-mono text-sm uppercase tracking-[0.12em] text-muted">
            © 2026 TREN.PAVEL
          </p>
        </div>
        <nav aria-label="Социальные сети" className="flex items-center gap-2 mx-auto">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-accent/70 hover:text-accent"
            >
              <Icon />
            </a>
          ))}
        </nav>
        <nav aria-label="Юридические документы" className="flex items-center gap-4 text-xs text-muted">
          {LEGAL_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="hover:text-accent transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
          <a
            href={botLink("site_footer")}
            target="_blank"
            rel="noopener noreferrer"
            data-ym-goal
            className="hover:text-accent transition-colors duration-300"
          >
            Открыть бота
          </a>
        </nav>
      </div>
    </footer>
  );
}

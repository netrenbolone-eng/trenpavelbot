"use client";

import { useEffect, useState } from "react";
import { LINKS } from "@/lib/site";

export default function MobileBotCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    
    // Fallback timeout - show CTA after 2 seconds if IntersectionObserver doesn't work
    const fallbackTimeout = setTimeout(() => {
      setVisible(true);
    }, 2000);

    if (!hero || !("IntersectionObserver" in window)) {
      clearTimeout(fallbackTimeout);
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(hero);
    
    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-gradient-to-t from-ink via-ink/95 to-transparent px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-8 md:hidden">
      <a
        href={LINKS.bot}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-14 items-center justify-center rounded-full bg-accent px-6 text-center font-mono text-sm font-medium uppercase tracking-[0.12em] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        Открыть бота
      </a>
    </div>
  );
}

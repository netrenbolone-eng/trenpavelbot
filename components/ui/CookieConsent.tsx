"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "bodysupport_cookie_consent";
const COOKIE_CONSENT_VERSION = "1";

interface CookieConsentState {
  version: string;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [consent, setConsent] = useState<CookieConsentState | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CookieConsentState;
        if (parsed.version === COOKIE_CONSENT_VERSION) {
          setConsent(parsed);
        } else {
          localStorage.removeItem(COOKIE_CONSENT_KEY);
          setShow(true);
        }
      } else {
        setShow(true);
      }
    } catch {
      setShow(true);
    }
  }, []);

  const acceptAll = () => {
    const newConsent: CookieConsentState = {
      version: COOKIE_CONSENT_VERSION,
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setShow(false);
  };

  const acceptNecessaryOnly = () => {
    const newConsent: CookieConsentState = {
      version: COOKIE_CONSENT_VERSION,
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setShow(false);
  };

  if (!show || consent) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-ink border-t border-line px-5 py-4 sm:px-8 lg:px-12"
      role="dialog"
      aria-label="Согласие на использование cookie"
    >
      <div className="mx-auto max-w-[1440px] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-sm text-muted">
            Мы используем cookies для работы сайта, аналитики и улучшения вашего опыта.
            Необходимые cookies нельзя отключить.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <button
            onClick={acceptNecessaryOnly}
            className="w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-full border border-line px-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted hover:border-accent/70 hover:text-accent transition-colors"
          >
            Только необходимые
          </button>
          <button
            onClick={acceptAll}
            className="w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-full bg-accent px-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-ink hover:bg-accent-hover transition-colors"
          >
            Принять все
          </button>
          <Link
            href="/privacy"
            className="text-xs text-muted hover:text-accent transition-colors underline"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </div>
  );
}

interface CookieConsentState {
  version: string;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}
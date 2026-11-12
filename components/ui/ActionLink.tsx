"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ActionVariant = "primary" | "ghost" | "dark";

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: ActionVariant;
  external?: boolean;
  className?: string;
}

const base =
  "group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full px-8 font-mono text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-300";

const styles: Record<ActionVariant, string> = {
  primary: "bg-accent text-ink hover:bg-accent-hover",
  ghost:
    "border border-line text-paper hover:border-accent/70 hover:bg-accent/5",
  dark: "bg-ink text-paper hover:bg-surface-raised focus-visible:outline-ink",
};

export default function ActionLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ActionLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
    </motion.a>
  );
}

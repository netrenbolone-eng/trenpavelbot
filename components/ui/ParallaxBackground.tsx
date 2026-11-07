"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface ParallaxBackgroundProps {
  src: string;
  sizes: string;
  className: string;
  imageClassName: string;
  priority?: boolean;
}

export default function ParallaxBackground({
  src,
  sizes,
  className,
  imageClassName,
  priority = false,
}: ParallaxBackgroundProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0.5);
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(progress, [0, 1], ["-5%", "5%"]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const image = imageRef.current;
    if (!image) return;

    const scrollTargets: EventTarget[] = [window];
    let ancestor = image.parentElement;

    while (ancestor) {
      const { overflowY } = window.getComputedStyle(ancestor);
      if (overflowY === "auto" || overflowY === "scroll") {
        scrollTargets.push(ancestor);
      }
      ancestor = ancestor.parentElement;
    }

    const updateProgress = () => {
      const { top, height } = image.getBoundingClientRect();
      const viewportHeight = document.documentElement.clientHeight;
      const range = viewportHeight + height;
      progress.set(range > 0 ? Math.min(1, Math.max(0, (viewportHeight - top) / range)) : 0);
    };

    scrollTargets.forEach((target) =>
      target.addEventListener("scroll", updateProgress, { passive: true }),
    );
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      scrollTargets.forEach((target) => target.removeEventListener("scroll", updateProgress));
      window.removeEventListener("resize", updateProgress);
    };
  }, [prefersReducedMotion, progress]);

  return (
    <motion.div ref={imageRef} aria-hidden className={className}>
      <motion.div className="absolute inset-x-0 -inset-y-[8%]" style={{ y }}>
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          sizes={sizes}
          className={imageClassName}
        />
      </motion.div>
    </motion.div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string; // e.g. "10+" or "25"
  durationMs?: number;
  className?: string;
};

export default function Counter({ value, durationMs = 2000, className }: Props) {
  const end = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/^[0-9]+/, "");
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const steps = Math.max(1, Math.floor(durationMs / 16));
          const inc = end / steps;
          let cur = 0;
          const t = window.setInterval(() => {
            cur += inc;
            if (cur >= end) {
              cur = end;
              window.clearInterval(t);
            }
            setDisplay(Math.floor(cur));
          }, 16);
        }
      });
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, durationMs]);

  return (
    <span ref={ref} className={className}>{display}{suffix}</span>
  );
}

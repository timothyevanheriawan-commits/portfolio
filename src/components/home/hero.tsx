"use client";

import { Fade, Line } from "@/components/ui/motion";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function RevealWord({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className ?? ""}`}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* Static 12-column grid texture behind the right side.
   The crosshair, coordinates, pulse loop and pointer readout are removed. */
function GridField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const c = ctx;

    const DARK =
      getComputedStyle(canvas)
        .getPropertyValue("--color-text-primary")
        .trim() || "#1A1A1A";

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, w, h);

      const COLS = 12;
      const cell = w / COLS;
      c.lineWidth = 0.5;
      c.strokeStyle = DARK;
      c.globalAlpha = 0.04;

      c.beginPath();
      for (let i = 0; i <= COLS; i++) {
        c.moveTo(i * cell, 0);
        c.lineTo(i * cell, h);
      }
      for (let j = 0; j <= Math.ceil(h / cell); j++) {
        c.moveTo(0, j * cell);
        c.lineTo(w, j * cell);
      }
      c.stroke();
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

export function Hero() {
  return (
    <section
      style={{ gridColumn: "content-start / span 12" }}
      className="relative pt-16 pb-0 md:pt-24 border-r border-[var(--color-border)]"
    >
      {/* Background grid, right side only */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 right-0 w-[45%] pointer-events-none z-0 overflow-hidden select-none hidden md:block"
      >
        <GridField />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* ── Headline: unchanged design, larger on phones (4 lines below md) ── */}
        <h1 className="w-full tracking-[-0.04em] leading-[0.88] text-[var(--color-text-primary)] text-[length:clamp(40px,14vw,84px)] md:text-[length:clamp(38px,11vw,172px)]">
          <RevealWord delay={0.2}>
            <span className="block font-light">Building</span>
          </RevealWord>

          <RevealWord delay={0.36}>
            <span className="relative inline-block group cursor-default">
              {/* Idle accent bar: mouse devices only, so it never cuts into the next line on phones */}
              <span
                aria-hidden
                className="absolute left-0 right-0 -bottom-1 h-[8px] bg-[var(--color-accent)]/20 [@media(hover:none)]:hidden"
              />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[var(--color-bg-header)] [@media(hover:none)]:text-[var(--color-bg-header)]">
                interfaces
              </span>
              {/* Maroon block: on hover with a mouse, always on for touch (no hover there) */}
              <span className="absolute inset-0 bg-[var(--color-accent)] scale-y-0 group-hover:scale-y-100 [@media(hover:none)]:scale-y-100 transition-transform duration-300 origin-bottom z-0" />
            </span>
          </RevealWord>

          <RevealWord delay={0.52}>
            <span className="block font-bold text-[#C8C8C8]">
              <span className="max-md:block">with</span>{" "}
              <span className="max-md:block">clarity.</span>
            </span>
          </RevealWord>
        </h1>

        {/* ── Divider rule ── */}
        <motion.div
          className="relative w-full h-px bg-[var(--color-border)] mt-12 md:mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full bg-[var(--color-accent)]"
            initial={{ width: 0 }}
            animate={{ width: "12%" }}
            transition={{ duration: 1.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* ── Body left, CTA + status right ── */}
        <Fade
          delay={1.0}
          className="flex flex-col gap-8 pt-8 pb-12 pr-4 md:flex-row md:items-end md:justify-between md:gap-12 md:pr-8 md:pt-10 md:pb-16"
        >
          <p className="text-[14px] md:text-[15px] text-[var(--color-text-body)] leading-[1.75] max-w-[44ch] tracking-tight">
            I focus on frontend development and data visualization, creating
            tools that{" "}
            <span className="text-[var(--color-text-primary)] font-medium underline decoration-[var(--color-accent)]/40 decoration-2 underline-offset-4">
              reduce friction
            </span>{" "}
            and communicate clearly.
          </p>

          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
            {" "}
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[var(--color-bg-header)] bg-[var(--color-text-primary)] px-5 py-2.5 hover:bg-[var(--color-accent)] transition-colors duration-300 focus-visible:outline-none focus-visible:bg-[var(--color-accent)]"
            >
              View My Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-20" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
              </span>
              <span className="text-[9px] font-mono text-[var(--color-text-primary)] uppercase tracking-[0.3em]">
                Open to Opportunities
              </span>
            </div>
          </div>
        </Fade>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <Line />
      </div>
    </section>
  );
}

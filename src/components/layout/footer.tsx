"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { Container } from "./container";
import { useMounted } from "@/hooks/use-mounted";
import { siteConfig } from "@/lib/site-config";

const label =
  "font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]";

// Same hover treatment as the old footer: maroon line draws in from the left
const link =
  "relative w-fit text-[14px] text-[var(--color-text-body)] transition-colors duration-200 hover:text-[var(--color-text-primary)] focus-visible:text-[var(--color-text-primary)] focus-visible:outline-none after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--color-accent)] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100";

function External({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={link}>
      {children}
      <span
        aria-hidden
        className="ml-1.5 text-[11px] text-[var(--color-text-muted)]"
      >
        ↗
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function Footer() {
  const mounted = useMounted();
  const reduce = useReducedMotion();
  const toTop = () =>
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  return (
    <footer className="relative border-t border-[var(--color-border)] pt-12 md:pt-16">
      {/* Maroon tick on the top rule, kept from the original footer */}
      <span
        aria-hidden
        className="absolute left-0 top-[-1px] h-px w-10 bg-[var(--color-accent)]"
      />

      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-6 md:pr-12">
            <p className="font-display text-[length:clamp(28px,4vw,44px)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[var(--color-text-primary)]">
              {siteConfig.name}
            </p>
            <p className="mt-4 max-w-[36ch] text-[14px] leading-[1.65] text-[var(--color-text-body)]">
              Frontend development and data analysis. Based in Surabaya,
              Indonesia.
            </p>
          </div>

          <nav
            aria-labelledby="footer-pages"
            className="flex flex-col gap-3 md:col-span-3"
          >
            <p id="footer-pages" className={`${label} mb-1`}>
              Pages
            </p>
            <Link href="/projects" className={link}>
              Work
            </Link>
            <Link href="/about" className={link}>
              About
            </Link>
          </nav>

          <nav
            aria-labelledby="footer-elsewhere"
            className="flex flex-col gap-3 md:col-span-3"
          >
            <p id="footer-elsewhere" className={`${label} mb-1`}>
              Elsewhere
            </p>
            <a href={`mailto:${siteConfig.email}`} className={link}>
              Email
            </a>
            <External href={siteConfig.github}>GitHub</External>
            <External href={siteConfig.linkedin}>LinkedIn</External>
            <External href={siteConfig.source}>Source</External>
          </nav>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-[var(--color-border)] py-5 md:mt-16">
          <p className={label}>
            <span className="tabular-nums text-[var(--color-text-primary)]">
              © {mounted ? new Date().getFullYear() : "2026"}
            </span>
            <span aria-hidden className="mx-3 text-[var(--color-border-dark)]">
              |
            </span>
            {siteConfig.name}
          </p>
          <button
            type="button"
            onClick={toTop}
            className={`${label} transition-colors duration-200 hover:text-[var(--color-accent)] focus-visible:text-[var(--color-accent)] focus-visible:outline-none`}
          >
            Back to top ↑
          </button>
        </div>
      </Container>
    </footer>
  );
}

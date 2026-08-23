"use client";

import { useEffect, useState } from "react";
import { Container } from "./container";
import { useMounted } from "@/hooks/use-mounted";
import { siteConfig } from "@/lib/site-config";

// Session uptime — counts seconds since this page instance mounted.
// A small nod to the "system dossier" framing: this isn't a real server
// uptime, just an honest label for "how long you've been on this page."
function useSessionUptime() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const id = setInterval(() => {
      setSeconds(Math.floor((performance.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function Footer() {
  const mounted = useMounted();
  const uptime = useSessionUptime();

  return (
    <footer className="relative py-10 md:py-16 border-t border-[var(--color-border)] group/footer">
      <span
        aria-hidden
        className="absolute top-[-1px] left-0 w-10 h-px bg-[var(--color-accent)]"
      />
      <Container>
        {/* Changed to flex-col on mobile, flex-row on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">
          {/* Top/Left Block: Legal & Identity */}
          <div className="flex items-center gap-3 group/name">
            <span className="text-[var(--color-text-primary)] font-medium tabular-nums">
              © {mounted ? new Date().getFullYear() : "2026"}
            </span>

            <span className="text-[var(--color-border)]" aria-hidden="true">
              |
            </span>

            {/* Link removed, but keeping the color transition on footer hover */}
            <span className="transition-colors duration-300 group-hover/footer:text-[var(--color-text-primary)] text-[var(--color-text-faint)]">
              {siteConfig.name}
            </span>
          </div>

          {/* Navigation */}
          <div className="flex gap-8">
            {[
              { label: "Work", href: "/projects" },
              { label: "About", href: "/about" },
              { label: "Source", href: siteConfig.source },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative hover:text-[var(--color-text-primary)] transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-[var(--color-accent)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom/Right Block: System Info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-40"
                  style={{ animationDuration: "1.8s" }}
                />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              </span>
              <span className="text-[var(--color-text-primary)]">
                Open to Opportunities
              </span>
            </div>

            <span className="text-[var(--color-border)]">/</span>

            <span className="inline-block border border-[var(--color-border)] px-1.5 py-0.5 -rotate-2 text-[var(--color-text-primary)]">
              V.2026
            </span>

            <span className="text-[var(--color-border)]">/</span>

            <span className="whitespace-nowrap tabular-nums">
              Session {mounted ? uptime : "00:00"}
            </span>

            <span className="text-[var(--color-border)]">/</span>

            <span className="whitespace-nowrap">Next.js - Tailwind v4</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

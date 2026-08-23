// src/app/not-found.tsx
import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="py-24 md:py-36">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        <div className="md:col-span-8">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-5 bg-[var(--color-accent)]" />
            <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[var(--color-text-secondary)]">
              404 / Not Found
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-black tracking-[-0.04em] text-[var(--color-text-primary)] mb-8"
            style={{ fontSize: "clamp(64px, 10vw, 140px)", lineHeight: 0.88 }}
          >
            Wrong
            <br />
            <span className="text-[var(--color-text-ghost)]">turn.</span>
          </h1>

          <p className="text-[15px] text-[var(--color-text-body)] leading-[1.75] max-w-[38ch] mb-10">
            This page doesn't exist. It may have been moved, deleted, or you
            might have mistyped the URL.
          </p>

          {/* Mock stack trace — a small in-character detail rather than a
                        functional error, styled to match the system-log framing
                        used in the intro loader and footer. */}
          <div className="mb-12 max-w-[46ch] border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--color-border)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[var(--color-text-faint)]">
                Error Log
              </span>
            </div>
            <pre className="px-4 py-3 text-[11px] font-mono leading-[1.8] text-[var(--color-text-tertiary)] whitespace-pre-wrap">
              {`> GET ${"{"}requested_route{'}'}
[404] route not found in system index
  at router.resolve (app/*)
  at index.lookup (lib/projects.ts)
suggestion: check /projects or return home`}
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[var(--color-bg-header)] bg-[var(--color-text-primary)] px-6 py-3 hover:bg-[var(--color-accent)] transition-colors duration-300"
            >
              Back to Home
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[var(--color-text-primary)] border border-[var(--color-border)] px-6 py-3 hover:border-[var(--color-text-primary)] transition-colors duration-300"
            >
              View Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Watermark */}
        <div className="hidden md:flex md:col-span-4 items-center justify-end">
          <span
            className="font-black tabular-nums select-none"
            style={{
              fontSize: "clamp(80px, 12vw, 160px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(0,0,0,0.06)",
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
          >
            404
          </span>
        </div>
      </div>
    </Container>
  );
}

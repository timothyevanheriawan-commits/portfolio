"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Fade, Expand } from "@/components/ui/motion";
import { cn } from "@/lib/utils";
import { getProjectGroups } from "@/lib/project-order";
import type { Project } from "@/lib/types";

// Ordering lives in lib/project-order.ts so case-study pagination matches this list.
const GROUPS = getProjectGroups();

// ── Row ───────────────────────────────────────────────────────────────────────
function ProjectRow({
  project,
  index,
  expanded,
  onToggle,
}: {
  project: Project;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const panelId = `project-details-${project.slug}`;
  const role = project.role.replace(/\s*\(.*?\)/, "").replace("&", "+");
  const live = project.liveUrl?.startsWith("http") ? project.liveUrl : null;

  return (
    <article className="group relative border-b border-[var(--color-border)]">
      <span
        aria-hidden
        className={cn(
          "absolute bottom-0 left-0 right-0 h-px bg-[var(--color-accent)] transition-opacity duration-300",
          expanded ? "opacity-100" : "opacity-0",
        )}
      />

      <h3 className="relative z-10">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="w-full py-6 text-left focus-visible:bg-[var(--color-accent)]/[0.03] focus-visible:outline-none md:py-9"
        >
          <span className="grid grid-cols-1 items-center gap-0 md:grid-cols-12">
            <span className="flex items-baseline gap-4 md:col-span-8 md:gap-8">
              <span
                aria-hidden
                className={cn(
                  "hidden font-mono text-[11px] tabular-nums transition-colors duration-300 sm:block",
                  expanded
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)]",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title is first in the DOM (it names the heading); meta sits above it visually */}
              <span className="flex min-w-0 flex-1 flex-col">
                <span
                  className={cn(
                    "order-2 wrap-break-word text-[24px] font-semibold leading-tight tracking-[-0.03em] text-[var(--color-text-primary)] transition-transform duration-500 md:text-[36px]",
                    !expanded && "group-hover:translate-x-2",
                  )}
                >
                  {project.title}
                </span>
                <span className="order-1 mb-3 flex flex-wrap items-center gap-x-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] md:mb-2">
                  <span className="tabular-nums">{project.year}</span>
                  <span aria-hidden className="text-[var(--color-accent)]">
                    —
                  </span>
                  <span>{role}</span>
                </span>
              </span>
            </span>

            <span
              aria-hidden
              className="mt-3 flex items-center justify-end gap-3 pr-2 md:col-span-4 md:mt-0"
            >
              <span
                className={cn(
                  "font-mono text-[11px] uppercase tracking-widest transition-colors duration-300",
                  expanded
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]",
                )}
              >
                {expanded ? "Close" : "Details"}
              </span>
              <span
                className={cn(
                  "relative flex h-4 w-4 items-center justify-center transition-colors duration-300",
                  expanded
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-primary)]",
                )}
              >
                <span
                  className={cn(
                    "absolute block h-px w-4 bg-current transition-transform duration-300",
                    expanded ? "rotate-45" : "rotate-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-px w-4 bg-current transition-transform duration-300",
                    expanded ? "-rotate-45" : "rotate-90",
                  )}
                />
              </span>
            </span>
          </span>
        </button>
      </h3>

      <Expand isOpen={expanded}>
        {/* inert keeps the hidden links out of the tab order while collapsed */}
        <div id={panelId} inert={!expanded} className="relative z-10">
          <div className="grid grid-cols-1 gap-0 pb-10 md:grid-cols-12">
            <div className="md:col-span-8 md:pl-12">
              <p className="mb-6 max-w-[52ch] text-[15px] leading-[1.65] text-[var(--color-text-body)]">
                {project.description}
              </p>
              <ul
                aria-label="Stack"
                className="mb-8 flex flex-wrap gap-2 md:mb-0"
              >
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-[var(--color-border)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-body)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--color-border)] pt-6 md:col-span-4 md:flex-col md:gap-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <Link
                href={`/projects/${project.slug}`}
                className="group/cta inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)] focus-visible:text-[var(--color-accent)] focus-visible:outline-none"
              >
                Full case study
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover/cta:translate-x-1"
                >
                  →
                </span>
              </Link>
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] focus-visible:text-[var(--color-text-primary)] focus-visible:outline-none"
                >
                  Live demo
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                  >
                    ↗
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </Expand>
    </article>
  );
}

// ── Page body ─────────────────────────────────────────────────────────────────
export function ProjectsIndex() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const reduce = useReducedMotion();

  // Sync the open row with ?open= so Back navigation restores it
  const expandedId = searchParams.get("open");

  const setExpandedId = useCallback(
    (slug: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (slug) params.set("open", slug);
      else params.delete("open");
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  let runningIndex = 0;

  return (
    <Container className="py-20 md:py-24">
      <Fade>
        <header className="mb-14">
          <h1
            className="mb-4 text-[32px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] md:text-[44px]"
            style={{ lineHeight: 0.92 }}
          >
            Projects
          </h1>
          <p className="mt-4 max-w-[48ch] text-[14px] leading-[1.65] text-[var(--color-text-secondary)]">
            Data analysis and product builds. Each project includes context,
            technical decisions, and outcomes.
          </p>
        </header>
      </Fade>

      {/* Accent rule */}
      <div className="relative mb-12 h-px w-full overflow-hidden bg-[var(--color-border)]">
        <motion.div
          className="absolute left-0 top-0 h-full bg-[var(--color-accent)]"
          initial={{ width: reduce ? "18%" : 0 }}
          animate={{ width: "18%" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="space-y-16 md:space-y-20">
        {GROUPS.map((group) => (
          <section key={group.id} aria-labelledby={`group-${group.id}`}>
            <div className="mb-4 flex items-baseline justify-between">
              <h2
                id={`group-${group.id}`}
                className="font-mono text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--color-text-secondary)]"
              >
                {group.label}
              </h2>
              <span className="font-mono text-[11px] tabular-nums text-[var(--color-text-tertiary)]">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>

            <div className="border-t border-[var(--color-border)]">
              {group.items.map((project, i) => {
                const index = runningIndex++;
                return (
                  <Fade key={project.slug} delay={i * 0.06}>
                    <ProjectRow
                      project={project}
                      index={index}
                      expanded={expandedId === project.slug}
                      onToggle={() =>
                        setExpandedId(
                          expandedId === project.slug ? null : project.slug,
                        )
                      }
                    />
                  </Fade>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}

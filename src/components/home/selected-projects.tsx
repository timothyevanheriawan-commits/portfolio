"use client";

import { useState } from "react";
import { getFeaturedProjects } from "@/lib/projects";
import { Fade, Line, Expand } from "@/components/ui/motion";
import { HoverLink } from "@/components/ui/hover-link";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function SelectedProjects() {
  const projects = getFeaturedProjects();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20">
      <Line />

      {/* Section Header */}
      <Fade delay={0}>
        <div className="flex items-end justify-between mt-8 md:mt-12 mb-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[var(--color-accent)] font-mono text-[11px] tracking-[0.4em] font-medium">
              <span>INDEX</span>
              <span className="text-[var(--color-border)]">/</span>
              <span>01</span>
            </div>
            <h2 className="text-[14px] md:text-[16px] font-mono text-[var(--color-text-primary)] uppercase tracking-[0.2em] font-medium">
              Selected Work
            </h2>
          </div>
          <div className="hidden md:block pb-1">
            <HoverLink
              href="/projects"
              className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-faint)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              View Archive →
            </HoverLink>
          </div>
        </div>
      </Fade>

      {/* Bento grid - mobile: stacked, desktop: asymmetric */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;
          const isFeature = index === 0;
          // Feature card: 8 cols. Remaining cards share remaining 4 cols each (or full width if only 2)
          const colClass = isFeature ? "md:col-span-8" : "md:col-span-4";

          return (
            <article
              key={project.slug}
              className={cn(
                "group relative border overflow-hidden transition-colors duration-300",
                colClass,
                isExpanded
                  ? "border-[#C8C8C4]"
                  : "border-[var(--color-border)] hover:border-[#C8C8C4]",
              )}
            >
              {/* Top maroon strip */}
              <div
                className={cn(
                  "absolute top-0 left-0 right-0 h-px bg-[var(--color-accent)] transition-transform duration-500 origin-left",
                  isExpanded
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100",
                )}
              />

              {/* Hover/expanded bg */}
              <div
                className={cn(
                  "absolute inset-0 bg-[var(--color-accent)]/[0.03] pointer-events-none transition-opacity duration-300",
                  isExpanded
                    ? "opacity-100 !bg-[var(--color-accent)]/[0.04]"
                    : "opacity-0 group-hover:opacity-100",
                )}
              />

              {/* Card trigger */}
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                aria-expanded={isExpanded}
                aria-controls={`bento-details-${project.slug}`}
                className="relative z-10 w-full text-left p-6 md:p-8"
              >
                {/* Top meta row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "text-[10px] font-mono tabular-nums transition-colors duration-300",
                        isExpanded
                          ? "text-[var(--color-accent)]"
                          : "text-[#C8C8C4] group-hover:text-[var(--color-text-faint)]",
                      )}
                    >
                      NO.{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[var(--color-border)]">/</span>
                    <span className="text-[10px] font-mono text-[var(--color-text-faint)] uppercase tracking-wider">
                      {project.year}
                    </span>
                    {isFeature && (
                      <span
                        aria-hidden
                        className="hidden sm:inline-block ml-2 border border-[var(--color-accent)]/40 text-[var(--color-accent)] text-[8px] font-mono uppercase tracking-[0.2em] px-1.5 py-0.5 -rotate-2 select-none"
                      >
                        Priority Record
                      </span>
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-[10px] font-mono uppercase tracking-widest transition-colors duration-300",
                      isExpanded
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-text-faint)] group-hover:text-[var(--color-text-primary)]",
                    )}
                  >
                    {isExpanded ? "− Close" : "+ Details"}
                  </span>
                </div>

                {/* Role */}
                <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-faint)] mb-3">
                  {project.role}
                </p>

                {/* Title */}
                <h2
                  className={cn(
                    "font-medium tracking-[-0.03em] text-[var(--color-text-primary)] leading-tight transition-colors duration-300",
                    isFeature
                      ? "text-[24px] md:text-[32px]"
                      : "text-[20px] md:text-[22px]",
                  )}
                >
                  {project.title}
                </h2>
              </button>

              {/* Expanded panel */}
              <Expand isOpen={isExpanded} id={`bento-details-${project.slug}`}>
                <div className="relative z-10 px-6 md:px-8 pb-8 pt-4 border-t border-[var(--color-border)]">
                  <p className="text-[14px] text-[var(--color-text-body)] leading-[1.65] mb-6 max-w-[52ch]">
                    {project.description}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono uppercase tracking-wider text-[var(--color-text-body)] border border-[var(--color-border)] px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-6">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/cta inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      Case Study
                      <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                        →
                      </span>
                    </Link>
                    {project.liveUrl?.startsWith("http") && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cta inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[var(--color-text-faint)] hover:text-[var(--color-text-primary)] transition-colors"
                      >
                        Live Site
                        <span className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5">
                          ↗
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </Expand>
            </article>
          );
        })}
      </div>

      {/* Mobile archive link */}
      <div className="mt-10 md:hidden">
        <Link
          href="/projects"
          className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-faint)] flex items-center justify-center gap-2"
        >
          View Archive →
        </Link>
      </div>
    </section>
  );
}

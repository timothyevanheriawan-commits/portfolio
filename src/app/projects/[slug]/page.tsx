// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { getProject, getAllProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/types";
import { CaseStudyNav } from "@/components/projects/case-study-nav";
import { ProjectPreview } from "@/components/projects/project-preview";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const all = getAllProjects();
  const idx = all.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <Container className="py-8 md:py-16 lg:py-20">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-[11px] font-mono text-[#9F9F9F] hover:text-[#1A1A1A] transition-colors duration-300 mb-10 md:mb-14 group"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>
        <span className="uppercase tracking-widest">All Projects</span>
      </Link>

      {/* Header */}
      <header className="mb-12 md:mb-16">
        {/* Index + year + role breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[10px] font-mono text-[#7A1E1E] uppercase tracking-[0.25em]">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span className="text-[#E8E7E4]">/</span>
          <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
            {project.year}
          </span>
          <span className="text-[#E8E7E4]">/</span>
          <span className="text-[10px] font-mono text-[#9F9F9F] uppercase tracking-widest">
            {project.role}
          </span>
        </div>

        {/* Title - editorial weight contrast */}
        <h1
          className="font-black tracking-[-0.04em] text-[#1A1A1A] mb-8 max-w-[16ch]"
          style={{ fontSize: "clamp(36px, 6vw, 76px)", lineHeight: 0.92 }}
        >
          {project.title}
        </h1>

        {/* Objective - larger, more prominent */}
        <p className="text-[17px] md:text-[20px] text-[#4A4A4A] leading-[1.6] max-w-[56ch] font-light">
          {project.objective}
        </p>
      </header>

      {/* Meta bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-6 border-y border-[#E8E7E4] mb-16 md:mb-24">
        <div className="space-y-3">
          <span className="block text-[9px] font-mono text-[#9F9F9F] uppercase tracking-[0.25em]">
            Technical Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech: string) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-[#1A1A1A] border border-[#E8E7E4] px-2.5 py-1 uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.liveUrl?.startsWith("http") && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 border border-[#1A1A1A] text-[11px] font-mono uppercase tracking-widest text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F7F7F5] transition-all duration-300"
          >
            View Live Site
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        )}
      </div>

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mb-20 md:mb-28">
          {/* Label row */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-5 h-px bg-[#7A1E1E]" />
            <span className="text-[8px] font-mono text-[#9F9F9F] uppercase tracking-[0.3em]">
              Preview
            </span>
            <span className="h-px flex-1 bg-[#E8E7E4]" />
            {project.liveUrl?.startsWith("http") && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[8px] font-mono text-[#9F9F9F] uppercase tracking-[0.25em] hover:text-[#7A1E1E] transition-colors duration-200"
              >
                Live ↗
              </a>
            )}
          </div>

          {/* Screenshots grid */}
          <div
            className={cn(
              "grid gap-2",
              project.screenshots.length > 1
                ? "grid-cols-1 md:grid-cols-[3fr_2fr]"
                : "grid-cols-1",
            )}
          >
            {project.screenshots.map((shot, i) => (
              <div key={i} className="flex flex-col gap-2">
                <ProjectPreview src={shot.src} alt={shot.alt} />
                <span className="text-[8px] font-mono text-[#BFBFBF] uppercase tracking-[0.2em] leading-relaxed">
                  {String(i + 1).padStart(2, "0")} — {shot.alt}
                </span>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="h-px bg-[#E8E7E4] mt-10 md:mt-14" />
        </div>
      )}

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sticky sidebar */}
        <CaseStudyNav />

        {/* Sections */}
        <div className="lg:col-span-9 space-y-20 md:space-y-28">
          <Section title="Context" content={project.context} index={1} />
          <Section
            title="Architecture"
            content={project.architecture}
            index={2}
          />
          <Section title="Tradeoffs" content={project.tradeoffs} index={3} />
          <Section title="Outcome" content={project.outcome} index={4} />
          <Section title="Reflection" content={project.reflection} index={5} />
        </div>
      </div>

      {/* Pagination */}
      <nav className="grid grid-cols-2 border-t border-[#E8E7E4] mt-20 md:mt-32">
        <PaginationLink project={prev} direction="prev" />
        <PaginationLink project={next} direction="next" />
      </nav>
    </Container>
  );
}

function Section({
  title,
  content,
  index,
}: {
  title: string;
  content: string;
  index: number;
}) {
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <section id={title.toLowerCase()} className="scroll-mt-28">
      {/* Section label - index + short rule + title, all left-aligned, compact */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[10px] font-mono text-[#7A1E1E] tabular-nums tracking-[0.3em]">
          {String(index).padStart(2, "0")}
        </span>
        <span className="w-5 h-px bg-[#7A1E1E]" />
        <h2 className="text-[11px] font-mono text-[#1A1A1A] uppercase tracking-[0.2em] font-medium">
          {title}
        </h2>
      </div>

      <div className="space-y-5 max-w-[68ch]">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-[15px] md:text-[16px] text-[#4A4A4A] leading-[1.85]"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function PaginationLink({
  project,
  direction,
}: {
  project: Project | null;
  direction: "prev" | "next";
}) {
  if (!project)
    return (
      <div
        className={direction === "prev" ? "border-r border-[#E8E7E4]" : ""}
      />
    );

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group py-10 md:py-14 px-4 md:px-8 flex flex-col gap-3 transition-colors duration-300 hover:bg-[#F5F4F2]",
        direction === "prev"
          ? "border-r border-[#E8E7E4]"
          : "items-end text-right",
      )}
    >
      {/* Direction label with animated arrow */}
      <div
        className={cn(
          "flex items-center gap-2",
          direction === "next" && "flex-row-reverse",
        )}
      >
        <DirectionArrow direction={direction} />
        <span className="text-[9px] font-mono text-[#9F9F9F] uppercase tracking-[0.25em] group-hover:text-[#7A1E1E] transition-colors duration-300">
          {direction === "prev" ? "Previous" : "Next"}
        </span>
      </div>
      <span className="text-[15px] md:text-[17px] font-semibold text-[#1A1A1A] tracking-[-0.02em] line-clamp-2 leading-tight">
        {project.title}
      </span>
      {/* Stack preview */}
      <span className="text-[9px] font-mono text-[#BFBFBF] uppercase tracking-wider">
        {project.stack.slice(0, 2).join(" · ")}
      </span>
    </Link>
  );
}

// Arrow that animates on parent hover
function DirectionArrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <span
      className={cn(
        "text-[11px] font-mono text-[#BFBFBF] group-hover:text-[#7A1E1E] transition-all duration-300",
        direction === "prev"
          ? "group-hover:-translate-x-1 inline-block transition-transform"
          : "group-hover:translate-x-1 inline-block transition-transform",
      )}
    >
      {direction === "prev" ? "←" : "→"}
    </span>
  );
}

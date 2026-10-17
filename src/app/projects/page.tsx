import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/layout/container";
import { ProjectsIndex } from "@/components/projects/projects-index";

// Layout title template renders this as "Timothy Evan / Projects"
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Data analysis and product projects with context, technical decisions and outcomes: retention analytics, SQL-first SaaS analytics, customer-voice NLP and full-stack dashboards.",
};

function Fallback() {
  return (
    <Container className="py-20 md:py-24">
      <div className="animate-pulse">
        <div className="mb-4 h-12 w-32 bg-[var(--color-border)]" />
        <div className="mb-14 h-4 w-64 bg-[var(--color-border)]" />
        <div className="border-t border-[var(--color-border)]">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-24 border-b border-[var(--color-border)] py-6"
            >
              <div className="h-6 w-2/3 bg-[var(--color-border-light)]" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<Fallback />}>
      <ProjectsIndex />
    </Suspense>
  );
}

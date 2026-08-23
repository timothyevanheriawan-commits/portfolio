"use client";

import { Container } from "@/components/layout/container";
import { Fade, Line } from "@/components/ui/motion";
import { Currently } from "@/components/ui/currently";
import { siteConfig } from "@/lib/site-config";

export default function AboutPage() {
  return (
    <Container className="py-16 md:py-24">
      <header className="mb-14">
        <h1
          className="text-[32px] md:text-[48px] font-black tracking-[-0.04em] text-(--color-text-primary) mb-4"
          style={{ lineHeight: 0.92 }}
        >
          PROFILE
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Main Content Area */}
        <div className="lg:col-span-8 lg:pr-16 space-y-12 md:space-y-16">
          <Fade delay={0.1}>
            <section className="max-w-[52ch]">
              <p className="text-[15px] md:text-[16px] text-(--color-text-body) leading-[1.7] mb-6">
                4th-year Information Systems student at Petra Christian
                University. Building interfaces that communicate clearly and
                tools that reduce friction.
              </p>
              <p className="text-[15px] md:text-[16px] text-[var(--color-text-body)] leading-[1.7] mb-6">
                I learned by building, not tutorials. Implementation first,
                abstraction second.
              </p>
            </section>
          </Fade>

          <Line />

          <Fade delay={0.2}>
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <h2 className="text-[10px] font-mono text-[var(--color-text-faint)] uppercase tracking-widest pt-1">
                Education
              </h2>
              <div className="md:col-span-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1 sm:gap-4">
                  <span className="text-[15px] font-bold text-[var(--color-text-primary)]">
                    Petra Christian University
                  </span>
                  <span className="text-[11px] font-mono text-[var(--color-accent)]">
                    2022-2026
                  </span>
                </div>
                <p className="text-[13px] text-[var(--color-text-secondary)]">
                  Bachelor of Science in Information Systems
                </p>
              </div>
            </section>
          </Fade>

          <Line />

          {/* NEW SECTION: PROFESSIONAL EXPERIENCE */}
          <Fade delay={0.25}>
            <section className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              <h2 className="text-[10px] font-mono text-[var(--color-text-faint)] uppercase tracking-widest pt-1">
                Professional
              </h2>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1 sm:gap-4">
                    <span className="text-[15px] font-bold text-[var(--color-text-primary)]">
                      Search Engine Optimization Analyst
                    </span>
                    <span className="text-[11px] font-mono text-[var(--color-accent)]">
                      2025
                    </span>
                  </div>
                  <p className="text-[13px] text-[var(--color-text-secondary)] mb-4">
                    Deus Code · Internship
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Designed and prototyped donation platform pages; built responsive frontends with Figma, Tailwind, and Laravel Blade integrated to backend.",
                      "Developed and maintained WordPress sites for multiple clients, improving layouts and performance.",
                      "Created SEO-driven content, conducted keyword research (Semrush), and delivered performance reports.",
                      "Executed content plans, backlink strategies, product uploads, and social media posts to boost brand presence.",
                      "Delivered special projects including an end-to-end Donation Website and Vrtimes content development.",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="text-[13px] text-[var(--color-text-secondary)] flex items-start gap-3 leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-accent)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </Fade>

          <Line />

          {/* RE-LABELED SECTION: ORGANIZATIONAL EXPERIENCE */}
          <Fade delay={0.3}>
            <section className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              <h2 className="text-[10px] font-mono text-[var(--color-text-faint)] uppercase tracking-widest pt-1">
                Organizational
              </h2>
              <div className="md:col-span-3 space-y-8">
                {/* Role 01 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1 sm:gap-4">
                    <span className="text-[14px] font-bold text-[var(--color-text-primary)]">
                      Coordinator of Logistics
                    </span>
                    <span className="text-[11px] font-mono text-[var(--color-accent)]">
                      2023-2024
                    </span>
                  </div>
                  <p className="text-[13px] text-[var(--color-text-secondary)] mb-2">
                    UKM Ilustrasi Petra
                  </p>
                  <p className="text-[13px] text-[var(--color-text-faint)] leading-relaxed max-w-[50ch]">
                    Led the logistics division in managing equipment procurement
                    and operational setup for student organization activities.
                  </p>
                </div>

                {/* Role 02 */}
                <div className="pt-4 border-t border-[var(--color-border-light)]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-1 sm:gap-4">
                    <span className="text-[14px] font-bold text-[var(--color-text-primary)]">
                      Technical Logistics Staff
                    </span>
                    <span className="text-[11px] font-mono text-[var(--color-text-faint)]">
                      2023-2024
                    </span>
                  </div>
                  <p className="text-[13px] text-[var(--color-text-secondary)] mb-3">
                    Various Committees (WGG, SAN X LKTI, Tutorial UAS)
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Coordinated large-scale asset distribution and venue management.",
                      "Managed technical equipment including AV systems and lighting setups.",
                      "Maintained Standard Operating Procedures (SOP) for cross-departmental equipment lending.",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="text-[12px] text-[var(--color-text-faint)] flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1 h-px bg-[var(--color-border)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </Fade>

          <Line />

          <Fade delay={0.35}>
            <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <h2 className="text-[10px] font-mono text-[var(--color-text-faint)] uppercase tracking-widest pt-1">
                Philosophy
              </h2>
              <div className="md:col-span-3">
                <ul className="space-y-6">
                  {[
                    {
                      id: "01",
                      text: "Clarity over cleverness. No decorative elements without functional purpose.",
                    },
                    {
                      id: "02",
                      text: "Structure before style. Grid systems define the rhythm of the content.",
                    },
                    {
                      id: "03",
                      text: "Documentation as a deliverable. Code clarity is as important as performance.",
                    },
                  ].map((item) => (
                    <li key={item.id} className="flex gap-4 items-start group">
                      <span className="text-[var(--color-accent)] font-mono text-[11px] mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                        {item.id}
                      </span>
                      <p className="text-[14px] md:text-[15px] text-[var(--color-text-body)] leading-relaxed">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </Fade>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 mt-16 lg:mt-0 lg:border-l border-[var(--color-border)] lg:pl-12">
          <Fade delay={0.4} className="lg:sticky lg:top-24 space-y-10">
            <div>
              <h3 className="text-[10px] font-mono text-[var(--color-text-faint)] uppercase tracking-widest mb-6">
                Contact
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "Email",
                    value: siteConfig.email,
                    href: `mailto:${siteConfig.email}`,
                  },
                  {
                    label: "GitHub",
                    value: siteConfig.githubHandle,
                    href: siteConfig.github,
                  },
                  {
                    label: "LinkedIn",
                    value: siteConfig.linkedinHandle,
                    href: siteConfig.linkedin,
                  },
                ].map((link) => (
                  <div key={link.label} className="flex flex-col">
                    <span className="text-[9px] font-mono text-[var(--color-text-ghost)] uppercase mb-1">
                      {link.label}
                    </span>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-underline text-[12px] text-[var(--color-text-body)] hover:text-[var(--color-text-primary)] transition-colors break-all leading-relaxed focus-visible:outline-none focus-visible:text-[var(--color-accent)]"
                    >
                      {link.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[var(--color-border)]">
              <h3 className="text-[10px] font-mono text-[var(--color-text-faint)] uppercase tracking-widest mb-3">
                Status
              </h3>
              <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                Open to internships and entry-level positions for 2026.
              </p>
            </div>

            <div className="pt-8 border-t border-[var(--color-border)]">
              <h3 className="text-[10px] font-mono text-[var(--color-text-faint)] uppercase tracking-widest mb-4">
                Resume
              </h3>
              <a
                href="/resume.pdf"
                download="Timothy-Evan-Resume.pdf"
                className="group inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[var(--color-bg-header)] bg-[var(--color-text-primary)] px-5 py-2.5 hover:bg-[var(--color-accent)] transition-colors duration-300 w-full justify-between focus-visible:outline-none focus-visible:bg-[var(--color-accent)]"
              >
                <span>Download CV</span>
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </div>
            <div className="pt-8 border-t border-[var(--color-border)]">
              <h3 className="text-[10px] font-mono text-[var(--color-text-faint)] uppercase tracking-widest mb-6">
                CAPABILITIES
              </h3>
              <div className="space-y-5">
                {[
                  { skill: "Data Visualization", level: 3 },
                  { skill: "UI / UX Systems", level: 5 },
                  { skill: "React / Next.js", level: 5 },
                ].map((item) => (
                  <div key={item.skill} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[11px] font-mono text-[var(--color-text-body)] group-hover:text-[var(--color-text-primary)] transition-colors">
                        {item.skill}
                      </span>
                      <span className="text-[9px] font-mono text-[var(--color-text-ghost)] tabular-nums">
                        0{item.level}/05
                      </span>
                    </div>
                    {/* The "Bit-Grid" Indicator */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 w-full transition-all duration-500 ${
                            i < item.level
                              ? "bg-[var(--color-accent)] opacity-100 group-hover:bg-[var(--color-text-primary)]"
                              : "bg-[var(--color-border)]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Currently />
          </Fade>
        </aside>
      </div>
    </Container>
  );
}

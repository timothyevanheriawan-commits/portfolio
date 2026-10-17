import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Fade, Line } from "@/components/ui/motion";
import { Currently } from "@/components/ui/currently";
import { siteConfig } from "@/lib/site-config";

// Layout title template renders this as "Timothy Evan / About"
export const metadata: Metadata = {
  title: "About",
  description:
    "Information Systems graduate focused on data and business analysis, with a front-end background. Education, experience and contact.",
};

const sectionLabel =
  "pt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]";
const periodClass = "font-mono text-[11px] text-[var(--color-accent)]";

function RoleHeader({
  title,
  period,
  org,
}: {
  title: string;
  period: string;
  org: string;
}) {
  return (
    <>
      <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <span className="text-[15px] font-bold text-[var(--color-text-primary)]">
          {title}
        </span>
        <span className={periodClass}>{period}</span>
      </div>
      <p className="text-[13px] text-[var(--color-text-secondary)]">{org}</p>
    </>
  );
}

// Reordered so the analysis work leads; wording is unchanged from the original.
const seoBullets = [
  "Created SEO-driven content, conducted keyword research (Semrush), and delivered performance reports.",
  "Executed content plans, backlink strategies, product uploads, and social media posts to boost brand presence.",
  "Designed and prototyped donation platform pages; built responsive frontends with Figma, Tailwind, and Laravel Blade integrated to backend.",
  "Developed and maintained WordPress sites for multiple clients, improving layouts and performance.",
  "Delivered special projects including an end-to-end Donation Website and Vrtimes content development.",
];

const logisticsBullets = [
  "Coordinated large-scale asset distribution and venue management.",
  "Managed technical equipment including AV systems and lighting setups.",
  "Maintained Standard Operating Procedures (SOP) for cross-departmental equipment lending.",
];

const approach = [
  "Clarity over cleverness. No decorative elements without functional purpose.",
  "Show the assumptions. Results should come with the limits and choices behind them.",
  "Documentation as a deliverable. Code clarity is as important as performance.",
];

const capabilities = [
  {
    group: "Data & analysis",
    items:
      "SQL, Python, Streamlit, Plotly, RFM / K-Means segmentation, NLP (review analysis)",
  },
  {
    group: "Frontend & design",
    items: "React / Next.js, TypeScript, Tailwind CSS, Figma",
  },
  {
    group: "SEO & CMS",
    items: "Semrush, WordPress, Laravel Blade",
  },
];

const contact = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    label: "GitHub",
    value: siteConfig.githubHandle,
    href: siteConfig.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: siteConfig.linkedinHandle,
    href: siteConfig.linkedin,
    external: true,
  },
];

export default function AboutPage() {
  return (
    <Container className="py-16 md:py-24">
      <header className="mb-14">
        <h1
          className="mb-4 text-[32px] font-black tracking-[-0.04em] text-[var(--color-text-primary)] md:text-[48px]"
          style={{ lineHeight: 0.92 }}
        >
          About
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
        {/* Main column */}
        <div className="space-y-12 md:space-y-16 lg:col-span-8 lg:pr-16">
          <Fade delay={0.1}>
            <section className="max-w-[52ch]">
              <p className="mb-6 text-[15px] leading-[1.7] text-[var(--color-text-body)] md:text-[16px]">
                Information Systems graduate from Petra Christian University,
                focused on data and business analysis with a front-end
                background. I build analysis tools and dashboards that make
                findings easy to check and act on.
              </p>
              <p className="mb-6 text-[15px] leading-[1.7] text-[var(--color-text-body)] md:text-[16px]">
                I learned by building, not tutorials. Implementation first,
                abstraction second.
              </p>
            </section>
          </Fade>

          <Line />

          <Fade delay={0.2}>
            <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <h2 className={sectionLabel}>Education</h2>
              <div className="md:col-span-3">
                <RoleHeader
                  title="Petra Christian University"
                  period="2022–2026"
                  org="Bachelor of Science in Information Systems"
                />
              </div>
            </section>
          </Fade>

          <Line />

          <Fade delay={0.25}>
            <section className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">
              <h2 className={sectionLabel}>Experience</h2>
              <div className="md:col-span-3">
                <RoleHeader
                  title="Search Engine Optimization Analyst"
                  period="2025"
                  org="Deus Code · Internship"
                />
                <ul className="mt-4 space-y-3">
                  {seoBullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[13px] leading-relaxed text-[var(--color-text-secondary)]"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </Fade>

          <Line />

          <Fade delay={0.3}>
            <section className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">
              <h2 className={sectionLabel}>Organizations</h2>
              <div className="space-y-8 md:col-span-3">
                <div>
                  <RoleHeader
                    title="Coordinator of Logistics"
                    period="2023–2024"
                    org="UKM Ilustrasi Petra"
                  />
                  <p className="mt-2 max-w-[50ch] text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                    Led the logistics division in managing equipment procurement
                    and operational setup for student organization activities.
                  </p>
                </div>

                <div className="border-t border-[var(--color-border-light)] pt-6">
                  <RoleHeader
                    title="Technical Logistics Staff"
                    period="2023–2024"
                    org="Various Committees (WGG, SAN X LKTI, Tutorial UAS)"
                  />
                  <ul className="mt-3 space-y-2">
                    {logisticsBullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[13px] leading-relaxed text-[var(--color-text-secondary)]"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.7em] h-px w-2 shrink-0 bg-[var(--color-border-dark)]"
                        />
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
            <section className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <h2 className={sectionLabel}>Approach</h2>
              <ul className="space-y-5 md:col-span-3">
                {approach.map((text) => (
                  <li key={text} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-[0.65em] h-1 w-1 shrink-0 bg-[var(--color-accent)]"
                    />
                    <p className="text-[14px] leading-relaxed text-[var(--color-text-body)] md:text-[15px]">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </Fade>
        </div>

        {/* Sidebar */}
        <aside className="mt-16 border-[var(--color-border)] lg:col-span-4 lg:mt-0 lg:border-l lg:pl-12">
          <Fade delay={0.4} className="space-y-10 lg:sticky lg:top-24">
            {/* Resume first: it's what a recruiter came for */}
            <div>
              <a
                href="/resume.pdf"
                download="Timothy-Evan-Resume.pdf"
                className="group inline-flex w-full items-center justify-between gap-3 bg-[var(--color-text-primary)] px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-bg-header)] transition-colors duration-300 hover:bg-[var(--color-accent)] focus-visible:bg-[var(--color-accent)] focus-visible:outline-none"
              >
                <span>Download CV</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </a>
              <p className="mt-4 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                {siteConfig.status}
              </p>
            </div>

            <div className="border-t border-[var(--color-border)] pt-8">
              <h2 className={`${sectionLabel} mb-5`}>Contact</h2>
              <div className="flex flex-col gap-4">
                {contact.map((c) => (
                  <div key={c.label} className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                      {c.label}
                    </span>
                    <a
                      href={c.href}
                      {...(c.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="hover-underline break-all text-[13px] leading-relaxed text-[var(--color-text-body)] transition-colors hover:text-[var(--color-text-primary)] focus-visible:text-[var(--color-accent)] focus-visible:outline-none"
                    >
                      {c.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[var(--color-border)] pt-8">
              <h2 className={`${sectionLabel} mb-5`}>Capabilities</h2>
              <dl className="space-y-4">
                {capabilities.map((c) => (
                  <div key={c.group}>
                    <dt className="mb-1 text-[13px] font-medium text-[var(--color-text-primary)]">
                      {c.group}
                    </dt>
                    <dd className="text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                      {c.items}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Currently />
          </Fade>
        </aside>
      </div>
    </Container>
  );
}

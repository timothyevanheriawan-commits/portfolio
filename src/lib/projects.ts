import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "auraflow",
    title: "AuraFlow",
    description:
      "A personal finance dashboard built for users who prefer manual control, speed, and local reasoning over automated bank integrations.",
    objective:
      "Replace fragmented spreadsheets with a single, fast interface for tracking net worth and cash flow without third-party data dependencies.",
    year: "2026",
    role: "Full-Stack Developer (Product-Led Project)",
    stack: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://auraflow-os.vercel.app",
    screenshots: [
      {
        src: "/projects/auraflow/auraflow-1-mockup.png",
        alt: "AuraFlow overview dashboard showing net worth summary and recent activity",
      },
      {
        src: "/projects/auraflow/auraflow-2-mockup.png",
        alt: "AuraFlow transaction history with date-grouped ledger and export tools",
      },
    ],
    context: `AuraFlow originated from frustration with consumer finance apps that obscure data behind automation and opaque sync behavior. While spreadsheets offer control, they break down under frequent updates and multi-account tracking.

The project targets users who prefer explicit data entry and predictable calculations, valuing transparency and responsiveness over convenience features.`,
    architecture: `The application is built using Next.js App Router with a server-first approach. Financial records are protected using Supabase Row Level Security, ensuring that all data access rules are enforced at the database layer rather than the client.

State changes are handled via Server Actions combined with optimistic updates, allowing the interface to respond instantly while maintaining consistency with the backend. Currency formatting and date-based calculations are centralized in a shared utility layer to avoid duplicated logic.`,
    tradeoffs: `A deliberate decision was made to avoid bank API integrations. While this removes automation, it eliminates dependency on third-party aggregators and avoids sync errors, data leakage risks, and API volatility.

Visually, the interface avoids translucent or layered effects in favor of solid surfaces and clear borders. This improves numerical readability and prevents contrast issues when switching between light and dark modes.`,
    outcome: `The resulting MVP includes real-time net worth summaries, a date-grouped transaction ledger, and data export tools for CSV and PDF formats.`,
    reflection: `Developing AuraFlow forced me to reconcile my desire for technical complexity with the user's need for absolute reliability. I learned that in financial software, the most "sophisticated" feature is often just a calculation the user can actually verify themselves.`,
    featured: false,
  },
  {
    slug: "vertex",
    title: "Vertex",
    description:
      "An internal inventory dashboard designed to surface stock risk and demand trends without relying on black-box forecasting tools.",
    objective:
      "Provide decision-ready inventory insights while keeping forecasting logic transparent and auditable.",
    year: "2026",
    role: "Full-Stack Developer (Analytics Dashboard)",
    stack: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "Recharts",
      "Tailwind CSS",
    ],
    liveUrl: "https://vertex-inventory.vercel.app",
    screenshots: [
      {
        src: "/projects/vertex/vertex-1-mockup.png",
        alt: "Vertex command center dashboard showing risk analysis, priority actions, and category split",
      },
      {
        src: "/projects/vertex/vertex-2-mockup.png",
        alt: "Vertex inventory management table with stock health indicators and low-stock alerts",
      },
    ],
    context: `Vertex was built to address a common gap in small to mid-scale inventory systems: visibility without interpretability. Many tools present forecasts but obscure how those numbers are derived, making it difficult for operators to trust or adjust decisions.

The dashboard is aimed at users who want to reason about inventory behavior directly, using historical signals rather than fully automated predictions.`,
    architecture: `Inventory, sales, and restock events are modeled as separate but related entities, allowing time-series analysis without denormalizing core tables. Aggregations are computed server-side to keep client components focused on presentation rather than business logic.

Chart components are intentionally stateless, receiving pre-shaped datasets to avoid coupling visualization concerns with data derivation.`,
    tradeoffs: `Rather than implementing advanced forecasting algorithms, the system focuses on rolling averages and trend deltas. This limits predictive depth but preserves explainability and reduces the risk of misleading outputs.

The UI favors dense information layouts over whitespace-heavy designs. This increases cognitive load slightly but allows operators to compare categories and time ranges without excessive navigation.`,
    outcome: `The MVP supports category-level stock distribution, low-stock alerts based on configurable thresholds, and historical demand visualization across selectable time windows.`,
    reflection: `Vertex was a lesson in data honesty. I realized that a dashboard's utility isn't measured by how many charts it has, but by how quickly an operator can spot an anomaly. Centralizing the math on the server wasn't just a performance choice; it was about ensuring one single version of the truth.`,
    featured: false,
  },
  {
    slug: "bca-product-intelligence",
    title: "BCA Product Intelligence",
    description:
      "A review analytics dashboard that extracts recurring user pain points from Google Play feedback for the BCA Mobile app.",
    objective:
      "Transform unstructured app reviews into actionable product insights with minimal manual analysis.",
    year: "2025",
    role: "Data Analyst & Dashboard Developer",
    stack: ["Python", "Streamlit", "Pandas", "NLTK", "Plotly"],
    liveUrl: "https://bca-mobile-dashboard.streamlit.app",
    screenshots: [
      {
        src: "/projects/bca/bca-1-mockup.png",
        alt: "BCA Product Intelligence dashboard overview with complaint metrics and topic filters",
      },
      {
        src: "/projects/bca/bca-2-mockup.png",
        alt: "BCA sentiment trend chart showing complaint volume over time across categories",
      },
    ],
    context: `User reviews often contain high-signal feedback, but their volume and inconsistency make manual analysis impractical. This project explores how lightweight NLP techniques can surface dominant themes without complex machine learning pipelines.

The dashboard is designed for product and UX teams who need fast directional insight rather than statistically exhaustive sentiment models.`,
    architecture: `Reviews are preprocessed using token normalization and stopword removal before being grouped by keyword frequency and sentiment polarity. Aggregations are cached to ensure responsive interaction despite Streamlit's rerun model.

Visualizations are derived directly from transformed datasets, avoiding post-processing in the UI layer.`,
    tradeoffs: `Advanced transformer-based sentiment models were intentionally avoided. While they offer higher accuracy, they introduce opacity and heavier infrastructure requirements that are misaligned with exploratory analysis use cases.

The interface prioritizes clarity over customization, limiting user controls to prevent misinterpretation of weak signals.`,
    outcome: `The final dashboard highlights dominant complaint categories, sentiment distribution over time, and representative review excerpts for qualitative follow-up.`,
    reflection: `This project taught me that "perfect is the enemy of good" is especially true in analytics. A simple keyword frequency map delivered more immediate value to the BCA team than a complex sentiment model ever did, simply because they could actually explain it to their stakeholders.`,
    featured: false,
  },
  {
    slug: "kurofest",
    title: "KuroFest",
    description:
      "A static event website designed to present information for a fictional anime convention.",
    objective:
      "Practice translating a creative brief into a cohesive UI system, focusing on visual hierarchy and thematic consistency.",
    year: "2026",
    role: "UI/UX Developer",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://kurofest.vercel.app",
    screenshots: [
      {
        src: "/projects/kurofest/kurofest-1-mockup.png",
        alt: "KuroFest hero section with large kanji typography and event branding",
      },
      {
        src: "/projects/kurofest/kurofest-2-mockup.png",
        alt: "KuroFest special guests section with editorial card layout",
      },
    ],
    context: `KuroFest was built as a portfolio-focused project rather than a functional production system. The primary goals were to practice translating a creative brief into a UI system and to explore visual hierarchy, layout, and thematic consistency.

The project was intentionally constrained to be read-only, with no backend, database, or dynamic functionality.`,
    architecture: `KuroFest is a frontend-only web application built with Next.js. The system consists of static pages, structured sections for event information, and reusable UI components aligned with a defined visual theme.

No data persistence, authentication, or server-side logic is present.`,
    tradeoffs: `No database or backend integration. No interactive or transactional features. Content is static and informational only.

These limitations were intentional and aligned with the project goal of demonstrating UI design skill rather than application logic.

The central design decision was to strictly adhere to predefined UI criteria derived from the event theme. All layout, typography, and color choices were evaluated against this criteria to maintain consistency across the site.`,
    outcome: `Deployed as a live portfolio piece demonstrating UI design skill and strict adherence to a predefined visual criteria.`,
    reflection: `This project reinforced the importance of analyzing and understanding a brief before implementation. Clear interpretation and planning significantly reduce rework during the design and development process.`,
    featured: false,
  },
  {
    slug: "recipeshare",
    title: "RecipeShare",
    description:
      "A web platform that allows users to browse Indonesian recipes and upload their own recipes for public viewing.",
    objective:
      "Build a functional full-stack web application as a group final project, emphasizing frontend consistency and client-side implementation within course constraints.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://recipeshare-project.vercel.app",
    screenshots: [
      {
        src: "/projects/recipeshare/recipeshare-1-mockup.png",
        alt: "RecipeShare hero page with Indonesian food photography and navigation",
      },
      {
        src: "/projects/recipeshare/recipeshare-2-mockup.png",
        alt: "RecipeShare browse page with recipe grid, category filters, and search",
      },
    ],
    context: `RecipeShare was developed as a group final project for a Client-Side Programming course. The primary constraints were focus on frontend implementation, limited project timeline, and no requirement for role-based access control or administration features.

The project scope emphasized client-side functionality and UI consistency rather than backend complexity.`,
    architecture: `The application is a frontend-driven web system built with Next.js. Core functionality includes rendering a list of user-submitted recipes, client-side forms for recipe submission, and basic data persistence via an external backend service.

The system follows a simple read-and-write flow without moderation layers: users can read all recipes, users can submit new recipes, with no intermediate validation beyond basic input handling.`,
    tradeoffs: `No moderation workflow was implemented. All submitted content is treated equally, with no approval process.
These tradeoffs were accepted to keep the project aligned with course scope and time constraints.

The most important design decision was establishing clear UI criteria for typography and color usage early in development. This decision aimed to make the interface feel consistent and natural, despite being a group project with multiple contributors.`,
    outcome: `Successfully completed and deployed as a functional web application. Defining visual rules upfront reduced UI fragmentation across multiple contributors.`,
    reflection: `RecipeShare was my first real experience with the "messy middle" of group frontend work. It proved that while code style guides are helpful, a shared visual language is what actually prevents a project from looking like a patchwork quilt by the final week.`,
    featured: false,
  },
  {
    slug: "atlas-prms",
    title: "Atlas",
    description:
      "A personal records management system disguised as enterprise software, built to manage original character headcanons with the density and bureaucracy of real institutional tools.",
    objective:
      "Explore how far a personal creative tool can be pushed to feel like software that has existed for years inside a company, rather than something built for a single hobbyist.",
    year: "2026",
    role: "Full-Stack Developer (Personal Project)",
    stack: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Zustand",
      "TanStack Table",
      "Tiptap",
    ],
    liveUrl: "https://atlas-prms.vercel.app/",
    screenshots: [
      {
        src: "/projects/atlas/atlas-1-mockup.png",
        alt: "Atlas PRMS workspace showing sidebar navigation, record list, and dense enterprise layout",
      },
    ],
    context: `Atlas PRMS started as a personal tool for organizing original character headcanons, but the more interesting problem turned out to be disguise, not data modeling. Most personal organization tools look like personal organization tools: friendly, colorful, forgiving. Atlas set out to look like something else entirely  internal software a company has maintained and patched for years.

The subject matter is deliberately playful; the execution is not. Fixed modules (General Information, Behavioral Analysis, Timeline, Preferences, Associations, Attachments, Internal Notes) replace user-created categories, reinforcing the idea that this is a system with a schema, not a notebook with a template.`,
    architecture: `The application is built on Next.js and Supabase, with authentication gating a separate protected workspace from a public marketing surface. A desktop-inspired workspace  sidebar, toolbar, dense record list, and multi-tab editor  forms the core of the product, backed by a Zustand store for tab and editor state.

Record content uses Tiptap for structured rich text, while TanStack Table drives the list and log views where density and sortability matter more than visual flourish. Activity logs were deliberately redesigned away from a chat-style feed toward a tabular, timestamped audit-log format, since chat bubbles read as consumer software no matter how the rest of the UI is styled.`,
    tradeoffs: `The public landing page was intentionally deprioritized relative to the internal workspace, which created a visible inconsistency: the workspace reads as enterprise software, while the landing page still resembles a modern SaaS marketing site. This was an acceptable tradeoff during the build phase, since the workspace is what sells the concept, but it's flagged as the clearest remaining gap.

Atlas also currently lacks the institutional "paper trail" that makes internal software feel aged rather than freshly built  release notes, a version archive, an administrator manual, legacy terminology. Building the functional core first was prioritized over backfilling a fictional product history, on the reasoning that credibility work only matters once the underlying system is solid.`,
    outcome: `The result is a fully deployed, authenticated application with a convincing desktop-style workspace, structured record management (create/edit/delete/organize), a shared component library (tables, forms, toolbars, settings, confirmation dialogs), and enterprise-style activity logging.`,
    reflection: `Atlas taught me that "enterprise feel" isn't a color palette or a font choice  it's bureaucracy simulated convincingly. The workspace convinced people the moment the activity log stopped looking like a chat feed and started looking like an audit trail. The lesson wasn't about UI polish; it was about which details signal "this software has a history" versus "this software was built yesterday."`,
    featured: false,
  },
  {
    slug: "10-3-1",
    title: "10-3-1",
    description:
      "A daily math puzzle game where players combine three number tiles in sequence to hit a target value, with order and operator rules that reward logical deduction over arithmetic speed.",
    objective:
      "Design a small, replayable daily puzzle with a rule set simple enough to learn in seconds but deep enough to require genuine combinatorial thinking to fully solve.",
    year: "2026",
    role: "Solo Developer & Designer",
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    liveUrl: "https://10-3-1-game.vercel.app",
    screenshots: [
      {
        src: "/projects/10-3-1/10-3-1-1-mockup.png",
        alt: "10-3-1 gameplay screen showing target number and selectable tiles",
      },
    ],
    context: `10-3-1 grew out of an interest in constraint-based puzzle mechanics: games like Wordle succeed not because the mechanic is complex, but because the rule set is small enough to hold entirely in your head while still producing genuine difficulty.

The core twist  that the first tile's operator is discarded and order changes the outcome  turns a simple arithmetic game into a small combinatorics problem, without requiring the player to understand combinatorics to enjoy it.`,
    architecture: `The game is built as a lightweight Next.js application with all puzzle logic  tile generation, operator evaluation with standard order of operations, and solution-space enumeration  computed client-side. A daily puzzle mode and a random mode share the same underlying combination engine, with statistics (streaks, win rate, average hints) tracked locally per player.

The visual language leans on a restrained East Asian typographic motif, pairing kanji numerals with a muted paper-like background to distinguish it from typical bright, gamified puzzle UIs.`,
    tradeoffs: `The game deliberately requires players to find every valid combination to register a full win, rather than stopping at the first correct answer. This raises the difficulty and average session length, but was chosen because "solve it once and move on" undersells the puzzle's actual depth.

No backend or account system was built for this project; all progress and stats are local to the device. This keeps the game lightweight and fast to load, at the cost of cross-device continuity.`,
    outcome: `The finished game supports daily and random puzzle modes, in-game hints, a solutions viewer, persistent stats tracking, and a shareable result summary similar in spirit to other daily puzzle games.`,
    reflection: `10-3-1 was a good reminder that constraint is a design tool, not a limitation. The entire game is three tiles and four operators, but requiring players to find every solution  not just one  was the single decision that turned a quick diversion into something people actually return to daily.`,
    featured: false,
  },
  {
    slug: "kopitiam-tjoa",
    title: "Kopitiam Tjoa",
    description:
      "A heritage coffee shop website for a fictional Peranakan kopitiam, built with a full ordering flow, live business-hours status, and a custom Supabase backend.",
    objective:
      "Design and build a small but production-grade full-stack site, not just a static mockup, where menu data, order state, and operating status are all backed by a real database rather than hardcoded content.",
    year: "2026",
    role: "Full-Stack Developer (Personal Project)",
    stack: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Supabase",
      "Tailwind CSS v4",
      "Zustand",
    ],
    liveUrl: "https://kopitiam-tjoa.vercel.app",
    screenshots: [
      {
        src: "/projects/kopitiam/kopitiam-1-mockup.png",
        alt: "Kopitiam Tjoa homepage with heritage signage graphic and live business hours status",
      },
      {
        src: "/projects/kopitiam/kopitiam-2-mockup.png",
        alt: "Kopitiam Tjoa order confirmation and live tracking page showing order receipt, step-by-step progress timeline, and itemized receipt break down",
      },
    ],
    context: `Kopitiam Tjoa is a heritage coffee shop concept rooted in Peranakan visual language, the kind of shop that has run on the same recipes and the same hand-painted sign since 1968. The project began as a static HTML mockup to lock down the visual identity, then was rebuilt as a full Next.js and Supabase application once the design direction felt right.

The goal was to avoid the common portfolio shortcut of a beautiful frontend backed by placeholder data. Menu items, order records, and business hours all live in a real database with real constraints, not a hardcoded array pretending to be one.`,
    architecture: `The application is built on Next.js App Router with Supabase as the backend, using Row Level Security policies to control data access rather than relying on client-side checks. Menu data is fetched server-side rather than shipped as static content, and cart state is managed with Zustand.

A consistent visual system carries the Peranakan-inspired palette (heritage green, signage red, warm ivory) across every component, keeping color and spacing decisions centralized instead of scattered per component. Business hours and open/closed status are computed from a shared settings table, with a manual override field so a real shop owner could mark an early closure without touching code.`,
    tradeoffs: `Supabase's server timezone runs in UTC, while the shop operates on WIB. Early in development, open/closed status was computed using the server's local time directly, which meant the site could report itself open or closed several hours off from reality. This was traced to raw date reads inside the status logic and fixed by explicitly converting all day and time calculations to WIB before comparison, a reminder that code working correctly on a local machine doesn't guarantee correct behavior once a server actually runs in a different timezone than its users.

The project also deliberately avoids third-party ordering or payment integrations, keeping the order flow self-contained. This limits real-world usability but keeps the scope focused on demonstrating full-stack data modeling rather than integrating external services.`,
    outcome: `The site currently supports a live menu backed by Supabase, a working cart and order flow, and real-time business-hours status. Development is ongoing, with ordering, rate limiting, and UI polish passes still being refined.`,
    reflection: `Kopitiam Tjoa has been a lesson in how many small details a real full-stack product actually has: timezone handling, database permissions, rate limiting, that a static mockup never forces you to confront. It's also taught me to verify behavior in the actual running environment rather than trusting a clean TypeScript compile as proof that something works.`,
    featured: true,
  },
  {
    slug: "ravenstack-saas-analytics",
    title: "RavenStack",
    description:
      "A SQL-first SaaS analytics project that audits a synthetic five-table dataset for structural flaws before computing any metric, turning three data-quality problems into part of the analytical story rather than hiding them.",
    objective:
      "Demonstrate relational data modeling and defensible metric design by treating data auditing as a first step, not a footnote, and reporting a null result plainly when the data doesn't support a stronger claim.",
    year: "2026",
    role: "Data Analyst (SQL-First Analytics)",
    stack: ["PostgreSQL", "SQL", "Python", "Streamlit", "Plotly"],
    liveUrl: "https://ravenstack-saas-analytics.streamlit.app/",
    screenshots: [
      {
        src: "/projects/ravenstack/ravenstack-1-cover.png",
        alt: "RavenStack editorial cover illustration: right-censored retention curve with a corrected ceiling bracket",
      },
    ],
    context: `RavenStack started from a simple discipline check: most analytics portfolios apply standard transformations to already-clean data and call it a day. This project audits a synthetic five-table SaaS dataset first, and lets what the audit finds determine what can honestly be computed afterward.

Three problems surfaced immediately  concurrent open subscriptions with no sequential plan history, a churn flag that conflicts with the churn events table for 62% of accounts, and feature-usage timestamps that mostly fall outside their linked subscription window. Each one changed what metric could be reported, rather than being smoothed over in preprocessing.`,
    architecture: `Eleven sequential SQL files form the analytical engine, run against PostgreSQL: sixteen diagnostic checks first, a shared calendar-spine view, then eight business analyses covering acquisition, MRR, trial conversion, cohort retention, feature engagement, churn, and support. A dedicated summary file cross-validates results across the previous ten.

Python is presentation-only  it reads the SQL outputs from CSV and renders charts and the Streamlit dashboard. No analytical logic lives outside SQL, which keeps the reasoning inspectable in one place.`,
    tradeoffs: `The most consequential decision was refusing to compute a single "customer MRR" number. Because accounts hold 5-14 concurrently open subscription records with no way to identify a current plan, any per-customer MRR figure would be fabricated precision. The project instead reports "Aggregate Subscription-Record MRR" under a deliberately unwieldy name, forcing the distinction to stay visible instead of getting lost in a chart title.

A cohort retention bug was caught mid-build: an unadjusted retention curve showed 98.9% at six months, which is not attrition  it's a data-model artifact caused by roughly 90% of subscription records never getting an end date. The fix was a right-censoring correction and explicit labeling as "Observed Account Subscription Retention," not a real churn signal.`,
    outcome: `The finished project includes sixteen documented data-quality checks, eight SQL-driven business analyses, a dedicated audit trail file, and a four-section Streamlit dashboard. Five findings are written up with an explicit "what the data shows / what it suggests / caveat" structure, including one genuine null result (support activity does not meaningfully predict churn) reported as plainly as the positive findings.`,
    reflection: `RavenStack was a lesson in resisting the pull toward a clean headline number. It would have been easy to report a single MRR figure or a 99% retention rate and move on, both are technically calculable. The project only became honest once I stopped and asked what those numbers actually meant given how the data was structured, and that discipline is now something I check for by default before trusting any aggregate.`,
    featured: false,
  },
  {
    slug: "bca-mobile-customer-voice",
    title: "BCA Mobile Customer Voice",
    description:
      "A rule-based issue-prioritization system that turns 5,000 BCA Mobile Google Play reviews into an auditable evidence ledger  issue frequency, trend, and validation status, not a black-box sentiment score.",
    objective:
      "Answer which customer problems deserve attention first, while keeping the confidence behind that ranking visible and inspectable rather than collapsed into a single opaque score.",
    year: "2026",
    role: "Data Analyst & Dashboard Developer",
    stack: ["Python", "Pandas", "Streamlit", "Plotly", "scikit-learn"],
    liveUrl: "https://bca-mobile-customer-voice.streamlit.app",
    screenshots: [
      {
        src: "/projects/bca-voice/bca-voice-1-cover.png",
        alt: "BCA Mobile Customer Voice editorial cover illustration: priority ledger bars with validation status markers",
      },
    ],
    context: `This project revisits an earlier BCA Mobile review-analysis attempt with a stricter standard: a rating alone doesn't tell a product team what went wrong, and a sentiment score alone doesn't tell them what to fix. The rebuild is built around a specific discipline  every issue count has to trace back to real review text, and every category's reliability has to be stated, not assumed.

Reviews are classified with explicit regex rules across ten categories rather than an ML text classifier, deliberately trading some recall for the ability to read a rule and understand exactly why a review matched it.`,
    architecture: `A four-page Streamlit dashboard (Overview & Priority, Trends, Issue Explorer, Methodology) sits on top of a modular pipeline: cleaning and audit, multi-label rule-based classification, issue-frequency and monthly-trend calculation, then a priority-tiering layer that reads directly from manually annotated validation samples.

Priority tiers are generated from explicit, readable rules  sufficiently frequent and either financially consequential or trending upward  rather than a single weighted composite score, so the reasoning behind a "High" label stays visible.`,
    tradeoffs: `The project intentionally separates validation status from priority. A category can be flagged High priority by frequency and financial impact while still being visibly marked unvalidated if its precision sample hasn't been annotated yet  the dashboard would rather show that uncertainty than quietly present an unverified number as fact.

Trend direction is calculated as a first-half-vs-second-half change in monthly issue share, deliberately avoiding a fitted regression model, since the observation window (May-August 2026) is short and some categories have thin sample sizes. This sacrifices statistical sophistication for a comparison a stakeholder can reproduce by hand.`,
    outcome: `The result classifies 5,000 reviews across ten issue categories, tracks monthly trend direction, and ranks issues into Critical/High/Medium/Low tiers with validation status shown alongside each one. The latest classifier revision measurably reduced false positives  App Performance mentions dropped from 688 to 641 and Unexplained Deduction from 174 to 95  through targeted rule fixes rather than broadening the net.`,
    reflection: `The most useful discipline this project reinforced was leaving a number unvalidated when it actually was, instead of quietly rounding up to "probably fine." Two fresh 30-row samples were left intentionally unannotated after the latest classifier change, and the dashboard treats them as unvalidated rather than inventing a precision figure  that decision felt small while building it, but it's the difference between a dashboard people can trust and one that just looks trustworthy.`,
    featured: true,
  },
  {
    slug: "customer-retention-analytics",
    title: "Customer Retention Analytics",
    description:
      "An end-to-end retention analysis on a year of UK e-commerce transactions that doesn't stop at building an at-risk customer flag  it validates that flag against held-out data before recommending anyone act on it.",
    objective:
      "Determine which customers are worth proactive retention spend, and, critically, measure whether the at-risk signal used to make that call actually predicts anything.",
    year: "2026",
    role: "Data Analyst (Retention & Lifecycle Analytics)",
    stack: ["Python", "pandas", "scikit-learn", "Streamlit", "Plotly", "SQL"],
    liveUrl: "https://customer-retention-analytics-project.streamlit.app/",
    screenshots: [
      {
        src: "/projects/customer-retention/customer-retention-1-cover.png",
        alt: "Customer Retention Analytics editorial cover illustration: fading cohort retention heatmap grid",
      },
    ],
    context: `Most "at-risk customer" analyses stop the moment the flag is built. This project, built on a year of UK online retail transaction history, treats that as the halfway point: after deriving an inactivity threshold and flagging at-risk customers, it holds out the last 5.5 months of data, re-derives the threshold using only earlier information, and checks what those flagged customers actually did next.

The inactivity threshold itself (66 days, three times the median purchase interval) was chosen by comparing it against three alternative candidates side by side, not adopted as the first number that looked reasonable.`,
    architecture: `Seven notebooks build sequentially  data audit, cleaning and feature engineering, customer-level aggregation, retention-interval analysis, cohort analysis with proper censoring masking, RFM/K-Means segmentation, and a final temporal-validation notebook. Each src/ module (cleaning, features, retention, segmentation) can be run standalone as a consistency check against its own notebook's output.

A four-page Streamlit dashboard reads from pre-computed Parquet files rather than re-running the pipeline per page load, moving from an executive overview through retention, segments, and a final actionable opportunities list.`,
    tradeoffs: `The headline recommendation  a list of 159 high-value at-risk customers worth individual outreach  is reported alongside its own precision: 30.4% on the high-value subset, meaning roughly seven in ten flagged customers actually would have come back on their own. Rather than hiding that number to make the recommendation look stronger, it's framed explicitly as "worth a proactive check-in," not "confirmed lost revenue."

The inactivity threshold is applied uniformly across the customer base, even though a monthly bulk buyer and an occasional shopper behave very differently  a per-customer threshold would be more accurate but was judged out of scope for this pass.`,
    outcome: `The project ships a full lifecycle segmentation (Champions, Developing, New, Low-Engagement/Dormant), a temporally validated at-risk flag (46.9% precision / 65.0% recall overall), and a prioritized action table ranked by expected return on a dollar of retention effort rather than by segment size, plus a working four-page dashboard on top of it.`,
    reflection: `Building the validation step after the flag was already "done" was the most valuable part of this project. It would have been easy to ship the 159-customer at-risk list as a confident recommendation; validating it against held-out data instead surfaced a 30.4% precision rate that completely changes how that list should be used. I've started treating "did I check this against data the model never saw" as a default question now, not a nice-to-have.`,
    featured: false,
  },
  {
    slug: "steam-games-analysis",
    title: "Steam Full Catalog Analysis",
    description:
      "An exploratory analysis of roughly 126,000 Steam catalog titles that reframes the goal from 'what's the best game' to 'which patterns in a catalog this size are strong enough to actually trust.'",
    objective:
      "Surface pricing, review-sentiment, and publisher-concentration patterns across the full Steam catalog, with each finding scoped and caveated individually rather than presented with uniform confidence.",
    year: "2026",
    role: "Data Analyst & Dashboard Developer",
    stack: ["Python", "pandas", "matplotlib", "Streamlit"],
    liveUrl: "https://steam-games-analysis.streamlit.app/",
    screenshots: [
      {
        src: "/projects/steam-analysis/steam-analysis-1-cover.png",
        alt: "Steam Full Catalog Analysis editorial cover illustration: price vs review score scatter with a circled hidden gem",
      },
    ],
    context: `At 126,000 titles, most rows in this dataset are low-engagement or delisted, so the useful question isn't "what's the best game," it's which patterns hold up at that scale. A real data-quality bug was found early: a lost comma in the source file's header row merges two columns and silently shifts every column after it out of position, which had been causing game names to display as release dates. The fix is applied consistently across the notebook, dashboard, and a dedicated trim script.`,
    architecture: `A single notebook runs thirteen sequential checks (Q0-Q12): schema verification, missingness and duplicate checks, review-ratio derivation, Steam Deck compatibility, review-score distribution, estimated-owners parsing, genre analysis, a dedicated data-quality pass, pricing analysis, release trends, publisher concentration, a "hidden gems" search, and genre popularity over time.

Every section that depends on a column that might not exist in a given export checks for it first and skips cleanly instead of crashing, making the notebook portable across slightly different versions of the source dataset. A trim script reduces the roughly 126k-row raw export down to the columns actually used, to stay under GitHub's file-size limit.`,
    tradeoffs: `The closest thing to a headline finding  price has only a weak relationship with review score (Spearman-style correlation around -0.17)  is reported without a formal significance test and explicitly labeled directional rather than confirmed. Estimated owners is reported as a parsed range midpoint, useful for ranking but not for a precise ownership claim, and genre is taken as first-listed only, which may not reflect a multi-genre title's true primary genre.

These caveats were kept rather than smoothed over, since a catalog this size makes it easy to imply more certainty than the underlying data supports.`,
    outcome: `The result is a thirteen-section exploratory notebook plus an interactive Streamlit dashboard covering pricing, review sentiment, publisher concentration, and release trends across the full catalog, with a documented data-quality fix that keeps every downstream number consistent.`,
    reflection: `This project pushed back against my own instinct to lead with a single "headline finding." At this catalog scale, almost every clean-looking pattern has an asterisk, and forcing myself to write that asterisk into each section, rather than into a buried limitations list, made the analysis noticeably more honest, even if less quotable.`,
    featured: false,
  },
  {
    slug: "transjakarta-analysis",
    title: "Transjakarta Demand & Service Analysis",
    description:
      "A transit-analytics project examining passenger demand and service access across the Transjakarta bus network, built on synthetic transaction data layered over Transjakarta's real corridor and stop structure.",
    objective:
      "Analyze demand patterns and flag possible capacity or service-access issues across the Transjakarta network, while being explicit about which findings the data can support and which need real operational data to confirm.",
    year: "2026",
    role: "Data Analyst (Transit & Urban Mobility Analytics)",
    stack: ["Python", "DuckDB", "pandas", "matplotlib"],
    liveUrl: "https://transjakarta-analysis.streamlit.app/",
    screenshots: [
      {
        src: "/projects/transjakarta/transjakarta-1-cover.png",
        alt: "Transjakarta Demand & Service Analysis editorial cover illustration: corridor and stop diagram with a flagged missing tap-out",
      },
    ],
    context: `The dataset behind this project uses Transjakarta's real corridor, stop, and route structure, but the individual passenger transactions were generated with the Faker library rather than sourced from real ridership records. That distinction is stated upfront rather than implied, and it reframes the project's purpose: demonstrating the analytical process  cleaning, exploring, and turning findings into recommendations  rather than reporting real Transjakarta ridership numbers.`,
    architecture: `37,900 transaction records are loaded with DuckDB's read_csv_auto for fast SQL-based exploration, then cross-checked with pandas. The notebook works through twelve structured questions covering demand patterns, service access, data quality, and recommendations, with roughly 6% missing data, concentrated in the corridor, stop, and tap-out fields, treated as a signal of possible system reliability issues rather than random noise to be dropped.`,
    tradeoffs: `Because trip duration in this dataset is capped between 15 and 180 minutes by design, there are no real outliers to find there, so outlier-style analysis was deliberately not forced onto a field that can't produce meaningful ones. Every finding in the final write-up is labeled by how confident it can be, directly supported by the data, or a hypothesis that would need real operational data (bus counts, schedules, fare revenue) to confirm.`,
    outcome: `The project delivers a twelve-question analysis notebook and an executive brief summarizing findings and recommendations, explicitly paired with the Olist e-commerce project in the same portfolio to show range: one covers real transaction data in e-commerce logistics, this one covers synthetic transaction data over a real transit network.`,
    reflection: `Working with data that's part real and part synthetic forced a kind of discipline I hadn't needed before  every claim had to be checked against "would this still be true if the transaction data were real," and labeled accordingly. It's a smaller, quieter project than some of the others, but the honesty about what the data can and can't prove is the part I'm most glad I didn't skip.`,
    featured: false,
  },
  {
    slug: "olist-ecommerce-analysis",
    title: "Olist E-Commerce Analysis",
    description:
      "An in-progress analysis of roughly 100,000 real Brazilian e-commerce orders, examining what actually drives late deliveries and low review scores before ranking which categories or regions to prioritize.",
    objective:
      "Identify what drives late deliveries and low review scores across the Olist marketplace, and determine which product categories and regions should be prioritized first, without confusing correlation for a confirmed cause along the way.",
    year: "2026",
    role: "Data Analyst (E-Commerce Logistics Analytics)",
    stack: ["Python", "DuckDB", "SQL", "pandas", "Streamlit"],
    liveUrl: "https://olist-ecommerce-analysis.streamlit.app/",
    screenshots: [
      {
        src: "/projects/olist-ecommerce/olist-1-cover.png",
        alt: "Olist E-Commerce Analysis editorial cover illustration: marketplace transactions rather than synthetic data",
      },
    ],
    context: `Olist works from the public Brazilian E-Commerce dataset (2016-2018, ~100k orders)  real marketplace transactions rather than synthetic data, which is part of why it's paired with the Transjakarta project in this portfolio: one covers real transaction data, the other covers synthetic transaction data laid over a real transit network.

The raw dataset's order_items table is one row per item, not per order, which makes it easy to double-count revenue or delivery outcomes if joins happen before that's corrected. The project treats that adjustment as a required first step, not a detail to fix later if a number looks wrong.`,
    architecture: `Raw Olist CSVs are queried directly with DuckDB, so no database server is needed to work through the SQL. Orders, order items, products, customers, reviews, and payments are cleaned and joined with item-grain data explicitly aggregated to order-grain before any order-level join.

Because review score is ordinal rather than continuous, Spearman correlation is used throughout instead of Pearson. Aggregated results are exported to CSV and read by a separate Streamlit app with a custom theme, keeping the dashboard a presentation layer over notebook-computed numbers rather than a place where new calculations happen.`,
    tradeoffs: `The delay-vs-review relationship is checked at both the order level and the category level specifically to test whether product category confounds it  reporting both numbers instead of just the more convenient one. States with fewer than 50 orders are excluded from the regional chart as statistically unreliable rather than left in for a fuller-looking map.

Raw monthly order volume is shaped by Olist's own marketplace growth across 2016-2018 as much as by seasonality, so the dashboard includes a growth-adjusted view alongside the raw one. The "7+ days late" cutoff used in headline metrics is treated as an illustrative sensitivity check, not a validated SLA threshold.`,
    outcome: `The notebook (DuckDB + pandas) and the Streamlit dashboard scaffold are built and run end-to-end: revenue-by-category, delay-vs-review at two grains, regional delivery performance, growth-adjusted seasonality, payment behavior, and freight cost vs. review score. Final quantified findings, the deployed dashboard link, and the published notebook are still pending  flagged here rather than backfilled with placeholder numbers.`,
    reflection: `This one's still open, and I'd rather list it honestly mid-build than dress up a "final" version early. The most useful decision so far was checking the delay-vs-review relationship at both the order and category level before trusting either number on its own  it's the same instinct RavenStack and the retention project pushed me toward: check a number against the version of it that could prove you wrong before you report it.`,
    featured: false,
  },
];
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}

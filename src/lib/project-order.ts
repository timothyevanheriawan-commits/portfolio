import { getAllProjects } from "./projects";
import type { Project } from "./types";

// One source of truth for project order: used by the Projects index AND the
// previous/next links on case-study pages, so numbering and navigation agree.
// Slugs listed here lead within the data group (edit freely); everything else
// keeps its order from projects.ts.
const PRIORITY = [
  "customer-retention-analytics",
  "ravenstack-saas-analytics",
  "bca-mobile-customer-voice",
];

export const isDataProject = (p: Project) => /data analyst/i.test(p.role);

const rank = (slug: string) => {
  const i = PRIORITY.indexOf(slug);
  return i === -1 ? PRIORITY.length : i;
};

export function getProjectGroups() {
  const all = getAllProjects();
  return [
    {
      id: "data",
      label: "Data analysis",
      items: all.filter(isDataProject).sort((a, b) => rank(a.slug) - rank(b.slug)),
    },
    { id: "product", label: "Product & frontend", items: all.filter((p) => !isDataProject(p)) },
  ].filter((g) => g.items.length > 0);
}

export function getOrderedProjects(): Project[] {
  return getProjectGroups().flatMap((g) => g.items);
}

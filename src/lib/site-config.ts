// src/lib/site-config.ts
// Single source of truth for all personal/site data.
// Import from here instead of hardcoding strings across files.

export const siteConfig = {
  name:      'Timothy Evan',
  nameShort: 'TE',
  title:     'Timothy Evan — Frontend Systems & Data',
  siteName:  'Timothy Evan / System Archive',
  tagline:   'Frontend / Data Systems',
  url:       'https://timothy-evan.vercel.app',
  status:    'Open to internships and entry-level positions for 2026.',

  email:    'timothy.evan.heriawan@gmail.com',
  github:   'https://github.com/timothyevanheriawan-commits',
  linkedin: 'https://linkedin.com/in/timothy-evan-heriawan/',
  source:   'https://github.com/timothyevanheriawan-commits/portfolio',

  githubHandle:   'timothyevanheriawan-commits',
  linkedinHandle: 'timothy-evan-heriawan',
} as const

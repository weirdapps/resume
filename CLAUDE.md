# resume

Personal CV website for Dimitrios Plessas. Static export deployed to GitHub Pages at weirdapps.github.io/resume.

## Tech Stack

- Next.js 15 (App Router, static export via `output: 'export'`)
- TypeScript, Tailwind CSS 4, Framer Motion, next-themes
- ESLint for linting; no test suite
- CI: GitHub Actions deploy.yml — every push to `master` builds and deploys to Pages

## Structure

```text
resume-modern/          — Next.js application root (run all commands from here)
  app/                  — App Router: layout.tsx + page.tsx
  components/           — section components (header, experience, education, skills, etc.)
  assets/               — profile photo and static assets
  out/                  — static export output (gitignored)
```

## Local Development

```bash
cd resume-modern
npm install
npm run dev             # http://localhost:3000
```

## Build & Deploy

```bash
cd resume-modern
npm run build           # generates resume-modern/out/
```

Deployment is automatic — push to `master`, GitHub Actions handles the rest.

## Key Conventions

- All commands run from `resume-modern/`, not the repo root.
- Content lives in the component files (`components/*.tsx`); update those to change CV data.
- Light/dark mode is handled by `components/theme-provider.tsx` + `components/theme-toggle.tsx` — do not add manual color classes that break theming.
- Animations use Framer Motion `motion.*` wrappers; keep them subtle and consistent with existing components.
- No server-side code — static export only. Do not add `use server` or API routes.

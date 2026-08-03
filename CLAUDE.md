# resume

Personal CV website for Dimitrios Plessas. Static export deployed to GitHub Pages at weirdapps.github.io/resume.

## Tech Stack

- Next.js 16 (App Router, static export via `output: 'export'`)
- TypeScript 6, Tailwind CSS 4, Framer Motion, next-themes
- ESLint 9 for linting, `tsc --noEmit` for type-checking; no unit-test suite
- CI: GitHub Actions deploy.yml — every push to `master` builds and deploys to Pages;
  quality.yml runs lint + typecheck on push and PR

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
npm run lint            # ESLint
npm run typecheck       # tsc --noEmit
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
- Do NOT bump TypeScript to 7 or ESLint to 10. Both majors are blocked upstream and
  Dependabot is configured to skip them. TypeScript 7 breaks `next build` ("does not
  provide the compiler API required by Next.js") and makes `typescript-eslint` refuse to
  load, killing `npm run lint`. ESLint 10 crashes `eslint-plugin-react` 7.37.5, which
  `eslint-config-next` depends on. Full rationale in README.md under "Pinned major versions".
- In `.github/workflows/codeql.yml`, `github/codeql-action/init` and `.../analyze` must
  always be pinned to the same version. Dependabot bumps them as separate dependencies,
  so check both whenever one of them changes.
- `tsconfig.json` must not use `"target": "es5"` — TypeScript 6 errors on it (TS5107) and
  7 removed it outright (TS5108). It is set to `ES2017`.

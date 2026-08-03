# resume-modern

The Next.js application that renders the resume. See the [repository README](../README.md) for the full architecture, deployment pipeline, and content-editing guide; this file is a short pointer to what lives in this directory.

## Stack

Grounded in `package.json`:

- Next.js 16 with the App Router and `output: 'export'` for a fully static build
- React 19, TypeScript 6
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- framer-motion 12 for section animations
- next-themes for light / dark / system theming
- react-icons for icons

## Commands

Run everything from this directory (`resume-modern/`), not the repo root.

```bash
npm install
npm run dev          # dev server at http://localhost:3000
npm run build        # static export written to ./out
npm run lint         # ESLint (config in eslint.config.mjs)
npm run typecheck    # tsc --noEmit
```

There is no unit-test suite; `lint`, `typecheck`, and `build` are the verification gates, and `lint` plus `typecheck` run in CI via `.github/workflows/quality.yml`. The `start` script defined in `package.json` is inherited from the Next.js scaffold and is not used, because `output: 'export'` produces a static bundle rather than a runtime server.

TypeScript is held on 6.x and ESLint on 9.x on purpose. See [Pinned major versions](../README.md#pinned-major-versions) for why, and do not bump either major without re-reading that section.

## Static export and GitHub Pages

`next.config.js` sets `output: 'export'`, `images.unoptimized: true`, and switches `basePath` / `assetPrefix` to `/resume` in production. Running `npm run build` writes a fully static bundle to `./out`, which the repository workflow `.github/workflows/deploy.yml` uploads to GitHub Pages at <https://weirdapps.github.io/resume/>.

The production bundle assumes `/resume` as its base path, so serving `./out` from a naked root will 404 on assets. Preview via the deploy workflow, or serve under a matching path.

## Layout

- `app/`: App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/`: one `.tsx` per resume section (header, personal-info, education, skills, interests, experience, board-memberships, footer, plus theme-provider and theme-toggle)
- `public/`: static assets, including `images/PD.png` used by `header.tsx`
- `utils/path-utils.ts`: base-path-aware asset resolver used by components
- `styles/`: additional stylesheet inputs alongside `app/globals.css`

To change CV content, edit the relevant component under `components/`. See the [repository README](../README.md#editing-cv-content) for the field-to-file map.

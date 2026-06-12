# Resume

[![Deploy to GitHub Pages](https://github.com/weirdapps/resume/actions/workflows/deploy.yml/badge.svg)](https://github.com/weirdapps/resume/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org/)

Personal resume / CV website for Dimitrios Plessas — AGM, Cards & Digital Business at National Bank of Greece. Built with Next.js and deployed to GitHub Pages, with light/dark mode and smooth animations.

**Live site**: [weirdapps.github.io/resume](https://weirdapps.github.io/resume/)

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Theming**: next-themes (light/dark mode toggle)

## Project Structure

```text
resume-modern/        # Next.js application
  app/                # App Router pages and layout
  components/         # UI components (header, experience, education, etc.)
assets/               # Static assets (profile photo)
```

## Local Development

```bash
cd resume-modern
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
cd resume-modern
npm run build
```

The static export is generated in `resume-modern/out/`.

## Deployment

The site is deployed to **GitHub Pages** via a GitHub Actions workflow (`.github/workflows/deploy.yml`). Every push to `master` triggers a build and deploy automatically.

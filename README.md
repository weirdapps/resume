# Resume

Personal resume / CV website for Dimitrios Plessas, built as a static site with Next.js.

**Live site**: [weirdapps.github.io/resume](https://weirdapps.github.io/resume/)

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Theming**: next-themes (light/dark mode toggle)

## Project Structure

```
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

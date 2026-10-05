# Scroll-Driven Hero Section Animation

A premium scroll-driven hero section recreated from the provided reference using:

- Next.js
- React
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- GitHub Pages static export

## Features

- Above-the-fold hero layout
- Letter-by-letter headline reveal
- Staggered statistic cards
- Sticky scroll scene
- Car movement controlled by scroll progress
- GSAP scrub interpolation
- Transform-only scroll animation for performance
- Responsive mobile layout
- Reduced-motion support

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages

1. Create a GitHub repository.
2. Push this project to the repository.
3. Add the GitHub Actions workflow in `.github/workflows/deploy.yml`.
4. In GitHub: Settings → Pages → Source → GitHub Actions.
5. Push to `main`. The workflow builds and deploys the static `out/` folder.

## Submission

Live URL:
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

Repository:
`https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

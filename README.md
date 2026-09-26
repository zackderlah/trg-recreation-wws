# Toowoomba Referral Group

A clean recreation of [trg.org.au](https://trg.org.au/) as an Astro site. This repository is only the TRG website. It is separate from other client recreations.

## Working Websites Studio import

**Target mode: Astro + `content.json` (not `pages.json`).**

WWS does not run this app. It reads repo source, inlines Astro components (up to ~6 levels), evaluates `{expressions}` against `src/cms/*.json`, maps Tailwind utilities to the canvas, and resolves images from `public/` via raw GitHub URLs.

- **`src/cms/content.json`** — copy, members, articles, and `pageContent` for static routes (home data lives under `pageContent["/"]` but is rendered from `src/pages/index.astro`).
- **`src/cms/site.json`** — site name, nav, footer links, logo paths.
- **No `src/cms/pages.json`** — an incomplete manifest would override Astro routing and break import.

Routing:

- `src/pages/index.astro` — home (`HomePage.astro` + `pageContent["/"]`).
- `src/pages/[...slug].astro` — `getStaticPaths()` from `pageContent` (about, contact, …), plus every `members[].path` and `articles[].path`.
- One component per page kind under `src/components/pages/`.

Markup is static HTML in `.astro` templates (header/main/footer, real headings and copy, Tailwind layout utilities). Brand colours are CSS variables in `src/styles/global.css` (`--color-*`).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content

Editable copy, member profiles, and news live in `src/cms/content.json`. Images are stored in `public/assets` and are not hotlinked from the original host.

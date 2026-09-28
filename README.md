# Toowoomba Referral Group

A clean recreation of [trg.org.au](https://trg.org.au/) as an Astro site. This repository is only the TRG website. It is separate from other client recreations.

## Working Websites Studio import

WWS reads repo source. It does not run the app. Follow `.cursor/rules/wws-github-import.mdc`.

- One Astro file per URL under `src/pages/` (home is `index.astro`).
- Copy and image paths live in `src/cms/content.json` under `pageContent`, keyed by path.
- `src/cms/site.json` holds name, nav, footer links, and logo.
- Do not add `src/cms/pages.json` or a `wws/` folder.
- Templates print `cms.pageContent["/about"]` (and the matching key for that file). Lists use `.map()`.
- Layout uses `<section>`, real `<img src="/assets/...">` tags, headings, paragraphs, links, and flex. No CSS grid and no JS-only widgets for content that must import.

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

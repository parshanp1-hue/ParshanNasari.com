# parshannasari.com

Personal brand / resume landing page for Parshan Nasari. Built with Next.js (App
Router) + TypeScript + Tailwind CSS, designed to be fully self-hosted for free on
Vercel or Cloudflare Pages, with zero heavy dependencies.

## Stack

- **Next.js 16** (App Router, Turbopack, static export of every route)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-based theme, no component library)
- **next/font** for self-hosted fonts (no external font requests)
- **next/og** for generated OG image + favicon (no static image assets needed)
- Contact form powered by [Web3Forms](https://web3forms.com/) (free tier, no backend/server required)

No animation library, no UI kit — scroll reveals are done with a ~40-line
`IntersectionObserver` hook (`src/components/reveal.tsx`).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint   # ESLint
npm run build  # production build (also run in CI)
```

## Editing content

All copy lives in plain data files — no need to touch component markup to
update text:

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Name, tagline, email, LinkedIn, domain, SEO title/description |
| `src/data/about.ts` | About paragraphs + the stat grid |
| `src/data/experience.ts` | Role header + the experience category cards |

To add a new landing-page section (e.g. Writing, Resume download), create a
component in `src/components/`, add its data to `src/data/`, drop it into
`src/app/page.tsx`, and add a link to `navLinks` in `src/data/site.ts`.

## Before you go live — TODOs

A few placeholders need real values before this is production-ready:

- [ ] **Domain** — update `siteConfig.url` in `src/data/site.ts` once purchased.
- [ ] **LinkedIn** — replace/verify the placeholder URL in `src/data/site.ts`.
- [ ] **Contact form** — get a free access key at [web3forms.com](https://web3forms.com/) and set `NEXT_PUBLIC_WEB3FORMS_KEY` (see below). Until set, the form shows a fallback message and the email link still works.
- [ ] **Experience copy** — the four cost-reduction levers and the "50%+ in ~X months" framing in `src/data/experience.ts` / `src/data/about.ts` were carried over from a draft resume doc and should be double-checked against the actual initiatives/timeframe before publishing.

## Environment variables

Copy `.env.local.example` to `.env.local` for local dev:

```bash
cp .env.local.example .env.local
```

| Variable | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | For the contact form to submit | Free, public-safe key from [web3forms.com](https://web3forms.com/) |

Add the same variable in your hosting provider's project settings (Vercel/Cloudflare) so it's available in production too.

## Deploying (free, CI/CD via Git)

### Option A — Vercel (recommended, zero-config for Next.js)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the GitHub repo.
3. Add the `NEXT_PUBLIC_WEB3FORMS_KEY` environment variable in the project settings.
4. Deploy. Every push to `main` auto-deploys; every PR gets a preview URL — this **is** the CI/CD pipeline, no extra YAML needed.
5. Add your custom domain under Project → Settings → Domains once purchased.

### Option B — Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**, select the repo.
3. Build command: `npx @cloudflare/next-on-pages@latest` · Output directory: `.vercel/output/static` (Cloudflare's Next.js adapter). Add the `@cloudflare/next-on-pages` package as a dev dependency if you choose this route.
4. Add the `NEXT_PUBLIC_WEB3FORMS_KEY` environment variable in the Pages project settings.
5. Every push to `main` auto-deploys via Cloudflare's Git integration.

`.github/workflows/ci.yml` runs lint + build on every push/PR regardless of which host you pick, so broken code is caught before it ever reaches a deploy.

## SEO

- Metadata, Open Graph, and Twitter Card tags are set in `src/app/layout.tsx` from `siteConfig`.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml` / `robots.txt` automatically.
- `src/app/opengraph-image.tsx` and `src/app/icon.tsx` generate the OG preview image and favicon on the fly (no static assets to keep in sync).
- A `Person` JSON-LD block is injected in the root layout for richer search results.

## Project structure

```
src/
  app/
    layout.tsx          Root layout: fonts, metadata, header/footer shell
    page.tsx             Assembles the landing page sections
    globals.css          Theme tokens (colors/fonts) + reveal animation
    sitemap.ts / robots.ts
    opengraph-image.tsx / icon.tsx
  components/            One component per section/UI piece
  data/                  All editable copy and structured content
```

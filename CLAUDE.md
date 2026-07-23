# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/landing site for **HL Transporte (Hermanos Luci)**, a tourism transport company in Córdoba, Argentina. Content and UI copy are in Spanish. The site is lead-generation only — there is no backend; all "submissions" open a pre-filled WhatsApp chat.

The actual Next.js app and the git repository live in the `web/` subdirectory (the parent `hermanosluci-transporte/` is not a git repo). Run all commands from `web/`.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build (also generates sitemap.xml, robots.txt, manifest.webmanifest)
npm run start   # serve the production build
npm run lint    # next lint (eslint)
```

The repo has both `package-lock.json` and `pnpm-lock.yaml`; `pnpm-lock.yaml` is the newer one. There are no tests.

**ESLint is ignored during builds** (`next.config.mjs` sets `eslint.ignoreDuringBuilds: true`), so `npm run build` will pass even with lint errors. Run `npm run lint` separately to catch them.

## Architecture

- **Next.js 14 App Router** with TypeScript (`strict`). No Tailwind — styling is **CSS Modules** (`*.module.css` colocated with each component), with global theme tokens in [src/app/globals.css](src/app/globals.css) (HSL CSS variables + `shadcn`-style `--primary`/`--background` naming, though shadcn itself is not used). Path alias `@/*` → `src/*`.
- **Pages** live in [src/app/](src/app/): home (`page.tsx`), plus routes `nosotros`, `flota`, `cotizaciones`, `faq`, `privacidad`, and SEO resource articles under `recursos/`. Each page composes presentational components from [src/components/](src/components/).
- **Components** are one folder each under [src/components/](src/components/), pairing `ComponentName.tsx` with `componentname.module.css`. Most are server components; anything interactive (`Form`, carousels, responsive header) is marked `"use client"`.
- **Content is data-driven** via JSON in [src/data/](src/data/) (`flota.json`, `destinos.json`, `servicios.json`, `publicidad.json`). To change fleet vehicles, destinations, or service cards, edit these JSON files rather than the components. TypeScript shapes for this data live in [src/type/](src/type/).

## Contact flow (no backend)

There is no API or database. The quote form ([src/components/form/Form.tsx](src/components/form/Form.tsx)) validates fields with [src/utils/verificarForm.ts](src/utils/verificarForm.ts) (dates are `dd/mm/yyyy`, times `HH:MM`), then builds a URL-encoded message and opens `https://wa.me/<number>?text=...`. The WhatsApp number comes from `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env`. The floating `WhatsappButton` does the same. Any "send"/"submit" behavior should route through WhatsApp, not a server call.

## SEO

SEO is a primary concern of this project (see [SEO-README.md](SEO-README.md), [CHECKLIST-SEO.md](CHECKLIST-SEO.md), [ANALISIS-SEO-RECURSOS.md](ANALISIS-SEO-RECURSOS.md)).

- Per-page `metadata` exports (title/description/keywords/openGraph/canonical) in each `page.tsx`.
- [src/app/sitemap.ts](src/app/sitemap.ts), [src/app/robots.ts](src/app/robots.ts), and [src/app/manifest.ts](src/app/manifest.ts) are generated at build time — **when adding a route, add it to `sitemap.ts` too**.
- JSON-LD structured data (LocalBusiness, BreadcrumbList, Service, FAQPage) is rendered site-wide from [src/components/structured-data/StructuredData.tsx](src/components/structured-data/StructuredData.tsx), injected in the `<head>` of [src/app/layout.tsx](src/app/layout.tsx).
- `recursos/` articles are SEO content pages (festivals, tourism guides); each is its own folder with a `page.tsx` + CSS module.

**Domain inconsistency to watch:** `layout.tsx`/`sitemap.ts`/`StructuredData.tsx` use `https://www.hermanosluci.com.ar`, but the home `page.tsx` metadata (`url`, `images`, `canonical`) still points at `https://hltransporte.com.ar`. Keep the domain consistent when editing metadata.

## Fonts

Two fonts loaded in [src/app/layout.tsx](src/app/layout.tsx) and exposed as CSS variables: Google **Rajdhani** (`--font-rajdhani`, the body default) and a local **MolikaSans** (`--font-molika`, from `src/app/fonts/`).

## Goal

Replace the current TanStack Start scaffold with a plain Vite + React + Tailwind static app, then build a single high-converting landing page in Brazilian Portuguese for a marketing consultant focused on law firms. Output must be a static `dist/` folder deployable to Vercel with zero config.

## 1. Project restructure (Vite + React, static)

Remove TanStack Start and switch to a vanilla Vite React SPA.

- Delete: `src/router.tsx`, `src/routes/` (all files), `src/routeTree.gen.ts`, `src/server.ts`, `src/start.ts`, `wrangler.jsonc`, `src/lib/error-capture.ts`, `src/lib/error-page.ts`.
- Uninstall TanStack Start / Router / Query packages and Cloudflare/wrangler deps. Keep React, Tailwind, shadcn primitives we actually use (accordion, button).
- New entry: `index.html` at project root, `src/main.tsx` mounting `<App />`, `src/App.tsx` rendering the landing page.
- `vite.config.ts`: minimal config with `@vitejs/plugin-react`, `build.outDir = "dist"`, `@` alias to `src`.
- `package.json` scripts: `"dev": "vite"`, `"build": "vite build"`, `"preview": "vite preview"`.
- Tailwind v4 via `@import "tailwindcss"` in `src/styles.css` (imported by `main.tsx`). Define design tokens (see below).
- Add `vercel.json` at root with the rewrite rule provided.
- Confirm `bun run build` produces `dist/index.html` + assets.

## 2. Design system

In `src/styles.css`:

- Tokens: `--bg #0a0a0a`, `--surface #1a1a1a`, `--surface-2 #141414`, `--gold #C9A96E`, `--gold-soft rgba(201,169,110,.18)`, `--ink #F5F0E8`, `--ink-muted rgba(245,240,232,.65)`, `--border rgba(245,240,232,.08)`.
- Google Fonts via `<link>` in `index.html`: Playfair Display (600/700) for display, DM Sans (400/500) for body.
- Tailwind theme inline mapping for `bg-bg`, `text-ink`, `text-gold`, `font-display`, `font-sans`.
- Subtle noise: inline SVG turbulence as a fixed low-opacity overlay on `<body>`.
- Section reveal: small `useInView` hook + `data-reveal` class with `opacity/translate-y` transition (no extra dep).

## 3. Page sections

Single page in `src/App.tsx` composing section components in `src/components/landing/`:

1. `Hero.tsx` — headline, subheadline, gold CTA → `https://wa.me/SEUNUMERO` (`data-event="cta_hero"`), 3 small-caps checkmark lines, `[PHOTO]` placeholder block right side desktop / below on mobile.
2. `Pain.tsx` — "Você se identifica com isso?" + 5 cards in a 2-col grid (1-col mobile), gold left accent line.
3. `BehaviorShift.tsx` — full-width dark band, thin gold top border, headline + body + row of 5 CSS-only mock cards (Google SERP, Maps listing, review stars, landing page, WhatsApp chat).
4. `Help.tsx` — 3 cards with gold top border (Google Ads, Landing Page, Posicionamento).
5. `SocialProof.tsx` — 2 screenshot frames `[PRINT DO IVAN]` / `[PRINT DA ADVOGADA]` with gold corner accent, centered `[VÍDEO DEPOIMENTO]` frame with gold play circle, italic quote.
6. `Market.tsx` — darker variant, two-column contrast layout with subtle vertical divider.
7. `Faq.tsx` — shadcn `Accordion` styled minimal with a gold chevron, 4 items.
8. `FinalCta.tsx` — centered, large serif headline, gold button (`data-event="cta_final"`), 3 microcopy lines.
9. `FloatingWhatsApp.tsx` — fixed bottom-right gold circular button with WhatsApp icon, gentle pulse ring (`data-event="whatsapp_float"`).
10. Minimal copyright line at bottom (no nav, no footer links).

All WhatsApp links: `https://wa.me/SEUNUMERO`.

## 4. Responsiveness & motion

- Mobile-first; breakpoints at `md` for two-column / side-by-side layouts.
- Staggered fade-up on scroll for section children via `IntersectionObserver` hook.
- Pulse animation defined as a Tailwind keyframe in styles.css.

## 5. Verification

- Run `bun run build`, confirm `dist/index.html` exists and references hashed assets.
- Visual check in preview at desktop and mobile widths.

## Technical notes

- No SSR, no server functions, no env vars, no Lovable Cloud — pure static output.
- shadcn `accordion` and `button` are reused (Radix is fine in static SPA). All other shadcn files can stay untouched in `src/components/ui/` since unused ones tree-shake out.
- The `[PHOTO]`, `[PRINT DO IVAN]`, `[PRINT DA ADVOGADA]`, `[VÍDEO DEPOIMENTO]`, and `SEUNUMERO` strings remain as literal placeholders for the user to swap.

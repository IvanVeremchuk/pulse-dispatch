# Pulse Dispatch — landing site

Single-page marketing site for **Pulse Dispatch**, a done-for-you dispatch
agency for home-service trades in Toronto and the GTA. The page exists to
drive one action: a phone call to the live dispatcher line,
**+1 (437) 476-0920**.

## Stack

- [Vite](https://vite.dev) + TypeScript (`vanilla-ts` template) — static output,
  no framework, no runtime JS beyond the asset entry.
- Hand-written CSS, no utility or component framework.
- Self-hosted variable fonts via `@fontsource`: Archivo (display and body),
  Instrument Serif (set numerals).
- Inline SVG for the handful of line icons. No raster imagery, no photography,
  no background video.

## Run locally

Requires Node 20.19+ or 22+.

```bash
npm install
npm run dev
```

The dev server listens on <http://127.0.0.1:43717>.

## Other commands

```bash
npm run build     # typecheck, then emit the static site to dist/
npm run preview   # serve the built site on http://127.0.0.1:43718
```

## Deploying

`npm run build` produces a fully static `dist/` directory. It can be dropped on
any static host (Netlify, Vercel, Cloudflare Pages, S3, nginx) with no server
runtime and no environment variables.

## Layout of the source

```
index.html        all page markup, in section order
src/main.ts       entry point: pulls in fonts and styles
src/style.css     the entire design system and page styles
public/favicon.svg
vite.config.ts    dev/preview ports
```

## Editing content

All copy lives in `index.html`. Three strings are fixed and should not be
reworded:

- the hero headline,
- the call button label `Hear Our Live Dispatcher: +1 (437) 476-0920` (paired
  with `href="tel:+14374760920"`, and repeated in the masthead, mid-page band,
  intake section, closing section, and the sticky mobile bar),
- the partner intake / scarcity line.

The page deliberately carries no testimonials, client logos, review counts, or
statistics.

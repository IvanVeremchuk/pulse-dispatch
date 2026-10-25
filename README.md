# Pulse Dispatch — website

Marketing site for **Pulse Dispatch**, an affordable done-for-you AI receptionist
for trades and solo practices in Toronto and the GTA. Live at
<https://www.pulsedispatchai.com>. The main action is calling the demo line,
**(437) 476-0920**, or leaving a number in the call-back form.

The business brief behind the pages (positioning, plans, referral matches,
onboarding) is in [docs/brief.md](docs/brief.md).

## Stack

- [Vite](https://vite.dev) + TypeScript, static output, no framework.
- Hand-written CSS in `src/style.css` (design tokens at the top).
- Self-hosted variable fonts via `@fontsource-variable`: Stack Sans Headline
  (display) and Stack Sans Text (body).
- No photography: the "pictures" are the product's own text messages, built in
  HTML and marked `data-ui`.

## Run locally

Requires Node 20.19+ or 22+.

```bash
npm install
npm run dev
```

Dev server: <http://127.0.0.1:43717>. `npm run build` then `npm run preview`
serves the production build on <http://127.0.0.1:43718>.

Pushing to `main` deploys to GitHub Pages (`.github/workflows/pages.yml`).

## How the pages are put together

```
index.html                 home
pricing/index.html         plans, comparison table, missed-call calculator
how-it-works/index.html    the full go-live process (for technical readers)
allied-health/index.html   clinic plans and practice-software integrations
privacy/index.html         privacy policy (SMS / CASL wording)
404.html
partials/                  shared header, footer, plan tiles, sign-up form, JSON-LD
content/industries.mjs     data for the 8 industry pages
content/plans.mjs          plan facts for llms.txt and generated pages
scripts/build-pages.mjs    writes ai-receptionist/*/, public/sitemap.xml, public/llms.txt
src/                       main.ts, form, sample calls, configurator, calculator
```

- A page includes a partial with `<!-- @include name -->` (see `vite.config.ts`).
- **Industry pages are generated.** Edit `content/industries.mjs`, never
  `ai-receptionist/`, which is rebuilt (and git-ignored) on every `dev`/`build`.
- FAQ structured data is generated from each page's visible `.faq__q` / `.faq__a`
  pairs, so the answers search and AI engines read always match the page. The
  build fails on invalid JSON-LD.

## Changing prices

Prices appear in several places. Change them all together:

1. `partials/plans.html` (the plan tiles on home and pricing)
2. `partials/ld-offers.html` (structured data)
3. `pricing/index.html` (table, setup-fee section, FAQ)
4. `index.html` FAQ, `content/plans.mjs`, `allied-health/index.html`
5. `src/configurator.ts` and `src/calculator.ts` (plan suggestions)

## Editing rules

- The page carries no testimonials, client logos, review counts or invented
  statistics. Add real ones only.
- Sample callers, addresses and phone numbers (555 numbers) are fictional.
- The call-back form posts to Formspree form `meaoybjy` (`src/form.ts`).

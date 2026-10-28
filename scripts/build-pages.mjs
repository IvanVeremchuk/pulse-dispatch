// Generates the industry pages, sitemap.xml and llms.txt from content/.
// Runs before `vite` and `vite build` (see package.json), so the generated
// files are never edited by hand and are not committed.

import { mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { INDUSTRIES } from "../content/industries.mjs";
import { AREAS, EMAIL, PHONE_DISPLAY, PLANS, SITE } from "../content/plans.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "ai-receptionist");

const esc = (text) =>
  String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const json = (value) => JSON.stringify(value, null, 2).replace(/</g, "\\u003c");

const planHref = (name) =>
  ({ Solo: "/pricing/#plan-solo", Pro: "/pricing/#plan-pro", Team: "/pricing/#plan-team", Business: "/pricing/#plan-business", Practitioner: "/allied-health/#pricing" })[name] ?? "/pricing/";

function page(item) {
  const url = `${SITE}/ai-receptionist/${item.slug}/`;
  const [planName, planPrice, planWhy] = item.plan;
  const others = INDUSTRIES.filter((other) => other.slug !== item.slug);

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `AI receptionist for ${item.name.toLowerCase()}`,
        serviceType: "AI receptionist and answering service",
        description: item.description,
        url,
        provider: { "@type": "ProfessionalService", "@id": `${SITE}/#business`, name: "Pulse Dispatch", telephone: "+1-289-268-7607", url: `${SITE}/` },
        areaServed: AREAS.map((name) => ({ "@type": "City", name })),
        audience: { "@type": "BusinessAudience", name: item.name },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "CAD",
          lowPrice: "129",
          highPrice: "1000",
          offerCount: String(PLANS.length),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Who it's for", item: `${SITE}/#industries` },
          { "@type": "ListItem", position: 3, name: item.name, item: url },
        ],
      },
    ],
  };

  return `<!doctype html>
<html lang="en-CA">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(item.title)}</title>
    <meta name="description" content="${esc(item.description)}" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Pulse Dispatch" />
    <meta property="og:title" content="${esc(item.h1.replace(/\.$/, ""))} in Toronto and the GTA" />
    <meta property="og:description" content="${esc(item.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${SITE}/og.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${json(ld)}</script>
  </head>
  <body data-page="industry" data-trade="${esc(item.trade)}">
    <!-- @include header -->

    <main id="main">
      <section class="page-hero page-hero--${{ "field-1": "periwinkle", "field-2": "lime", "field-3": "amber", "field-4": "cyan" }[item.field]}" data-chapter="${item.field}" aria-labelledby="page-title">
        <div class="grid">
          <p class="page-hero__crumbs"><a href="/">Home</a> / <a href="/#industries">Who it's for</a> / ${esc(item.name)}</p>
          <h1 class="page-hero__title" id="page-title">${esc(item.h1)}</h1>
          <p class="page-hero__lede">${esc(item.lede)}</p>
          <div class="page-hero__actions">
            <a class="btn btn--primary" href="tel:+12892687607">Hear it answer: ${PHONE_DISPLAY}</a>
            <a class="btn btn--ghost" href="#start">Get a call back</a>
          </div>
          <figure class="page-hero__aside" data-ui aria-label="Example call and the text you get">
            <div class="sms">
              <p class="sms__meta">Caller</p>
              <p class="sms__bubble sms__bubble--in">"${esc(item.sample.quote)}"</p>
              <p class="sms__meta">Text to you · seconds later</p>
              <p class="sms__bubble sms__bubble--out">${esc(item.sample.text)}</p>
            </div>
          </figure>
        </div>
      </section>

      <section class="part" data-chapter="bg" aria-labelledby="calls-title">
        <div class="grid">
          <h2 class="part__title" id="calls-title">The calls it handles for you.</h2>
          <ul class="facts part__body">
${item.calls.map(([title, text]) => `            <li><h3>${esc(title)}</h3><p>${esc(text)}</p></li>`).join("\n")}
          </ul>
        </div>
      </section>

      <section class="part part--ink" data-chapter="ink" aria-labelledby="urgent-title">
        <div class="grid">
          <h2 class="part__title" id="urgent-title">When it's an emergency.</h2>
          <div class="part__split">
            <p class="prose">${esc(item.emergency)}</p>
            <ul class="ticks">
              <li>Rings you first, or only after hours, your choice</li>
              <li>Puts callers through to you when they ask</li>
              <li>Texts and emails you every job, with the details</li>
              <li>Customers get a text confirming you got their request</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="part part--surface" data-chapter="surface" aria-labelledby="plan-title">
        <div class="grid">
          <h2 class="part__title" id="plan-title">The plan most ${esc(item.name.toLowerCase())} pick.</h2>
          <div class="part__split">
            <div class="prose">
              <p class="calc__big">${esc(planName)} · ${esc(planPrice)}</p>
              <p>${esc(planWhy)}</p>
              <p><a href="${planHref(planName)}">See what's in ${esc(planName)}</a> or <a href="/pricing/#compare">compare every plan</a>. Prices in CAD, plus HST, month to month.</p>
            </div>
            <ul class="ticks">
${PLANS.map((p) => `              <li><strong>${p.name}</strong> $${p.monthly.toLocaleString("en-CA")}/mo · $${p.setup.toLocaleString("en-CA")} setup · ${esc(p.calls)}</li>`).join("\n")}
            </ul>
          </div>
        </div>
      </section>

      <section class="faq" aria-labelledby="faq-title">
        <div class="faq__head" data-chapter="accent">
          <h2 class="faq__title" id="faq-title">Questions from ${esc(item.name.toLowerCase())}.</h2>
        </div>
${item.faqs
  .map(
    ([q, a], i) => `        <div class="faq__band" data-chapter="${i % 2 === 0 ? "field-3" : "bg"}">
          <h3 class="faq__q">${esc(q)}</h3>
          <p class="faq__a">${esc(a)}</p>
        </div>`,
  )
  .join("\n")}
      </section>

      <section class="part part--lime" data-chapter="field-2" aria-labelledby="more-title">
        <div class="grid">
          <h2 class="part__title" id="more-title">Also built for.</h2>
          <nav class="related part__body" aria-labelledby="more-title">
${others.map((o) => `            <a href="/ai-receptionist/${o.slug}/">${esc(o.name)}</a>`).join("\n")}
            <a href="/allied-health/">Clinics &amp; allied health</a>
          </nav>
        </div>
      </section>

      <!-- @include start -->
    </main>

    <!-- @include footer -->
  </body>
</html>
`;
}

// ---------------------------------------------------------------- pages
rmSync(outDir, { recursive: true, force: true });
for (const item of INDUSTRIES) {
  const dir = join(outDir, item.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), page(item));
}

// ---------------------------------------------------------------- sitemap
const skip = new Set(["node_modules", "dist", "public", "partials", "src", "scripts", "content", "docs"]);
const pages = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".") || skip.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name === "index.html") pages.push(`/${relative(root, dirname(path))}/`.replace(/^\/\/$|\/\/$/, "/").replace(/\/\/+/g, "/"));
  }
};
walk(root);
pages.sort((a, b) => a.split("/").length - b.split("/").length || a.localeCompare(b));

const today = new Date().toISOString().slice(0, 10);
const priority = (p) => (p === "/" ? "1.0" : p === "/pricing/" ? "0.9" : p.startsWith("/ai-receptionist/") ? "0.8" : "0.7");
writeFileSync(
  join(root, "public", "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod><priority>${priority(p)}</priority></url>`).join("\n")}
</urlset>
`,
);

// ---------------------------------------------------------------- llms.txt
writeFileSync(
  join(root, "public", "llms.txt"),
  `# Pulse Dispatch

> Pulse Dispatch is a done-for-you AI receptionist for trades and solo practices in Toronto and the Greater Toronto Area (${AREAS.join(", ")}). It answers business calls 24/7, texts and emails the owner each job, and books the customer. Plans start at $129 CAD a month.

- Phone (hear the AI answer): ${PHONE_DISPLAY}
- Email: ${EMAIL}
- Service area: Toronto and the GTA, Ontario, Canada
- Who it's for: ${INDUSTRIES.map((i) => i.name.toLowerCase()).join(", ")}, and allied health clinics (physio, chiro, massage, counselling)

## Plans (CAD per month, plus HST, month to month)

${PLANS.map((p) => `- ${p.name}: $${p.monthly.toLocaleString("en-CA")}/month + $${p.setup.toLocaleString("en-CA")} one-time setup. ${p.calls}. ${p.for}. Live in ${p.live}.`).join("\n")}
- Clinic plans: Practitioner $299/month + $499 setup; Clinic $599/month + $2,500 setup; Multi-clinic $1,000/month + $6,000 setup.

## How it works

- Call forwarding options: ring the owner first and let the AI answer if they don't (no voicemail); AI answers every call; AI answers only after hours; forward callers to the owner when they ask for a person.
- Booking options: the AI books an open calendar slot during the call, or the owner gets the job by text and email and texts the customer a time from their own phone. Customers text back to reschedule. The owner makes every decision.
- Customers keep their existing number with call forwarding (Rogers, Bell, Telus, Freedom) or get a new local number.

## Pages

- [Home](${SITE}/): overview, sample calls, plans, FAQ
- [Pricing](${SITE}/pricing/): every plan, feature comparison, integrations, missed-call cost calculator
- [How it works](${SITE}/how-it-works/): go-live steps, forwarding, booking flow, timelines
- [Clinics and allied health](${SITE}/allied-health/): plans and integrations for practices (Jane, Cliniko, Owl Practice and others)
${INDUSTRIES.map((i) => `- [AI receptionist for ${i.name.toLowerCase()}](${SITE}/ai-receptionist/${i.slug}/)`).join("\n")}
`,
);

console.log(`build-pages: ${INDUSTRIES.length} industry pages, ${pages.length} URLs in sitemap.xml, llms.txt written`);

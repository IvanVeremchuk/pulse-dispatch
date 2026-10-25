import { readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";

const root = dirname(fileURLToPath(import.meta.url));
const partialsDir = resolve(root, "partials");

/**
 * Every page shares the header, footer, sign-up form and phone dock. A page
 * pulls one in with `<!-- @include name -->`, which is swapped for the file
 * at partials/name.html. Partials may include other partials.
 */
function partials(): Plugin {
  const expand = (html: string, depth = 0): string =>
    depth > 4
      ? html
      : html.replace(/<!--\s*@include ([\w-]+)\s*-->/g, (_, name: string) =>
          expand(readFileSync(join(partialsDir, `${name}.html`), "utf8"), depth + 1),
        );

  return {
    name: "pulse-partials",
    transformIndexHtml: {
      order: "pre",
      handler: (html, ctx) => checkLd(withFaqLd(expand(html)), ctx.filename),
    },
    handleHotUpdate({ file, server }) {
      if (file.startsWith(partialsDir)) server.ws.send({ type: "full-reload" });
    },
  };
}

const plain = (html: string) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&rsquo;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Answer engines read FAQPage markup, so every page with visible
 * `.faq__q` / `.faq__a` pairs gets matching structured data. Built from the
 * rendered questions, the markup can never drift from what visitors see.
 */
function withFaqLd(html: string) {
  const pairs = [...html.matchAll(/class="faq__q"[^>]*>([\s\S]*?)<\/h3>\s*<p class="faq__a"[^>]*>([\s\S]*?)<\/p>/g)];
  if (pairs.length === 0) return html;
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pairs.map(([, q, a]) => ({
      "@type": "Question",
      name: plain(q),
      acceptedAnswer: { "@type": "Answer", text: plain(a) },
    })),
  };
  return html.replace("</head>", `<script type="application/ld+json">${JSON.stringify(ld)}</script>\n</head>`);
}

/** Fail the build on structured data that does not parse. */
function checkLd(html: string, file: string) {
  for (const [, body] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(body);
    } catch (error) {
      throw new Error(`Invalid JSON-LD in ${file}: ${(error as Error).message}`);
    }
  }
  return html;
}

/** Each folder holding an index.html is a page. */
function findPages(dir: string, found: Record<string, string> = {}) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || ["node_modules", "dist", "public", "partials", "src", "scripts", "content"].includes(entry.name)) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) findPages(path, found);
    else if (entry.name === "index.html" || entry.name === "404.html") {
      const key = path.slice(root.length + 1).replace(/\.html$/, "").replace(/\//g, "-");
      found[key] = path;
    }
  }
  return found;
}

export default defineConfig({
  base: "/",
  plugins: [partials()],
  build: {
    rollupOptions: { input: findPages(root) },
  },
  server: {
    host: "127.0.0.1",
    port: 43717,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 43718,
    strictPort: true,
  },
});

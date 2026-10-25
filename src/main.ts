import "@fontsource-variable/stack-sans-headline/wght.css";
import "@fontsource-variable/stack-sans-text/wght.css";
import "./style.css";
import "./form";
import "./scenarios";
import "./configurator";
import "./calculator";

/* ---------------------------------------------------------------- bar
 * The bar takes the colour of whichever chapter is under it. On the home
 * page it stays out of the way until the opening panel has scrolled off. */

const bar = document.querySelector<HTMLElement>("[data-bar]");
const chapters = [...document.querySelectorAll<HTMLElement>("[data-chapter]")];
const hero = document.querySelector<HTMLElement>(".hero");

if (bar) {
  let queued = false;
  const update = () => {
    queued = false;
    const line = bar.offsetHeight / 2;
    let on = "bg";
    for (const chapter of chapters) {
      const box = chapter.getBoundingClientRect();
      if (box.top <= line && box.bottom > line) on = chapter.dataset.chapter ?? "bg";
    }
    if (bar.dataset.on !== on) bar.dataset.on = on;
    if (hero && bar.classList.contains("bar--home")) {
      bar.classList.toggle("is-shown", hero.getBoundingClientRect().bottom < 0);
    }
  };
  const queue = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
  update();
}

/* ---------------------------------------------------------------- entrances
 * Each section's parts rise in once, staggered within their parent. Nothing
 * is hidden unless this script runs. */

const revealSelector = [
  "main h2",
  ".how__stages > li",
  ".hear__quote",
  ".jobcard",
  ".prices__note",
  ".plans > li",
  ".setup__intro",
  ".block",
  ".who__intro",
  ".who__list > li",
  ".who__also > p",
  ".faq__band > *",
  ".start__copy > p",
  ".dialog",
  ".page-hero__lede",
  ".page-hero__actions",
  ".page-hero__aside",
  ".part__intro",
  ".part__body",
  ".part__split > *",
  ".journey > li",
  ".facts > li",
  ".calc__inputs",
  ".calc__out",
].join(",");

if ("IntersectionObserver" in window) {
  const targets = document.querySelectorAll<HTMLElement>(revealSelector);
  const seen = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        seen.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  const fold = window.innerHeight;
  for (const target of targets) {
    if (target.closest(".hero")) continue;
    // Already on screen at load: show it as it is, no entrance.
    if (target.getBoundingClientRect().top < fold * 0.9) continue;
    const siblings = target.parentElement ? [...target.parentElement.children] : [];
    target.style.setProperty("--i", String(Math.min(siblings.indexOf(target), 6)));
    target.dataset.reveal = "";
    seen.observe(target);
  }
}

// Reduced motion keeps the fades and drops the travel (see style.css).
document.documentElement.classList.add("motion-ready");

/* ---------------------------------------------------------------- phone dock
 * The dock and the in-page call buttons are the same control; tuck the dock
 * away while one of those is on screen. */

const dock = document.querySelector<HTMLElement>(".dock");
const inlineCalls = document.querySelectorAll('main a[href^="tel:"].btn, .start, .tile--go');

if (dock && "IntersectionObserver" in window) {
  const onScreen = new Set<Element>();
  const watch = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      dock.classList.toggle("dock--tucked", onScreen.size > 0);
    },
    { threshold: 0.3 },
  );
  for (const el of inlineCalls) watch.observe(el);
}

/* ---------------------------------------------------------------- small bits */

for (const el of document.querySelectorAll<HTMLElement>("[data-year]")) {
  el.textContent = String(new Date().getFullYear());
}

const clock = document.querySelector<HTMLElement>("[data-clock]");
if (clock) {
  const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", hour: "numeric", minute: "2-digit" });
  const tick = () => (clock.textContent = fmt.format(new Date()));
  tick();
  setInterval(tick, 30_000);
}

const here = location.pathname;
for (const link of document.querySelectorAll<HTMLAnchorElement>(".bar__nav a")) {
  if (link.pathname === here && here !== "/") link.setAttribute("aria-current", "page");
}

// Plan buttons carry their plan into the sign-up form.
for (const link of document.querySelectorAll<HTMLAnchorElement>("[data-plan]")) {
  link.addEventListener("click", () => {
    const radio = document.querySelector<HTMLInputElement>(`#start-form input[name="plan"][value="${link.dataset.plan}"]`);
    if (radio) radio.checked = true;
  });
}

// Close the phone menu after choosing a link.
const menu = document.querySelector<HTMLDetailsElement>(".bar__menu");
menu?.addEventListener("click", (event) => {
  if ((event.target as HTMLElement).closest("a")) menu.open = false;
});

/**
 * "Set it up your way": each control rewrites one line of the receptionist
 * card, and the card names the cheapest plan that covers the choices.
 */

const BUSINESS: Record<string, string> = {
  plumber: "Elm Street Plumbing",
  hvac: "North Air Heating and Cooling",
  electrician: "Bright Line Electric",
  roofer: "Top Ridge Roofing",
  locksmith: "Key Hour Locksmith",
  tree: "High Branch Tree Care",
  lawyer: "the law office of Dana Reid",
  therapist: "Lakeshore Counselling",
};

const NO_TECH = new Set(["lawyer", "therapist"]);

const PLANS = [
  { name: "Solo", price: 129 },
  { name: "Pro", price: 299 },
  { name: "Team", price: 599 },
];

const root = document.querySelector<HTMLElement>(".setup");

if (root) {
  const out = (key: string) => root.querySelector<HTMLElement>(`[data-out="${key}"]`);
  const value = (key: string) => {
    const el = root.querySelector<HTMLInputElement | HTMLSelectElement>(
      `[data-cfg="${key}"]:is(select, input[type="checkbox"], input:checked)`,
    );
    if (!el) return "";
    if (el instanceof HTMLInputElement && el.type === "checkbox") return el.checked ? "on" : "";
    return el.value;
  };

  const lines = () => {
    const trade = value("trade") || "plumber";
    const person = NO_TECH.has(trade) ? "you" : "your on-call tech";
    const choose = NO_TECH.has(trade) ? "You text them a consult time." : "You text them a time.";
    return {
      greeting: `"Thanks for calling ${BUSINESS[trade]}. How can I help?"`,
      answer: {
        ring: "Rings you for 20 seconds, then the AI answers",
        all: "The AI answers on the first ring",
        after: "You answer in business hours. The AI takes evenings and weekends.",
      }[value("answer")] ?? "",
      transfer: value("transfer") ? "Puts them through to your cell" : "Takes a message and texts it to you",
      booking: {
        after: `Texts you the job. ${choose}`,
        live: "Books an open slot in your calendar during the call",
        none: "Texts you the details. You call them back.",
      }[value("booking")] ?? "",
      followup: value("followup") ? "Called back within a minute" : "Texted to you",
      emergency: value("emergency") ? `Rings ${person} right away` : "Texted to you as urgent",
    };
  };

  const planFor = () => {
    if (value("emergency")) return PLANS[2];
    if (value("followup") || value("booking") !== "none") return PLANS[1];
    return PLANS[0];
  };

  const render = (changed?: string) => {
    const text = lines();
    for (const [key, line] of Object.entries(text)) {
      const el = out(key);
      if (el && el.textContent !== line) el.textContent = line;
    }
    const plan = planFor();
    const planEl = out("plan");
    if (planEl) planEl.textContent = `${plan.name} · $${plan.price}/mo`;

    if (!changed) return;
    const target = out(changed === "trade" ? "greeting" : changed);
    if (!target) return;
    // Flash the line that changed; on phones, it is also the one row shown.
    for (const row of root.querySelectorAll(".config__rows > div")) row.classList.remove("is-hot");
    target.parentElement?.classList.add("is-hot");
    target.classList.add("is-changed");
    requestAnimationFrame(() => requestAnimationFrame(() => target.classList.remove("is-changed")));
  };

  root.addEventListener("change", (event) => {
    const key = (event.target as HTMLElement).dataset.cfg;
    if (key) render(key);
  });

  out("answer")?.parentElement?.classList.add("is-hot");
  render();
}

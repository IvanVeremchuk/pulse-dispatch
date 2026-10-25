/**
 * Pricing page: what missed calls cost, and how few saved jobs pay for a plan.
 * The estimate is deliberately plain: missed calls x close rate x job value.
 */

const calc = document.querySelector<HTMLElement>("[data-calc]");

if (calc) {
  const input = (name: string) => calc.querySelector<HTMLInputElement>(`input[name="${name}"]`);
  const output = (name: string) => calc.querySelector<HTMLElement>(`[data-calc-out="${name}"]`);
  const money = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });

  const render = () => {
    const missed = Number(input("missed")?.value ?? 0);
    const value = Number(input("value")?.value ?? 0);
    const rate = Number(input("rate")?.value ?? 0) / 100;

    const lostMonthly = missed * 4.33 * rate * value;
    const plan = missed * 4.33 <= 60 ? { name: "Solo", price: 129 } : { name: "Pro", price: 299 };
    const jobsToPay = value > 0 ? Math.max(1, Math.ceil(plan.price / value)) : 0;

    const set = (name: string, text: string) => {
      const el = output(name);
      if (el) el.textContent = text;
    };
    set("missed", `${missed} a week`);
    set("value", money.format(value));
    set("rate", `${Math.round(rate * 100)}%`);
    set("lost", money.format(lostMonthly));
    set("plan", `${plan.name} costs ${money.format(plan.price)} a month`);
    set("jobs", jobsToPay === 1 ? "one saved job" : `${jobsToPay} saved jobs`);
  };

  calc.addEventListener("input", render);
  render();
}

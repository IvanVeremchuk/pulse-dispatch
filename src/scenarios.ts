/**
 * "They call. You get the job." Each sample call pairs what a caller says
 * with the text the owner receives. The first one is also in the HTML, so
 * the section reads fine without script.
 */

type Scenario = {
  quote: string;
  tag: string;
  title: string;
  rows: [string, string][];
  action: string;
  sent: string;
};

const SCENARIOS: Record<string, Scenario> = {
  plumber: {
    quote:
      "Hi, it's 11 at night and a pipe under my kitchen sink just burst. I turned the water off at the main. Can someone come tonight? I'm at 14 Elm Street in Mississauga.",
    tag: "Urgent · after hours",
    title: "Burst pipe, kitchen sink",
    rows: [
      ["Caller", "Maria Santos"],
      ["Where", "14 Elm St, Mississauga"],
      ["Phone", "(647) 555-0182"],
      ["Notes", "Water off at the main. Wants someone tonight."],
    ],
    action: "Text Maria back",
    sent: 'Maria got: "We got your request. We\'ll text you shortly with an arrival time."',
  },
  hvac: {
    quote:
      "Our furnace keeps clicking but there's no heat, and it's minus ten out. We've got a baby at home. It's a Lennox, maybe twelve years old. We're in Brampton, near Bovaird and Main.",
    tag: "Urgent · no heat",
    title: "Furnace not heating",
    rows: [
      ["Caller", "Raj Patel"],
      ["Where", "Bovaird Dr & Main St, Brampton"],
      ["Phone", "(905) 555-0147"],
      ["Notes", "Lennox, about 12 years old. Infant at home."],
    ],
    action: "Text Raj a time",
    sent: 'Raj got: "We got your request. A technician will be confirmed by text shortly."',
  },
  electrician: {
    quote:
      "Half the outlets in my house just died and the breaker won't reset. There's a burning smell near the panel. I'm in Etobicoke, 88 Royal York Road.",
    tag: "Emergency · burning smell",
    title: "Breaker won't reset, burning smell",
    rows: [
      ["Caller", "Daniel Okafor"],
      ["Where", "88 Royal York Rd, Etobicoke"],
      ["Phone", "(416) 555-0110"],
      ["Notes", "Told to stay away from the panel and call 911 if smoke appears."],
    ],
    action: "Call Daniel back now",
    sent: 'Daniel got: "We got your request. An electrician will call you within 15 minutes."',
  },
  roofer: {
    quote:
      "Water is coming through my bedroom ceiling since the storm. I think some shingles blew off. Can someone tarp it before more rain tomorrow? 22 Maple Avenue, Oakville.",
    tag: "Urgent · active leak",
    title: "Roof leak after storm",
    rows: [
      ["Caller", "Susan Clarke"],
      ["Where", "22 Maple Ave, Oakville"],
      ["Phone", "(289) 555-0163"],
      ["Notes", "Missing shingles. Needs a tarp before rain tomorrow. Insurance claim likely."],
    ],
    action: "Text Susan a time",
    sent: 'Susan got: "We got your request. We\'ll text you the arrival time shortly."',
  },
  locksmith: {
    quote:
      "I'm locked out of my house and my keys are inside. My kid's with me and it's getting cold. I'm at 310 Queen Street East, Toronto.",
    tag: "Urgent · lockout",
    title: "House lockout",
    rows: [
      ["Caller", "Ana Ruiz"],
      ["Where", "310 Queen St E, Toronto"],
      ["Phone", "(437) 555-0129"],
      ["Notes", "Child with her. Standard deadbolt. Will show ID."],
    ],
    action: "Send a locksmith",
    sent: 'Ana got: "We got your request. We\'ll text you who\'s coming and when."',
  },
  tree: {
    quote:
      "A big branch came down on my fence last night and it's leaning towards the garage. Can someone take it down this week? I'm on Bayview in Richmond Hill.",
    tag: "This week · storm damage",
    title: "Fallen limb on fence",
    rows: [
      ["Caller", "Mark Chen"],
      ["Where", "Bayview Ave, Richmond Hill"],
      ["Phone", "(905) 555-0188"],
      ["Notes", "Large maple limb on fence, leaning to garage. Wants a quote and removal."],
    ],
    action: "Book a site visit",
    sent: 'Mark got: "We got your request. We\'ll text you a time for the estimate."',
  },
  lawyer: {
    quote:
      "Hi, I'm separating from my husband and we have two kids. I need to talk to a family lawyer about custody. I'm free most evenings.",
    tag: "New consult · family law",
    title: "Separation and custody",
    rows: [
      ["Caller", "Priya K."],
      ["Phone", "(905) 555-0174"],
      ["Matter", "Separation, two children, custody"],
      ["Conflict check", "Other party: Raj K."],
      ["Best time", "Weekday evenings"],
    ],
    action: "Confirm a consult time",
    sent: 'Priya got: "Thanks, we got your request. We\'ll text you a consultation time shortly."',
  },
  therapist: {
    quote:
      "Hi, I'm looking for a therapist for anxiety. I'd prefer evenings, and I have coverage through Sun Life. Are you taking new clients?",
    tag: "New client inquiry",
    title: "New client, evenings",
    rows: [
      ["Caller", "Jordan M."],
      ["Phone", "(647) 555-0193"],
      ["Looking for", "Individual therapy"],
      ["Coverage", "Sun Life"],
      ["Availability", "Tuesdays or Thursdays after 5"],
    ],
    action: "Offer an intake time",
    sent: 'Jordan got: "Thanks for reaching out. We\'ll text you an intake time shortly." No clinical details were taken on the call.',
  },
};

const picks = document.querySelector<HTMLElement>("[data-scenarios]");
const quote = document.querySelector<HTMLElement>("[data-quote]");
const card = document.querySelector<HTMLElement>(".jobcard");
const tag = document.querySelector<HTMLElement>("[data-job-tag]");
const title = document.querySelector<HTMLElement>("[data-job-title]");
const rows = document.querySelector<HTMLElement>("[data-job-rows]");
const action = document.querySelector<HTMLElement>("[data-job-action]");
const sent = document.querySelector<HTMLElement>("[data-job-sent]");

const escape = (text: string) =>
  text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] ?? c);

function show(id: string) {
  const s = SCENARIOS[id];
  if (!s || !quote || !card || !tag || !title || !rows || !action || !sent) return;
  quote.classList.add("is-swapping");
  card.classList.add("is-swapping");
  window.setTimeout(() => {
    quote.textContent = `"${s.quote}"`;
    tag.textContent = s.tag;
    title.textContent = s.title;
    rows.innerHTML = s.rows.map(([k, v]) => `<div><dt>${escape(k)}</dt><dd>${escape(v)}</dd></div>`).join("");
    action.textContent = s.action;
    sent.textContent = s.sent;
    quote.classList.remove("is-swapping");
    card.classList.remove("is-swapping");
  }, 160);
}

picks?.addEventListener("click", (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>("button[data-scenario]");
  if (!button) return;
  for (const b of picks.querySelectorAll("button")) b.setAttribute("aria-pressed", String(b === button));
  show(button.dataset.scenario ?? "plumber");
});

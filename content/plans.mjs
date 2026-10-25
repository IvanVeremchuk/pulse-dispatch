// Single source for plan facts used in JSON-LD, llms.txt and the sitemap
// generator. The visible plan copy lives in the HTML; keep the two in step.

export const SITE = "https://www.pulsedispatchai.com";
export const PHONE = "+14374760920";
export const PHONE_DISPLAY = "(437) 476-0920";
export const EMAIL = "ivan@pulsedispatchai.com";

export const AREAS = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Oakville",
  "Milton",
  "Pickering",
  "Ajax",
];

export const PLANS = [
  {
    id: "solo",
    name: "Solo",
    for: "One-person shops that just can't pick up",
    monthly: 129,
    setup: 49,
    calls: "100 calls a month",
    live: "3 business days",
  },
  {
    id: "pro",
    name: "Pro",
    for: "Owner-operators who dispatch their own jobs",
    monthly: 299,
    setup: 99,
    calls: "300 calls a month",
    live: "about 7 days",
  },
  {
    id: "team",
    name: "Team",
    for: "Small businesses with a crew of 2 to 10",
    monthly: 599,
    setup: 2500,
    calls: "600 calls a month",
    live: "2 to 3 weeks",
  },
  {
    id: "business",
    name: "Business",
    for: "Multi-location businesses and firms with a CRM",
    monthly: 1000,
    setup: 6000,
    calls: "Unlimited calls (fair use)",
    live: "25 to 30 days",
  },
];

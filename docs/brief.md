# Pulse Dispatch — website and offer brief

October 2026. Written while rebuilding pulsedispatchai.com.

## 1. Who we sell to

**Prosumers first, not SMB or enterprise.** Solo owners and tiny crews in Toronto,
Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville and the rest of
the GTA, whose hands are busy when the phone rings.

Priority industries (most missed-call pain, highest call volume, solo-operator
dynamics):

1. Plumbers (emergency, residential)
2. HVAC (heating and AC repair)
3. Electricians (emergency, residential)
4. Roofers (emergency repair, replacement)
5. Locksmiths (emergency, 24-hour)
6. Tree services (emergency removal, trimming)
7. Solo lawyers (criminal, family)
8. Therapists (private practice)

Secondary: allied health clinics (physio, chiro, massage, counselling), reached
mainly by cold calls and in person, with their own page and plans. Car
dealerships get a single line about after-hours callers confirming Monday
appointments. App-dominated personal services are not a target.

**Where visitors come from:** mostly Instagram reels, so mostly phones. The site
is built phone-first, with a sticky "Hear our AI answer" call button and prices
reachable in one tap.

## 2. What sells

- **Pain removal:** no more missed calls, no more voicemail tag. The owner is busy
  or doesn't want to pick up, and the AI does it for them.
- **Revenue gain:** every answered call is a job, and web leads get called back
  within a minute.
- **Control:** the AI is the middle man, not the decision maker. The owner picks
  the tech and time.
- **Price:** "the most affordable AI receptionist", from $129 a month.

Headline used: **"Say hello to your AI receptionist. And goodbye to missed calls."**

## 3. Plans

Each plan is matched in price and features to an existing provider, so a client
can be referred out at the same price and features if a build can't be done in
house. Every plan has a setup fee, rising with complexity.

| Plan | For | Monthly (CAD) | Setup | Calls | Referral match |
|---|---|---|---|---|---|
| **Solo** | One-person shops (prosumer) | $129 | $49 | 100 | Dialbox Core ($129/mo, 100 AI calls, 1 location) |
| **Pro** | Owner-operators who dispatch (prosumer) | $299 | $99 | 300 | PonixFlow system + our developer's dispatch flow; Dialbox Pro ($299, 300 calls) |
| **Team** | Crews of 2–10 (SMB) | $599 | $2,500 | 600 | Zyntrix (home services $199–399/mo + $1,000–2,500 setup); Keplar ($400–800/mo upkeep) |
| **Business** | Multi-location, firms with a CRM | $1,000 | $6,000 | Unlimited (fair use) | Zaptron (inbound + outbound + custom automation, 25–30 day build) |

Clinic plans (allied-health page): Practitioner $299 + $499 setup · Clinic $599 +
$2,500 · Multi-clinic $1,000 + $6,000.

### What each plan includes

**Solo ($129, $49 setup):** 24/7 answering in the business name; job details by
text and email; caller gets "we got your request"; ring the owner first and let the
AI answer if they don't (no voicemail); forward callers who ask for the owner;
after-hours-only mode; spam screening; FAQs. Live in 3 business days.

**Pro ($299, $99 setup):** everything in Solo plus the developer's dispatch flow:

1. Customer calls; the AI collects name, address and problem.
2. Customer gets SMS: "we got your request."
3. Owner gets SMS and email with the job and a Dispatch Tech link to pick tech and time.
4. Customer gets a second SMS with the confirmed tech and arrival time.
5. Customer replies to reschedule ("change my time to 5 pm"); the owner approves.

Also: calendar booking during the call (Google or Outlook), missed-call text back,
AI follow-up calls to web-form leads within a minute, Google review requests,
website chat (PonixFlow's service list). Live in about 7 days.

**Team ($599, $2,500 setup):** emergency routing to the on-call tech; routing by
job type and area; quotes standard prices; WhatsApp, web-form and portal leads
answered in under 60 seconds (Zyntrix); one job-software connection (Jobber,
Housecall Pro or QuickBooks); monthly tuning from real calls; up to 3 numbers.
Live in 2–3 weeks.

**Business ($1,000, $6,000 setup):** Zaptron's feature set: outbound voice agent
(follow-ups, confirmations, no-show reduction); CRM and calendar sync (HubSpot,
Salesforce, ServiceTitan, Jobber, Clio, GoHighLevel, Pipedrive, Zoho,
Google/Outlook); Zapier, Make, API and custom workflows; English, French and
Spanish; custom voice; call recordings, lead logs and dashboard; monthly
performance review with an account manager; built to a written scope in 25–30
days.

### Integrations named by the reference sites

- **Zaptron:** GoHighLevel, HubSpot, Pipedrive, Salesforce, Zoho, Clio, Jobber,
  ServiceTitan, Twilio, Vapi, Zapier, Make, ElevenLabs, Airtable, Notion,
  Microsoft, Google, Sage, Google/Outlook calendars, API.
- **Keplar:** QuickBooks, Xero, Sage, Shopify, Square, Stripe, PayPal, Google
  Drive, WhatsApp, Slack, Telegram, Signal.
- **Zyntrix:** WhatsApp, web forms, portal leads, missed calls, SMS, calendar.
  "No CRM required."
- **PonixFlow:** calendars, forms, SMS and email alerts. Carrier verification
  through Twilio, SignalWire and Retell AI.
- **Dialbox:** "supported connected calendars", free number porting, toll-free
  numbers at $30/mo.
- **Clinics (our page):** Jane, Cliniko, Owl Practice, SimplePractice, Noterro,
  ClinicSense, Practice Better, Google Calendar, Outlook, Calendly, Zapier.

## 4. Go-live process (the how-it-works page)

Kept off the home page on purpose. The home page shows three steps (it picks
up → you get the text → they get booked). The full process is on /how-it-works/:

1. Map how calls run today: who answers, what gets asked, booked, escalated.
2. Turn that into a build brief for the AI agent specialist: prompts, call flows,
   escalation rules.
3. Gather business info, FAQs, services, pricing and transfer numbers (one form),
   plus carrier business verification.
4. Telephony: forward the existing number, port it, or get a new local number.
5. CRM, calendar and booking integrations with the developer.
6. Test calls on every path; fix what breaks before a customer hears it.
7. Train the client (texts, dispatch link, dashboard on Business) and hand over.
8. Keep the client updated with timelines and next steps; monthly tuning after.

## 5. Site map

- `/` home: hero, how it works, sample calls ("They call. You get the job."),
  plans, "set it up your way" configurator, who it's for, FAQ, call-back form
- `/pricing/` plans, missed-call calculator, full comparison table, setup fees, billing, FAQ
- `/how-it-works/` go-live steps, forwarding options, Pro booking flow, timeline, checklist
- `/allied-health/` clinic plans, integrations, privacy, FAQ
- `/ai-receptionist/{plumbers, hvac, electricians, roofers, locksmiths, tree-services, lawyers, therapists}/`
- `/privacy/`, `404.html`

## 6. Search and answer engines (SEO + AEO)

- One clear H1 and a question-led FAQ on every page; answers start with the
  direct answer and name prices in CAD.
- JSON-LD: ProfessionalService (with GTA cities), Service, OfferCatalog with
  every plan price, FAQPage (generated from the visible FAQ), HowTo
  (how-it-works), BreadcrumbList.
- `sitemap.xml`, `robots.txt` (search and AI crawlers allowed), `llms.txt`
  (plain summary of plans and pages for AI assistants), canonical URLs, Open
  Graph share image.
- Eight industry landing pages target searches like "AI receptionist for
  plumbers Toronto".

## 7. Policies written into the site — confirm or change

These are on the site now and are reasonable defaults, but they are business
decisions:

- Month to month, cancel with 30 days' notice.
- Spam, robocalls, wrong numbers and hang-ups under 10 seconds don't count as calls.
- Going over: text at 80% and 100%, nothing cut off, no surprise charges.
- Yearly billing gives 2 months free (Solo $1,290, Pro $2,990).
- Toll-free number $30/month; porting free.
- Upgrades: only the difference in setup fees is charged.
- Go-live times: Solo 3 business days, Pro ~7 days, Team 2–3 weeks, Business 25–30 days.
- Call-back promise: within one business day.
- Team includes "quotes your standard prices" and one job-software connection.
- Clinic plan: up to 8 practitioners.

## 8. Suggestions

1. **Check the referral maths.** Referring a client out at the same price leaves
   only the setup fee as margin. Agree a referral or reseller commission with
   Dialbox, PonixFlow, Zyntrix, Keplar or Zaptron before you rely on them.
2. **Add analytics** (Plausible or GA4) and put `?utm_source=instagram&utm_content=<reel>`
   on the bio link, so you know which reels bring calls.
3. **Set up a Google Business Profile** as a Toronto service-area business. It is
   the biggest local search lever, and it collects reviews.
4. **Add real proof as it arrives:** the first three clients' quotes and (with
   permission) a recorded call. The site deliberately invents none.
5. **Make a 20–30 second screen recording** of a real call and the texts arriving.
   Use it as a reel and as the moving picture on the home page.
6. **Founding-client offer** (as Zyntrix does): half-price setup for the first five
   clients in exchange for a testimonial.
7. **Let Solo and Pro buy without a call:** Stripe payment links on those two
   buttons suit reels traffic.
8. **Make the demo line ask for the caller's trade,** so a plumber hears a plumbing
   call and a therapist hears an intake.
9. **Legal review:** have someone check the privacy page (CASL and SMS consent) and
   the clinic wording (PHIPA) before cold-calling clinics.
10. **Carrier registration:** register the business for SMS (A2P/toll-free
    verification) early; carriers ask for the privacy page URL.

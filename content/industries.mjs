// One entry per industry page at /ai-receptionist/<slug>/.
// scripts/build-pages.mjs turns these into HTML before every dev and build run.

export const INDUSTRIES = [
  {
    slug: "plumbers",
    name: "Plumbers",
    trade: "Plumbing",
    field: "field-4",
    title: "AI Receptionist for Plumbers in Toronto & GTA | Pulse Dispatch",
    description:
      "An AI receptionist for GTA plumbers. Answers 24/7, flags burst pipes and floods as urgent, texts you the job and books the customer. From $129/month.",
    h1: "AI receptionist for plumbers.",
    lede: "You're under a sink when the next burst pipe calls. Your AI receptionist answers in your shop's name, works out how urgent it is, and texts you the job with the address while the customer is still on the line.",
    calls: [
      ["Burst pipes and floods", "Asks if the water is off at the main, tells them how if it isn't, and marks the job urgent."],
      ["Clogged drains and toilets", "Takes the fixture, how long it's been happening, and whether it's the only one in the house."],
      ["Hot water tanks", "Gets the age, gas or electric, rental or owned, and whether there's a leak."],
      ["Quotes and estimates", "Books an estimate visit for renos and re-pipes instead of guessing a price."],
      ["Existing customers", "Recognises repeat callers and passes on what they need without making them start over."],
    ],
    emergency:
      "Active leaks, no water, sewage backups and gas smells are marked urgent. On Team and Business plans they ring your on-call plumber straight away; gas smells are told to leave the house and call Enbridge first.",
    sample: {
      quote: "A pipe under my kitchen sink just burst. I turned the water off at the main. Can someone come tonight? I'm at 14 Elm Street in Mississauga.",
      text: "New job · urgent. Burst pipe, kitchen sink. Water off at main. Maria S., 14 Elm St, Mississauga. (647) 555-0182. Wants someone tonight.",
    },
    plan: ["Pro", "$299/mo", "Most plumbers start on Pro: customers get the tech and arrival time by text, and you pick both from one link."],
    faqs: [
      ["Can an AI receptionist tell a plumbing emergency from a routine call?", "Yes. It asks the same questions you would: is water running now, is the main off, is anything damaged. Active leaks, no water and sewage backups are flagged urgent and sent to you first."],
      ["Will it quote my prices for drain cleaning or a toilet install?", "On Team and Business plans it can quote your standard prices from your own price list. On Solo and Pro it takes the details and books the visit, and you quote."],
      ["How much is an AI answering service for a plumber in Toronto?", "Pulse Dispatch starts at $129 a month plus a $49 setup for 100 calls. Pro, which adds dispatch and customer texts, is $299 a month plus $99 setup."],
    ],
  },
  {
    slug: "hvac",
    name: "HVAC",
    trade: "HVAC",
    field: "field-1",
    title: "AI Receptionist for HVAC Companies in Toronto | Pulse Dispatch",
    description:
      "An AI receptionist for GTA heating and cooling companies. Handles no-heat and no-AC calls 24/7, texts you the job and books the visit. From $129/month.",
    h1: "AI receptionist for HVAC.",
    lede: "The first cold night of the year, everyone calls at once. Your AI receptionist answers every one of them, gets the make and age of the unit, and puts the no-heat calls with kids or seniors at the top of your list.",
    calls: [
      ["No heat, no AC", "Asks what the system is doing, the thermostat setting, and who's in the house, and marks it urgent when it should be."],
      ["Equipment details", "Gets the brand, rough age, gas or electric, and whether it's rented, so the tech brings the right parts."],
      ["Maintenance and tune-ups", "Books seasonal tune-ups and filter changes into your quiet weeks."],
      ["Replacement quotes", "Books an in-home estimate for new furnaces, ACs and heat pumps, and asks about rebates they've heard of."],
      ["Rental and warranty questions", "Takes the details and tells callers when you'll get back to them."],
    ],
    emergency:
      "No heat in freezing weather, carbon monoxide alarms and gas smells are treated as emergencies. CO and gas callers are told to get out and call 911 or Enbridge; no-heat calls ring your on-call tech on Team and Business plans.",
    sample: {
      quote: "Our furnace keeps clicking but there's no heat, and it's minus ten out. We've got a baby at home. It's a Lennox, maybe twelve years old. We're in Brampton.",
      text: "New job · urgent, no heat. Lennox furnace, ~12 yrs, clicking. Infant at home. Raj P., Brampton. (905) 555-0147. Home all day.",
    },
    plan: ["Pro", "$299/mo", "Solo HVAC techs usually start on Pro. If you run a crew and want no-heat calls to ring whoever is on call, Team is $599."],
    faqs: [
      ["Can an AI receptionist handle the winter rush for an HVAC company?", "Yes. It answers every call at the same time, so nobody hears a busy signal or voicemail on the first cold night. Each one reaches you as a text with the details already sorted."],
      ["Does it work with ServiceTitan or Jobber?", "Jobber and Housecall Pro connect on the Team plan. ServiceTitan connects on the Business plan."],
      ["What does it cost for a small HVAC company?", "From $129 a month. Most owner-operators choose Pro at $299 a month plus a $99 setup, which adds dispatch texts and calendar booking."],
    ],
  },
  {
    slug: "electricians",
    name: "Electricians",
    trade: "Electrical",
    field: "field-3",
    title: "AI Receptionist for Electricians in the GTA | Pulse Dispatch",
    description:
      "An AI receptionist for GTA electricians. Answers 24/7, flags real hazards, sorts panel upgrades from small jobs and texts you every lead. From $129/month.",
    h1: "AI receptionist for electricians.",
    lede: "You can't answer the phone halfway through a panel swap. Your AI receptionist can. It sorts the outlet that stopped working from the burning smell behind the panel, and texts you each job with what you need to know.",
    calls: [
      ["Power out, breakers tripping", "Asks whether it's the whole house or one circuit, and whether the neighbours have power."],
      ["Hazards", "Burning smells, sparks and hot outlets are told to stay clear and call 911 if there's smoke, then flagged to you."],
      ["Panel upgrades and EV chargers", "Gets the panel size, the age of the house and what they want to add, and books an estimate."],
      ["Small jobs", "Lights, outlets and switches booked into the gaps in your week."],
      ["Permits and ESA questions", "Takes the question and tells the caller you'll follow up."],
    ],
    emergency:
      "Burning smells, sparking, water near electrical and full outages in winter are urgent. The caller gets safety instructions first; on Team and Business plans, the call rings your on-call electrician.",
    sample: {
      quote: "Half the outlets in my house just died and the breaker won't reset. There's a burning smell near the panel. I'm in Etobicoke.",
      text: "New job · emergency. Breaker won't reset, burning smell near panel. Told to stay clear, call 911 if smoke. Daniel O., Etobicoke. (416) 555-0110.",
    },
    plan: ["Pro", "$299/mo", "Pro suits most solo electricians. If you want hazards to ring your phone at 2 am, Team adds on-call routing."],
    faqs: [
      ["Can an AI receptionist give safety advice to callers?", "It gives the basic safety steps you approve, like staying away from the panel and calling 911 if there's smoke. It never tells anyone to touch wiring."],
      ["Will it book EV charger and panel upgrade estimates?", "Yes. It asks for the panel size, house age and what they want to add, then books an estimate visit or sends you the request."],
      ["Can I keep my business number?", "Yes. Forward unanswered calls to us from any carrier, or move your number over for free."],
    ],
  },
  {
    slug: "roofers",
    name: "Roofers",
    trade: "Roofing",
    field: "field-2",
    title: "AI Receptionist for Roofers in Toronto & GTA | Pulse Dispatch",
    description:
      "An AI receptionist for GTA roofers. Catches every storm and leak call 24/7, puts emergency tarps ahead of quotes, and books inspections. From $129/month.",
    h1: "AI receptionist for roofers.",
    lede: "After a storm your phone rings off the hook while you're up a ladder. Your AI receptionist answers every call, gets the address and what's leaking, and lines up the emergency tarps before the replacement quotes.",
    calls: [
      ["Active leaks", "Asks where the water is coming in and how fast, and flags it for a tarp or emergency repair."],
      ["Storm damage", "Gets missing shingles, fallen branches and gutter damage, and whether they've called insurance."],
      ["Replacement quotes", "Books an inspection and asks the roof's age, type and size of the house."],
      ["Insurance claims", "Collects the claim number and adjuster details if they have them."],
      ["Gutters, flashing, skylights", "Books small repairs for the next dry day."],
    ],
    emergency:
      "Water coming through ceilings and storm damage before more rain are urgent and texted first. On Team and Business plans they ring your on-call crew lead.",
    sample: {
      quote: "Water is coming through my bedroom ceiling since the storm. I think some shingles blew off. Can someone tarp it before more rain tomorrow? I'm in Oakville.",
      text: "New job · urgent, active leak. Missing shingles after storm, water through bedroom ceiling. Needs tarp before rain tomorrow. Susan C., Oakville. (289) 555-0163.",
    },
    plan: ["Pro", "$299/mo", "Pro books inspections and texts homeowners the time. Roofing crews running several trucks usually choose Team."],
    faqs: [
      ["Can an AI receptionist handle a flood of calls after a storm?", "Yes. It answers every call at once, so none go to voicemail, and sorts active leaks ahead of quotes."],
      ["Will it book roof inspections?", "Yes. On Pro it sends you the request and you pick the time with one tap; it can also book open slots straight into your calendar."],
      ["What does an AI receptionist cost for a roofing company?", "From $129 a month plus $49 setup. Pro is $299 a month plus $99 setup, and Team is $599 a month plus $2,500 setup."],
    ],
  },
  {
    slug: "locksmiths",
    name: "Locksmiths",
    trade: "Locksmith",
    field: "field-4",
    title: "24/7 AI Receptionist for Locksmiths in Toronto | Pulse Dispatch",
    description:
      "An AI receptionist for GTA locksmiths. Answers lockouts 24/7, gets the location and lock type, and texts you the job in seconds. From $129/month.",
    h1: "AI receptionist for locksmiths.",
    lede: "Lockouts don't wait, and neither do your customers: if you don't answer, they call the next locksmith. Your AI receptionist answers at 3 am, gets the exact location and lock type, and texts you the job in seconds.",
    calls: [
      ["House and car lockouts", "Gets the exact location, the vehicle or door, and whether anyone vulnerable is with them."],
      ["Rekeys and lock changes", "Asks how many doors and the lock brand, and books a time."],
      ["Commercial and access control", "Takes the business, the system and what's wrong, and books a visit."],
      ["Safe and key cutting", "Takes the details and books the job."],
      ["Price questions", "Gives your call-out fee if you want it quoted, so nobody's surprised."],
    ],
    emergency:
      "Lockouts with children, pets or seniors, and break-in repairs, are flagged urgent. On Team and Business plans they ring your on-call locksmith right away.",
    sample: {
      quote: "I'm locked out of my house and my keys are inside. My kid's with me and it's getting cold. I'm at 310 Queen Street East, Toronto.",
      text: "New job · urgent lockout. House, keys inside, child with her. Ana R., 310 Queen St E, Toronto. (437) 555-0129. Will show ID.",
    },
    plan: ["Pro", "$299/mo", "Pro texts the customer who's coming and when, which stops most \"where are you?\" calls."],
    faqs: [
      ["Does an AI receptionist really answer at 3 am?", "Yes, every call, every hour. It never puts a caller on hold or sends them to voicemail."],
      ["Can it check that the caller lives there?", "It reminds callers you'll ask for ID at the door, and passes on anything that sounds off to you."],
      ["How fast do I get the job?", "Seconds after the call ends, by text and email, with the address and what's needed."],
    ],
  },
  {
    slug: "tree-services",
    name: "Tree services",
    trade: "Tree service",
    field: "field-2",
    title: "AI Receptionist for Tree Services in the GTA | Pulse Dispatch",
    description:
      "An AI receptionist for GTA tree services. Answers fallen-tree and storm calls 24/7, books estimates and texts you every job. From $129/month.",
    h1: "AI receptionist for tree services.",
    lede: "You can't hear your phone over a chainsaw. Your AI receptionist answers every call, finds out if a tree is on a house, a car or a wire, and books the estimates for when you're back on the ground.",
    calls: [
      ["Fallen trees and limbs", "Asks what it landed on: a house, a car, a fence or a power line."],
      ["Removals and trimming", "Gets the tree type, rough height and access to the yard, and books an estimate."],
      ["Stump grinding", "Takes how many stumps and their size."],
      ["City permits", "Notes whether the tree is on city property or protected, so you can check before quoting."],
      ["Photos", "Texts the caller a link to send photos, so you can quote faster."],
    ],
    emergency:
      "Trees on houses or vehicles are urgent. Trees on power lines are told to stay back and call Toronto Hydro or Alectra first, then flagged to you.",
    sample: {
      quote: "A big branch came down on my fence last night and it's leaning towards the garage. Can someone take it down this week? I'm in Richmond Hill.",
      text: "New job · this week. Large maple limb on fence, leaning to garage. Wants removal quote. Mark C., Bayview Ave, Richmond Hill. (905) 555-0188.",
    },
    plan: ["Solo", "$129/mo", "Many tree services start on Solo for answering and job texts, and move to Pro to book estimates automatically."],
    faqs: [
      ["Can an AI receptionist book tree removal estimates?", "Yes. On Pro it books estimate visits into your calendar or sends you the request to confirm."],
      ["What if a tree is on a power line?", "It tells the caller to stay well back and call their hydro company first, then texts you the details."],
      ["Is it worth it for a seasonal business?", "Yes. Plans are month to month, so you can run it through storm season and spring, and cancel with 30 days' notice when it's quiet."],
    ],
  },
  {
    slug: "lawyers",
    name: "Solo lawyers",
    trade: "Law firm",
    field: "field-1",
    title: "AI Receptionist for Solo Lawyers in Toronto | Pulse Dispatch",
    description:
      "An AI receptionist for solo criminal and family lawyers in the GTA. Answers 24/7, takes intake and conflict-check details, books consults. From $129/mo.",
    h1: "AI receptionist for solo lawyers.",
    lede: "You're in court when a new family law client calls, and they won't leave a voicemail. Your AI receptionist answers in your firm's name, takes the intake and conflict-check details, and books the consult.",
    calls: [
      ["New client intake", "Takes the type of matter, the other party's name for a conflict check, and how they heard of you."],
      ["Criminal: urgent calls", "Arrests, bail and court dates tomorrow are flagged and sent to you right away."],
      ["Family: consult booking", "Separation, custody and support enquiries booked into your consult slots."],
      ["Existing clients", "Takes the message and the file name, and tells them when you'll call back."],
      ["Fees and Legal Aid", "Explains your consult fee and whether you take Legal Aid certificates, from your answers."],
    ],
    emergency:
      "Calls about an arrest, a bail hearing or a court date within 48 hours are urgent and sent to you immediately. The AI never gives legal advice.",
    sample: {
      quote: "I'm separating from my husband and we have two kids. I need to talk to a family lawyer about custody. I'm free most evenings.",
      text: "New consult · family law. Separation, two children, custody. Conflict check: Raj K. Priya K., (905) 555-0174. Weekday evenings.",
    },
    plan: ["Pro", "$299/mo", "Pro books consults and texts the client the time. If you use Clio and want intake to land in it, choose Business."],
    faqs: [
      ["Can an AI receptionist do a conflict check?", "It collects the names you need for a conflict check, including the other party, and sends them to you before the consult is confirmed. You run the check."],
      ["Does it work with Clio?", "Yes, Clio integration is included on the Business plan. On Solo and Pro, intake comes to you by text and email."],
      ["Will it give callers legal advice?", "No. It's set up to take details and book consultations only, and tells callers it can't advise on their matter."],
    ],
  },
  {
    slug: "therapists",
    name: "Therapists",
    trade: "Therapy practice",
    field: "field-3",
    title: "AI Receptionist for Therapists in Ontario | Pulse Dispatch",
    description:
      "An AI receptionist for therapists in private practice. Answers while you're in session, takes new-client enquiries without clinical details. From $129/mo.",
    h1: "AI receptionist for therapists.",
    lede: "You can't take calls in session, and new clients often only reach out once. Your AI receptionist answers kindly in your practice's name, takes what you need to book an intake, and keeps clinical details off the phone.",
    calls: [
      ["New client enquiries", "Takes the type of support they're looking for in their own words, availability and coverage."],
      ["Intake booking", "Books into your intake slots, or sends you the request to confirm."],
      ["Rates and coverage", "Answers your fee, sliding scale and which insurers' receipts you provide."],
      ["Rescheduling", "Moves existing clients to open times and tells you."],
      ["Crisis calls", "Gives 911 and 988 straight away and alerts you. It never tries to counsel."],
    ],
    emergency:
      "Anyone in crisis is told to call 911 or 988 right away, and you get an immediate alert. Everything else waits for your next break.",
    sample: {
      quote: "I'm looking for a therapist for anxiety. I'd prefer evenings, and I have coverage through Sun Life. Are you taking new clients?",
      text: "New client enquiry. Individual therapy, anxiety. Coverage: Sun Life. Tues/Thurs after 5. Jordan M., (647) 555-0193. No clinical details taken.",
    },
    plan: ["Practitioner", "$299/mo", "Most solo therapists choose our Practitioner plan, which books into your calendar or practice software."],
    faqs: [
      ["Is an AI receptionist appropriate for a therapy practice?", "For booking, yes. It's set up to take only what's needed to book an intake, never clinical history, and to handle crisis calls by giving 911 and 988 straight away."],
      ["Does it work with Jane or Owl Practice?", "Yes. Depending on your software settings it books directly or sends you a one-tap request to confirm. See our clinic plans for details."],
      ["What does it cost?", "From $129 a month for answering and messages. The Practitioner plan, with booking, is $299 a month plus a $499 setup."],
    ],
  },
];

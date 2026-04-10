const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
}

const audits = {
  "Seamodal Transport Corp.": [
    { category: "Offer", issue: "Site is a blank under-construction image, zero content", impact: "Any shipper who lands here immediately goes to a competitor — there is literally nothing to read or act on." },
    { category: "CTA", issue: "No phone, email, or contact method anywhere", impact: "Even a warm referral can't reach you — the site kills the lead before it starts." },
    { category: "Lead Capture", issue: "No quote form, no email capture, no inquiry path", impact: "You have zero ability to capture inbound freight leads from the web right now." },
    { category: "Differentiation", issue: "No mention of services, lanes, or what Seamodal actually does", impact: "Competitors in Hayward with any live content will win every Google search you could have owned." }
  ],
  "Sea Shipping": [
    { category: "Social Proof", issue: "39 years of experience buried in paragraph text", impact: "That credibility should be the first thing anyone sees — hiding it in copy means most visitors never register it." },
    { category: "Differentiation", issue: "No clear headline explaining NVOCC vs. standard freight broker", impact: "Most shippers don't know what NVOCC means — you're losing people who need exactly what you offer because the positioning is too technical." },
    { category: "Lead Capture", issue: "Rate request, customer service, and sales forms are three separate pages", impact: "Splitting one action across three forms creates friction — consolidating to one 'Get a Quote' flow would lift submissions." },
    { category: "Work Gallery", issue: "No case studies or cargo success stories anywhere on the site", impact: "Global freight buyers need proof of complex hauls handled — without it, your 39 years feels like a claim, not a track record." }
  ],
  "Lab Carriers": [
    { category: "Offer", issue: "Homepage headline says 'Reliable Courier Partner,' not what you deliver", impact: "Medical labs and high-tech clients searching for same-day biospecimen couriers won't self-identify you as their solution." },
    { category: "Lead Capture", issue: "No quote form or service inquiry form on the homepage", impact: "A healthcare procurement manager landing here has no fast path to engage you — they close the tab." },
    { category: "Social Proof", issue: "No client logos, delivery volume stats, or industry certifications shown", impact: "Medical and biotech clients require compliance confidence — no credentials visible means no trust, no contract." },
    { category: "Service Area", issue: "No map or list of coverage zones on the homepage", impact: "A Bay Area lab can't confirm you serve their route without digging — ambiguity kills the inquiry." }
  ],
  "Best Bay Trucking": [
    { category: "Social Proof", issue: "Stats show '1.2k+ happy clients' but zero testimonials or client names", impact: "Numbers without faces read like made-up marketing — one real shipper quote would do more than that stat." },
    { category: "Lead Capture", issue: "Contact form is generic with no freight-specific fields", impact: "Shippers need to specify container type, origin port, and delivery date — a plain form signals you're not set up to handle their request efficiently." },
    { category: "Differentiation", issue: "CTPAT compliance buried in Yard Storage section only", impact: "That security credential is a major trust signal for importers — it should be front and center in your hero section." },
    { category: "Service Area", issue: "Nevada and Arizona coverage mentioned only in drayage blurb", impact: "Shippers outside California don't know you reach them — you're leaving multi-state freight on the table." }
  ],
  "Optimal Transportation Inc.": [
    { category: "Social Proof", issue: "'0 Completed Projects' and '0 y Combine experience' are live on the homepage", impact: "Placeholder zeros on a client-facing page destroy credibility instantly — any shipper who sees that leaves." },
    { category: "Differentiation", issue: "No carrier authority numbers, insurance info, or USDOT displayed", impact: "Port shippers vet carriers before they call — missing credentials means you don't make the shortlist." },
    { category: "Lead Capture", issue: "Quote response time '1–2 hours' stated in FAQ but no urgent quote form exists", impact: "That speed is a competitive advantage — burying it in the FAQ and not building a form around it wastes the promise." },
    { category: "Social Proof", issue: "No customer testimonials or shipper reviews anywhere on the site", impact: "Port drayage is a trust-heavy buy — without one real customer voice, your 'Trusted Drayage Company' headline is just a claim." }
  ],
  "Fremont Smiles Dentistry": [
    { category: "Lead Capture", issue: "No new patient form or online scheduling on the homepage", impact: "Patients who visit after hours or on weekends have no way to book — they call a competitor who has online scheduling." },
    { category: "Social Proof", issue: "Only a Yelp badge — no star rating count shown", impact: "A badge with no visible number looks like a placeholder — patients want to see '4.8 stars, 200 reviews' right on the page." },
    { category: "Offer", issue: "No mention of accepted insurance plans anywhere on the site", impact: "Insurance is the first question new dental patients have — omitting it sends them to find a dentist who answers it upfront." },
    { category: "Work Gallery", issue: "No before/after smile photos despite offering veneers and implants", impact: "Cosmetic dental patients make decisions visually — selling veneers without photos is selling blind." }
  ],
  "San Ramon Family Dentistry": [
    { category: "Lead Capture", issue: "Appointment request is a navigation link, not an inline form", impact: "Every extra click to book loses patients — an embedded form on the homepage converts at 3x a linked page." },
    { category: "Social Proof", issue: "Facebook, Google, and Yelp icons link out but show no ratings or review count", impact: "Patients landing here see nothing that proves quality — they click away to check Google and find a competitor." },
    { category: "Work Gallery", issue: "No smile gallery or before/after photos for cosmetic services", impact: "You list veneers, whitening, and Invisalign but show no results — patients buying aesthetics need to see your work." },
    { category: "Offer", issue: "Headline 'Have an Attractive Smile Today!' doesn't name San Ramon or family focus", impact: "A generic headline does nothing for local SEO or instant relevance — people searching 'San Ramon family dentist' need to see that mirrored back." }
  ],
  "Southland Dental Care": [
    { category: "Offer", issue: "New patient special ($125 exam + X-rays) is buried in body copy", impact: "That offer should be in your hero banner — it's the strongest reason a price-shopping patient picks you over the dentist down the street." },
    { category: "Social Proof", issue: "Four testimonials but no Google or Yelp star rating displayed", impact: "'40-year practice' is huge — but without a public star count, new patients don't believe the claim." },
    { category: "Lead Capture", issue: "Two appointment forms on page but no online instant booking", impact: "Forms require a callback — patients who want to schedule at 9pm choose the competitor with real-time availability." },
    { category: "Offer", issue: "No insurance accepted list anywhere on the site", impact: "Hayward has heavy insured patient volume — if you accept Delta Dental or Medi-Cal and don't say so, you're invisible to that entire market." }
  ],
  "ButtercuP Diner & Bar": [
    { category: "Lead Capture", issue: "No email signup or loyalty program capture on the homepage", impact: "Open since 1988 with four locations but no way to reach repeat customers directly — every slow Tuesday is a missed re-engagement." },
    { category: "Social Proof", issue: "No customer reviews, ratings, or press mentions on the homepage", impact: "First-time visitors have no social validation — a Yelp rating or single strong quote would close the hesitation." },
    { category: "CTA", issue: "No online reservation option anywhere on the site", impact: "Families planning weekend brunch click away to OpenTable — you're not in that consideration set." },
    { category: "Differentiation", issue: "Origin story 'founded by David and Debbie in 1988' hidden in About page", impact: "That story is your differentiation against chain diners — it belongs in the hero, not buried where nobody reads it." }
  ],
  "Mua Oakland": [
    { category: "Work Gallery", issue: "No food photography on the homepage, only text menu items", impact: "Restaurant decisions are visual — a compelling plate photo converts a browser into a reservation faster than any headline." },
    { category: "Social Proof", issue: "Social icons present but no follower count or press quotes shown", impact: "Icons without proof of an active following look like an afterthought — one press quote pulls more weight." },
    { category: "Offer", issue: "'U R beautiful' tagline explains nothing about the cuisine or experience", impact: "A visitor who doesn't already know Mua can't tell what kind of restaurant this is — they'll go somewhere with a clearer hook." },
    { category: "Lead Capture", issue: "Private events email is plain text, not a form or CTA", impact: "Private dining is high-margin revenue — a 'Book Private Event' button would capture that business instead of relying on people typing an email address." }
  ],
  "Sirene": [
    { category: "Work Gallery", issue: "No food or interior photos — only a logo image on the homepage", impact: "SF Chronicle named you a best new restaurant and you're showing people a logo — the visual void kills the curiosity that press coverage creates." },
    { category: "Social Proof", issue: "Two Chronicle accolades shown but no quotes, critic names, or dates", impact: "Unnamed badges without context feel fabricated — quoting the actual review would make those awards land." },
    { category: "Lead Capture", issue: "Newsletter signup exists but no incentive or reason to join", impact: "A restaurant with weekly wine flights and events should be building an email list aggressively — there's no reason given to subscribe." },
    { category: "Offer", issue: "No cuisine description or 'what kind of restaurant is this' copy", impact: "New diners searching Oakland restaurants don't have enough to click 'Reserve' — the concept needs one sentence." }
  ],
  "First Realty Pryor & Associates": [
    { category: "Social Proof", issue: "Testimonials page in nav but zero reviews shown on homepage", impact: "Home buyers need agent trust signals immediately — a testimonials page nobody clicks is the same as no testimonials." },
    { category: "Differentiation", issue: "No agent bios or photos on the homepage beyond Mark Pryor's name", impact: "Real estate is a relationship buy — visitors can't connect with a team they can't see." },
    { category: "CTA", issue: "Homepage leads with 'Login' and 'Register' before any value proposition", impact: "Asking a cold visitor to register before they know why they should trust you is the fastest way to a bounce." },
    { category: "Service Area", issue: "Pittsburg and Contra Costa focus only visible deep in city search dropdowns", impact: "Local buyers searching 'real estate agent Pittsburg CA' get no immediate confirmation this firm owns that market." }
  ],
  "Delphi Realty Group": [
    { category: "Social Proof", issue: "'Over 300 Five-Star Reviews' headline but only one testimonial shown", impact: "If you have 300 reviews, show 6 — one quote under a bold claim looks cherry-picked and undermines the number." },
    { category: "Differentiation", issue: "Only Alex Khodadad featured — no team bios for other agents", impact: "A buyer working with anyone other than Alex has no reason to trust the team they'll actually get." },
    { category: "Lead Capture", issue: "'What's My Home Worth' form requires full contact info upfront", impact: "Sellers abandon valuation tools that demand their phone number before showing a number — reduce friction to capture more leads." },
    { category: "Offer", issue: "Headline 'NOW MAY BE THE BEST TIME TO SELL' with no data or argument", impact: "That claim without a local market stat reads like a generic ad — Pleasant Hill sellers need a reason to believe it." }
  ],
  "Navi Dhillon Realty Experts": [
    { category: "Social Proof", issue: "No agent photos, bios, or testimonials visible on the homepage", impact: "Fremont real estate is competitive — buyers choose agents they can see and read about, not a nameless firm." },
    { category: "Lead Capture", issue: "'Free Home Evaluation' form present but no urgency or trust signal near it", impact: "Sellers comparing three agents fill out the form that makes them feel most confident — a badge or stat next to the form tips the decision." },
    { category: "Differentiation", issue: "Tagline 'elevated level of personal service' is identical to dozens of realty sites", impact: "There is nothing on the homepage that explains why Navi Dhillon specifically — no niche, no specialty, no neighborhood claim." },
    { category: "Work Gallery", issue: "20+ carousel listings shown but no sold homes or closed transactions highlighted", impact: "Active listings show inventory — sold listings with days-on-market show performance, which is what a seller actually wants to see." }
  ],
  "Sexton Group Real Estate": [
    { category: "Work Gallery", issue: "No active or recently sold listings displayed on the homepage", impact: "A real estate homepage without visible listings sends buyers directly to Zillow instead of keeping them on your site." },
    { category: "Differentiation", issue: "Positioned as 'boutique' but no explanation of what that means for the client", impact: "Boutique is a promise, not a benefit — one concrete example of boutique service would make it land." },
    { category: "Social Proof", issue: "Four testimonials with no neighborhood, sale price, or timeframe", impact: "Vague praise doesn't prove local expertise — 'sold our Temescal home in 8 days over asking' does." },
    { category: "Lead Capture", issue: "Free home valuation CTA links away from the site", impact: "Sending a seller off your site for a valuation means you lose the session — that tool should live on your page." }
  ],
  "Law Office of Christopher Schlies": [
    { category: "Social Proof", issue: "40 years of experience stated but no client testimonials or case outcomes", impact: "Estate planning clients need to trust before they hand over their financial life — '40 years' without a single client voice is just a number." },
    { category: "Lead Capture", issue: "No contact form on the homepage — only a phone number and nav link", impact: "Prospects researching estate planning at night won't call at 10pm — an inline form captures those leads instead of losing them." },
    { category: "Work Gallery", issue: "No attorney photo anywhere on the homepage", impact: "Law is a personal trust business — a faceless firm page makes it harder for potential clients to feel comfortable reaching out." },
    { category: "Differentiation", issue: "Agricultural investments listed as a practice area with zero context", impact: "That niche specialty could dominate a targeted market — there's nothing explaining who it's for or what it covers." }
  ],
  "Moyal & Moyal": [
    { category: "Social Proof", issue: "No client testimonials, case results, or reviews anywhere on the site", impact: "Criminal defense clients are in crisis when they search — they need proof you've won for people like them before they call." },
    { category: "Lead Capture", issue: "Only a phone number — no intake form or free consultation offer", impact: "A scared DUI client at midnight won't call — an online 'Tell us about your case' form captures that lead while competitors sleep." },
    { category: "Offer", issue: "20+ practice areas listed with no primary focus", impact: "Trying to claim everything from DUI to military law makes you look unfocused — clients want a specialist, not a generalist." },
    { category: "Differentiation", issue: "Contact email is a Gmail address, not a firm domain", impact: "A Gmail address on a law firm's public website signals unprofessionalism to clients who are already skeptical about who to trust with their case." }
  ],
  "Le's Auto Body & Engine Repair": [
    { category: "Lead Capture", issue: "No online appointment booking — only a 'Contact Us Today' button", impact: "Car owners want to schedule a drop-off time, not wait for a callback — a booking tool keeps the job from going to the shop with online scheduling." },
    { category: "Social Proof", issue: "Five testimonials but no Google star rating or review count shown", impact: "Most people trust Google reviews over testimonials on the shop's own site — a displayed rating would triple the credibility." },
    { category: "Offer", issue: "No pricing, estimates, or 'free diagnostic' offer anywhere", impact: "Price anxiety is the #1 reason customers avoid auto shops — a free estimate offer removes the barrier and gets them in the door." },
    { category: "Differentiation", issue: "Family-owned since 1991 mentioned in body copy only", impact: "34 years in Oakland is a powerful trust signal being wasted in a paragraph — it should be in the headline." }
  ],
  "Oakland Active Health Center": [
    { category: "Social Proof", issue: "'65K+ Patients Helped' stat shown but review sections are empty placeholders", impact: "A blank reviews section next to a bold stat raises doubt — either show the actual reviews or remove the placeholder sections." },
    { category: "Work Gallery", issue: "No clinic photos, treatment room images, or doctor-patient photos on the homepage", impact: "New chiropractic patients are anxious about the environment — showing the space and the doctor in action removes hesitation." },
    { category: "Lead Capture", issue: "New Patient Scheduling links to an external booking tool — no homepage form", impact: "Every redirect is a chance to lose the patient — an embedded inline form converts faster than a link that opens a new tab." },
    { category: "Differentiation", issue: "'Most insurance accepted or best cash deal' stated but no insurance list or cash prices given", impact: "Patients comparison-shopping by insurance coverage need specific plan names, not a vague promise." }
  ],
  "Livermore Chiropractic": [
    { category: "Lead Capture", issue: "Primary CTA is a phone number only — no booking tool or form", impact: "A phone number is a passive CTA in 2026 — patients expect to book online at any hour without making a call." },
    { category: "Social Proof", issue: "Testimonials section shows only a background image with no visible quotes", impact: "A broken testimonials section is worse than no testimonials — it signals a neglected site and erodes trust." },
    { category: "Offer", issue: "No mention of insurance accepted or new patient pricing on the homepage", impact: "Livermore patients choosing between chiropractors will pick the one that answers the cost question first." },
    { category: "Differentiation", issue: "Contact email is an @sbcglobal.net address, not a practice domain", impact: "An @sbcglobal.net email on a healthcare site looks outdated — it undercuts the professionalism of the practice before the first appointment." }
  ],
  "Deer Valley Chiropractic": [
    { category: "Social Proof", issue: "Testimonials referenced in navigation but no quotes appear on the homepage", impact: "Antioch patients choosing a chiropractor need social proof on the first screen, not buried on a page they have to seek out." },
    { category: "Offer", issue: "No insurance provider logos or accepted plans listed anywhere", impact: "Workers' comp and auto injury patients come in through insurance — they need to confirm coverage before calling." },
    { category: "Work Gallery", issue: "No clinic photos, doctor photos, or patient success visuals on the homepage", impact: "Patients choosing a hands-on provider want to see who will be treating them — a chiropractic homepage with no human faces feels cold." },
    { category: "Differentiation", issue: "DOT physical and QME credentials buried in service list", impact: "Those are rare, high-value specialties — truckers and injury attorneys search specifically for them and they should be in the hero section." }
  ],
  "Paul Lyon CPA": [
    { category: "Offer", issue: "Homepage headline is 'Welcome! Thank you for visiting our website'", impact: "That headline communicates nothing — a business owner landing here doesn't know within 3 seconds if this firm handles their tax situation." },
    { category: "Social Proof", issue: "No client testimonials or reviews anywhere on the site", impact: "CPAs are chosen on trust — four certification badges aren't a substitute for a real client voice." },
    { category: "Lead Capture", issue: "'Request a Quote' button links to a separate contact page", impact: "Inline forms convert 2–3x better than linked pages — the friction is costing you consultations." },
    { category: "Differentiation", issue: "Cryptocurrency accounting listed as a service with zero explanation", impact: "That's a high-demand niche — one sentence about your crypto tax experience would pull in clients willing to pay premium rates." }
  ],
  "Safwat & Marston CPA": [
    { category: "Social Proof", issue: "No client testimonials, case studies, or Google review count shown", impact: "Six self-written selling points carry zero weight without a single real client quote to back them up." },
    { category: "Lead Capture", issue: "Free consultations offered but no form or scheduling link on the homepage", impact: "A free consultation offer with no instant way to book it is a promise that leaks leads — add a Calendly link or inline form." },
    { category: "Offer", issue: "Headline 'WE TAKE YOU BEYOND THE NUMBERS' with no specifics following", impact: "What does 'beyond the numbers' mean for a Hayward small business owner? — the headline doesn't differentiate from any other CPA firm." },
    { category: "Differentiation", issue: "Both partners' personal cell numbers listed publicly on the site", impact: "Publishing cell numbers on a public website attracts spam — a main business line with an intake process looks more professional." }
  ],
  "Raymond Young CPA": [
    { category: "Social Proof", issue: "'Client Reviews' page in navigation but zero reviews shown on the homepage", impact: "A CPA's reviews page is the first thing a skeptical prospect clicks — if it's empty on arrival, they leave before they ever see it." },
    { category: "Offer", issue: "Homepage headline doesn't explain the tax-saving angle behind the saves.tax domain", impact: "A Fremont business owner who lands here from a Google ad doesn't immediately connect the domain to a tax-saving value proposition." },
    { category: "Lead Capture", issue: "Appointment booking links to workramen.com — an unfamiliar third-party platform", impact: "Sending prospects to an unknown booking platform creates hesitation — a Calendly or embedded form keeps the experience within your brand." },
    { category: "Differentiation", issue: "Forensic accounting listed in services with no explanation or case context", impact: "Forensic accounting commands premium fees — a brief case type description would attract high-value referrals who search specifically for it." }
  ],
  "Tax & Business Services of Oakland": [
    { category: "Social Proof", issue: "Three anonymous testimonials with no client names or specifics", impact: "Anonymous praise reads like placeholder copy — a named Oakland business owner saying exactly how much you saved them would close clients." },
    { category: "Offer", issue: "Homepage leads with 'Welcome' and '5 years in business' before explaining services", impact: "Oakland small business owners need to know within seconds if you handle their situation — the welcome message delays that answer." },
    { category: "Differentiation", issue: "Historic West Oakland location and community roots are mentioned but underplayed", impact: "That neighborhood identity is a differentiator no downtown CPA can claim — leaning into it would build loyalty with local business owners." },
    { category: "Lead Capture", issue: "'Schedule a Consultation' CTA has no hours or response time commitment shown", impact: "A business owner facing an IRS notice needs to know how fast you respond — '24-hour response guaranteed' next to the CTA would lift conversions." }
  ],
  "Vik Randhawa CPA": [
    { category: "CTA", issue: "Primary phone displayed as '1-888-vikprocpa' — not a real dialable number", impact: "A vanity phone number forces mobile users to translate letters while dialing — most won't bother." },
    { category: "Social Proof", issue: "Three testimonials but all use only first name and last initial", impact: "Partial names reduce credibility — full names or company names signal these are real clients, not fabricated reviews." },
    { category: "Differentiation", issue: "Nothing on the homepage makes a Newark business owner feel this firm is built for them", impact: "'You don't have to be a tax expert. That's our job.' is identical in tone to dozens of CPA sites — there's no local hook." },
    { category: "Lead Capture", issue: "Newsletter form present but no stated frequency or content preview", impact: "Nobody subscribes to a newsletter with no pitch — '1 tax tip a month for Bay Area business owners' would double sign-up rates." }
  ],
  "Smeed CPA Inc.": [
    { category: "Social Proof", issue: "No client testimonials anywhere on the homepage", impact: "Four certification badges tell a prospect you're qualified — a client quote tells them you're worth hiring, and Smeed has neither on the homepage." },
    { category: "Differentiation", issue: "Three offices listed (Brentwood, TX, GA) with no explanation of the multi-state setup", impact: "A Brentwood client doesn't know if they're getting a local accountant or a remote call center — context would build trust, not erode it." },
    { category: "Offer", issue: "Headline 'Exceptional Accountants in Brentwood' with no supporting proof on the page", impact: "Exceptional is a self-assessment — without a stat, award, or testimonial underneath it, the claim is immediately dismissed." },
    { category: "Lead Capture", issue: "Newsletter subscription prompt present but no form visible on the page", impact: "A broken or missing signup form means you're advertising a benefit you can't deliver — fix it or remove it." }
  ]
}

// Fetch all leads
const res = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?select=id,business_name`, {
  headers,
})
const leads = await res.json()

let success = 0
let notFound = 0

for (const [name, findings] of Object.entries(audits)) {
  const lead = leads.find(l => l.business_name === name)
  if (!lead) {
    console.log(`✗ Not found: ${name}`)
    notFound++
    continue
  }

  const updateRes = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?id=eq.${lead.id}`, {
    method: 'PATCH',
    headers: { ...headers, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ audit_findings: findings }),
  })

  if (updateRes.ok) {
    console.log(`✓ ${name}`)
    success++
  } else {
    const err = await updateRes.text()
    console.log(`✗ ${name} — ${err}`)
  }
}

console.log(`\nDone: ${success} updated, ${notFound} not found`)

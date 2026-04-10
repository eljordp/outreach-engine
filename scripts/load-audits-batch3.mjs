const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
}

const audits = {
  "McKenna Brink Signorotti LLP": [
    { category: "CTA", issue: "Phone number buried in footer, no click-to-call button", impact: "Anyone on mobile who wants to call has to hunt for the number — most won't bother." },
    { category: "Lead Capture", issue: "No contact form on the homepage", impact: "A visitor ready to hire you right now has nowhere to raise their hand — they move on to the next firm." },
    { category: "Social Proof", issue: "Zero testimonials, reviews, or case outcomes anywhere on the site", impact: "Law is a trust-first purchase — without proof anyone has worked with you and won, visitors don't convert." },
    { category: "Offer", issue: "No free consultation CTA or defined next step", impact: "'Learn more' is not an offer — visitors leave without knowing what it costs or how to get started." }
  ],
  "Jarvis Garage Door Service": [
    { category: "Social Proof", issue: "Yelp and Facebook linked but no reviews embedded on-page", impact: "Visitors who don't click away never see that you're trusted — the credibility stays locked off-site." },
    { category: "Lead Capture", issue: "Homepage has no inquiry or quote request form", impact: "Anyone browsing after hours can't leave their info — you lose the lead before morning." },
    { category: "Offer", issue: "No urgency offer — no same-day, free quote, or emergency pricing hook", impact: "Garage door calls are usually urgent; without a hook you look the same as every competitor in the area." },
    { category: "Differentiation", issue: "'Professional,' 'reliable,' 'trained' used but nothing that proves it", impact: "Every garage door company says the same words — without specifics like years in business or installs done, you're invisible." }
  ],
  "Allied Landscape": [
    { category: "Offer", issue: "No homepage headline communicating who you serve or what outcome you deliver", impact: "'Design, Installation and Maintenance' is a category, not a value proposition — property managers don't know you're built for them." },
    { category: "Social Proof", issue: "No client testimonials, reviews, or named project references anywhere", impact: "Commercial landscape contracts are high-dollar decisions — without proof of past clients trusting you, the proposal never gets opened." },
    { category: "Work Gallery", issue: "No project portfolio or before/after photos on the site", impact: "Buyers of landscape services need to see your work before they believe the pitch — no photos means no visual proof." },
    { category: "Lead Capture", issue: "'Request a Proposal' goes to a page, not an embedded form", impact: "Every extra click you add to the conversion path loses a percentage of prospects — the form should be right there." }
  ],
  "Raymond Kelly Painting": [
    { category: "Social Proof", issue: "Testimonials page exists but no reviews surface on the homepage", impact: "Most visitors never click to a second page — your best proof of quality is hidden where it does zero work." },
    { category: "Differentiation", issue: "C-33 license and bonding mentioned but not called out visually", impact: "Most homeowners don't know what C-33 means — turning it into a trust badge with plain language would actually convert." },
    { category: "Service Area", issue: "'East Bay' is vague — only three cities named in the page title", impact: "A homeowner in Brentwood or Pleasanton assumes you don't serve them and finds someone who says so clearly." },
    { category: "Work Gallery", issue: "Only three before/after pairs with no labeled project locations", impact: "Three photos don't build confidence for a $5K+ paint job — more variety plus project context would close skeptical buyers." }
  ],
  "Souza & Viviani Plumbing": [
    { category: "Work Gallery", issue: "No photos of completed work — only one stock tool image", impact: "A 100-year-old company with nothing to show visually signals the site hasn't been updated since dial-up." },
    { category: "Social Proof", issue: "Customer Lobby badge present but no visible star rating or review count", impact: "A badge with no number behind it is just a logo — customers need to see 4.8 stars and 200 reviews to trust it." },
    { category: "Lead Capture", issue: "No homepage form — only phone numbers and a 'Request Service' link", impact: "Evening and weekend visitors can't submit a request without calling — you're giving away leads to competitors with online booking." },
    { category: "Offer", issue: "'Family owned 100 years' is the headline but no urgency hook follows", impact: "History is nice, but a visitor with a burst pipe needs to know you're available now and how fast you show up." }
  ],
  "Star Catering & Cafe": [
    { category: "Lead Capture", issue: "'Order Now' redirects to an external third-party platform", impact: "Sending a catering inquiry off your own site breaks trust mid-conversion — you lose the lead the moment they feel handed off." },
    { category: "Service Area", issue: "'Bay Area' is the only geographic claim — no cities or delivery radius listed", impact: "Event planners in Fremont or San Jose won't call if they don't know you'll travel there — specifics close the question fast." },
    { category: "Offer", issue: "No visible pricing tiers, per-person rates, or starting price", impact: "Catering buyers want a ballpark before they call — without any number, you lose price-sensitive shoppers before they engage." },
    { category: "Differentiation", issue: "'Fresh and delicious comfort food' is the only differentiation claim", impact: "Every catering company says fresh and delicious — 'serving corporate clients since 1987 with guaranteed on-time delivery' is actually different." }
  ],
  "Zocchi & Associates": [
    { category: "CTA", issue: "'Get Started' for buyers links out to eXp Realty's platform, not your site", impact: "You're spending money getting people to your site then immediately shipping them to a competitor's branded portal." },
    { category: "Offer", issue: "'Best possible service' is the headline — no specific outcome or promise", impact: "Every agent says service-first — 'sold 500+ Bay Area homes with an average 7-day close' is a claim that actually converts." },
    { category: "Social Proof", issue: "'Trusted by 500+ sellers and buyers' is unlinked, unsourced, and has no detail", impact: "A bare stat with no story or third-party proof reads like a number you made up — link it to Zillow reviews or add real client quotes." },
    { category: "Lead Capture", issue: "Home valuation offer exists but no embedded form — requires navigating away", impact: "A seller ready to find out what their house is worth should be able to enter their address right on the homepage." }
  ],
  "Oeste Bar & Kitchen": [
    { category: "CTA", issue: "'Book a Reservation' and 'Order Now' buttons are broken placeholder links", impact: "Someone who clicks to book or order hits a dead end — they close the tab and go somewhere that actually works." },
    { category: "Lead Capture", issue: "No private events inquiry form or contact option for group bookings", impact: "You have a rooftop and a full kitchen — event revenue is yours to lose if there's no way to capture a corporate party lead." },
    { category: "Offer", issue: "Happy hour exists but no times, deals, or menu preview on the homepage", impact: "Happy hour is your highest-converting foot traffic driver — if visitors can't see the deal, they go to the bar down the street." },
    { category: "Work Gallery", issue: "Only four food photos — no rooftop, venue, or ambiance shots", impact: "People choose restaurants on vibe first, food second — not showing the rooftop experience leaves your best selling point off the table." }
  ],
  "Evolution Plumbing Inc": [
    { category: "Work Gallery", issue: "No project photos anywhere — only stock service category images", impact: "Three testimonials can't do the job that one real photo of a finished job would — you're telling instead of showing." },
    { category: "Differentiation", issue: "'5 Star Yelp Business' claimed but no link, rating count, or badge shown", impact: "An unverified claim is weaker than saying nothing — link to your Yelp page so people can see it for themselves." },
    { category: "Lead Capture", issue: "Contact form has no service type or urgency field", impact: "You get a lead with no context on what they need, which slows your response and makes you look less prepared than a competitor." },
    { category: "Offer", issue: "'Free Quote' is listed as a feature bullet, not a visual CTA", impact: "Free quote buried in a feature list does nothing — make it a button with a form and watch call volume increase." }
  ],
  "Boyes Electrical Services": [
    { category: "Social Proof", issue: "Zero reviews, testimonials, or ratings anywhere on the site", impact: "You're asking people to invite a stranger into their home to touch their electrical panel — without social proof, the answer is no." },
    { category: "Lead Capture", issue: "No contact form on the homepage — only phone and email", impact: "After-hours visitors with an electrical emergency can't submit a request — they find the company with an online form." },
    { category: "Offer", issue: "'Free Quote' in header goes to contact page, not a form", impact: "Free quote is your best hook — if clicking it doesn't instantly deliver a form, you've broken the most important promise on your site." },
    { category: "Differentiation", issue: "OSHA certification and master electricians listed but never explained", impact: "Homeowners don't know what OSHA certification means for their safety — plain-language explanation would make this actually persuasive." }
  ],
  "O.T. Electric Inc": [
    { category: "Social Proof", issue: "Only one testimonial on the homepage, no star rating displayed", impact: "One review isn't enough to convince anyone to book an electrician — 40+ reviews with a visible star rating is the baseline now." },
    { category: "Work Gallery", issue: "Three uncaptioned images with no project context", impact: "Photos without a story are just decoration — naming the job, city, and scope turns a photo into proof." },
    { category: "Lead Capture", issue: "'Book Appointment' goes to a contact page, not an embedded form", impact: "Every page transition between a visitor and booking loses conversion rate — the form should live on the homepage." },
    { category: "Offer", issue: "No incentive for first-time customers or emergency service hook", impact: "40+ cities served is a reach claim but without a reason to choose you today over someone else, it's just geography." }
  ],
  "Gill's Electric": [
    { category: "Social Proof", issue: "Only two short testimonials for a 70-year, three-generation business", impact: "70 years in business deserves 200+ Google reviews front and center, not two unsigned quotes." },
    { category: "Offer", issue: "EV charger installation in headline but no dedicated section or offer", impact: "EV chargers are the highest-search electrical service in Oakland right now — burying it in a headline without a page or offer wastes the traffic." },
    { category: "CTA", issue: "Two different phone numbers in the header with no context for which to call", impact: "Two numbers with no explanation creates hesitation — one clear primary line converts better." },
    { category: "Work Gallery", issue: "Gallery linked in nav but no preview or samples on the homepage", impact: "Visitors who don't click to a second page never see your work — three strong project photos on the homepage would do more than a hidden gallery." }
  ],
  "H.F. Layton Law Office": [
    { category: "Social Proof", issue: "No client testimonials, case results, or reviews for a 34-year firm", impact: "34 years of practice with nothing to show publicly — a single verifiable client win would move more prospects than any credential." },
    { category: "Offer", issue: "'Low-Cost Initial Consultation' is the main hook but no price or format stated", impact: "'Low-cost' means nothing without a number — $75 for 30 minutes is a concrete offer that people will schedule on the spot." },
    { category: "Differentiation", issue: "Bilingual English/Spanish service buried in body text", impact: "In Brentwood and Antioch, Spanish-language legal help is a major competitive advantage — it should be front and center, not a footnote." },
    { category: "Work Gallery", issue: "No case type examples, outcomes, or client scenarios described", impact: "A divorced parent or estate planning client can't see themselves in your work — two anonymized case scenarios make them feel understood." }
  ],
  "RK Roofing & Construction": [
    { category: "Social Proof", issue: "Yelp and Instagram linked but no review count or stars on the page", impact: "20 years and manufacturer partnerships mean nothing to a homeowner who needs to see that 150 neighbors trusted you with their roof." },
    { category: "Lead Capture", issue: "No homepage estimate form — 'Request a Free Estimate' goes to a contact page", impact: "Roofing estimates are the entry point to every sale — a simple form on the homepage would double your inquiry rate." },
    { category: "Offer", issue: "Five-year transferable warranty mentioned once in small text only", impact: "A transferable warranty adds resale value to their home — it's buried where no one sees it when it should be in the hero." },
    { category: "Differentiation", issue: "'All nine Bay Area counties' claimed but no local city-specific content", impact: "A homeowner in Walnut Creek Googling 'roofer near me' never finds you — hyper-local pages would own that traffic." }
  ],
  "Diablo Dentistry": [
    { category: "Work Gallery", issue: "No before/after smile gallery or cosmetic case photos anywhere", impact: "Invisalign and cosmetic work are your highest-ticket services — patients won't book without seeing results that look like their own teeth." },
    { category: "Social Proof", issue: "Three testimonials shown but no star rating or Google review count", impact: "Three names mean almost nothing in 2025 — a visible 4.9-star badge with 300 reviews closes the skeptic instantly." },
    { category: "Offer", issue: "Advanced tech (iTero, Zeiss laser) listed but not connected to patient benefit", impact: "'3D digital imaging' impresses dentists, not patients — 'we spot problems other dentists miss' is how you make it land." },
    { category: "CTA", issue: "'Request Appointment' links to a separate booking interface, not an embedded form", impact: "Patients booking on lunch breaks need frictionless scheduling — an embedded calendar captures appointments other practices miss." }
  ],
  "E&P Financial Solutions": [
    { category: "Social Proof", issue: "A reviews page exists but zero testimonials or ratings show on the homepage", impact: "'Small business tax experts' is a big claim — without a single client quote on the homepage, skeptical business owners scroll right past." },
    { category: "Offer", issue: "'Book a Consultation' appears six times but no mention of cost or what's covered", impact: "Business owners guarding their time won't book a vague consultation — tell them it's free, 30 minutes, and what they'll leave with." },
    { category: "Differentiation", issue: "Industry niches (roofers, realtors, acupuncturists) buried at the bottom of the page", impact: "If you specialize in roofers and realtors, that should be line one of your homepage — niche specificity is your biggest conversion lever." },
    { category: "Lead Capture", issue: "No homepage form — all leads must navigate to the /contact page", impact: "A business owner ready to switch accountants won't hunt for your form — they'll book with whoever makes it easiest." }
  ],
  "Concord Auto Service": [
    { category: "Work Gallery", issue: "No photos of technicians, actual repairs, or the shop floor in action", impact: "Vehicle illustrations don't build trust with someone handing you their car — real shop photos showing your team at work do." },
    { category: "Social Proof", issue: "Three reviews shown but no total review count or platform rating visible", impact: "Holly, Paula, and Max are great — but '4.8 stars across 180 Google reviews' is the number that makes a first-timer feel safe." },
    { category: "Lead Capture", issue: "'Book Now' in the header but booking form isn't embedded on the homepage", impact: "Someone searching for an open appointment on Saturday needs to get there in one click — every extra step is a lost booking." },
    { category: "Offer", issue: "Fleet services highlighted but no fleet-specific offer or intake path", impact: "Fleet managers need a dedicated quote process — sending them through the same form as retail customers signals you don't really specialize." }
  ]
}

const res = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?select=id,business_name`, { headers })
const leads = await res.json()

let success = 0, notFound = 0

for (const [name, findings] of Object.entries(audits)) {
  const lead = leads.find(l => l.business_name === name)
  if (!lead) { console.log(`✗ Not found: ${name}`); notFound++; continue }

  const r = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?id=eq.${lead.id}`, {
    method: 'PATCH',
    headers: { ...headers, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ audit_findings: findings }),
  })

  if (r.ok) { console.log(`✓ ${name}`); success++ }
  else { console.log(`✗ ${name} — ${await r.text()}`); }
}

console.log(`\nDone: ${success} updated, ${notFound} not found`)

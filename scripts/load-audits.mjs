const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
}

const audits = {
  "Marquee Pest Management": [
    { category: "CTA", issue: "Phone number is plain text, not tappable on mobile", impact: "Any mobile visitor who wants to call has to manually copy the number — most won't bother." },
    { category: "Offer", issue: "Homepage headline is just 'Welcome to Marquee Pest Management'", impact: "You have 3 seconds to tell a visitor what you do and why you're the right choice — a welcome message wastes all three." },
    { category: "Social Proof", issue: "No reviews embedded — only a BBB logo image", impact: "A badge no one clicks doesn't build trust; actual customer words do." },
    { category: "Lead Capture", issue: "No contact form or booking widget on homepage", impact: "Visitors who aren't ready to call right now have no other way to raise their hand — you lose them permanently." }
  ],
  "All Pro Window Cleaning": [
    { category: "Offer", issue: "Headline doesn't say why to choose them over competitors", impact: "Listing services isn't a pitch — without a clear differentiator, you're invisible next to every other window cleaner in the Bay Area." },
    { category: "Social Proof", issue: "No reviews or testimonials embedded anywhere on the homepage", impact: "Window cleaning is a trust purchase — no reviews means visitors leave to check Yelp and never come back." },
    { category: "Work Gallery", issue: "No before/after photos — only generic service category images", impact: "Customers want to see your actual work quality before they hand over their address — stock images don't close jobs." },
    { category: "Lead Capture", issue: "'Free Estimate' link goes to a separate page, no embedded form", impact: "Every extra click you add kills conversions — the estimate form should be right on the homepage." }
  ],
  "Williams Roofing": [
    { category: "Offer", issue: "Hero headline is 'Serving the Bay Area Since 1992' — no value prop", impact: "Longevity tells visitors nothing about why you're the right roofer for their specific job right now." },
    { category: "Social Proof", issue: "Zero reviews or testimonials anywhere on the homepage", impact: "Roofing is a $10K–$30K decision — no social proof means no trust, and no trust means no call." },
    { category: "Lead Capture", issue: "No contact form or online booking — just a phone number", impact: "Visitors who land after hours or prefer not to call have no way to convert — you lose every one of them." },
    { category: "Work Gallery", issue: "Gallery is buried in navigation — no photos on the homepage", impact: "Roofers win jobs by showing their work; making visitors hunt for it means most never see it." }
  ],
  "Valley Plumbing Inc": [
    { category: "CTA", issue: "Phone number is plain text, not a clickable tel: link", impact: "Every mobile visitor who wants to call has to type the number manually — a frictionless tap would convert far more." },
    { category: "Social Proof", issue: "Only Angi and Yelp badges — no actual review text on the page", impact: "Linking out to review sites sends warm leads away from your site before they've even contacted you." },
    { category: "Work Gallery", issue: "No project photos on the homepage — gallery links go elsewhere", impact: "Plumbing customers are making a trust decision; showing real job photos on the landing page builds that trust instantly." },
    { category: "Service Area", issue: "Service area is vague — just 'Tri-Valley area' and 'East Bay'", impact: "Homeowners in Pleasanton or Dublin search by city name — vague regions don't match how people look for local services." }
  ],
  "Tri-Valley Plumbing": [
    { category: "Offer", issue: "Tagline is just 'Reliable and Professional'", impact: "Every plumber in the Bay Area claims to be reliable and professional — this tells a visitor nothing that sets you apart." },
    { category: "Social Proof", issue: "Reviews section links to Facebook instead of showing actual reviews", impact: "A 'check us out on Facebook' link is not social proof — embedded 5-star quotes close jobs, external links don't." },
    { category: "Lead Capture", issue: "No contact form or online booking — only phone and email", impact: "After-hours visitors and people who prefer not to call have zero way to contact you — that's a full category of lost leads." },
    { category: "Differentiation", issue: "No unique selling point beyond 'unparalleled service'", impact: "'Unparalleled service' is a claim without evidence — a specific guarantee, warranty, or specialization would make it land." }
  ],
  "J.R. Heating & Cooling Systems": [
    { category: "CTA", issue: "No booking button above the fold — only a nav 'Contact' link", impact: "Visitors in an HVAC emergency want to act immediately; hiding the contact option in the nav costs you the highest-intent leads." },
    { category: "Lead Capture", issue: "No contact form on the homepage — phone only", impact: "Over 40% of service inquiries happen outside business hours — with no form, those leads go straight to a competitor." },
    { category: "Social Proof", issue: "No reviews embedded — only links to Yelp and Google", impact: "Sending visitors to Yelp to find your reviews means they'll also see your competitors' reviews right next to yours." },
    { category: "Service Area", issue: "Service cities only appear in hidden metadata, not on the page", impact: "If a homeowner in Hayward or Danville can't see that you serve their city on the page, they assume you don't and leave." }
  ],
  "Beci Electric": [
    { category: "CTA", issue: "No booking button in the hero — phone buried at bottom of page", impact: "The phone number only appears at the bottom of the page; any visitor who doesn't scroll never finds a way to contact you." },
    { category: "Lead Capture", issue: "No contact form — only a phone number and individual staff emails", impact: "Commercial clients researching contractors expect a professional intake form, not an inbox cold-call to a staff email." },
    { category: "Social Proof", issue: "No testimonials, ratings, or client quotes anywhere on the site", impact: "For commercial and industrial electrical work, references are everything — zero social proof is a dealbreaker for procurement teams." },
    { category: "Work Gallery", issue: "Only one project photo on the entire site — projects are text-only", impact: "You've done work at Oakland schools and transit systems — showing none of it makes the site look inactive." }
  ],
  "Fuller Handyman Service": [
    { category: "Offer", issue: "Hero headline is 'Spring Maintenance' — a seasonal placeholder", impact: "A homepage built around seasonal copy signals to visitors that the site is neglected and the business may not be active." },
    { category: "Social Proof", issue: "No reviews or testimonials anywhere on the site", impact: "Handyman work is 100% trust-based — letting a stranger into your home requires proof from other homeowners, and this site has none." },
    { category: "Differentiation", issue: "No clear reason to choose Fuller over any other handyman", impact: "'No job too small' and '40 years in business' are table stakes — a specific specialty or guarantee would convert browsers into callers." },
    { category: "CTA", issue: "No booking button above the fold — form is buried below scroll", impact: "The contact form exists but requires scrolling to find; moving it above the fold could double your lead capture rate." }
  ],
  "Garcia Fencing Landscaping & Tree": [
    { category: "Offer", issue: "Headline is 'Quality Outdoor Services' — no specificity", impact: "Three seconds on your site and a visitor still doesn't know if you do fencing, trees, landscaping, or all three — they bounce." },
    { category: "Social Proof", issue: "Reviews section is a single Yelp link — no embedded quotes", impact: "Yelp links take visitors off your site before they've converted; pulling even three testimonials onto the page keeps them in your funnel." },
    { category: "Work Gallery", issue: "Gallery exists but no photos visible on the homepage", impact: "Landscaping and fencing are visual purchases — visitors who don't see your work on the first screen rarely click deeper to find it." },
    { category: "Differentiation", issue: "'Family owned, 20+ years' doesn't separate you from the field", impact: "Every local landscaper says this — a specific specialty or guarantee would give visitors a real reason to call you first." }
  ],
  "H&J Landscaping & Concrete": [
    { category: "Social Proof", issue: "Only a Yelp link — no reviews or testimonials on the page", impact: "You have project photos and a solid service list, but zero social proof to close the deal — reviews on the page convert 3x better than offsite links." },
    { category: "Offer", issue: "No 'why choose us' — just services and a form", impact: "You're competing against dozens of paver and concrete contractors in Fremont; without a differentiator, price becomes the only deciding factor." },
    { category: "Differentiation", issue: "No guarantee, warranty, or unique angle mentioned", impact: "A single line about workmanship warranty or license number would immediately separate you from unlicensed competitors undercutting on price." }
  ],
  "Finish Coat Painting": [
    { category: "Social Proof", issue: "No reviews embedded — only Yelp, Facebook, and Google links", impact: "You have a 'Book Now' button and a chat widget but no proof you do good work — testimonials on the page would make those CTAs convert far better." },
    { category: "Offer", issue: "'Premier Painting Contractors' headline claims rank without proof", impact: "'Premier' is a word any painter can use — showing what makes you the best (portfolio, reviews, guarantee) is what earns the claim." },
    { category: "Differentiation", issue: "'Locally owned, licensed, quality workmanship' — generic differentiators", impact: "These are the minimum bar for any legitimate contractor; a specific process, prep standard, or paint brand would make you stand out." }
  ],
  "Normandy Heating & Air": [
    { category: "Lead Capture", issue: "No contact form — only phone and a Yahoo email address", impact: "A Yahoo email address as the primary web contact signals an outdated operation; a proper form would capture after-hours leads your competitors are getting." },
    { category: "Social Proof", issue: "No reviews embedded — only links to Yelp, Google, and Facebook", impact: "You're a third-generation family business with 35+ years — that story backed by real customer quotes would close visitors who are comparison shopping." },
    { category: "Work Gallery", issue: "No project photos on the homepage or gallery section", impact: "HVAC customers want to see installations and system upgrades — a before/after gallery builds confidence that your team does clean, quality work." },
    { category: "Differentiation", issue: "'Owner on every job' is buried — it's your best selling point", impact: "Personal owner involvement is a genuine differentiator most HVAC companies can't claim; it needs to be in the hero, not the fine print." }
  ],
  "C&T Pest Control": [
    { category: "CTA", issue: "Primary CTA is 'Please Contact Us' mid-page — nothing above the fold", impact: "High-intent visitors dealing with a pest emergency expect an immediate call button; mid-page passive text loses them to whoever answers faster." },
    { category: "Work Gallery", issue: "Image slider shows no actual before/after pest work", impact: "Pest control is an invisible service — showing exclusion work, entry point sealing, and results makes your expertise tangible in a way words can't." },
    { category: "Offer", issue: "Headline names cities served but not the core offer or differentiator", impact: "Listing cities reads like an SEO tag, not a pitch — it should lead with what makes C&T the safe, trusted choice." }
  ],
  "Collins Roofing": [
    { category: "CTA", issue: "No prominent booking button above the fold — only a nav link", impact: "Roofing customers shopping after a storm want to act immediately; a 'Get a Free Estimate' button in the hero would capture those high-urgency leads." },
    { category: "Work Gallery", issue: "No before/after gallery — only generic service and team photos", impact: "You've been doing Oakland roofs since 1994; showing before/after photos would prove quality in a way your competitors' sites can't match." },
    { category: "Differentiation", issue: "'Top-rated since 1994' is vague — no specifics on what makes them best", impact: "Five embedded testimonials is a good start, but a specific warranty or response time guarantee would harden the pitch." }
  ]
}

// Fetch all leads to get IDs
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

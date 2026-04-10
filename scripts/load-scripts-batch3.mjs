const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
}

const scripts = {
  "McKenna Brink Signorotti LLP": "Your phone number is buried in the footer with no contact form or consultation CTA on the homepage, which means potential clients land, see no easy next step, and leave to call a competitor. That friction costs you signed cases. I build law firm sites that put a free consultation form above the fold, surface testimonials and case outcomes front and center, and make it impossible to miss how to reach you. Done in under 2 weeks.",
  "Jarvis Garage Door Service": "Jarvis Garage Door's site makes claims about being professional and reliable but shows no reviews, no quote form, and no reason for someone with a broken garage door today to choose you over the next result on Google. That gap between claim and proof loses you emergency calls. I build service sites that embed real reviews, add an instant quote form, and give visitors a reason to act now. Done in under 2 weeks.",
  "Allied Landscape": "Allied Landscape's homepage has no headline that tells property owners whether you even serve them, and the proposal form sends visitors to a separate page where most drop off. That disconnect costs you estimate requests every week. I build landscaping sites with a clear above-the-fold value statement, embedded testimonials, a project portfolio, and a proposal form that stays on the page. Done in under 2 weeks.",
  "Raymond Kelly Painting": "Raymond Kelly Painting's testimonials are hidden on a separate page nobody clicks, your C-33 contractor license is not called out anywhere visible, and your three before-and-after photos have no descriptions explaining the job or the result. That makes it hard for a homeowner to trust you over a cheaper bid. I build painting contractor sites that surface reviews on the homepage, badge your license prominently, and turn project photos into proof that converts. Done in under 2 weeks.",
  "Souza & Viviani Plumbing": "Souza and Viviani Plumbing's homepage leads with a stock tool image and a Customer Lobby badge that shows no actual rating count, and there is no form for someone to request service without picking up the phone. For a family business with 100 years behind it, that first impression undersells everything you have earned. I build plumbing sites that lead with real photos, real numbers, and a homepage form that captures jobs without requiring a call. Done in under 2 weeks.",
  "Star Catering & Cafe": "Star Catering's Order Now button sends customers off your site to an external platform, there is no delivery radius or cities you actually serve listed, and your only differentiator is the phrase fresh and delicious comfort food. That combination pushes people to competitors who make ordering feel frictionless. I build catering sites that keep ordering on-page, list your real service area, and give customers clear pricing so they know what to expect before they call. Done in under 2 weeks.",
  "Zocchi & Associates": "Zocchi and Associates' Get Started button sends visitors to eXp Realty's portal instead of keeping them on your site, and your home valuation tool requires navigating away entirely. Your 500-plus sellers stat sits in the copy with no source or visual treatment. I build real estate team sites that keep every CTA on your domain, showcase your track record visually, and turn stats like that into trust signals that actually close leads. Done in under 2 weeks.",
  "Oeste Bar & Kitchen": "Oeste Bar's Book a Reservation and Order Now buttons are broken dead links right now, your happy hour has no times or deals listed, and your rooftop has no photos on the site despite being your biggest draw. Every person who clicks those buttons hits a dead end and books somewhere else. I will fix the broken flows, add a private events inquiry form, and build out your happy hour and rooftop sections with real photos. Done in under 2 weeks.",
  "Evolution Plumbing Inc": "Evolution Plumbing's site claims five-star Yelp status but provides no link or badge to back it, and the Free Quote offer is a bullet point in a list rather than a button anyone would notice. Someone looking for a plumber in Concord has no way to verify your reputation and no obvious path to contact you. I build plumbing sites that link directly to your real reviews, add a service-type field to the contact form, and make Free Quote the loudest CTA on the page. Done in under 2 weeks.",
  "Boyes Electrical Services": "Boyes Electrical's site has zero reviews visible anywhere, no homepage contact form, and the Free Quote link in the header goes to a contact page instead of an actual form. Someone ready to hire an electrician right now hits one extra wall and calls whoever responds faster. I build electrical contractor sites that surface reviews on the homepage, embed a real quote form, and make it effortless to reach you. Done in under 2 weeks.",
  "O.T. Electric Inc": "O.T. Electric has one testimonial on the page, three photos with no captions or project context, and a Book Appointment button that goes to a contact page instead of an embedded form. In a market where customers compare three electricians before calling, that first impression is not closing the gap. I build electrical contractor sites with real reviews visible, captioned project photos, and a booking form right on the homepage. Done in under 2 weeks.",
  "Gill's Electric": "Gill's Electric has been in business for 70 years across three generations but only two short testimonials on the site, and your EV charger installation specialty is buried in a headline with no dedicated section or offer. That is the highest-demand electrical service in Oakland right now and you are not capturing it. I build electrician sites that turn legacy into proof, put EV charger installs front and center, and make it easy for customers to reach you. Done in under 2 weeks.",
  "H.F. Layton Law Office": "H.F. Layton Law has 34 years of practice but no visible testimonials, case results, or client outcomes anywhere, and your bilingual English/Spanish service is buried in body text despite being a major advantage in Brentwood and Antioch. The consultation offer says low-cost but never gives a number. I build law firm sites that lead with a concrete consultation offer, surface your bilingual capability as a hero feature, and add case scenarios that make the right clients recognize themselves. Done in under 2 weeks.",
  "RK Roofing & Construction": "RK Roofing's Yelp and Instagram are linked but no review count or star rating appears on the page, your five-year transferable warranty is mentioned once in small text, and the estimate form sends visitors to a contact page instead of capturing them right there. In roofing, that warranty is a genuine differentiator that could close jobs on its own. I build roofing sites that put your warranty and reviews in the hero, and put the estimate form where visitors actually are. Done in under 2 weeks.",
  "Diablo Dentistry": "Diablo Dentistry offers Invisalign and cosmetic work but has no before-and-after photo gallery anywhere on the site, and your advanced technology like iTero and Zeiss is listed as a spec without explaining what it means for the patient. Cosmetic patients make decisions visually and they need to see results. I build dental sites with a real before-and-after gallery, patient-facing tech explanations, and an embedded scheduling form that captures appointments without friction. Done in under 2 weeks.",
  "E&P Financial Solutions": "E and P Financial has a whole reviews page but zero testimonials visible on the homepage, and Book a Consultation appears six times with no mention of what the call costs or covers. Your niche specialties in roofers, realtors, and acupuncturists are buried at the bottom where almost no one reaches them. I build accounting firm sites that put your niche front and center, explain the consultation clearly, and surface client proof before anyone has to ask for it. Done in under 2 weeks.",
  "Concord Auto Service": "Concord Auto Service shows vehicle illustrations instead of real shop photos, three customer reviews with no total count or star rating, and a Book Now button that does not embed a form on the page. In auto repair, trust is the first barrier and the site is not clearing it. I build auto shop sites with real technician photos, a visible review count, and a booking form that captures appointments without sending people somewhere else. Done in under 2 weeks."
}

const res = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?select=id,business_name`, { headers })
const leads = await res.json()

let success = 0, notFound = 0

for (const [name, script] of Object.entries(scripts)) {
  const lead = leads.find(l => l.business_name === name)
  if (!lead) { console.log(`✗ Not found: ${name}`); notFound++; continue }

  const r = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?id=eq.${lead.id}`, {
    method: 'PATCH',
    headers: { ...headers, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ pitch_script: script }),
  })

  if (r.ok) { console.log(`✓ ${name}`); success++ }
  else { console.log(`✗ ${name} — ${await r.text()}`) }
}

console.log(`\nDone: ${success} updated, ${notFound} not found`)

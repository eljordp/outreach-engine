import fs from 'fs';

const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
}

function getIndustry(name) {
  name = name.toLowerCase();
  if (name.includes('pool')) return 'pool';
  if (name.includes('tree') || name.includes('arbor')) return 'tree';
  if (name.includes('detail') || name.includes('auto beauty')) return 'detailing';
  if (name.includes('notary') || name.includes('signing')) return 'notary';
  if (name.includes('dog') || name.includes('pawsh') || name.includes('pet')) return 'pet';
  if (name.includes('cater') || name.includes('eat drink')) return 'catering';
  if (name.includes('baker') || name.includes('bakes') || name.includes('brioche')) return 'bakery';
  if (name.includes('wine') || name.includes('cask') || name.includes('pour')) return 'wine';
  if (name.includes('dance')) return 'dance';
  if (name.includes('photo') || name.includes('portrait')) return 'photography';
  if (name.includes('clean') || name.includes('maid')) return 'cleaning';
  if (name.includes('plumb')) return 'plumbing';
  if (name.includes('electric')) return 'electrical';
  if (name.includes('hvac') || name.includes('heating') || name.includes('air')) return 'hvac';
  if (name.includes('roof')) return 'roofing';
  if (name.includes('landscap') || name.includes('lawn')) return 'landscaping';
  if (name.includes('pest')) return 'pest';
  if (name.includes('dent') || name.includes('smiles')) return 'dental';
  if (name.includes('chiro')) return 'chiropractic';
  if (name.includes('real estate') || name.includes('realty')) return 'real estate';
  if (name.includes('law') || name.includes('attorney')) return 'law';
  if (name.includes('cpa') || name.includes('tax')) return 'cpa';
  return 'general';
}

function generateData(lead) {
  const industry = getIndustry(lead.business_name);
  
  let audit_findings = [];
  let pitch_script = "";
  
  const name = lead.business_name;

  if (industry === 'pool') {
    audit_findings = [
      { category: "Lead Capture", issue: "No instant quote form visible on the homepage.", impact: "High drop-off rate for visitors seeking fast service pricing." },
      { category: "Social Proof", issue: "Missing embedded reviews or testimonials from recent pool cleanings.", impact: "Fails to build trust compared to competitors with visible star ratings." },
      { category: "Mobile UX", issue: "Phone number is not tap-to-call on mobile devices.", impact: "Friction for users trying to call directly from their phones." }
    ];
    pitch_script = `${name}'s homepage has no tap-to-call phone number and no instant quote form, meaning anyone pulling it up on their phone in the backyard is likely bouncing to a competitor. That friction is costing you service routes every month. I build mobile-first sites for pool service companies that turn visitors into booked cleanings and repairs. Ships in under 2 weeks, built specifically for local service businesses. Link in the email if you want to see examples.`;
  } else if (industry === 'tree') {
    audit_findings = [
      { category: "Work Gallery", issue: "Lack of before/after photos for tree removal or trimming projects.", impact: "Visitors cannot visually verify the quality and scale of your work." },
      { category: "CTA", issue: "Emergency service contact is buried at the bottom of the page.", impact: "Lost leads during storm season when customers need immediate response." },
      { category: "Trust", issue: "Insurance and licensing information is not prominently displayed.", impact: "Reduces credibility for high-liability tree service work." }
    ];
    pitch_script = `${name}'s site is missing prominent before/after photos and your emergency contact info is buried, so anyone needing urgent tree removal has to dig to find it. In emergency tree service, if they can't find the button in three seconds, they call the next guy. I build sites for arborists that highlight licensing, show the work, and put emergency response front and center. Done in under 2 weeks. Link in the email.`;
  } else if (industry === 'detailing') {
    audit_findings = [
      { category: "Offer", issue: "Service packages are not clearly priced or differentiated.", impact: "Customer confusion leads to hesitation and abandoned bookings." },
      { category: "Booking", issue: "No integrated online scheduling system for appointments.", impact: "Forces customers to call or email, reducing impulse bookings." },
      { category: "Visuals", issue: "Hero image is generic and lacks high-gloss detail shots of actual client cars.", impact: "Fails to showcase the premium quality of your detailing service." }
    ];
    pitch_script = `${name}'s site forces visitors to hunt for service packages and has no direct online booking, which kills impulse buys for mobile detailing. When people want their car cleaned, they want to book it instantly, not send an email and wait. I build auto detailing sites with clear packages, stunning galleries, and seamless online scheduling. Built and live in under 2 weeks. Link below if you want to see it.`;
  } else if (industry === 'notary') {
    audit_findings = [
      { category: "Clarity", issue: "Service area and travel radius are not clearly defined above the fold.", impact: "Wastes time with inquiries outside your operating zone." },
      { category: "Trust", issue: "Missing professional headshot and visible credentials/certifications.", impact: "Lowers personal trust, which is critical for legal document signing." },
      { category: "CTA", issue: "Call to action is a generic 'Contact Us' instead of 'Book a Signing'.", impact: "Weak conversion prompt reduces the urgency to schedule." }
    ];
    pitch_script = `${name}'s primary call to action is just 'Contact Us', and there's no clear service area listed above the fold, meaning visitors have to guess if you even cover their city. For mobile notaries, speed and clarity are everything. I build notary sites that lead with your credentials, define your territory instantly, and make booking a signing one click away. Ships in under 2 weeks. Link in the email.`;
  } else if (industry === 'pet') {
    audit_findings = [
      { category: "Visuals", issue: "Lack of high-quality grooming before/after photos.", impact: "Pet owners cannot judge the quality of your styling." },
      { category: "Booking", issue: "No digital intake form for new pet clients.", impact: "Slows down the onboarding process for new grooming appointments." },
      { category: "Social Proof", issue: "Yelp/Google reviews are not embedded on the site.", impact: "Missed opportunity to leverage happy pet parents for credibility." }
    ];
    pitch_script = `${name}'s homepage has no digital intake form and missing before/after grooming photos, which means pet owners are leaving to find someone they can trust visually. Pet grooming relies heavily on visual proof and easy booking. I build pet salon sites that showcase your best grooms and integrate seamless booking for busy pet parents. Done in under 2 weeks. Link in the email.`;
  } else if (industry === 'catering') {
    audit_findings = [
      { category: "Menu", issue: "Menus are only available as downloadable PDFs.", impact: "Terrible mobile experience; many users will not download a file." },
      { category: "Lead Capture", issue: "Event inquiry form asks too many upfront questions.", impact: "High abandonment rate for potential corporate or wedding clients." },
      { category: "Visuals", issue: "Food photography is sparse or looks like stock imagery.", impact: "Fails to stimulate appetite or showcase presentation quality." }
    ];
    pitch_script = `${name}'s catering menus are trapped in PDF files and the event inquiry form is too long, which creates massive friction for anyone planning an event on their phone. When corporate clients are hungry for quotes, they won't jump through hoops. I build catering sites with mobile-friendly menus, stunning galleries, and high-converting inquiry forms. Ships in under 2 weeks. Link below.`;
  } else if (industry === 'bakery') {
    audit_findings = [
      { category: "E-commerce", issue: "No option to pre-order or reserve popular items online.", impact: "Losing revenue from customers who want guaranteed pickup." },
      { category: "Visuals", issue: "Hero section lacks mouth-watering, high-resolution pastry photos.", impact: "First impression does not convey the quality of the baked goods." },
      { category: "Information", issue: "Daily hours and location are not pinned to the top header.", impact: "Frustrates mobile users looking for quick store details." }
    ];
    pitch_script = `${name}'s homepage doesn't pin your hours to the top and lacks an online pre-order system, meaning you're missing out on guaranteed revenue from busy morning commuters. Bakeries thrive when impulse meets convenience. I build bakery sites that put your best pastries front and center, with dead-simple online ordering for pickup. Done in under 2 weeks. Link in the email.`;
  } else if (industry === 'wine') {
    audit_findings = [
      { category: "Offer", issue: "Tasting room reservations or wine club signups are hard to find.", impact: "Missed recurring revenue and lower foot traffic." },
      { category: "Atmosphere", issue: "Site design feels dated and doesn't match the in-person ambiance.", impact: "Disconnect between the digital brand and the physical experience." },
      { category: "Mobile UX", issue: "Event calendar is not responsive on mobile devices.", impact: "Locals cannot easily see upcoming tastings or live music." }
    ];
    pitch_script = `${name}'s tasting room reservations are buried and the event calendar is clunky on mobile, which directly hurts your weekend foot traffic. If locals can't see what's pouring or book a table instantly, they go elsewhere. I build wine bar sites that capture the ambiance of your space and drive seamless reservations and club signups. Ships in under 2 weeks. Link below.`;
  } else if (industry === 'dance') {
    audit_findings = [
      { category: "Schedule", issue: "Class schedule is difficult to read or requires downloading.", impact: "Creates a barrier for new students trying to drop in." },
      { category: "Trial", issue: "No prominent offer for a free trial or intro class.", impact: "Lowers the conversion rate of website visitors to studio bodies." },
      { category: "Video", issue: "Lack of high-energy class videos on the homepage.", impact: "Fails to convey the vibe and community of the studio." }
    ];
    pitch_script = `${name}'s class schedule is hard to navigate on mobile and there's no clear intro offer for first-timers, which means you're losing potential students before they even step in the door. Dance studios need to sell the energy and make drop-ins effortless. I build studio sites with integrated schedules, video hero sections, and high-converting trial offers. Done in under 2 weeks. Link in the email.`;
  } else {
    audit_findings = [
      { category: "Conversion", issue: "Lack of a clear, singular call-to-action in the hero section.", impact: "Visitors are unsure of the primary next step to take." },
      { category: "Trust", issue: "No client testimonials or case studies prominently displayed.", impact: "Missed opportunity to establish credibility immediately." },
      { category: "Mobile UX", issue: "Key navigation elements are difficult to interact with on smaller screens.", impact: "Poor mobile experience leads to higher bounce rates." }
    ];
    pitch_script = `${name}'s homepage lacks a singular, clear call-to-action and there are no visible testimonials above the fold. When visitors land on the site, they need to know instantly why they should trust you and exactly what to do next, or they leave. I build high-converting local business sites that fix these exact issues and turn traffic into leads. Built and live in under 2 weeks. Link below if you want to see it.`;
  }

  return { audit_findings, pitch_script };
}

async function processLeads() {
  const leadsRaw = fs.readFileSync('leads_to_process.json', 'utf-8');
  const leads = JSON.parse(leadsRaw);
  
  console.log(`Processing ${leads.length} leads...`);
  
  let success = 0;
  let errors = 0;

  for (const lead of leads) {
    const { audit_findings, pitch_script } = generateData(lead);
    
    const updateRes = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?id=eq.${lead.id}`, {
      method: 'PATCH',
      headers: { ...headers, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ audit_findings, pitch_script }),
    });

    if (updateRes.ok) {
      success++;
      if (success % 10 === 0) console.log(`Successfully updated ${success} leads...`);
    } else {
      const err = await updateRes.text();
      console.error(`Error updating ${lead.business_name}:`, err);
      errors++;
    }
  }
  
  console.log(`\nFinished processing! Successfully updated ${success} leads. Errors: ${errors}`);
}

processLeads();

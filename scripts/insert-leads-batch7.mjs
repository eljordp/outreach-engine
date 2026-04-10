import crypto from 'crypto'

const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const leads = [
  // CATERING
  { business_name: 'Aurora Catering Company', industry: 'Catering', city: 'Oakland', email: 'dawn@auroracateringbayarea.com', website: 'https://auroracateringbayarea.com', phone: '(510) 582-9529' },
  { business_name: 'Oakland Catering Company', industry: 'Catering', city: 'Oakland', email: 'info@oaklandcateringcompany.com', website: 'https://oaklandcateringcompany.com', phone: '(877) 789-4377' },
  { business_name: 'Eat Drink Be Merry Catering Co', industry: 'Catering', city: 'Walnut Creek', email: 'party@eatdrinkbemerrycatering.com', website: 'https://edbmcatering.com', phone: '(925) 315-0580' },
  { business_name: 'Sunrise Bistro and Catering', industry: 'Catering', city: 'Walnut Creek', email: 'cateringorders@sunrisebistrocatering.com', website: 'https://sunrisebistrocatering.com', phone: '(925) 930-6323' },
  { business_name: "Winslow's Catering", industry: 'Catering', city: 'Livermore', email: 'info@winslowscateringlivermore.com', website: 'https://winslowscateringlivermore.com', phone: '(925) 386-7110' },

  // BAKERIES
  { business_name: 'La Farine Bakery', industry: 'Bakery', city: 'Oakland', email: 'dodgeball@sbcglobal.net', website: 'https://lafarine.com', phone: '(510) 654-0338' },
  { business_name: 'A Sweet Affair Bakery', industry: 'Bakery', city: 'Walnut Creek', email: 'asweetaffairbakery@usa.com', website: 'https://asweetaffairbakery.com', phone: '(925) 944-1910' },
  { business_name: 'Brioche de Paris', industry: 'Bakery', city: 'Walnut Creek', email: 'briochedeparis1@gmail.com', website: 'https://briochedeparis.com', phone: '(925) 949-8091' },
  { business_name: 'Mamahouse Bakeshop', industry: 'Bakery', city: 'Fremont', email: 'mamahousebakes@gmail.com', website: 'https://mamahousebakes.com', phone: '(510) 789-5108' },

  // FOOD TRUCK
  { business_name: "DiDiCoCo's Southern Comfort LLC", industry: 'Food Truck', city: 'Antioch', email: 'didicocopralines@gmail.com', website: 'https://tasteofdidicocos.com', phone: '(925) 477-7161' },

  // WINE / BEER
  { business_name: 'Wine on Piedmont', industry: 'Wine Bar', city: 'Oakland', email: 'info@wineonpiedmont.com', website: 'https://wineonpiedmont.com', phone: '(510) 595-9463' },
  { business_name: 'CoCo Noir Wine Shop & Bar', industry: 'Wine Bar', city: 'Oakland', email: 'info@coconoirwine.com', website: 'https://coconoirwine.com', phone: '(510) 295-4838' },
  { business_name: 'Cask Taproom', industry: 'Craft Beer', city: 'Oakland', email: 'info+taproom@caskstore.com', website: 'https://caskstore.com', phone: '(510) 529-2337' },
  { business_name: 'The Pour Up Wine Bar', industry: 'Wine Bar', city: 'Antioch', email: 'thepourupwine@gmail.com', website: 'https://thepourupwinebar.com', phone: '(925) 526-0452' },

  // DANCE STUDIOS
  { business_name: 're.DEFINE Dance Studio', industry: 'Dance Studio', city: 'Hayward', email: 'hello@reDEFINEdance.com', website: 'https://redefinedance.com', phone: '(510) 227-8335' },
  { business_name: 'East Bay Dance Center', industry: 'Dance Studio', city: 'Oakland', email: 'info@eastbaydancecenter.org', website: 'https://eastbaydancecenter.org', phone: '(510) 336-3262' },
  { business_name: 'Full Out Studios', industry: 'Dance Studio', city: 'Oakland', email: 'hello@fulloutstudios.com', website: 'https://fulloutstudios.com', phone: null },
  { business_name: 'Danspace', industry: 'Dance Studio', city: 'Oakland', email: 'info@danspace.com', website: 'https://danspace.com', phone: '(510) 420-0920' },
  { business_name: 'BlackBox Studios', industry: 'Dance Studio', city: 'Oakland', email: 'hello@blackboxstudiosoakland.com', website: 'https://blackboxstudiosoakland.com', phone: null },
  { business_name: 'Expressions Dance & Arts', industry: 'Dance Studio', city: 'Pleasanton', email: 'info@expressions-dance-arts.com', website: 'https://expressions-dance-arts.com', phone: null },
  { business_name: 'Jazz N Taps Dance Studio', industry: 'Dance Studio', city: 'Pleasanton', email: 'dance@jazzntaps.com', website: 'https://jazzntaps.com', phone: '(925) 484-0678' },
  { business_name: 'Vineyard Ballet Academy', industry: 'Dance Studio', city: 'Pleasanton', email: 'vineyardballetacademy@gmail.com', website: 'https://vineyardballetacademy.com', phone: null },
  { business_name: 'The DA Dance Center', industry: 'Dance Studio', city: 'Concord', email: 'thedadancecenter@gmail.com', website: 'https://thedadancecenter.com', phone: '(925) 827-0733' },
  { business_name: 'Dance Connection Performing Arts Centre', industry: 'Dance Studio', city: 'Concord', email: 'info@danceconnectionpac.com', website: 'https://danceconnectionpac.com', phone: '(925) 676-5678' },

  // MUSIC SCHOOLS
  { business_name: 'Fremont Mission Music Institute', industry: 'Music School', city: 'Fremont', email: 'fmmi@sbcglobal.net', website: 'https://fmmimusic.com', phone: '(510) 438-9752' },
  { business_name: 'Cadence Academy of Music', industry: 'Music School', city: 'Fremont', email: 'info@cadence-music.com', website: 'https://cadence-music.com', phone: '(510) 573-0632' },
  { business_name: 'Village Music School', industry: 'Music School', city: 'Walnut Creek', email: 'wc@villagemusicschool.org', website: 'https://villagemusicschool.org', phone: '(925) 954-1779' },
  { business_name: 'Castro Valley School of Music', industry: 'Music School', city: 'Castro Valley', email: 'info@cvsom.com', website: 'https://cvsom.com', phone: '(510) 397-0721' },
  { business_name: 'Starland School of Music', industry: 'Music School', city: 'Alameda', email: 'starlandmusic@gmail.com', website: 'https://starlandmusic.com', phone: '(510) 523-4797' },
]

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal',
}

let inserted = 0, skipped = 0

for (const lead of leads) {
  const checkRes = await fetch(
    `${SUPABASE_URL}/rest/v1/outreach_leads?business_name=eq.${encodeURIComponent(lead.business_name)}&select=id`,
    { headers }
  )
  const existing = await checkRes.json()
  if (existing.length > 0) { console.log(`↷ Skip: ${lead.business_name}`); skipped++; continue }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ ...lead, stage: 'new', audit_findings: [], pitch_script: null, notes: null, pitch_token: crypto.randomUUID() }),
  })

  if (res.ok) { console.log(`✓ ${lead.business_name}`); inserted++ }
  else { console.log(`✗ ${lead.business_name} — ${await res.text()}`) }
}

console.log(`\nDone: ${inserted} inserted, ${skipped} skipped`)

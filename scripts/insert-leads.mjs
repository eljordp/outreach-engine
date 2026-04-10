import crypto from 'crypto'

const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const leads = [
  { business_name: 'Williams Roofing', industry: 'Roofing', city: 'Fremont', email: 'williamsroofing@sbcglobal.net', website: 'https://williamsroofing.net', phone: '(510) 623-1424' },
  { business_name: 'RK Roofing & Construction', industry: 'Roofing', city: 'San Leandro', email: 'admin@rkroofs.com', website: 'https://rkroofs.com', phone: '(510) 902-7663' },
  { business_name: 'Acker Roofing', industry: 'Roofing', city: 'Concord', email: 'info@ackerroofing.com', website: 'https://ackerroofing.com', phone: null },
  { business_name: 'Roof by Tom', industry: 'Roofing', city: 'Oakland', email: 'roofbytom@gmail.com', website: 'https://roofbytom.com', phone: null },
  { business_name: 'Collins Roofing', industry: 'Roofing', city: 'Oakland', email: 'office.collinsroofing@gmail.com', website: 'https://collinsroofingcompany.com', phone: null },
  { business_name: 'ArborTech Inc', industry: 'Tree Service', city: 'Hayward', email: 'info@arbortech1.com', website: 'https://arbortech1.com', phone: '(510) 913-9912' },
  { business_name: 'Garcia Fencing Landscaping & Tree', industry: 'Landscaping', city: 'San Leandro', email: 'garciasfence22@gmail.com', website: 'https://garciasfenceandtreeservice.com', phone: '(510) 932-4371' },
  { business_name: 'Allied Landscape', industry: 'Landscaping', city: 'Livermore', email: 'customerservice@contactallied.com', website: 'https://contactallied.com', phone: '(925) 280-0161' },
  { business_name: 'H&J Landscaping & Concrete', industry: 'Landscaping', city: 'Fremont', email: 'email@hjlandscaping.net', website: 'https://hjlandscaping.net', phone: '(510) 404-7738' },
  { business_name: 'Finish Coat Painting', industry: 'Painting', city: 'Concord', email: 'admin@finishcoat.net', website: 'https://finishcoat.net', phone: '(925) 214-3164' },
  { business_name: 'Raymond Kelly Painting', industry: 'Painting', city: 'Antioch', email: 'info@raymondkellypainting.com', website: 'https://raymondkellypainting.com', phone: null },
  { business_name: 'Kent Painting & Finishing', industry: 'Painting', city: 'Walnut Creek', email: 'info@kentpainting.com', website: 'https://kentpainting.com', phone: null },
  { business_name: 'Valley Plumbing Inc', industry: 'Plumbing', city: 'Pleasanton', email: 'info@valleyplumbinginc.com', website: 'https://valleyplumbinginc.com', phone: '(925) 462-1639' },
  { business_name: 'Tri-Valley Plumbing', industry: 'Plumbing', city: 'San Ramon', email: 'trivalleyplumbing@comcast.net', website: 'https://tri-valleyplumbing.com', phone: '(925) 556-5511' },
  { business_name: 'Evolution Plumbing Inc', industry: 'Plumbing', city: 'Concord', email: 'evolutionplumbing@live.com', website: 'https://evolutionplumbinginc.com', phone: null },
  { business_name: 'Absolute Plumbing & Drain', industry: 'Plumbing', city: 'Martinez', email: 'info@absoluteplumbinganddrain.com', website: 'https://absoluteplumbinganddrain.com', phone: '(925) 676-1900' },
  { business_name: 'Souza & Viviani Plumbing', industry: 'Plumbing', city: 'San Leandro', email: 'souza.viviani1915@gmail.com', website: 'https://souzaplumbing.com', phone: null },
  { business_name: 'Electrical & Plumbing Inc', industry: 'Electrical', city: 'Martinez', email: 'titusde@sbcglobal.net', website: 'https://electricalandplumbinginc.com', phone: '(925) 229-5683' },
  { business_name: 'O.T. Electric Inc', industry: 'Electrical', city: 'San Leandro', email: 'service@otelectricinc.com', website: 'https://otelectricinc.com', phone: '(510) 906-7062' },
  { business_name: 'Boyes Electrical Services', industry: 'Electrical', city: 'Oakland', email: 'support@boyeselectricservices.com', website: 'https://boyeselectricservices.com', phone: null },
  { business_name: "Gill's Electric", industry: 'Electrical', city: 'Oakland', email: 'info@gillselectric.com', website: 'https://gillselectric.com', phone: null },
  { business_name: 'Beci Electric', industry: 'Electrical', city: 'Oakland', email: 'rebecca@becielectric.com', website: 'https://becielectric.com', phone: null },
  { business_name: 'Normandy Heating & Air', industry: 'HVAC', city: 'Oakland', email: 'normandyheating@yahoo.com', website: 'https://normandyheating.com', phone: '(510) 470-8878' },
  { business_name: 'Bay Area Climate Control', industry: 'HVAC', city: 'Hayward', email: 'info@bayareaclimatecontrol.com', website: 'https://bayareaclimatecontrol.com', phone: null },
  { business_name: 'J.R. Heating & Cooling Systems', industry: 'HVAC', city: 'Hayward', email: 'jrhvacsystems@gmail.com', website: 'https://jrhvacsystemsca.com', phone: null },
  { business_name: 'C&T Pest Control', industry: 'Pest Control', city: 'Concord', email: 'info@CandTpestcontrol.com', website: 'https://candtpestcontrol.com', phone: null },
  { business_name: 'Marquee Pest Management', industry: 'Pest Control', city: 'Fremont', email: 'marqueeajp@aol.com', website: 'https://marqueepestmanagement.com', phone: '(510) 683-9520' },
  { business_name: 'Bailey Fence Company', industry: 'Fencing', city: 'Hayward', email: 'bfc@baileyfenceco.com', website: 'https://baileyfenceco.com', phone: null },
  { business_name: 'APCO Paving Co', industry: 'Paving', city: 'Concord', email: 'apcopave@yahoo.com', website: 'https://apcopavingco.com', phone: '(925) 827-9850' },
  { business_name: 'East Bay Interlocking Pavers', industry: 'Paving', city: 'Hayward', email: 'info@eastbaypavers.com', website: 'https://eastbaypavers.com', phone: null },
  { business_name: 'Black Diamond Paving', industry: 'Paving', city: 'Hayward', email: 'contact@blackdiamondpaving.com', website: 'https://blackdiamondpaving.com', phone: null },
  { business_name: 'Kyvos Construction', industry: 'Construction', city: 'Oakland', email: 'info@kyvosconstruction.com', website: 'https://kyvosconstruction.com', phone: null },
  { business_name: 'HDR Remodeling', industry: 'Construction', city: 'Oakland', email: 'hdr@hdrremodeling.com', website: 'https://hdrremodeling.com', phone: null },
  { business_name: 'LRL Builders', industry: 'Construction', city: 'Walnut Creek', email: 'info@lrlbuilders.com', website: 'https://lrlbuilders.com', phone: null },
  { business_name: 'Jarvis Garage Door Service', industry: 'Garage Door', city: 'Concord', email: 'jarvisgaragedoor1@gmail.com', website: 'https://jarvisgaragedoorservice.com', phone: null },
  { business_name: 'Well Done Window Cleaning', industry: 'Cleaning', city: 'Oakland', email: 'welldonewindows77@gmail.com', website: 'https://welldonewindowcleaning.com', phone: '(510) 393-8199' },
  { business_name: 'All Pro Window Cleaning', industry: 'Cleaning', city: 'Fremont', email: 'info@allprowindowcleaning.com', website: 'https://allprowindowcleaning.com', phone: '(510) 428-0500' },
  { business_name: 'Fuller Handyman Service', industry: 'Handyman', city: 'Fremont', email: 'fullerhandymanservice@gmail.com', website: 'https://fullerhandymanservice.com', phone: '(510) 657-7995' },
  { business_name: "Rob's Odd Jobs", industry: 'Handyman', city: 'Concord', email: 'traciedwards@robsoddjobs.com', website: 'https://robsoddjobs.com', phone: '(925) 408-7319' },
  { business_name: 'U.S. Superior Stone & Tile', industry: 'Flooring', city: 'San Leandro', email: 'info@ussuperiorstonetile.com', website: 'https://ussuperiorstonetile.com', phone: null },
]

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
}

let success = 0
let failed = 0

for (const lead of leads) {
  const record = {
    ...lead,
    stage: 'new',
    pitch_token: crypto.randomUUID(),
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads`, {
    method: 'POST',
    headers: { ...headers, 'Prefer': 'return=minimal' },
    body: JSON.stringify(record),
  })

  if (res.ok) {
    success++
    console.log(`✓ ${lead.business_name}`)
  } else {
    const err = await res.text()
    failed++
    console.log(`✗ ${lead.business_name} — ${err}`)
  }
}

console.log(`\nDone: ${success} inserted, ${failed} failed`)

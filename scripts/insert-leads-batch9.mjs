import crypto from 'crypto'

const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const leads = [
  // BARBERSHOPS
  { business_name: 'Beastmode Barbershop', industry: 'Barbershop', city: 'Oakland', email: 'info@beastmodebarbershop.com', website: 'https://beastmodebarbershop.com', phone: '(510) 817-4736' },
  { business_name: 'Temescal Alley Barbershop', industry: 'Barbershop', city: 'Oakland', email: 'temescalalleybarbershop@gmail.com', website: 'https://temescalalleybarbershop.com', phone: null },
  { business_name: 'G Circle Barber Lounge', industry: 'Barbershop', city: 'Oakland', email: 'nick@gcircle.co', website: 'https://gcircle.co', phone: null },
  { business_name: 'Knuckleheads & Harlots', industry: 'Barbershop', city: 'Oakland', email: 'oaklandknuckleheads1@gmail.com', website: 'https://knuckleheadsharlots.com', phone: null },
  { business_name: 'Slick & Dapper Barber', industry: 'Barbershop', city: 'Oakland', email: 'slickanddapperbarber@gmail.com', website: 'https://slickanddapper.com', phone: null },
  { business_name: 'Walnut Creek Barbershop & Shave Parlor', industry: 'Barbershop', city: 'Walnut Creek', email: 'walnutcreekbarbershop@gmail.com', website: 'https://walnutcreekbarbershop.com', phone: '(925) 465-5039' },
  { business_name: 'Livermore Barber Shop', industry: 'Barbershop', city: 'Livermore', email: 'LBS@LivermoreBarberShop.com', website: 'https://livermorebarbershop.com', phone: null },
  { business_name: 'Above All Barbershop', industry: 'Barbershop', city: 'Pittsburg', email: 'Aboveallbarbershop23@gmail.com', website: 'https://aboveallbarbershop.co', phone: '(925) 267-2214' },

  // TATTOO STUDIOS
  { business_name: 'Amor Eterno Arte', industry: 'Tattoo Studio', city: 'Oakland', email: 'info@amoreternoarte.com', website: 'https://amoreternoarte.com', phone: null },
  { business_name: 'Sacred Tattoo Oakland', industry: 'Tattoo Studio', city: 'Oakland', email: 'sacredtattoooakland@gmail.com', website: 'https://sacredtattoooakland.com', phone: null },
  { business_name: 'Studio Noir Oakland', industry: 'Tattoo Studio', city: 'Oakland', email: 'studionoiroakland@gmail.com', website: 'https://studionoiroakland.com', phone: null },
  { business_name: 'Temple Tattoo 13', industry: 'Tattoo Studio', city: 'Oakland', email: 'freddycorbin@gmail.com', website: 'https://templetattoo13.com', phone: null },
  { business_name: 'DH Tattooing', industry: 'Tattoo Studio', city: 'Livermore', email: 'dhtattooassistant@gmail.com', website: 'https://dhtattooing.com', phone: null },
  { business_name: 'Simms Ink Tattoo & Piercing', industry: 'Tattoo Studio', city: 'Hayward', email: 'Simmsink@yahoo.com', website: 'https://simmsink.com', phone: '(510) 583-7346' },

  // MASSAGE / SPA
  { business_name: 'Reenoo Bodywork & Massage', industry: 'Massage', city: 'Oakland', email: 'clemence@reenoobodywork.com', website: 'https://reenoobodywork.com', phone: null },
  { business_name: 'Vetiver Collective', industry: 'Day Spa', city: 'Oakland', email: 'info@vetiveroakland.com', website: 'https://vetiveroakland.com', phone: null },
  { business_name: 'Warm Spring Spa', industry: 'Day Spa', city: 'Fremont', email: 'WarmSpringSpa@gmail.com', website: 'https://warmspringspa.com', phone: null },
  { business_name: 'The Royal Thai Spa', industry: 'Day Spa', city: 'Union City', email: 'contact@theroyalthaispausa.com', website: 'https://theroyalthaispausa.com', phone: null },

  // HAIR SALONS
  { business_name: 'Pony Studios', industry: 'Hair Salon', city: 'Oakland', email: 'oakland@pony.salon', website: 'https://pony.salon', phone: null },
  { business_name: 'Fig and Clover', industry: 'Hair Salon', city: 'Oakland', email: 'figandclover@gmail.com', website: 'https://figandclover.com', phone: null },
  { business_name: 'STrUT Oakland', industry: 'Hair Salon', city: 'Oakland', email: 'antionette@strutoakland.com', website: 'https://strutoakland.com', phone: null },
  { business_name: 'Painted Mane', industry: 'Hair Salon', city: 'Walnut Creek', email: 'paintedmaneco@gmail.com', website: 'https://paintedmaneco.com', phone: null },
  { business_name: 'Gilded Manes', industry: 'Hair Salon', city: 'Pleasanton', email: 'sasha@gildedmanes.com', website: 'https://gildedmanes.com', phone: null },

  // NAIL SALONS
  { business_name: 'Just The Tips Nail Studio', industry: 'Nail Salon', city: 'Oakland', email: 'justthetips510@gmail.com', website: 'https://justthetips510.com', phone: null },
  { business_name: 'Prettify Me', industry: 'Nail Salon', city: 'Hayward', email: 'prettify.me24@gmail.com', website: 'https://prettifymehayward.com', phone: '(510) 274-5554' },
  { business_name: 'Little Bird Nail Bar', industry: 'Nail Salon', city: 'Hayward', email: 'little.bird.nailbar@gmail.com', website: 'https://littlebirdnailbar.com', phone: null },
  { business_name: 'Painted Nails and Spa', industry: 'Nail Salon', city: 'San Ramon', email: 'christinanguyen260589@gmail.com', website: 'https://paintednailssanramon.com', phone: null },
  { business_name: 'Beauty Salon & Day Spa', industry: 'Hair Salon', city: 'San Leandro', email: 'dannyluong368@gmail.com', website: 'https://beautysalonndayspa.com', phone: '(510) 481-7888' },
  { business_name: 'J Salon and Spa', industry: 'Nail Salon', city: 'Dublin', email: 'info@jsalonandspa.us', website: 'https://jsalonandspa.us', phone: null },
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

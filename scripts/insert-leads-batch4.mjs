import crypto from 'crypto'

const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const leads = [
  // VETERINARIANS
  { business_name: 'Claremont Veterinary Hospital', industry: 'Veterinarian', city: 'Oakland', email: 'staff@claremontvet.com', website: 'https://claremontvet.com', phone: '(510) 652-5835' },
  { business_name: 'Grand Lake Veterinary Hospital', industry: 'Veterinarian', city: 'Oakland', email: 'info@grandlakevet.com', website: 'https://grandlakevet.com', phone: '(510) 350-8538' },
  { business_name: 'Hayward Veterinary Hospital', industry: 'Veterinarian', city: 'Hayward', email: 'bark@haywardvethospital.com', website: 'https://haywardvethospital.com', phone: '(510) 200-7280' },
  { business_name: 'Alta Vista Veterinary Clinic', industry: 'Veterinarian', city: 'Hayward', email: 'AltaVistaVetClinic@yahoo.com', website: 'https://www.altavistavetclinic.com', phone: '(510) 537-3562' },
  { business_name: 'Central Veterinary Hospital', industry: 'Veterinarian', city: 'Fremont', email: 'info@centralveterinary.com', website: 'https://centralveterinary.com', phone: '(510) 797-7387' },
  { business_name: 'Fremont Pet Hospital', industry: 'Veterinarian', city: 'Fremont', email: 'fremontvetcare@gmail.com', website: 'https://www.fremontpethospitalca.com', phone: '(510) 651-3960' },
  { business_name: 'Del Valle Pet Hospital', industry: 'Veterinarian', city: 'Livermore', email: 'info@delvallepethospital.com', website: 'https://delvallepethospital.com', phone: '(925) 443-6000' },
  { business_name: 'Well Animal Hospital', industry: 'Veterinarian', city: 'Livermore', email: 'info@wellanimalhospital.com', website: 'https://wellanimalhospital.com', phone: '(925) 800-3220' },
  { business_name: 'Good Samaritan Veterinary Hospital', industry: 'Veterinarian', city: 'San Leandro', email: 'goodsamaritanvh@yourvetdoc.com', website: 'https://goodsamaritanvet.com', phone: '(510) 357-8574' },

  // GYMS / MARTIAL ARTS / BOXING
  { business_name: "King's Boxing Gym", industry: 'Boxing Gym', city: 'Oakland', email: 'kingceleste36@gmail.com', website: 'https://www.kingsboxinggymoakland.com', phone: '(510) 261-2199' },
  { business_name: 'Oakland Kickboxing', industry: 'Martial Arts', city: 'Oakland', email: 'info@oaklandkickboxing.com', website: 'https://www.oaklandkickboxing.com', phone: null },
  { business_name: 'Hayward Kickboxing', industry: 'Kickboxing', city: 'Hayward', email: 'haywardkickboxing@gmail.com', website: 'https://haywardkickboxing.com', phone: '(310) 439-1943' },
  { business_name: 'Osorio Training Center', industry: 'Boxing Gym', city: 'Hayward', email: 'info@osoriotrainingcenter.com', website: 'https://osoriotrainingcenter.com', phone: '(510) 517-3466' },
  { business_name: 'Combat Fitness', industry: 'Martial Arts', city: 'Concord', email: 'tntwc98@yahoo.com', website: 'https://maxcombatfitness.com', phone: '(925) 934-9898' },
  { business_name: 'Essence BJJ Walnut Creek', industry: 'BJJ / Muay Thai', city: 'Walnut Creek', email: 'info@essencebjjwalnutcreek.com', website: 'https://essencebjjwalnutcreek.com', phone: '(925) 404-9876' },
  { business_name: 'Combat Sports Academy', industry: 'MMA / Boxing', city: 'Pleasanton', email: 'csa.gym@gmail.com', website: 'https://csagym.com', phone: '(925) 587-9487' },
  { business_name: 'Kokua Martial Arts Fitness Academy', industry: 'Martial Arts', city: 'Pleasanton', email: 'info@kokuamafa.com', website: 'https://kokuamafa.com', phone: '(925) 223-8519' },
  { business_name: 'Darcio Lira Jiu Jitsu', industry: 'BJJ', city: 'Livermore', email: 'darlynsonlira@hotmail.com', website: 'https://www.darciolirajiujitsu.com', phone: '(925) 549-1590' },

  // FLORISTS
  { business_name: 'Livermore Valley Florist', industry: 'Florist', city: 'Livermore', email: 'livermorevalleyflorist@gmail.com', website: 'https://www.livermorevalleyflorist.com', phone: '(925) 443-3450' },
  { business_name: 'Fremont Flowers', industry: 'Florist', city: 'Fremont', email: 'customer.service@fremontflowers.com', website: 'https://www.fremontflowers.com', phone: '(510) 797-1136' },
  { business_name: 'CityBloom', industry: 'Florist', city: 'San Leandro', email: 'dan@citybloom.com', website: 'https://citybloominc.net', phone: '(510) 836-6450' },

  // DAYCARES / PRESCHOOLS
  { business_name: 'Duck Pond Preschool', industry: 'Preschool', city: 'Oakland', email: 'info@duckpondpreschool.com', website: 'https://duckpondpreschool.com', phone: '(510) 530-0851' },
  { business_name: "The Children's Workshop Oakland", industry: 'Preschool', city: 'Oakland', email: 'jessica@childrensworkshopoakland.com', website: 'https://childrensworkshopoakland.com', phone: '(510) 306-2630' },
  { business_name: 'Giggles Preschool Inc', industry: 'Preschool', city: 'Oakland', email: 'gigglespreschoolinc@gmail.com', website: 'https://www.giggles-preschool.com', phone: '(510) 601-6526' },
  { business_name: 'Nido Infant-Toddler Center', industry: 'Daycare', city: 'Oakland', email: 'hello@oaklandnido.org', website: 'https://www.oaklandnido.org', phone: '(805) 801-5865' },
  { business_name: "Hortensia's Way Family Daycare", industry: 'Daycare', city: 'Hayward', email: 'hortensiasway@gmail.com', website: 'https://haywardfamilydaycare.com', phone: '(510) 889-8499' },
  { business_name: 'Palm Academy', industry: 'Preschool', city: 'Fremont', email: 'ruth@palmacademy.com', website: 'https://www.palmacademy.com', phone: '(510) 565-5682' },
  { business_name: 'Crawlers 2 Scholars', industry: 'Preschool', city: 'Walnut Creek', email: 'director@crawlers2scholarswc.com', website: 'https://crawlers2scholarswc.com', phone: '(925) 943-6199' },
]

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal',
}

let inserted = 0, skipped = 0

for (const lead of leads) {
  // Check if already exists
  const checkRes = await fetch(
    `${SUPABASE_URL}/rest/v1/outreach_leads?business_name=eq.${encodeURIComponent(lead.business_name)}&select=id`,
    { headers }
  )
  const existing = await checkRes.json()
  if (existing.length > 0) {
    console.log(`↷ Skip (exists): ${lead.business_name}`)
    skipped++
    continue
  }

  const body = {
    ...lead,
    stage: 'new',
    audit_findings: [],
    pitch_script: null,
    notes: null,
    pitch_token: crypto.randomUUID(),
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  if (res.ok) {
    console.log(`✓ ${lead.business_name}`)
    inserted++
  } else {
    console.log(`✗ ${lead.business_name} — ${await res.text()}`)
  }
}

console.log(`\nDone: ${inserted} inserted, ${skipped} skipped`)

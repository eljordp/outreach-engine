import crypto from 'crypto'

const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const leads = [
  // WINDOW CLEANING / PRESSURE WASHING
  { business_name: 'Well Done Window Cleaning', industry: 'Window Cleaning', city: 'Oakland', email: 'welldonewindows77@gmail.com', website: 'https://www.welldonewindowcleaning.com', phone: '510-393-8199' },
  { business_name: 'All Pro Window Cleaning', industry: 'Window Cleaning', city: 'Livermore', email: 'info@allprowindowcleaning.com', website: 'https://www.allprowindowcleaning.com', phone: '925-447-0500' },
  { business_name: 'ExtraShine Power Washing', industry: 'Pressure Washing', city: 'Danville', email: 'extrashine@extrashinewashing.com', website: 'https://www.extrashinewashing.com', phone: '925-819-8979' },

  // POOL SERVICE
  { business_name: 'Swimcare Pool Service', industry: 'Pool Service', city: 'Walnut Creek', email: 'swimcare@gmail.com', website: 'https://www.myswimcare.com', phone: '925-597-7917' },
  { business_name: 'KC Pool Services', industry: 'Pool Service', city: 'Walnut Creek', email: 'info@kcpoolservices.com', website: 'https://www.kcpoolservices.com', phone: '925-457-5339' },
  { business_name: 'Pristine Pools Inc', industry: 'Pool Service', city: 'Livermore', email: 'info@pristine-pools.com', website: 'https://www.pristine-pools.com', phone: '925-777-1297' },
  { business_name: 'Aqua Hero', industry: 'Pool Service', city: 'Livermore', email: 'info@aquahero.net', website: 'https://aquaheroca.net', phone: '925-606-5453' },
  { business_name: 'Apex Pools Service & Repair', industry: 'Pool Service', city: 'Pleasanton', email: 'apexpools1@yahoo.com', website: 'https://www.apexpoolsserviceandrepairs.com', phone: '925-640-2991' },
  { business_name: 'Antioch Pool Cleaners', industry: 'Pool Service', city: 'Antioch', email: 'antiochpoolcleaners@gmail.com', website: 'https://www.antiochpoolcleaners.com', phone: '925-369-5011' },
  { business_name: 'The Pool Guyz', industry: 'Pool Service', city: 'Brentwood', email: 'yourpoolguyz@gmail.com', website: 'https://www.yourpoolguyz.com', phone: '925-522-6585' },
  { business_name: 'Nor Cal Pool Service', industry: 'Pool Service', city: 'Concord', email: 'NorCalPoolServices925@yahoo.com', website: 'https://www.norcalpoolandspaservice.com', phone: '925-956-8170' },

  // TREE SERVICE
  { business_name: "Vega's Tree Service", industry: 'Tree Service', city: 'Brentwood', email: 'vegatreeservice@gmail.com', website: 'https://www.vegastreeservices.com', phone: '510-295-0075' },
  { business_name: 'Tree Care of California', industry: 'Tree Service', city: 'Concord', email: 'treecareofca@sbcglobal.net', website: 'https://www.treecareofca.com', phone: '925-689-4446' },
  { business_name: 'Prodigy Works Inc', industry: 'Tree Service', city: 'Concord', email: 'prodigywork925@gmail.com', website: 'https://prodigyworkstreeservice.net', phone: '925-325-3652' },
  { business_name: 'Arbor Vision Inc', industry: 'Tree Service', city: 'San Ramon', email: 'info@arborvisioninc.com', website: 'https://www.arborvisioninc.com', phone: '925-409-2979' },
  { business_name: 'Simply Trees', industry: 'Tree Service', city: 'Livermore', email: 'Simplytrees@sbcglobal.net', website: 'https://www.simplytreeservice.com', phone: '925-321-2421' },

  // AUTO DETAILING
  { business_name: 'UpClose Mobile Detailing', industry: 'Auto Detailing', city: 'San Leandro', email: 'jbrydie@upclosedetailing.com', website: 'https://www.upclosedetailing.com', phone: '510-434-4344' },
  { business_name: 'Best Detail Inc', industry: 'Auto Detailing', city: 'Oakland', email: 'noe.jose.1964@gmail.com', website: 'https://www.bestdetailinginc.com', phone: '510-444-6006' },
  { business_name: 'XLNC Auto Beauty', industry: 'Auto Detailing', city: 'Oakland', email: 'xlncautobeauty@gmail.com', website: 'https://www.xlncautobeautyca.com', phone: '510-467-8404' },
  { business_name: "Matt's Mobile Auto Detailing", industry: 'Auto Detailing', city: 'Antioch', email: 'Matt@mattsmobileautodetailing.com', website: 'https://mattsmobileautodetailing.com', phone: '925-206-7818' },
  { business_name: 'Daniels Elite Mobile Detailing', industry: 'Auto Detailing', city: 'Antioch', email: 'info@danielelitedetailing.com', website: 'https://danielelitedetailing.com', phone: '510-432-1156' },

  // MOBILE NOTARY
  { business_name: 'First Class Signing Service', industry: 'Mobile Notary', city: 'Livermore', email: 'info@FirstClassSigning.com', website: 'https://firstclasssigning.com', phone: '925-924-0229' },
  { business_name: 'Notarize This Lisa!', industry: 'Mobile Notary', city: 'Walnut Creek', email: 'lisasalvetti@yahoo.com', website: 'https://notarizethislisa.com', phone: '925-963-6744' },
  { business_name: "Vatsal Shah's Notary 24/7", industry: 'Mobile Notary', city: 'Fremont', email: 'vatsalnotary@gmail.com', website: 'https://notaryinbayarea.com', phone: '510-676-2570' },
  { business_name: '#1 Fremont Notary', industry: 'Mobile Notary', city: 'Fremont', email: '1fremontnotary@gmail.com', website: 'https://1fremontnotary.com', phone: '408-644-5187' },
  { business_name: 'Mobile Notary Oakland', industry: 'Mobile Notary', city: 'Oakland', email: 'joe@mobilenotaryoaklandca.com', website: 'https://mobilenotaryoaklandca.com', phone: '510-629-0390' },
  { business_name: 'The Bay Area Notary', industry: 'Mobile Notary', city: 'Walnut Creek', email: 'Contact@TheBayAreaNotary.com', website: 'https://www.thebayareanotary.com', phone: '209-534-0100' },

  // PET GROOMING
  { business_name: 'Leading The Pack Pet Salon', industry: 'Pet Grooming', city: 'Oakland', email: 'ltppetsalon@ltpgrooming.com', website: 'https://www.leadingthepackoakland.com', phone: '510-575-0480' },
  { business_name: 'SpagoDog', industry: 'Pet Grooming', city: 'Oakland', email: 'info@spagodog.com', website: 'https://spagodog.com', phone: '510-590-7628' },
  { business_name: 'Le Pawsh', industry: 'Pet Grooming', city: 'Fremont', email: 'grooming@lepawsh.com', website: 'https://lepawsh.com', phone: '510-598-5037' },
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

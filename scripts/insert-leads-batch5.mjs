import crypto from 'crypto'

const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const leads = [
  // CLEANING SERVICES
  { business_name: 'BerryClean', industry: 'Cleaning Service', city: 'Oakland', email: 'info@berryclean.com', website: 'https://www.berryclean.com', phone: '(415) 633-6225' },
  { business_name: 'Bay City Cleaners', industry: 'Cleaning Service', city: 'Fremont', email: 'info@baycitycleaners.com', website: 'https://www.baycitycleaners.com', phone: '(833) 491-1079' },
  { business_name: 'eMaids', industry: 'Cleaning Service', city: 'Livermore', email: 'stevie@emaids1.com', website: 'https://www.emaidscleaningservice.com', phone: '(925) 989-0226' },
  { business_name: "Sister's House Cleaning LLC", industry: 'Cleaning Service', city: 'Antioch', email: 'info@sistershousecleaning.com', website: 'https://sistershousecleaning.com', phone: '(925) 233-6751' },
  { business_name: 'WeClean LLC', industry: 'Cleaning Service', city: 'Oakland', email: 'info@gotmessweclean.com', website: 'https://gotmessweclean.com', phone: '(510) 800-6838' },

  // TUTORING / LEARNING CENTERS
  { business_name: "Lainie's Learning Lane", industry: 'Tutoring Center', city: 'Concord', email: 'info@learninglanewc.com', website: 'https://www.learninglanewc.com', phone: '(925) 448-2152' },
  { business_name: 'Simon Academics LLC', industry: 'Tutoring Center', city: 'Fremont', email: 'info@simonabc.com', website: 'https://simonabc.com', phone: '(510) 912-1212' },
  { business_name: 'PEL Learning Centers', industry: 'Tutoring Center', city: 'Hayward', email: 'info@PELLearning.com', website: 'http://pellearning.com', phone: '(888) 887-3588' },

  // WEDDING / EVENT PHOTOGRAPHERS
  { business_name: 'e&b photography', industry: 'Photography', city: 'Oakland', email: 'info@enbphotos.com', website: 'https://www.enbphotos.com', phone: '(510) 229-0664' },
  { business_name: 'Gabriel Harber Photography', industry: 'Photography', city: 'Oakland', email: 'gabriel@harberphotography.com', website: 'https://harberphotography.com', phone: null },
  { business_name: 'Dubnoff Wedding Photography', industry: 'Photography', city: 'Walnut Creek', email: 'memories@dubnoffphoto.com', website: 'https://www.dubnoffphoto.com', phone: '(925) 323-5397' },
  { business_name: 'Connie Leal Photography', industry: 'Photography', city: 'Brentwood', email: 'clfphoto@hotmail.com', website: 'https://www.connielealphotography.com', phone: '(925) 550-8506' },

  // INSURANCE AGENTS / BROKERS
  { business_name: 'Gene Morgan Insurance Agency', industry: 'Insurance', city: 'Livermore', email: 'contact@genemorganinsurance.com', website: 'https://www.genemorganinsurance.com', phone: '(925) 447-2565' },
  { business_name: 'Hernandez Steele Insurance Agency', industry: 'Insurance', city: 'Antioch', email: 'lhernandez@siainc.net', website: 'https://www.hernandezinsuranceantioch.com', phone: '(925) 757-1000' },
  { business_name: 'East County Insurance Agency', industry: 'Insurance', city: 'Antioch', email: 'john@eastcountyins.com', website: 'https://eastcountyins.com', phone: '(925) 757-4208' },
  { business_name: 'Jack Stone Insurance Agency', industry: 'Insurance', city: 'Brentwood', email: 'service@jackstoneinsurance.com', website: 'https://jackstoneinsurance.com', phone: '(925) 392-8365' },
  { business_name: 'Centurion Insurance Agency', industry: 'Insurance', city: 'Pleasanton', email: 'insure@centurioninsurance.net', website: 'https://www.centurioninsurance.net', phone: '(925) 828-3700' },
  { business_name: 'Diablo Valley Insurance Agency', industry: 'Insurance', city: 'Walnut Creek', email: 'request@diablovalleyinsurance.com', website: 'https://www.diablovalleyinsurance.com', phone: '(925) 210-1717' },

  // MORTGAGE BROKERS
  { business_name: 'Fresh Home Loan Inc', industry: 'Mortgage Broker', city: 'Alameda', email: 'garrick@freshhomeloan.com', website: 'https://www.freshhomeloan.com', phone: '(510) 282-5456' },
  { business_name: 'EstaR Mortgage', industry: 'Mortgage Broker', city: 'Alameda', email: 'MyLender@estarm.com', website: 'https://www.estarmortgage.com', phone: '(510) 463-1003' },
  { business_name: '3C Mortgage Group', industry: 'Mortgage Broker', city: 'Antioch', email: 'sergio@3cmortgagegroup.com', website: 'https://www.3cmortgagegroup.com', phone: '(925) 386-6528' },
  { business_name: 'Providential Mortgage', industry: 'Mortgage Broker', city: 'Fremont', email: 'inquiry@ProvidentialMortgage.com', website: 'https://www.providentialmortgage.com', phone: '(877) 855-7334' },
  { business_name: 'Cal Coast Financial', industry: 'Mortgage Broker', city: 'Pleasanton', email: 'rohitmohan@live.com', website: 'https://rohitmohan.com', phone: '(510) 579-5211' },

  // ELECTRICIANS (new)
  { business_name: 'Altamont Electric & Lighting', industry: 'Electrician', city: 'Livermore', email: 'ycharitou@altamontelectric.com', website: 'https://altamontelectric.com', phone: '(925) 292-7722' },
  { business_name: 'Tucknott Electric Company', industry: 'Electrician', city: 'Livermore', email: 'bob@tucknott.com', website: 'https://www.tucknott.com', phone: '(925) 931-0800' },
  { business_name: 'Springtown Electric', industry: 'Electrician', city: 'Livermore', email: 'springtownelectric@gmail.com', website: 'https://www.springtownelectric.com', phone: '(510) 209-4233' },
  { business_name: 'VC Electric', industry: 'Electrician', city: 'Dublin', email: 'vcelectric@comcast.net', website: 'https://www.vcelectric.com', phone: '(925) 699-0355' },
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

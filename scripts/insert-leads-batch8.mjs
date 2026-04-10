import crypto from 'crypto'

const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const leads = [
  // ACUPUNCTURE
  { business_name: 'ReLife Acupuncture', industry: 'Acupuncture', city: 'Fremont', email: 'relife.acup@gmail.com', website: 'https://relifehealthgroup.com', phone: '(408) 888-3616' },
  { business_name: 'Acupuncture Valley Health Center', industry: 'Acupuncture', city: 'Fremont', email: 'info@acuvalley.com', website: 'https://acuvalley.com', phone: '(510) 809-7261' },
  { business_name: 'Advanced Acupuncture Centre', industry: 'Acupuncture', city: 'Livermore', email: 'info@advacu.com', website: 'https://advacu.com', phone: '(925) 451-6282' },
  { business_name: 'Tranquility Acupuncture Healing Center', industry: 'Acupuncture', city: 'Brentwood', email: 'chadroniii@gmail.com', website: 'https://tranquility-acupuncture.com', phone: '(925) 393-1418' },
  { business_name: 'Joyce Wu Acupuncture Clinic', industry: 'Acupuncture', city: 'Antioch', email: 'joycewuacu@gmail.com', website: 'https://joycewuacupuncture.com', phone: '(925) 757-9012' },
  { business_name: 'Ahimsa Wellness', industry: 'Acupuncture', city: 'Walnut Creek', email: 'info@ahimsawellness.org', website: 'https://ahimsawellness.org', phone: '(925) 322-1313' },
  { business_name: 'California Acupuncture & Natural Medicine', industry: 'Acupuncture', city: 'Walnut Creek', email: 'junkanglac@gmail.com', website: 'https://californiaacupuncture.net', phone: '(925) 280-4599' },
  { business_name: 'Root and Stem', industry: 'Acupuncture', city: 'Oakland', email: 'hello@rootandstemclinic.com', website: 'https://rootandstemclinic.com', phone: '(510) 463-4304' },
  { business_name: 'Embrace Acupuncture', industry: 'Acupuncture', city: 'Dublin', email: 'frontdesk@embrace-acu.com', website: 'https://embrace-acu.com', phone: '(925) 895-0681' },

  // MENTAL HEALTH / THERAPISTS
  { business_name: 'Bryan Tucker MFT', industry: 'Therapist', city: 'Hayward', email: 'btucker@haywardbayarea.com', website: 'https://bryantuckermft.com', phone: '(510) 538-8108' },
  { business_name: 'DOT Center', industry: 'Therapist', city: 'Oakland', email: 'info@dotcenteroakland.com', website: 'https://dotcenteroakland.com', phone: '(510) 423-3135' },
  { business_name: 'Bay Psychology Group', industry: 'Therapist', city: 'Oakland', email: 'admin@baypsychologygroup.com', website: 'https://baypsychologygroup.com', phone: '(510) 788-0005' },
  { business_name: 'Healing Within', industry: 'Therapist', city: 'Pleasanton', email: 'cheryl@healingwithinca.com', website: 'https://healingwithinca.com', phone: null },
  { business_name: 'Institute of Mindful Therapy', industry: 'Therapist', city: 'Walnut Creek', email: 'instituteofmindfultherapy@gmail.com', website: 'https://instituteofmindfultherapy.com', phone: '(925) 718-6440' },
  { business_name: 'Morgan Lloyd LCSW', industry: 'Therapist', city: 'Walnut Creek', email: 'morganlloyd.lcsw@gmail.com', website: 'https://morganlloyd-lcsw.com', phone: '(510) 852-9013' },
  { business_name: 'Matters of the Heart Counseling Centers', industry: 'Therapist', city: 'San Leandro', email: 'Valerie@MattersoftheHeartCounselingCenters.com', website: 'https://mattersoftheheartcounselingcenters.com', phone: '(510) 380-6146' },
  { business_name: 'Rachel Stegman Family Therapy', industry: 'Therapist', city: 'Brentwood', email: 'smartsucess@aol.com', website: 'https://rachelstegmanfamilytherapy.com', phone: '(925) 565-7535' },
  { business_name: 'Heart in Balance Counseling Center', industry: 'Therapist', city: 'Oakland', email: 'heartinbalancetherapy@gmail.com', website: 'https://heartinbalancetherapy.com', phone: '(510) 496-6002' },
  { business_name: 'Cameron Murphey LMFT', industry: 'Therapist', city: 'Oakland', email: 'cameronmurpheytherapy@gmail.com', website: 'https://cameronmurpheytherapy.com', phone: '(510) 438-1960' },

  // OPTOMETRISTS
  { business_name: 'Insight Vision Care Optometry', industry: 'Optometrist', city: 'Walnut Creek', email: 'office@insightvisioncareoptometry.com', website: 'https://insightvisioncareoptometry.com', phone: '(925) 933-4700' },
  { business_name: 'Eye Health Optometry', industry: 'Optometrist', city: 'Newark', email: 'Newark@eyehealthopt.com', website: 'https://eyehealthoptometry.com', phone: '(510) 791-2020' },
  { business_name: 'EyeCare Associates of San Ramon Valley', industry: 'Optometrist', city: 'San Ramon', email: 'info@eyecareSRV.com', website: 'https://eyecaresrv.com', phone: '(925) 866-2020' },
  { business_name: 'Iron Horse Optometric Group', industry: 'Optometrist', city: 'Dublin', email: 'info@ironhorseoptometry.com', website: 'https://ironhorseoptometry.com', phone: '(925) 828-9511' },
  { business_name: 'Flores Optometry Inc', industry: 'Optometrist', city: 'San Leandro', email: 'info@floresoptometry.com', website: 'https://floresoptometry.com', phone: '(510) 614-2020' },
  { business_name: 'Eye To Eye Optometry', industry: 'Optometrist', city: 'Antioch', email: 'drLinder@eyetoeyedoctor.com', website: 'https://eyetoeyedoctor.com', phone: '(925) 757-7676' },
  { business_name: 'The Optometry Center', industry: 'Optometrist', city: 'Hayward', email: 'haywardoptometry@gmail.com', website: 'https://theoptometrycenter.com', phone: '(510) 581-1430' },

  // PHYSICAL THERAPY
  { business_name: 'Physical Therapy Specialties', industry: 'Physical Therapy', city: 'Pleasanton', email: 'Ida@pt-specialties.com', website: 'https://pt-specialties.com', phone: '(925) 417-8005' },
  { business_name: 'Concord Physical Therapy', industry: 'Physical Therapy', city: 'Concord', email: 'concordpt@gmail.com', website: 'https://concordphysicaltherapy.com', phone: '(925) 685-6551' },
  { business_name: 'RehabPilates Physical Therapy', industry: 'Physical Therapy', city: 'San Leandro', email: 'lorna@rehabpilatespt.com', website: 'https://rehabpilatespt.com', phone: '(510) 698-6259' },

  // AUDIOLOGY
  { business_name: 'Hearing Services of Antioch', industry: 'Audiology', city: 'Antioch', email: 'hsoa.kevin@sbcglobal.net', website: 'https://hearingaidservicesofantioch.com', phone: '(925) 778-3298' },
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

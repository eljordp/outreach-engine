import crypto from 'crypto'

const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const leads = [
  // LOGISTICS
  { business_name: 'Best Bay Trucking', industry: 'Trucking', city: 'Oakland', email: 'info@bestbaytrucking.com', website: 'https://bestbaytrucking.com', phone: '(510) 201-9077' },
  { business_name: 'Optimal Transportation Inc.', industry: 'Logistics', city: 'San Leandro', email: 'Juan@ooptimal.com', website: 'https://optimaldrayage.com', phone: '(510) 616-8573' },
  { business_name: 'Lab Carriers', industry: 'Trucking', city: 'Hayward', email: 'info@labcarriers.com', website: 'https://labcarriers.com', phone: '(510) 916-1400' },
  { business_name: 'Seamodal Transport Corp.', industry: 'Freight', city: 'Hayward', email: 'stcoakland@seamodal.com', website: 'https://seamodal.com', phone: '(510) 832-2686' },
  { business_name: 'Sea Shipping', industry: 'Freight', city: 'Oakland', email: 'oak.import@seashipping.com', website: 'https://seashipping.com', phone: '(510) 639-7447' },
  { business_name: 'Pilot Freight Services', industry: 'Freight', city: 'Hayward', email: 'SFO@pilotdelivers.com', website: 'https://pilotdelivers.com', phone: '(510) 781-1600' },

  // DENTAL
  { business_name: 'Southland Dental Care', industry: 'Dental', city: 'Hayward', email: 'info@southlanddental.com', website: 'https://southlanddental.com', phone: '(510) 785-7010' },
  { business_name: 'Sustainable Smiles', industry: 'Dental', city: 'Pleasanton', email: 'admin@sustainyoursmile.com', website: 'https://sustainyoursmile.com', phone: '(925) 223-6027' },
  { business_name: 'San Ramon Family Dentistry', industry: 'Dental', city: 'San Ramon', email: 'info@sanramonfamilydentistry.com', website: 'https://sanramonfamilydentistry.com', phone: '(925) 829-2800' },
  { business_name: 'Pacific Dental Care', industry: 'Dental', city: 'Pleasanton', email: 'info@pacificdental.com', website: 'https://pacificdental.com', phone: '(925) 426-1300' },
  { business_name: 'Infinite Smile Dental', industry: 'Dental', city: 'Pleasanton', email: 'randy@infinitesmiledental.com', website: 'https://infinitesmiledental.com', phone: '(925) 400-9978' },
  { business_name: 'Fremont Smiles Dentistry', industry: 'Dental', city: 'Fremont', email: 'fremontsmiles@comcast.net', website: 'https://fremontsmiles.com', phone: '(510) 797-8991' },
  { business_name: 'Diablo Dentistry', industry: 'Dental', city: 'Antioch', email: 'diablodentistry@gmail.com', website: 'https://diablodentistry.com', phone: '(925) 303-2615' },

  // RESTAURANTS
  { business_name: 'Mua Oakland', industry: 'Restaurant', city: 'Oakland', email: 'info@muaoakland.com', website: 'https://muaoakland.com', phone: null },
  { business_name: 'Oeste Bar & Kitchen', industry: 'Restaurant', city: 'Oakland', email: 'info@oesteoakland.com', website: 'https://oesteoakland.com', phone: '(510) 817-4157' },
  { business_name: 'Sirene', industry: 'Restaurant', city: 'Oakland', email: 'info@sirene-oak.com', website: 'https://sirene-oak.com', phone: null },
  { business_name: 'The Lumpia Company', industry: 'Restaurant', city: 'Oakland', email: 'info@thelumpiacompany.com', website: 'https://thelumpiacompany.com', phone: '(213) 570-7497' },
  { business_name: 'Star Catering & Cafe', industry: 'Restaurant', city: 'Hayward', email: 'Gostar@sbcglobal.net', website: 'https://starcaters.com', phone: '(510) 887-2296' },
  { business_name: 'ButtercuP Diner & Bar', industry: 'Restaurant', city: 'Oakland', email: 'contact@buttercupdiner.com', website: 'https://buttercupdiner.com', phone: '(510) 444-2976' },
  { business_name: 'Casa Orozco Dublin', industry: 'Restaurant', city: 'Dublin', email: 'dublinreservations@casaorozco.com', website: 'https://casaorozco.com', phone: '(925) 828-5464' },

  // REAL ESTATE
  { business_name: 'Beltran Real Estate Group', industry: 'Real Estate', city: 'Concord', email: 'elisa@beltranre.com', website: 'https://beltranre.com', phone: '(925) 864-3239' },
  { business_name: 'Rinetti & Co. Realtors', industry: 'Real Estate', city: 'Livermore', email: 'HomesByRinetti@yahoo.com', website: 'https://homesbyrinetti.com', phone: '(925) 200-6829' },
  { business_name: 'Broker Jeremy Irvin', industry: 'Real Estate', city: 'Pleasanton', email: 'BrokerJeremy@gmail.com', website: 'https://brokerjeremy.com', phone: '(925) 789-7489' },
  { business_name: 'Abio Properties', industry: 'Real Estate', city: 'Oakland', email: 'hello@abioproperties.com', website: 'https://abioproperties.com', phone: '(888) 400-2246' },
  { business_name: 'Sexton Group Real Estate', industry: 'Real Estate', city: 'Oakland', email: 'info@sextongroupre.com', website: 'https://sextongroupre.com', phone: '(510) 549-1003' },
  { business_name: 'First Realty Pryor & Associates', industry: 'Real Estate', city: 'Pittsburg', email: 'Office@FirstRealtyPryor.com', website: 'https://firstrealtypryor.com', phone: '(925) 754-7000' },
  { business_name: 'Delphi Realty Group', industry: 'Real Estate', city: 'Pleasant Hill', email: 'info@delphirealtygroup.com', website: 'https://delphirealtygroup.com', phone: '(925) 705-1300' },
  { business_name: 'Zocchi & Associates', industry: 'Real Estate', city: 'Walnut Creek', email: 'teresa@zocchiandassociates.com', website: 'https://zocchiandassociates.com', phone: '(925) 360-8662' },
  { business_name: 'Navi Dhillon Realty Experts', industry: 'Real Estate', city: 'Fremont', email: 'info@homesbynavi.com', website: 'https://realtyexperts.com', phone: '(510) 541-1124' },
  { business_name: 'McKenna Brink Signorotti LLP', industry: 'Law', city: 'Walnut Creek', email: 'info@mckennabrink.com', website: 'https://mckennabrink.com', phone: '(925) 433-5448' },

  // LAW
  { business_name: 'Law Office of Christopher Schlies', industry: 'Law', city: 'Pleasanton', email: 'chris@schlieslaw.com', website: 'https://schlieslaw.com', phone: '(925) 462-0444' },
  { business_name: 'Law Office of Lynnette Ariathurai', industry: 'Law', city: 'Fremont', email: 'attorney@arialawfirm.com', website: 'https://arialawfirm.com', phone: '(510) 794-9290' },
  { business_name: 'Moyal & Moyal', industry: 'Law', city: 'Concord', email: 'Kenmoyal@gmail.com', website: 'https://moyalandmoyal.com', phone: '(925) 686-0200' },
  { business_name: 'H.F. Layton Law Office', industry: 'Law', city: 'Brentwood', email: 'barbara@laytonlawoffice.com', website: 'https://laytonlawoffice.com', phone: '(925) 240-1040' },
  { business_name: 'Garcia & Gurney A Law Corp', industry: 'Law', city: 'Pleasanton', email: 'info@garciagurney.com', website: 'https://garciagurney.com', phone: '(925) 468-0400' },
  { business_name: 'Ginny Walia Law Offices', industry: 'Law', city: 'Pleasanton', email: 'info@walialawfirm.com', website: 'https://walialawfirm.com', phone: '(925) 800-3360' },
  { business_name: 'Law Office of Mark McLaughlin', industry: 'Law', city: 'Antioch', email: 'nmclaug226@sbcglobal.net', website: null, phone: '(925) 754-2622' },

  // AUTO SHOPS
  { business_name: 'ASAP Automotive', industry: 'Auto Repair', city: 'Fremont', email: 'ron_mcleod@comcast.net', website: 'https://asapautomotive.com', phone: '(510) 327-5837' },
  { business_name: "Le's Auto Body & Engine Repair", industry: 'Auto Repair', city: 'Oakland', email: 'le9194@aol.com', website: 'https://lesautorepair.com', phone: '(510) 533-0662' },
  { business_name: 'Auto Diagnostic & Repair', industry: 'Auto Repair', city: 'Antioch', email: 'fixit@myautorepairshop.com', website: 'https://myautorepairshop.com', phone: '(925) 317-6023' },
  { business_name: 'Concord Auto Service', industry: 'Auto Repair', city: 'Concord', email: 'ken@concordautoservice.com', website: 'https://concordautoservice.com', phone: '(925) 689-4428' },

  // CHIROPRACTIC
  { business_name: 'Forest Upper Cervical Chiropractic', industry: 'Chiropractic', city: 'Fremont', email: 'DrForest@ForestChiropractic.com', website: 'https://forestchiropractic.com', phone: '(510) 792-8407' },
  { business_name: 'The Function Chiropractic & Wellness', industry: 'Chiropractic', city: 'Hayward', email: 'thefunction101@gmail.com', website: 'https://thefunctionchiropracticandwellness.com', phone: '(510) 398-8082' },
  { business_name: 'Deer Valley Chiropractic', industry: 'Chiropractic', city: 'Antioch', email: 'dvchiropractic@comcast.net', website: 'https://deervalleychiropractic.com', phone: '(925) 757-7571' },
  { business_name: 'Livermore Chiropractic', industry: 'Chiropractic', city: 'Livermore', email: 'jlmccallister@sbcglobal.net', website: 'https://livermorechiro.com', phone: '(925) 449-4884' },
  { business_name: 'Oakland Active Health Center', industry: 'Chiropractic', city: 'Oakland', email: 'info@chirooakland.com', website: 'https://chirooakland.com', phone: '(510) 817-4515' },

  // ACCOUNTING
  { business_name: 'Safwat & Marston CPA', industry: 'Accounting', city: 'Hayward', email: 'info@safwatmarstoncpa.com', website: 'https://safwatmarstoncpa.com', phone: '(510) 397-1700' },
  { business_name: 'Smeed CPA Inc.', industry: 'Accounting', city: 'Brentwood', email: 'info@smeedcpa.com', website: 'https://smeedcpa.com', phone: '(925) 634-2344' },
  { business_name: 'Vik Randhawa CPA', industry: 'Accounting', city: 'Newark', email: 'info@vikprocpa.com', website: 'https://vikprocpa.com', phone: '(888) 845-7762' },
  { business_name: 'Imtiaz Ahmad CPA Inc.', industry: 'Accounting', city: 'Fremont', email: 'imtiaz@imtiazcpa.com', website: 'https://imtiazcpa.com', phone: '(510) 915-1945' },
  { business_name: 'Asnani CPA', industry: 'Accounting', city: 'Hayward', email: 'sasnani@asnanicpa.com', website: 'https://asnanicpa.com', phone: '(510) 552-7555' },
  { business_name: 'Paul Lyon CPA', industry: 'Accounting', city: 'Alameda', email: 'paullyon@paullyoncpa.com', website: 'https://paullyoncpa.com', phone: '(510) 364-7617' },
  { business_name: 'Tax & Business Services of Oakland', industry: 'Accounting', city: 'Oakland', email: 'contact@taxandbusinessservice.com', website: 'https://taxandbusinessservice.com', phone: '(510) 291-8295' },
  { business_name: 'E&P Financial Solutions', industry: 'Accounting', city: 'Oakland', email: 'vinnie@eptaxgroup.com', website: 'https://eptaxgroup.com', phone: '(510) 531-2000' },
  { business_name: 'Raymond Young CPA', industry: 'Accounting', city: 'Fremont', email: 'cpa@saves.tax', website: 'https://saves.tax', phone: '(510) 353-9575' },
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

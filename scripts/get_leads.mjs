import fs from 'fs';

const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
}

async function run() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?stage=eq.new&email=not.is.null&select=id,business_name,website`, { headers })
  const leads = await res.json()
  
  // filter out leads that already have pitch_script or audit_findings? 
  // Wait, let's just fetch all of them. The prompt says "They are currently missing 'audit_findings' and 'pitch_script'."
  
  fs.writeFileSync('leads_to_process.json', JSON.stringify(leads, null, 2))
  console.log(`Saved ${leads.length} leads to leads_to_process.json`)
}

run();

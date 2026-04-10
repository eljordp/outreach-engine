import { createRequire } from 'module'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url)

const { audits } = require(path.join(__dirname, '../east-bay-beauty-audits.js'))

const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzYSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const headers = {
  apikey: SERVICE_KEY,
  Authorization: `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
}

const res = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?select=id,business_name`, {
  headers,
})
const leads = await res.json()

let success = 0
let notFound = 0

for (const [name, findings] of Object.entries(audits)) {
  const lead = leads.find(l => l.business_name === name)
  if (!lead) {
    console.log(`✗ Not found: ${name}`)
    notFound++
    continue
  }

  const updateRes = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?id=eq.${lead.id}`, {
    method: 'PATCH',
    headers: { ...headers, Prefer: 'return=minimal' },
    body: JSON.stringify({ audit_findings: findings }),
  })

  if (updateRes.ok) {
    console.log(`✓ ${name}`)
    success++
  } else {
    const err = await updateRes.text()
    console.log(`✗ ${name} — ${err}`)
  }
}

console.log(`\nDone: ${success} updated, ${notFound} not found`)

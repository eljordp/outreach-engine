const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'
const RESEND_KEY = 're_T4TMAMJ9_K7GtZW4RxNdchYzVcQoVPbpf'
const SITE_URL = 'https://outreach-engine-pearl-pi.vercel.app'

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
}

// Fetch all new leads with email + audit findings + pitch script
const res = await fetch(
  `${SUPABASE_URL}/rest/v1/outreach_leads?stage=eq.new&email=not.is.null&select=id,business_name,email,pitch_script,pitch_token,audit_findings`,
  { headers }
)
const leads = await res.json()

const ready = leads.filter(l => l.audit_findings && l.audit_findings.length >= 3 && l.pitch_script)
const skipped = leads.filter(l => !l.audit_findings || l.audit_findings.length < 3 || !l.pitch_script)

console.log(`Ready to send: ${ready.length}`)
console.log(`Skipping (no audit/script): ${skipped.length}\n`)

let success = 0
let failed = 0

for (const lead of ready) {
  const pitchUrl = `${SITE_URL}/pitch/${lead.pitch_token}`
  const hook = lead.pitch_script.split('.')[0] + '.'

  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'JP <jp@jdlo.site>',
      to: lead.email,
      subject: `Quick thought on ${lead.business_name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; padding: 40px 20px; color: #141414; line-height: 1.7;">
          <p style="margin: 0 0 20px;">${hook}</p>
          <p style="margin: 0 0 32px;">I put together a quick breakdown specific to your business — figured it was worth sending over.</p>
          <a href="${pitchUrl}" style="display: inline-block; background: #141414; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 100px; font-family: -apple-system, sans-serif; font-size: 14px; font-weight: 500;">
            See the breakdown →
          </a>
          <p style="margin: 40px 0 0; font-size: 13px; color: #6b7280; font-family: -apple-system, sans-serif;">
            — JP<br>
            <a href="https://jdlo.site" style="color: #6b7280;">jdlo.site</a>
          </p>
        </div>
      `,
    }),
  })

  if (emailRes.ok) {
    // Mark as pitched
    await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?id=eq.${lead.id}`, {
      method: 'PATCH',
      headers: { ...headers, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ stage: 'pitched' }),
    })
    console.log(`✓ ${lead.business_name} → ${lead.email}`)
    success++
  } else {
    const err = await emailRes.json()
    console.log(`✗ ${lead.business_name} — ${err.message ?? JSON.stringify(err)}`)
    failed++
  }

  // Small delay to avoid rate limits
  await new Promise(r => setTimeout(r, 200))
}

console.log(`\nDone: ${success} sent, ${failed} failed`)

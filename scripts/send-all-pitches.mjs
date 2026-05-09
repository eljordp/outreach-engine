import 'dotenv/config'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const RESEND_API_KEY = process.env.RESEND_API_KEY
const SITE_URL = 'https://pitches.jdlo.site'

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const getRandomDelay = () => Math.floor(Math.random() * (480000 - 180000 + 1) + 180000)

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
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Jordan <jordan@jdlo.site>',
      to: [lead.email],
      subject: `Quick thought on ${lead.business_name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; color: #111827; line-height: 1.6; max-width: 600px;">
          <p>${hook}</p>
          <p>I put together a quick breakdown specific to your business — figured it was worth sending over:</p>
          <p><a href="${pitchUrl}" style="color: #2563eb; text-decoration: underline;">See the breakdown →</a></p>
          <p>Best,<br>Jordan<br><span style="color: #6b7280; font-size: 13px;">JDLO · East Bay, CA</span></p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
          <p style="font-size: 12px; color: #9ca3af; margin: 0;">You're receiving this because your business came up in my research. Not interested? Just reply and I'll never reach out again.</p>
        </div>
      `,
      text: `${hook}\n\nI put together a quick breakdown specific to your business — figured it was worth sending over:\n\n${pitchUrl}\n\nBest,\nJordan\nJDLO · East Bay, CA\n\n---\nNot interested? Reply and I'll remove you from my list.`,
    }),
  })

  const emailData = await emailRes.json()

  if (emailRes.ok) {
    await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?id=eq.${lead.id}`, {
      method: 'PATCH',
      headers: { ...headers, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ stage: 'pitched' }),
    })
    console.log(`✓ ${lead.business_name} → ${lead.email}`)
    success++
  } else {
    console.log(`✗ ${lead.business_name} — ${JSON.stringify(emailData)}`)
    failed++
  }

  if (success + failed < ready.length) {
    const delay = getRandomDelay()
    console.log(`⏳ Waiting ${Math.round(delay / 60000)} min before next send...`)
    await sleep(delay)
  }
}

console.log(`\nDone: ${success} sent, ${failed} failed`)

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const FROM_EMAIL = 'jordanl4solar@gmail.com'
const FROM_NAME = 'Jordan'
const SITE_URL = 'https://pitches.jdlo.site'

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

interface Lead {
  id: string
  business_name: string
  email: string | null
  pitch_token: string
  pitch_script: string | null
  audit_findings: Array<{ category: string; issue: string; impact: string }>
  stage: string
}

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!GMAIL_APP_PASSWORD || !SUPABASE_URL || !SERVICE_KEY) {
    return NextResponse.json({ error: 'Missing env' }, { status: 500 })
  }

  const body = await req.json().catch(() => ({}))
  const { industry, leadIds, limit = 10 } = body as { industry?: string; leadIds?: string[]; limit?: number }

  // Pull target leads
  const params = new URLSearchParams()
  params.set('select', 'id,business_name,email,pitch_token,pitch_script,audit_findings,stage')
  params.set('email', 'not.is.null')
  if (industry) params.set('industry', `eq.${industry}`)
  if (leadIds && leadIds.length) params.set('id', `in.(${leadIds.join(',')})`)

  const headers = {
    'apikey': SERVICE_KEY,
    'Authorization': `Bearer ${SERVICE_KEY}`,
  }
  const leadsRes = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?${params.toString()}`, { headers })
  const allLeads: Lead[] = await leadsRes.json()
  const ready = allLeads
    .filter(l => l.email && l.pitch_script && l.audit_findings && l.audit_findings.length >= 2)
    .slice(0, limit)

  if (!ready.length) {
    return NextResponse.json({ sent: 0, message: 'No ready leads matched filter' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: FROM_EMAIL, pass: GMAIL_APP_PASSWORD },
  })

  const results: { lead: string; ok: boolean; err?: string }[] = []

  for (const lead of ready) {
    const pitchUrl = `${SITE_URL}/pitch/${lead.pitch_token}`
    const hook = (lead.pitch_script || '').split('.')[0] + '.'
    const firstFinding = lead.audit_findings[0]?.issue || ''

    const text = `${hook}\n\nNoticed one specific thing: ${firstFinding}\n\nI put together a quick breakdown of a few more things I'd change for ${lead.business_name}, plus what I'd build to fix them. Free, takes 2 minutes to read:\n\n${pitchUrl}\n\nIf it's useful, let me know. If not, no worries — you'll never hear from me again.\n\nJordan\nJDLO · East Bay`

    const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;color:#111827;line-height:1.6;max-width:580px;">
<p>${hook}</p>
<p>Noticed one specific thing: <em>${firstFinding}</em></p>
<p>I put together a quick breakdown of a few more things I'd change for ${lead.business_name}, plus what I'd build to fix them. Free, takes 2 minutes to read:</p>
<p><a href="${pitchUrl}" style="color:#2563eb;">${pitchUrl}</a></p>
<p>If it's useful, let me know. If not, no worries — you'll never hear from me again.</p>
<p style="margin-top:24px;">Jordan<br><span style="color:#6b7280;font-size:13px;">JDLO · East Bay</span></p>
</div>`

    try {
      await transporter.sendMail({
        from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
        to: lead.email!,
        subject: `Quick thought on ${lead.business_name}`,
        text,
        html,
      })

      // Update stage + note
      await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?id=eq.${lead.id}`, {
        method: 'PATCH',
        headers: { ...headers, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
        body: JSON.stringify({ stage: 'pitched', notes: `Sent via Gmail ${new Date().toISOString()}` }),
      })

      results.push({ lead: lead.business_name, ok: true })
    } catch (e) {
      results.push({ lead: lead.business_name, ok: false, err: e instanceof Error ? e.message : String(e) })
    }

    await sleep(2_000)
  }

  return NextResponse.json({
    sent: results.filter(r => r.ok).length,
    failed: results.filter(r => !r.ok).length,
    results,
  })
}

export const maxDuration = 60

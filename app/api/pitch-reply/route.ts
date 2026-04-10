import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabaseAdmin } from '@/lib/supabase-admin'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { lead_id, name, message } = await req.json()
  if (!lead_id || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const { data: lead } = await supabaseAdmin
    .from('outreach_leads')
    .select('business_name, email, stage')
    .eq('id', lead_id)
    .single()

  if (!lead) return NextResponse.json({ error: 'Lead not found' }, { status: 404 })

  // Auto-move to Replied
  if (lead.stage === 'pitched' || lead.stage === 'new') {
    await supabaseAdmin.from('outreach_leads').update({ stage: 'replied' }).eq('id', lead_id)
  }

  // Notify JP
  await resend.emails.send({
    from: 'JDLO Outreach <jp@jdlo.site>',
    to: 'jordanl4solar@gmail.com',
    replyTo: lead.email ?? undefined,
    subject: `Reply from ${lead.business_name}`,
    html: `
      <div style="font-family: -apple-system, sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 20px; color: #141414; line-height: 1.7;">
        <p style="margin: 0 0 8px; font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">${lead.business_name}</p>
        <p style="margin: 0 0 24px; font-size: 13px; color: #6b7280;">${name ? `From: ${name}` : 'No name provided'}${lead.email ? ` · ${lead.email}` : ''}</p>
        <div style="background: #f9fafb; border-left: 3px solid #141414; padding: 16px 20px; border-radius: 4px; margin-bottom: 24px;">
          <p style="margin: 0; font-size: 15px; line-height: 1.7;">${message}</p>
        </div>
        <p style="margin: 0; font-size: 13px; color: #6b7280;">Lead auto-moved to Replied. Hit reply to respond directly.</p>
      </div>
    `,
  })

  return NextResponse.json({ ok: true })
}

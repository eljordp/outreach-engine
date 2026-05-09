import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabaseAdmin } from '@/lib/supabase-admin'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { lead_id } = await req.json()
  if (!lead_id) return NextResponse.json({ error: 'Missing lead_id' }, { status: 400 })

  const { data: lead, error } = await supabaseAdmin
    .from('outreach_leads')
    .select('*')
    .eq('id', lead_id)
    .single()

  if (error || !lead) return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
  if (!lead.email) return NextResponse.json({ error: 'No email on this lead' }, { status: 400 })

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pitches.jdlo.online'
  const pitchUrl = `${siteUrl}/pitch/${lead.pitch_token}`

  // First sentence of pitch script as the email hook
  const hook = lead.pitch_script
    ? lead.pitch_script.split('.')[0] + '.'
    : `I put together a quick breakdown for ${lead.business_name}.`

  const { error: sendError } = await resend.emails.send({
    from: 'Jordan <jordan@jdlo.site>',
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
          — Jordan<br>
          <a href="https://jdlo.site" style="color: #6b7280;">jdlo.site</a><br><br>
          P.S. You can see examples of my past work at <a href="https://jdlo.site" style="color: #6b7280; text-decoration: underline;">jdlo.site</a>.
        </p>
      </div>
    `,
  })

  if (sendError) return NextResponse.json({ error: sendError.message }, { status: 500 })

  await supabaseAdmin.from('outreach_leads').update({ stage: 'pitched' }).eq('id', lead_id)

  return NextResponse.json({ ok: true })
}

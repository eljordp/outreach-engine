import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const WARMUP_FROM = 'jordan@jdlo.site'
const WARMUP_TO = 'jordanl4solar@gmail.com'

const subjects = [
  'Following up on this',
  'Checking in',
  'Quick question',
  'Thoughts on this?',
  'Re: our conversation',
  'One thing I wanted to mention',
  'Worth a look',
  'Saw this and thought of you',
  'Loop you in',
  'Just wanted to share this',
  'Any thoughts?',
  'Making progress on this',
  'Update from my end',
  'Quick note',
  'Circling back',
]

const bodies = [
  'Hey, wanted to loop you in on some stuff I have been working on. Let me know what you think when you get a chance.',
  'Just checking in. Been heads down on a few projects. Hope things are good on your end.',
  'Saw something interesting today and thought it might be relevant to what we were talking about. Worth a look.',
  'Quick question — do you have a few minutes to connect this week? Have something I want to run by you.',
  'Making some solid progress on the project. Will send over an update once I have more to share.',
  'Hey, just wanted to reach out. Let me know if you need anything from my end.',
  'Been thinking about what you mentioned. I think there is something there — let us talk soon.',
  'Hope your week is going well. Let me know when you are free to connect.',
  'Just wrapped up something I think you will find useful. Sending it over shortly.',
  'Wanted to make sure this did not get lost. Let me know your thoughts.',
]

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))
const rand = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

export async function GET(req: NextRequest) {
  // Vercel cron auth
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD
  if (!RESEND_API_KEY || !GMAIL_APP_PASSWORD) {
    return NextResponse.json({ error: 'Missing env' }, { status: 500 })
  }

  // Day-based ramp: day 1-7 = 10/day, 8-14 = 20/day, 15+ = 30/day
  const startDate = new Date('2026-05-09')
  const today = new Date()
  const daysSinceStart = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  const emailsToSend = daysSinceStart < 7 ? 10 : daysSinceStart < 14 ? 20 : 30

  const gmail = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: WARMUP_TO, pass: GMAIL_APP_PASSWORD },
  })

  const results: { i: number; ok: boolean; subject: string; err?: string }[] = []

  for (let i = 0; i < emailsToSend; i++) {
    const subject = rand(subjects)
    const body = rand(bodies)

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `Jordan <${WARMUP_FROM}>`,
          to: [WARMUP_TO],
          subject,
          text: body,
          html: `<p>${body}</p>`,
        }),
      })

      if (!res.ok) {
        const errBody = await res.text()
        results.push({ i, ok: false, subject, err: errBody })
        continue
      }

      // Reply from Gmail back (creates engagement signal)
      await sleep(2_000)
      try {
        await gmail.sendMail({
          from: WARMUP_TO,
          to: WARMUP_TO,
          subject: `Re: ${subject}`,
          text: 'Got it, thanks for sending this over. Will take a look and get back to you.',
        })
      } catch {}

      results.push({ i, ok: true, subject })
    } catch (e) {
      results.push({ i, ok: false, subject, err: e instanceof Error ? e.message : String(e) })
    }

    // Short stagger between sends (3s — fits in 60s function limit even at 30 emails/day)
    if (i < emailsToSend - 1) {
      await sleep(3_000)
    }
  }

  return NextResponse.json({
    day: daysSinceStart + 1,
    target: emailsToSend,
    sent: results.filter(r => r.ok).length,
    failed: results.filter(r => !r.ok).length,
    results,
  })
}

// 60s — fits Hobby plan, enough for 30 emails @ ~5s each
export const maxDuration = 60

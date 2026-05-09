import { NextRequest, NextResponse } from 'next/server'

// Vercel cron wrapper that calls the Gmail send route with default limit (30/day).
// Auth via Vercel's automatic Bearer CRON_SECRET on the cron tick.

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://outreach-engine-pearl-pi.vercel.app'

  const res = await fetch(`${baseUrl}/api/send-gmail-pitches`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.CRON_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ limit: 15 }),
  })

  const data = await res.json()
  return NextResponse.json({ triggered_at: new Date().toISOString(), result: data })
}

export const maxDuration = 60

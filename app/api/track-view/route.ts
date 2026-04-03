import { supabaseAdmin } from '@/lib/supabase-admin'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { lead_id, scroll_depth, time_on_page } = body

    if (!lead_id) return Response.json({ error: 'Missing lead_id' }, { status: 400 })

    await supabaseAdmin.from('pitch_views').insert({
      lead_id,
      scroll_depth: Math.min(100, Math.max(0, scroll_depth ?? 0)),
      time_on_page: Math.max(0, time_on_page ?? 0),
    })

    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: 'Failed' }, { status: 500 })
  }
}

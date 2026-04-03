import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import type { Lead } from '@/lib/types'
import PitchClient from './PitchClient'

export default async function PitchPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params

  const { data } = await supabase
    .from('leads')
    .select('*')
    .eq('pitch_token', token)
    .single()

  if (!data) notFound()

  const lead = data as Lead

  return <PitchClient lead={lead} />
}

import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import type { Lead } from '@/lib/types'
import type { Metadata } from 'next'
import PitchClient from './PitchClient'

export async function generateMetadata({ params }: { params: Promise<{ token: string }> }): Promise<Metadata> {
  const { token } = await params
  const { data } = await supabase.from('outreach_leads').select('business_name').eq('pitch_token', token).single()
  return { title: data?.business_name ?? 'Strategic Analysis' }
}

export default async function PitchPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params

  const { data } = await supabase
    .from('outreach_leads')
    .select('*')
    .eq('pitch_token', token)
    .single()

  if (!data) notFound()

  const lead = data as Lead

  return <PitchClient lead={lead} />
}

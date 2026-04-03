'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import type { Lead, DealStage, PitchView } from '@/lib/types'
import { STAGE_CONFIG, STAGE_ORDER } from '@/lib/types'
import { ExternalLink, Eye, Phone, Globe, Plus, RefreshCw, Zap } from 'lucide-react'

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [recentViews, setRecentViews] = useState<(PitchView & { lead?: Lead })[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  async function fetchLeads() {
    const { data } = await supabase.from('leads').select('*').order('updated_at', { ascending: false })
    if (data) setLeads(data as Lead[])
  }

  async function fetchRecentViews() {
    const { data } = await supabase
      .from('pitch_views')
      .select('*')
      .order('viewed_at', { ascending: false })
      .limit(10)
    if (data) setRecentViews(data as PitchView[])
  }

  async function refresh() {
    setRefreshing(true)
    await Promise.all([fetchLeads(), fetchRecentViews()])
    setRefreshing(false)
  }

  useEffect(() => {
    Promise.all([fetchLeads(), fetchRecentViews()]).then(() => setLoading(false))

    // Real-time: new pitch views
    const channel = supabase
      .channel('pitch_views_feed')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'pitch_views' }, () => {
        fetchRecentViews()
        fetchLeads()
      })
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [])

  async function updateStage(leadId: string, stage: DealStage) {
    await supabase.from('leads').update({ stage }).eq('id', leadId)
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, stage } : l))
  }

  const byStage = (stage: DealStage) => leads.filter(l => l.stage === stage)

  const totalLeads = leads.length
  const pitched = leads.filter(l => ['pitched', 'replied', 'meeting', 'closed'].includes(l.stage)).length
  const closed = leads.filter(l => l.stage === 'closed').length

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-sm text-[#6b7280]">Loading pipeline...</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb] bg-white shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[15px] tracking-tight">JDLO Outreach</span>
          <span className="text-[#6b7280] text-xs">Pipeline</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-6 text-sm">
            <div className="text-center">
              <div className="font-semibold text-[#141414]">{totalLeads}</div>
              <div className="text-[10px] text-[#6b7280] uppercase tracking-wide">Leads</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-[#2563eb]">{pitched}</div>
              <div className="text-[10px] text-[#6b7280] uppercase tracking-wide">Active</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-[#16a34a]">{closed}</div>
              <div className="text-[10px] text-[#6b7280] uppercase tracking-wide">Closed</div>
            </div>
          </div>
          <div className="h-4 w-px bg-[#e5e7eb]" />
          <button
            onClick={refresh}
            className="flex items-center gap-1.5 text-xs text-[#6b7280] hover:text-[#141414] transition-colors"
          >
            <RefreshCw size={13} className={refreshing ? 'animate-spin' : ''} />
            Refresh
          </button>
          <Link
            href="/leads/new"
            className="flex items-center gap-1.5 bg-[#141414] text-white text-xs px-3 py-1.5 rounded-lg hover:bg-[#333] transition-colors"
          >
            <Plus size={13} />
            Add Lead
          </Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Kanban */}
        <div className="flex-1 overflow-x-auto p-4">
          <div className="flex gap-3 h-full min-w-max">
            {STAGE_ORDER.filter(s => s !== 'dead').map(stage => {
              const cfg = STAGE_CONFIG[stage]
              const stageleads = byStage(stage)
              return (
                <div key={stage} className="flex flex-col w-64 shrink-0">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ background: cfg.color }} />
                      <span className="text-xs font-medium text-[#141414]">{cfg.label}</span>
                    </div>
                    <span className="text-xs text-[#6b7280]">{stageleads.length}</span>
                  </div>
                  <div className="flex-1 overflow-y-auto kanban-col space-y-2 pr-1">
                    {stageleads.map(lead => (
                      <LeadCard key={lead.id} lead={lead} onStageChange={updateStage} />
                    ))}
                    {stageleads.length === 0 && (
                      <div className="border border-dashed border-[#e5e7eb] rounded-xl p-4 text-center text-xs text-[#9ca3af]">
                        Empty
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
            {/* Dead column */}
            <div className="flex flex-col w-64 shrink-0">
              <div className="flex items-center justify-between mb-2 px-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#dc2626]" />
                  <span className="text-xs font-medium text-[#141414]">Dead</span>
                </div>
                <span className="text-xs text-[#6b7280]">{byStage('dead').length}</span>
              </div>
              <div className="flex-1 overflow-y-auto kanban-col space-y-2 pr-1 opacity-50">
                {byStage('dead').map(lead => (
                  <LeadCard key={lead.id} lead={lead} onStageChange={updateStage} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Activity Feed */}
        <aside className="w-72 shrink-0 border-l border-[#e5e7eb] bg-white overflow-y-auto">
          <div className="p-4 border-b border-[#e5e7eb]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#16a34a] live-dot" />
              <span className="text-xs font-medium">Live Activity</span>
            </div>
          </div>
          <div className="p-3 space-y-2">
            {recentViews.length === 0 && (
              <p className="text-xs text-[#6b7280] text-center py-4">No pitch views yet.<br />Send your first link.</p>
            )}
            {recentViews.map(view => {
              const lead = leads.find(l => l.id === view.lead_id)
              return (
                <div key={view.id} className="bg-[#fafafa] rounded-lg p-3 border border-[#e5e7eb]">
                  <div className="flex items-start gap-2">
                    <Eye size={13} className="text-[#2563eb] mt-0.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{lead?.business_name ?? 'Unknown Lead'}</p>
                      <p className="text-[10px] text-[#6b7280] mt-0.5">
                        {view.scroll_depth}% scroll · {Math.round(view.time_on_page / 60)}m {view.time_on_page % 60}s
                      </p>
                      <p className="text-[10px] text-[#9ca3af] mt-0.5">
                        {new Date(view.viewed_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
                      </p>
                    </div>
                    {view.scroll_depth >= 80 && (
                      <Zap size={11} className="text-[#d97706] shrink-0 mt-0.5" aria-label="High intent" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </aside>
      </div>
    </div>
  )
}

function LeadCard({ lead, onStageChange }: { lead: Lead; onStageChange: (id: string, stage: DealStage) => void }) {
  const cfg = STAGE_CONFIG[lead.stage]
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-3 hover:border-[#141414]/20 transition-colors group">
      <div className="flex items-start justify-between gap-2 mb-2">
        <Link href={`/leads/${lead.id}`} className="text-sm font-medium leading-tight hover:underline flex-1 min-w-0">
          {lead.business_name}
        </Link>
        <Link
          href={`/pitch/${lead.pitch_token}`}
          target="_blank"
          className="text-[#6b7280] hover:text-[#141414] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
          title="Open pitch page"
        >
          <ExternalLink size={12} />
        </Link>
      </div>

      <div className="flex flex-col gap-1 mb-3">
        {lead.city && (
          <div className="flex items-center gap-1 text-[11px] text-[#6b7280]">
            <span>{lead.city}</span>
            {lead.industry && <><span>·</span><span>{lead.industry}</span></>}
          </div>
        )}
        {lead.phone && (
          <a href={`tel:${lead.phone}`} className="flex items-center gap-1 text-[11px] text-[#6b7280] hover:text-[#141414]">
            <Phone size={10} />
            {lead.phone}
          </a>
        )}
        {lead.website && (
          <a href={lead.website} target="_blank" className="flex items-center gap-1 text-[11px] text-[#6b7280] hover:text-[#141414] truncate">
            <Globe size={10} />
            <span className="truncate">{lead.website.replace(/^https?:\/\//, '')}</span>
          </a>
        )}
      </div>

      {/* Stage selector */}
      <select
        value={lead.stage}
        onChange={e => onStageChange(lead.id, e.target.value as DealStage)}
        className="w-full text-[10px] rounded-md px-2 py-1 border border-[#e5e7eb] cursor-pointer"
        style={{ background: cfg.bg, color: cfg.color }}
      >
        {STAGE_ORDER.map(s => (
          <option key={s} value={s}>{STAGE_CONFIG[s].label}</option>
        ))}
      </select>
    </div>
  )
}

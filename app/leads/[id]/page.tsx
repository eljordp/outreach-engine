'use client'

import { useEffect, useState, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import type { Lead, DealStage, PitchView } from '@/lib/types'
import { STAGE_CONFIG, STAGE_ORDER } from '@/lib/types'
import { ArrowLeft, Copy, ExternalLink, Eye, Phone, Mail, Globe, Check } from 'lucide-react'

export default function LeadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [lead, setLead] = useState<Lead | null>(null)
  const [views, setViews] = useState<PitchView[]>([])
  const [editing, setEditing] = useState(false)
  const [copied, setCopied] = useState(false)
  const [saving, setSaving] = useState(false)
  const [notes, setNotes] = useState('')
  const [script, setScript] = useState('')

  useEffect(() => {
    supabase.from('leads').select('*').eq('id', id).single().then(({ data }) => {
      if (data) {
        setLead(data as Lead)
        setNotes(data.notes ?? '')
        setScript(data.pitch_script ?? '')
      }
    })
    supabase.from('pitch_views').select('*').eq('lead_id', id).order('viewed_at', { ascending: false }).then(({ data }) => {
      if (data) setViews(data as PitchView[])
    })
  }, [id])

  async function updateStage(stage: DealStage) {
    if (!lead) return
    await supabase.from('leads').update({ stage }).eq('id', id)
    setLead(prev => prev ? { ...prev, stage } : prev)
  }

  async function saveEdits() {
    setSaving(true)
    await supabase.from('leads').update({ notes, pitch_script: script }).eq('id', id)
    setLead(prev => prev ? { ...prev, notes, pitch_script: script } : prev)
    setEditing(false)
    setSaving(false)
  }

  async function copyPitchLink() {
    if (!lead) return
    const url = `${window.location.origin}/pitch/${lead.pitch_token}`
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!lead) {
    return <div className="flex items-center justify-center h-screen text-sm text-[#6b7280]">Loading...</div>
  }

  const cfg = STAGE_CONFIG[lead.stage]
  const pitchUrl = `/pitch/${lead.pitch_token}`
  const totalViews = views.length
  const highIntent = views.filter(v => v.scroll_depth >= 80).length
  const avgScroll = views.length ? Math.round(views.reduce((a, v) => a + v.scroll_depth, 0) / views.length) : 0

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb] bg-white">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-[#6b7280] hover:text-[#141414] transition-colors">
            <ArrowLeft size={16} />
          </Link>
          <span className="font-medium text-sm">{lead.business_name}</span>
          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: cfg.bg, color: cfg.color }}>
            {cfg.label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyPitchLink}
            className="flex items-center gap-1.5 text-xs border border-[#e5e7eb] bg-white px-3 py-1.5 rounded-lg hover:border-[#141414]/30 transition-colors"
          >
            {copied ? <Check size={12} className="text-[#16a34a]" /> : <Copy size={12} />}
            {copied ? 'Copied!' : 'Copy Pitch Link'}
          </button>
          <Link
            href={pitchUrl}
            target="_blank"
            className="flex items-center gap-1.5 text-xs bg-[#141414] text-white px-3 py-1.5 rounded-lg hover:bg-[#333] transition-colors"
          >
            <ExternalLink size={12} />
            Open Pitch
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white border border-[#e5e7eb] rounded-xl p-4 text-center">
            <div className="text-2xl font-semibold">{totalViews}</div>
            <div className="text-[11px] text-[#6b7280] mt-0.5 uppercase tracking-wide">Pitch Views</div>
          </div>
          <div className="bg-white border border-[#e5e7eb] rounded-xl p-4 text-center">
            <div className="text-2xl font-semibold">{avgScroll}%</div>
            <div className="text-[11px] text-[#6b7280] mt-0.5 uppercase tracking-wide">Avg Scroll</div>
          </div>
          <div className="bg-white border border-[#e5e7eb] rounded-xl p-4 text-center">
            <div className="text-2xl font-semibold text-[#d97706]">{highIntent}</div>
            <div className="text-[11px] text-[#6b7280] mt-0.5 uppercase tracking-wide">High Intent (80%+)</div>
          </div>
        </div>

        {/* Contact + Stage */}
        <div className="bg-white border border-[#e5e7eb] rounded-xl p-5 space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="font-medium text-sm">{lead.business_name}</h3>
              {lead.city && <p className="text-xs text-[#6b7280]">{lead.city}{lead.industry && ` · ${lead.industry}`}</p>}
              <div className="flex flex-col gap-1.5 mt-2">
                {lead.phone && (
                  <a href={`tel:${lead.phone}`} className="flex items-center gap-2 text-xs text-[#6b7280] hover:text-[#141414]">
                    <Phone size={12} />{lead.phone}
                  </a>
                )}
                {lead.email && (
                  <a href={`mailto:${lead.email}`} className="flex items-center gap-2 text-xs text-[#6b7280] hover:text-[#141414]">
                    <Mail size={12} />{lead.email}
                  </a>
                )}
                {lead.website && (
                  <a href={lead.website} target="_blank" className="flex items-center gap-2 text-xs text-[#6b7280] hover:text-[#141414]">
                    <Globe size={12} />{lead.website.replace(/^https?:\/\//, '')}
                  </a>
                )}
              </div>
            </div>
            <div>
              <label className="text-[10px] text-[#6b7280] uppercase tracking-wide block mb-1">Stage</label>
              <select
                value={lead.stage}
                onChange={e => updateStage(e.target.value as DealStage)}
                className="text-xs rounded-lg px-2 py-1.5 border border-[#e5e7eb] cursor-pointer font-medium"
                style={{ background: cfg.bg, color: cfg.color }}
              >
                {STAGE_ORDER.map(s => (
                  <option key={s} value={s}>{STAGE_CONFIG[s].label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Audit Findings */}
        {lead.audit_findings && lead.audit_findings.length > 0 && (
          <div className="bg-white border border-[#e5e7eb] rounded-xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-4">Audit Findings</h3>
            <div className="space-y-3">
              {lead.audit_findings.map((f, i) => (
                <div key={i} className="border-l-2 border-[#e5e7eb] pl-3">
                  {f.category && <div className="text-[10px] uppercase tracking-wide text-[#9ca3af] mb-0.5">{f.category}</div>}
                  <div className="text-sm font-medium">{f.issue}</div>
                  {f.impact && <div className="text-xs text-[#6b7280] mt-0.5">{f.impact}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pitch Script */}
        <div className="bg-white border border-[#e5e7eb] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6b7280]">Outreach Script</h3>
            {!editing ? (
              <button onClick={() => setEditing(true)} className="text-xs text-[#6b7280] hover:text-[#141414] transition-colors">Edit</button>
            ) : (
              <div className="flex gap-2">
                <button onClick={() => { setEditing(false); setScript(lead.pitch_script ?? ''); setNotes(lead.notes ?? '') }} className="text-xs text-[#6b7280]">Cancel</button>
                <button onClick={saveEdits} disabled={saving} className="text-xs text-[#141414] font-medium">{saving ? 'Saving...' : 'Save'}</button>
              </div>
            )}
          </div>
          {editing ? (
            <textarea
              value={script}
              onChange={e => setScript(e.target.value)}
              rows={8}
              className="w-full text-sm border border-[#e5e7eb] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#141414] transition-colors resize-none"
            />
          ) : (
            <pre className="text-sm whitespace-pre-wrap text-[#374151] leading-relaxed font-sans">{lead.pitch_script || <span className="text-[#9ca3af]">No script yet.</span>}</pre>
          )}
        </div>

        {/* Notes */}
        <div className="bg-white border border-[#e5e7eb] rounded-xl p-5">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-4">Notes</h3>
          {editing ? (
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={4}
              className="w-full text-sm border border-[#e5e7eb] rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#141414] transition-colors resize-none"
            />
          ) : (
            <p className="text-sm text-[#374151] leading-relaxed">{lead.notes || <span className="text-[#9ca3af]">No notes.</span>}</p>
          )}
        </div>

        {/* View History */}
        {views.length > 0 && (
          <div className="bg-white border border-[#e5e7eb] rounded-xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-4">Pitch View History</h3>
            <div className="space-y-2">
              {views.map(v => (
                <div key={v.id} className="flex items-center justify-between text-xs py-2 border-b border-[#f3f4f6] last:border-0">
                  <div className="flex items-center gap-2 text-[#6b7280]">
                    <Eye size={12} />
                    {new Date(v.viewed_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
                  </div>
                  <div className="flex items-center gap-3 text-[#6b7280]">
                    <span>{v.scroll_depth}% scroll</span>
                    <span>{Math.floor(v.time_on_page / 60)}m {v.time_on_page % 60}s</span>
                    {v.scroll_depth >= 80 && <span className="text-[#d97706] font-medium">High Intent</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

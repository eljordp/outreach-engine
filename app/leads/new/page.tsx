'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { AuditFinding } from '@/lib/types'
import { ArrowLeft, Plus, X } from 'lucide-react'
import Link from 'next/link'

export default function NewLead() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    business_name: '',
    city: '',
    industry: '',
    website: '',
    phone: '',
    email: '',
    contact_name: '',
    pitch_script: '',
    notes: '',
  })
  const [findings, setFindings] = useState<AuditFinding[]>([
    { category: '', issue: '', impact: '' }
  ])

  function setField(k: string, v: string) {
    setForm(prev => ({ ...prev, [k]: v }))
  }

  function updateFinding(i: number, k: keyof AuditFinding, v: string) {
    setFindings(prev => prev.map((f, idx) => idx === i ? { ...f, [k]: v } : f))
  }

  function addFinding() {
    setFindings(prev => [...prev, { category: '', issue: '', impact: '' }])
  }

  function removeFinding(i: number) {
    setFindings(prev => prev.filter((_, idx) => idx !== i))
  }

  async function save() {
    if (!form.business_name.trim()) return
    setSaving(true)
    const { data } = await supabase.from('outreach_leads').insert({
      ...form,
      audit_findings: findings.filter(f => f.issue.trim()),
      stage: 'new',
    }).select().single()
    if (data) router.push(`/leads/${data.id}`)
    else setSaving(false)
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="flex items-center gap-3 px-6 py-4 border-b border-[#e5e7eb] bg-white">
        <Link href="/" className="text-[#6b7280] hover:text-[#141414] transition-colors">
          <ArrowLeft size={16} />
        </Link>
        <span className="font-medium text-sm">New Lead</span>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-8">
        {/* Business Info */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-4">Business Info</h2>
          <div className="space-y-3">
            <input
              placeholder="Business Name *"
              value={form.business_name}
              onChange={e => setField('business_name', e.target.value)}
              className="w-full border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#141414] transition-colors"
            />
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="City" value={form.city} onChange={e => setField('city', e.target.value)} className="border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#141414] transition-colors" />
              <input placeholder="Industry" value={form.industry} onChange={e => setField('industry', e.target.value)} className="border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#141414] transition-colors" />
            </div>
            <input placeholder="Website URL" value={form.website} onChange={e => setField('website', e.target.value)} className="w-full border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#141414] transition-colors" />
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="Phone" value={form.phone} onChange={e => setField('phone', e.target.value)} className="border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#141414] transition-colors" />
              <input placeholder="Email" value={form.email} onChange={e => setField('email', e.target.value)} className="border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#141414] transition-colors" />
            </div>
            <input placeholder="Contact Name" value={form.contact_name} onChange={e => setField('contact_name', e.target.value)} className="w-full border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#141414] transition-colors" />
          </div>
        </section>

        {/* Audit Findings */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6b7280]">Audit Findings</h2>
            <button onClick={addFinding} className="flex items-center gap-1 text-xs text-[#6b7280] hover:text-[#141414] transition-colors">
              <Plus size={12} /> Add
            </button>
          </div>
          <div className="space-y-3">
            {findings.map((f, i) => (
              <div key={i} className="bg-white border border-[#e5e7eb] rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <input
                    placeholder="Category (e.g. Conversion, Trust, Speed)"
                    value={f.category}
                    onChange={e => updateFinding(i, 'category', e.target.value)}
                    className="flex-1 text-xs text-[#6b7280] focus:outline-none"
                  />
                  {findings.length > 1 && (
                    <button onClick={() => removeFinding(i)} className="text-[#6b7280] hover:text-[#dc2626] ml-2">
                      <X size={12} />
                    </button>
                  )}
                </div>
                <input
                  placeholder="Issue — what's broken or missing"
                  value={f.issue}
                  onChange={e => updateFinding(i, 'issue', e.target.value)}
                  className="w-full text-sm focus:outline-none placeholder:text-[#9ca3af]"
                />
                <input
                  placeholder="Impact — what it's costing them"
                  value={f.impact}
                  onChange={e => updateFinding(i, 'impact', e.target.value)}
                  className="w-full text-xs text-[#6b7280] focus:outline-none placeholder:text-[#9ca3af]"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Pitch Script */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-4">Outreach Script</h2>
          <textarea
            placeholder="The personalized pitch message to send this lead..."
            value={form.pitch_script}
            onChange={e => setField('pitch_script', e.target.value)}
            rows={6}
            className="w-full border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#141414] transition-colors resize-none"
          />
        </section>

        {/* Notes */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-4">Notes</h2>
          <textarea
            placeholder="Anything else relevant..."
            value={form.notes}
            onChange={e => setField('notes', e.target.value)}
            rows={3}
            className="w-full border border-[#e5e7eb] rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#141414] transition-colors resize-none"
          />
        </section>

        <button
          onClick={save}
          disabled={saving || !form.business_name.trim()}
          className="w-full bg-[#141414] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#333] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {saving ? 'Saving...' : 'Save Lead'}
        </button>
      </div>
    </div>
  )
}

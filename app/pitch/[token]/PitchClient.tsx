'use client'

import { useEffect, useRef } from 'react'
import type { Lead } from '@/lib/types'

export default function PitchClient({ lead }: { lead: Lead }) {
  const startTime = useRef(Date.now())
  const maxScroll = useRef(0)
  const tracked = useRef(false)

  useEffect(() => {
    // Track scroll depth
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const depth = Math.round((scrolled / total) * 100)
      if (depth > maxScroll.current) maxScroll.current = depth
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Send tracking on unload
    function sendTracking() {
      if (tracked.current) return
      tracked.current = true
      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000)
      navigator.sendBeacon('/api/track-view', JSON.stringify({
        lead_id: lead.id,
        scroll_depth: maxScroll.current,
        time_on_page: timeOnPage,
      }))
    }

    window.addEventListener('beforeunload', sendTracking)
    // Also fire after 30s of reading (catches people who don't close)
    const timer = setTimeout(sendTracking, 30000)

    // Scroll reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('beforeunload', sendTracking)
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [lead.id])

  const findings = lead.audit_findings ?? []

  return (
    <div className="min-h-screen bg-[#fafafa] relative">
      {/* Film grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }} />

      <div className="max-w-2xl mx-auto px-6 py-20">
        {/* Cold open */}
        <div className="reveal mb-16">
          <p className="text-xs uppercase tracking-widest text-[#9ca3af] mb-6">Strategic Analysis — {lead.city ?? 'Local Market'}</p>
          <h1 className="font-serif text-4xl text-[#141414] leading-tight mb-6">
            {lead.business_name}
          </h1>
          <p className="text-lg text-[#374151] leading-relaxed">
            I looked at your digital footprint in {lead.city ?? 'your market'} and found a significant leak in your lead flow. Here's what I found — and what it's costing you.
          </p>
        </div>

        {/* Divider */}
        <div className="reveal h-px bg-[#e5e7eb] mb-16" />

        {/* Audit findings */}
        {findings.length > 0 && (
          <div className="reveal mb-16">
            <p className="text-xs uppercase tracking-widest text-[#9ca3af] mb-8">The Audit</p>
            <div className="space-y-8">
              {findings.map((f, i) => (
                <div key={i} className="reveal">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#141414] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      {f.category && <p className="text-[10px] uppercase tracking-widest text-[#9ca3af] mb-1">{f.category}</p>}
                      <h3 className="font-semibold text-[#141414] mb-1">{f.issue}</h3>
                      {f.impact && <p className="text-sm text-[#6b7280] leading-relaxed">{f.impact}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="reveal h-px bg-[#e5e7eb] mb-16" />

        {/* Vision section */}
        <div className="reveal mb-16">
          <p className="text-xs uppercase tracking-widest text-[#9ca3af] mb-6">The Fix</p>
          <h2 className="font-serif text-3xl text-[#141414] mb-6 leading-tight">
            Built for one thing: getting people on the phone.
          </h2>
          <p className="text-[#374151] leading-relaxed mb-6">
            A high-performance version of {lead.business_name} — with instant booking, real reviews front and center, and a mobile experience that converts. Ships in under 2 weeks.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {['Online booking', 'Review integration', 'Mobile-first', 'Fast load', 'SEO-optimized', 'Analytics'].map(item => (
              <div key={item} className="bg-white border border-[#e5e7eb] rounded-lg px-3 py-2 text-xs text-[#374151] text-center">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ROI section */}
        <div className="reveal bg-[#141414] text-white rounded-2xl p-8 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#9ca3af] mb-4">The Math</p>
          <h2 className="font-serif text-2xl mb-4">What this is worth to you</h2>
          <p className="text-[#d1d5db] text-sm leading-relaxed mb-6">
            If your site is losing even 5 leads a month from slow load times, no booking, and missing trust signals — at an average job value of $500+, that's $2,500+/month walking out the door.
          </p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-semibold mb-1">5+</div>
              <div className="text-[10px] uppercase tracking-wide text-[#9ca3af]">Leads/mo recovered</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-semibold mb-1">$2.5K+</div>
              <div className="text-[10px] uppercase tracking-wide text-[#9ca3af]">Monthly upside</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <p className="text-xs uppercase tracking-widest text-[#9ca3af] mb-4">Next Step</p>
          <h2 className="font-serif text-2xl text-[#141414] mb-4">15 minutes. No commitment.</h2>
          <p className="text-[#6b7280] text-sm mb-8">I've already mapped out the strategy. Let's walk through it and make sure it's the right fit.</p>
          <a
            href="https://cal.com/jdlo"
            className="inline-flex items-center gap-2 bg-[#141414] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
          >
            Book a 15-minute call →
          </a>
          <p className="text-[10px] text-[#9ca3af] mt-4">Built by JDLO · jdlo.site</p>
        </div>
      </div>
    </div>
  )
}

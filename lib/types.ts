export type DealStage = 'new' | 'pitched' | 'replied' | 'meeting' | 'closed' | 'hold' | 'dead'

export interface AuditFinding {
  category: string
  issue: string
  impact: string
}

export interface Lead {
  id: string
  business_name: string
  city: string | null
  industry: string | null
  website: string | null
  phone: string | null
  email: string | null
  contact_name: string | null
  audit_findings: AuditFinding[]
  pitch_script: string | null
  pitch_token: string
  stage: DealStage
  notes: string | null
  created_at: string
  updated_at: string
}

export interface PitchView {
  id: string
  lead_id: string
  viewed_at: string
  scroll_depth: number
  time_on_page: number
}

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: Lead
        Insert: Omit<Lead, 'id' | 'created_at' | 'updated_at' | 'pitch_token'> & { pitch_token?: string }
        Update: Partial<Lead>
      }
      pitch_views: {
        Row: PitchView
        Insert: Omit<PitchView, 'id' | 'viewed_at'>
        Update: Partial<PitchView>
      }
    }
  }
}

export const STAGE_CONFIG: Record<DealStage, { label: string; color: string; bg: string }> = {
  new:     { label: 'New',     color: '#6b7280', bg: '#f3f4f6' },
  pitched: { label: 'Pitched', color: '#2563eb', bg: '#eff6ff' },
  replied: { label: 'Replied', color: '#d97706', bg: '#fffbeb' },
  meeting: { label: 'Meeting', color: '#7c3aed', bg: '#f5f3ff' },
  closed:  { label: 'Closed',  color: '#16a34a', bg: '#f0fdf4' },
  hold:    { label: 'Hold',    color: '#9ca3af', bg: '#f9fafb' },
  dead:    { label: 'Dead',    color: '#dc2626', bg: '#fef2f2' },
}

export const STAGE_ORDER: DealStage[] = ['new', 'pitched', 'replied', 'meeting', 'closed', 'hold', 'dead']

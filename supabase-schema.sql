-- JDLO Outreach Engine Schema

create type deal_stage as enum ('new', 'pitched', 'replied', 'meeting', 'closed', 'dead');

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  city text,
  industry text,
  website text,
  phone text,
  email text,
  contact_name text,
  audit_findings jsonb default '[]',
  pitch_script text,
  pitch_token uuid unique default gen_random_uuid(),
  stage deal_stage default 'new',
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists pitch_views (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id) on delete cascade,
  viewed_at timestamptz default now(),
  scroll_depth integer default 0,
  time_on_page integer default 0
);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger leads_updated_at
  before update on leads
  for each row execute function update_updated_at();

-- Enable realtime on pitch_views so JP gets live alerts
alter publication supabase_realtime add table pitch_views;

-- RLS: open for anon reads on pitch page (public pitch URLs), service role writes
alter table leads enable row level security;
alter table pitch_views enable row level security;

create policy "Public read leads by token" on leads
  for select using (true);

create policy "Service role all on leads" on leads
  for all using (auth.role() = 'service_role');

create policy "Anyone can insert pitch view" on pitch_views
  for insert with check (true);

create policy "Service role all on pitch_views" on pitch_views
  for all using (auth.role() = 'service_role');

create policy "Public read pitch_views" on pitch_views
  for select using (true);

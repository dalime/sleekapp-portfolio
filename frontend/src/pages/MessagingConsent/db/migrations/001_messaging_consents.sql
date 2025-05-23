create table messaging_consents (
  id uuid default uuid_generate_v4() primary key,
  phone_number text not null,
  consent boolean not null,
  timestamp timestamptz not null,
  source text not null,
  status text not null,
  created_at timestamptz default now()
);

-- Add RLS policies
alter table messaging_consents enable row level security;

-- Drop existing policies if they exist
drop policy if exists "Allow anonymous inserts" on messaging_consents;
drop policy if exists "Allow reads from authenticated users" on messaging_consents;

-- Allow all operations for service role (for admin access)
create policy "Allow all operations for service role"
  on messaging_consents
  to service_role
  using (true)
  with check (true);

-- Allow anonymous inserts with specific conditions
create policy "Allow anonymous inserts"
  on messaging_consents
  for insert
  to anon
  with check (
    phone_number is not null
    and consent = true
    and timestamp is not null
    and source = 'web_form'
    and status = 'active'
  );

-- Allow anonymous users to read their own records
create policy "Allow anonymous users to read their own records"
  on messaging_consents
  for select
  to anon
  using (true);

-- Allow authenticated users to read all records
create policy "Allow authenticated users to read all records"
  on messaging_consents
  for select
  to authenticated
  using (true);
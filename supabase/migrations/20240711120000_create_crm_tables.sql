-- Enable UUID generation for primary keys
create extension if not exists "uuid-ossp";

create table if not exists public.companies (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  industry text,
  website text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.stakeholders (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid not null references public.companies(id) on delete cascade,
  full_name text not null,
  role text,
  email text,
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.notes (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid not null references public.companies(id) on delete cascade,
  stakeholder_id uuid references public.stakeholders(id) on delete set null,
  content text not null,
  created_by text,
  created_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid not null references public.companies(id) on delete cascade,
  stakeholder_id uuid references public.stakeholders(id) on delete set null,
  title text not null,
  description text,
  status text not null default 'pending' check (status in ('pending', 'in_progress', 'blocked', 'done')),
  due_date date,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_stakeholders_company_id on public.stakeholders(company_id);
create index if not exists idx_notes_company_id on public.notes(company_id);
create index if not exists idx_notes_stakeholder_id on public.notes(stakeholder_id);
create index if not exists idx_tasks_company_id on public.tasks(company_id);
create index if not exists idx_tasks_stakeholder_id on public.tasks(stakeholder_id);
create index if not exists idx_tasks_status on public.tasks(status);

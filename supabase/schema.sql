create extension if not exists "pgcrypto";

create table if not exists quote_requests (
  id uuid primary key default gen_random_uuid(),
  reference_code text not null unique,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  service_slug text not null,
  property_type text not null,
  size text not null,
  condition text not null,
  postcode text not null,
  city text not null,
  estimated_price_min integer,
  estimated_price_max integer,
  status text not null default 'new',
  payload jsonb not null
);

create table if not exists contact_requests (
  id uuid primary key default gen_random_uuid(),
  reference_code text not null unique,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  service_interest text not null,
  preferred_contact_method text not null,
  status text not null default 'new',
  payload jsonb not null
);

create index if not exists quote_requests_created_at_idx
  on quote_requests (created_at desc);

create index if not exists quote_requests_status_idx
  on quote_requests (status);

create index if not exists contact_requests_created_at_idx
  on contact_requests (created_at desc);

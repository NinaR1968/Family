create table public.recipes (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  source_lang text not null,
  title jsonb not null,
  ingredients jsonb not null,
  steps jsonb not null,
  is_locked boolean not null default false,
  image_path text,
  created_at timestamptz not null default now()
);

alter table public.recipes enable row level security;
revoke all on public.recipes from anon, authenticated;
grant select, insert on public.recipes to service_role;

-- bucket פרטי לצילומי הדפים, בלי policies
insert into storage.buckets (id, name, public)
values ('recipe-images', 'recipe-images', false)
on conflict (id) do nothing;


-- Add translation columns to categories
ALTER TABLE public.categories
  ADD COLUMN IF NOT EXISTS name_al text,
  ADD COLUMN IF NOT EXISTS name_mk text,
  ADD COLUMN IF NOT EXISTS description_al text,
  ADD COLUMN IF NOT EXISTS description_mk text;

-- Add translation columns to menu_items
ALTER TABLE public.menu_items
  ADD COLUMN IF NOT EXISTS name_al text,
  ADD COLUMN IF NOT EXISTS name_mk text,
  ADD COLUMN IF NOT EXISTS description_al text,
  ADD COLUMN IF NOT EXISTS description_mk text;

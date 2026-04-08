
-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create menu_items table
CREATE TABLE public.menu_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  is_available BOOLEAN NOT NULL DEFAULT true,
  is_popular BOOLEAN NOT NULL DEFAULT false,
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE CASCADE,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;

-- Public read access for menu
CREATE POLICY "Anyone can view categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Anyone can view menu items" ON public.menu_items FOR SELECT USING (true);

-- Admin write access (authenticated users)
CREATE POLICY "Authenticated users can insert categories" ON public.categories FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update categories" ON public.categories FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete categories" ON public.categories FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert menu items" ON public.menu_items FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update menu items" ON public.menu_items FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete menu items" ON public.menu_items FOR DELETE TO authenticated USING (true);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON public.categories FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_menu_items_updated_at BEFORE UPDATE ON public.menu_items FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Storage bucket for menu item images
INSERT INTO storage.buckets (id, name, public) VALUES ('menu-images', 'menu-images', true);

CREATE POLICY "Anyone can view menu images" ON storage.objects FOR SELECT USING (bucket_id = 'menu-images');
CREATE POLICY "Authenticated users can upload menu images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'menu-images');
CREATE POLICY "Authenticated users can update menu images" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'menu-images');
CREATE POLICY "Authenticated users can delete menu images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'menu-images');

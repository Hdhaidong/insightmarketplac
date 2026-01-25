-- Create enum for insight categories
CREATE TYPE public.insight_category AS ENUM (
  'hot-products',
  'influencers',
  'platform-growth',
  'new-products',
  'viral-videos'
);

-- Create insights table for dynamic content
CREATE TABLE public.insights (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category insight_category NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tag TEXT NOT NULL,
  image_url TEXT,
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  views_count TEXT NOT NULL DEFAULT '0',
  likes_count TEXT NOT NULL DEFAULT '0',
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.insights ENABLE ROW LEVEL SECURITY;

-- Public read access for insights (public content)
CREATE POLICY "Insights are publicly readable"
ON public.insights
FOR SELECT
USING (true);

-- Create index for faster category queries
CREATE INDEX idx_insights_category ON public.insights(category);
CREATE INDEX idx_insights_published_date ON public.insights(published_date DESC);
CREATE INDEX idx_insights_featured ON public.insights(is_featured) WHERE is_featured = true;

-- Create full text search index
ALTER TABLE public.insights ADD COLUMN search_vector tsvector
  GENERATED ALWAYS AS (
    setweight(to_tsvector('simple', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('simple', coalesce(description, '')), 'B') ||
    setweight(to_tsvector('simple', coalesce(tag, '')), 'C')
  ) STORED;

CREATE INDEX idx_insights_search ON public.insights USING GIN(search_vector);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_insights_updated_at
BEFORE UPDATE ON public.insights
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
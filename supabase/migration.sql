-- Run this in your Supabase SQL editor (https://supabase.com/dashboard/project/wqsmvsjrwjebnuqragxt/sql)

-- 1. Add new columns to businesses table
ALTER TABLE businesses ADD COLUMN IF NOT EXISTS photo TEXT;
ALTER TABLE businesses ADD COLUMN IF NOT EXISTS price_per_slot DECIMAL(10,2);
ALTER TABLE businesses ADD COLUMN IF NOT EXISTS address TEXT;
-- slug column already exists in businesses table; booking URL is /book/{slug}
ALTER TABLE businesses DROP COLUMN IF EXISTS booking_url;

-- 2. Create tournaments table
CREATE TABLE IF NOT EXISTS tournaments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  date DATE NOT NULL,
  venue TEXT NOT NULL,
  entry_fee DECIMAL(10,2),
  registration_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create pickleball_leads table (contact form submissions from the website)
CREATE TABLE IF NOT EXISTS pickleball_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  court_name TEXT,
  phone TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Enable RLS on new tables
ALTER TABLE tournaments ENABLE ROW LEVEL SECURITY;
ALTER TABLE pickleball_leads ENABLE ROW LEVEL SECURITY;

-- 5. Allow public reads on tournaments
CREATE POLICY "Public can read tournaments"
  ON tournaments FOR SELECT USING (true);

-- 6. Allow public inserts on pickleball_leads
CREATE POLICY "Public can insert leads"
  ON pickleball_leads FOR INSERT WITH CHECK (true);

-- 7. Allow public reads on pickleball businesses
--    (Only needed if businesses table has RLS enabled)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'businesses'
    AND policyname = 'Public can read pickleball businesses'
  ) THEN
    CREATE POLICY "Public can read pickleball businesses"
      ON businesses FOR SELECT USING (type = 'pickleball');
  END IF;
END$$;

-- 8. Sample tournament data (optional — delete if not needed)
INSERT INTO tournaments (name, date, venue, entry_fee, registration_link) VALUES
  ('Indore Open 2026', '2026-07-15', 'Brilliant Convention Centre, Indore', 500, NULL),
  ('Monsoon Smash Cup', '2026-08-03', 'Yashwant Club, Indore', 300, NULL),
  ('Diwali Doubles Classic', '2026-10-20', 'Nehru Stadium, Indore', 600, NULL)
ON CONFLICT DO NOTHING;

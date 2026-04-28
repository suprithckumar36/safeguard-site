CREATE TABLE public.call_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  preferred_time TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.call_bookings ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous visitors) can submit a booking
CREATE POLICY "Anyone can submit a booking"
ON public.call_bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No public read access; only the service role can read submissions (default)

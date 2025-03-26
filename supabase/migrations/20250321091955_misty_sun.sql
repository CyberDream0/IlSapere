/*
  # Job Applications Schema

  1. New Tables
    - `job_applications`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone` (text)
      - `message` (text, required)
      - `cv_url` (text)
      - `cv_filename` (text)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS
    - Add policy for inserting applications
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  cv_url text,
  cv_filename text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous submissions
CREATE POLICY "Allow anonymous job applications"
  ON job_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create storage bucket for CVs
DO $$
BEGIN
  INSERT INTO storage.buckets (id, name, public)
  VALUES ('cvs', 'cvs', true);
EXCEPTION
  WHEN unique_violation THEN
    NULL;
END $$;

-- Create policy to allow public CV uploads
CREATE POLICY "Allow public CV uploads"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (
  bucket_id = 'cvs' AND
  (LOWER(RIGHT(name, 4)) IN ('.pdf', '.doc') OR LOWER(RIGHT(name, 5)) = '.docx')
);
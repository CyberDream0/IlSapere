/*
  # Job Applications Schema Recreation

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

  2. Storage Configuration
    - Create storage bucket for CVs
    - Configure public access and upload policies

  3. Security
    - Enable RLS
    - Add policies for data insertion and file uploads
*/

-- Create job applications table
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
  VALUES ('cvs', 'cvs', true)
  ON CONFLICT (id) DO NOTHING;
END $$;

-- Allow public access to files in the bucket
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'objects' 
    AND policyname = 'Give public access to cvs bucket'
  ) THEN
    CREATE POLICY "Give public access to cvs bucket"
    ON storage.objects FOR SELECT
    TO public
    USING (bucket_id = 'cvs');
  END IF;
END $$;

-- Allow anonymous uploads to the bucket
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'objects' 
    AND policyname = 'Allow public uploads to cvs bucket'
  ) THEN
    CREATE POLICY "Allow public uploads to cvs bucket"
    ON storage.objects FOR INSERT
    TO public
    WITH CHECK (
      bucket_id = 'cvs' AND
      (LOWER(RIGHT(name, 4)) IN ('.pdf', '.doc') OR LOWER(RIGHT(name, 5)) = '.docx')
    );
  END IF;
END $$;
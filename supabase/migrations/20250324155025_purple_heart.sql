/*
  # Storage Configuration for CV Uploads

  1. Changes
    - Create storage bucket for CVs
    - Set bucket to public
    - Add storage policies for file uploads

  2. Security
    - Allow anonymous uploads with file type restrictions
*/

-- Create storage bucket for CVs if it doesn't exist
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
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = import.meta.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Anon Key:", supabaseAnonKey);
console.log("Supabase Service Key:", supabaseServiceKey);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Client for anonymous operations (with RLS)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client for admin operations (bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)
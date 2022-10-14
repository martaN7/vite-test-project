import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_REACT_APP_SUPABASE_PUBLIC_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase }
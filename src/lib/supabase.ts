import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabaseMisconfigured = !supabaseUrl || !supabaseAnonKey;

export const supabase: SupabaseClient = supabaseMisconfigured
  ? (new Proxy({} as SupabaseClient, {
      get() {
        throw new Error(
          "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
        );
      },
    }) as SupabaseClient)
  : createClient(supabaseUrl, supabaseAnonKey);

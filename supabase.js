
const SUPABASE_URL = "https://ntigiamiuoaulpmskluj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_EBGVmLefq6CKWH9--Et_pgSPZAB";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

console.log("Supabase chargé :", !!window.supabase);
console.log("Client Supabase créé :", !!supabaseClient);

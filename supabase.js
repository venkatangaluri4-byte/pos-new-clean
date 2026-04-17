const SUPABASE_URL = "https://kyyspgesdvpzajvoaoir.supabase.co";
const SUPABASE_KEY = "sb_publishable_uxbSDRGHJS84hhc-kvOaQw_yINaoJHY";

// Directly create client
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

console.log("Supabase client created:", window.supabaseClient);

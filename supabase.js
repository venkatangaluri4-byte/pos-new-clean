const SUPABASE_URL = "https://kyyspgesdvpzajvoaoir.supabase.co";
const SUPABASE_KEY = "sb_publishable_uxbSDRGHJS84hhc-kvOaQw_yINaoJHY";

// Create client directly (no condition)
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Debug
console.log("Supabase client created:", window.supabaseClient);

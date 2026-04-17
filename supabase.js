const SUPABASE_URL = "https://kyyspgesdvpzajvoaoir.supabase.co";
const SUPABASE_KEY = "sb_publishable_uxbSDRGHJS84hhc-kvOaQw_yINaoJHY";

if (!window.supabase) {
  console.error("Supabase client library failed to load.");
  alert("Supabase library did not load. Please refresh the page.");
} else {
  window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}

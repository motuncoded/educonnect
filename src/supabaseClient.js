import { createClient } from '@supabase/supabase-js';  

const SUPABASE_URL = "https://rfjxwnifxxdzkckcfrbe.supabase.co";  
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmanh3bmlmeHhkemtja2NmcmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NjQyMDUsImV4cCI6MjA1MDA0MDIwNX0.Chpin8cZUjvYx71Xstdkpg9pJtdz5k9pVAxv4eQ-I6c";  

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
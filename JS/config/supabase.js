import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://jfwubqdplpbqzelkqyai.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmd3VicWRwbHBicXplbGtxeWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NzI2NTIsImV4cCI6MjA3MjI0ODY1Mn0.9JNal4k9S_gCEoxSCX_TgmVx-v8Sh8XsXYQdTgSDfQc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

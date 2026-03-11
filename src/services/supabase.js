import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mzijaxfeaasnutbjxdot.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16aWpheGZlYWFzbnV0Ymp4ZG90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4MDY4MzMsImV4cCI6MjA4NzM4MjgzM30.FKec19_4uvrm-I89nkpFDvS35sPmf5o89qY542NFFm8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

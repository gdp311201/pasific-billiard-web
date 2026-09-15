import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vyspjpmpsjddvibpsdsh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5c3BqcG1wc2pkZHZpYnBzZHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0ODk5MzAsImV4cCI6MjEwNTA2NTkzMH0.sJcAEiMpPYrZaEcQeL6_qmcact3CHJAIKx4fkMejod8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

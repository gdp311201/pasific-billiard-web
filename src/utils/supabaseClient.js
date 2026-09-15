import { createClient } from '@supabase/supabase-js'

const supabaseUrl = https://supabase.com/dashboard/project/vyspjpmpsjddvibpsdsh
const supabaseAnonKey = sb_publishable_Q3MMHMSwIkx_KuVF4V_eVA_hjArMYjT

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

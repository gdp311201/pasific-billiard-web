import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'PASTE_URL_LU_DISINI'
const supabaseAnonKey = 'PASTE_PUBLISHABLE_KEY_LU_DISINI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

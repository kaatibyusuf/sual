import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://fmqjgcowupsqzanarjva.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_jabwfsFuNST3h11p0uSDlA_Tq3rW9E4'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
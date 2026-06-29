import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://fmqjgcowupsqzanarjva.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtcWpnY293dXBzcXphbmFyanZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5Nzc2NzEsImV4cCI6MjA5NzU1MzY3MX0.dj6pP-hCevo3CuKxWdHDHcNpcqOMIDM49JAkeNC23w4'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
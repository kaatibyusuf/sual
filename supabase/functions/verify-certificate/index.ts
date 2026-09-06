// supabase/functions/verify-certificate/index.ts
//
// Public certificate lookup -- deliberately requires NO
// authentication at all, since the entire point is letting someone
// with no Sual account (an employer checking a candidate's claim)
// verify a certificate is genuine.
//
// Uses the service role key specifically so this can be the ONE
// controlled way to read the otherwise fully private certificates
// table (see certificates_migration.sql -- there is no public RLS
// read policy on that table on purpose). Returns only the fields
// that are safe to make public: recipient name, course, issue date,
// and a valid/invalid flag. Deliberately does NOT return user_id or
// any other internal field.
//
// Deploy:  supabase functions deploy verify-certificate --no-verify-jwt

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

const COURSE_LABELS: Record<string, string> = {
  adab: 'Adab Class',
  tawheed: 'Tawheed Class',
  tajweedclass: 'Tajweed Class',
  seerahclass: 'Seerah Class',
  arabiyyahclass: 'Arabiyyah Class',
  hadeethclass: 'Hadeeth Class',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  let body: { code?: string }
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid request body' }, 400)
  }

  const code = (body.code || '').trim().toUpperCase();
  if (!code) {
    return json({ error: 'A certificate code is required' }, 400)
  }

  const { data, error } = await admin
    .from('certificates')
    .select('recipient_name, course_id, issued_at')
    .eq('reference_code', code)
    .maybeSingle()

  if (error) {
    return json({ error: error.message }, 500)
  }

  if (!data) {
    return json({ valid: false })
  }

  return json({
    valid: true,
    recipientName: data.recipient_name,
    courseLabel: COURSE_LABELS[data.course_id] ?? data.course_id,
    issuedAt: data.issued_at,
  })
})
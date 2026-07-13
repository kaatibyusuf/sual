// supabase/functions/admin-stats/index.ts
//
// Returns growth and activity metrics for the admin dashboard.
// Verifies the caller is a real signed-in admin before returning anything.
//
// Deploy:  supabase functions deploy admin-stats
// (no new secrets needed -- reuses the auto-injected Supabase env vars)
//
// FIX: hifdhActiveUsers previously fetched all hifdh_progress rows
// unpaginated and deduped client-side — PostgREST caps that at 1000
// rows by default, and hifdh_progress stores one row per reviewed
// item per user per collection, so it very likely exceeded that,
// silently truncating the count and freezing it as new users' rows
// fell outside the first 1000 returned. Now counted via a database
// function (admin_hifdh_active_user_count, see
// admin_hifdh_count_function.sql) that isn't subject to that cap.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!

const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

// Browsers send a CORS preflight (OPTIONS) before the real request, and
// expect these headers on every response, including error responses --
// without them the browser blocks the call before Supabase even sees it.
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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const authHeader = req.headers.get('Authorization') ?? ''
  const jwt = authHeader.replace('Bearer ', '')

  const asUser = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: userData, error: userErr } = await asUser.auth.getUser(jwt)
  if (userErr || !userData?.user) {
    return json({ error: 'Not authenticated' }, 401)
  }

  const { data: adminRow } = await admin
    .from('admins')
    .select('user_id')
    .eq('user_id', userData.user.id)
    .maybeSingle()

  if (!adminRow) {
    return json({ error: 'Not an admin' }, 403)
  }

  const allUsers: { id: string; created_at: string }[] = []
  let page = 1
  while (true) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) return json({ error: error.message }, 500)
    allUsers.push(...data.users.map(u => ({ id: u.id, created_at: u.created_at })))
    if (data.users.length < 1000) break
    page++
  }

  const now = Date.now()
  const DAY = 24 * 60 * 60 * 1000
  const newLast7 = allUsers.filter(u => now - new Date(u.created_at).getTime() < 7 * DAY).length
  const newLast30 = allUsers.filter(u => now - new Date(u.created_at).getTime() < 30 * DAY).length

  const [
    { count: totalQuizzes },
    { count: activeSubs },
    { count: totalPosts },
    { count: hifdhRows },
  ] = await Promise.all([
    admin.from('quiz_history').select('*', { count: 'exact', head: true }),
    admin.from('subscriptions').select('*', { count: 'exact', head: true }).eq('status', 'active'),
    admin.from('spaces_posts').select('*', { count: 'exact', head: true }),
    admin.from('hifdh_progress').select('*', { count: 'exact', head: true }),
  ])

  const { data: hifdhActiveUsers, error: hifdhCountError } = await admin.rpc('admin_hifdh_active_user_count')
  if (hifdhCountError) {
    console.error('Failed to get hifdh active user count:', hifdhCountError)
  }

  return json({
    totalUsers: allUsers.length,
    newLast7,
    newLast30,
    activeSubscriptions: activeSubs ?? 0,
    totalQuizzesTaken: totalQuizzes ?? 0,
    totalSpacesPosts: totalPosts ?? 0,
    hifdhActiveUsers: hifdhActiveUsers ?? 0,
    hifdhTotalProgressRows: hifdhRows ?? 0,
  })
})
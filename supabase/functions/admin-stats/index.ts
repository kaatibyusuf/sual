// supabase/functions/admin-stats/index.ts
//
// Returns growth and activity metrics for the admin dashboard.
// Verifies the caller is a real signed-in admin before returning anything --
// deploy WITHOUT --no-verify-jwt so Supabase already confirms this is a
// logged-in user before the function code even runs.
//
// Deploy:  supabase functions deploy admin-stats
// (no new secrets needed -- reuses the auto-injected Supabase env vars)

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!

const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

serve(async (req) => {
  const authHeader = req.headers.get('Authorization') ?? ''
  const jwt = authHeader.replace('Bearer ', '')

  const asUser = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: userData, error: userErr } = await asUser.auth.getUser(jwt)
  if (userErr || !userData?.user) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), { status: 401 })
  }

  const { data: adminRow } = await admin
    .from('admins')
    .select('user_id')
    .eq('user_id', userData.user.id)
    .maybeSingle()

  if (!adminRow) {
    return new Response(JSON.stringify({ error: 'Not an admin' }), { status: 403 })
  }

  const allUsers: { id: string; created_at: string }[] = []
  let page = 1
  while (true) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 })
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
    admin.from('hifdh_progress').select('user_id', { count: 'exact', head: true }),
  ])

  const { data: hifdhUserRows } = await admin.from('hifdh_progress').select('user_id')
  const hifdhActiveUsers = new Set((hifdhUserRows || []).map(r => r.user_id)).size

  return new Response(JSON.stringify({
    totalUsers: allUsers.length,
    newLast7,
    newLast30,
    activeSubscriptions: activeSubs ?? 0,
    totalQuizzesTaken: totalQuizzes ?? 0,
    totalSpacesPosts: totalPosts ?? 0,
    hifdhActiveUsers,
    hifdhTotalProgressRows: hifdhRows ?? 0,
  }), { headers: { 'Content-Type': 'application/json' } })
})
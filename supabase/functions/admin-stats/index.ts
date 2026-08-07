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
//
// ADDED: monthly growth series for the dashboard's charts, since
// launch. One remaining honest caveat on the revenue side:
//   `subscriptions` is upserted per user, not an append-only ledger —
//   a renewal overwrites the same row rather than adding a new one.
//   That means monthlyRevenue below can only reflect NEW-SUBSCRIBER
//   revenue by the month they first signed up (started_at), not total
//   revenue actually collected each month once renewals are in play.
//   True monthly recurring revenue still needs a real payment_events
//   table the webhook inserts into (never updates) — not built yet.
//   amount is stored in naira (already divided from kobo at webhook
//   time), so no further conversion is needed here.
//
// ADDED: recurringSubscriptions count + recurringSubscribers list.
// The webhook now increments subscriptions.renewal_count on every
// charge.success after a user's first activation, so a subscriber
// with renewal_count >= 1 has renewed at least once and counts as
// "recurring." This finally makes the revenue-caveat above partially
// answerable — we can now tell *who* has renewed, even though total
// recurring revenue collected per month still isn't (see caveat).
//
// ADDED: allSubscribers — every Spaces subscriber (any status), with
// resolved email and expires_at, sorted soonest-to-expire first. Lets
// admin see at a glance who's about to lapse rather than only who's
// already recurring. Scoped to Spaces subscriptions only for now —
// book_quiz_subscriptions can be folded in the same way later if
// that visibility is wanted too.

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

function monthKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

function monthLabel(key: string) {
  const [y, m] = key.split('-').map(Number)
  return new Date(y, m - 1, 1).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

// Builds every month key from `earliest` through the current month —
// so a month with zero signups/subscriptions still shows as a real
// zero bar on the chart, rather than silently disappearing from the
// x-axis.
function buildMonthRange(earliest: Date) {
  const months: string[] = []
  const cursor = new Date(earliest.getFullYear(), earliest.getMonth(), 1)
  const end = new Date()
  while (cursor <= end) {
    months.push(monthKey(cursor))
    cursor.setMonth(cursor.getMonth() + 1)
  }
  return months
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

  const allUsers: { id: string; email: string | null; created_at: string }[] = []
  let page = 1
  while (true) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) return json({ error: error.message }, 500)
    allUsers.push(...data.users.map(u => ({ id: u.id, email: u.email ?? null, created_at: u.created_at })))
    if (data.users.length < 1000) break
    page++
  }
  const emailById = new Map(allUsers.map(u => [u.id, u.email]))

  const now = Date.now()
  const DAY = 24 * 60 * 60 * 1000
  const newLast7 = allUsers.filter(u => now - new Date(u.created_at).getTime() < 7 * DAY).length
  const newLast30 = allUsers.filter(u => now - new Date(u.created_at).getTime() < 30 * DAY).length

  const [
    { count: totalQuizzes },
    { count: activeSubs },
    { count: totalPosts },
    { count: hifdhRows },
    { data: allSubscriptions, error: subsError },
    { count: recurringSubsCount },
    { data: recurringSubsRows, error: recurringSubsError },
    { data: allSubsWithExpiry, error: allSubsExpiryError },
  ] = await Promise.all([
    admin.from('quiz_history').select('*', { count: 'exact', head: true }),
    admin.from('subscriptions').select('*', { count: 'exact', head: true }).eq('status', 'active'),
    admin.from('spaces_posts').select('*', { count: 'exact', head: true }),
    admin.from('hifdh_progress').select('*', { count: 'exact', head: true }),
    // Every subscription row, regardless of current status — a
    // cancelled subscriber still counts toward the month they
    // originally signed up for the growth chart.
    admin.from('subscriptions').select('started_at, amount'),
    admin.from('subscriptions').select('*', { count: 'exact', head: true }).gte('renewal_count', 1),
    admin
      .from('subscriptions')
      .select('user_id, renewal_count, status, started_at, expires_at')
      .gte('renewal_count', 1)
      .order('renewal_count', { ascending: false }),
    // Every Spaces subscriber, any status, for the admin-facing
    // "when does each subscription end" table. Soonest-to-expire
    // first, so lapsing subscribers surface at the top rather than
    // requiring a scroll to find.
    admin
      .from('subscriptions')
      .select('user_id, status, expires_at, renewal_count, started_at')
      .order('expires_at', { ascending: true, nullsFirst: false }),
  ])

  if (subsError) {
    console.error('Failed to load subscriptions for growth chart:', subsError)
  }
  if (recurringSubsError) {
    console.error('Failed to load recurring subscribers:', recurringSubsError)
  }
  if (allSubsExpiryError) {
    console.error('Failed to load subscriber expiry list:', allSubsExpiryError)
  }

  const { data: hifdhActiveUsers, error: hifdhCountError } = await admin.rpc('admin_hifdh_active_user_count')
  if (hifdhCountError) {
    console.error('Failed to get hifdh active user count:', hifdhCountError)
  }

  // ── Monthly growth series, since launch ──────────────────────
  const earliestUserDate = allUsers.length > 0
    ? new Date(Math.min(...allUsers.map(u => new Date(u.created_at).getTime())))
    : new Date()
  const months = buildMonthRange(earliestUserDate)

  const newUsersByMonth: Record<string, number> = {}
  months.forEach(m => { newUsersByMonth[m] = 0 })
  allUsers.forEach(u => {
    const k = monthKey(new Date(u.created_at))
    if (k in newUsersByMonth) newUsersByMonth[k]++
  })

  let cumulative = 0
  const userGrowth = months.map(m => {
    cumulative += newUsersByMonth[m]
    return { month: m, label: monthLabel(m), newUsers: newUsersByMonth[m], cumulativeUsers: cumulative }
  })

  const newSubsByMonth: Record<string, number> = {}
  const revenueByMonth: Record<string, number> = {}
  months.forEach(m => { newSubsByMonth[m] = 0; revenueByMonth[m] = 0 })
  ;(allSubscriptions || []).forEach(row => {
    if (!row.started_at) return
    const k = monthKey(new Date(row.started_at))
    if (!(k in newSubsByMonth)) return
    newSubsByMonth[k]++
    revenueByMonth[k] += Number(row.amount || 0)
  })

  const revenueGrowth = months.map(m => ({
    month: m,
    label: monthLabel(m),
    newSubscribers: newSubsByMonth[m],
    newSubscriberRevenue: revenueByMonth[m],
  }))

  const recurringSubscribers = (recurringSubsRows || []).map(r => ({
    user_id: r.user_id,
    email: emailById.get(r.user_id) ?? '(unknown)',
    renewal_count: r.renewal_count,
    status: r.status,
    started_at: r.started_at,
    expires_at: r.expires_at,
  }))

  const allSubscribers = (allSubsWithExpiry || []).map(r => ({
    user_id: r.user_id,
    email: emailById.get(r.user_id) ?? '(unknown)',
    status: r.status,
    renewal_count: r.renewal_count,
    started_at: r.started_at,
    expires_at: r.expires_at,
  }))

  return json({
    totalUsers: allUsers.length,
    newLast7,
    newLast30,
    activeSubscriptions: activeSubs ?? 0,
    totalQuizzesTaken: totalQuizzes ?? 0,
    totalSpacesPosts: totalPosts ?? 0,
    hifdhActiveUsers: hifdhActiveUsers ?? 0,
    hifdhTotalProgressRows: hifdhRows ?? 0,
    userGrowth,
    revenueGrowth,
    recurringSubscriptions: recurringSubsCount ?? 0,
    recurringSubscribers,
    allSubscribers,
  })
})
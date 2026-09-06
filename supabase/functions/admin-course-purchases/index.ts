// supabase/functions/admin-course-purchases/index.ts
//
// Returns, per course, how many distinct buyers exist, split into
// full-access buyers and per-unit-only buyers. Verifies the caller
// is a real signed-in admin before returning anything -- same
// pattern as admin-stats/index.ts (JWT check via the anon client,
// then a lookup against the `admins` table with the service role
// client).
//
// Deploy:  supabase functions deploy admin-course-purchases
// (no new secrets needed -- reuses the same auto-injected Supabase
// env vars admin-stats already relies on)
//
// Depends on the all_course_purchases view already existing in the
// database -- run course_purchase_analytics.sql's "create or
// replace view" step in the Supabase SQL editor before deploying
// this function, or the query below will fail with a "relation
// does not exist" error.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!

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

// Every course this app currently sells, so the response always
// includes a row for each one, even a brand-new course with zero
// sales yet, rather than only showing courses that already have at
// least one purchase.
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

  const { data: rows, error } = await admin
    .from('all_course_purchases')
    .select('course, user_id, unit_id, status')
    .eq('status', 'success')

  if (error) {
    return json({ error: error.message }, 500)
  }

  // Group by course, then by user_id within each course, tracking
  // whether that specific user has at least one full-access
  // purchase (unit_id === null) for that course. A user who bought
  // a single unit and later upgraded to full access is counted as
  // a full-access buyer, not double-counted in both buckets.
  const byCourse = new Map<string, Map<string, boolean>>()

  for (const row of rows ?? []) {
    if (!byCourse.has(row.course)) byCourse.set(row.course, new Map())
    const buyers = byCourse.get(row.course)!
    const hasFullAlready = buyers.get(row.user_id) ?? false
    const isFullPurchase = row.unit_id === null
    buyers.set(row.user_id, hasFullAlready || isFullPurchase)
  }

  const result = Array.from(byCourse.entries()).map(([course, buyers]) => {
    let fullAccessBuyers = 0
    let perUnitOnlyBuyers = 0
    for (const hasFullPurchase of buyers.values()) {
      if (hasFullPurchase) fullAccessBuyers++
      else perUnitOnlyBuyers++
    }
    return {
      course,
      label: COURSE_LABELS[course] ?? course,
      totalBuyers: buyers.size,
      fullAccessBuyers,
      perUnitOnlyBuyers,
    }
  })

  for (const course of Object.keys(COURSE_LABELS)) {
    if (!result.find((r) => r.course === course)) {
      result.push({
        course,
        label: COURSE_LABELS[course],
        totalBuyers: 0,
        fullAccessBuyers: 0,
        perUnitOnlyBuyers: 0,
      })
    }
  }

  result.sort((a, b) => a.course.localeCompare(b.course))

  return json({ coursePurchases: result })
})
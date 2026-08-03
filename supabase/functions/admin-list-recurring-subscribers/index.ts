// Lists Spaces subscribers with renewal_count >= 1 — i.e. members
// who have renewed at least once — sorted by renewal_count descending.
// Read-only, admin-dashboard use only.
//
// Deploy: supabase functions deploy admin-list-recurring-subscribers

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const { data: rows, error } = await supabaseAdmin
      .from('subscriptions')
      .select('user_id, renewal_count, status, started_at, expires_at')
      .gte('renewal_count', 1)
      .order('renewal_count', { ascending: false })

    if (error) throw error

    // Resolve emails for the returned user_ids
    const userIds = new Set((rows ?? []).map(r => r.user_id))
    const emailMap: Record<string, string> = {}
    let page = 1
    while (userIds.size > 0) {
      const { data, error: listErr } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 1000 })
      if (listErr) throw listErr
      for (const u of data.users) {
        if (userIds.has(u.id)) {
          emailMap[u.id] = u.email ?? '(no email)'
          userIds.delete(u.id)
        }
      }
      if (data.users.length < 1000) break
      page++
    }

    const subscribers = (rows ?? []).map(r => ({
      user_id: r.user_id,
      email: emailMap[r.user_id] ?? '(unknown)',
      renewal_count: r.renewal_count,
      status: r.status,
      started_at: r.started_at,
      expires_at: r.expires_at,
    }))

    return new Response(JSON.stringify({ subscribers, total: subscribers.length }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Failed to list recurring subscribers:', err)
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 })
  }
})
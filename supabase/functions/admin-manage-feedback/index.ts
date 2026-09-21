// supabase/functions/admin-manage-feedback/index.ts
//
// Admin-only management of Sual Feedback items. Auth pattern matches
// admin-manage-tafseer exactly: re-verify the caller's own JWT against
// ADMIN_EMAILS on every call, never trust client-side route gating.
//
// Column/table names below are now confirmed against the real
// sual_feedback_schema.sql (feedback_items, feedback_attachments,
// 'feedback-screenshots' bucket) — no more guessed columns.
//
// Deploy:  supabase functions deploy admin-manage-feedback
// Uses the same ADMIN_EMAILS secret already set for admin-manage-tafseer.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const ADMIN_EMAILS = (Deno.env.get('ADMIN_EMAILS') ?? '')
  .split(',')
  .map(e => e.trim().toLowerCase())
  .filter(Boolean)

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

const STATUSES = ['new', 'triaged', 'in_progress', 'fixed', 'wont_fix', 'duplicate']

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
  })
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders() })
  if (req.method !== 'POST') return jsonResponse({ error: 'Method not allowed' }, 405)

  const authHeader = req.headers.get('Authorization')
  if (!authHeader) return jsonResponse({ error: 'Missing authorization' }, 401)

  const callerClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: callerData, error: callerError } = await callerClient.auth.getUser()
  if (callerError || !callerData?.user?.email) {
    return jsonResponse({ error: 'Could not verify caller' }, 401)
  }
  if (!ADMIN_EMAILS.includes(callerData.user.email.toLowerCase())) {
    console.error('Non-admin attempted admin-manage-feedback:', callerData.user.email)
    return jsonResponse({ error: 'Not authorized' }, 403)
  }

  let body
  try {
    body = await req.json()
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400)
  }

  const { action } = body

  try {
    if (action === 'list') {
      const { data, error } = await supabaseAdmin
        .from('feedback_items')
        .select('id, type, status, title, submitter_email, submitter_name, created_at, fixed_commit_sha, fixed_at')
        .order('created_at', { ascending: false })
      if (error) throw error
      return jsonResponse({ ok: true, items: data })
    }

    if (action === 'get') {
      const { item_id } = body
      if (!item_id) return jsonResponse({ error: 'item_id is required.' }, 400)

      const { data: item, error: itemError } = await supabaseAdmin
        .from('feedback_items')
        .select('*')
        .eq('id', item_id)
        .single()
      if (itemError) throw itemError

      const { data: attachments, error: attachError } = await supabaseAdmin
        .from('feedback_attachments')
        .select('id, storage_path, created_at')
        .eq('feedback_item_id', item_id)
      if (attachError) throw attachError

      const signedAttachments = []
      for (const a of attachments || []) {
        const { data: signed, error: signError } = await supabaseAdmin.storage
          .from('feedback-screenshots')
          .createSignedUrl(a.storage_path, 60 * 60) // 1 hour
        signedAttachments.push(
          signError
            ? { ...a, url: null, signError: signError.message }
            : { ...a, url: signed.signedUrl }
        )
      }

      return jsonResponse({ ok: true, item, attachments: signedAttachments })
    }

    if (action === 'update_status') {
      const { item_id, status } = body
      if (!item_id || !status) return jsonResponse({ error: 'item_id and status are required.' }, 400)
      if (!STATUSES.includes(status)) return jsonResponse({ error: `status must be one of: ${STATUSES.join(', ')}` }, 400)

      const update: Record<string, unknown> = { status }
      if (status === 'fixed') update.fixed_at = new Date().toISOString()

      const { data, error } = await supabaseAdmin
        .from('feedback_items')
        .update(update)
        .eq('id', item_id)
        .select()
        .single()
      if (error) throw error
      return jsonResponse({ ok: true, item: data })
    }

    return jsonResponse({ error: `Unknown action: ${action}` }, 400)
  } catch (err) {
    console.error('admin-manage-feedback error:', err)
    return jsonResponse({ error: err.message || 'Unknown error' }, 500)
  }
})
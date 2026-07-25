// supabase/functions/admin-manage-majlis/index.ts
//
// Majlis — the general meeting hall for Spaces subscribers. Only an
// admin can post an announcement here (no client-side insert policy
// exists on majlis_posts at all, this function using the service
// role is the only way in). Any Spaces subscriber can reply and ask
// questions on a post directly via supabase-js, that path is open
// under RLS and doesn't need this function.
//
// Deploy:  supabase functions deploy admin-manage-majlis

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const ADMIN_EMAILS = (Deno.env.get('ADMIN_EMAILS') ?? '')
  .split(',').map(e => e.trim().toLowerCase()).filter(Boolean)

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders() })
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders() })
  }

  const authHeader = req.headers.get('Authorization')
  if (!authHeader) {
    return new Response(JSON.stringify({ error: 'Missing authorization' }), { status: 401, headers: corsHeaders() })
  }
  const callerClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: callerData, error: callerError } = await callerClient.auth.getUser()
  if (callerError || !callerData?.user?.email) {
    return new Response(JSON.stringify({ error: 'Could not verify caller' }), { status: 401, headers: corsHeaders() })
  }
  if (!ADMIN_EMAILS.includes(callerData.user.email.toLowerCase())) {
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 403, headers: corsHeaders() })
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: corsHeaders() })
  }

  const action = body.action

  if (action === 'create_post') {
    const { title, body: postBody } = body
    if (!title || !postBody) {
      return new Response(JSON.stringify({ error: 'title and body are required' }), { status: 400, headers: corsHeaders() })
    }
    const { data, error } = await supabaseAdmin
      .from('majlis_posts')
      .insert({ title, body: postBody })
      .select().maybeSingle()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, post: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'pin_post' || action === 'unpin_post') {
    const { id } = body
    if (!id) return new Response(JSON.stringify({ error: 'id is required' }), { status: 400, headers: corsHeaders() })
    const { error } = await supabaseAdmin.from('majlis_posts').update({ pinned: action === 'pin_post' }).eq('id', id)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'delete_post') {
    const { id } = body
    if (!id) return new Response(JSON.stringify({ error: 'id is required' }), { status: 400, headers: corsHeaders() })
    const { error } = await supabaseAdmin.from('majlis_posts').delete().eq('id', id)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  // Lets the admin reply to a question and have it flagged as an
  // official admin answer, same spirit as Community's "Scholar
  // Response" badge.
  if (action === 'reply_as_admin') {
    const { post_id, reply_body } = body
    if (!post_id || !reply_body) {
      return new Response(JSON.stringify({ error: 'post_id and reply_body are required' }), { status: 400, headers: corsHeaders() })
    }
    const { data, error } = await supabaseAdmin
      .from('majlis_replies')
      .insert({ post_id, user_id: callerData.user.id, body: reply_body, is_admin_reply: true })
      .select().maybeSingle()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, reply: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), { status: 400, headers: corsHeaders() })
})
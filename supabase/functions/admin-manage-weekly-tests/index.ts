import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const ADMIN_EMAILS = (Deno.env.get('ADMIN_EMAILS') ?? '')
  .split(',').map(e => e.trim().toLowerCase()).filter(Boolean)

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

const VALID_TRACKS = ['arabiyyah', 'tafseer', 'hadeeth']

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

  if (action === 'list') {
    const { data, error } = await supabaseAdmin
      .from('spaces_weekly_tests')
      .select('*, spaces_weekly_test_questions(question_type)')
      .order('publish_date', { ascending: false })
      .limit(100)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })

    const withCounts = (data || []).map((t: any) => {
      const qs = t.spaces_weekly_test_questions || []
      return {
        ...t,
        mcq_count: qs.filter((q: any) => q.question_type === 'mcq').length,
        theory_count: qs.filter((q: any) => q.question_type === 'theory').length,
        spaces_weekly_test_questions: undefined,
      }
    })
    return new Response(JSON.stringify({ ok: true, tests: withCounts }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'upsert_test') {
    const t = body.test || {}
    if (!VALID_TRACKS.includes(t.track)) {
      return new Response(JSON.stringify({ error: `track must be one of ${VALID_TRACKS.join(', ')}` }), { status: 400, headers: corsHeaders() })
    }
    if (!t.publish_date) return new Response(JSON.stringify({ error: 'publish_date is required' }), { status: 400, headers: corsHeaders() })
    if (!t.title || !String(t.title).trim()) return new Response(JSON.stringify({ error: 'title is required' }), { status: 400, headers: corsHeaders() })

    const row: any = {
      track: t.track,
      title: String(t.title).trim(),
      description: t.description ? String(t.description).trim() : null,
      publish_date: t.publish_date,
    }
    if (t.id) row.id = t.id

    const { data, error } = await supabaseAdmin
      .from('spaces_weekly_tests')
      .upsert(row, { onConflict: 'track,publish_date' })
      .select()
      .maybeSingle()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, test: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'list_questions') {
    const testId = body.test_id
    if (!testId) return new Response(JSON.stringify({ error: 'test_id is required' }), { status: 400, headers: corsHeaders() })
    const { data, error } = await supabaseAdmin
      .from('spaces_weekly_test_questions')
      .select('*')
      .eq('test_id', testId)
      .order('created_at')
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, questions: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'add_question') {
    const q = body.question || {}
    if (!q.test_id) return new Response(JSON.stringify({ error: 'test_id is required' }), { status: 400, headers: corsHeaders() })
    if (!q.question_type || !['mcq', 'theory'].includes(q.question_type)) {
      return new Response(JSON.stringify({ error: 'question_type must be mcq or theory' }), { status: 400, headers: corsHeaders() })
    }
    if (!q.question || !String(q.question).trim()) {
      return new Response(JSON.stringify({ error: 'question is required' }), { status: 400, headers: corsHeaders() })
    }

    const row: any = {
      test_id: q.test_id,
      question_type: q.question_type,
      question: String(q.question).trim(),
    }
    if (q.question_type === 'mcq') {
      row.options = q.options || []
      row.correct_index = q.correct_index ?? null
      row.explanation = q.explanation ? String(q.explanation).trim() : null
    } else {
      row.model_answer = q.model_answer ? String(q.model_answer).trim() : null
    }

    const { data, error } = await supabaseAdmin.from('spaces_weekly_test_questions').insert(row).select().maybeSingle()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true, question: data }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'publish_test' || action === 'unpublish_test') {
    const testId = body.test_id
    if (!testId) return new Response(JSON.stringify({ error: 'test_id is required' }), { status: 400, headers: corsHeaders() })
    const status = action === 'publish_test' ? 'published' : 'draft'
    const patch: any = { status }
    if (action === 'publish_test') patch.published_at = new Date().toISOString()
    const { error } = await supabaseAdmin.from('spaces_weekly_tests').update(patch).eq('id', testId)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'delete_question') {
    const id = body.id
    if (!id) return new Response(JSON.stringify({ error: 'id is required' }), { status: 400, headers: corsHeaders() })
    const { error } = await supabaseAdmin.from('spaces_weekly_test_questions').delete().eq('id', id)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  if (action === 'delete_test') {
    const testId = body.test_id
    if (!testId) return new Response(JSON.stringify({ error: 'test_id is required' }), { status: 400, headers: corsHeaders() })
    const { error } = await supabaseAdmin.from('spaces_weekly_tests').delete().eq('id', testId)
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders() })
    return new Response(JSON.stringify({ ok: true }), { headers: { ...corsHeaders(), 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), { status: 400, headers: corsHeaders() })
})
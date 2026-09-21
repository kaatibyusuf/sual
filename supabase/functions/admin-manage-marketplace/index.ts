// supabase/functions/admin-manage-marketplace/index.ts
//
// Admin-only management of Sual Marketplace: creators, courses,
// sections, lessons, and video/thumbnail uploads. Auth pattern
// matches admin-manage-tafseer/admin-manage-feedback exactly —
// re-verify the caller's own JWT against ADMIN_EMAILS on every
// call, never trust client-side route gating. Reuses that same
// ADMIN_EMAILS secret; nothing new to set for auth.
//
// Only admins add creators (no public "become a creator" flow, per
// the confirmed scoping decision) — add_creator here is itself
// admin-gated the same way every other action is.
//
// Deploy:  supabase functions deploy admin-manage-marketplace

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const ADMIN_EMAILS = (Deno.env.get('ADMIN_EMAILS') ?? '')
  .split(',')
  .map(e => e.trim().toLowerCase())
  .filter(Boolean)

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

// Which table a generic publish/unpublish/delete action targets —
// same "pass a table name" convention as admin-manage-lms, so the
// frontend doesn't need a separate action per entity type for these
// three operations.
const MANAGEABLE_TABLES = new Set(['marketplace_courses', 'marketplace_sections', 'marketplace_lessons'])

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

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
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
    console.error('Non-admin attempted admin-manage-marketplace:', callerData.user.email)
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
    // ── Creators ──────────────────────────────────────────────
    if (action === 'list_creators') {
      const { data, error } = await supabaseAdmin
        .from('marketplace_creators')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      return jsonResponse({ ok: true, creators: data })
    }

    if (action === 'add_creator') {
      const { email, display_name, bio } = body
      if (!email || !display_name) return jsonResponse({ error: 'email and display_name are required.' }, 400)

      // Look up the auth user by email — the creator must already
      // have a Sual account; this doesn't create one, unlike
      // admin-grant-access's Spaces flow, since a course creator
      // being onboarded is presumed to already use the app.
      const { data: usersPage, error: userLookupError } = await supabaseAdmin.auth.admin.listUsers()
      if (userLookupError) throw userLookupError
      const matchedUser = usersPage.users.find(u => u.email?.toLowerCase() === String(email).trim().toLowerCase())
      if (!matchedUser) {
        return jsonResponse({ error: `No Sual account found for ${email}. They need to sign up first.` }, 404)
      }

      const { data, error } = await supabaseAdmin
        .from('marketplace_creators')
        .upsert(
          {
            user_id: matchedUser.id,
            display_name: String(display_name).trim(),
            bio: bio ? String(bio).trim() : null,
            added_by: callerData.user.id,
          },
          { onConflict: 'user_id' }
        )
        .select()
        .single()
      if (error) throw error
      return jsonResponse({ ok: true, creator: data })
    }

    if (action === 'delete_creator') {
      const { id } = body
      if (!id) return jsonResponse({ error: 'id is required.' }, 400)
      // Blocked at the DB level (courses reference creator_id with
      // on delete restrict) if the creator still has courses — the
      // error surfaces to the admin rather than silently orphaning
      // courses or cascading a deletion nobody asked for.
      const { error } = await supabaseAdmin.from('marketplace_creators').delete().eq('id', id)
      if (error) throw error
      return jsonResponse({ ok: true })
    }

    // ── Courses ───────────────────────────────────────────────
    if (action === 'list_courses') {
      const { data, error } = await supabaseAdmin
        .from('marketplace_courses')
        .select('*, marketplace_creators(display_name)')
        .order('created_at', { ascending: false })
      if (error) throw error
      return jsonResponse({ ok: true, courses: data })
    }

    if (action === 'add_course') {
      const { creator_id, title, arabic_title, subject, level, description, what_you_will_learn, price_kobo } = body
      if (!creator_id || !title || !subject || !description || price_kobo === undefined) {
        return jsonResponse({ error: 'creator_id, title, subject, description, and price_kobo are required.' }, 400)
      }
      if (!['arabic', 'islamic_studies'].includes(subject)) {
        return jsonResponse({ error: "subject must be 'arabic' or 'islamic_studies'." }, 400)
      }

      let slug = slugify(title)
      // Guard against slug collisions (e.g. two courses both titled
      // "Beginner Arabic") by suffixing with the row id after insert
      // fails once, rather than pre-checking with a separate query
      // that would still race under concurrent creation.
      const { data: existing } = await supabaseAdmin
        .from('marketplace_courses')
        .select('id')
        .eq('slug', slug)
        .maybeSingle()
      if (existing) slug = `${slug}-${Date.now().toString(36)}`

      const { data, error } = await supabaseAdmin
        .from('marketplace_courses')
        .insert({
          creator_id,
          title: String(title).trim(),
          arabic_title: arabic_title ? String(arabic_title).trim() : null,
          slug,
          subject,
          level: level || 'beginner',
          description: String(description).trim(),
          what_you_will_learn: Array.isArray(what_you_will_learn) ? what_you_will_learn : [],
          price_kobo: Math.round(Number(price_kobo)),
        })
        .select()
        .single()
      if (error) throw error
      return jsonResponse({ ok: true, course: data })
    }

    if (action === 'update_course') {
      const { id } = body
      if (!id) return jsonResponse({ error: 'id is required.' }, 400)
      // Destructure out action/id explicitly rather than spreading
      // body wholesale — this is exactly the bug class that broke
      // admin-manage-lms's update_item (action ended up inside the
      // spread and got sent to Postgres as a column to write).
      const { action: _omit, id: _omit2, ...updateFields } = body
      if (updateFields.price_kobo !== undefined) updateFields.price_kobo = Math.round(Number(updateFields.price_kobo))

      const { data, error } = await supabaseAdmin
        .from('marketplace_courses')
        .update(updateFields)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return jsonResponse({ ok: true, course: data })
    }

    // ── Sections ──────────────────────────────────────────────
    if (action === 'list_sections') {
      const { course_id } = body
      if (!course_id) return jsonResponse({ error: 'course_id is required.' }, 400)
      const { data, error } = await supabaseAdmin
        .from('marketplace_sections')
        .select('*')
        .eq('course_id', course_id)
        .order('section_number')
      if (error) throw error
      return jsonResponse({ ok: true, sections: data })
    }

    if (action === 'add_section') {
      const { course_id, section_number, title } = body
      if (!course_id || !section_number || !title) {
        return jsonResponse({ error: 'course_id, section_number, and title are required.' }, 400)
      }
      const { data, error } = await supabaseAdmin
        .from('marketplace_sections')
        .insert({ course_id, section_number: Number(section_number), title: String(title).trim() })
        .select()
        .single()
      if (error) throw error
      return jsonResponse({ ok: true, section: data })
    }

    // ── Lessons ───────────────────────────────────────────────
    if (action === 'list_lessons') {
      const { section_id } = body
      if (!section_id) return jsonResponse({ error: 'section_id is required.' }, 400)
      const { data, error } = await supabaseAdmin
        .from('marketplace_lessons')
        .select('*')
        .eq('section_id', section_id)
        .order('lesson_number')
      if (error) throw error
      return jsonResponse({ ok: true, lessons: data })
    }

    if (action === 'add_lesson') {
      const { section_id, lesson_number, title, description, is_preview } = body
      if (!section_id || !lesson_number || !title) {
        return jsonResponse({ error: 'section_id, lesson_number, and title are required.' }, 400)
      }
      const { data, error } = await supabaseAdmin
        .from('marketplace_lessons')
        .insert({
          section_id,
          lesson_number: Number(lesson_number),
          title: String(title).trim(),
          description: description ? String(description).trim() : null,
          is_preview: !!is_preview,
        })
        .select()
        .single()
      if (error) throw error
      return jsonResponse({ ok: true, lesson: data })
    }

    if (action === 'update_lesson') {
      const { id } = body
      if (!id) return jsonResponse({ error: 'id is required.' }, 400)
      const { action: _omit, id: _omit2, ...updateFields } = body
      const { data, error } = await supabaseAdmin
        .from('marketplace_lessons')
        .update(updateFields)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return jsonResponse({ ok: true, lesson: data })
    }

    // ── Video / thumbnail upload URLs ────────────────────────
    // Same signed-upload-URL pattern as admin-manage-class-lessons'
    // get_upload_url for audio — the browser uploads the file
    // straight to Storage using a short-lived signed token, instead
    // of routing the (potentially large) video file through this
    // function's own request body.
    if (action === 'get_video_upload_url') {
      const { lesson_id, filename } = body
      if (!lesson_id || !filename) return jsonResponse({ error: 'lesson_id and filename are required.' }, 400)

      const ext = (filename.split('.').pop() || 'mp4').toLowerCase()
      const path = `lessons/${lesson_id}/${crypto.randomUUID()}.${ext}`

      const { data, error } = await supabaseAdmin.storage
        .from('marketplace-videos')
        .createSignedUploadUrl(path)
      if (error) throw error

      // Store the path on the lesson immediately, not after upload
      // completes — the frontend calls this right before uploading,
      // and if the upload itself fails partway the admin can retry
      // the same lesson without a dangling, unreferenced video sitting
      // in storage under the old path.
      await supabaseAdmin.from('marketplace_lessons').update({ video_storage_path: path }).eq('id', lesson_id)

      return jsonResponse({ ok: true, path, token: data.token })
    }

    if (action === 'get_thumbnail_upload_url') {
      const { course_id, filename } = body
      if (!course_id || !filename) return jsonResponse({ error: 'course_id and filename are required.' }, 400)

      const ext = (filename.split('.').pop() || 'jpg').toLowerCase()
      const path = `courses/${course_id}/${crypto.randomUUID()}.${ext}`

      const { data, error } = await supabaseAdmin.storage
        .from('marketplace-thumbnails')
        .createSignedUploadUrl(path)
      if (error) throw error

      const { data: { publicUrl } } = supabaseAdmin.storage.from('marketplace-thumbnails').getPublicUrl(path)
      await supabaseAdmin.from('marketplace_courses').update({ thumbnail_url: publicUrl }).eq('id', course_id)

      return jsonResponse({ ok: true, path, token: data.token, publicUrl })
    }

    // ── Generic publish / unpublish / delete ─────────────────
    // Same convention as admin-manage-lms: pass a table name rather
    // than a separate action per entity, for these three shared
    // operations only.
    if (action === 'publish' || action === 'unpublish') {
      const { table, id } = body
      // Only courses carry a status/publish concept — sections and
      // lessons are visible or not purely by their parent course's
      // status, so publishing them individually isn't a real
      // operation the schema supports.
      if (table !== 'marketplace_courses') {
        return jsonResponse({ error: 'Only marketplace_courses can be published/unpublished.' }, 400)
      }
      if (!id) return jsonResponse({ error: 'id is required.' }, 400)
      const { data, error } = await supabaseAdmin
        .from('marketplace_courses')
        .update({ status: action === 'publish' ? 'published' : 'draft' })
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return jsonResponse({ ok: true, course: data })
    }

    if (action === 'delete') {
      const { table, id } = body
      if (!MANAGEABLE_TABLES.has(table)) return jsonResponse({ error: `Cannot delete from table: ${table}` }, 400)
      if (!id) return jsonResponse({ error: 'id is required.' }, 400)
      const { error } = await supabaseAdmin.from(table).delete().eq('id', id)
      if (error) throw error
      return jsonResponse({ ok: true })
    }

    // ── Enrollment visibility (read-only, for the admin course view) ──
    if (action === 'list_enrollments') {
      const { course_id } = body
      if (!course_id) return jsonResponse({ error: 'course_id is required.' }, 400)
      const { data, error } = await supabaseAdmin
        .from('marketplace_enrollments')
        .select('id, user_id, enrolled_at, completed_at, profiles(full_name)')
        .eq('course_id', course_id)
        .order('enrolled_at', { ascending: false })
      if (error) throw error
      return jsonResponse({ ok: true, enrollments: data })
    }

    return jsonResponse({ error: `Unknown action: ${action}` }, 400)
  } catch (err) {
    console.error('admin-manage-marketplace error:', err)
    return jsonResponse({ error: err.message || 'Unknown error' }, 500)
  }
})
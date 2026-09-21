// supabase/functions/marketplace-player/index.ts
//
// Everything a signed-in student needs while actually taking a
// purchased (or previewing a free) Sual Marketplace course:
//   - get_lesson_url: issue a short-lived signed URL for a lesson's
//     video, after checking the caller is either enrolled in the
//     course or the specific lesson is marked is_preview. This is
//     the real access-control boundary for video content — the
//     'marketplace-videos' bucket is private and never served any
//     other way, which is the whole mitigation for choosing Supabase
//     Storage over a dedicated video host with native DRM.
//   - mark_complete: record a lesson as watched for the caller's
//     enrollment. If every lesson in the course is now complete,
//     stamp the enrollment completed_at and issue a certificate —
//     generating an actual PDF (via pdf-lib) rather than just a DB
//     row, uploading it to the private 'marketplace-certificates'
//     bucket, and emailing the student a link.
//   - get_course_progress: which lessons the caller has completed
//     in a course, and whether a certificate already exists — what
//     the player UI needs to render checkmarks and a "get your
//     certificate" state without re-deriving it client-side.
//
// Deploy:  supabase functions deploy marketplace-player
// Uses PAYSTACK_SECRET_KEY? No — reuses SUPABASE_* + BROADCAST_RESEND_KEY
// + SUAL_APP_URL, all already set for other functions.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { PDFDocument, StandardFonts, rgb } from 'https://esm.sh/pdf-lib@1.17.1'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const RESEND_API_KEY = Deno.env.get('BROADCAST_RESEND_KEY')!
const SUAL_APP_URL = Deno.env.get('SUAL_APP_URL') ?? 'https://app.usesual.com'
const FROM_ADDRESS = 'Sual <hello@usesual.com>'

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

// Short expiry on purpose — a fresh signed URL is requested every
// time a lesson is opened rather than cached long-term client-side,
// so a leaked link goes stale quickly. 10 minutes comfortably covers
// loading + seeking within one viewing session.
const VIDEO_URL_EXPIRY_SECONDS = 60 * 10

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

// Renders a simple, dignified one-page landscape certificate — not
// trying to be an elaborate design system, just something that looks
// intentional and is genuinely readable if printed. Brand colors
// (#094570 navy) match the rest of Sual, per the designer handover
// doc's fixed-palette rule, even in a PDF built outside React.
async function generateCertificatePdf(studentName: string, courseTitle: string, certCode: string, issuedDate: string): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  const page = doc.addPage([842, 595]) // A4 landscape, points
  const { width, height } = page.getSize()

  const serif = await doc.embedFont(StandardFonts.TimesRomanBold)
  const serifItalic = await doc.embedFont(StandardFonts.TimesRomanItalic)
  const sans = await doc.embedFont(StandardFonts.Helvetica)

  const navy = rgb(0.035, 0.271, 0.439) // #094570
  const gold = rgb(0.596, 0.427, 0.078)

  // Border
  page.drawRectangle({
    x: 24, y: 24, width: width - 48, height: height - 48,
    borderColor: navy, borderWidth: 3,
  })
  page.drawRectangle({
    x: 34, y: 34, width: width - 68, height: height - 68,
    borderColor: gold, borderWidth: 1,
  })

  const centerText = (text: string, y: number, font = serif, size = 20, color = navy) => {
    const textWidth = font.widthOfTextAtSize(text, size)
    page.drawText(text, { x: (width - textWidth) / 2, y, size, font, color })
  }

  centerText('سُؤَال', height - 100, serif, 28, navy)
  centerText('SUAL MARKETPLACE', height - 130, sans, 12, gold)
  centerText('Certificate of Completion', height - 175, serif, 26, navy)
  centerText('This certifies that', height - 220, sans, 13, rgb(0.3, 0.35, 0.4))
  centerText(studentName, height - 260, serif, 24, navy)
  centerText('has successfully completed the course', height - 295, sans, 13, rgb(0.3, 0.35, 0.4))
  centerText(courseTitle, height - 330, serifItalic, 20, navy)
  centerText(`Issued ${issuedDate}`, height - 400, sans, 11, rgb(0.4, 0.45, 0.5))
  centerText(`Certificate ID: ${certCode}`, height - 420, sans, 10, rgb(0.5, 0.55, 0.6))
  centerText(`Verify at ${SUAL_APP_URL}/verify-certificate/${certCode}`, height - 440, sans, 10, rgb(0.5, 0.55, 0.6))

  return await doc.save()
}

async function issueCertificateIfComplete(enrollmentId: number, courseId: number, userId: string) {
  const [{ count: totalLessons }, { count: completedLessons }] = await Promise.all([
    supabaseAdmin
      .from('marketplace_lessons')
      .select('id, marketplace_sections!inner(course_id)', { count: 'exact', head: true })
      .eq('marketplace_sections.course_id', courseId),
    supabaseAdmin
      .from('marketplace_lesson_progress')
      .select('id', { count: 'exact', head: true })
      .eq('enrollment_id', enrollmentId),
  ])

  if (!totalLessons || (completedLessons ?? 0) < totalLessons) return { completed: false }

  const { data: enrollment } = await supabaseAdmin
    .from('marketplace_enrollments')
    .select('completed_at')
    .eq('id', enrollmentId)
    .maybeSingle()

  if (!enrollment?.completed_at) {
    await supabaseAdmin.from('marketplace_enrollments').update({ completed_at: new Date().toISOString() }).eq('id', enrollmentId)
  }

  // Certificate is unique per enrollment — if one already exists
  // (e.g. this ran twice from a race between two mark_complete
  // calls), don't issue a second.
  const { data: existingCert } = await supabaseAdmin
    .from('marketplace_certificates')
    .select('id, cert_code, pdf_storage_path')
    .eq('enrollment_id', enrollmentId)
    .maybeSingle()
  if (existingCert) return { completed: true, certificate: existingCert }

  const [{ data: course }, { data: profile }, { data: authUser }] = await Promise.all([
    supabaseAdmin.from('marketplace_courses').select('title').eq('id', courseId).single(),
    supabaseAdmin.from('profiles').select('full_name').eq('id', userId).maybeSingle(),
    supabaseAdmin.auth.admin.getUserById(userId),
  ])

  const studentName = profile?.full_name || 'Sual Student'
  const issuedDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  const { data: certRow, error: certInsertError } = await supabaseAdmin
    .from('marketplace_certificates')
    .insert({ enrollment_id: enrollmentId })
    .select()
    .single()
  if (certInsertError) {
    console.error('Failed to create certificate row:', certInsertError)
    return { completed: true, certificateError: certInsertError.message }
  }

  try {
    const pdfBytes = await generateCertificatePdf(studentName, course?.title || 'this course', certRow.cert_code, issuedDate)
    const pdfPath = `certificates/${certRow.cert_code}.pdf`
    const { error: uploadError } = await supabaseAdmin.storage
      .from('marketplace-certificates')
      .upload(pdfPath, pdfBytes, { contentType: 'application/pdf' })
    if (uploadError) throw uploadError

    await supabaseAdmin.from('marketplace_certificates').update({ pdf_storage_path: pdfPath }).eq('id', certRow.id)

    const email = authUser?.user?.email
    if (email) {
      const { data: signed } = await supabaseAdmin.storage
        .from('marketplace-certificates')
        .createSignedUrl(pdfPath, 60 * 60 * 24 * 7) // 7 days — long enough to be usable from an email, not forever
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: FROM_ADDRESS,
          to: email,
          subject: `You completed ${course?.title || 'your course'} — here's your certificate`,
          html: `
            <h1>Assalamu alaykum, congratulations!</h1>
            <p>You've completed <strong>${course?.title || 'your course'}</strong>.</p>
            <p><a href="${signed?.signedUrl || `${SUAL_APP_URL}/my-courses`}">Download your certificate</a> (link valid for 7 days — you can always re-download it from "My Courses" in the app).</p>
            <p>Your certificate can be verified any time at ${SUAL_APP_URL}/verify-certificate/${certRow.cert_code}</p>
            <p>بارك الله فيك</p>
            <p>— The Sual team</p>
          `,
        }),
      })
    }
  } catch (err) {
    console.error('Certificate PDF generation/upload failed:', err)
    return { completed: true, certificate: certRow, certificateError: String(err) }
  }

  return { completed: true, certificate: { ...certRow, pdf_storage_path: `certificates/${certRow.cert_code}.pdf` } }
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
  if (callerError || !callerData?.user) return jsonResponse({ error: 'Could not verify caller' }, 401)
  const user = callerData.user

  let body
  try {
    body = await req.json()
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400)
  }

  const { action } = body

  try {
    if (action === 'get_lesson_url') {
      const { lesson_id } = body
      if (!lesson_id) return jsonResponse({ error: 'lesson_id is required.' }, 400)

      const { data: lesson, error: lessonError } = await supabaseAdmin
        .from('marketplace_lessons')
        .select('id, video_storage_path, is_preview, marketplace_sections(course_id)')
        .eq('id', lesson_id)
        .single()
      if (lessonError || !lesson) return jsonResponse({ error: 'Lesson not found.' }, 404)
      if (!lesson.video_storage_path) return jsonResponse({ error: 'This lesson has no video uploaded yet.' }, 404)

      const courseId = lesson.marketplace_sections?.course_id
      if (!lesson.is_preview) {
        const { data: enrollment } = await supabaseAdmin
          .from('marketplace_enrollments')
          .select('id')
          .eq('user_id', user.id)
          .eq('course_id', courseId)
          .maybeSingle()
        if (!enrollment) return jsonResponse({ error: 'You are not enrolled in this course.' }, 403)
      }

      const { data: signed, error: signError } = await supabaseAdmin.storage
        .from('marketplace-videos')
        .createSignedUrl(lesson.video_storage_path, VIDEO_URL_EXPIRY_SECONDS)
      if (signError) throw signError

      return jsonResponse({ ok: true, url: signed.signedUrl, expiresInSeconds: VIDEO_URL_EXPIRY_SECONDS })
    }

    if (action === 'mark_complete') {
      const { lesson_id } = body
      if (!lesson_id) return jsonResponse({ error: 'lesson_id is required.' }, 400)

      const { data: lesson, error: lessonError } = await supabaseAdmin
        .from('marketplace_lessons')
        .select('id, marketplace_sections(course_id)')
        .eq('id', lesson_id)
        .single()
      if (lessonError || !lesson) return jsonResponse({ error: 'Lesson not found.' }, 404)
      const courseId = lesson.marketplace_sections?.course_id

      const { data: enrollment, error: enrollError } = await supabaseAdmin
        .from('marketplace_enrollments')
        .select('id')
        .eq('user_id', user.id)
        .eq('course_id', courseId)
        .maybeSingle()
      if (enrollError || !enrollment) return jsonResponse({ error: 'You are not enrolled in this course.' }, 403)

      const { error: progressError } = await supabaseAdmin
        .from('marketplace_lesson_progress')
        .upsert({ enrollment_id: enrollment.id, lesson_id }, { onConflict: 'enrollment_id,lesson_id', ignoreDuplicates: true })
      if (progressError) throw progressError

      const completionResult = await issueCertificateIfComplete(enrollment.id, courseId, user.id)

      return jsonResponse({ ok: true, ...completionResult })
    }

    if (action === 'get_course_progress') {
      const { course_id } = body
      if (!course_id) return jsonResponse({ error: 'course_id is required.' }, 400)

      const { data: enrollment } = await supabaseAdmin
        .from('marketplace_enrollments')
        .select('id, completed_at')
        .eq('user_id', user.id)
        .eq('course_id', course_id)
        .maybeSingle()
      if (!enrollment) return jsonResponse({ error: 'You are not enrolled in this course.' }, 403)

      const [{ data: progressRows }, { data: certificate }] = await Promise.all([
        supabaseAdmin.from('marketplace_lesson_progress').select('lesson_id').eq('enrollment_id', enrollment.id),
        supabaseAdmin.from('marketplace_certificates').select('cert_code, issued_at, pdf_storage_path').eq('enrollment_id', enrollment.id).maybeSingle(),
      ])

      let certificateUrl: string | null = null
      if (certificate?.pdf_storage_path) {
        const { data: signed } = await supabaseAdmin.storage
          .from('marketplace-certificates')
          .createSignedUrl(certificate.pdf_storage_path, 60 * 60)
        certificateUrl = signed?.signedUrl ?? null
      }

      return jsonResponse({
        ok: true,
        completedLessonIds: (progressRows || []).map(r => r.lesson_id),
        completedAt: enrollment.completed_at,
        certificate: certificate ? { ...certificate, url: certificateUrl } : null,
      })
    }

    return jsonResponse({ error: `Unknown action: ${action}` }, 400)
  } catch (err) {
    console.error('marketplace-player error:', err)
    return jsonResponse({ error: err.message || 'Unknown error' }, 500)
  }
})
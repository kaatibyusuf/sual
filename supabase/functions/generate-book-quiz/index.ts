// supabase/functions/generate-book-quiz/index.ts
//
// Generates a self-quiz from a section of a book — either plain
// extracted text, or a set of page images (scanned PDFs / photographed
// pages / direct image uploads) that get transcribed via a
// vision-capable model first, then fed through the exact same
// generation and verification pipeline as the text path.
//
// Each image arrives as { base64, mimeType } — mimeType is REQUIRED
// per image and must reflect the image's actual encoding (a PNG
// screenshot stays PNG, a JPEG camera photo stays JPEG), rather than
// assuming JPEG for everything. A mismatched mime type on the data
// URL causes the vision model to fail decoding the image, which is
// what broke direct image/screenshot uploads — PDF-rendered pages
// happened to always be real JPEG, so that path worked; uploaded
// PNGs and other formats did not. A bare string is still accepted
// for backward compatibility and falls back to image/jpeg.
//
// Two question types:
//   - mcq: standard multiple choice comprehension, deliberately
//     spread across different comprehension skills (main idea,
//     detail, cause-effect, definition, inference) rather than one
//     repeated question style — a study/exam-prep tool needs to
//     actually test different kinds of understanding, not the same
//     shallow "which word appears" question five times
//   - fill_blank: a sentence QUOTED VERBATIM from the source text
//     with one word blanked out, verified server-side against the
//     source before being kept
//
// POST-PROCESSING (added after an "always the same answer letter"
// and "same question type every time" report):
//   1. Deduplicate — drop any question testing the same underlying
//      content as one already kept (same mcq question text, or same
//      fill_blank answer/sentence), since prompting for variety
//      doesn't guarantee the model won't still repeat itself.
//   2. Reposition — mcq correct answers are reshuffled across A–D
//      using the same position-cycler technique already used in
//      Quiz.jsx and Hifdh.jsx, since LLMs systematically favor
//      certain option positions when generating MCQs. Trusting the
//      model's own placement was the bug; this makes the app the
//      final authority on position, same as everywhere else it
//      already does this.
//
// Also: both source paths (plain text and image-OCR) run a
// character-quality check on the source text before generation,
// since a transcription/extraction can clear a bare word-count bar
// while being mostly symbols/noise — MCQ questions are never checked
// against the source content (only fill_blank is), so garbage input
// would otherwise still produce a structurally-valid but meaningless
// quiz.
//
// RETRY / BACKOFF: both OpenAI calls (vision transcription, question
// generation) go through callOpenAIWithRetry rather than a raw fetch.
// gpt-4o-mini's tokens-per-minute quota is shared across the whole
// OpenAI org — every function using that model (hifdh-voice-check,
// daily-tafseer-generator, admin-manage-tafseer, this one, etc.) draws
// from the same pool, so a 429 here doesn't mean this function did
// anything wrong, just that the org-wide budget was briefly exhausted.
// Retrying with the delay OpenAI itself reports (Retry-After header,
// or the "try again in Nms" text in the error body) resolves almost
// all of these transparently — the user never sees anything. Only if
// retries are exhausted does an error reach the user, and even then
// it's a plain, calm sentence — never OpenAI's raw org/token/account
// internals.
//
// MONETIZATION: 2 free generations per user, lifetime (not monthly).
// After that, requires an active row in book_quiz_subscriptions — a
// fully separate product/table from Spaces' `subscriptions`.
//
// Deploy:  supabase functions deploy generate-book-quiz
// Secrets: reuses OPENAI_API_KEY already set for hifdh-voice-check
//          supabase secrets set BOOK_QUIZ_DAILY_CAP=10   (optional)

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')!
const DAILY_CAP = parseInt(Deno.env.get('BOOK_QUIZ_DAILY_CAP') ?? '10', 10)
const FREE_LIFETIME_GENERATIONS = 2

// Bounds the token cost of any single request regardless of what the
// client sends — roughly 3,500 words, generous for one section but
// not unbounded.
const MAX_SECTION_CHARS = 20000
const MIN_VALID_QUESTIONS = 4
const MAX_IMAGES_PER_SECTION = 6
const MIN_TRANSCRIBED_WORDS = 100
const MIN_TEXT_QUALITY_RATIO = 0.7
const MCQ_OPTION_COUNT = 4
const OPENAI_MAX_RETRIES = 4

// Only these are ever trusted as the mime type in a constructed data
// URL — anything else falls back to image/jpeg rather than passing
// through an arbitrary/unexpected value.
const ALLOWED_IMAGE_MIME_TYPES = new Set([
  'image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif',
])

const supabaseAdmin = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, content-type, x-client-info, apikey',
  }
}

function words(text: string) {
  return (text || '').trim().split(/\s+/).filter(Boolean)
}

// Same normalization approach as Hifdh.jsx's normalizeArabic — strips
// diacritics/tatweel and folds alef/ya/ta-marbuta variants, plus
// collapses whitespace, so verification/dedup isn't defeated by
// trivial formatting differences.
function normalizeArabic(str: string) {
  return (str || '')
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim()
}

// Mirrors BookQuiz.jsx's client-side textQualityRatio — catches the
// case a plain word-count check misses: a transcription (or garbled
// text extraction) that clears the word-count bar while being mostly
// symbols/noise rather than real Arabic.
function textQualityRatio(text: string) {
  const chars = [...text].filter(c => !/\s/.test(c))
  if (chars.length === 0) return 0
  const recognized = chars.filter(c =>
    /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u0660-\u0669a-zA-Z0-9.,!?؛،؟\-()'"]/.test(c)
  )
  return recognized.length / chars.length
}

// Builds the data URL for one image, trusting only a known-safe mime
// type. If the client sent an old-style plain string (no mimeType),
// falls back to image/jpeg for backward compatibility — this is the
// fix: previously EVERY image was hardcoded to image/jpeg regardless
// of what it actually was.
function buildImageDataUrl(img: any) {
  if (typeof img === 'string') {
    return `data:image/jpeg;base64,${img}`
  }
  const mime = ALLOWED_IMAGE_MIME_TYPES.has(img.mimeType) ? img.mimeType : 'image/jpeg'
  return `data:${mime};base64,${img.base64}`
}

// ── Shuffle + position cycler ────────────────────────────────
// Identical technique to Quiz.jsx and Hifdh.jsx's createPositionCycler
// — guarantees every slot (0..size-1) is used before any slot
// repeats, so the correct answer's position is evenly spread rather
// than left to the model's own (systematically biased) placement.
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function createPositionCycler(size: number) {
  let queue: number[] = []
  return function next() {
    if (queue.length === 0) {
      queue = shuffle(Array.from({ length: size }, (_, i) => i))
    }
    return queue.pop()!
  }
}

// ── OpenAI retry/backoff ─────────────────────────────────────
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Parses the wait time OpenAI actually told us to use — either a
// Retry-After header, or the "...try again in 931ms" phrasing in the
// error message — falling back to exponential backoff with jitter if
// neither is present.
function parseRetryDelayMs(res: Response, bodyJson: any): number | null {
  const retryAfterHeader = res.headers.get('retry-after')
  if (retryAfterHeader) {
    const seconds = parseFloat(retryAfterHeader)
    if (!Number.isNaN(seconds)) return seconds * 1000
  }
  const message: string = bodyJson?.error?.message || ''
  const match = message.match(/try again in ([\d.]+)\s*(ms|s)/i)
  if (match) {
    const value = parseFloat(match[1])
    return match[2].toLowerCase() === 'ms' ? value : value * 1000
  }
  return null
}

// Wraps a chat-completions call with retry/backoff. Only retries on
// 429 (rate limit) and 5xx (transient) — a genuinely bad request
// (bad payload, invalid image, etc.) will just fail the same way
// again, so there's no point retrying those.
async function callOpenAIWithRetry(payload: Record<string, unknown>): Promise<any> {
  let lastError: any = null
  for (let attempt = 0; attempt <= OPENAI_MAX_RETRIES; attempt++) {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (res.ok) return await res.json()

    const bodyJson = await res.json().catch(() => null)
    const isRateLimit = res.status === 429
    const isRetryable = isRateLimit || res.status >= 500

    if (!isRetryable || attempt === OPENAI_MAX_RETRIES) {
      const message = bodyJson?.error?.message || `OpenAI request failed (${res.status})`
      lastError = new Error(message)
      // Tag rate-limit failures so callers can swap in a clean,
      // user-facing message instead of surfacing OpenAI's raw
      // org/token/account internals.
      ;(lastError as any).isRateLimit = isRateLimit
      throw lastError
    }

    const waitMs = parseRetryDelayMs(res, bodyJson) ?? (2 ** attempt) * 500 + Math.random() * 250
    console.warn(`OpenAI ${res.status}, attempt ${attempt + 1}/${OPENAI_MAX_RETRIES + 1}, retrying in ${Math.round(waitMs)}ms`)
    await sleep(waitMs)
  }
  throw lastError
}

// Turns any OpenAI failure into a short, calm sentence a student can
// actually act on — never the org ID / token counts / dashboard link
// that OpenAI puts in its own error messages.
function friendlyOpenAIError(err: any, fallback: string): Error {
  if (err?.isRateLimit) {
    return new Error('Our system is a bit busy right now — please try again in a moment.')
  }
  return new Error(fallback)
}

const SYSTEM_PROMPT = `You are generating a self-quiz from a section of an Arabic text the user uploaded themselves, to help a student genuinely study and prepare for exams — not a trivia quiz. Follow these rules strictly:

1. Base every question ONLY on the provided text. Never add outside facts, context, or scholarly claims not present in the text itself.
2. Produce exactly 5 "mcq" questions, each testing a DIFFERENT comprehension skill — do not repeat the same question style:
   - Question 1: the main idea or overall point of a passage in the text
   - Question 2: a specific detail or fact explicitly stated in the text
   - Question 3: a cause-and-effect or reasoning relationship stated in the text
   - Question 4: the meaning or definition of a term/concept as explained in the text
   - Question 5: a conclusion or inference that follows directly and only from what the text states
   No two mcq questions may test the same sentence or the same piece of information as each other.
3. For "mcq": question and all 4 options in Arabic, correctIndex is 0-3, explanation is one short Arabic sentence citing what in the text supports the answer.
4. Produce exactly 4 "fill_blank" questions. Each one must blank a word from a DIFFERENT sentence than any other fill_blank question — never reuse the same sentence, and never reuse the same answer word twice. Prefer blanking a meaningful term, name, or key concept over a common/filler word. Pick a real, complete sentence VERBATIM from the provided text (do not paraphrase or alter it in any way), then blank out exactly one meaningful word from it, replacing it with "____". "answer" must be exactly that removed word, spelled exactly as it appears in the source text.
5. Respond with ONLY a JSON object of this exact shape, no other text:
{"questions": [
  {"type": "mcq", "question": "...", "options": ["...","...","...","..."], "correctIndex": 0, "explanation": "..."},
  {"type": "fill_blank", "sentence": "... ____ ...", "answer": "..."}
]}`

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
  if (callerError || !callerData?.user?.id) {
    return new Response(JSON.stringify({ error: 'Could not verify caller' }), { status: 401, headers: corsHeaders() })
  }
  const userId = callerData.user.id

  // ── Daily cap — safety net against runaway/abusive usage ────
  const startOfDay = new Date()
  startOfDay.setUTCHours(0, 0, 0, 0)
  const { count, error: countError } = await supabaseAdmin
    .from('book_quizzes')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .gte('created_at', startOfDay.toISOString())
  if (countError) {
    console.error('Failed to check daily book-quiz count:', countError)
  } else if ((count ?? 0) >= DAILY_CAP) {
    return new Response(JSON.stringify({ error: `Daily book-quiz limit reached (${DAILY_CAP}). Try again tomorrow.` }), { status: 429, headers: corsHeaders() })
  }

  // ── Trial / paywall check ──────────────────────────────────
  const { count: lifetimeCount, error: lifetimeError } = await supabaseAdmin
    .from('book_quizzes')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
  if (lifetimeError) {
    console.error('Failed to check lifetime book-quiz count:', lifetimeError)
  }

  const { data: bookQuizSub } = await supabaseAdmin
    .from('book_quiz_subscriptions')
    .select('status, expires_at')
    .eq('user_id', userId)
    .maybeSingle()

  const hasActiveSub = bookQuizSub?.status === 'active'
    && (!bookQuizSub.expires_at || new Date(bookQuizSub.expires_at) > new Date())

  if (!hasActiveSub && (lifetimeCount ?? 0) >= FREE_LIFETIME_GENERATIONS) {
    return new Response(JSON.stringify({
      error: 'paywall',
      message: 'You\'ve used both free Book Quiz generations. Subscribe to keep generating quizzes from your books.',
    }), { status: 402, headers: corsHeaders() })
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400, headers: corsHeaders() })
  }

  const bookTitle = (body.book_title || '').trim()
  const sectionLabel = (body.section_label || '').trim()
  if (!bookTitle || !sectionLabel) {
    return new Response(JSON.stringify({ error: 'book_title and section_label are required' }), { status: 400, headers: corsHeaders() })
  }

  const sectionImages = Array.isArray(body.section_images) ? body.section_images : null
  let sectionText = ''
  let sourceType = 'text'

  try {
    if (sectionImages) {
      // ── Vision transcription pass ────────────────────────────
      if (sectionImages.length === 0 || sectionImages.length > MAX_IMAGES_PER_SECTION) {
        return new Response(JSON.stringify({ error: `Provide between 1 and ${MAX_IMAGES_PER_SECTION} page images.` }), { status: 400, headers: corsHeaders() })
      }

      let visionBody
      try {
        visionBody = await callOpenAIWithRetry({
          model: 'gpt-4o-mini',
          temperature: 0,
          messages: [{
            role: 'user',
            content: [
              { type: 'text', text: 'Transcribe ALL Arabic text visible in these page images, exactly as written, in reading order. Output plain transcribed text only, no commentary, no translation, no formatting.' },
              ...sectionImages.map((img: any) => ({ type: 'image_url', image_url: { url: buildImageDataUrl(img) } })),
            ],
          }],
        })
      } catch (err) {
        console.error('Vision transcription failed:', err)
        throw friendlyOpenAIError(err, 'Could not read these page images. Please try again.')
      }

      const transcribed = (visionBody.choices?.[0]?.message?.content || '').trim()
      if (words(transcribed).length < MIN_TRANSCRIBED_WORDS) {
        return new Response(JSON.stringify({
          error: 'Could not read enough text from these images clearly enough to generate a quiz. Try clearer, higher-resolution photos.',
        }), { status: 422, headers: corsHeaders() })
      }
      if (textQualityRatio(transcribed) < MIN_TEXT_QUALITY_RATIO) {
        return new Response(JSON.stringify({
          error: 'The text read from these images didn\'t look reliable enough to quiz on. Try clearer, higher-resolution photos, or a different page.',
        }), { status: 422, headers: corsHeaders() })
      }

      sectionText = transcribed
      sourceType = 'image_ocr'
    } else {
      sectionText = (body.section_text || '').trim()
      sourceType = 'text'
      if (sectionText && textQualityRatio(sectionText) < MIN_TEXT_QUALITY_RATIO) {
        return new Response(JSON.stringify({
          error: 'This section\'s extracted text didn\'t look reliable enough to quiz on. Try a different section.',
        }), { status: 422, headers: corsHeaders() })
      }
    }

    if (!sectionText) {
      return new Response(JSON.stringify({ error: 'section_text or section_images is required' }), { status: 400, headers: corsHeaders() })
    }
    if (sectionText.length > MAX_SECTION_CHARS) {
      sectionText = sectionText.slice(0, MAX_SECTION_CHARS)
    }

    // ── Question generation pass ───────────────────────────────
    let completionBody
    try {
      completionBody = await callOpenAIWithRetry({
        model: 'gpt-4o-mini',
        temperature: 0.3,
        max_tokens: 2000,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: sectionText },
        ],
      })
    } catch (err) {
      console.error('Question generation failed:', err)
      throw friendlyOpenAIError(err, 'Question generation failed. Please try again.')
    }

    let parsed
    try {
      parsed = JSON.parse(completionBody.choices[0].message.content)
    } catch {
      throw new Error('Something went wrong generating your quiz. Please try again.')
    }

    const rawQuestions = Array.isArray(parsed.questions) ? parsed.questions : []
    const normalizedSource = normalizeArabic(sectionText)

    // ── Schema + grounding validation ────────────────────────
    const validated = rawQuestions.filter((q: any) => {
      if (q.type === 'mcq') {
        return typeof q.question === 'string'
          && Array.isArray(q.options) && q.options.length === MCQ_OPTION_COUNT
          && Number.isInteger(q.correctIndex) && q.correctIndex >= 0 && q.correctIndex < MCQ_OPTION_COUNT
      }
      if (q.type === 'fill_blank') {
        if (typeof q.sentence !== 'string' || typeof q.answer !== 'string') return false
        // Reconstruct the full claimed sentence and confirm it's a
        // real substring of the source — including the OCR'd source
        // when this came from images — so a fabricated or
        // mis-transcribed "recall" question never reaches the user.
        const reconstructed = q.sentence.replace('____', q.answer)
        return normalizedSource.includes(normalizeArabic(reconstructed))
      }
      return false
    })

    // ── Deduplication ─────────────────────────────────────────
    // Prompting for variety doesn't guarantee the model won't still
    // repeat itself — this drops any question testing content
    // already covered by one already kept.
    const seenMcqQuestions = new Set<string>()
    const seenFillAnswers = new Set<string>()
    const seenFillSentences = new Set<string>()

    const deduped = validated.filter((q: any) => {
      if (q.type === 'mcq') {
        const key = normalizeArabic(q.question)
        if (seenMcqQuestions.has(key)) return false
        seenMcqQuestions.add(key)
        return true
      }
      const answerKey = normalizeArabic(q.answer)
      const sentenceKey = normalizeArabic(q.sentence)
      if (seenFillAnswers.has(answerKey) || seenFillSentences.has(sentenceKey)) return false
      seenFillAnswers.add(answerKey)
      seenFillSentences.add(sentenceKey)
      return true
    })

    if (deduped.length < MIN_VALID_QUESTIONS) {
      return new Response(JSON.stringify({
        error: sourceType === 'image_ocr'
          ? 'Could not generate a reliable quiz from this transcription — the photo/scan quality may be too low. Try clearer images.'
          : 'Could not generate a reliable quiz from this section — try a longer or different excerpt.',
      }), { status: 422, headers: corsHeaders() })
    }

    // ── Reposition mcq correct answers ───────────────────────
    // Same position-cycler technique as Quiz.jsx/Hifdh.jsx — the
    // model's own answer placement is not trusted, this app is the
    // final authority on where the correct option lands, same as
    // everywhere else it already does this.
    const cyclePosition = createPositionCycler(MCQ_OPTION_COUNT)
    const finalQuestions = deduped.map((q: any) => {
      if (q.type !== 'mcq') return q
      const correctText = q.options[q.correctIndex]
      const distractors = q.options.filter((_: any, i: number) => i !== q.correctIndex)
      const shuffledDistractors = shuffle(distractors)
      const position = cyclePosition()
      const options = new Array(MCQ_OPTION_COUNT)
      options[position] = correctText
      let d = 0
      for (let i = 0; i < MCQ_OPTION_COUNT; i++) {
        if (i === position) continue
        options[i] = shuffledDistractors[d]
        d++
      }
      return { ...q, options, correctIndex: position }
    })

    const { data: inserted, error: insertError } = await supabaseAdmin
      .from('book_quizzes')
      .insert({
        user_id: userId,
        book_title: bookTitle,
        section_label: sectionLabel,
        source_excerpt: sectionText.slice(0, 4000),
        questions: finalQuestions,
        source_type: sourceType,
      })
      .select()
      .maybeSingle()

    if (insertError) throw insertError

    return new Response(JSON.stringify({ ok: true, quiz: inserted }), {
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('generate-book-quiz failed:', err)
    return new Response(JSON.stringify({ error: err.message || String(err) }), { status: 500, headers: corsHeaders() })
  }
})
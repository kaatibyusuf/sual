// supabase/functions/daily-tafseer-generator/index.ts
//
// Runs on a daily schedule (see the pg_cron job in
// daily_tafseer_automation_migration.sql). Each run:
//   1. Checks whether today's row already exists — if so, does
//      nothing (safe against being triggered twice in one day).
//   2. Reads the rotation cursor (which surah/ayah is next).
//   3. Fetches that verse's Arabic text and English translation from
//      the same Tanzil-based dataset Hifdh's Qur'an collection
//      already uses (risan/quran-json), so there's one verified
//      source of Qur'an text across the whole app, not two.
//   4. Fetches Tafsir Ibn Kathir (abridged, English) for that verse
//      from spa5k/tafsir_api, a free static mirror of Quran.com's own
//      tafsir library.
//   5. Inserts today's row and advances the cursor to the next verse
//      (wrapping from 114:6 back to 1:1 once the whole mushaf has
//      been covered).
//
// Deliberately does NOT auto-generate the `lessons` array — those
// were meant as a few hand-picked key takeaways, and deriving them
// well from raw tafsir text isn't something worth faking. lessons
// ships empty; Spaces.jsx already handles that gracefully by relying
// on its other quiz-question types when lessons is empty. Add lessons
// by hand later for any day worth the extra touch, or revisit this
// properly once there's a real approach for deriving them.
//
// Deploy:  supabase functions deploy daily-tafseer-generator --no-verify-jwt
// Secrets: supabase secrets set CRON_SECRET=choose_a_long_random_string
//          (SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are already
//          available to every Edge Function automatically)

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CRON_SECRET = Deno.env.get('CRON_SECRET')

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const TAFSIR_SLUG = 'en-tafisr-ibn-kathir' // Tafsir Ibn Kathir (abridged), English

function todayUTC(): string {
  return new Date().toISOString().slice(0, 10)
}

// Defensive field extraction — different mirrors/versions of this
// dataset have used slightly different key names over time (`number`
// vs `id`, `translation` vs `translation_en`). Trying each possible
// name is cheaper and safer than betting on exactly one.
function firstDefined(...vals: any[]) {
  return vals.find(v => v !== undefined && v !== null)
}

async function fetchChapter(surahNum: number) {
  const res = await fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/en/${surahNum}.json`)
  if (!res.ok) throw new Error(`Qur'an chapter fetch failed for surah ${surahNum}: ${res.status}`)
  return await res.json()
}

async function fetchTafsir(surahNum: number, ayahNum: number): Promise<string> {
  const res = await fetch(`https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/${TAFSIR_SLUG}/${surahNum}/${ayahNum}.json`)
  if (!res.ok) throw new Error(`Tafsir fetch failed for ${surahNum}:${ayahNum}: ${res.status}`)
  const data = await res.json()
  const raw = firstDefined(data?.text, data?.content, Array.isArray(data) ? data[0]?.content : null) || ''
  // Strip basic markdown/HTML so it renders cleanly as plain text —
  // Spaces.jsx displays tafseer_body inside a plain <p>.
  return String(raw)
    .replace(/<[^>]+>/g, ' ')
    .replace(/#+\s?/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const providedSecret = req.headers.get('x-cron-secret')
  if (CRON_SECRET && providedSecret !== CRON_SECRET) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  const today = todayUTC()

  // Idempotency guard — never publish twice for the same date.
  const { data: existing } = await supabaseAdmin
    .from('daily_tafseer')
    .select('id')
    .eq('publish_date', today)
    .maybeSingle()

  if (existing) {
    return new Response(JSON.stringify({ ok: true, skipped: 'already published today' }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Read (or initialize) the rotation cursor.
  let { data: cursor } = await supabaseAdmin
    .from('daily_tafseer_cursor')
    .select('*')
    .eq('id', 1)
    .maybeSingle()

  if (!cursor) {
    cursor = { id: 1, next_surah: 1, next_ayah: 1 }
    await supabaseAdmin.from('daily_tafseer_cursor').upsert(cursor)
  }

  const surahNum = cursor.next_surah
  const ayahNum = cursor.next_ayah

  try {
    const chapter = await fetchChapter(surahNum)
    const surahName = firstDefined(chapter.transliteration_en, chapter.transliteration, chapter.name_en) || `Surah ${surahNum}`
    const totalVerses = firstDefined(chapter.total_verses, chapter.verses?.length)
    const verses = chapter.verses || []
    const verse = verses.find((v: any) => firstDefined(v.number, v.id) === ayahNum)

    if (!verse) {
      throw new Error(`Verse ${surahNum}:${ayahNum} not found in fetched chapter data`)
    }

    const arabicText = firstDefined(verse.text, verse.arabic)
    const translation = firstDefined(verse.translation_en, verse.translation)
    const tafseerBody = await fetchTafsir(surahNum, ayahNum)

    const { error: insertError } = await supabaseAdmin.from('daily_tafseer').insert({
      publish_date: today,
      surah_name: surahName,
      surah_num: surahNum,
      ayah_num: ayahNum,
      arabic_text: arabicText,
      translation,
      tafseer_body: tafseerBody,
      lessons: [],
    })

    if (insertError) throw insertError

    // Advance the cursor: next ayah, or next surah if we just
    // published the last ayah of this one, wrapping 114 → 1.
    const isLastAyah = ayahNum >= (totalVerses || ayahNum)
    const nextSurah = isLastAyah ? (surahNum >= 114 ? 1 : surahNum + 1) : surahNum
    const nextAyah = isLastAyah ? 1 : ayahNum + 1

    await supabaseAdmin
      .from('daily_tafseer_cursor')
      .update({ next_surah: nextSurah, next_ayah: nextAyah, updated_at: new Date().toISOString() })
      .eq('id', 1)

    return new Response(JSON.stringify({
      ok: true,
      published: { surah: surahName, surahNum, ayahNum },
      nextUp: { surahNum: nextSurah, ayahNum: nextAyah },
    }), { headers: { 'Content-Type': 'application/json' } })

  } catch (err) {
    console.error('daily-tafseer-generator failed:', err)
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 })
  }
})
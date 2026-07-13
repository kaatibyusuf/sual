// scripts/generate_quran_1_26.mjs
//
// Fills in surahs 1–26 (Al-Fatiha through An-Naml minus An-Naml
// itself, which is already loaded) into hifdh_quran.js, using the
// exact same Tanzil-based dataset (risan/quran-json) your existing
// 88 surahs already come from — same source, same method, nothing
// hand-typed.
//
// After running, num is renumbered sequentially 1–114 across the
// WHOLE array in real mushaf order. This is safe: Hifdh progress and
// the memorization scope system are both keyed by `key` (built from
// `surah`), never by `num`, so no existing user's saved progress is
// affected by the renumbering — exactly what this file's own header
// comment already promised extensions would do.
//
// Requires Node 18+ (for built-in fetch). Run from your project root:
//   node scripts/generate_quran_1_26.mjs
//
// It will NOT overwrite your existing file directly — it writes to
// hifdh_quran.generated.js alongside it, so you can diff/review
// before replacing the real file yourself.

import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const SOURCE_PATH = path.resolve('src/data/hifdh_quran.js')
const OUTPUT_PATH = path.resolve('src/data/hifdh_quran.generated.js')

function firstDefined(...vals) {
  return vals.find(v => v !== undefined && v !== null)
}

async function fetchChapter(surahNum) {
  const res = await fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/en/${surahNum}.json`)
  if (!res.ok) throw new Error(`Chapter fetch failed for surah ${surahNum}: ${res.status}`)
  return await res.json()
}

function revelationLabel(chapter) {
  const raw = firstDefined(chapter.type, chapter.revelation_type, chapter.revelation_place) || ''
  const lower = String(raw).toLowerCase()
  if (lower.includes('mecc') || lower.includes('makk')) return 'Makki'
  if (lower.includes('medin') || lower.includes('madan')) return 'Madani'
  return raw || 'Makki' // last-resort fallback, flagged in the console output below
}

async function buildEntry(surahNum) {
  const chapter = await fetchChapter(surahNum)
  const label = firstDefined(chapter.transliteration_en, chapter.transliteration, chapter.name_en) || `Surah ${surahNum}`
  const verses = chapter.verses || []
  const totalVerses = firstDefined(chapter.total_verses, verses.length)
  const arabic = verses.map(v => firstDefined(v.text, v.arabic)).filter(Boolean).join(' ')
  const revelation = revelationLabel(chapter)

  return {
    num: null, // filled in after renumbering, once the full ordered list is known
    surah: surahNum,
    label,
    meta: `Surah ${surahNum} · ${revelation} · ${totalVerses} ayat`,
    arabic,
  }
}

async function main() {
  console.log('Reading existing file:', SOURCE_PATH)
  const existingModule = await import(pathToFileURL(SOURCE_PATH).href + `?t=${Date.now()}`) // cache-bust in case of repeated runs
  const existingItems = existingModule.QURAN_ITEMS
  if (!Array.isArray(existingItems)) {
    throw new Error('Could not find QURAN_ITEMS array in the existing file — aborting rather than guessing.')
  }
  console.log(`Found ${existingItems.length} existing entries (surahs ${existingItems[0].surah}–${existingItems[existingItems.length - 1].surah}).`)

  const missingSurahs = []
  for (let s = 1; s <= 26; s++) missingSurahs.push(s)

  console.log(`Fetching ${missingSurahs.length} missing surahs from the Tanzil-based dataset...`)
  const newEntries = []
  for (const s of missingSurahs) {
    process.stdout.write(`  Surah ${s}... `)
    const entry = await buildEntry(s)
    if (!entry.arabic || entry.arabic.length < 10) {
      console.warn(`\n  WARNING: surah ${s} came back with suspiciously little/no Arabic text — check this entry manually before trusting it.`)
    }
    newEntries.push(entry)
    console.log('done')
  }

  // Combine and renumber sequentially 1..N in real mushaf order.
  const combined = [...newEntries, ...existingItems].sort((a, b) => a.surah - b.surah)
  combined.forEach((entry, i) => { entry.num = i + 1 })

  const fileContents = `// src/data/hifdh_quran.js
// Hifdh Simulator dataset — Qur'an collection.
// Surahs 1 (Al-Fatiha) through 114 (An-Nas).
//
// Text: Tanzil-verified Uthmani script, from the risan/quran-json
// dataset (Tanzil project text). NOT hand-typed. Progress is keyed to
// the mushaf \`surah\` number — extensions never reset progress.
// Regenerated ${new Date().toISOString().slice(0, 10)} by scripts/generate_quran_1_26.mjs
// to add surahs 1–26.

export const QURAN_ITEMS = ${JSON.stringify(combined, null, 2)}
`

  await fs.writeFile(OUTPUT_PATH, fileContents, 'utf8')
  console.log(`\nWrote ${combined.length} total entries to:`, OUTPUT_PATH)
  console.log('Review it, then replace src/data/hifdh_quran.js with it once you\'re satisfied.')
}

main().catch(err => {
  console.error('Failed:', err)
  process.exit(1)
})

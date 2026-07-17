// One-time script to seed exam_prep_topics with the real JAMB Arabic
// syllabus. Same pattern as seed-exam-syllabus.mjs for Islamic Studies.
//
// Usage: $env:SUPABASE_URL="..."; $env:SUPABASE_SERVICE_ROLE_KEY="..."; node scripts/seed-exam-syllabus-arabic.mjs

import { createClient } from '@supabase/supabase-js'
import { UTME_ARABIC_SYLLABUS } from '../src/data/examSyllabusArabic.js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const rows = UTME_ARABIC_SYLLABUS.map((t, i) => ({
  subject: 'arabic',
  title: `${t.number}. ${t.title}`,
  syllabus_section: `Section ${t.section}`,
  syllabus_detail: t.detail,
  sort_order: i + 1,
}))

const { data, error } = await supabase.from('exam_prep_topics').insert(rows).select()
if (error) {
  console.error('Seed failed:', error.message)
  process.exit(1)
}
console.log(`Seeded ${data.length} Arabic topics.`)
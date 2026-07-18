// Seeds exam_prep_topics with the real JUPEB IRS syllabus.
// Usage: $env:SUPABASE_URL="..."; $env:SUPABASE_SERVICE_ROLE_KEY="..."; node scripts/seed-exam-syllabus-jupeb-irs.mjs

import { createClient } from '@supabase/supabase-js'
import { JUPEB_IRS_SYLLABUS } from '../src/data/examSyllabusJupebIRS.js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const rows = JUPEB_IRS_SYLLABUS.map((t, i) => ({
  board: 'jupeb',
  subject: 'islamic_studies',
  title: `${t.courseCode}: ${t.title}`,
  syllabus_section: `Semester ${t.semester} · ${t.creditLoad} units`,
  syllabus_detail: t.detail, // null for ISS003 — intentional
  course_code: t.courseCode,
  sort_order: i + 1,
}))

const { data, error } = await supabase.from('exam_prep_topics').insert(rows).select()
if (error) {
  console.error('Seed failed:', error.message)
  process.exit(1)
}
console.log(`Seeded ${data.length} JUPEB IRS topics (ISS003 has no syllabus_detail — page was missing from source).`)
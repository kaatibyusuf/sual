// One-time script to seed exam_prep_topics from the real JAMB
// Islamic Studies syllabus data. Run once after applying the
// migration above. Requires SUPABASE_URL and
// SUPABASE_SERVICE_ROLE_KEY as environment variables — never commit
// the service role key itself.
//
// Usage: SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-exam-syllabus.mjs

import { createClient } from '@supabase/supabase-js'
import { UTME_ISLAMIC_STUDIES_SYLLABUS } from '../src/data/examSyllabusIslamicStudies.js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const rows = UTME_ISLAMIC_STUDIES_SYLLABUS.map((t, i) => ({
  subject: 'islamic_studies',
  title: `${t.number}. ${t.title}`,
  syllabus_section: `Part ${t.part}`,
  syllabus_detail: t.detail,
  sort_order: i + 1,
}))

const { data, error } = await supabase.from('exam_prep_topics').insert(rows).select()
if (error) {
  console.error('Seed failed:', error.message)
  process.exit(1)
}
console.log(`Seeded ${data.length} topics.`)
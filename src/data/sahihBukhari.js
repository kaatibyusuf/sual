// src/data/sahihBukhari.js
//
// Sahih Al-Bukhari — the most authentic hadith collection after the
// Qur'an, organized traditionally into ~97 books (Kitab al-Iman,
// Kitab al-Ilm, Kitab as-Salah, etc), totaling roughly 7,000+ hadith
// (fewer with repetitions removed).
//
// Deliberately left EMPTY. This is an order of magnitude larger and
// more consequential than Umdat al-Ahkam — do not attempt to
// populate this from memory, an LLM, or any unverified source. Use
// a licensed/verified hadith database (e.g. an API backed by
// sunnah.com's dataset) or a verified printed edition, and have
// each batch reviewed before publishing. Populate incrementally,
// book by book — there is no need to have all of it before this
// becomes useful to students.

export const SAHIH_BUKHARI_CHAPTERS = [
  // { key: 'iman', label: 'Faith', arabic: 'كِتَابُ الإِيمَان' },
  // { key: 'ilm', label: 'Knowledge', arabic: 'كِتَابُ العِلْم' },
  // { key: 'salah', label: 'Prayer', arabic: 'كِتَابُ الصَّلَاة' },
  // ...add books/chapters as content is verified and added
]

export const SAHIH_BUKHARI = [
  // { num: 1, chapter: 'iman', title: '...', narrator: '...', source: 'Bukhari',
  //   arabic_text: '...', transliteration: '...', translation: '...', lessons: [...] },
]
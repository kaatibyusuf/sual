// src/lib/quranJuz.js
//
// The 30 Juz boundaries of the mushaf, verified against two
// independent sources before use (myislam.org and quranica.com,
// which agreed exactly). Each entry is where that Juz BEGINS.
//
// Surah-to-Juz assignment convention: since Sual's Hifdh Qur'an
// collection is loaded at surah granularity (not ayah-level), a
// surah that spans two Juz (common — Juz boundaries rarely align
// with surah boundaries) is assigned to whichever Juz its OPENING
// ayah falls in. This matches how most simplified Juz indexes list
// surahs, and means a surah's full text is always grouped under one
// Juz rather than split.

export const JUZ_BOUNDARIES = [
  { juz: 1,  surah: 1,  ayah: 1 },
  { juz: 2,  surah: 2,  ayah: 142 },
  { juz: 3,  surah: 2,  ayah: 253 },
  { juz: 4,  surah: 3,  ayah: 93 },
  { juz: 5,  surah: 4,  ayah: 24 },
  { juz: 6,  surah: 4,  ayah: 148 },
  { juz: 7,  surah: 5,  ayah: 82 },
  { juz: 8,  surah: 6,  ayah: 111 },
  { juz: 9,  surah: 7,  ayah: 88 },
  { juz: 10, surah: 8,  ayah: 41 },
  { juz: 11, surah: 9,  ayah: 93 },
  { juz: 12, surah: 11, ayah: 1 },
  { juz: 13, surah: 12, ayah: 53 },
  { juz: 14, surah: 15, ayah: 1 },
  { juz: 15, surah: 17, ayah: 1 },
  { juz: 16, surah: 18, ayah: 75 },
  { juz: 17, surah: 21, ayah: 1 },
  { juz: 18, surah: 23, ayah: 1 },
  { juz: 19, surah: 25, ayah: 1 },
  { juz: 20, surah: 27, ayah: 56 },
  { juz: 21, surah: 30, ayah: 1 },
  { juz: 22, surah: 33, ayah: 31 },
  { juz: 23, surah: 36, ayah: 28 },
  { juz: 24, surah: 39, ayah: 32 },
  { juz: 25, surah: 41, ayah: 47 },
  { juz: 26, surah: 46, ayah: 1 },
  { juz: 27, surah: 51, ayah: 31 },
  { juz: 28, surah: 58, ayah: 1 },
  { juz: 29, surah: 67, ayah: 1 },
  { juz: 30, surah: 78, ayah: 1 },
]

// Which Juz does a specific ayah belong to? Generalized version of
// surahToJuz below — needed to find where a surah ENDS, not just
// where it starts, since some surahs (Al-Baqarah, An-Nisa) span
// multiple Juz entirely on their own.
export function ayahToJuz(surahNum, ayahNum) {
  let result = 1
  for (const b of JUZ_BOUNDARIES) {
    const startsBeforeOrAt = b.surah < surahNum || (b.surah === surahNum && b.ayah <= ayahNum)
    if (startsBeforeOrAt) result = b.juz
    else break
  }
  return result
}

// Which Juz does this surah's OPENING ayah belong to? Works for any
// surah number 1–114.
export function surahToJuz(surahNum) {
  return ayahToJuz(surahNum, 1)
}
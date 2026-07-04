// Shared Hijri (Islamic) calendar conversion logic.
// Previously duplicated separately in Calendar.jsx and PrayerTimes.jsx —
// now a single source of truth so both pages (and Home) always agree.
//
// HIJRI_EPOCH is calibrated -1 day from the standard tabular epoch
// (1948439.5) so the calculated date matches the locally-announced
// Hijri date. If your local moon-sighting authority ever shifts by a
// day, adjust this constant here — every importer updates together.

export const HIJRI_EPOCH = 1948438.5
export const GREGORIAN_EPOCH = 1721425.5

export const HIJRI_MONTHS = [
  'Muharram', 'Safar', 'Rabiul-Awwal', 'Rabiu-Thani',
  'Jumadal-Ula', 'Jumada al-Akhirah', 'Rajab', 'Shaban',
  'Ramadan', 'Shawwal', 'Dhul Qadah', 'Dhul Hijjah',
]

export const HIJRI_MONTHS_ARABIC = [
  'مُحَرَّم', 'صَفَر', 'رَبِيعُ الأَوَّل', 'رَبِيعُ الآخِر',
  'جُمَادَى الأُولَى', 'جُمَادَى الآخِرَة', 'رَجَب', 'شَعْبَان',
  'رَمَضَان', 'شَوَّال', 'ذُو القَعْدَة', 'ذُو الحِجَّة',
]

function leapGregorian(year) {
  return (year % 4 === 0) && (!(year % 100 === 0) || (year % 400 === 0))
}

export function gregorianToJD(year, month, day) {
  return GREGORIAN_EPOCH - 1 +
    365 * (year - 1) +
    Math.floor((year - 1) / 4) +
    -Math.floor((year - 1) / 100) +
    Math.floor((year - 1) / 400) +
    Math.floor((367 * month - 362) / 12 +
      (month <= 2 ? 0 : leapGregorian(year) ? -1 : -2) + day)
}

export function hijriToJD(year, month, day) {
  return day +
    Math.ceil(29.5 * (month - 1)) +
    (year - 1) * 354 +
    Math.floor((3 + 11 * year) / 30) +
    HIJRI_EPOCH - 1
}

export function jdToHijri(jd) {
  jd = Math.floor(jd) + 0.5
  const year = Math.floor((30 * (jd - HIJRI_EPOCH) + 10646) / 10631)
  const month = Math.min(12,
    Math.ceil((jd - (29 + hijriToJD(year, 1, 1))) / 29.5) + 1)
  const day = jd - hijriToJD(year, month, 1) + 1
  return { year, month, day: Math.floor(day) }
}

export function gregorianToHijri(gYear, gMonth, gDay) {
  const jd = gregorianToJD(gYear, gMonth, gDay)
  return jdToHijri(jd)
}

export function hijriToGregorian(hYear, hMonth, hDay) {
  const jd = hijriToJD(hYear, hMonth, hDay)
  const l = Math.floor(jd) + 68569
  const n = Math.floor((4 * l) / 146097)
  const l2 = l - Math.floor((146097 * n + 3) / 4)
  const i = Math.floor((4000 * (l2 + 1)) / 1461001)
  const l3 = l2 - Math.floor((1461 * i) / 4) + 31
  const j = Math.floor((80 * l3) / 2447)
  const day = l3 - Math.floor((2447 * j) / 80)
  const l4 = Math.floor(j / 11)
  const month = j + 2 - 12 * l4
  const year = 100 * (n - 49) + i + l4
  return { year, month, day }
}

export function getDaysInHijriMonth(hYear, hMonth) {
  const g1 = hijriToGregorian(hYear, hMonth, 1)
  const nextMonth = hMonth === 12 ? 1 : hMonth + 1
  const nextYear = hMonth === 12 ? hYear + 1 : hYear
  const g2 = hijriToGregorian(nextYear, nextMonth, 1)
  const d1 = new Date(g1.year, g1.month - 1, g1.day)
  const d2 = new Date(g2.year, g2.month - 1, g2.day)
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24))
}

// Convenience formatter used by PrayerTimes.jsx and Home.jsx
export function toHijriString(date) {
  const h = gregorianToHijri(date.getFullYear(), date.getMonth() + 1, date.getDate())
  return `${h.day} ${HIJRI_MONTHS_ARABIC[h.month - 1]} ${h.year} هـ`
}
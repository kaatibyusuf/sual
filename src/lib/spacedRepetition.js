// src/lib/spacedRepetition.js
//
// Shared Leitner spaced-repetition engine, extracted from the Hifdh
// Simulator so any feature (Hifdh, Flashcards, and anything later)
// can schedule review of a set of items without re-implementing the
// box logic. Nothing in here is Hifdh-specific — it operates purely
// on a storage key and item keys the caller provides.
//
// box 0 = new/failed (due now), 1 = 1 day, 2 = 3 days, 3 = 7 days, 4 = 14 days
export const BOX_INTERVALS_DAYS = [0, 1, 3, 7, 14]

// Builds a localStorage key from a feature-specific prefix and an id
// (e.g. a collection id or a deck id). Callers are responsible for
// keeping their prefix stable once shipped — changing it silently
// orphans anyone's saved progress under the old key.
export function storageKey(prefix, id) {
  return `${prefix}-${id}`
}

export function loadProgress(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {}
  } catch {
    return {}
  }
}

export function saveProgress(key, progress) {
  localStorage.setItem(key, JSON.stringify(progress))
}

export function isDue(entry) {
  if (!entry) return true // never reviewed
  return new Date(entry.due) <= new Date()
}

export function nextDue(box) {
  const d = new Date()
  d.setDate(d.getDate() + BOX_INTERVALS_DAYS[box])
  return d.toISOString()
}

// Moves a single item's box up (correct) or down (incorrect) and
// returns a new progress object with that one entry updated. Does
// not persist — call saveProgress with the result when ready.
export function advanceBox(progress, itemKey, correct) {
  const entry = progress[itemKey] || { box: 0 }
  const box = correct
    ? Math.min(entry.box + 1, BOX_INTERVALS_DAYS.length - 1)
    : Math.max(entry.box - 1, 0)
  return { ...progress, [itemKey]: { box, due: nextDue(box) } }
}

export function strengthOf(progress, itemKey) {
  const entry = progress[itemKey]
  if (!entry) return 'new'
  if (entry.box >= 3) return 'strong'
  if (entry.box >= 1) return 'building'
  return 'weak'
}

export function getDueItems(items, progress, getKey) {
  return items.filter(item => isDue(progress[getKey(item)]))
}

// A pure random shuffle is statistically unbiased over the long run,
// but clumps badly over short sessions. Shared here since both Hifdh
// and Flashcards want an unbiased-feeling shuffle for session order.
export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
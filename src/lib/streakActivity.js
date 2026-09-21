import { useState, useEffect } from 'react'
import { supabase } from './supabase.js'

// Central place for "what days has this user done ANYTHING that
// counts toward their streak." Originally this lived inline in
// Home.jsx as four separate fetch effects + one merge line — pulled
// out here because the Streak History page and the app-open nudge
// both need the exact same answer to "which days were active," and
// three separately-maintained copies of this logic would drift the
// moment one of them gets a new activity source added and the
// others don't.
//
// ASSUMPTIONS carried over from when Hifdh/Exam Prep were added to
// the streak: hifdh_progress uses an `updated_at` column, and
// exam_prep_attempts uses `attempted_at`. Neither has been confirmed
// against the live schema. If either is wrong, that one source fails
// silently (caught below, logged to console) and simply contributes
// no dates — it won't break the other sources or crash the page.
const ACTIVITY_SOURCES = [
  { table: 'quiz_history', field: 'taken_at', label: 'quiz' },
  { table: 'story_reading_progress', field: 'updated_at', label: 'story' },
  { table: 'hifdh_progress', field: 'updated_at', label: 'Hifdh' },
  { table: 'exam_prep_attempts', field: 'attempted_at', label: 'Exam Prep' },
]

export function useStreakActivityDates(user) {
  const [activeDateStrings, setActiveDateStrings] = useState(new Set())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) { setLoading(false); return }
    let cancelled = false

    const load = async () => {
      const results = await Promise.allSettled(
        ACTIVITY_SOURCES.map(src =>
          supabase.from(src.table).select(src.field).eq('user_id', user.id)
        )
      )
      if (cancelled) return

      const dates = new Set()
      results.forEach((result, i) => {
        const src = ACTIVITY_SOURCES[i]
        if (result.status === 'fulfilled' && !result.value.error) {
          for (const row of result.value.data || []) {
            if (row[src.field]) dates.add(new Date(row[src.field]).toDateString())
          }
        } else {
          console.error(`Failed to load ${src.label} activity for streak:`, result.reason || result.value?.error)
        }
      })

      setActiveDateStrings(dates)
      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [user])

  return { activeDateStrings, loading }
}

// Counts consecutive days (ending today or yesterday) with at least
// one qualifying activity. Moved here from Home.jsx so the daily
// streak (Home) and the yearly overview (Streak History) always
// agree — one implementation, not two that could disagree.
export function computeStreakFromDates(dateStrings) {
  if (dateStrings.size === 0) return { streak: 0, activeDates: dateStrings }

  const days = [...dateStrings].map(d => new Date(d)).sort((a, b) => b - a)

  const today = new Date(); today.setHours(0, 0, 0, 0)
  const mostRecent = days[0]
  const dayDiff = Math.round((today - mostRecent) / 86400000)
  if (dayDiff > 1) return { streak: 0, activeDates: dateStrings }

  let streak = 1
  for (let i = 1; i < days.length; i++) {
    const diff = Math.round((days[i - 1] - days[i]) / 86400000)
    if (diff === 1) streak++
    else break
  }
  return { streak, activeDates: dateStrings }
}

// True if today itself already has a qualifying activity logged.
// This is the entire gate for the app-open nudge: no separate
// dedup/localStorage flag needed, because the condition naturally
// stops being true the moment the person does something today —
// the nudge just won't render on the next check.
export function hasActivityToday(activeDateStrings) {
  return activeDateStrings.has(new Date().toDateString())
}

// Which months of `year` have at least one active day, for the
// Streak History calendar view. Returns an array of 12 booleans,
// Jan through Dec — a month with no data yet (including future
// months of the current year) is simply false, not a separate state,
// since "not yet active" and "genuinely inactive" render identically
// on that page.
export function getActiveMonthsForYear(activeDateStrings, year) {
  const active = new Array(12).fill(false)
  for (const dateStr of activeDateStrings) {
    const d = new Date(dateStr)
    if (d.getFullYear() === year) active[d.getMonth()] = true
  }
  return active
}
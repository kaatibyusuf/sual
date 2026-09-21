import DailyReminder, { useDailyReminderVisible } from '../components/DailyReminder.jsx'
import MilestoneCelebration, { checkStreakMilestone } from '../components/MilestoneCelebration.jsx'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { toHijriString } from '../lib/hijri.js'
import { getPrayerStatus, fetchAladhanTimings, minutesTo12h } from '../lib/prayerTimes.js'
import { STORIES } from '../data/stories.js'
import { DISCIPLINES } from '../data/knowledge.js'
import SpacesCTA from '../components/SpacesCTA.jsx'
import { generateStreakCard } from '../lib/shareCard.js'
import { useStreakActivityDates, computeStreakFromDates } from '../lib/streakActivity.js'
import './Home.css'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 5) return 'Good night'
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  if (hour < 21) return 'Good evening'
  return 'Good night'
}

function disciplineName(id) {
  if (id === 'mixed') return 'All Disciplines (Mixed)'
  const d = DISCIPLINES.find(x => x.id === id)
  return d?.name || id
}

// Target time for a countdown is only known to the minute (prayer
// times themselves are computed/fetched to the minute, never the
// second) — this builds a real Date at that HH:MM:00 today, or
// tomorrow if that time has already passed today (the midnight-wrap
// case, e.g. counting down to a Fajr that's earlier in the clock
// than the current moment). Ticking against a real Date this way is
// what makes the seconds actually count down smoothly instead of
// jumping in whatever increment the parent re-render happens to use.
function buildTargetDate(baseDate, targetMinutes) {
  if (targetMinutes === null || targetMinutes === undefined) return null
  const d = new Date(baseDate)
  d.setHours(0, 0, 0, 0)
  d.setMinutes(targetMinutes)
  if (d <= baseDate) d.setDate(d.getDate() + 1)
  return d
}

function formatCountdownHMS(totalSeconds) {
  if (totalSeconds === null || totalSeconds === undefined || totalSeconds < 0) return '--:--:--'
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = Math.floor(totalSeconds % 60)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

// How far through the current prayer's window (from when it began
// until the next prayer begins) the current moment sits, as a 0-1
// fraction — drawn as the filled portion of the progress bar.
// Handles the midnight wraparound (the Isha-through-next-Fajr
// window) the same way Awqaatu Salaah's own progress math does.
function getWindowProgress(currentMinutes, nextMinutes, nowMinutes) {
  if (nextMinutes === null || nextMinutes === undefined) return 0
  let start = currentMinutes ?? 0
  let end = nextMinutes
  if (end <= start) end += 1440
  let now = nowMinutes
  if (now < start) now += 1440
  const total = end - start
  if (total <= 0) return 0
  return Math.min(1, Math.max(0, (now - start) / total))
}

// Genuinely computed, not a static line — checks whether TOMORROW
// (relative to `date`) is Monday or Thursday, the two days the
// Prophet ﷺ is reported to have especially encouraged fasting on.
// Text here is a paraphrase of the well-known reports (Sahih Muslim,
// for the Monday reason; Tirmidhi/Abu Dawud/Ibn Majah for the
// Monday-and-Thursday deeds-presented reason), not a verbatim
// hadith quote — consistent with how the rest of Sual treats hadith
// text as content requiring the same review process, not something
// to reproduce casually inside a UI tip card.
function getFastingTip(date) {
  const tomorrow = new Date(date)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const day = tomorrow.getDay() // 0 = Sunday
  if (day === 1) {
    return {
      dayName: 'Monday',
      blurb: "The Prophet ﷺ mentioned this was the day of his birth and the day revelation first came to him.",
      source: 'Sahih Muslim',
    }
  }
  if (day === 4) {
    return {
      dayName: 'Thursday',
      blurb: "Deeds are reported to be presented to Allah on Mondays and Thursdays, and it's reported the Prophet ﷺ loved for his deeds to be presented while he was fasting.",
      source: 'Tirmidhi',
    }
  }
  return null
}

// Icons — paths reused verbatim from BottomNav's icon set so a tile
// tapped here and the matching tab/entry elsewhere always draw the
// exact same glyph.
const ICONS = {
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  disciplines: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  quiz: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  flashcards: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="7" width="14" height="10" rx="2" transform="rotate(-6 12 12)" />
      <rect x="6" y="8" width="14" height="10" rx="2" />
    </svg>
  ),
  stories: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h9a3 3 0 0 1 3 3v13H8a2 2 0 0 1-2-2V4z" />
      <path d="M6 4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2" />
      <line x1="9" y1="9" x2="14" y2="9" />
      <line x1="9" y1="13" x2="14" y2="13" />
    </svg>
  ),
  spaces: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="5" />
      <circle cx="15" cy="15" r="5" />
    </svg>
  ),
  prayerTimes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21v-8a8 8 0 0 1 16 0v8" />
      <line x1="2" y1="21" x2="22" y2="21" />
      <line x1="12" y1="3" x2="12" y2="7" />
      <line x1="8" y1="21" x2="8" y2="15" />
      <line x1="16" y1="21" x2="16" y2="15" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5c3.5 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3.5-8 7-13z" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1z" />
      <line x1="12" y1="6" x2="12" y2="19" />
    </svg>
  ),
  arrowUp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="6 11 12 5 18 11" />
    </svg>
  ),
  unlock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 7.75-1.5" />
    </svg>
  ),
  coins: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4a2 2 0 0 0 2 4h1" />
      <path d="M17 6h3a2 2 0 0 1-2 4h-1" />
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.6" y1="10.5" x2="15.4" y2="6.5" />
      <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
    </svg>
  ),
  locationPin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  ),
  lantern: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="4.5" />
      <path d="M9 4.5h6l-2 3h-2z" fill="currentColor" stroke="none" />
      <path d="M8 7.5h8v3.5c3 2 3 8.5 0 10.5H8c-3-2-3-8.5 0-10.5z" />
      <rect x="9.5" y="9.5" width="5" height="8" rx="1" opacity="0.5" />
      <path d="M8 18.5h8l-1.5 2h-5z" fill="currentColor" stroke="none" />
    </svg>
  ),
}

// Original mosque-and-trees illustration for the prayer countdown
// card — drawn directly as SVG, no human figures, matching the same
// constraint and approach as WelcomeCarousel's illustrations. Twin
// symmetric minarets and a proper onion-dome bulge (rather than a
// plain rounded hump) read as a much more immediately recognizable
// mosque silhouette than the single-minaret first pass, and the
// small arched windows either side of the door give the facade some
// texture instead of a flat block. Ground line anchors the whole
// composition instead of the building/trees appearing to float. Uses
// only white/sky-blue tones (via CSS custom properties, see Home.css)
// to stay within this page's stated navy/sky-only palette.
function NightMosqueIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="hm-prayer-illustration-svg" aria-hidden="true">
      <circle cx="168" cy="18" r="7" fill="var(--hm-illus-moon)" />
      <g fill="var(--hm-illus-star)" opacity="0.85">
        <circle cx="26" cy="14" r="1.4" />
        <circle cx="50" cy="28" r="1" />
        <circle cx="130" cy="10" r="1.5" />
        <circle cx="15" cy="38" r="1" />
        <circle cx="145" cy="30" r="1" />
      </g>

      <line x1="0" y1="119" x2="200" y2="119" stroke="var(--hm-illus-tree-trunk)" strokeWidth="1" opacity="0.4" />

      {/* Left tree */}
      <rect x="14" y="90" width="4" height="29" fill="var(--hm-illus-tree-trunk)" />
      <circle cx="16" cy="82" r="15" fill="var(--hm-illus-tree)" />

      {/* Right tree */}
      <rect x="180" y="95" width="4" height="24" fill="var(--hm-illus-tree-trunk)" />
      <circle cx="182" cy="88" r="12" fill="var(--hm-illus-tree)" />

      {/* Left minaret */}
      <rect x="44" y="52" width="8" height="67" fill="var(--hm-illus-mosque)" />
      <path d="M44 52 a4 4.5 0 0 1 8 0 Z" fill="var(--hm-illus-mosque)" />
      <line x1="48" y1="42" x2="48" y2="52" stroke="var(--hm-illus-mosque)" strokeWidth="2" />
      <circle cx="48" cy="39" r="2.3" fill="var(--hm-illus-mosque)" />

      {/* Right minaret */}
      <rect x="148" y="52" width="8" height="67" fill="var(--hm-illus-mosque)" />
      <path d="M148 52 a4 4.5 0 0 1 8 0 Z" fill="var(--hm-illus-mosque)" />
      <line x1="152" y1="42" x2="152" y2="52" stroke="var(--hm-illus-mosque)" strokeWidth="2" />
      <circle cx="152" cy="39" r="2.3" fill="var(--hm-illus-mosque)" />

      {/* Main building base */}
      <rect x="60" y="82" width="80" height="37" fill="var(--hm-illus-mosque)" />

      {/* Small arched windows flanking the door, for facade texture */}
      <path d="M68 108 V96 a5 5 0 0 1 10 0 V108 Z" fill="var(--hm-illus-door)" opacity="0.7" />
      <path d="M122 108 V96 a5 5 0 0 1 10 0 V108 Z" fill="var(--hm-illus-door)" opacity="0.7" />

      {/* Onion dome — a proper bulb silhouette, not just a rounded hump */}
      <path
        d="M78 80 C78 68 82 56 90 50 C94 47 97 44 100 38 C103 44 106 47 110 50 C118 56 122 68 122 80 Z"
        fill="var(--hm-illus-mosque)"
      />
      <line x1="100" y1="38" x2="100" y2="28" stroke="var(--hm-illus-mosque)" strokeWidth="2" />
      <circle cx="100" cy="25" r="3" fill="var(--hm-illus-mosque)" />

      {/* Central arched doorway, a darker shade for depth against the mosque body */}
      <path d="M92 119 V100 a8 8 0 0 1 16 0 V119 Z" fill="var(--hm-illus-door)" />
    </svg>
  )
}

// The tiles below the hero — same destinations as before, now
// arranged as a grid rather than a table-of-contents list.
const SERVICE_TILES = [
  { to: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { to: '/disciplines', icon: 'disciplines', label: 'Disciplines' },
  { to: '/quiz', icon: 'quiz', label: 'Quiz' },
  { to: '/flashcards', icon: 'flashcards', label: 'Flashcards' },
  { to: '/stories', icon: 'stories', label: 'Stories' },
  { to: '/spaces', icon: 'spaces', label: 'Spaces' },
  { to: '/prayer-times', icon: 'prayerTimes', label: 'Prayer Times' },
  { to: '/calendar', icon: 'calendar', label: 'Calendar' },
]

export default function Home({ user }) {
  const [time, setTime] = useState(new Date())
  const [lat, setLat] = useState(6.5244)
  const [lng, setLng] = useState(3.3792)
  const [tzOffset, setTzOffset] = useState(1)

  // Seconds-precision clock, separate from `time` below (which only
  // ticks every 30s — fine for the greeting/date, far too coarse for
  // a countdown meant to visibly tick down second by second).
  const [nowTick, setNowTick] = useState(new Date())

  // Location name + live prayer times — same geolocation/reverse-
  // geocoding pattern already used on PrayerTimes.jsx, and the same
  // AlAdhan live-times-with-local-fallback pattern, so Home's new
  // prayer countdown card is sourced from the same live data Awqaatu
  // Salaah uses rather than a separately-drifting local calculation.
  const [locationName, setLocationName] = useState('')
  const [locationLoading, setLocationLoading] = useState(true)
  const [apiTimes, setApiTimes] = useState(null)

  const [history, setHistory] = useState([])
  const [statsHistory, setStatsHistory] = useState([])
  const [totalQuizCount, setTotalQuizCount] = useState(0)
  const [levelData, setLevelData] = useState(null)
  const [fullName, setFullName] = useState(null)
  const [statsLoading, setStatsLoading] = useState(true)

  const [continueStories, setContinueStories] = useState([])
  const [continueLoading, setContinueLoading] = useState(true)

  // ── Daily reminder + milestone celebration ──────────────────
  const { visible: reminderVisible, dismiss: dismissReminder } = useDailyReminderVisible()
  const [milestone, setMilestone] = useState(null)

  // ── Shareable streak card ────────────────────────────────────
  // Generated client-side via Canvas (see lib/shareCard.js), no
  // server round-trip and nothing persisted. sharingCard guards
  // against double-taps while the image is being drawn/shared;
  // shareError surfaces the rare failure case (e.g. a browser
  // blocking the download-fallback popup) instead of the button
  // just silently doing nothing.
  const [sharingCard, setSharingCard] = useState(false)
  const [shareError, setShareError] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 30000)
    return () => clearInterval(interval)
  }, [])

  // Dedicated 1-second interval purely for the prayer countdown's
  // seconds display — kept separate from the 30-second `time` tick
  // above so nothing else on the page re-renders 30x more often than
  // it needs to just to support one ticking number.
  useEffect(() => {
    const t = setInterval(() => setNowTick(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLat(pos.coords.latitude)
          setLng(pos.coords.longitude)
          setTzOffset(-new Date().getTimezoneOffset() / 60)
          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`)
            .then(r => r.json())
            .then(data => {
              const city = data.address.city || data.address.town || data.address.village || ''
              const country = data.address.country || ''
              setLocationName(city + (country ? ', ' + country : ''))
            })
            .catch(() => {})
          setLocationLoading(false)
        },
        () => setLocationLoading(false)
      )
    } else {
      setLocationLoading(false)
    }
  }, [])

  // Live prayer times from AlAdhan — refetched whenever the resolved
  // coordinates change, not on every tick. Falls back to nothing
  // special here if it fails: getPrayerStatus's local calculation
  // below is already computed regardless, so apiTimes simply stays
  // null and the countdown card uses that local figure instead —
  // the same graceful-degradation behavior as Awqaatu Salaah.
  useEffect(() => {
    let cancelled = false
    fetchAladhanTimings(new Date(), lat, lng)
      .then(result => { if (!cancelled) setApiTimes(result) })
      .catch(err => {
        console.error('Home: AlAdhan fetch failed, using local calculation:', err)
        if (!cancelled) setApiTimes(null)
      })
    return () => { cancelled = true }
  }, [lat, lng])

  useEffect(() => {
    if (!user) { setStatsLoading(false); return }
    const load = async () => {
      const [countResult, statsResult, recentResult, lvlResult, profileResult] = await Promise.allSettled([
        supabase
          .from('quiz_history')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', user.id),
        supabase
          .from('quiz_history')
          .select('taken_at, percentage')
          .eq('user_id', user.id),
        supabase
          .from('quiz_history')
          .select('*')
          .eq('user_id', user.id)
          .order('taken_at', { ascending: false })
          .limit(4),
        supabase
          .from('user_levels')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle(),
        supabase
          .from('profiles')
          .select('full_name')
          .eq('id', user.id)
          .maybeSingle(),
      ])

      if (countResult.status === 'fulfilled' && !countResult.value.error) {
        setTotalQuizCount(countResult.value.count || 0)
      } else {
        console.error('Failed to load quiz count:', countResult.reason || countResult.value?.error)
      }

      if (statsResult.status === 'fulfilled' && !statsResult.value.error) {
        setStatsHistory(statsResult.value.data || [])
      } else {
        console.error('Failed to load quiz stats history:', statsResult.reason || statsResult.value?.error)
      }

      if (recentResult.status === 'fulfilled' && !recentResult.value.error) {
        setHistory(recentResult.value.data || [])
      } else {
        console.error('Failed to load recent quiz activity:', recentResult.reason || recentResult.value?.error)
      }

      if (lvlResult.status === 'fulfilled' && !lvlResult.value.error) {
        setLevelData(lvlResult.value.data || null)
      } else {
        console.error('Failed to load user level:', lvlResult.reason || lvlResult.value?.error)
      }

      if (profileResult.status === 'fulfilled' && !profileResult.value.error) {
        setFullName(profileResult.value.data?.full_name || null)
      } else {
        console.error('Failed to load profile:', profileResult.reason || profileResult.value?.error)
      }

      setStatsLoading(false)
    }
    load()
  }, [user])

  useEffect(() => {
    if (!user) { setContinueLoading(false); return }
    const loadContinue = async () => {
      try {
        const { data, error } = await supabase
          .from('story_reading_progress')
          .select('story_id, progress_percent, completed, updated_at')
          .eq('user_id', user.id)
          .eq('completed', false)
          .gt('progress_percent', 0)
          .order('updated_at', { ascending: false })
          .limit(3)
        if (error) throw error
        const withStoryData = (data || [])
          .map(row => ({ ...row, story: STORIES.find(s => s.id === row.story_id) }))
          .filter(row => row.story)
        setContinueStories(withStoryData)
      } catch (err) {
        console.error('Failed to load continue-reading stories:', err)
        setContinueStories([])
      } finally {
        setContinueLoading(false)
      }
    }
    loadContinue()
  }, [user])

  // Story-reading, Hifdh, and Exam Prep activity (plus quiz activity
  // below) now come from the shared useStreakActivityDates hook —
  // see the merge below, right where the streak itself is computed.

  const totalQuizzes = totalQuizCount
  const avgScore = statsHistory.length > 0
    ? Math.round(statsHistory.reduce((s, r) => s + r.percentage, 0) / statsHistory.length)
    : 0
  const currentLevel = levelData?.current_level || 'beginner'

  // Every activity source is fetched and merged by the shared hook
  // (lib/streakActivity.js) — Home and the Streak History page both
  // read from this one implementation, so they can never disagree
  // about which days counted.
  const { activeDateStrings } = useStreakActivityDates(user)
  const { streak, activeDates } = computeStreakFromDates(activeDateStrings)
  const firstName = fullName ? fullName.trim().split(/\s+/)[0] : null

  // Fires the milestone celebration overlay whenever the computed
  // streak lands on one of the defined milestone values (see
  // MilestoneCelebration.jsx) — checkStreakMilestone itself dedupes
  // via localStorage so the same milestone doesn't re-fire on every
  // render/reload once it's already been shown.
  useEffect(() => {
    if (statsLoading) return
    const m = checkStreakMilestone(streak)
    if (m) setMilestone(m)
  }, [streak, statsLoading])

  const { currentPrayer, nextPrayer, countdown } = getPrayerStatus(time, lat, lng, tzOffset)
  const primaryContinue = continueStories[0] || null
  const recentQuizzes = history

  // Live-vs-local minutes, same pattern as PrayerTimes.jsx: prefer
  // apiTimes when the fetch has succeeded, fall back to the local
  // astronomical calculation's own currentPrayer/nextPrayer minutes
  // otherwise — never leaves the countdown card with nothing to show.
  const usingLiveApi = !!apiTimes
  const currentWindowMinutes = usingLiveApi
    ? (currentPrayer ? apiTimes[currentPrayer.key] : null)
    : (currentPrayer?.minutes ?? null)
  const nextWindowMinutes = usingLiveApi
    ? apiTimes[nextPrayer.key]
    : nextPrayer?.minutes

  const countdownTarget = buildTargetDate(nowTick, nextWindowMinutes)
  const countdownSeconds = countdownTarget ? Math.round((countdownTarget - nowTick) / 1000) : null
  const windowProgress = getWindowProgress(currentWindowMinutes, nextWindowMinutes, nowTick.getHours() * 60 + nowTick.getMinutes())

  const fastingTip = getFastingTip(time)

  const weekStrip = Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    d.setDate(d.getDate() - (6 - i))
    return {
      label: d.toLocaleDateString('en-US', { weekday: 'narrow' }),
      isToday: i === 6,
      active: activeDates.has(d.toDateString()),
    }
  })

  // Generates the streak card, then hands it to the OS share sheet
  // if the device/browser supports sharing files (navigator.share
  // with a files array — Web Share API Level 2, available on modern
  // mobile Chrome/Safari, which covers the Android TWA wrapper).
  // Falls back to a plain download when file-sharing isn't
  // available, e.g. most desktop browsers, so the feature still
  // works everywhere, just via a different last step.
  const handleShareStreak = async () => {
    if (sharingCard || streak <= 0) return
    setSharingCard(true)
    setShareError(null)
    try {
      const blob = await generateStreakCard(streak)
      const file = new File([blob], 'sual-streak.png', { type: 'image/png' })

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: 'My Sual Streak',
            text: `${streak}-day streak on Sual 🔥`,
          })
        } catch (shareErr) {
          // AbortError just means the user closed the share sheet —
          // not a real failure, nothing to surface for that case.
          if (shareErr?.name !== 'AbortError') throw shareErr
        }
      } else {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'sual-streak.png'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }
    } catch (err) {
      console.error('Failed to generate/share streak card:', err)
      setShareError("Couldn't create your streak image. Please try again.")
    } finally {
      setSharingCard(false)
    }
  }

  return (
    <div className="page-content home-page">
      {/* ── New: location + a prominent Arabic greeting with the
          Hijri date, and a real prayer-window countdown card. Sits
          above the existing hero since it serves a different purpose
          (worship timing, not learning progress) — not a replacement
          for anything below it. ── */}
      <div className="hm-top-row">
        <span className="hm-top-label">Home</span>
        <span className="hm-location-pill">
          <span className="hm-location-pill-icon">{ICONS.locationPin}</span>
          {locationLoading ? 'Detecting…' : (locationName || 'Location unavailable')}
        </span>
      </div>

      <div className="hm-greeting-row">
        <p className="hm-greeting-arabic arabic">السَّلَامُ عَلَيْكُم</p>
        <p className="hm-greeting-hijri">{toHijriString(time)}</p>
      </div>

      {nextPrayer && (
        <div className="hm-prayer-card">
          <div className="hm-prayer-card-top">
            <div className="hm-prayer-card-side">
              <p className="hm-prayer-card-time">{currentWindowMinutes != null ? minutesTo12h(currentWindowMinutes) : '--:--'}</p>
              <p className="hm-prayer-card-name">{currentPrayer ? currentPrayer.en : 'Isha'}</p>
            </div>
            <div className="hm-prayer-card-progress-track">
              <div className="hm-prayer-card-progress-fill" style={{ width: `${windowProgress * 100}%` }} />
            </div>
            <div className="hm-prayer-card-side hm-prayer-card-side--right">
              <p className="hm-prayer-card-time">{nextWindowMinutes != null ? minutesTo12h(nextWindowMinutes) : '--:--'}</p>
              <p className="hm-prayer-card-name">{nextPrayer.en}</p>
            </div>
          </div>

          <p className="hm-prayer-card-countdown">{formatCountdownHMS(countdownSeconds)}</p>

          <div className="hm-prayer-card-illustration">
            <NightMosqueIllustration />
          </div>
        </div>
      )}

      {fastingTip && (
        <div className="hm-tip-card">
          <span className="hm-tip-icon">{ICONS.lantern}</span>
          <p className="hm-tip-text">
            Consider fasting tomorrow. It's <strong>{fastingTip.dayName}</strong> — {fastingTip.blurb}
            <span className="hm-tip-source"> ({fastingTip.source})</span>
          </p>
        </div>
      )}

      <div className="hm-hero">
        <p className="hm-hero-bismillah arabic">بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيم</p>
        <div className="hm-hero-top">
          <span className="hm-hero-greeting">{getGreeting()}{firstName ? `, ${firstName}` : ''}</span>
          {streak > 0 && <span className="hm-hero-streak">{ICONS.flame} {streak}-day streak</span>}
        </div>

        <p className="hm-hero-value">
          {statsLoading ? '—' : currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}
        </p>
        <p className="hm-hero-sub">
          {statsLoading
            ? 'Loading your standing…'
            : totalQuizzes > 0
              ? `${totalQuizzes} ${totalQuizzes === 1 ? 'quiz' : 'quizzes'} taken · ${avgScore}% average`
              : 'No quizzes taken yet'}
        </p>

        <div className="hm-hero-actions">
          <Link to="/quiz" className="hm-hero-btn hm-hero-btn--fill">{ICONS.quiz} Take a Quiz</Link>
          <Link to="/dashboard" className="hm-hero-btn">{ICONS.dashboard} View Progress</Link>
        </div>
      </div>

      <div className="hm-streak">
        <div className="hm-streak-top">
          <span className="hm-streak-flame">{ICONS.flame}</span>
          <div style={{ flex: 1 }}>
            <p className="hm-streak-count">{streak > 0 ? `${streak}-day streak` : 'No streak yet'}</p>
            <p className="hm-streak-sub">
              {streak > 0
                ? 'Come back tomorrow to keep it going.'
                : 'Take a quiz or read a story today to start one.'}
            </p>
          </div>
          {streak > 0 && (
            <button
              onClick={handleShareStreak}
              disabled={sharingCard}
              aria-label="Share your streak"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 14px',
                borderRadius: 999,
                border: '1.5px solid #85CCFF',
                background: 'rgba(133,204,255,0.1)',
                color: '#094570',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: sharingCard ? 'default' : 'pointer',
                opacity: sharingCard ? 0.6 : 1,
                flexShrink: 0,
              }}
            >
              <span style={{ width: 15, height: 15, display: 'flex' }}>{ICONS.share}</span>
              {sharingCard ? 'Preparing…' : 'Share'}
            </button>
          )}
        </div>
        {shareError && (
          <p style={{ fontSize: '0.78rem', color: '#c0392b', margin: '8px 0 0' }}>{shareError}</p>
        )}
        <div className="hm-streak-week">
          {weekStrip.map((d, i) => (
            <div key={i} className="hm-streak-day">
              <span className={`hm-streak-dot ${d.active ? 'hm-streak-dot--active' : ''} ${d.isToday ? 'hm-streak-dot--today' : ''}`} />
              <span className="hm-streak-day-label">{d.label}</span>
            </div>
          ))}
        </div>
        <Link to="/streak-history" className="hm-streak-history-link">View Streak History →</Link>
      </div>

      <div className="hm-section">
        <div className="hm-section-head">
          <p className="hm-section-title">Explore <span className="arabic">اِسْتَكْشِف</span></p>
        </div>
        <div className="hm-tiles">
          {SERVICE_TILES.map(t => (
            <Link key={t.to} to={t.to} className="hm-tile">
              <span className="hm-tile-icon">{ICONS[t.icon]}</span>
              <span className="hm-tile-label">{t.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="hm-standing-grid">
        <div className="hm-standing-card">
          <span className="hm-standing-icon hm-standing-icon--gold">{ICONS.moon}</span>
          <p className="hm-standing-label">Hijri Date</p>
          <p className="hm-standing-value">{toHijriString(time)}</p>
          {nextPrayer && <p className="hm-standing-tag">{nextPrayer.arabic} in {countdown}</p>}
        </div>

        {!continueLoading && primaryContinue ? (
          <Link to="/stories" className="hm-standing-card hm-standing-card--link">
            <span className="hm-standing-icon hm-standing-icon--emerald">{ICONS.book}</span>
            <p className="hm-standing-label">Stories</p>
            <p className="hm-standing-value">Continue with the story of {primaryContinue.story.name}</p>
            <p className="hm-standing-tag hm-standing-tag--emerald">{primaryContinue.progress_percent}% done</p>
          </Link>
        ) : (
          <Link to="/stories" className="hm-standing-card hm-standing-card--link">
            <span className="hm-standing-icon hm-standing-icon--emerald">{ICONS.book}</span>
            <p className="hm-standing-label">Stories of the Salaf</p>
            <p className="hm-standing-value">Start reading</p>
            <p className="hm-standing-tag hm-standing-tag--emerald">The Prophets &amp; the Companions</p>
          </Link>
        )}
      </div>

      {recentQuizzes.length > 0 && (
        <div className="hm-section">
          <div className="hm-section-head">
            <p className="hm-section-title">Recent Activity</p>
            <Link to="/dashboard" className="hm-section-link">View All</Link>
          </div>
          <div className="hm-activity-card">
            {recentQuizzes.map((q, i) => {
              const passed = q.percentage >= 70
              const when = new Date(q.taken_at)
              return (
                <div key={i} className="hm-activity-row">
                  <span className={`hm-activity-badge ${passed ? 'hm-activity-badge--pass' : 'hm-activity-badge--low'}`}>
                    {ICONS.quiz}
                  </span>
                  <span className="hm-activity-text">
                    <span className="hm-activity-name">{disciplineName(q.discipline)}</span>
                    <span className="hm-activity-date">
                      {when.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}, {when.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </span>
                  <span className={`hm-activity-score ${passed ? 'hm-activity-score--pass' : 'hm-activity-score--low'}`}>
                    {q.score}/{q.total}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <Link to="/profile" className="hm-referral">
        <span className="hm-referral-icons">
          <span className="hm-referral-icon hm-referral-icon--lock">{ICONS.unlock}</span>
          <span className="hm-referral-icon hm-referral-icon--coins">{ICONS.coins}</span>
        </span>
        <span className="hm-referral-text">Refer and get free access to Spaces</span>
        <span className="hm-referral-arrow" aria-hidden="true">→</span>
      </Link>

      <Link to="/leaderboard" className="hm-referral">
        <span className="hm-referral-icons">
          <span className="hm-referral-icon hm-referral-icon--single">{ICONS.trophy}</span>
        </span>
        <span className="hm-referral-text">Want to see how you're currently ranking? Check the leaderboard</span>
        <span className="hm-referral-arrow" aria-hidden="true">→</span>
      </Link>

      <SpacesCTA user={user} variant="default" />

      {reminderVisible && <DailyReminder onDismiss={dismissReminder} firstName={firstName} />}
      {milestone && <MilestoneCelebration milestone={milestone} onDismiss={() => setMilestone(null)} />}
    </div>
  )
}
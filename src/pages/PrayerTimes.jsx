import React, { useState, useEffect } from 'react'
import { getPrayerStatus, minutesTo12h, calcIslamicMidnightMinutes, fetchAladhanTimings } from '../lib/prayerTimes.js'
import './PrayerTimes.css'

// Icons matching the reference concept -- cloud (Fajr), a compact
// dotted sun (Dhuhr), an overlapping double-cloud (Asr), a horizon
// bisecting a sun (Maghrib and, reused, Sun Setting), a crescent
// (Isha), a sun with rays reaching upward (Sun Rising), and a
// compact sunburst rosette (zenith/"Top of Head Sun"). Kept as
// simple stroke-based line art, consistent with every other icon
// set in the app, just in the warmer accent tone this concept calls
// for rather than Sual's usual navy/sky-blue for these specific
// glyphs.
const ICONS = {
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 17.5a4 4 0 0 1 .3-8 5 5 0 0 1 9.6-1.6A4.5 4.5 0 0 1 17 17.5H6.5z" />
    </svg>
  ),
  doubleCloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 14a3 3 0 0 1 .3-6 3.8 3.8 0 0 1 7-1.3A3.3 3.3 0 0 1 12 13H4.5z" opacity="0.6" />
      <path d="M8.5 18.5a3.6 3.6 0 0 1 .3-7.2 4.6 4.6 0 0 1 8.7-1.5A4 4 0 0 1 17 18.5H8.5z" />
    </svg>
  ),
  sunDots: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="3" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="21" />
      <line x1="3" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="21" y2="12" />
      <line x1="5.6" y1="5.6" x2="7" y2="7" />
      <line x1="17" y1="17" x2="18.4" y2="18.4" />
      <line x1="5.6" y1="18.4" x2="7" y2="17" />
      <line x1="17" y1="7" x2="18.4" y2="5.6" />
    </svg>
  ),
  horizonSun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="15" x2="21" y2="15" />
      <path d="M6.5 15a5.5 5.5 0 0 1 11 0" />
    </svg>
  ),
  crescent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  sunRising: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="17" x2="21" y2="17" />
      <path d="M6.5 17a5.5 5.5 0 0 1 11 0" />
      <line x1="12" y1="6" x2="12" y2="9" />
      <line x1="6.5" y1="8.5" x2="8.3" y2="10.3" />
      <line x1="17.5" y1="8.5" x2="15.7" y2="10.3" />
    </svg>
  ),
  sunZenith: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3.2" />
      <line x1="12" y1="2.5" x2="12" y2="5.2" />
      <line x1="12" y1="18.8" x2="12" y2="21.5" />
      <line x1="2.5" y1="12" x2="5.2" y2="12" />
      <line x1="18.8" y1="12" x2="21.5" y2="12" />
      <line x1="5.3" y1="5.3" x2="7.2" y2="7.2" />
      <line x1="16.8" y1="16.8" x2="18.7" y2="18.7" />
      <line x1="5.3" y1="18.7" x2="7.2" y2="16.8" />
      <line x1="16.8" y1="7.2" x2="18.7" y2="5.3" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  bellOff: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      <path d="M18.63 13A17.9 17.9 0 0 1 18 8" />
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" />
      <path d="M18 8a6 6 0 0 0-9.33-5" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ),
}

const PRAYER_ICON = { fajr: 'cloud', dhuhr: 'sunDots', asr: 'doubleCloud', maghrib: 'horizonSun', isha: 'crescent' }

// Per-row reminder preference, persisted locally. Same honest scope
// as the previous design's bells: this remembers which rows the user
// WANTS a reminder for, ready for real scheduled notifications once
// that server-side piece exists — it does not fire anything on its
// own. See PrayerTimes.jsx's git history for the fuller explanation
// this scoping note originally came with.
const REMINDER_KEY = 'sual-prayer-reminders'

function loadReminderPrefs() {
  try {
    const raw = localStorage.getItem(REMINDER_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveReminderPrefs(prefs) {
  try {
    localStorage.setItem(REMINDER_KEY, JSON.stringify(prefs))
  } catch {}
}

// Small offsets defining the three classical "forbidden times"
// (awqat al-nahy) relative to the precisely-computed sunrise/Dhuhr/
// Maghrib anchor points. NOTE: unlike the five daily prayers (each
// derived from a specific, well-defined sun-angle calculation),
// there is no single agreed-upon astronomical definition for exactly
// when the sun has "fully risen" or "begins to set" — these three
// durations are reasonable, commonly-cited approximations anchored
// to the precise times already computed, not independently derived
// with the same rigor. Treat them as practically useful, not as
// exact as the five daily prayer times themselves.
const SUNRISE_FORBIDDEN_MINUTES = 15
const ZENITH_FORBIDDEN_MINUTES = 10
const SUNSET_FORBIDDEN_MINUTES = 15

export default function PrayerTimes() {
  const [time, setTime] = useState(new Date())
  const [lat, setLat] = useState(6.5244)
  const [lng, setLng] = useState(3.3792)
  const [tzOffset, setTzOffset] = useState(1)
  const [locationLoading, setLocationLoading] = useState(true)
  const [reminderPrefs, setReminderPrefs] = useState(() => loadReminderPrefs())

  // Live times from AlAdhan (see lib/prayerTimes.js) -- the PRIMARY
  // source once they load. apiError does not mean the page is
  // broken: the local calcPrayerTimes()-based fallback (already
  // computed via getPrayerStatus below regardless) simply takes
  // over, and a status line tells the user which one they're
  // actually looking at rather than presenting an estimate silently
  // as if it were the authoritative live figure.
  const [apiTimes, setApiTimes] = useState(null)
  const [apiLoading, setApiLoading] = useState(true)
  const [apiError, setApiError] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLat(pos.coords.latitude)
          setLng(pos.coords.longitude)
          setTzOffset(-new Date().getTimezoneOffset() / 60)
          setLocationLoading(false)
        },
        () => setLocationLoading(false)
      )
    } else {
      setLocationLoading(false)
    }
    const interval = setInterval(() => setTime(new Date()), 30000)
    return () => clearInterval(interval)
  }, [])

  // Fetches live times whenever the resolved coordinates change --
  // once geolocation settles (either a real position or the Lagos
  // default if permission was denied), not on every 30-second time
  // tick above, since prayer times don't change within a day and
  // refetching that often would just be wasted requests.
  useEffect(() => {
    let cancelled = false
    setApiLoading(true)
    setApiError(null)
    fetchAladhanTimings(new Date(), lat, lng)
      .then(result => { if (!cancelled) setApiTimes(result) })
      .catch(err => {
        console.error('AlAdhan fetch failed, falling back to local calculation:', err)
        if (!cancelled) { setApiError(err.message); setApiTimes(null) }
      })
      .finally(() => { if (!cancelled) setApiLoading(false) })
    return () => { cancelled = true }
  }, [lat, lng])

  // Local astronomical calculation -- always computed regardless of
  // whether the live API succeeded, since it's the fallback the page
  // needs the instant apiTimes is null (either still loading, or the
  // fetch failed). Cheap to compute, so there's no real cost to
  // always having it ready.
  const { prayerMins } = getPrayerStatus(time, lat, lng, tzOffset)
  const localByKey = Object.fromEntries(prayerMins.map(p => [p.key, p]))
  const arabicNameFor = (key) => localByKey[key]?.arabic

  const usingLiveApi = !!apiTimes
  const getMinutes = (key) => usingLiveApi ? apiTimes[key] : localByKey[key]?.minutes

  const toggleReminder = (key) => {
    setReminderPrefs(prev => {
      const next = { ...prev, [key]: !prev[key] }
      saveReminderPrefs(next)
      return next
    })
  }

  // Each salah's displayed window end is the next prayer's start,
  // shown one minute earlier as an exclusive boundary (05:15 AM -
  // 06:30 AM, not 05:15 AM - 06:31 AM overlapping the next row's
  // start) -- a display choice, not a fiqh distinction; the real
  // valid window for each prayer genuinely does run right up to the
  // next prayer's start.
  const minusOne = (m) => (m === null || m === undefined) ? null : m - 1

  const islamicMidnight = usingLiveApi
    ? apiTimes.islamicMidnight
    : calcIslamicMidnightMinutes(time, lat, lng, tzOffset, getMinutes('maghrib'))

  const salahRows = [
    { key: 'fajr',    icon: 'cloud',       name: 'Fajr',    arabic: arabicNameFor('fajr'),    start: getMinutes('fajr'),    end: minusOne(getMinutes('sunrise')) },
    { key: 'dhuhr',   icon: 'sunDots',     name: 'Dhuhr',   arabic: arabicNameFor('dhuhr'),   start: getMinutes('dhuhr'),   end: minusOne(getMinutes('asr')) },
    { key: 'asr',     icon: 'doubleCloud', name: 'Asr',     arabic: arabicNameFor('asr'),     start: getMinutes('asr'),     end: minusOne(getMinutes('maghrib')) },
    { key: 'maghrib', icon: 'horizonSun',  name: 'Maghrib', arabic: arabicNameFor('maghrib'), start: getMinutes('maghrib'), end: minusOne(getMinutes('isha')) },
    { key: 'isha',    icon: 'crescent',    name: 'Isha',    arabic: arabicNameFor('isha'),    start: getMinutes('isha'),    end: islamicMidnight },
  ]

  const forbiddenRows = [
    {
      key: 'sunrise-forbidden',
      icon: 'sunRising',
      name: 'Sun Rising',
      start: getMinutes('sunrise'),
      end: getMinutes('sunrise') != null ? getMinutes('sunrise') + SUNRISE_FORBIDDEN_MINUTES : null,
    },
    {
      key: 'zenith-forbidden',
      icon: 'sunZenith',
      name: 'Top of Head Sun',
      start: getMinutes('dhuhr') != null ? getMinutes('dhuhr') - ZENITH_FORBIDDEN_MINUTES : null,
      end: getMinutes('dhuhr'),
    },
    {
      key: 'sunset-forbidden',
      icon: 'horizonSun',
      name: 'Sun Setting',
      start: getMinutes('maghrib') != null ? getMinutes('maghrib') - SUNSET_FORBIDDEN_MINUTES : null,
      end: getMinutes('maghrib'),
    },
  ]

  const renderRow = (row) => {
    const reminderOn = !!reminderPrefs[row.key]
    return (
      <div key={row.key} className="pt2-row">
        <span className="pt2-row-icon">{ICONS[row.icon]}</span>
        <div className="pt2-row-text">
          <span className="pt2-row-name">{row.name}</span>
          <span className="pt2-row-time">{minutesTo12h(row.start)} - {minutesTo12h(row.end)}</span>
        </div>
        <button
          className={`pt2-row-bell ${reminderOn ? 'pt2-row-bell--on' : ''}`}
          onClick={() => toggleReminder(row.key)}
          aria-label={reminderOn ? `Reminder on for ${row.name}` : `Turn on reminder for ${row.name}`}
        >
          {reminderOn ? ICONS.bell : ICONS.bellOff}
        </button>
      </div>
    )
  }

  return (
    <div className="page-content pt2-page">
      <h1 className="page-title">Awqaatu Salaah</h1>
      <p className="page-subtitle">أَوْقَاتُ الصَّلَاة — When each prayer begins and ends</p>

      {apiLoading || locationLoading ? (
        <p className="pt2-status pt2-status--loading">Fetching live prayer times…</p>
      ) : usingLiveApi ? (
        <p className="pt2-status pt2-status--live">Live times for your location</p>
      ) : (
        <p className="pt2-status pt2-status--fallback">
          Showing estimated times — {apiError ? "couldn't reach the live prayer times service" : 'live service unavailable'}, this device calculated these locally.
        </p>
      )}

      <p className="pt2-section-label">Prayer Times</p>
      <div className="pt2-list">
        {salahRows.map(renderRow)}
      </div>

      <p className="pt2-section-label">Forbidden Prayer Times</p>
      <p className="pt2-section-note">
        Voluntary prayer is disliked during these three windows, per the well-known hadith
        on the times the Prophet ﷺ singled out. The durations below are reasonable estimates
        anchored to the precise sunrise/Dhuhr/Maghrib times above, not independently exact.
      </p>
      <div className="pt2-list">
        {forbiddenRows.map(renderRow)}
      </div>
    </div>
  )
}
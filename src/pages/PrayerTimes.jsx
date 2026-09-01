import React, { useState, useEffect, useRef } from 'react'
import { toHijriString } from '../lib/hijri.js'
import { getPrayerStatus } from '../lib/prayerTimes.js'
import './PrayerTimes.css'

const ICONS = {
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  ),
  fajr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a5 5 0 1 0 5 5c0-.3 0-.6-.1-.9A5 5 0 0 1 12 3z" />
      <line x1="4" y1="19" x2="20" y2="19" />
    </svg>
  ),
  sunrise: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 18a5 5 0 0 0-10 0" />
      <line x1="12" y1="9" x2="12" y2="2" />
      <line x1="4.2" y1="10.2" x2="5.6" y2="11.6" />
      <line x1="19.8" y1="10.2" x2="18.4" y2="11.6" />
      <line x1="1" y1="18" x2="23" y2="18" />
      <polyline points="8 6 12 2 16 6" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
      <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
      <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
    </svg>
  ),
  sunset: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 18a5 5 0 0 0-10 0" />
      <line x1="12" y1="9" x2="12" y2="2" />
      <line x1="4.2" y1="10.2" x2="5.6" y2="11.6" />
      <line x1="19.8" y1="10.2" x2="18.4" y2="11.6" />
      <line x1="1" y1="18" x2="23" y2="18" />
      <polyline points="16 6 12 2 8 6" />
    </svg>
  ),
  isha: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      <path d="M19 3v4M17 5h4" />
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
  moonStar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      <path d="M18 3v3M16.5 4.5h3" />
    </svg>
  ),
}

const PRAYER_ICON = {
  fajr: 'fajr',
  sunrise: 'sunrise',
  dhuhr: 'sun',
  asr: 'sun',
  maghrib: 'sunset',
  isha: 'isha',
}

// Per-prayer reminder preference, persisted locally. NOTE: this is
// deliberately scoped as a stored PREFERENCE only, not a real
// scheduled notification. The existing push system
// (lib/pushNotifications.js) is a single daily on/off subscription —
// there is no backend today that fires a notification at a specific
// prayer's exact clock time, which would need per-user, per-
// timezone, per-prayer server-side scheduling (a real, separate
// feature). The bell toggles below just remember which prayers the
// user WANTS reminders for, ready to be picked up once that
// scheduling actually exists — it does not fire anything on its own.
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

// How far through the current prayer's "window" (from when it began
// until the next prayer begins) the current moment sits, as a
// 0–1 fraction — drawn as the filled arc on the ring. Handles the
// midnight wraparound (e.g. the window from Isha through to the next
// day's Fajr) by shifting everything into a common, always-increasing
// timeline before dividing.
function getWindowProgress(currentPrayer, nextPrayer, nowMin) {
  if (!nextPrayer) return 0
  let start = currentPrayer ? currentPrayer.minutes : 0
  let end = nextPrayer.minutes
  if (end <= start) end += 24 * 60
  let now = nowMin
  if (now < start) now += 24 * 60
  const total = end - start
  if (total <= 0) return 0
  return Math.min(1, Math.max(0, (now - start) / total))
}

// Standard, widely-recognized Islamic calendar occasions, given by
// their Hijri date since this file has no confirmed way to convert
// a Hijri date to this particular year's Gregorian equivalent (only
// the reverse direction, Gregorian -> Hijri, is available via
// toHijriString).
//
// Deliberately excluded, per Sual's Sunnah-focused editorial stance:
// Mawlid al-Nabi (12 Rabi al-Awwal), Isra and Mi'raj (27 Rajab), and
// Nisf Sha'ban (15 Sha'ban) — observances some scholars consider
// lacking sufficiently authenticated basis. This is a deliberate
// content decision, not an oversight; do not re-add these without
// the same editorial review the rest of Sual's fiqh content goes
// through.
const ISLAMIC_DAYS = [
  { hijri: '1 Muharram', name: 'Islamic New Year', arabic: 'رَأْس السَّنَة الهِجْرِيَّة', note: 'Marks the start of the Hijri year.' },
  { hijri: '10 Muharram', name: 'Day of Ashura', arabic: 'يَوْم عَاشُورَاء', note: 'A recommended day of fasting.' },
  { hijri: '1 Ramadan', name: 'Start of Ramadan', arabic: 'بِدَايَة رَمَضَان', note: 'The month of obligatory fasting begins.' },
  { hijri: 'Last 10 nights of Ramadan', name: 'Laylatul Qadr', arabic: 'لَيْلَة القَدْر', note: 'The Night of Decree, sought especially on the odd nights.' },
  { hijri: '1 Shawwal', name: 'Eid al-Fitr', arabic: 'عِيد الفِطْر', note: 'Marks the end of Ramadan.' },
  { hijri: '9 Dhul-Hijjah', name: 'Day of Arafah', arabic: 'يَوْم عَرَفَة', note: 'A recommended day of fasting for those not performing Hajj.' },
  { hijri: '10 Dhul-Hijjah', name: 'Eid al-Adha', arabic: 'عِيد الأَضْحَى', note: 'Marks the culmination of the Hajj season.' },
]

export default function PrayerTimes() {
  const [activeTab, setActiveTab] = useState('prayer') // 'prayer' | 'days'
  const [time, setTime] = useState(new Date())
  const [lat, setLat] = useState(6.5244)
  const [lng, setLng] = useState(3.3792)
  const [tzOffset, setTzOffset] = useState(1)
  const [locationName, setLocationName] = useState('Lagos, Nigeria')
  const [locationLoading, setLocationLoading] = useState(true)
  const [reminderPrefs, setReminderPrefs] = useState(() => loadReminderPrefs())

  // Live current temperature via Open-Meteo (free, keyless, current
  // as of this writing). NOTE: Open-Meteo's no-key tier is licensed
  // for non-commercial use with CC BY 4.0 attribution (shown below,
  // same spirit as the Apple Weather attribution in the reference
  // design) — worth a conscious decision on whether Sual's use of
  // this specific free feature qualifies, given Spaces is a paid
  // product elsewhere in the app, rather than assuming it's covered.
  const [temperature, setTemperature] = useState(null)
  const [weatherLoading, setWeatherLoading] = useState(true)

  const intervalRef = useRef(null)

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

    intervalRef.current = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(intervalRef.current)
  }, [])

  // Fetches current temperature once real coordinates are known
  // (either the geolocation-resolved lat/lng, or the Lagos default
  // if permission was denied — a default location still deserves a
  // real, matching temperature rather than showing nothing).
  useEffect(() => {
    setWeatherLoading(true)
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m`)
      .then(r => r.json())
      .then(data => {
        const t = data?.current?.temperature_2m
        setTemperature(typeof t === 'number' ? Math.round(t) : null)
      })
      .catch(() => setTemperature(null))
      .finally(() => setWeatherLoading(false))
  }, [lat, lng])

  const { prayerMins, currentPrayer, nextPrayer, countdown } = getPrayerStatus(time, lat, lng, tzOffset)
  const nowMin = time.getHours() * 60 + time.getMinutes()
  const progress = getWindowProgress(currentPrayer, nextPrayer, nowMin)

  const toggleReminder = (key) => {
    setReminderPrefs(prev => {
      const next = { ...prev, [key]: !prev[key] }
      saveReminderPrefs(next)
      return next
    })
  }

  const gregorianDate = time.toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'short', year: 'numeric',
  })

  const RING_SIZE = 220
  const RING_STROKE = 12
  const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2
  const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

  return (
    <div className="page-content pt-page">
      <h1 className="pt-sr-only">Prayer Times</h1>

      <div className="pt-tabs" role="tablist">
        <span className={`pt-tabs-indicator ${activeTab === 'days' ? 'pt-tabs-indicator--right' : ''}`} aria-hidden="true" />
        <button
          role="tab"
          aria-selected={activeTab === 'prayer'}
          className={`pt-tab ${activeTab === 'prayer' ? 'pt-tab--active' : ''}`}
          onClick={() => setActiveTab('prayer')}
        >
          Prayer Time
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'days'}
          className={`pt-tab ${activeTab === 'days' ? 'pt-tab--active' : ''}`}
          onClick={() => setActiveTab('days')}
        >
          Islamic Days
        </button>
      </div>

      {activeTab === 'prayer' ? (
        <>
          <div className="pt-location-row">
            <span className="pt-location-icon">{ICONS.location}</span>
            <span className="pt-location-text">{locationLoading ? 'Detecting…' : locationName}</span>
            {!weatherLoading && temperature !== null && (
              <span className="pt-location-temp">{temperature}°C</span>
            )}
          </div>

          {nextPrayer && (
            <div className="pt-ring-wrap">
              <button
                className={`pt-ring-bell ${reminderPrefs[nextPrayer.key] ? 'pt-ring-bell--on' : ''}`}
                onClick={() => toggleReminder(nextPrayer.key)}
                aria-label={reminderPrefs[nextPrayer.key] ? `Reminder on for ${nextPrayer.en}` : `Turn on reminder for ${nextPrayer.en}`}
              >
                {reminderPrefs[nextPrayer.key] ? ICONS.bell : ICONS.bellOff}
              </button>

              <svg className="pt-ring" viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}>
                <defs>
                  <linearGradient id="pt-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#094570" />
                    <stop offset="100%" stopColor="#85CCFF" />
                  </linearGradient>
                </defs>
                <circle
                  className="pt-ring-track"
                  cx={RING_SIZE / 2}
                  cy={RING_SIZE / 2}
                  r={RING_RADIUS}
                  strokeWidth={RING_STROKE}
                />
                <circle
                  className="pt-ring-progress"
                  cx={RING_SIZE / 2}
                  cy={RING_SIZE / 2}
                  r={RING_RADIUS}
                  strokeWidth={RING_STROKE}
                  strokeDasharray={RING_CIRCUMFERENCE}
                  strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
                />
              </svg>

              <div className="pt-ring-center">
                <p className="pt-ring-label">Time left for prayer</p>
                <p className="pt-ring-prayer">{nextPrayer.en}</p>
                <p className="pt-ring-countdown">{countdown}</p>
              </div>
            </div>
          )}

          <p className="pt-date-row">
            {gregorianDate} <span className="pt-date-sep">•</span> <span className="arabic">{toHijriString(time)}</span>
          </p>

          <div className="pt-prayer-list">
            {prayerMins.map(p => {
              const isActive = currentPrayer?.key === p.key
              const isNext   = nextPrayer?.key === p.key
              const iconKey  = PRAYER_ICON[p.en?.toLowerCase()] || 'sun'
              const reminderOn = !!reminderPrefs[p.key]
              return (
                <div key={p.key} className={`pt-prayer-row ${isActive ? 'pt-prayer-row--active' : ''}`}>
                  <span className="pt-prayer-icon">{ICONS[iconKey]}</span>
                  <div className="pt-prayer-names">
                    <span className="pt-prayer-en">{p.en}</span>
                    <span className="pt-prayer-arabic arabic">{p.arabic}</span>
                  </div>
                  <div className="pt-prayer-right">
                    {isActive && <span className="pt-badge pt-badge--now">Now</span>}
                    {isNext && !isActive && <span className="pt-badge pt-badge--next">Next</span>}
                    <span className="pt-prayer-time">{p.timeStr}</span>
                    <button
                      className={`pt-prayer-bell ${reminderOn ? 'pt-prayer-bell--on' : ''}`}
                      onClick={() => toggleReminder(p.key)}
                      aria-label={reminderOn ? `Reminder on for ${p.en}` : `Turn on reminder for ${p.en}`}
                    >
                      {reminderOn ? ICONS.bell : ICONS.bellOff}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {!weatherLoading && temperature !== null && (
            <p className="pt-weather-attribution">
              Weather data by <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo.com</a> (CC BY 4.0)
            </p>
          )}
        </>
      ) : (
        <div className="pt-days-list">
          {ISLAMIC_DAYS.map((d, i) => (
            <div key={i} className="pt-day-row">
              <span className="pt-day-icon">{ICONS.moonStar}</span>
              <div className="pt-day-text">
                <div className="pt-day-top">
                  <span className="pt-day-name">{d.name}</span>
                  <span className="pt-day-hijri">{d.hijri}</span>
                </div>
                <span className="pt-day-arabic arabic">{d.arabic}</span>
                <p className="pt-day-note">{d.note}</p>
              </div>
            </div>
          ))}
          <p className="pt-days-footnote">
            Dates are given in the Hijri calendar and recur annually. Gregorian-equivalent
            dates for the current year aren't shown yet.
          </p>
        </div>
      )}
    </div>
  )
}
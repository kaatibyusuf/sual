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
}

const PRAYER_ICON = {
  fajr: 'fajr',
  sunrise: 'sunrise',
  dhuhr: 'sun',
  asr: 'sun',
  maghrib: 'sunset',
  isha: 'isha',
}

export default function PrayerTimes() {
  const [time, setTime] = useState(new Date())
  const [lat, setLat] = useState(6.5244)
  const [lng, setLng] = useState(3.3792)
  const [tzOffset, setTzOffset] = useState(1)
  const [locationName, setLocationName] = useState('Lagos, Nigeria')
  const [locationLoading, setLocationLoading] = useState(true)
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

  const { prayerMins, currentPrayer, nextPrayer, countdown } = getPrayerStatus(time, lat, lng, tzOffset)

  // The hero leads with whichever prayer window we're currently in
  // (falling back to the next one if, e.g., it's the small window
  // before Fajr with nothing yet "current") — same information the
  // reference design leads with, rather than a live ticking clock.
  const focusPrayer = currentPrayer || nextPrayer

  return (
    <div className="page-content pt-page">
      <h1 className="pt-sr-only">Prayer Times</h1>

      <div className="pt-hero">
        <div className="pt-hero-top">
          <span className="pt-hero-location">
            <span className="pt-hero-location-icon">{ICONS.location}</span>
            {locationLoading ? 'Detecting…' : locationName}
          </span>
        </div>

        {focusPrayer && (
          <>
            <p className="pt-hero-prayer-name arabic">{focusPrayer.arabic}</p>
            <p className="pt-hero-prayer-en">{focusPrayer.en}</p>
            <p className="pt-hero-time">{focusPrayer.timeStr}</p>
          </>
        )}

        {nextPrayer && (
          <p className="pt-hero-countdown">
            Next prayer <span className="arabic">{nextPrayer.arabic}</span> in <span className="pt-hero-countdown-value">{countdown}</span>
          </p>
        )}
      </div>

      <div className="pt-panel">
        <p className="pt-panel-hijri arabic">{toHijriString(time)}</p>

        <div className="pt-prayer-list">
          {prayerMins.map(p => {
            const isActive = currentPrayer?.key === p.key
            const isNext   = nextPrayer?.key === p.key
            const iconKey  = PRAYER_ICON[p.en?.toLowerCase()] || 'sun'
            return (
              <div key={p.key} className={`pt-prayer-row ${isActive ? 'pt-prayer-row--active' : ''}`}>
                <span className="pt-prayer-icon">{ICONS[iconKey]}</span>
                <div className="pt-prayer-names">
                  <span className="pt-prayer-arabic arabic">{p.arabic}</span>
                  <span className="pt-prayer-en">{p.en}</span>
                </div>
                <div className="pt-prayer-right">
                  {isActive && <span className="pt-badge pt-badge--now">Now</span>}
                  {isNext && !isActive && <span className="pt-badge pt-badge--next">Next</span>}
                  <span className="pt-prayer-time">{p.timeStr}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
import React, { useState, useEffect, useRef } from 'react'
import { toHijriString } from '../lib/hijri.js'
import { getPrayerStatus } from '../lib/prayerTimes.js'
import './PrayerTimes.css'

export default function PrayerTimes() {
  const [time, setTime] = useState(new Date())
  const [lat, setLat] = useState(6.5244)
  const [lng, setLng] = useState(3.3792)
  const [tzOffset, setTzOffset] = useState(1)
  const [locationName, setLocationName] = useState('Lagos, Nigeria')
  const [locationLoading, setLocationLoading] = useState(true)
  const clockDrawn = useRef(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    // Get user location
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
          clockDrawn.current = false
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

  const h = time.getHours()
  const m = time.getMinutes()
  const s = time.getSeconds()
  const secDeg  = s * 6
  const minDeg  = m * 6 + s * 0.1
  const hourDeg = (h % 12) * 30 + m * 0.5

  function handCoords(deg, length) {
    const rad = (deg - 90) * Math.PI / 180
    return { x: 150 + length * Math.cos(rad), y: 150 + length * Math.sin(rad) }
  }

  const hourHand   = handCoords(hourDeg, 70)
  const minuteHand = handCoords(minDeg, 95)
  const secondHand = handCoords(secDeg, 105)

  const colors = ['#85CCFF','#ffd700','#7ecfff','#85CCFF','#ff9f43','#c8a2ff']

  return (
    <div className="page-content pt-page">
      <h1 className="page-title">Prayer Times</h1>
      <p className="page-subtitle">مَوَاقِيتُ الصَّلَاة — {locationName}</p>

      {locationLoading && (
        <div className="pt-location-banner">
          🌍 Detecting your location...
        </div>
      )}

      <div className="pt-wrapper">
        {/* Clock */}
        <div className="pt-clock-wrapper">
          <div className="pt-clock-face">
            <svg viewBox="0 0 300 300" className="pt-clock-svg">
              <circle cx="150" cy="150" r="145" fill="none" stroke="#094570" strokeWidth="3" opacity="0.2"/>
              <circle cx="150" cy="150" r="135" fill="rgba(9,69,112,0.04)" stroke="#094570" strokeWidth="1.5" opacity="0.3"/>

              {/* Hour markers */}
              {Array.from({length:12}).map((_,i) => {
                const angle=(i*30-90)*Math.PI/180
                const r=125
                return (
                  <line key={i}
                    x1={150+(r-8)*Math.cos(angle)} y1={150+(r-8)*Math.sin(angle)}
                    x2={150+r*Math.cos(angle)}     y2={150+r*Math.sin(angle)}
                    stroke="rgba(133,204,255,0.4)" strokeWidth={i%3===0?2.5:1}
                  />
                )
              })}

              {/* Prayer dots and labels */}
              {prayerMins.map((p, i) => {
                if (p.minutes === null) return null
                const angle = (p.minutes/(12*60))*360-90
                const rad = angle*Math.PI/180
                const r = 125
                const dx = 150+r*Math.cos(rad)
                const dy = 150+r*Math.sin(rad)
                const lx = 150+(r-26)*Math.cos(rad)
                const ly = 150+(r-26)*Math.sin(rad)
                return (
                  <g key={p.key}>
                    <circle cx={dx} cy={dy} r="4" fill={colors[i]} opacity="0.9"/>
                    <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle"
                      fontFamily="Amiri,serif" fontSize="10" fill={colors[i]} opacity="0.9">
                      {p.arabic}
                    </text>
                  </g>
                )
              })}

              {/* Hands */}
              <line x1="150" y1="150" x2={hourHand.x}   y2={hourHand.y}   stroke="#094570" strokeWidth="5" strokeLinecap="round"/>
              <line x1="150" y1="150" x2={minuteHand.x} y2={minuteHand.y} stroke="#1a6fa8" strokeWidth="3" strokeLinecap="round"/>
              <line x1="150" y1="150" x2={secondHand.x} y2={secondHand.y} stroke="#85CCFF" strokeWidth="1.5" strokeLinecap="round"/>

              {/* Center */}
              <circle cx="150" cy="150" r="6" fill="#094570"/>
              <circle cx="150" cy="150" r="3" fill="#85CCFF"/>
            </svg>
          </div>
        </div>

        {/* Panel */}
        <div className="pt-panel">
          {/* Time display */}
          <div className="pt-time-display">
            <div className="pt-time">
              {String(h).padStart(2,'0')}:{String(m).padStart(2,'0')}:{String(s).padStart(2,'0')}
            </div>
            <div className="pt-date">
              {time.toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}
            </div>
            <div className="pt-hijri arabic">{toHijriString(time)}</div>
          </div>

          {/* Next prayer */}
          {nextPrayer && (
            <div className="pt-next">
              <div className="pt-next-label">Next Prayer</div>
              <div className="pt-next-name arabic">{nextPrayer.arabic}</div>
              <div className="pt-next-countdown">in {countdown}</div>
            </div>
          )}

          {/* Prayer list */}
          <div className="pt-prayer-list">
            {prayerMins.map(p => {
              const isActive = currentPrayer?.key === p.key
              const isNext   = nextPrayer?.key === p.key
              return (
                <div key={p.key} className={`pt-prayer-row ${isActive?'pt-prayer-row--active':''} ${isNext&&!isActive?'pt-prayer-row--next':''}`}>
                  <div>
                    <div className="pt-prayer-arabic arabic">{p.arabic}</div>
                    <div className="pt-prayer-en">{p.en}</div>
                  </div>
                  <div className="pt-prayer-right">
                    {isActive && <span className="pt-badge pt-badge--now">Now</span>}
                    {isNext && !isActive && <span className="pt-badge pt-badge--next">Next</span>}
                    <div className="pt-prayer-time">{p.timeStr}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
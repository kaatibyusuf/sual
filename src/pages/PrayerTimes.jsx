import React, { useState, useEffect, useRef } from 'react'
import './PrayerTimes.css'

const PRAYERS = [
  { key: 'fajr',    arabic: 'الفَجْر',   en: 'Fajr'    },
  { key: 'sunrise', arabic: 'الشُّرُوق', en: 'Sunrise'  },
  { key: 'dhuhr',   arabic: 'الظُّهْر',  en: 'Dhuhr'   },
  { key: 'asr',     arabic: 'العَصْر',   en: 'Asr'     },
  { key: 'maghrib', arabic: 'المَغْرِب', en: 'Maghrib'  },
  { key: 'isha',    arabic: 'العِشَاء',  en: 'Isha'    },
]

const HIJRI_MONTHS = [
  'مُحَرَّم','صَفَر','رَبِيعُ الأَوَّل','رَبِيعُ الآخِر',
  'جُمَادَى الأُولَى','جُمَادَى الآخِرَة','رَجَب','شَعْبَان',
  'رَمَضَان','شَوَّال','ذُو القَعْدَة','ذُو الحِجَّة',
]

function toHijri(date) {
  const HIJRI_EPOCH = 1948439.5
  const GREG_EPOCH  = 1721425.5
  function leapGreg(y) { return (y%4===0)&&(!(y%100===0)||(y%400===0)) }
  function gregToJD(y,m,d) {
    return GREG_EPOCH-1+365*(y-1)+Math.floor((y-1)/4)-Math.floor((y-1)/100)+Math.floor((y-1)/400)+
      Math.floor((367*m-362)/12+(m<=2?0:leapGreg(y)?-1:-2)+d)
  }
  function hijriToJD(hy,hm,hd) {
    return hd+Math.ceil(29.5*(hm-1))+(hy-1)*354+Math.floor((3+11*hy)/30)+HIJRI_EPOCH-1
  }
  function jdToHijri(jd) {
    jd=Math.floor(jd)+0.5
    const year=Math.floor((30*(jd-HIJRI_EPOCH)+10646)/10631)
    const month=Math.min(12,Math.ceil((jd-(29+hijriToJD(year,1,1)))/29.5)+1)
    const day=jd-hijriToJD(year,month,1)+1
    return {year,month,day:Math.floor(day)}
  }
  const jd=gregToJD(date.getFullYear(),date.getMonth()+1,date.getDate())
  const h=jdToHijri(jd)
  return `${h.day} ${HIJRI_MONTHS[h.month-1]} ${h.year} هـ`
}

function calcPrayerTimes(date, lat, lng, tzOffset) {
  const D2R = Math.PI/180
  const R2D = 180/Math.PI
  const year=date.getFullYear(), month=date.getMonth()+1, day=date.getDate()
  const JD=Math.floor(365.25*(year+4716))+Math.floor(30.6001*(month+1))+day-1524.5
  const T=(JD-2451545)/36525
  const L0=280.46646+36000.76983*T
  const M=(357.52911+35999.05029*T)*D2R
  const C=(1.914602-0.004817*T)*Math.sin(M)+0.019993*Math.sin(2*M)
  const sunLon=(L0+C)*D2R
  const obliq=(23.439291-0.013004*T)*D2R
  const RA=Math.atan2(Math.cos(obliq)*Math.sin(sunLon),Math.cos(sunLon))*R2D
  const decl=Math.asin(Math.sin(obliq)*Math.sin(sunLon))
  const eqTime=(L0-0.0057183-RA)*4
  const noon=12-eqTime/60-lng/15+tzOffset

  function hourAngle(angle) {
    const cosH=(Math.sin(angle*D2R)-Math.sin(lat*D2R)*Math.sin(decl))/(Math.cos(lat*D2R)*Math.cos(decl))
    if(Math.abs(cosH)>1) return null
    return Math.acos(cosH)*R2D/15
  }

  const fajrH=hourAngle(-18)
  const sunriseH=hourAngle(-0.833)
  const maghribH=hourAngle(-0.833)
  const ishaH=hourAngle(-17)
  const asrElevation=Math.atan(1/(1+Math.tan(Math.abs(lat*D2R-decl))))*R2D
  const cosAsrH=(Math.sin(asrElevation*D2R)-Math.sin(lat*D2R)*Math.sin(decl))/(Math.cos(lat*D2R)*Math.cos(decl))
  const asrH=Math.abs(cosAsrH)<=1?Math.acos(cosAsrH)*R2D/15:null

  return {
    fajr:    fajrH    ? noon-fajrH    : null,
    sunrise: sunriseH ? noon-sunriseH : null,
    dhuhr:   noon+0.033,
    asr:     asrH     ? noon+asrH     : null,
    maghrib: maghribH ? noon+maghribH : null,
    isha:    ishaH    ? noon+ishaH    : null,
  }
}

function decimalToTime(dec) {
  if(dec===null) return '--:--'
  let totalMins=Math.round(dec*60)
  totalMins=((totalMins%(24*60))+24*60)%(24*60)
  const h=Math.floor(totalMins/60), m=totalMins%60
  return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')
}

function decimalToMinutes(dec) {
  if(dec===null) return null
  let mins=Math.round(dec*60)
  return ((mins%(24*60))+24*60)%(24*60)
}

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

  const pTimes = calcPrayerTimes(time, lat, lng, tzOffset)
  const nowMin = time.getHours() * 60 + time.getMinutes()

  const prayerMins = PRAYERS.map(p => ({
    ...p,
    minutes: decimalToMinutes(pTimes[p.key]),
    timeStr: decimalToTime(pTimes[p.key]),
  }))

  let currentPrayer = null
  let nextPrayer = null
  let nextMin = Infinity

  prayerMins.forEach(p => {
    if (p.minutes === null) return
    if (p.minutes <= nowMin) currentPrayer = p
    if (p.minutes > nowMin && p.minutes < nextMin) {
      nextMin = p.minutes
      nextPrayer = p
    }
  })

  if (!nextPrayer) nextPrayer = prayerMins[0]

  let countdown = ''
  if (nextPrayer?.minutes !== null) {
    let diff = nextPrayer.minutes - nowMin
    if (diff < 0) diff += 24 * 60
    const ch = Math.floor(diff / 60)
    const cm = diff % 60
    countdown = `${ch}h ${String(cm).padStart(2, '0')}m`
  }

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
            <div className="pt-hijri arabic">{toHijri(time)}</div>
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
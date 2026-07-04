// Shared prayer time calculation logic.
// Previously lived only inside PrayerTimes.jsx — extracted so Home.jsx
// can show a "next prayer" strip without duplicating this math a third time.

export const PRAYERS = [
  { key: 'fajr',    arabic: 'الفَجْر',   en: 'Fajr'    },
  { key: 'sunrise', arabic: 'الشُّرُوق', en: 'Sunrise'  },
  { key: 'dhuhr',   arabic: 'الظُّهْر',  en: 'Dhuhr'   },
  { key: 'asr',     arabic: 'العَصْر',   en: 'Asr'     },
  { key: 'maghrib', arabic: 'المَغْرِب', en: 'Maghrib'  },
  { key: 'isha',    arabic: 'العِشَاء',  en: 'Isha'    },
]

export function calcPrayerTimes(date, lat, lng, tzOffset) {
  const D2R = Math.PI / 180
  const R2D = 180 / Math.PI
  const year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate()
  const JD = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day - 1524.5
  const T = (JD - 2451545) / 36525
  const L0 = 280.46646 + 36000.76983 * T
  const M = (357.52911 + 35999.05029 * T) * D2R
  const C = (1.914602 - 0.004817 * T) * Math.sin(M) + 0.019993 * Math.sin(2 * M)
  const sunLon = (L0 + C) * D2R
  const obliq = (23.439291 - 0.013004 * T) * D2R
  const RA = Math.atan2(Math.cos(obliq) * Math.sin(sunLon), Math.cos(sunLon)) * R2D
  const decl = Math.asin(Math.sin(obliq) * Math.sin(sunLon))
  const eqTime = (L0 - 0.0057183 - RA) * 4
  const noon = 12 - eqTime / 60 - lng / 15 + tzOffset

  function hourAngle(angle) {
    const cosH = (Math.sin(angle * D2R) - Math.sin(lat * D2R) * Math.sin(decl)) / (Math.cos(lat * D2R) * Math.cos(decl))
    if (Math.abs(cosH) > 1) return null
    return Math.acos(cosH) * R2D / 15
  }

  const fajrH = hourAngle(-18)
  const sunriseH = hourAngle(-0.833)
  const maghribH = hourAngle(-0.833)
  const ishaH = hourAngle(-17)
  const asrElevation = Math.atan(1 / (1 + Math.tan(Math.abs(lat * D2R - decl)))) * R2D
  const cosAsrH = (Math.sin(asrElevation * D2R) - Math.sin(lat * D2R) * Math.sin(decl)) / (Math.cos(lat * D2R) * Math.cos(decl))
  const asrH = Math.abs(cosAsrH) <= 1 ? Math.acos(cosAsrH) * R2D / 15 : null

  return {
    fajr:    fajrH    ? noon - fajrH    : null,
    sunrise: sunriseH ? noon - sunriseH : null,
    dhuhr:   noon + 0.033,
    asr:     asrH     ? noon + asrH     : null,
    maghrib: maghribH ? noon + maghribH : null,
    isha:    ishaH    ? noon + ishaH    : null,
  }
}

export function decimalToTime(dec) {
  if (dec === null) return '--:--'
  let totalMins = Math.round(dec * 60)
  totalMins = ((totalMins % (24 * 60)) + 24 * 60) % (24 * 60)
  const h = Math.floor(totalMins / 60), m = totalMins % 60
  return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0')
}

export function decimalToMinutes(dec) {
  if (dec === null) return null
  let mins = Math.round(dec * 60)
  return ((mins % (24 * 60)) + 24 * 60) % (24 * 60)
}

// Returns { currentPrayer, nextPrayer, countdown } for a given moment.
// Used by both PrayerTimes.jsx (full page) and Home.jsx (summary strip).
export function getPrayerStatus(date, lat, lng, tzOffset) {
  const pTimes = calcPrayerTimes(date, lat, lng, tzOffset)
  const nowMin = date.getHours() * 60 + date.getMinutes()

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

  return { prayerMins, currentPrayer, nextPrayer, countdown }
}
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

// Formats a total-minutes-since-midnight value as 12-hour clock time
// with AM/PM, e.g. 315 -> "05:15 AM". Distinct from decimalToTime
// above (which stays 24-hour, used by getPrayerStatus's own internal
// countdown math) since Awqaatu Salaah's list display specifically
// wants 12-hour formatting to match how prayer times are
// conventionally shown.
export function minutesTo12h(totalMinutes) {
  if (totalMinutes === null || totalMinutes === undefined) return '--:--'
  const wrapped = ((Math.round(totalMinutes) % 1440) + 1440) % 1440
  let h = Math.floor(wrapped / 60)
  const m = wrapped % 60
  const period = h >= 12 ? 'PM' : 'AM'
  h = h % 12
  if (h === 0) h = 12
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} ${period}`
}

// Islamic midnight (nisf al-layl) — the midpoint between today's
// Maghrib and the FOLLOWING day's Fajr. Used as Isha's conventional
// "on time" window end in common fiqh practice: Isha remains valid
// later than this for some scholars, but praying it this late is
// generally discouraged, and this midpoint is the widely-used
// practical convention for where to draw that line. This is NOT a
// fixed clock time — it shifts slightly day to day and season to
// season along with the other five prayer times themselves, which
// is why it's computed here rather than hardcoded as a flat "00:00".
export function calcIslamicMidnightMinutes(date, lat, lng, tzOffset, todayMaghribMinutes) {
  if (todayMaghribMinutes === null || todayMaghribMinutes === undefined) return null
  const nextDay = new Date(date)
  nextDay.setDate(nextDay.getDate() + 1)
  const nextDayTimes = calcPrayerTimes(nextDay, lat, lng, tzOffset)
  const nextFajrMinutes = decimalToMinutes(nextDayTimes.fajr)
  if (nextFajrMinutes === null) return null
  // nextFajrMinutes is on the FOLLOWING calendar day, so add a full
  // day's minutes before averaging, then wrap back into 0-1439 for
  // display.
  const midpoint = (todayMaghribMinutes + (nextFajrMinutes + 1440)) / 2
  return midpoint >= 1440 ? midpoint - 1440 : midpoint
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

// ============================================================
// Live prayer times via the AlAdhan API (aladhan.com) — free,
// keyless, widely used, and computed using named, recognized
// calculation conventions rather than a single hand-rolled formula
// like calcPrayerTimes() above. Used as the PRIMARY source in
// PrayerTimes.jsx; calcPrayerTimes() remains as a fallback if this
// request fails for any reason (offline, the API being down, a CORS
// issue) — the page should degrade to "less authoritative but still
// working," never to fully broken.
//
// METHOD DEFAULT: 5 (Egyptian General Authority of Survey) — a
// commonly used convention across Africa and the Middle East. This
// is a genuine, consequential fiqh decision, not just a technical
// default: different calculation methods can shift Fajr/Isha by
// several minutes. Confirm this is the right choice for Sual's
// audience before treating it as final; a user-facing method picker
// is a reasonable next step if one fixed default isn't the right
// long-term answer for every user's location/community convention.
// ============================================================

export const ALADHAN_METHOD = 5

export async function fetchAladhanTimings(date, lat, lng, method = ALADHAN_METHOD) {
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  const dateStr = `${dd}-${mm}-${yyyy}`

  const url = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lng}&method=${method}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`AlAdhan API returned ${res.status}`)
  const json = await res.json()
  if (json.code !== 200 || !json.data?.timings) throw new Error('Unexpected AlAdhan response shape')

  const t = json.data.timings
  // AlAdhan sometimes appends a timezone abbreviation, e.g.
  // "05:23 (WAT)" — strip anything after the HH:MM before parsing.
  const toMinutes = (raw) => {
    const clean = (raw || '').slice(0, 5)
    const [h, m] = clean.split(':').map(Number)
    if (Number.isNaN(h) || Number.isNaN(m)) return null
    return h * 60 + m
  }

  return {
    fajr: toMinutes(t.Fajr),
    sunrise: toMinutes(t.Sunrise),
    dhuhr: toMinutes(t.Dhuhr),
    asr: toMinutes(t.Asr),
    maghrib: toMinutes(t.Maghrib),
    isha: toMinutes(t.Isha),
    // AlAdhan computes this directly (its own halfway-point
    // convention) — used in place of calcIslamicMidnightMinutes()
    // above when live data is available, so the whole page is
    // sourced from one consistent calculation, not a mix of the API
    // for five prayers and a separately-derived local formula for
    // the sixth value.
    islamicMidnight: toMinutes(t.Midnight),
    // The IANA timezone AlAdhan actually computed these times for
    // (e.g. "Africa/Lagos") — critical for countdown/progress math.
    // These HH:MM values are LOCAL wall-clock time for the requested
    // coordinates, not UTC and not necessarily the viewing device's
    // own system timezone. See getNowInTimezone() below for why that
    // distinction matters.
    timezone: json.data.meta?.timezone || null,
  }
}

// Returns the CURRENT time as { hours, minutes, seconds } in a given
// IANA timezone — independent of whatever timezone the viewing
// device's own system clock happens to be set to.
//
// This matters specifically because a prayer time is computed for a
// GEOGRAPHIC LOCATION's timezone, not the viewer's device timezone,
// and those two can genuinely differ — most commonly while testing
// from a different region during development, but also for a real
// traveler whose phone hasn't updated its system timezone yet.
// Comparing a location's prayer time directly against the device's
// own clock (e.g. via new Date().getHours()) without this
// correction produces a countdown/progress calculation that's wrong
// by exactly the hour-offset between the two zones — which is
// exactly the bug this was written to fix: a countdown reading ~24h
// and a progress bar reading ~100% simultaneously for a prayer that
// should genuinely be a few hours away, because the code was asking
// the wrong clock what time it is.
export function getNowInTimezone(timezone) {
  const now = new Date()
  if (!timezone) {
    return { hours: now.getHours(), minutes: now.getMinutes(), seconds: now.getSeconds() }
  }
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    }).formatToParts(now)
    const get = (type) => Number(parts.find(p => p.type === type)?.value || 0)
    return { hours: get('hour') % 24, minutes: get('minute'), seconds: get('second') }
  } catch (err) {
    console.error('getNowInTimezone: invalid timezone, falling back to device clock:', timezone, err)
    return { hours: now.getHours(), minutes: now.getMinutes(), seconds: now.getSeconds() }
  }
}

// Seconds remaining until targetMinutes (minutes-since-midnight, in
// the SAME timezone as targetMinutes was computed for), using the
// actual current time AT THAT TIMEZONE rather than the device's own
// clock. Entirely self-contained in "seconds since midnight" space —
// no Date-object timezone ambiguity to get wrong, unlike constructing
// a real target Date and subtracting it from a device-clock Date.
export function computeCountdownSeconds(targetMinutes, timezone) {
  if (targetMinutes === null || targetMinutes === undefined) return null
  const { hours, minutes, seconds } = getNowInTimezone(timezone)
  const nowTotalSeconds = hours * 3600 + minutes * 60 + seconds
  const targetTotalSeconds = targetMinutes * 60
  let diff = targetTotalSeconds - nowTotalSeconds
  if (diff < 0) diff += 24 * 3600
  return diff
}

// Same timezone-correction, for the "how far through the current
// prayer's window" progress-bar fraction — needs "now" expressed as
// minutes-since-midnight at the SAME timezone the window's start/end
// minutes were computed for, for the same reason as above.
export function getNowMinutesInTimezone(timezone) {
  const { hours, minutes } = getNowInTimezone(timezone)
  return hours * 60 + minutes
}
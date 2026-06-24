import React, { useState } from 'react'
import './Calendar.css'

const HIJRI_MONTHS = [
  'Muharram', 'Safar', 'Rabiul-Awwal', 'Rabiu-Thani',
  'Jumadal-Ula', 'Jumada al-Akhirah', 'Rajab', 'Shaban',
  'Ramadan', 'Shawwal', 'Dhul Qadah', 'Dhul Hijjah',
]

const HIJRI_MONTHS_ARABIC = [
  'مُحَرَّم', 'صَفَر', 'رَبِيعُ الأَوَّل', 'رَبِيعُ الآخِر',
  'جُمَادَى الأُولَى', 'جُمَادَى الآخِرَة', 'رَجَب', 'شَعْبَان',
  'رَمَضَان', 'شَوَّال', 'ذُو القَعْدَة', 'ذُو الحِجَّة',
]

const ISLAMIC_EVENTS = {
  '1-1': {
    name: 'Islamic New Year',
    arabic: 'رَأْسُ السَّنَة الهِجْرِيَّة',
    color: '#094570',
    icon: '🌙',
    description: 'The first day of Muharram marks the beginning of the Islamic lunar year. It commemorates the Hijrah — the migration of the Prophet Muhammad, upon him be peace and blessings, from Makkah to Madinah in 622 CE. Umar ibn al-Khattab, upon him be peace, established the Hijri calendar during his caliphate, choosing the year of the Hijrah as the starting point because it marked the establishment of the first Islamic community and state.',
  },
  '1-10': {
    name: 'Day of Ashura',
    arabic: 'يَوْمُ عَاشُورَاء',
    color: '#1a5276',
    icon: '✨',
    description: 'The tenth of Muharram is one of the most blessed days in the Islamic year. The Prophet said: "Fasting on the Day of Ashura — I hope that Allah will expiate thereby the sins of the year before it." (Sahih Muslim 1162) When the Prophet arrived in Madinah and found the Jews fasting on this day, he asked why. They said it was the day Allah saved Musa (Moses) and the Children of Israel from Pharaoh and drowned Pharaoh and his army. The Prophet said: "We have more right to Musa than you," and he fasted and commanded fasting on it. It is recommended to also fast the ninth or eleventh of Muharram to differ from the Jews.',
  },
  '1-13': {
    name: 'Ayyamul-Bid',
    arabic: 'أَيَّامُ البِيض',
    color: '#b7950b',
    icon: '🌕',
    description: 'The thirteenth of each Hijri month is one of the Ayyamul-Bid — the White Days — named because the moon is full and the night is illuminated. The Prophet said: "Fasting three days of every month is like fasting the whole year." (Sahih al-Bukhari 1979) These are the thirteenth, fourteenth, and fifteenth of every lunar month. The Prophet regularly fasted these days and strongly encouraged the Companions to do so. These three days together constitute one of the most established voluntary fasting practices in the Sunnah.',
  },
  '1-14': {
    name: 'Ayyamul-Bid',
    arabic: 'أَيَّامُ البِيض',
    color: '#b7950b',
    icon: '🌕',
    description: 'The fourteenth of each Hijri month is the second of the Ayyam al-Bid — the White Days. At this point the moon is at or near its fullest, illuminating the night completely. The Prophet said to Abu Dharr: "O Abu Dharr, when you fast three days of the month, fast the thirteenth, fourteenth, and fifteenth." (Sunan al-Nasai 2424 — Sahih) Fasting these three days every month was a consistent practice of the Prophet and the righteous early Muslims.',
  },
  '1-15': {
    name: 'Ayyamul-Bid',
    arabic: 'أَيَّامُ البِيض',
    color: '#b7950b',
    icon: '🌕',
    description: 'The fifteenth of each Hijri month is the third and last of the Ayyam al-Bid — the White Days. The wisdom of fasting these three days is that fasting one day is equivalent to ten days in reward (Quran 6:160), so fasting three days per month equals thirty days — equivalent to a full year of fasting. This is one of the most accessible yet most rewarding voluntary acts a Muslim can perform consistently throughout the year.',
  },
  '3-12': {
    name: 'Mawlidul-Nabawi',
    arabic: 'المَوْلِدُ النَّبَوِيّ',
    color: '#0d6e4a',
    icon: '🌟',
    description: 'The twelfth of Rabiul-Awwal is the date most commonly cited for the birth of the Prophet Muhammad, upon him be peace and blessings, in the Year of the Elephant (approximately 570 CE). Scholars differ on the exact date of birth — Ibn Ishaq recorded the twelfth, while others recorded the ninth. The Prophet himself fasted on Mondays, explaining: "That is the day I was born and the day the revelation began." (Sahih Muslim 1162) The month of Rabiul-Awwal is also the month in which the Prophet passed away — making it a month that combines the joy of his coming and the grief of his departure. No celebration is required on this day.', }, '7-27': {
    name: 'Isra and Miraj',
    arabic: 'الإِسْرَاء وَالمِعْرَاج',
    color: '#4a0e7a',
    icon: '🪐',
    description: 'The twenty-seventh of Rajab is the date most commonly associated with the Night Journey (al-Isra) and the Ascension (al-Miraj). In one miraculous night, Allah transported the Prophet from the Sacred Mosque in Makkah to the Farthest Mosque (al-Masjid al-Aqsa) in Jerusalem, and then ascended him through the seven heavens to receive the command of the five daily prayers. The Quran records: "Exalted is He who took His servant by night from the Sacred Mosque to the Farthest Mosque." (Quran 17:1) The scholars differ on the precise date, but the significance of the event — the command of Salah, the meeting with the prophets, and the vision of Paradise and Hell — is agreed upon.',
  },
  '8-15': {
    name: 'Nisfu Shaban',
    arabic: 'نِصْفُ شَعْبَان',
    color: '#1a5276',
    icon: '🌕',
    description: 'The fifteenth of Shaban — the middle of the month — has been given special significance in some narrations. There is a hadith that on this night Allah looks upon His creation and forgives all except those who associate partners with Him and those who harbor enmity against their fellow Muslims. (Ibn Majah 1389 — some scholars authenticate it; others consider it weak but not fabricated) Shaban as a whole is a month the Prophet paid special attention to — he fasted more in Shaban than any other month outside Ramadan. When asked why, he said it is a month between Rajab and Ramadan that people neglect, and deeds are presented to Allah in it.',
  },
  '9-1': {
    name: 'First of Ramadan',
    arabic: 'أَوَّلُ رَمَضَان',
    color: '#c0392b',
    icon: '🌙',
    description: 'The first of Ramadan marks the beginning of the month of fasting — the ninth month of the Hijri calendar and the most blessed month of the year. Allah says: "The month of Ramadan is that in which the Quran was revealed, as guidance for the people." (Quran 2:185) Fasting in Ramadan is the fourth pillar of Islam. The Prophet said: "When Ramadan begins, the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained." (Sahih al-Bukhari 1899) The month contains Laylat al-Qadr — the Night of Power — better than a thousand months.',
  },
  '9-27': {
    name: 'Laylatul-Qadr',
    arabic: 'لَيْلَةُ القَدْر',
    color: '#7d3c98',
    icon: '⭐',
    description: 'Laylatul-Qadr — the Night of Power or Night of Decree — is the most blessed night in the Islamic year, better than a thousand months (over eighty-three years) of worship. Allah revealed an entire surah about it: "We sent it down on the Night of Power. And what can make you know what the Night of Power is? The Night of Power is better than a thousand months." (Quran 97:1-3) The Prophet said to seek it in the odd nights of the last ten days of Ramadan. The twenty-seventh is the most widely cited — though the Prophet did not specify it definitively, preferring that believers strive throughout the last ten nights.',
  },
  '10-1': {
    name: 'Eidul-Fitr',
    arabic: 'عِيدُ الفِطْر',
    color: '#0d6e4a',
    icon: '🎊',
    description: 'The first of Shawwal is Eid-ul-Fitr — the Festival of Breaking the Fast — celebrated upon the completion of Ramadan. It is a day of communal prayer (Salat al-Eid), giving of Zakat al-Fitr (obligatory charity at the end of Ramadan), joy, and gratitude to Allah. The Prophet said: "The fasting person has two moments of joy — when he breaks his fast, and when he meets his Lord." (Sahih al-Bukhari 1904) Eid al-Fitr was instituted in the second year of the Hijrah, the same year fasting in Ramadan was made obligatory.',
  },
  '12-9': {
    name: 'Day of Arafah',
    arabic: 'يَوْمُ عَرَفَة',
    color: '#c0392b',
    icon: '🕌',
    description: 'The ninth of Dhul Hijjah is the Day of Arafah — the most important day of the Hajj and one of the greatest days of the entire year. The pilgrims gather on the plain of Arafah to stand in supplication from midday until sunset — this standing (wuquf) is the very pillar of Hajj, as the Prophet said: "Hajj is Arafah." (Sunan al-Tirmidhi 889) For those not performing Hajj, the Prophet said fasting on the Day of Arafah expiates the sins of the past year and the coming year. (Sahih Muslim 1162) Allah boasts of the people of Arafah to the angels on this day and forgives them.',
  },
  '12-10': {
    name: 'Eid al-Adha',
    arabic: 'عِيدُ الأَضْحَى',
    color: '#0d6e4a',
    icon: '🐑',
    description: 'The tenth of Dhul Hijjah is Eid-ul-Adha — the Festival of Sacrifice — the greatest of the two Islamic Eids and one of the most important days of the year. The Prophet said: "The greatest day in the sight of Allah is the Day of Sacrifice." (Sunan Abu Dawud 1765 — Sahih) It commemorates the willingness of Ibrahim, upon him be peace, to sacrifice his son Ismail at the command of Allah, and Allah\'s ransom of Ismail with a great sacrifice. The pilgrims perform the sacrifice at Mina after stoning the Jamarat. Muslims worldwide perform the Udhiyah (sacrificial animal) and distribute its meat to family, neighbors, and the poor.',
  },
  '12-11': {
    name: 'Days of Tashreeq',
    arabic: 'أَيَّامُ التَّشْرِيق',
    color: '#c0392b',
    icon: '🕌',
    description: 'The eleventh, twelfth, and thirteenth of Dhul Hijjah are the Ayyamul-Tashreeq — the Days of Tashreeq. The name comes from the practice of drying (tashriq) sacrificial meat in the sun. The Prophet said: "The Days of Tashreeq are days of eating, drinking, and remembering Allah." (Sahih Muslim 1141) Fasting is prohibited on these days for those not performing Hajj. The pilgrims spend these days in Mina, stoning the three Jamarat each day in memory of Ibrahim\'s rejection of Shaytan\'s temptations. Takbir (saying Allahu Akbar) is performed abundantly during these days.',
  },
  '12-12': {
    name: 'Days of Tashreeq',
    arabic: 'أَيَّامُ التَّشْرِيق',
    color: '#c0392b',
    icon: '🕌',
    description: 'The twelfth of Dhul Hijjah is the second of the Days of Tashreeq. Those pilgrims who wish to leave Mina early (al-nafr al-awwal) may depart after stoning the Jamarat on this day before sunset, having fulfilled the minimum requirement. Those who remain until the thirteenth receive greater reward. The Prophet said about these days: "No days are greater in the sight of Allah or in which good deeds are more beloved to Him than these ten days." (Sunan al-Tirmidhi 757 — Sahih) The Days of Tashreeq are the culmination of the ten greatest days of the year.',
  },
  '12-13': {
    name: 'Days of Tashreeq',
    arabic: 'أَيَّامُ التَّشْرِيق',
    color: '#c0392b',
    icon: '🕌',
    description: 'The thirteenth of Dhul Hijjah is the last of the Days of Tashreeq and the last day pilgrims are required to remain in Mina. After the final stoning of the Jamarat, the pilgrims return to Makkah and perform Tawaf al-Wada (the farewell circumambulation) before departing. This marks the completion of Hajj. The Prophet performed his only Hajj in 10 AH and delivered the Farewell Sermon (Khutbat al-Wada) on the Day of Arafah of that year, laying out the foundational principles of Islamic social ethics.',
  },
}

const ALWAYS_CIRCLED = {
  13: { name: 'Ayyamul-Bid', arabic: 'أَيَّامُ البِيض', color: '#b7950b', icon: '🌕', description: 'The thirteenth of each Hijri month is one of the Ayyam al-Bid — the White Days — named because the moon is full and the night is illuminated. The Prophet said: "Fasting three days of every month is like fasting the whole year." (Sahih al-Bukhari 1979) These are the thirteenth, fourteenth, and fifteenth of every lunar month. The Prophet regularly fasted these days and strongly encouraged the Companions to do so.' },
  14: { name: 'Ayyamul-Bid', arabic: 'أَيَّامُ البِيض', color: '#b7950b', icon: '🌕', description: 'The fourteenth of each Hijri month is the second of the Ayyam al-Bid — the White Days. At this point the moon is at or near its fullest, illuminating the night completely. The Prophet said to Abu Dharr: "O Abu Dharr, when you fast three days of the month, fast the thirteenth, fourteenth, and fifteenth." (Sunan al-Nasai 2424 — Sahih)' },
  15: { name: 'Ayyamul-Bid', arabic: 'أَيَّامُ البِيض', color: '#b7950b', icon: '🌕', description: 'The fifteenth of each Hijri month is the third and last of the Ayyam al-Bid — the White Days. The wisdom of fasting these three days is that fasting one day is equivalent to ten days in reward (Quran 6:160), so fasting three days per month equals thirty days — equivalent to a full year of fasting.' },
}

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const HIJRI_EPOCH = 1948439.5
const GREGORIAN_EPOCH = 1721425.5

function leapGregorian(year) {
  return (year % 4 === 0) && (!(year % 100 === 0) || (year % 400 === 0))
}

function gregorianToJD(year, month, day) {
  return GREGORIAN_EPOCH - 1 +
    365 * (year - 1) +
    Math.floor((year - 1) / 4) +
    -Math.floor((year - 1) / 100) +
    Math.floor((year - 1) / 400) +
    Math.floor((367 * month - 362) / 12 +
      (month <= 2 ? 0 : leapGregorian(year) ? -1 : -2) + day)
}

function hijriToJD(year, month, day) {
  return day +
    Math.ceil(29.5 * (month - 1)) +
    (year - 1) * 354 +
    Math.floor((3 + 11 * year) / 30) +
    HIJRI_EPOCH - 1
}

function jdToHijri(jd) {
  jd = Math.floor(jd) + 0.5
  const year = Math.floor((30 * (jd - HIJRI_EPOCH) + 10646) / 10631)
  const month = Math.min(12,
    Math.ceil((jd - (29 + hijriToJD(year, 1, 1))) / 29.5) + 1)
  const day = jd - hijriToJD(year, month, 1) + 1
  return { year, month, day: Math.floor(day) }
}

function gregorianToHijri(gYear, gMonth, gDay) {
  const jd = gregorianToJD(gYear, gMonth, gDay)
  return jdToHijri(jd)
}

function hijriToGregorian(hYear, hMonth, hDay) {
  const jd = hijriToJD(hYear, hMonth, hDay)
  const l = Math.floor(jd) + 68569
  const n = Math.floor((4 * l) / 146097)
  const l2 = l - Math.floor((146097 * n + 3) / 4)
  const i = Math.floor((4000 * (l2 + 1)) / 1461001)
  const l3 = l2 - Math.floor((1461 * i) / 4) + 31
  const j = Math.floor((80 * l3) / 2447)
  const day = l3 - Math.floor((2447 * j) / 80)
  const l4 = Math.floor(j / 11)
  const month = j + 2 - 12 * l4
  const year = 100 * (n - 49) + i + l4
  return { year, month, day }
}

function getDaysInHijriMonth(hYear, hMonth) {
  const g1 = hijriToGregorian(hYear, hMonth, 1)
  const nextMonth = hMonth === 12 ? 1 : hMonth + 1
  const nextYear = hMonth === 12 ? hYear + 1 : hYear
  const g2 = hijriToGregorian(nextYear, nextMonth, 1)
  const d1 = new Date(g1.year, g1.month - 1, g1.day)
  const d2 = new Date(g2.year, g2.month - 1, g2.day)
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24))
}

export default function Calendar() {
  const today = new Date()
  const todayHijri = gregorianToHijri(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  )

  const [hYear, setHYear] = useState(todayHijri.year)
  const [hMonth, setHMonth] = useState(todayHijri.month)
  const [selectedDay, setSelectedDay] = useState(null)

  const daysInMonth = getDaysInHijriMonth(hYear, hMonth)
  const firstDayGreg = hijriToGregorian(hYear, hMonth, 1)
  const firstDate = new Date(firstDayGreg.year, firstDayGreg.month - 1, firstDayGreg.day)
  const startDayOfWeek = firstDate.getDay()

  const prevMonth = () => {
    if (hMonth === 1) { setHMonth(12); setHYear(hYear - 1) }
    else setHMonth(hMonth - 1)
    setSelectedDay(null)
  }

  const nextMonth = () => {
    if (hMonth === 12) { setHMonth(1); setHYear(hYear + 1) }
    else setHMonth(hMonth + 1)
    setSelectedDay(null)
  }

  const getEventKey = (day) => `${hMonth}-${day}`

  const getGregDate = (hDay) => {
    const g = hijriToGregorian(hYear, hMonth, hDay)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${g.day} ${months[g.month - 1]} ${g.year}`
  }

  const isToday = (day) =>
    todayHijri.year === hYear &&
    todayHijri.month === hMonth &&
    todayHijri.day === day

  const isFriday = (day) => {
    const g = hijriToGregorian(hYear, hMonth, day)
    const date = new Date(g.year, g.month - 1, g.day)
    return date.getDay() === 5
  }

  const getEvent = (day) => {
    const specificKey = `${hMonth}-${day}`
    if (ISLAMIC_EVENTS[specificKey]) return ISLAMIC_EVENTS[specificKey]
    if (ALWAYS_CIRCLED[day]) return ALWAYS_CIRCLED[day]
    return null
  }

  const monthEvents = []
  for (let d = 1; d <= daysInMonth; d++) {
    const ev = getEvent(d)
    if (ev) monthEvents.push({ day: d, ...ev })
  }

  const uniqueMonthEvents = monthEvents.filter((ev, idx, arr) =>
    arr.findIndex(e => e.name === ev.name && e.day === ev.day) === idx
  )

  const cells = []
  for (let i = 0; i < startDayOfWeek; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const selectedEvent = selectedDay ? getEvent(selectedDay) : null

  return (
    <div className="page-content cal-page">
      <h1 className="page-title">Islamic Calendar</h1>
      <p className="page-subtitle">التَّقْوِيمُ الهِجْرِيّ — The Hijri Calendar</p>

      {/* Today banner */}
      <div className="cal-today-banner">
        <div className="cal-today-hijri">
          <span className="cal-today-day">{todayHijri.day}</span>
          <span className="cal-today-month arabic">{HIJRI_MONTHS_ARABIC[todayHijri.month - 1]}</span>
          <span className="cal-today-year">{todayHijri.year} AH</span>
        </div>
        <div className="cal-today-greg">
          {today.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>

      {/* Calendar */}
      <div className="cal-card">
        {/* Month nav */}
        <div className="cal-nav">
          <button className="cal-nav-btn" onClick={prevMonth}>‹</button>
          <div className="cal-nav-center">
            <div className="cal-month-arabic arabic">{HIJRI_MONTHS_ARABIC[hMonth - 1]}</div>
            <div className="cal-month-latin">{HIJRI_MONTHS[hMonth - 1]} {hYear} AH</div>
          </div>
          <button className="cal-nav-btn" onClick={nextMonth}>›</button>
        </div>

        {/* Week days */}
        <div className="cal-weekdays">
          {WEEK_DAYS.map((d, i) => (
            <div key={d} className={`cal-weekday ${i === 5 ? 'cal-weekday--friday' : ''}`}>{d}</div>
          ))}
        </div>

        {/* Days grid */}
        <div className="cal-grid">
          {cells.map((day, idx) => {
            if (!day) return <div key={`empty-${idx}`} className="cal-cell cal-cell--empty" />
            const event = getEvent(day)
            const todayDay = isToday(day)
            const fridayDay = isFriday(day)
            return (
              <button
                key={day}
                className={`cal-cell
                  ${todayDay ? 'cal-cell--today' : ''}
                  ${event ? 'cal-cell--event' : ''}
                  ${fridayDay && !event && !todayDay ? 'cal-cell--friday' : ''}
                  ${selectedDay === day ? 'cal-cell--selected' : ''}
                `}
                onClick={() => setSelectedDay(selectedDay === day ? null : day)}
                style={event ? { '--event-color': event.color } : {}}
              >
                <span className="cal-cell-day">{day}</span>
                {event && <span className="cal-cell-icon">{event.icon}</span>}
                {event && <div className="cal-cell-dot" style={{ background: event.color }} />}
              </button>
            )
          })}
        </div>

        {/* Legend */}
        <div className="cal-legend">
          <div className="cal-legend-item">
            <div className="cal-legend-dot cal-legend-dot--today" />
            <span>Today</span>
          </div>
          <div className="cal-legend-item">
            <div className="cal-legend-dot cal-legend-dot--event" />
            <span>Islamic Event</span>
          </div>
          <div className="cal-legend-item">
            <div className="cal-legend-dot" style={{ background: '#b7950b' }} />
            <span>Ayyam al-Bid</span>
          </div>
          <div className="cal-legend-item">
            <div className="cal-legend-dot cal-legend-dot--friday" />
            <span>Friday</span>
          </div>
        </div>
      </div>

      {/* Selected day detail */}
      {selectedDay && (
        <div className="cal-detail-card">
          <div className="cal-detail-header">
            <div className="cal-detail-hijri">
              <span className="cal-detail-day">{selectedDay}</span>
              <span className="cal-detail-month arabic">{HIJRI_MONTHS_ARABIC[hMonth - 1]}</span>
              <span className="cal-detail-year">{hYear} AH</span>
            </div>
            <div className="cal-detail-greg">{getGregDate(selectedDay)}</div>
          </div>
          {selectedEvent ? (
            <div
              className="cal-detail-event"
              style={{ borderLeft: `4px solid ${selectedEvent.color}` }}
            >
              <span className="cal-detail-event-icon">{selectedEvent.icon}</span>
              <div>
                <p className="cal-detail-event-name">{selectedEvent.name}</p>
                <p className="cal-detail-event-arabic arabic">{selectedEvent.arabic}</p>
                <p className="cal-detail-event-desc">{selectedEvent.description}</p>
              </div>
            </div>
          ) : (
            <p className="cal-detail-no-event">No special event on this day.</p>
          )}
        </div>
      )}

      {/* Month events list */}
      {uniqueMonthEvents.length > 0 && (
        <div className="cal-events-section">
          <h2 className="cal-events-title">Events This Month</h2>
          <div className="cal-events-list">
            {uniqueMonthEvents.map((ev, i) => (
              <div
                key={i}
                className="cal-event-item"
                style={{ borderLeft: `4px solid ${ev.color}` }}
                onClick={() => setSelectedDay(ev.day)}
              >
                <div className="cal-event-item-icon">{ev.icon}</div>
                <div className="cal-event-item-body">
                  <p className="cal-event-item-name">{ev.name}</p>
                  <p className="cal-event-item-arabic arabic">{ev.arabic}</p>
                  <p className="cal-event-item-date">
                    {ev.day} {HIJRI_MONTHS[hMonth - 1]} {hYear} AH — {getGregDate(ev.day)}
                  </p>
                  <p className="cal-event-item-desc">{ev.description.slice(0, 120)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
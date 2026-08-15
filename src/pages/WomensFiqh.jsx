import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase.js'
import { WOMENS_FIQH_CONTENT } from '../data/womensFiqh.js'
import './WomensFiqh.css'

const ICONS = {
  droplet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5c3.5 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3.5-8 7-13z" />
    </svg>
  ),
  droplets: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2.5c2.5 3.5 5 6.5 5 9.5a5 5 0 0 1-10 0c0-3 2.5-6 5-9.5z" />
      <path d="M17.5 9c1.8 2.4 3 4.4 3 6.2a3.5 3.5 0 0 1-7 0" />
    </svg>
  ),
  question: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 0 1 4.6-1.4c.6.9.4 1.9-.4 2.6-.9.8-1.7 1.2-1.7 2.3" />
      <circle cx="12" cy="16.5" r="0.6" fill="currentColor" stroke="none" />
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
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1z" />
      <line x1="12" y1="6" x2="12" y2="19" />
    </svg>
  ),
  scroll: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h11a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H6a2 2 0 0 1 0-4h11" />
      <path d="M6 4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2" />
    </svg>
  ),
  cases: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3v4a1 1 0 0 1-1 1H4" />
      <path d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9l4-7Z" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  chevronLeft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  chevronRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  trash: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  ),
  archive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="5" rx="1" />
      <path d="M4 8v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  ),
}

const Icon = ({ name }) => <span className="wf-icon" aria-hidden="true">{ICONS[name]}</span>

const TOPICS = [
  { key: 'hayd', label: 'Hayd', arabic: 'الحَيْض', icon: 'droplet' },
  { key: 'nifas', label: 'Nifas', arabic: 'النِّفَاس', icon: 'droplets' },
  { key: 'istihadah', label: 'Istihadah', arabic: 'الاسْتِحَاضَة', icon: 'question' },
  { key: 'be_prepared', label: 'Be Prepared', arabic: 'كُونِي مُسْتَعِدَّة', icon: 'archive' },
]

const SECTION_ICONS = { definition: 'book', duration: 'calendar', signs: 'droplet', rulings: 'scroll' }

const FALLBACK_MAX_DAYS = { hayd: 15, nifas: 60 }

const INTENSITIES = [
  { key: 'spotting', label: 'Spotting' },
  { key: 'light', label: 'Light' },
  { key: 'medium', label: 'Medium' },
  { key: 'heavy', label: 'Heavy' },
]

const INTENSITY_LABEL = Object.fromEntries(INTENSITIES.map(i => [i.key, i.label]))

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']
const WEEKDAY_LABELS = ['S','M','T','W','T','F','S']

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function dayCount(startDate, throughDate) {
  const start = new Date(startDate)
  const through = new Date(throughDate)
  return Math.floor((through - start) / (1000 * 60 * 60 * 24)) + 1
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function dateKey(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

export default function WomensFiqh({ user }) {
  const [tab, setTab] = useState('learn')
  const [activeTopic, setActiveTopic] = useState(null)

  // ── Tracker tab state ────────────────────────────────────────
  const [activeCycle, setActiveCycle] = useState(null)
  const [pastCycles, setPastCycles] = useState([])
  const [trackerLoading, setTrackerLoading] = useState(false)
  const [trackerError, setTrackerError] = useState(null)
  const [startingPostpartum, setStartingPostpartum] = useState(false)
  const [logging, setLogging] = useState(false)
  const [stopping, setStopping] = useState(false)
  const [noteInput, setNoteInput] = useState('')
  const [deletingCycleId, setDeletingCycleId] = useState(null)

  // ── Cycle date-edit state ────────────────────────────────────
  const [editingCycleId, setEditingCycleId] = useState(null)
  const [editStartDate, setEditStartDate] = useState('')
  const [editEndDate, setEditEndDate] = useState('')
  const [savingEdit, setSavingEdit] = useState(false)

  // ── Calendar state ───────────────────────────────────────────
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const now = new Date()
    return { year: now.getFullYear(), month: now.getMonth() }
  })
  const [selectedDay, setSelectedDay] = useState(null) // 'YYYY-MM-DD' | null
  const [dayLogging, setDayLogging] = useState(false)
  const [dayNoteInput, setDayNoteInput] = useState('')

  const fetchCycles = useCallback(async () => {
    if (!user) return
    setTrackerLoading(true)
    setTrackerError(null)
    try {
      const { data, error } = await supabase
        .from('womens_fiqh_cycles')
        .select('*')
        .eq('user_id', user.id)
        .order('start_date', { ascending: false })
      if (error) throw error
      const rows = data || []
      setActiveCycle(rows.find(r => !r.end_date) || null)
      setPastCycles(rows.filter(r => r.end_date))
    } catch (err) {
      console.error('Failed to load cycle logs:', err)
      setTrackerError(err.message)
    } finally {
      setTrackerLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (tab === 'tracker') fetchCycles()
  }, [tab, fetchCycles])

  const allCycles = activeCycle ? [activeCycle, ...pastCycles] : pastCycles

  const maxDaysFor = (isPostpartum) => {
    const topic = isPostpartum ? 'nifas' : 'hayd'
    return WOMENS_FIQH_CONTENT[topic]?.max_duration_days || FALLBACK_MAX_DAYS[topic]
  }

  // Flatten every cycle's logged days into a lookup by date, each
  // tagged with which ruling applied on that specific day (day count
  // within its cycle vs. that cycle's max duration) — this is what
  // colors each calendar cell and feeds the day-detail sheet.
  const dayLookup = (() => {
    const map = {}
    allCycles.forEach(cycle => {
      const maxDays = maxDaysFor(cycle.is_postpartum)
      ;(cycle.days || []).forEach(d => {
        const n = dayCount(cycle.start_date, d.date)
        map[d.date] = {
          intensity: d.intensity,
          notes: d.notes || '',
          status: n > maxDays ? 'istihadah' : (cycle.is_postpartum ? 'nifas' : 'hayd'),
          cycleId: cycle.id,
        }
      })
    })
    return map
  })()

  const currentStatus = (() => {
    if (!activeCycle) return null
    const today = todayStr()
    const days = dayCount(activeCycle.start_date, today)
    const maxDays = maxDaysFor(activeCycle.is_postpartum)
    const overMax = days > maxDays
    return {
      days,
      maxDays,
      label: overMax ? 'Istihadah' : (activeCycle.is_postpartum ? 'Nifas' : 'Hayd'),
      overMax,
    }
  })()

  const startOrLogToday = async (intensity) => {
    if (!user) return
    setLogging(true)
    setTrackerError(null)
    try {
      const today = todayStr()
      const note = noteInput.trim()
      if (activeCycle) {
        const alreadyLogged = (activeCycle.days || []).some(d => d.date === today)
        const newDays = alreadyLogged
          ? (activeCycle.days || []).map(d => d.date === today ? { ...d, intensity, notes: note } : d)
          : [...(activeCycle.days || []), { date: today, intensity, notes: note }]
        const { error } = await supabase
          .from('womens_fiqh_cycles')
          .update({ days: newDays, updated_at: new Date().toISOString() })
          .eq('id', activeCycle.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from('womens_fiqh_cycles').insert({
          user_id: user.id,
          start_date: today,
          is_postpartum: startingPostpartum,
          days: [{ date: today, intensity, notes: note }],
        })
        if (error) throw error
      }
      setNoteInput('')
      fetchCycles()
    } catch (err) {
      setTrackerError(err.message)
    } finally {
      setLogging(false)
    }
  }

  const markStopped = async () => {
    if (!activeCycle) return
    setStopping(true)
    setTrackerError(null)
    try {
      const { error } = await supabase
        .from('womens_fiqh_cycles')
        .update({ end_date: todayStr(), updated_at: new Date().toISOString() })
        .eq('id', activeCycle.id)
      if (error) throw error
      fetchCycles()
    } catch (err) {
      setTrackerError(err.message)
    } finally {
      setStopping(false)
    }
  }

  const todayAlreadyLogged = activeCycle && (activeCycle.days || []).some(d => d.date === todayStr())

  const logSpecificDay = async (dateStr, intensity) => {
    if (!user || !activeCycle) return
    setDayLogging(true)
    setTrackerError(null)
    try {
      const note = dayNoteInput.trim()
      const alreadyLogged = (activeCycle.days || []).some(d => d.date === dateStr)
      const newDays = alreadyLogged
        ? (activeCycle.days || []).map(d => d.date === dateStr ? { ...d, intensity, notes: note } : d)
        : [...(activeCycle.days || []), { date: dateStr, intensity, notes: note }]
      const { error } = await supabase
        .from('womens_fiqh_cycles')
        .update({ days: newDays, updated_at: new Date().toISOString() })
        .eq('id', activeCycle.id)
      if (error) throw error
      setDayNoteInput('')
      await fetchCycles()
    } catch (err) {
      setTrackerError(err.message)
    } finally {
      setDayLogging(false)
    }
  }

  const openDay = (key) => {
    setSelectedDay(key)
    setDayNoteInput(dayLookup[key]?.notes || '')
  }

  const closeDaySheet = () => {
    setSelectedDay(null)
    setDayNoteInput('')
  }

  // ── Cycle date-edit handlers ─────────────────────────────────
  const startEditingCycle = (cycle) => {
    setEditingCycleId(cycle.id)
    setEditStartDate(cycle.start_date)
    setEditEndDate(cycle.end_date || '')
    setTrackerError(null)
  }

  const cancelEditingCycle = () => {
    setEditingCycleId(null)
    setEditStartDate('')
    setEditEndDate('')
  }

  const saveEditedCycle = async (cycle) => {
    if (!editStartDate) return
    const upperBound = cycle.end_date ? editEndDate || cycle.end_date : todayStr()
    if (editStartDate > upperBound) {
      setTrackerError(`Start date can't be after ${cycle.end_date ? 'the end date' : 'today'}.`)
      return
    }
    if (cycle.end_date && editEndDate && editEndDate < editStartDate) {
      setTrackerError('End date can\'t be before the start date.')
      return
    }
    setSavingEdit(true)
    setTrackerError(null)
    try {
      const updates = { start_date: editStartDate, updated_at: new Date().toISOString() }
      if (cycle.end_date) updates.end_date = editEndDate || cycle.end_date
      const { error } = await supabase
        .from('womens_fiqh_cycles')
        .update(updates)
        .eq('id', cycle.id)
      if (error) throw error
      cancelEditingCycle()
      fetchCycles()
    } catch (err) {
      setTrackerError(err.message)
    } finally {
      setSavingEdit(false)
    }
  }

  // ── Delete cycle ─────────────────────────────────────────────
  // Permanently removes an entire logged cycle (start date, end
  // date if any, and every day logged within it). Used to correct
  // mistaken/duplicate/test entries — e.g. accidentally logging two
  // separate cycles on the same date while learning the tracker.
  const deleteCycle = async (cycle) => {
    const confirmed = window.confirm(
      `Delete this ${cycle.end_date ? 'entry' : 'ongoing entry'} (${formatDate(cycle.start_date)}${cycle.end_date ? ` – ${formatDate(cycle.end_date)}` : ''})? This can't be undone.`
    )
    if (!confirmed) return
    setDeletingCycleId(cycle.id)
    setTrackerError(null)
    try {
      const { error } = await supabase
        .from('womens_fiqh_cycles')
        .delete()
        .eq('id', cycle.id)
      if (error) throw error
      if (editingCycleId === cycle.id) cancelEditingCycle()
      fetchCycles()
    } catch (err) {
      setTrackerError(err.message)
    } finally {
      setDeletingCycleId(null)
    }
  }

  // ── Learn tab render ─────────────────────────────────────────
  const openTopic = (key) => setActiveTopic(key)
  const closeTopic = () => setActiveTopic(null)

  const renderLearn = () => {
    if (activeTopic) {
      const meta = TOPICS.find(t => t.key === activeTopic)
      const entry = WOMENS_FIQH_CONTENT[activeTopic]
      return (
        <>
          <button className="wf-back" onClick={closeTopic}>← Back to Women's Fiqh</button>

          <div className="wf-detail-header card">
            <span className="wf-detail-icon"><Icon name={meta.icon} /></span>
            <div>
              <h2 className="wf-detail-title">{entry.title}</h2>
              <p className="wf-detail-arabic arabic">{entry.arabic_title}</p>
            </div>
          </div>

          {Array.isArray(entry.sections) ? (
            // Custom-titled sections (used by topics like "Be Prepared"
            // that don't fit the definition/duration/signs/rulings
            // shape the fiqh topics use).
            entry.sections.map(s => (
              <div key={s.key} className="wf-section card">
                <h3 className="wf-section-title">
                  <Icon name={s.icon} /> {s.title}
                </h3>
                <p className="wf-section-body">{s.body}</p>
              </div>
            ))
          ) : (
            ['definition', 'duration', 'signs', 'rulings'].map(section => (
              entry[section] ? (
                <div key={section} className="wf-section card">
                  <h3 className="wf-section-title">
                    <Icon name={SECTION_ICONS[section]} /> {section.charAt(0).toUpperCase() + section.slice(1)}
                  </h3>
                  <p className="wf-section-body">{entry[section]}</p>
                </div>
              ) : null
            ))
          )}

          {Array.isArray(entry.cases) && entry.cases.length > 0 && (
            <div className="wf-section card">
              <h3 className="wf-section-title"><Icon name="cases" /> Cases</h3>
              <div className="wf-cases">
                {entry.cases.map((c, i) => (
                  <div key={i} className="wf-case">
                    <p className="wf-case-title">{c.title}</p>
                    <p className="wf-case-scenario">{c.scenario}</p>
                    <p className="wf-case-ruling"><strong>Ruling:</strong> {c.ruling}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {Array.isArray(entry.faq) && entry.faq.length > 0 && (
            <div className="wf-section card">
              <h3 className="wf-section-title"><Icon name="question" /> Common Questions</h3>
              <div className="wf-faq">
                {entry.faq.map((f, i) => (
                  <div key={i} className="wf-faq-item">
                    <p className="wf-faq-q">{f.question}</p>
                    <p className="wf-faq-a">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )
    }

    return (
      <div className="wf-cards">
        {TOPICS.map(t => {
          const entry = WOMENS_FIQH_CONTENT[t.key]
          return (
            <button key={t.key} className="wf-topic-card card" onClick={() => openTopic(t.key)}>
              <span className="wf-topic-icon"><Icon name={t.icon} /></span>
              <div className="wf-topic-text">
                <h3 className="wf-topic-label">{t.label}</h3>
                <p className="wf-topic-arabic arabic">{t.arabic}</p>
                <p className="wf-topic-desc">{entry.quick_fact}</p>
              </div>
              <span className="wf-topic-arrow">→</span>
            </button>
          )
        })}
      </div>
    )
  }

  // ── Calendar render ──────────────────────────────────────────
  const goToPrevMonth = () => {
    setCalendarMonth(m => m.month === 0 ? { year: m.year - 1, month: 11 } : { year: m.year, month: m.month - 1 })
  }
  const goToNextMonth = () => {
    setCalendarMonth(m => m.month === 11 ? { year: m.year + 1, month: 0 } : { year: m.year, month: m.month + 1 })
  }

  const renderCalendar = () => {
    const { year, month } = calendarMonth
    const firstOfMonth = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const startWeekday = firstOfMonth.getDay() // 0 = Sunday
    const today = todayStr()

    const cells = []
    for (let i = 0; i < startWeekday; i++) cells.push(null)
    for (let d = 1; d <= daysInMonth; d++) cells.push(d)

    return (
      <div className="wf-calendar card">
        <div className="wf-calendar-header">
          <button className="wf-calendar-nav" onClick={goToPrevMonth} aria-label="Previous month">
            <Icon name="chevronLeft" />
          </button>
          <p className="wf-calendar-month">{MONTH_NAMES[month]} {year}</p>
          <button className="wf-calendar-nav" onClick={goToNextMonth} aria-label="Next month">
            <Icon name="chevronRight" />
          </button>
        </div>

        <div className="wf-calendar-weekdays">
          {WEEKDAY_LABELS.map((w, i) => <span key={i}>{w}</span>)}
        </div>

        <div className="wf-calendar-grid">
          {cells.map((d, i) => {
            if (d === null) return <span key={`blank-${i}`} className="wf-calendar-cell wf-calendar-cell--blank" />
            const key = dateKey(year, month, d)
            const logged = dayLookup[key]
            const isToday = key === today
            let statusClass = ''
            if (logged?.status === 'istihadah') statusClass = 'wf-calendar-cell--istihadah'
            else if (logged) statusClass = 'wf-calendar-cell--logged'
            return (
              <button
                key={key}
                className={`wf-calendar-cell ${statusClass} ${isToday ? 'wf-calendar-cell--today' : ''}`}
                onClick={() => openDay(key)}
              >
                {d}
                {logged?.notes && <span className="wf-calendar-cell-note-dot" aria-hidden="true" />}
              </button>
            )
          })}
        </div>

        <div className="wf-calendar-legend">
          <span className="wf-calendar-legend-item"><span className="wf-calendar-dot wf-calendar-dot--logged" /> Hayd / Nifas</span>
          <span className="wf-calendar-legend-item"><span className="wf-calendar-dot wf-calendar-dot--istihadah" /> Istihadah</span>
          <span className="wf-calendar-legend-item"><span className="wf-calendar-cell-note-dot wf-calendar-cell-note-dot--static" /> Has a note</span>
        </div>
      </div>
    )
  }

  const renderDaySheet = () => {
    if (!selectedDay) return null
    const logged = dayLookup[selectedDay]
    const canBackfill = !!activeCycle && selectedDay >= activeCycle.start_date && selectedDay <= todayStr()
    return (
      <div className="wf-day-sheet-overlay" onClick={closeDaySheet}>
        <div className="wf-day-sheet card" onClick={e => e.stopPropagation()}>
          <div className="wf-day-sheet-header">
            <p className="wf-day-sheet-date">{formatDate(selectedDay)}</p>
            <button className="wf-day-sheet-close" onClick={closeDaySheet} aria-label="Close">
              <Icon name="close" />
            </button>
          </div>

          {logged ? (
            <>
              <p className="wf-day-sheet-status">
                Logged as <strong>{logged.status === 'istihadah' ? 'Istihadah' : logged.status === 'nifas' ? 'Nifas' : 'Hayd'}</strong>
                {logged.intensity ? ` · ${INTENSITY_LABEL[logged.intensity] || logged.intensity}` : ''}
              </p>
              {logged.notes && <p className="wf-day-sheet-note-text">"{logged.notes}"</p>}
            </>
          ) : (
            <p className="wf-day-sheet-status wf-day-sheet-status--empty">Nothing logged for this day.</p>
          )}

          {canBackfill ? (
            <>
              <p className="wf-log-label" style={{ marginTop: 14 }}>{logged ? 'Update this day' : 'Log this day'}</p>
              <textarea
                className="wf-note-input"
                placeholder="Notes (optional) — anything you noticed..."
                value={dayNoteInput}
                onChange={e => setDayNoteInput(e.target.value)}
                rows={2}
              />
              <div className="wf-intensity-row">
                {INTENSITIES.map(i => (
                  <button
                    key={i.key}
                    className="wf-intensity-btn"
                    disabled={dayLogging}
                    onClick={async () => { await logSpecificDay(selectedDay, i.key); closeDaySheet() }}
                  >
                    {i.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="wf-day-sheet-note">
              {activeCycle
                ? 'Only days within your current, ongoing cycle can be logged or edited here.'
                : 'Start tracking today to begin logging days.'}
            </p>
          )}
        </div>
      </div>
    )
  }

  // ── Tracker tab render ───────────────────────────────────────
  const renderTracker = () => (
    <>
      <div className="wf-section-intro card">
        <p className="wf-section-intro-text">
          Log your bleeding days to see which ruling currently applies for worship purposes.
          This is a worship-planning aid, not a medical tool, and everything you log here is
          private — visible only to you.
        </p>
      </div>

      {trackerError && <div className="wf-error card">{trackerError}</div>}

      {trackerLoading ? (
        <div className="wf-loading"><div className="wf-spinner" /></div>
      ) : activeCycle ? (
        <>
          <div className={`wf-status-card card ${currentStatus.overMax ? 'wf-status-card--istihadah' : ''}`}>
            <p className="wf-status-label">Day {currentStatus.days}{activeCycle.is_postpartum ? ' (postpartum)' : ''}</p>
            <p className="wf-status-value">{currentStatus.label}</p>
            {currentStatus.overMax ? (
              <p className="wf-status-note">
                Past the {currentStatus.maxDays}-day maximum — see the Istihadah card in Learn for what this means for your prayer and fasting.
              </p>
            ) : (
              <p className="wf-status-note">Up to {currentStatus.maxDays} days for this category.</p>
            )}

            {editingCycleId === activeCycle.id ? (
              <div className="wf-edit-date-form">
                <label className="wf-edit-date-label">
                  Started on
                  <input
                    type="date"
                    className="wf-edit-date-input"
                    value={editStartDate}
                    max={todayStr()}
                    onChange={e => setEditStartDate(e.target.value)}
                  />
                </label>
                <div className="wf-edit-date-actions">
                  <button className="btn btn-ghost" onClick={cancelEditingCycle} disabled={savingEdit}>Cancel</button>
                  <button className="wf-intensity-btn" onClick={() => saveEditedCycle(activeCycle)} disabled={savingEdit}>
                    {savingEdit ? 'Saving…' : 'Save'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="wf-status-actions">
                <button className="wf-edit-date-trigger" onClick={() => startEditingCycle(activeCycle)}>
                  Started {formatDate(activeCycle.start_date)} · Edit date
                </button>
                <button
                  className="wf-delete-trigger"
                  onClick={() => deleteCycle(activeCycle)}
                  disabled={deletingCycleId === activeCycle.id}
                >
                  <Icon name="trash" /> {deletingCycleId === activeCycle.id ? 'Deleting…' : 'Delete'}
                </button>
              </div>
            )}
          </div>

          <div className="wf-log-card card">
            {todayAlreadyLogged ? (
              <p className="wf-log-done"><Icon name="check" /> Today is logged.</p>
            ) : (
              <>
                <p className="wf-log-label">Log today's intensity</p>
                <textarea
                  className="wf-note-input"
                  placeholder="Notes for today (optional) — anything you noticed..."
                  value={noteInput}
                  onChange={e => setNoteInput(e.target.value)}
                  rows={2}
                />
                <div className="wf-intensity-row">
                  {INTENSITIES.map(i => (
                    <button key={i.key} className="wf-intensity-btn" disabled={logging} onClick={() => startOrLogToday(i.key)}>
                      {i.label}
                    </button>
                  ))}
                </div>
              </>
            )}
            <button className="btn btn-ghost" onClick={markStopped} disabled={stopping} style={{ marginTop: 12, color: '#c0392b' }}>
              {stopping ? 'Saving…' : 'Mark bleeding stopped'}
            </button>
          </div>
        </>
      ) : (
        <div className="wf-log-card card">
          <p className="wf-log-label">Start tracking</p>
          <label className="wf-postpartum-check">
            <input type="checkbox" checked={startingPostpartum} onChange={e => setStartingPostpartum(e.target.checked)} />
            This bleeding follows childbirth (nifas)
          </label>
          <textarea
            className="wf-note-input"
            placeholder="Notes for today (optional) — anything you noticed..."
            value={noteInput}
            onChange={e => setNoteInput(e.target.value)}
            rows={2}
            style={{ marginTop: 12 }}
          />
          <div className="wf-intensity-row">
            {INTENSITIES.map(i => (
              <button key={i.key} className="wf-intensity-btn" disabled={logging} onClick={() => startOrLogToday(i.key)}>
                {i.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {renderCalendar()}

      {pastCycles.length > 0 && (
        <div className="wf-history">
          <p className="wf-history-label">History</p>
          {pastCycles.map(c => {
            const days = dayCount(c.start_date, c.end_date)
            const maxDays = maxDaysFor(c.is_postpartum)
            const label = days > maxDays ? 'Istihadah' : (c.is_postpartum ? 'Nifas' : 'Hayd')
            const isEditing = editingCycleId === c.id
            return (
              <div key={c.id} className="wf-history-item" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                {isEditing ? (
                  <div className="wf-edit-date-form">
                    <label className="wf-edit-date-label">
                      Start date
                      <input
                        type="date"
                        className="wf-edit-date-input"
                        value={editStartDate}
                        max={editEndDate || undefined}
                        onChange={e => setEditStartDate(e.target.value)}
                      />
                    </label>
                    <label className="wf-edit-date-label">
                      End date
                      <input
                        type="date"
                        className="wf-edit-date-input"
                        value={editEndDate}
                        min={editStartDate || undefined}
                        max={todayStr()}
                        onChange={e => setEditEndDate(e.target.value)}
                      />
                    </label>
                    <div className="wf-edit-date-actions">
                      <button className="btn btn-ghost" onClick={cancelEditingCycle} disabled={savingEdit}>Cancel</button>
                      <button className="wf-intensity-btn" onClick={() => saveEditedCycle(c)} disabled={savingEdit}>
                        {savingEdit ? 'Saving…' : 'Save'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <span>{formatDate(c.start_date)} – {formatDate(c.end_date)}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className="wf-history-badge">{days}d · {label}</span>
                      <button className="wf-edit-date-trigger" onClick={() => startEditingCycle(c)}>Edit</button>
                      <button
                        className="wf-delete-trigger"
                        onClick={() => deleteCycle(c)}
                        disabled={deletingCycleId === c.id}
                      >
                        <Icon name="trash" /> {deletingCycleId === c.id ? 'Deleting…' : 'Delete'}
                      </button>
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {renderDaySheet()}
    </>
  )

  return (
    <div className="page-content wf-page">
      <h1 className="page-title">Women's Fiqh</h1>
      <p className="page-subtitle">فِقْهُ المَرْأَة — The natural bloods and their rulings</p>

      <div className="wf-tabs">
        <button className={`wf-tab ${tab === 'learn' ? 'wf-tab--active' : ''}`} onClick={() => { setTab('learn'); setActiveTopic(null) }}>
          Learn
        </button>
        <button className={`wf-tab ${tab === 'tracker' ? 'wf-tab--active' : ''}`} onClick={() => setTab('tracker')}>
          Tracker
        </button>
      </div>

      {tab === 'learn' ? renderLearn() : renderTracker()}
    </div>
  )
}
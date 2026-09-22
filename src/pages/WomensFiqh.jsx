import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase.js'
import { WOMENS_FIQH_CONTENT } from '../data/womensFiqh.js'
import { WOMENS_HEALTH_AWARENESS_CONTENT } from '../data/womensHealthAwareness.js'
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
  trend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="15 6 21 6 21 12" />
    </svg>
  ),
}

const Icon = ({ name }) => <span className="wf-icon" aria-hidden="true">{ICONS[name]}</span>

const TOPICS = [
  { key: 'hayd', label: 'Hayd', arabic: 'الحَيْض', icon: 'droplet', source: 'fiqh' },
  { key: 'nifas', label: 'Nifas', arabic: 'النِّفَاس', icon: 'droplets', source: 'fiqh' },
  { key: 'istihadah', label: 'Istihadah', arabic: 'الاسْتِحَاضَة', icon: 'question', source: 'fiqh' },
  { key: 'be_prepared', label: 'Be Prepared', arabic: 'كُونِي مُسْتَعِدَّة', icon: 'archive', source: 'fiqh' },
  // ── Health awareness topics, deliberately a different content
  // source (womensHealthAwareness.js, not womensFiqh.js) since
  // these aren't fiqh questions and need clinical review, not
  // scholarly review. See that file's own header for why.
  { key: 'pmos', label: 'PMOS (PCOS)', arabic: 'تكيّس المبايض', icon: 'book', source: 'health' },
  { key: 'endometriosis', label: 'Endometriosis', arabic: 'الانتباذ البِطاني', icon: 'droplet', source: 'health' },
  { key: 'fibroids', label: 'Fibroids', arabic: 'الأورام الليفية', icon: 'cases', source: 'health' },
  { key: 'ovarian_cysts', label: 'Ovarian Cysts', arabic: 'أكياس المبيض', icon: 'droplets', source: 'health' },
  { key: 'anemia_from_bleeding', label: 'Anemia From Heavy Periods', arabic: 'فقر الدم', icon: 'question', source: 'health' },
  { key: 'cervical_screening', label: 'Cervical Screening', arabic: 'فحص عنق الرحم', icon: 'calendar', source: 'health' },
]

const CONTENT_SOURCES = { fiqh: WOMENS_FIQH_CONTENT, health: WOMENS_HEALTH_AWARENESS_CONTENT }

const SECTION_ICONS = { definition: 'book', duration: 'calendar', signs: 'droplet', rulings: 'scroll' }

const FALLBACK_MAX_DAYS = { hayd: 15, nifas: 60 }

const INTENSITIES = [
  { key: 'spotting', label: 'Spotting' },
  { key: 'light', label: 'Light' },
  { key: 'medium', label: 'Medium' },
  { key: 'heavy', label: 'Heavy' },
]

const INTENSITY_LABEL = Object.fromEntries(INTENSITIES.map(i => [i.key, i.label]))

// ── Colour, purely descriptive, never used to compute the
// hayd/nifas/istihadah status. Colour and clot presence are
// genuinely discussed in classical fiqh (see the note shown directly
// in the logging UI), but correctly applying that discussion depends
// on timing relative to purity and on real madhab-level detail this
// app does not attempt to adjudicate automatically. These fields
// exist so a woman can note what she observed for her own record and
// to describe it precisely if she has a specific question for a
// knowledgeable teacher, not so the app can rule on it for her.
const COLORS = [
  { key: 'red', label: 'Red' },
  { key: 'dark', label: 'Dark red / black' },
  { key: 'brown', label: 'Brown' },
  { key: 'yellowish', label: 'Yellowish' },
  { key: 'cloudy', label: 'Cloudy / turbid' },
]

const COLOR_LABEL = Object.fromEntries(COLORS.map(c => [c.key, c.label]))

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']
const WEEKDAY_LABELS = ['S','M','T','W','T','F','S']

// Minimum number of start-to-start gaps needed before showing any
// prediction at all. Below this, there just isn't enough of a
// pattern to say anything meaningful.
const MIN_GAPS_FOR_PREDICTION = 1
// Below this many gaps, a prediction is still shown but marked as
// based on limited history rather than given with full confidence.
const GAPS_FOR_CONFIDENT_PREDICTION = 3
// How many of the most recent gaps/durations to average over, so a
// prediction reflects recent pattern rather than years-old data.
const RECENT_CYCLES_WINDOW = 6
// A descriptive-only threshold (not a diagnosis) for calling out that
// cycle length has varied a fair amount recently.
const IRREGULARITY_SPREAD_DAYS = 8

// ── Fertility / BBT / pregnancy: opt-in, separate mode ───────────
// Fertile-window estimate: a widely used clinical approximation, not
// a guarantee and not a method of birth control. Ovulation is
// estimated as occurring a typical luteal-phase length before the
// predicted next period; the fertile window itself spans several
// days before that estimate (sperm can survive several days) through
// one day after (the egg's own short viability window).
const LUTEAL_PHASE_DAYS = 14
const FERTILE_WINDOW_BEFORE = 5
const FERTILE_WINDOW_AFTER = 1
// Standard 40-week-from-last-period convention used by most clinical
// due-date calculators.
const PREGNANCY_DURATION_DAYS = 280

// How far back "When did this actually start?" can be set. Generous
// enough to cover even a full nifas period logged very late, but
// still catches an accidental wrong-month/wrong-year typo rather
// than silently accepting it and corrupting cycle-length history.
const MAX_BACKDATE_DAYS = 60

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function minBackdateStr() {
  const d = new Date()
  d.setDate(d.getDate() - MAX_BACKDATE_DAYS)
  return d.toISOString().slice(0, 10)
}

function dayCount(startDate, throughDate) {
  const start = new Date(startDate)
  const through = new Date(throughDate)
  return Math.floor((through - start) / (1000 * 60 * 60 * 24)) + 1
}

// Plain difference in days between two dates (not inclusive-count,
// unlike dayCount above) -- used for start-to-start cycle length.
function daysBetween(dateA, dateB) {
  const a = new Date(dateA)
  const b = new Date(dateB)
  return Math.round((b - a) / (1000 * 60 * 60 * 24))
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatDateShort(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

function dateKey(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

function average(nums) {
  if (!nums.length) return null
  return nums.reduce((a, b) => a + b, 0) / nums.length
}

// Builds a soft, descriptive prediction from a user's own logged
// history -- never presented as a guarantee, and explicitly never
// used to pre-emptively classify a day before bleeding is actually
// observed. Actual, observed bleeding is always what governs the
// real-time ruling; this is a planning aid only.
function computeCycleInsights(allCyclesDesc, activeCycle) {
  // allCyclesDesc: all cycles (active + past), newest start_date first.
  const withStart = allCyclesDesc.filter(c => c.start_date)
  const sortedAsc = [...withStart].sort((a, b) => a.start_date.localeCompare(b.start_date))

  const recentAsc = sortedAsc.slice(-1 * (RECENT_CYCLES_WINDOW + 1))
  const gaps = []
  for (let i = 1; i < recentAsc.length; i++) {
    gaps.push(daysBetween(recentAsc[i - 1].start_date, recentAsc[i].start_date))
  }

  const completedDurations = recentAsc
    .filter(c => c.end_date)
    .map(c => dayCount(c.start_date, c.end_date))

  const avgCycleLength = gaps.length >= MIN_GAPS_FOR_PREDICTION ? average(gaps) : null
  const avgBleedDuration = completedDurations.length ? average(completedDurations) : null

  let predictedNextStart = null
  let predictedEndEstimate = null

  const mostRecentStart = sortedAsc.length ? sortedAsc[sortedAsc.length - 1].start_date : null

  if (!activeCycle && avgCycleLength !== null && mostRecentStart) {
    const predicted = new Date(mostRecentStart)
    predicted.setDate(predicted.getDate() + Math.round(avgCycleLength))
    predictedNextStart = predicted.toISOString().slice(0, 10)
  }

  if (activeCycle && avgBleedDuration !== null) {
    const predicted = new Date(activeCycle.start_date)
    predicted.setDate(predicted.getDate() + Math.round(avgBleedDuration) - 1)
    predictedEndEstimate = predicted.toISOString().slice(0, 10)
  }

  let irregularityNote = null
  if (gaps.length >= 2) {
    const spread = Math.max(...gaps) - Math.min(...gaps)
    if (spread > IRREGULARITY_SPREAD_DAYS) {
      irregularityNote = `Your cycle length has varied by about ${spread} days across your last ${gaps.length + 1} logged cycles.`
    }
  }

  return {
    hasData: gaps.length >= MIN_GAPS_FOR_PREDICTION || avgBleedDuration !== null,
    isLimited: gaps.length > 0 && gaps.length < GAPS_FOR_CONFIDENT_PREDICTION,
    avgCycleLength,
    avgBleedDuration,
    predictedNextStart,
    predictedEndEstimate,
    irregularityNote,
    sampleSize: gaps.length,
  }
}

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9
}

function formatTemp(celsius, unit) {
  if (celsius === null || celsius === undefined) return ''
  return unit === 'fahrenheit' ? celsiusToFahrenheit(celsius).toFixed(1) : Number(celsius).toFixed(2)
}

// Only meaningful when not currently in an active bleeding cycle,
// mirroring predictedNextStart's own same condition above.
function computeFertileWindow(cycleInsights, activeCycle) {
  if (activeCycle || !cycleInsights.predictedNextStart) return null
  const ovulation = new Date(cycleInsights.predictedNextStart)
  ovulation.setDate(ovulation.getDate() - LUTEAL_PHASE_DAYS)
  const start = new Date(ovulation)
  start.setDate(start.getDate() - FERTILE_WINDOW_BEFORE)
  const end = new Date(ovulation)
  end.setDate(end.getDate() + FERTILE_WINDOW_AFTER)
  return {
    ovulationEstimate: ovulation.toISOString().slice(0, 10),
    fertileStart: start.toISOString().slice(0, 10),
    fertileEnd: end.toISOString().slice(0, 10),
  }
}

function currentPregnancyWeek(lmpDate) {
  const days = daysBetween(lmpDate, todayStr())
  return Math.max(0, Math.floor(days / 7))
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
  const [selectedColor, setSelectedColor] = useState(null)
  const [hasClots, setHasClots] = useState(false)
  const [deletingCycleId, setDeletingCycleId] = useState(null)

  // ── "When did this actually start?" date, used only when there is
  // no active cycle yet — lets a late first login for this cycle
  // still record the real start date instead of defaulting to today.
  const [newCycleDate, setNewCycleDate] = useState(todayStr())

  // ── "Mark bleeding stopped" date picker ─────────────────────
  const [showStopPicker, setShowStopPicker] = useState(false)
  const [stopDate, setStopDate] = useState('')

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
  const [dayColor, setDayColor] = useState(null)
  const [dayHasClots, setDayHasClots] = useState(false)

  // ── Fertility / BBT / pregnancy state (opt-in, separate mode) ──
  const [settings, setSettings] = useState({ ttc_enabled: false, bbt_unit: 'celsius' })
  const [settingsLoading, setSettingsLoading] = useState(false)
  const [savingSettings, setSavingSettings] = useState(false)
  const [fertilityError, setFertilityError] = useState(null)

  const [bbtLogs, setBbtLogs] = useState([])
  const [bbtInput, setBbtInput] = useState('')
  const [bbtNoteInput, setBbtNoteInput] = useState('')
  const [savingBbt, setSavingBbt] = useState(false)

  const [pregnancy, setPregnancy] = useState(null)
  const [showStartPregnancy, setShowStartPregnancy] = useState(false)
  const [pregnancyLmpDate, setPregnancyLmpDate] = useState('')
  const [startingPregnancy, setStartingPregnancy] = useState(false)
  const [endingPregnancy, setEndingPregnancy] = useState(false)

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

  const fetchSettings = useCallback(async () => {
    if (!user) return
    setSettingsLoading(true)
    try {
      const { data, error } = await supabase
        .from('womens_fiqh_settings')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle()
      if (error) throw error
      if (data) setSettings({ ttc_enabled: !!data.ttc_enabled, bbt_unit: data.bbt_unit || 'celsius' })
    } catch (err) {
      console.error('Failed to load fertility settings:', err)
    } finally {
      setSettingsLoading(false)
    }
  }, [user])

  const fetchBbtLogs = useCallback(async () => {
    if (!user) return
    try {
      const { data, error } = await supabase
        .from('womens_fiqh_bbt_logs')
        .select('*')
        .eq('user_id', user.id)
        .order('date', { ascending: false })
        .limit(30)
      if (error) throw error
      setBbtLogs(data || [])
    } catch (err) {
      console.error('Failed to load BBT logs:', err)
    }
  }, [user])

  const fetchPregnancy = useCallback(async () => {
    if (!user) return
    try {
      const { data, error } = await supabase
        .from('womens_fiqh_pregnancy')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .maybeSingle()
      if (error) throw error
      setPregnancy(data || null)
    } catch (err) {
      console.error('Failed to load pregnancy tracking:', err)
    }
  }, [user])

  useEffect(() => {
    if (tab === 'fertility') {
      fetchSettings()
      fetchBbtLogs()
      fetchPregnancy()
    }
  }, [tab, fetchSettings, fetchBbtLogs, fetchPregnancy])

  const allCycles = activeCycle ? [activeCycle, ...pastCycles] : pastCycles

  const maxDaysFor = (isPostpartum) => {
    const topic = isPostpartum ? 'nifas' : 'hayd'
    return WOMENS_FIQH_CONTENT[topic]?.max_duration_days || FALLBACK_MAX_DAYS[topic]
  }

  const dayLookup = (() => {
    const map = {}
    allCycles.forEach(cycle => {
      const maxDays = maxDaysFor(cycle.is_postpartum)
      ;(cycle.days || []).forEach(d => {
        const n = dayCount(cycle.start_date, d.date)
        map[d.date] = {
          intensity: d.intensity,
          notes: d.notes || '',
          color: d.color || null,
          hasClots: !!d.has_clots,
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

  const cycleInsights = computeCycleInsights(allCycles, activeCycle)
  const fertileWindow = computeFertileWindow(cycleInsights, activeCycle)

  const toggleTtc = async () => {
    if (!user) return
    setSavingSettings(true)
    setFertilityError(null)
    try {
      const newValue = !settings.ttc_enabled
      const { error } = await supabase
        .from('womens_fiqh_settings')
        .upsert({ user_id: user.id, ttc_enabled: newValue, bbt_unit: settings.bbt_unit, updated_at: new Date().toISOString() })
      if (error) throw error
      setSettings(s => ({ ...s, ttc_enabled: newValue }))
    } catch (err) {
      setFertilityError(err.message)
    } finally {
      setSavingSettings(false)
    }
  }

  const toggleBbtUnit = async () => {
    if (!user) return
    const newUnit = settings.bbt_unit === 'celsius' ? 'fahrenheit' : 'celsius'
    try {
      const { error } = await supabase
        .from('womens_fiqh_settings')
        .upsert({ user_id: user.id, ttc_enabled: settings.ttc_enabled, bbt_unit: newUnit, updated_at: new Date().toISOString() })
      if (error) throw error
      setSettings(s => ({ ...s, bbt_unit: newUnit }))
    } catch (err) {
      setFertilityError(err.message)
    }
  }

  const saveBbtReading = async () => {
    if (!user || !bbtInput.trim()) return
    const raw = parseFloat(bbtInput)
    if (Number.isNaN(raw)) {
      setFertilityError('Enter a valid temperature.')
      return
    }
    const celsius = settings.bbt_unit === 'fahrenheit' ? fahrenheitToCelsius(raw) : raw
    setSavingBbt(true)
    setFertilityError(null)
    try {
      const { error } = await supabase
        .from('womens_fiqh_bbt_logs')
        .upsert(
          { user_id: user.id, date: todayStr(), temperature_celsius: celsius, notes: bbtNoteInput.trim() || null },
          { onConflict: 'user_id,date' }
        )
      if (error) throw error
      setBbtInput('')
      setBbtNoteInput('')
      fetchBbtLogs()
    } catch (err) {
      setFertilityError(err.message)
    } finally {
      setSavingBbt(false)
    }
  }

  const openStartPregnancy = () => {
    setPregnancyLmpDate(todayStr())
    setShowStartPregnancy(true)
    setFertilityError(null)
  }

  const cancelStartPregnancy = () => {
    setShowStartPregnancy(false)
    setPregnancyLmpDate('')
  }

  const confirmStartPregnancy = async () => {
    if (!user || !pregnancyLmpDate) return
    if (pregnancyLmpDate > todayStr()) {
      setFertilityError("The last period date can't be in the future.")
      return
    }
    setStartingPregnancy(true)
    setFertilityError(null)
    try {
      const lmp = new Date(pregnancyLmpDate)
      const due = new Date(lmp)
      due.setDate(due.getDate() + PREGNANCY_DURATION_DAYS)
      const { error } = await supabase.from('womens_fiqh_pregnancy').insert({
        user_id: user.id,
        lmp_date: pregnancyLmpDate,
        due_date: due.toISOString().slice(0, 10),
        is_active: true,
      })
      if (error) throw error
      setShowStartPregnancy(false)
      setPregnancyLmpDate('')
      fetchPregnancy()
    } catch (err) {
      setFertilityError(err.message)
    } finally {
      setStartingPregnancy(false)
    }
  }

  const endPregnancyTracking = async () => {
    if (!pregnancy) return
    const confirmed = window.confirm('Stop tracking this pregnancy? This keeps the record but marks it as no longer active.')
    if (!confirmed) return
    setEndingPregnancy(true)
    setFertilityError(null)
    try {
      const { error } = await supabase
        .from('womens_fiqh_pregnancy')
        .update({ is_active: false, ended_at: new Date().toISOString() })
        .eq('id', pregnancy.id)
      if (error) throw error
      fetchPregnancy()
    } catch (err) {
      setFertilityError(err.message)
    } finally {
      setEndingPregnancy(false)
    }
  }

  const startOrLogToday = async (intensity) => {
    if (!user) return
    setLogging(true)
    setTrackerError(null)
    try {
      const today = todayStr()
      const note = noteInput.trim()
      if (activeCycle) {
        const entry = { date: today, intensity, notes: note, color: selectedColor, has_clots: hasClots }
        const alreadyLogged = (activeCycle.days || []).some(d => d.date === today)
        const newDays = alreadyLogged
          ? (activeCycle.days || []).map(d => d.date === today ? entry : d)
          : [...(activeCycle.days || []), entry]
        const { error } = await supabase
          .from('womens_fiqh_cycles')
          .update({ days: newDays, updated_at: new Date().toISOString() })
          .eq('id', activeCycle.id)
        if (error) throw error
      } else {
        if (newCycleDate > today) {
          setTrackerError("Start date can't be in the future.")
          setLogging(false)
          return
        }
        if (newCycleDate < minBackdateStr()) {
          setTrackerError(`Start date can't be more than ${MAX_BACKDATE_DAYS} days ago. If this is correct, please contact support.`)
          setLogging(false)
          return
        }
        const entry = { date: newCycleDate, intensity, notes: note, color: selectedColor, has_clots: hasClots }
        const { error } = await supabase.from('womens_fiqh_cycles').insert({
          user_id: user.id,
          start_date: newCycleDate,
          is_postpartum: startingPostpartum,
          days: [entry],
        })
        if (error) throw error
      }
      setNoteInput('')
      setSelectedColor(null)
      setHasClots(false)
      setNewCycleDate(today)
      fetchCycles()
    } catch (err) {
      setTrackerError(err.message)
    } finally {
      setLogging(false)
    }
  }

  const openStopPicker = () => {
    setStopDate(todayStr())
    setShowStopPicker(true)
    setTrackerError(null)
  }

  const cancelStopPicker = () => {
    setShowStopPicker(false)
    setStopDate('')
  }

  const confirmStopped = async () => {
    if (!activeCycle || !stopDate) return
    if (stopDate < activeCycle.start_date) {
      setTrackerError("End date can't be before the start date.")
      return
    }
    if (stopDate > todayStr()) {
      setTrackerError("End date can't be in the future.")
      return
    }
    setStopping(true)
    setTrackerError(null)
    try {
      const { error } = await supabase
        .from('womens_fiqh_cycles')
        .update({ end_date: stopDate, updated_at: new Date().toISOString() })
        .eq('id', activeCycle.id)
      if (error) throw error
      setShowStopPicker(false)
      setStopDate('')
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
      const entry = { date: dateStr, intensity, notes: note, color: dayColor, has_clots: dayHasClots }
      const alreadyLogged = (activeCycle.days || []).some(d => d.date === dateStr)
      const newDays = alreadyLogged
        ? (activeCycle.days || []).map(d => d.date === dateStr ? entry : d)
        : [...(activeCycle.days || []), entry]
      const { error } = await supabase
        .from('womens_fiqh_cycles')
        .update({ days: newDays, updated_at: new Date().toISOString() })
        .eq('id', activeCycle.id)
      if (error) throw error
      setDayNoteInput('')
      setDayColor(null)
      setDayHasClots(false)
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
    setDayColor(dayLookup[key]?.color || null)
    setDayHasClots(dayLookup[key]?.hasClots || false)
  }

  const closeDaySheet = () => {
    setSelectedDay(null)
    setDayNoteInput('')
    setDayColor(null)
    setDayHasClots(false)
  }

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

  const openTopic = (key) => setActiveTopic(key)
  const closeTopic = () => setActiveTopic(null)

  const renderLearn = () => {
    if (activeTopic) {
      const meta = TOPICS.find(t => t.key === activeTopic)
      const entry = CONTENT_SOURCES[meta.source][activeTopic]
      return (
        <>
          <button className="wf-back" onClick={closeTopic}>← Back to Women's Fiqh</button>

          <div className="wf-detail-header card" data-a11y-label={`${entry.title}.`}>
            <span className="wf-detail-icon"><Icon name={meta.icon} /></span>
            <div>
              <h2 className="wf-detail-title">{entry.title}</h2>
              <p className="wf-detail-arabic arabic">{entry.arabic_title}</p>
            </div>
          </div>

          {Array.isArray(entry.sections) ? (
            entry.sections.map(s => (
              <div key={s.key} className="wf-section card" data-a11y-label={`${s.title}: ${s.body}`}>
                <h3 className="wf-section-title">
                  <Icon name={s.icon} /> {s.title}
                </h3>
                <p className="wf-section-body">{s.body}</p>
              </div>
            ))
          ) : (
            ['definition', 'duration', 'signs', 'rulings'].map(section => (
              entry[section] ? (
                <div key={section} className="wf-section card" data-a11y-label={`${section}: ${entry[section]}`}>
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
                  <div
                    key={i}
                    className="wf-case"
                    data-a11y-label={`Case: ${c.title}. ${c.scenario}. Ruling: ${c.ruling}`}
                  >
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
                  <div
                    key={i}
                    className="wf-faq-item"
                    data-a11y-label={`Question: ${f.question}. Answer: ${f.answer}`}
                  >
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
          const entry = CONTENT_SOURCES[t.source][t.key]
          return (
            <button
              key={t.key}
              className="wf-topic-card card"
              onClick={() => openTopic(t.key)}
              data-a11y-label={`${t.label}. ${entry.quick_fact}`}
            >
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

  const goToPrevMonth = () => {
    setCalendarMonth(m => m.month === 0 ? { year: m.year - 1, month: 11 } : { year: m.year, month: m.month - 1 })
  }
  const goToNextMonth = () => {
    setCalendarMonth(m => m.month === 11 ? { year: m.year + 1, month: 0 } : { year: m.year, month: m.month + 1 })
  }

  const statusLabel = (s) => s === 'istihadah' ? 'Istihadah' : s === 'nifas' ? 'Nifas' : 'Hayd'

  const renderCalendar = () => {
    const { year, month } = calendarMonth
    const firstOfMonth = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const startWeekday = firstOfMonth.getDay()
    const today = todayStr()

    const cells = []
    for (let i = 0; i < startWeekday; i++) cells.push(null)
    for (let d = 1; d <= daysInMonth; d++) cells.push(d)

    return (
      <div className="wf-calendar card" data-a11y-label={`Calendar: ${MONTH_NAMES[month]} ${year}`}>
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
            const spokenLabel = `${MONTH_NAMES[month]} ${d}${isToday ? ', today' : ''}.${logged ? ` Logged as ${statusLabel(logged.status)}.` : ' Nothing logged.'}${logged?.notes ? ' Has a note.' : ''}`
            return (
              <button
                key={key}
                className={`wf-calendar-cell ${statusClass} ${isToday ? 'wf-calendar-cell--today' : ''}`}
                onClick={() => openDay(key)}
                data-a11y-label={spokenLabel}
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
                Logged as <strong>{statusLabel(logged.status)}</strong>
                {logged.intensity ? ` · ${INTENSITY_LABEL[logged.intensity] || logged.intensity}` : ''}
                {logged.color ? ` · ${COLOR_LABEL[logged.color] || logged.color}` : ''}
                {logged.hasClots ? ' · clots noted' : ''}
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
              <p className="wf-optional-label">Colour (optional)</p>
              <div className="wf-color-row">
                {COLORS.map(c => (
                  <button
                    key={c.key}
                    type="button"
                    className={`wf-color-btn ${dayColor === c.key ? 'wf-color-btn--active' : ''}`}
                    onClick={() => setDayColor(dayColor === c.key ? null : c.key)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <label className="wf-clots-check">
                <input type="checkbox" checked={dayHasClots} onChange={e => setDayHasClots(e.target.checked)} />
                Clots noticed
              </label>
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

  const renderInsights = () => {
    if (!cycleInsights.hasData) return null
    return (
      <div className="wf-insights card" data-a11y-label="Your cycle insights, based on your own logged history.">
        <h3 className="wf-section-title"><Icon name="trend" /> Your Pattern</h3>

        <div className="wf-insights-grid">
          {activeCycle ? (
            cycleInsights.predictedEndEstimate && (
              <div className="wf-insight-item">
                <span className="wf-insight-label">Estimated to end around</span>
                <span className="wf-insight-value">{formatDateShort(cycleInsights.predictedEndEstimate)}</span>
              </div>
            )
          ) : (
            cycleInsights.predictedNextStart && (
              <div className="wf-insight-item">
                <span className="wf-insight-label">Next expected around</span>
                <span className="wf-insight-value">{formatDateShort(cycleInsights.predictedNextStart)}</span>
              </div>
            )
          )}

          {cycleInsights.avgCycleLength !== null && (
            <div className="wf-insight-item">
              <span className="wf-insight-label">Average cycle length</span>
              <span className="wf-insight-value">{Math.round(cycleInsights.avgCycleLength)} days</span>
            </div>
          )}

          {cycleInsights.avgBleedDuration !== null && (
            <div className="wf-insight-item">
              <span className="wf-insight-label">Average bleeding length</span>
              <span className="wf-insight-value">{Math.round(cycleInsights.avgBleedDuration)} days</span>
            </div>
          )}
        </div>

        {cycleInsights.isLimited && (
          <p className="wf-insights-caveat">Based on limited history so far ({cycleInsights.sampleSize + 1} logged cycle{cycleInsights.sampleSize === 0 ? '' : 's'}), this will get more accurate the longer you track.</p>
        )}

        {cycleInsights.irregularityNote && (
          <p className="wf-insights-caveat">
            {cycleInsights.irregularityNote} If this is a change for you or a concern, it's worth mentioning to a healthcare provider.
          </p>
        )}

        <p className="wf-insights-caveat wf-insights-caveat--emphasis">
          This is an estimate from your own history, not a guarantee. What you actually observe on a given day is always what governs the ruling, not a prediction.
        </p>
      </div>
    )
  }

  const renderFertility = () => {
    if (settingsLoading) {
      return <div className="wf-loading"><div className="wf-spinner" /></div>
    }

    if (!settings.ttc_enabled) {
      return (
        <div className="wf-fertility-optin card">
          <h3 className="wf-section-title"><Icon name="droplets" /> Fertility &amp; Pregnancy Tracking</h3>
          <p className="wf-section-body" style={{ marginBottom: 16 }}>
            A separate, opt-in mode for tracking ovulation, basal body temperature, and
            pregnancy, useful if you're trying to conceive or are currently pregnant. It's off
            by default since it isn't relevant to everyone using this tracker.
          </p>
          {fertilityError && <div className="wf-error">{fertilityError}</div>}
          <button className="wf-fertility-cta" onClick={toggleTtc} disabled={savingSettings}>
            {savingSettings ? 'Enabling…' : 'Enable Fertility Tracking'}
          </button>
        </div>
      )
    }

    if (pregnancy) {
      const week = currentPregnancyWeek(pregnancy.lmp_date)
      return (
        <>
          {fertilityError && <div className="wf-error card">{fertilityError}</div>}
          <div className="wf-status-card card">
            <p className="wf-status-label">Week {week}</p>
            <p className="wf-status-value">Pregnancy</p>
            <p className="wf-status-note">
              Estimated due date {formatDate(pregnancy.due_date)}, based on a last period date of{' '}
              {formatDate(pregnancy.lmp_date)}. This is a standard 40-week estimate; actual timing
              varies, and your own healthcare provider's own dating (for example, from an
              ultrasound) should always take priority over this if the two differ.
            </p>
            <div className="wf-status-actions">
              <button className="wf-delete-trigger" onClick={endPregnancyTracking} disabled={endingPregnancy}>
                {endingPregnancy ? 'Ending…' : 'End tracking'}
              </button>
            </div>
          </div>
        </>
      )
    }

    return (
      <>
        <div className="wf-section-intro card">
          <p className="wf-section-intro-text">
            Fertility tracking is on. The estimates below come from your own logged cycle
            history and are approximate: not a guarantee, not a method of birth control, and not
            a substitute for a fertility specialist if you need one.
          </p>
        </div>

        {fertilityError && <div className="wf-error card">{fertilityError}</div>}

        {fertileWindow ? (
          <div className="wf-insights card">
            <h3 className="wf-section-title"><Icon name="trend" /> Estimated Fertile Window</h3>
            <div className="wf-insights-grid">
              <div className="wf-insight-item">
                <span className="wf-insight-label">Fertile window</span>
                <span className="wf-insight-value">{formatDateShort(fertileWindow.fertileStart)} – {formatDateShort(fertileWindow.fertileEnd)}</span>
              </div>
              <div className="wf-insight-item">
                <span className="wf-insight-label">Estimated ovulation</span>
                <span className="wf-insight-value">{formatDateShort(fertileWindow.ovulationEstimate)}</span>
              </div>
            </div>
            <p className="wf-insights-caveat wf-insights-caveat--emphasis">
              Estimated from your average cycle length using a typical 14-day luteal phase.
              Individual cycles vary; this is a planning aid, not a precise prediction.
            </p>
          </div>
        ) : (
          <div className="wf-insights card">
            <p className="wf-insights-caveat">Log at least two past cycles in the Tracker tab to get a fertile-window estimate here.</p>
          </div>
        )}

        <div className="wf-log-card card">
          <p className="wf-log-label">Basal body temperature</p>
          <div className="wf-bbt-input-row">
            <input
              type="number"
              step="0.01"
              className="wf-bbt-input"
              placeholder={settings.bbt_unit === 'fahrenheit' ? '98.60' : '36.50'}
              value={bbtInput}
              onChange={e => setBbtInput(e.target.value)}
            />
            <span className="wf-bbt-unit">°{settings.bbt_unit === 'fahrenheit' ? 'F' : 'C'}</span>
            <button className="wf-bbt-unit-toggle" type="button" onClick={toggleBbtUnit}>
              Use °{settings.bbt_unit === 'fahrenheit' ? 'C' : 'F'}
            </button>
          </div>
          <textarea
            className="wf-note-input"
            placeholder="Notes (optional)"
            value={bbtNoteInput}
            onChange={e => setBbtNoteInput(e.target.value)}
            rows={2}
            style={{ marginTop: 8 }}
          />
          <button className="wf-fertility-cta" onClick={saveBbtReading} disabled={savingBbt || !bbtInput.trim()}>
            {savingBbt ? 'Saving…' : "Log today's reading"}
          </button>

          {bbtLogs.length > 0 && (
            <div className="wf-bbt-history">
              <p className="wf-history-label" style={{ marginTop: 16 }}>Recent readings</p>
              {bbtLogs.slice(0, 10).map(log => (
                <div key={log.id} className="wf-history-item">
                  <span>{formatDate(log.date)}</span>
                  <span className="wf-history-badge">
                    {formatTemp(log.temperature_celsius, settings.bbt_unit)}°{settings.bbt_unit === 'fahrenheit' ? 'F' : 'C'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="wf-log-card card">
          <p className="wf-log-label">Tracking a pregnancy?</p>
          {showStartPregnancy ? (
            <div className="wf-edit-date-form">
              <label className="wf-edit-date-label">
                First day of your last period
                <input
                  type="date"
                  className="wf-edit-date-input"
                  value={pregnancyLmpDate}
                  max={todayStr()}
                  onChange={e => setPregnancyLmpDate(e.target.value)}
                />
              </label>
              <div className="wf-edit-date-actions">
                <button className="btn btn-ghost" onClick={cancelStartPregnancy} disabled={startingPregnancy}>Cancel</button>
                <button className="wf-intensity-btn" onClick={confirmStartPregnancy} disabled={startingPregnancy || !pregnancyLmpDate}>
                  {startingPregnancy ? 'Saving…' : 'Start Tracking'}
                </button>
              </div>
            </div>
          ) : (
            <button className="btn btn-ghost" onClick={openStartPregnancy}>Start tracking a pregnancy</button>
          )}
        </div>

        <button className="wf-back" onClick={toggleTtc} disabled={savingSettings} style={{ marginTop: 8 }}>
          Turn off fertility tracking
        </button>
      </>
    )
  }

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
          <div
            className={`wf-status-card card ${currentStatus.overMax ? 'wf-status-card--istihadah' : ''}`}
            data-a11y-label={`Day ${currentStatus.days}${activeCycle.is_postpartum ? ', postpartum' : ''}. Currently ${currentStatus.label}. ${currentStatus.overMax ? `Past the ${currentStatus.maxDays}-day maximum.` : `Up to ${currentStatus.maxDays} days for this category.`}`}
          >
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
                  data-a11y-label="Delete this cycle"
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
                <p className="wf-optional-label">Colour (optional)</p>
                <div className="wf-color-row">
                  {COLORS.map(c => (
                    <button
                      key={c.key}
                      type="button"
                      className={`wf-color-btn ${selectedColor === c.key ? 'wf-color-btn--active' : ''}`}
                      onClick={() => setSelectedColor(selectedColor === c.key ? null : c.key)}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                <label className="wf-clots-check">
                  <input type="checkbox" checked={hasClots} onChange={e => setHasClots(e.target.checked)} />
                  Clots noticed
                </label>
                <div className="wf-intensity-row">
                  {INTENSITIES.map(i => (
                    <button key={i.key} className="wf-intensity-btn" disabled={logging} onClick={() => startOrLogToday(i.key)}>
                      {i.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {showStopPicker ? (
              <div className="wf-edit-date-form" style={{ marginTop: 12 }}>
                <label className="wf-edit-date-label">
                  Bleeding ended on
                  <input
                    type="date"
                    className="wf-edit-date-input"
                    value={stopDate}
                    min={activeCycle.start_date}
                    max={todayStr()}
                    onChange={e => setStopDate(e.target.value)}
                  />
                </label>
                <div className="wf-edit-date-actions">
                  <button className="btn btn-ghost" onClick={cancelStopPicker} disabled={stopping}>Cancel</button>
                  <button className="wf-intensity-btn" onClick={confirmStopped} disabled={stopping || !stopDate}>
                    {stopping ? 'Saving…' : 'Confirm'}
                  </button>
                </div>
              </div>
            ) : (
              <button className="btn btn-ghost" onClick={openStopPicker} style={{ marginTop: 12, color: '#c0392b' }}>
                Mark bleeding stopped
              </button>
            )}
          </div>

          {renderInsights()}
        </>
      ) : (
        <>
          <div className="wf-log-card card">
            <p className="wf-log-label">Start tracking</p>

            <label className="wf-edit-date-label" style={{ marginBottom: 14 }}>
              When did this actually start?
              <input
                type="date"
                className="wf-edit-date-input"
                value={newCycleDate}
                min={minBackdateStr()}
                max={todayStr()}
                onChange={e => setNewCycleDate(e.target.value)}
              />
            </label>
            <p className="wf-optional-label" style={{ marginTop: -8, marginBottom: 12 }}>
              Didn't get to log on the first day? Pick the actual date it started — you can do
              this whenever you're able to log in, and it'll be counted correctly from that day.
            </p>

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
            <p className="wf-optional-label">Colour (optional)</p>
            <div className="wf-color-row">
              {COLORS.map(c => (
                <button
                  key={c.key}
                  type="button"
                  className={`wf-color-btn ${selectedColor === c.key ? 'wf-color-btn--active' : ''}`}
                  onClick={() => setSelectedColor(selectedColor === c.key ? null : c.key)}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <label className="wf-clots-check">
              <input type="checkbox" checked={hasClots} onChange={e => setHasClots(e.target.checked)} />
              Clots noticed
            </label>
            <div className="wf-intensity-row">
              {INTENSITIES.map(i => (
                <button key={i.key} className="wf-intensity-btn" disabled={logging} onClick={() => startOrLogToday(i.key)}>
                  {i.label}
                </button>
              ))}
            </div>
          </div>

          {renderInsights()}
        </>
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
              <div
                key={c.id}
                className="wf-history-item"
                style={{ flexDirection: 'column', alignItems: 'stretch' }}
                data-a11y-label={isEditing ? undefined : `${formatDate(c.start_date)} to ${formatDate(c.end_date)}, ${days} days, ${label}`}
              >
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
                        data-a11y-label="Delete this cycle"
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
        <button className={`wf-tab ${tab === 'fertility' ? 'wf-tab--active' : ''}`} onClick={() => setTab('fertility')}>
          Fertility
        </button>
      </div>

      {tab === 'learn' ? renderLearn() : tab === 'tracker' ? renderTracker() : renderFertility()}
    </div>
  )
}
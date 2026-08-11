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
}

const Icon = ({ name }) => <span className="wf-icon" aria-hidden="true">{ICONS[name]}</span>

const TOPICS = [
  { key: 'hayd', label: 'Hayd', arabic: 'الحَيْض', icon: 'droplet' },
  { key: 'nifas', label: 'Nifas', arabic: 'النِّفَاس', icon: 'droplets' },
  { key: 'istihadah', label: 'Istihadah', arabic: 'الاسْتِحَاضَة', icon: 'question' },
]

const SECTION_ICONS = { definition: 'book', duration: 'calendar', signs: 'droplet', rulings: 'scroll' }

const FALLBACK_MAX_DAYS = { hayd: 15, nifas: 60 }

const INTENSITIES = [
  { key: 'spotting', label: 'Spotting' },
  { key: 'light', label: 'Light' },
  { key: 'medium', label: 'Medium' },
  { key: 'heavy', label: 'Heavy' },
]

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

  const maxDaysFor = (isPostpartum) => {
    const topic = isPostpartum ? 'nifas' : 'hayd'
    return WOMENS_FIQH_CONTENT[topic]?.max_duration_days || FALLBACK_MAX_DAYS[topic]
  }

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
      if (activeCycle) {
        const alreadyLogged = (activeCycle.days || []).some(d => d.date === today)
        const newDays = alreadyLogged
          ? (activeCycle.days || []).map(d => d.date === today ? { ...d, intensity } : d)
          : [...(activeCycle.days || []), { date: today, intensity }]
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
          days: [{ date: today, intensity }],
        })
        if (error) throw error
      }
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

          {['definition', 'duration', 'signs', 'rulings'].map(section => (
            entry[section] ? (
              <div key={section} className="wf-section card">
                <h3 className="wf-section-title">
                  <Icon name={SECTION_ICONS[section]} /> {section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                <p className="wf-section-body">{entry[section]}</p>
              </div>
            ) : null
          ))}

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
          </div>

          <div className="wf-log-card card">
            {todayAlreadyLogged ? (
              <p className="wf-log-done"><Icon name="check" /> Today is logged.</p>
            ) : (
              <>
                <p className="wf-log-label">Log today's intensity</p>
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
          <div className="wf-intensity-row" style={{ marginTop: 12 }}>
            {INTENSITIES.map(i => (
              <button key={i.key} className="wf-intensity-btn" disabled={logging} onClick={() => startOrLogToday(i.key)}>
                {i.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {pastCycles.length > 0 && (
        <div className="wf-history">
          <p className="wf-history-label">History</p>
          {pastCycles.map(c => {
            const days = dayCount(c.start_date, c.end_date)
            const maxDays = maxDaysFor(c.is_postpartum)
            const label = days > maxDays ? 'Istihadah' : (c.is_postpartum ? 'Nifas' : 'Hayd')
            return (
              <div key={c.id} className="wf-history-item">
                <span>{formatDate(c.start_date)} – {formatDate(c.end_date)}</span>
                <span className="wf-history-badge">{days}d · {label}</span>
              </div>
            )
          })}
        </div>
      )}
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
import SpacesCTA from '../components/SpacesCTA.jsx'
import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase.js'
import { QIWAAMAH_CONTENT } from '../data/qiwaamah.js'
import './Qiwaamah.css'

const ICONS = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    </svg>
  ),
  coins: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-3-2.5-8-6-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5-5 8.5-8 11z" />
    </svg>
  ),
  child: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="3" />
      <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
    </svg>
  ),
  parents: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  calm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  storm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 14a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A4.5 4.5 0 0 1 18 13" />
      <path d="M6 14h12" />
      <path d="M9 18l-1 3" />
      <path d="M13 18l-1 3" />
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
  question: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 0 1 4.6-1.4c.6.9.4 1.9-.4 2.6-.9.8-1.7 1.2-1.7 2.3" />
      <circle cx="12" cy="16.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
}

const Icon = ({ name }) => <span className="qw-icon" aria-hidden="true">{ICONS[name]}</span>

const TOPICS = [
  { key: 'qiwaamah', label: 'Qiwaamah', arabic: 'القِوَامَة', icon: 'shield' },
  { key: 'nafaqah', label: 'Nafaqah', arabic: 'النَّفَقَة', icon: 'coins' },
  { key: 'husband', label: 'Being a Husband', arabic: 'حُقُوقُ الزَّوْجِيَّة', icon: 'heart' },
  { key: 'fatherhood', label: 'Fatherhood', arabic: 'الأُبُوَّة', icon: 'child' },
  { key: 'filial_duty', label: 'Filial Duty', arabic: 'بِرُّ الوَالِدَيْن', icon: 'parents' },
  { key: 'anger_leadership', label: 'Anger & Leadership', arabic: 'الغَضَب وَالقِيَادَة', icon: 'calm' },
  { key: 'hardship', label: 'Qiwaamah in Hardship', arabic: 'القِوَامَة فِي الشِّدَّة', icon: 'storm' },
]

const SECTION_ICONS = { definition: 'book', scope: 'scroll', signs: 'calm', rulings: 'scroll' }

const RATINGS = [
  { key: 'fell_short', label: 'Fell short' },
  { key: 'trying', label: 'Trying' },
  { key: 'steady', label: 'Steady' },
  { key: 'good_day', label: 'Good day' },
]

const RATING_LABEL = Object.fromEntries(RATINGS.map(r => [r.key, r.label]))

const REFLECTION_PROMPTS = [
  'Did I treat my wife/family with patience and kindness today?',
  'Did I fulfill my responsibilities — financial, emotional, or otherwise — as best I could?',
  'Was I present with my children today, not just providing for them?',
  'Is there something I said or did today that I want to make right?',
]

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function Qiwaamah({ user }) {
  const [tab, setTab] = useState('learn')
  const [activeTopic, setActiveTopic] = useState(null)

  // ── Reflect tab state ────────────────────────────────────────
  const [entries, setEntries] = useState([])
  const [entriesLoading, setEntriesLoading] = useState(false)
  const [entriesError, setEntriesError] = useState(null)
  const [reflectionInput, setReflectionInput] = useState('')
  const [ratingInput, setRatingInput] = useState(null)
  const [saving, setSaving] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState(null)

  const fetchEntries = useCallback(async () => {
    if (!user) return
    setEntriesLoading(true)
    setEntriesError(null)
    try {
      const { data, error } = await supabase
        .from('qiwaamah_reflections')
        .select('*')
        .eq('user_id', user.id)
        .order('entry_date', { ascending: false })
      if (error) throw error
      setEntries(data || [])
    } catch (err) {
      console.error('Failed to load reflections:', err)
      setEntriesError(err.message)
    } finally {
      setEntriesLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (tab === 'reflect') fetchEntries()
  }, [tab, fetchEntries])

  const todayEntry = entries.find(e => e.entry_date === todayStr())

  useEffect(() => {
    if (todayEntry) {
      setReflectionInput(todayEntry.reflection || '')
      setRatingInput(todayEntry.rating || null)
    }
  }, [todayEntry?.id])

  const saveTodayReflection = async () => {
    if (!user || !reflectionInput.trim()) return
    setSaving(true)
    setEntriesError(null)
    try {
      const { error } = await supabase.from('qiwaamah_reflections').upsert({
        user_id: user.id,
        entry_date: todayStr(),
        rating: ratingInput,
        reflection: reflectionInput.trim(),
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,entry_date' })
      if (error) throw error
      fetchEntries()
    } catch (err) {
      setEntriesError(err.message)
    } finally {
      setSaving(false)
    }
  }

  // ── Learn tab render ─────────────────────────────────────────
  const openTopic = (key) => setActiveTopic(key)
  const closeTopic = () => setActiveTopic(null)

  const renderLearn = () => {
    if (activeTopic) {
      const meta = TOPICS.find(t => t.key === activeTopic)
      const entry = QIWAAMAH_CONTENT[activeTopic]
      return (
        <>
          <button className="qw-back" onClick={closeTopic}>← Back to Qiwaamah</button>

          <div className="qw-detail-header card" data-a11y-label={`${entry.title}.`}>
            <span className="qw-detail-icon"><Icon name={meta.icon} /></span>
            <div>
              <h2 className="qw-detail-title">{entry.title}</h2>
              <p className="qw-detail-arabic arabic">{entry.arabic_title}</p>
            </div>
          </div>

          {['definition', 'scope', 'signs', 'rulings'].map(section => (
            entry[section] ? (
              <div key={section} className="qw-section card" data-a11y-label={`${section}: ${entry[section]}`}>
                <h3 className="qw-section-title">
                  <Icon name={SECTION_ICONS[section]} /> {section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                <p className="qw-section-body">{entry[section]}</p>
              </div>
            ) : null
          ))}

          {Array.isArray(entry.cases) && entry.cases.length > 0 && (
            <div className="qw-section card">
              <h3 className="qw-section-title"><Icon name="cases" /> Cases</h3>
              <div className="qw-cases">
                {entry.cases.map((c, i) => (
                  <div
                    key={i}
                    className="qw-case"
                    data-a11y-label={`Case: ${c.title}. ${c.scenario}. Ruling: ${c.ruling}`}
                  >
                    <p className="qw-case-title">{c.title}</p>
                    <p className="qw-case-scenario">{c.scenario}</p>
                    <p className="qw-case-ruling"><strong>Ruling:</strong> {c.ruling}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {Array.isArray(entry.faq) && entry.faq.length > 0 && (
            <div className="qw-section card">
              <h3 className="qw-section-title"><Icon name="question" /> Common Questions</h3>
              <div className="qw-faq">
                {entry.faq.map((f, i) => (
                  <div
                    key={i}
                    className="qw-faq-item"
                    data-a11y-label={`Question: ${f.question}. Answer: ${f.answer}`}
                  >
                    <p className="qw-faq-q">{f.question}</p>
                    <p className="qw-faq-a">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )
    }

    // NOTE: the pasted source had `<SpacesCTA variant="default" />` and
    // the reflectStreak variant sitting as orphaned JSX outside any
    // return statement (with "// ..." placeholder comments marking
    // where they belonged) — that doesn't compile as-is. Placed here,
    // at the end of the topic grid, and further below at the end of
    // renderReflect's history section, matching what the comments
    // indicated was intended. Flagging this so it can be corrected if
    // this guess doesn't match the original intent.
    return (
      <>
        <div className="qw-cards">
          {TOPICS.map(t => {
            const entry = QIWAAMAH_CONTENT[t.key]
            return (
              <button
                key={t.key}
                className="qw-topic-card card"
                onClick={() => openTopic(t.key)}
                data-a11y-label={`${t.label}. ${entry.quick_fact}`}
              >
                <span className="qw-topic-icon"><Icon name={t.icon} /></span>
                <div className="qw-topic-text">
                  <h3 className="qw-topic-label">{t.label}</h3>
                  <p className="qw-topic-arabic arabic">{t.arabic}</p>
                  <p className="qw-topic-desc">{entry.quick_fact}</p>
                </div>
                <span className="qw-topic-arrow">→</span>
              </button>
            )
          })}
        </div>
        <SpacesCTA user={user} variant="default" />
      </>
    )
  }

  // ── Reflect tab render ───────────────────────────────────────
  const renderReflect = () => {
    if (selectedEntry) {
      return (
        <>
          <button className="qw-back" onClick={() => setSelectedEntry(null)}>← Back to Reflect</button>
          <div
            className="qw-reflection-detail card"
            data-a11y-label={`${formatDate(selectedEntry.entry_date)}${selectedEntry.rating ? `, ${RATING_LABEL[selectedEntry.rating] || selectedEntry.rating}` : ''}. ${selectedEntry.reflection}`}
          >
            <p className="qw-reflection-detail-date">{formatDate(selectedEntry.entry_date)}</p>
            {selectedEntry.rating && (
              <span className="qw-rating-badge">{RATING_LABEL[selectedEntry.rating] || selectedEntry.rating}</span>
            )}
            <p className="qw-reflection-detail-text">{selectedEntry.reflection}</p>
          </div>
        </>
      )
    }

    return (
      <>
        <div className="qw-section-intro card">
          <h3 className="qw-section-intro-title">Did you move toward becoming a qawwam today?</h3>
          <p className="qw-section-intro-text">
            A few moments to reflect, honestly, on how you carried your responsibility today.
            This is private — visible only to you.
          </p>
        </div>

        <div className="qw-prompts card">
          {REFLECTION_PROMPTS.map((p, i) => (
            <p key={i} className="qw-prompt">{p}</p>
          ))}
        </div>

        {entriesError && <div className="qw-error card">{entriesError}</div>}

        <div className="qw-reflect-card card">
          <p className="qw-reflect-label">{todayEntry ? "Today's reflection" : 'What\'s on your heart about this today?'}</p>
          <textarea
            className="qw-reflection-input"
            placeholder="Write freely — no judgment, just honesty..."
            value={reflectionInput}
            onChange={e => setReflectionInput(e.target.value)}
            rows={5}
          />

          <p className="qw-reflect-label" style={{ marginTop: 14 }}>How would you describe today? (optional)</p>
          <div className="qw-rating-row">
            {RATINGS.map(r => (
              <button
                key={r.key}
                className={`qw-rating-btn ${ratingInput === r.key ? 'qw-rating-btn--active' : ''}`}
                onClick={() => setRatingInput(r.key === ratingInput ? null : r.key)}
              >
                {r.label}
              </button>
            ))}
          </div>

          <button
            className="qw-submit-btn"
            onClick={saveTodayReflection}
            disabled={saving || !reflectionInput.trim()}
            style={{ marginTop: 16 }}
          >
            {saving ? 'Saving…' : todayEntry ? 'Update Today\'s Reflection' : 'Save Reflection'}
          </button>
        </div>

        {entriesLoading ? (
          <div className="qw-loading"><div className="qw-spinner" /></div>
        ) : entries.filter(e => e.entry_date !== todayStr()).length > 0 && (
          <div className="qw-history">
            <p className="qw-history-label">Past Reflections</p>
            {entries.filter(e => e.entry_date !== todayStr()).map(e => (
              <button
                key={e.id}
                className="qw-history-item"
                onClick={() => setSelectedEntry(e)}
                data-a11y-label={`${formatDate(e.entry_date)}${e.rating ? `, ${RATING_LABEL[e.rating] || e.rating}` : ''}. ${e.reflection.length > 60 ? e.reflection.slice(0, 60) + '…' : e.reflection}`}
              >
                <span className="qw-history-date">{formatDate(e.entry_date)}</span>
                <span className="qw-history-preview">
                  {e.reflection.length > 60 ? e.reflection.slice(0, 60) + '…' : e.reflection}
                </span>
                {e.rating && <span className="qw-history-badge">{RATING_LABEL[e.rating] || e.rating}</span>}
              </button>
            ))}
          </div>
        )}

        {entries.length >= 5 && <SpacesCTA user={user} variant="reflectStreak" />}
      </>
    )
  }

  return (
    <div className="page-content qw-page">
      <h1 className="page-title">Qiwaamah</h1>
      <p className="page-subtitle">القِوَامَة — Leadership, responsibility, and the man who carries it</p>

      <div className="qw-tabs">
        <button className={`qw-tab ${tab === 'learn' ? 'qw-tab--active' : ''}`} onClick={() => { setTab('learn'); setActiveTopic(null) }}>
          Learn
        </button>
        <button className={`qw-tab ${tab === 'reflect' ? 'qw-tab--active' : ''}`} onClick={() => { setTab('reflect'); setSelectedEntry(null) }}>
          Reflect
        </button>
      </div>

      {tab === 'learn' ? renderLearn() : renderReflect()}
    </div>
  )
}
import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase.js'
import { NEW_MUSLIM_CONTENT } from '../data/newMuslim.js'
import './NewMuslim.css'

const ICONS = {
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 14.6 9 22 9.3 16 14 18 21.5 12 17.3 6 21.5 8 14 2 9.3 9.4 9" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-3-2.5-8-6-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5-5 8.5-8 11z" />
    </svg>
  ),
  pillar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="21" x2="6" y2="7" /><line x1="12" y1="21" x2="12" y2="7" /><line x1="18" y1="21" x2="18" y2="7" />
      <line x1="3" y1="21" x2="21" y2="21" /><line x1="3" y1="7" x2="21" y2="7" /><polyline points="4 7 12 3 20 7" />
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5c3.5 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3.5-8 7-13z" />
    </svg>
  ),
  prayer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21v-8a8 8 0 0 1 16 0v8" />
      <line x1="2" y1="21" x2="22" y2="21" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1z" />
      <line x1="12" y1="6" x2="12" y2="19" />
    </svg>
  ),
  hands: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 14c-1 3-3 5-6 5-1 0-2-1-2-3 0-4 4-8 6-9" />
      <path d="M13 14c1 3 3 5 6 5 1 0 2-1 2-3 0-4-4-8-6-9" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21" /><path d="M5 7h14" />
      <path d="M5 7l-3 7a3 3 0 0 0 6 0z" /><path d="M19 7l-3 7a3 3 0 0 0 6 0z" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  question: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 0 1 4.6-1.4c.6.9.4 1.9-.4 2.6-.9.8-1.7 1.2-1.7 2.3" />
      <circle cx="12" cy="16.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
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

const Icon = ({ name }) => <span className="nm-icon" aria-hidden="true">{ICONS[name]}</span>

const TOPICS = [
  { key: 'welcome_shahada', label: 'The Shahada & Your Beginning', arabic: 'الشَّهَادَة', icon: 'star' },
  { key: 'iman_pillars', label: 'The Six Pillars of Faith', arabic: 'أَرْكَانُ الإِيمَان', icon: 'heart' },
  { key: 'islam_pillars', label: 'The Five Pillars of Islam', arabic: 'أَرْكَانُ الإِسْلَام', icon: 'pillar' },
  { key: 'purification', label: 'Purification — Wudu & Ghusl', arabic: 'الطَّهَارَة', icon: 'droplet' },
  { key: 'how_to_pray', label: 'Learning Salah Step by Step', arabic: 'الصَّلَاة', icon: 'prayer' },
  { key: 'quran_basics', label: "Starting with the Qur'an", arabic: 'القُرْآن', icon: 'book' },
  { key: 'daily_duas', label: 'Essential Daily Duas', arabic: 'الأَدْعِيَة', icon: 'hands' },
  { key: 'halal_haram', label: 'Halal, Haram & Daily Life', arabic: 'الحَلَالُ وَالحَرَام', icon: 'scale' },
  { key: 'family_social', label: 'Family & Social Challenges', arabic: 'التَّحَدِّيَاتُ الأُسَرِيَّة', icon: 'people' },
  { key: 'doubts_challenges', label: 'Doubts & Where to Turn', arabic: 'الشُّكُوكُ', icon: 'question' },
  { key: 'community', label: 'Finding Your Community', arabic: 'المُجْتَمَع', icon: 'compass' },
]

const SECTION_ICONS = { definition: 'book', scope: 'scroll', rulings: 'scroll' }

// The 90-day roadmap — a fixed checklist, grouped by rough timeframe.
// Stored progress just tracks which item keys are checked; the list
// itself lives in code, not the database, so it's easy to review/
// revise centrally.
const ROADMAP = [
  {
    phase: 'Week 1', title: 'The essentials', icon: 'star',
    items: [
      { key: 'shahada', label: 'Say the Shahada with understanding and sincerity' },
      { key: 'wudu', label: 'Learn and practice wudu' },
      { key: 'fatihah', label: 'Begin memorizing Al-Fatihah in Arabic' },
      { key: 'prayer_times', label: 'Set up Sual\'s Prayer Times for your location' },
      { key: 'first_prayer', label: 'Pray your first Salah, even imperfectly' },
    ],
  },
  {
    phase: 'Weeks 2–4', title: 'Building the habit', icon: 'prayer',
    items: [
      { key: 'five_daily', label: 'Work toward all 5 daily prayers, at your own pace' },
      { key: 'basic_duas', label: 'Learn a few short daily duas (before eating, sleeping)' },
      { key: 'translation', label: 'Start reading a Qur\'an translation' },
      { key: 'mosque_visit', label: 'Visit a local mosque, even just to observe' },
      { key: 'community_group', label: 'Look for a new-Muslim support group, in-person or online' },
    ],
  },
  {
    phase: 'Month 2', title: 'Going deeper', icon: 'book',
    items: [
      { key: 'jumuah', label: 'Attend Jumu\'ah (Friday prayer) at least once' },
      { key: 'tajweed_start', label: 'Explore Sual\'s Tajweed course to start reading Arabic' },
      { key: 'halal_audit', label: 'Review your diet/lifestyle for halal changes at your pace' },
      { key: 'family_talk', label: 'Have an honest, calm conversation with close family' },
      { key: 'mentor', label: 'Try to connect with a mentor or knowledgeable friend' },
    ],
  },
  {
    phase: 'Month 3', title: 'Standing on your own', icon: 'compass',
    items: [
      { key: 'consistent_salah', label: 'Feel reasonably consistent with the 5 daily prayers' },
      { key: 'zakat_learn', label: 'Learn the basics of Zakah, even if not yet obligated' },
      { key: 'disciplines_explore', label: 'Start exploring a Discipline (Fiqh, Seerah) in depth' },
      { key: 'give_back', label: 'Consider how you might one day help welcome the next new Muslim' },
    ],
  },
]

export default function NewMuslim({ user }) {
  const [tab, setTab] = useState('learn')
  const [activeTopic, setActiveTopic] = useState(null)

  const [checkedItems, setCheckedItems] = useState({})
  const [roadmapLoading, setRoadmapLoading] = useState(false)
  const [roadmapError, setRoadmapError] = useState(null)

  const fetchProgress = useCallback(async () => {
    if (!user) return
    setRoadmapLoading(true)
    setRoadmapError(null)
    try {
      const { data, error } = await supabase
        .from('new_muslim_progress')
        .select('item_key')
        .eq('user_id', user.id)
      if (error) throw error
      const map = {}
      ;(data || []).forEach(row => { map[row.item_key] = true })
      setCheckedItems(map)
    } catch (err) {
      console.error('Failed to load roadmap progress:', err)
      setRoadmapError(err.message)
    } finally {
      setRoadmapLoading(false)
    }
  }, [user])

  useEffect(() => { if (tab === 'roadmap') fetchProgress() }, [tab, fetchProgress])

  const toggleItem = async (itemKey) => {
    if (!user) return
    const isChecked = !!checkedItems[itemKey]
    setCheckedItems(prev => ({ ...prev, [itemKey]: !isChecked })) // optimistic
    try {
      if (isChecked) {
        const { error } = await supabase
          .from('new_muslim_progress')
          .delete()
          .eq('user_id', user.id)
          .eq('item_key', itemKey)
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('new_muslim_progress')
          .insert({ user_id: user.id, item_key: itemKey })
        if (error) throw error
      }
    } catch (err) {
      console.error('Failed to save roadmap progress:', err)
      setCheckedItems(prev => ({ ...prev, [itemKey]: isChecked })) // revert on failure
      setRoadmapError(err.message)
    }
  }

  const totalItems = ROADMAP.reduce((s, p) => s + p.items.length, 0)
  const doneItems = Object.values(checkedItems).filter(Boolean).length
  const overallPercent = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0

  const openTopic = (key) => setActiveTopic(key)
  const closeTopic = () => setActiveTopic(null)

  const renderLearn = () => {
    if (activeTopic) {
      const meta = TOPICS.find(t => t.key === activeTopic)
      const entry = NEW_MUSLIM_CONTENT[activeTopic]
      return (
        <>
          <button className="nm-back" onClick={closeTopic}>← Back to Starter Path</button>

          <div className="nm-detail-header card">
            <span className="nm-detail-icon"><Icon name={meta.icon} /></span>
            <div>
              <h2 className="nm-detail-title">{entry.title}</h2>
              <p className="nm-detail-arabic arabic">{entry.arabic_title}</p>
            </div>
          </div>

          {['definition', 'scope', 'rulings'].map(section => (
            entry[section] ? (
              <div key={section} className="nm-section card">
                <h3 className="nm-section-title">
                  <Icon name={SECTION_ICONS[section]} /> {section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                <p className="nm-section-body">{entry[section]}</p>
              </div>
            ) : null
          ))}

          {Array.isArray(entry.cases) && entry.cases.length > 0 && (
            <div className="nm-section card">
              <h3 className="nm-section-title"><Icon name="cases" /> Cases</h3>
              <div className="nm-cases">
                {entry.cases.map((c, i) => (
                  <div key={i} className="nm-case">
                    <p className="nm-case-title">{c.title}</p>
                    <p className="nm-case-scenario">{c.scenario}</p>
                    <p className="nm-case-ruling"><strong>Guidance:</strong> {c.ruling}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {Array.isArray(entry.faq) && entry.faq.length > 0 && (
            <div className="nm-section card">
              <h3 className="nm-section-title"><Icon name="question" /> Common Questions</h3>
              <div className="nm-faq">
                {entry.faq.map((f, i) => (
                  <div key={i} className="nm-faq-item">
                    <p className="nm-faq-q">{f.question}</p>
                    <p className="nm-faq-a">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )
    }

    return (
      <div className="nm-cards">
        {TOPICS.map(t => {
          const entry = NEW_MUSLIM_CONTENT[t.key]
          return (
            <button key={t.key} className="nm-topic-card card" onClick={() => openTopic(t.key)}>
              <span className="nm-topic-icon"><Icon name={t.icon} /></span>
              <div className="nm-topic-text">
                <h3 className="nm-topic-label">{t.label}</h3>
                <p className="nm-topic-arabic arabic">{t.arabic}</p>
                <p className="nm-topic-desc">{entry.quick_fact}</p>
              </div>
              <span className="nm-topic-arrow">→</span>
            </button>
          )
        })}
      </div>
    )
  }

  const renderRoadmap = () => (
    <>
      <div className="nm-roadmap-progress card">
        <p className="nm-roadmap-progress-label">Your journey so far</p>
        <div className="nm-roadmap-progress-track">
          <div className="nm-roadmap-progress-fill" style={{ width: `${overallPercent}%` }} />
        </div>
        <p className="nm-roadmap-progress-text">{doneItems} of {totalItems} steps · {overallPercent}%</p>
      </div>

      {roadmapError && <div className="nm-error card">{roadmapError}</div>}

      {roadmapLoading ? (
        <div className="nm-loading"><div className="nm-spinner" /></div>
      ) : (
        ROADMAP.map(phase => (
          <div key={phase.phase} className="nm-phase card">
            <div className="nm-phase-header">
              <span className="nm-phase-icon"><Icon name={phase.icon} /></span>
              <div>
                <p className="nm-phase-tag">{phase.phase}</p>
                <p className="nm-phase-title">{phase.title}</p>
              </div>
            </div>
            <div className="nm-phase-items">
              {phase.items.map(item => {
                const checked = !!checkedItems[item.key]
                return (
                  <button
                    key={item.key}
                    className={`nm-checklist-item ${checked ? 'nm-checklist-item--checked' : ''}`}
                    onClick={() => toggleItem(item.key)}
                  >
                    <span className={`nm-checklist-box ${checked ? 'nm-checklist-box--checked' : ''}`}>
                      {checked && <Icon name="check" />}
                    </span>
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))
      )}

      <p className="nm-roadmap-note">
        This roadmap is a guide, not a race — some steps take days, others take months, and that's
        completely normal. Come back to it anytime.
      </p>
    </>
  )

  return (
    <div className="page-content nm-page">
      <h1 className="page-title">New Muslim Starter Path</h1>
      <p className="page-subtitle">مَرْحَبًا بِكَ فِي الإِسْلَام — Welcome to Islam</p>

      <div className="nm-welcome card">
        <p className="nm-welcome-text">
          Whether you took your Shahada five minutes ago or five months ago, this is your guided
          starting point — the essentials, in order, without overwhelm. Take it at your own pace.
        </p>
      </div>

      <div className="nm-tabs">
        <button className={`nm-tab ${tab === 'learn' ? 'nm-tab--active' : ''}`} onClick={() => { setTab('learn'); setActiveTopic(null) }}>
          Learn
        </button>
        <button className={`nm-tab ${tab === 'roadmap' ? 'nm-tab--active' : ''}`} onClick={() => setTab('roadmap')}>
          90-Day Roadmap
        </button>
      </div>

      {tab === 'learn' ? renderLearn() : renderRoadmap()}
    </div>
  )
}
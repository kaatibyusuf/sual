import React, { useState, useEffect } from 'react'
import { DUAS } from '../data/duas.js'
import { MORNING_ADHKAR, EVENING_ADHKAR, RUQYAH, GENERAL_ADHKAR } from '../data/adhkar.js'
import './Duas.css'

const TABS = [
  { key: 'morning', label: 'Morning Adhkar', arabic: 'أَذْكَار الصَّبَاح', icon: '🌅' },
  { key: 'evening', label: 'Evening Adhkar', arabic: 'أَذْكَار المَسَاء', icon: '🌙' },
  { key: 'ruqyah', label: 'Ruqyah', arabic: 'الرُّقْيَة', icon: '🛡️' },
  { key: 'duas', label: 'Duas', arabic: 'الأَدْعِيَة', icon: '🤲' },
]

const DUA_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'purification', label: 'Purification' },
  { key: 'masjid', label: 'Masjid' },
  { key: 'home', label: 'Home' },
  { key: 'food', label: 'Food' },
  { key: 'sleep', label: 'Sleep' },
  { key: 'morning', label: 'Morning' },
  { key: 'evening', label: 'Evening' },
  { key: 'travel', label: 'Travel' },
  { key: 'dhikr', label: 'Dhikr' },
  { key: 'distress', label: 'Distress' },
  { key: 'guidance', label: 'Guidance' },
  { key: 'family', label: 'Family' },
  { key: 'death', label: 'Death' },
  { key: 'quran', label: 'Quranic' },
  { key: 'trust', label: 'Trust in Allah' },
  { key: 'daily', label: 'Daily Life' },
]

const GRADE_COLORS = {
  Sahih: { bg: '#e8f5e9', color: '#2e7d32', border: '#a5d6a7' },
  Hasan: { bg: '#e3f2fd', color: '#1565c0', border: '#90caf9' },
  Quran: { bg: '#fff8e1', color: '#e65100', border: '#ffcc02' },
}

function gradeStyle(grade) {
  return GRADE_COLORS[grade] || GRADE_COLORS['Hasan']
}

// ── Progress persistence for sequential Morning/Evening sessions ──
// Keyed per category, per calendar day, so a half-finished session
// from a previous day never blocks a fresh start today — but
// backgrounding the app or navigating away mid-session on the SAME
// day resumes exactly where it left off, item and rep count intact.
function todayKey() {
  return new Date().toDateString()
}

function progressStorageKey(category) {
  return `sual-adhkar-progress-${category}-${todayKey()}`
}

function completedStorageKey(category) {
  return `sual-adhkar-completed-${category}-${todayKey()}`
}

function readProgress(category) {
  try {
    const raw = localStorage.getItem(progressStorageKey(category))
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function writeProgress(category, progress) {
  try {
    localStorage.setItem(progressStorageKey(category), JSON.stringify(progress))
  } catch {
    // localStorage unavailable — session just won't resume, non-fatal
  }
}

function clearProgress(category) {
  try {
    localStorage.removeItem(progressStorageKey(category))
  } catch {}
}

function isCompletedToday(category) {
  try {
    return localStorage.getItem(completedStorageKey(category)) === 'true'
  } catch {
    return false
  }
}

function markCompletedToday(category) {
  try {
    localStorage.setItem(completedStorageKey(category), 'true')
  } catch {}
}

// ─── Morning / Evening Card ───────────────────────────────────────────────────
function AdhkarCard({ item, onClick }) {
  const gs = gradeStyle(item.grade)
  return (
    <button className="dua-card card" onClick={() => onClick(item)}>
      <div className="dua-card-top">
        <span className="dua-grade-badge" style={{ background: gs.bg, color: gs.color, border: `1px solid ${gs.border}` }}>
          {item.grade}
        </span>
        {item.count && (
          <span className="adhkar-count-badge">×{item.count}</span>
        )}
      </div>
      <h3 className="dua-card-title">{item.title}</h3>
      <p className="dua-card-arabic-title arabic">{item.arabicTitle}</p>
      <p className="dua-card-arabic arabic">{item.arabic.length > 80 ? item.arabic.slice(0, 80) + '…' : item.arabic}</p>
      {item.virtue && (
        <p className="adhkar-virtue-preview">{item.virtue.slice(0, 70)}…</p>
      )}
      <div className="dua-card-footer">
        <span className="dua-card-read">Read →</span>
      </div>
    </button>
  )
}

// ─── Ruqyah Card ─────────────────────────────────────────────────────────────
function RuqyahCard({ item, onClick }) {
  const gs = gradeStyle(item.grade)
  return (
    <button className="dua-card card ruqyah-card" onClick={() => onClick(item)}>
      <div className="dua-card-top">
        <span className="dua-grade-badge" style={{ background: gs.bg, color: gs.color, border: `1px solid ${gs.border}` }}>
          {item.grade}
        </span>
      </div>
      <h3 className="dua-card-title">{item.title}</h3>
      <p className="dua-card-arabic-title arabic">{item.arabicTitle}</p>
      <p className="dua-card-arabic arabic">{item.arabic.length > 80 ? item.arabic.slice(0, 80) + '…' : item.arabic}</p>
      {item.condition && (
        <p className="ruqyah-condition-preview">🎯 {item.condition}</p>
      )}
      <div className="dua-card-footer">
        <span className="dua-card-read">Read →</span>
      </div>
    </button>
  )
}

// ─── Detail view (single-item browse, unchanged) ──────────────────────────────
function DetailView({ item, type, onBack }) {
  const [copied, setCopied] = useState(false)
  const gs = gradeStyle(item.grade)

  const handleCopy = () => {
    navigator.clipboard.writeText(item.arabic)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="page-content duas-page">
      <button className="duas-back" onClick={onBack}>← Back</button>

      <div className="dua-detail">
        <div className="dua-detail-header card">
          <div className="dua-detail-meta">
            <span className="dua-grade-badge" style={{ background: gs.bg, color: gs.color, border: `1px solid ${gs.border}` }}>
              {item.grade}
            </span>
            {item.count && <span className="adhkar-count-badge">×{item.count}</span>}
            {item.condition && <span className="ruqyah-condition-badge">🎯 {item.condition}</span>}
          </div>
          <h1 className="dua-detail-title">{item.title}</h1>
          <p className="dua-detail-arabic-title arabic">{item.arabicTitle}</p>
          {item.when && <p className="dua-detail-when">⏰ {item.when}</p>}
        </div>

        <div className="dua-detail-arabic-card card">
          <div className="dua-detail-arabic-header">
            <h2 className="dua-section-title">Arabic</h2>
            <button className="dua-copy-btn" onClick={handleCopy}>
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
          <p className="dua-arabic-text arabic-lg">{item.arabic}</p>
        </div>

        {item.transliteration && (
          <div className="dua-detail-section card">
            <h2 className="dua-section-title">Transliteration</h2>
            <p className="dua-translit-text">{item.transliteration}</p>
          </div>
        )}

        <div className="dua-detail-section card">
          <h2 className="dua-section-title">Translation</h2>
          <p className="dua-translation-text">{item.translation}</p>
        </div>

        {item.how_to_use && (
          <div className="dua-detail-section card ruqyah-method-card">
            <h2 className="dua-section-title">📋 How to Perform</h2>
            <p className="dua-context-text">{item.how_to_use}</p>
          </div>
        )}

        {item.virtue && (
          <div className="dua-detail-section card dua-context-card">
            <h2 className="dua-section-title">✨ Virtue and Benefit</h2>
            <p className="dua-context-text">{item.virtue}</p>
          </div>
        )}

        {item.context && (
          <div className="dua-detail-section card dua-context-card">
            <h2 className="dua-section-title">📖 Context and Virtue</h2>
            <p className="dua-context-text">{item.context}</p>
          </div>
        )}

        <div className="dua-detail-section card">
          <h2 className="dua-section-title">📚 Source</h2>
          <p className="dua-source-text">{item.source}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Continue/Start banner — shown above the Morning/Evening grid ─────────────
// Reads progress synchronously from localStorage on every render (cheap,
// no state duplication needed) — refreshRef lets the parent force a
// re-render after a session ends, so the banner reflects the new state
// immediately without needing its own effect/subscription.
function AdhkarProgressBanner({ category, items, label, onStart, onContinue }) {
  const completed = isCompletedToday(category)
  const progress = readProgress(category)

  if (completed) {
    return (
      <div className="adhkar-banner adhkar-banner--done card">
        <span className="adhkar-banner-icon">✓</span>
        <div className="adhkar-banner-text">
          <p className="adhkar-banner-title">{label} completed today</p>
          <p className="adhkar-banner-sub">Alhamdulillah. You can still review any dhikr below.</p>
        </div>
        <button className="adhkar-banner-btn adhkar-banner-btn--secondary" onClick={onStart}>
          Read again
        </button>
      </div>
    )
  }

  if (progress && progress.index > 0) {
    const percent = Math.round((progress.index / items.length) * 100)
    return (
      <div className="adhkar-banner card">
        <span className="adhkar-banner-icon">↻</span>
        <div className="adhkar-banner-text">
          <p className="adhkar-banner-title">Continue {label}</p>
          <p className="adhkar-banner-sub">You stopped at {progress.index + 1} of {items.length} — {percent}% done</p>
        </div>
        <button className="adhkar-banner-btn" onClick={onContinue}>
          Continue →
        </button>
      </div>
    )
  }

  return (
    <div className="adhkar-banner card">
      <span className="adhkar-banner-icon">▶</span>
      <div className="adhkar-banner-text">
        <p className="adhkar-banner-title">Begin {label}</p>
        <p className="adhkar-banner-sub">{items.length} adhkar, read in order</p>
      </div>
      <button className="adhkar-banner-btn" onClick={onStart}>
        Start →
      </button>
    </div>
  )
}

// ─── Sequential session view — step through Morning/Evening in order ──────────
function AdhkarSession({ items, category, label, onExit }) {
  const stored = readProgress(category)
  const [index, setIndex] = useState(stored?.index ?? 0)
  const [reps, setReps] = useState(stored?.reps ?? 0)
  const [finished, setFinished] = useState(false)

  const item = items[index]
  const targetReps = item?.count || 1
  const repsRemaining = Math.max(0, targetReps - reps)

  useEffect(() => {
    if (!finished) writeProgress(category, { index, reps })
  }, [index, reps, category, finished])

  const tapRep = () => {
    if (reps < targetReps) setReps(r => r + 1)
  }

  const goNext = () => {
    if (index + 1 >= items.length) {
      clearProgress(category)
      markCompletedToday(category)
      setFinished(true)
    } else {
      setIndex(i => i + 1)
      setReps(0)
    }
  }

  const goPrev = () => {
    if (index === 0) return
    setIndex(i => i - 1)
    setReps(0)
  }

  const exitAndSave = () => {
    // Progress is already written on every change via the effect
    // above — exiting mid-session simply leaves that last saved
    // state in place, which is exactly what "continue where you
    // stopped" resumes from next time.
    onExit()
  }

  if (finished) {
    return (
      <div className="adhkar-session">
        <div className="adhkar-session-complete card">
          <span className="adhkar-complete-icon">✓</span>
          <h2 className="adhkar-complete-title">{label} Complete</h2>
          <p className="adhkar-complete-sub">Alhamdulillah — you read through all {items.length} adhkar.</p>
          <button className="adhkar-banner-btn" onClick={onExit}>Done</button>
        </div>
      </div>
    )
  }

  const gs = gradeStyle(item.grade)
  const percent = Math.round(((index) / items.length) * 100)

  return (
    <div className="adhkar-session">
      <div className="adhkar-session-header">
        <button className="adhkar-session-exit" onClick={exitAndSave}>← Exit</button>
        <span className="adhkar-session-progress-label">{index + 1} of {items.length}</span>
      </div>

      <div className="adhkar-session-track">
        <div className="adhkar-session-fill" style={{ width: `${percent}%` }} />
      </div>

      <div className="adhkar-session-card card">
        <div className="dua-card-top">
          <span className="dua-grade-badge" style={{ background: gs.bg, color: gs.color, border: `1px solid ${gs.border}` }}>
            {item.grade}
          </span>
        </div>

        <h2 className="adhkar-session-item-title">{item.title}</h2>
        <p className="dua-card-arabic-title arabic">{item.arabicTitle}</p>

        <p className="dua-arabic-text arabic-lg adhkar-session-arabic">{item.arabic}</p>

        {item.transliteration && (
          <p className="dua-translit-text">{item.transliteration}</p>
        )}
        <p className="dua-translation-text">{item.translation}</p>

        {item.virtue && (
          <p className="adhkar-session-virtue">✨ {item.virtue}</p>
        )}

        {targetReps > 1 && (
          <div className="adhkar-rep-tracker">
            <button
              className={`adhkar-rep-btn ${reps >= targetReps ? 'adhkar-rep-btn--done' : ''}`}
              onClick={tapRep}
              disabled={reps >= targetReps}
            >
              {reps >= targetReps ? '✓ Done' : `Tap — ${reps}/${targetReps}`}
            </button>
            {repsRemaining > 0 && (
              <p className="adhkar-rep-remaining">{repsRemaining} more to go</p>
            )}
          </div>
        )}
      </div>

      <div className="adhkar-session-nav">
        <button className="adhkar-nav-btn adhkar-nav-btn--secondary" onClick={goPrev} disabled={index === 0}>
          ← Previous
        </button>
        <button className="adhkar-nav-btn" onClick={goNext}>
          {index + 1 >= items.length ? 'Finish' : 'Next →'}
        </button>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Duas() {
  const [activeTab, setActiveTab] = useState('morning')
  const [selected, setSelected] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const [duaCategory, setDuaCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [sessionCategory, setSessionCategory] = useState(null) // 'morning' | 'evening' | null
  const [bannerRefresh, setBannerRefresh] = useState(0) // bumped to force the banner to re-read localStorage after a session ends

  const handleSelect = (item, type) => {
    setSelected(item)
    setSelectedType(type)
  }

  const handleBack = () => {
    setSelected(null)
    setSelectedType(null)
  }

  const endSession = () => {
    setSessionCategory(null)
    setBannerRefresh(n => n + 1)
  }

  if (sessionCategory === 'morning') {
    return (
      <div className="page-content duas-page">
        <AdhkarSession items={MORNING_ADHKAR} category="morning" label="Morning Adhkar" onExit={endSession} />
      </div>
    )
  }

  if (sessionCategory === 'evening') {
    return (
      <div className="page-content duas-page">
        <AdhkarSession items={EVENING_ADHKAR} category="evening" label="Evening Adhkar" onExit={endSession} />
      </div>
    )
  }

  if (selected) {
    return <DetailView item={selected} type={selectedType} onBack={handleBack} />
  }

  const filteredDuas = DUAS.filter(d => {
    const matchCat = duaCategory === 'all' || d.category === duaCategory
    const matchSearch = search === '' ||
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.arabic.includes(search) ||
      d.translation.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const allGeneralAdhkar = [...GENERAL_ADHKAR]

  return (
    <div className="page-content duas-page">
      <h1 className="page-title">Adhkar &amp; Duas</h1>
      <p className="page-subtitle">أَذْكَار وَأَدْعِيَة — Morning adhkar, evening adhkar, ruqyah, and supplications</p>

      <div className="adhkar-tabs">
        {TABS.map(t => (
          <button
            key={t.key}
            className={`adhkar-tab ${activeTab === t.key ? 'adhkar-tab--active' : ''}`}
            onClick={() => setActiveTab(t.key)}
          >
            <span className="adhkar-tab-icon">{t.icon}</span>
            <span className="adhkar-tab-label">{t.label}</span>
            <span className="adhkar-tab-arabic arabic">{t.arabic}</span>
          </button>
        ))}
      </div>

      {/* ── Morning ── */}
      {activeTab === 'morning' && (
        <div key={bannerRefresh}>
          <AdhkarProgressBanner
            category="morning"
            items={MORNING_ADHKAR}
            label="Morning Adhkar"
            onStart={() => setSessionCategory('morning')}
            onContinue={() => setSessionCategory('morning')}
          />

          <div className="adhkar-section-intro card">
            <h2 className="adhkar-intro-title">🌅 Morning Adhkar</h2>
            <p className="adhkar-intro-text">Said after Fajr prayer until sunrise. The morning adhkar are a shield, a provision, and a connection to Allah that sets the tone for the entire day. The Prophet ﷺ was consistent in their recitation.</p>
            <p className="adhkar-intro-text">Begin with the opening dua, work through Ayat Al-Kursi, the three Quls, and the protective adhkar. End with As-Salah Alan-Nabi.</p>
          </div>
          <p className="duas-count">{MORNING_ADHKAR.length} adhkar — or browse individually below</p>
          <div className="duas-grid">
            {MORNING_ADHKAR.map(item => (
              <AdhkarCard key={item.id} item={item} onClick={i => handleSelect(i, 'morning')} />
            ))}
          </div>
        </div>
      )}

      {/* ── Evening ── */}
      {activeTab === 'evening' && (
        <div key={bannerRefresh}>
          <AdhkarProgressBanner
            category="evening"
            items={EVENING_ADHKAR}
            label="Evening Adhkar"
            onStart={() => setSessionCategory('evening')}
            onContinue={() => setSessionCategory('evening')}
          />

          <div className="adhkar-section-intro card">
            <h2 className="adhkar-intro-title">🌙 Evening Adhkar</h2>
            <p className="adhkar-intro-text">Said after Asr prayer until Maghrib. The evening adhkar close the day with gratitude, seek forgiveness for the day's shortcomings, and wrap the night with divine protection.</p>
            <p className="adhkar-intro-text">Mirror the morning adhkar in structure — beginning with the opening dua and ending with As-Salah Alan-Nabi. Do not skip Sayyid Al-Istighfar.</p>
          </div>
          <p className="duas-count">{EVENING_ADHKAR.length} adhkar — or browse individually below</p>
          <div className="duas-grid">
            {EVENING_ADHKAR.map(item => (
              <AdhkarCard key={item.id} item={item} onClick={i => handleSelect(i, 'evening')} />
            ))}
          </div>
        </div>
      )}

      {/* ── Ruqyah ── */}
      {activeTab === 'ruqyah' && (
        <div>
          <div className="adhkar-section-intro card ruqyah-intro-card">
            <h2 className="adhkar-intro-title">🛡️ Ar-Ruqyah Ash-Shar'iyyah</h2>
            <p className="adhkar-intro-text">Ruqyah is the recitation of Quran and authentic supplications over a person for healing and protection. It was practiced by the Prophet ﷺ, the Companions, and has been transmitted through every generation of scholars.</p>
            <div className="ruqyah-warning">
              <strong>Important:</strong> Ruqyah must be performed with complete sincerity and tawakkul in Allah alone. It is not magic and does not work automatically — it is a means, and Allah is the Healer. Avoid any ruqyah that involves unknown words, writing, amulets, or calling upon anyone other than Allah.
            </div>
            <p className="adhkar-intro-text">Read the methodology card first (last card) before beginning any ruqyah session.</p>
          </div>
          <p className="duas-count">{RUQYAH.length} verses and methods</p>
          <div className="duas-grid">
            {RUQYAH.map(item => (
              <RuqyahCard key={item.id} item={item} onClick={i => handleSelect(i, 'ruqyah')} />
            ))}
          </div>
        </div>
      )}

      {/* ── Duas ── */}
      {activeTab === 'duas' && (
        <div>
          <div className="adhkar-section-intro card">
            <h2 className="adhkar-intro-title">🤲 Duas &amp; General Adhkar</h2>
            <p className="adhkar-intro-text">Authenticated supplications from the Quran and Sunnah for every situation of life — from prayer to travel, from distress to gratitude.</p>
          </div>

          <div className="duas-search">
            <input
              type="text"
              className="duas-search-input"
              placeholder="Search duas..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && <button className="duas-search-clear" onClick={() => setSearch('')}>✕</button>}
          </div>

          <div className="duas-categories">
            {DUA_CATEGORIES.map(c => (
              <button
                key={c.key}
                className={`duas-cat-btn ${duaCategory === c.key ? 'duas-cat-btn--active' : ''}`}
                onClick={() => setDuaCategory(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="adhkar-subsection">
            <h3 className="adhkar-subsection-title">General Adhkar</h3>
            <p className="duas-count">{allGeneralAdhkar.length} adhkar</p>
            <div className="duas-grid">
              {allGeneralAdhkar.map(item => (
                <AdhkarCard key={item.id} item={item} onClick={i => handleSelect(i, 'general')} />
              ))}
            </div>
          </div>

          <div className="adhkar-subsection">
            <h3 className="adhkar-subsection-title">Duas by Category</h3>
            <p className="duas-count">{filteredDuas.length} duas</p>
            {filteredDuas.length === 0 ? (
              <div className="duas-empty"><p>No duas found.</p></div>
            ) : (
              <div className="duas-grid">
                {filteredDuas.map(d => {
                  const gs = gradeStyle(d.grade)
                  return (
                    <button key={d.id} className="dua-card card" onClick={() => handleSelect(d, 'dua')}>
                      <div className="dua-card-top">
                        <span className="dua-grade-badge" style={{ background: gs.bg, color: gs.color, border: `1px solid ${gs.border}` }}>
                          {d.grade}
                        </span>
                      </div>
                      <h3 className="dua-card-title">{d.title}</h3>
                      <p className="dua-card-arabic-title arabic">{d.arabicTitle}</p>
                      <p className="dua-card-arabic arabic">{d.arabic.length > 80 ? d.arabic.slice(0, 80) + '…' : d.arabic}</p>
                      <p className="dua-card-when">⏰ {d.when}</p>
                      <div className="dua-card-footer">
                        <span className="dua-card-read">Read Dua →</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
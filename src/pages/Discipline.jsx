import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { DISCIPLINES, KNOWLEDGE_BASE } from '../data/knowledge.js'
import { DISCIPLINE_ICONS } from '../components/disciplineIcons.jsx'
import { supabase } from '../lib/supabase.js'
import {
  INTERMEDIATE_QA,
  INTERMEDIATE_SEERAH_QA,
  INTERMEDIATE_ARABIYYAH_QA,
  INTERMEDIATE_USUL_QA,
  INTERMEDIATE_SARF_QA,
  INTERMEDIATE_NAHW_QA,
  INTERMEDIATE_TAFSEER_QA,
  INTERMEDIATE_TAJWEED_QA,
} from '../data/knowledge_intermediate.js'
import {
  ADVANCED_FIQH_QA,
  ADVANCED_SEERAH_QA,
  ADVANCED_ARABIYYAH_QA,
  ADVANCED_USUL_QA,
  ADVANCED_SARF_QA,
  ADVANCED_NAHW_QA,
  ADVANCED_TAFSEER_QA,
} from '../data/knowledge_advanced.js'
import './Discipline.css'

const ICONS = {
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
  bookmark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12v18l-6-4-6 4V3z" />
    </svg>
  ),
  bookmarkFilled: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12v18l-6-4-6 4V3z" />
    </svg>
  ),
}

const IconInline = ({ name }) => (
  <span className="icon-inline">{ICONS[name]}</span>
)

const INTERMEDIATE_ALL = {
  fiqh:      INTERMEDIATE_QA?.fiqh || [],
  seerah:    INTERMEDIATE_SEERAH_QA || [],
  arabiyyah: INTERMEDIATE_ARABIYYAH_QA || [],
  usul:      INTERMEDIATE_USUL_QA || [],
  sarf:      INTERMEDIATE_SARF_QA || [],
  nahw:      INTERMEDIATE_NAHW_QA || [],
  tafseer:   INTERMEDIATE_TAFSEER_QA || [],
  tajweed:   INTERMEDIATE_TAJWEED_QA || [],
}

const ADVANCED_ALL = {
  fiqh:      ADVANCED_FIQH_QA || [],
  seerah:    ADVANCED_SEERAH_QA || [],
  arabiyyah: ADVANCED_ARABIYYAH_QA || [],
  usul:      ADVANCED_USUL_QA || [],
  sarf:      ADVANCED_SARF_QA || [],
  nahw:      ADVANCED_NAHW_QA || [],
  tafseer:   ADVANCED_TAFSEER_QA || [],
}

const LEVELS = [
  { key: 'beginner',     label: 'Beginner',     arabic: 'مُبْتَدِئ',  color: '#2e7d32' },
  { key: 'intermediate', label: 'Intermediate', arabic: 'مُتَوَسِّط', color: '#e65100' },
  { key: 'advanced',     label: 'Advanced',     arabic: 'مُتَقَدِّم', color: '#6a1b9a' },
]

// Exported so the reader page can pull the exact same level->QA
// mapping without duplicating this lookup logic.
export function getLevelMap(id) {
  const beginnerQAs = (KNOWLEDGE_BASE[id] || []).map(qa => ({ ...qa, level: 'beginner' }))
  return {
    beginner:     beginnerQAs,
    intermediate: INTERMEDIATE_ALL[id] || [],
    advanced:     ADVANCED_ALL[id] || [],
  }
}

export default function Discipline({ userLevel = 'beginner', user = null }) {
  const { id } = useParams()
  const [search,          setSearch]          = useState('')
  const [activeLevel,     setActiveLevel]     = useState(userLevel)
  const [bookmarks,       setBookmarks]       = useState(new Set())
  const [bookmarkLoading, setBookmarkLoading] = useState(false)

  const discipline = DISCIPLINES.find(d => d.id === id)
  if (!discipline) return <Navigate to="/" replace />

  useEffect(() => {
    if (!user) return
    const load = async () => {
      try {
        const { data } = await supabase
          .from('bookmarks')
          .select('qa_id')
          .eq('user_id', user.id)
          .eq('discipline', id)
        if (data) setBookmarks(new Set(data.map(r => r.qa_id)))
      } catch (err) {
        console.error('Failed to load bookmarks:', err)
      }
    }
    load()
  }, [user, id])

  const toggleBookmark = useCallback(async (e, qaId) => {
    e.preventDefault()
    e.stopPropagation()
    if (!user || bookmarkLoading) return
    setBookmarkLoading(true)
    const isBookmarked = bookmarks.has(qaId)

    setBookmarks(prev => {
      const next = new Set(prev)
      isBookmarked ? next.delete(qaId) : next.add(qaId)
      return next
    })

    try {
      if (isBookmarked) {
        await supabase
          .from('bookmarks')
          .delete()
          .eq('user_id', user.id)
          .eq('qa_id', qaId)
      } else {
        await supabase
          .from('bookmarks')
          .insert({ user_id: user.id, discipline: id, qa_id: qaId })
      }
    } catch (err) {
      console.error('Bookmark failed:', err)
      setBookmarks(prev => {
        const next = new Set(prev)
        isBookmarked ? next.add(qaId) : next.delete(qaId)
        return next
      })
    } finally {
      setBookmarkLoading(false)
    }
  }, [user, id, bookmarks, bookmarkLoading])

  const levelMap = getLevelMap(id)

  const isLocked = (key) => {
    if (key === 'intermediate') return userLevel === 'beginner'
    if (key === 'advanced')     return userLevel !== 'advanced'
    return false
  }

  // Users only ever see tabs for levels they've actually unlocked —
  // no more clicking into a locked level to see a "Level Locked"
  // message. The tabs a user CAN'T access simply aren't rendered at
  // all now, rather than rendered-but-disabled.
  const visibleLevels = LEVELS.filter(lv => !isLocked(lv.key))

  // The very next level up from what's unlocked, if one exists — used
  // for a small "X waiting" teaser below, distinct from the tabs
  // themselves. Shows a count only, never the actual questions, so it
  // motivates without exposing content that hasn't been earned yet.
  const nextLockedLevel = LEVELS.find(lv => isLocked(lv.key))
  const nextLockedCount = nextLockedLevel ? (levelMap[nextLockedLevel.key] || []).length : 0

  const allQAs = levelMap[activeLevel] || []

  const filtered = allQAs.filter(qa =>
    search === '' ||
    qa.question.toLowerCase().includes(search.toLowerCase()) ||
    qa.answer.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="page-content discipline-page">

      <Link to="/disciplines" className="discipline-back">← Back to Disciplines</Link>

      <div className="discipline-header">
        <div className="discipline-header-inner">
          <div className="discipline-header-icon">{DISCIPLINE_ICONS[discipline.icon]}</div>
          <div>
            <p className="discipline-header-arabic arabic">{discipline.arabicName}</p>
            <h1 className="page-title" style={{ marginBottom: 4 }}>{discipline.name}</h1>
            <p className="page-subtitle" style={{ marginTop: 0 }}>{discipline.description}</p>
          </div>
        </div>
      </div>

      <div className="disc-level-tabs">
        {visibleLevels.map(lv => {
          const active = activeLevel === lv.key
          return (
            <button
              key={lv.key}
              className={`disc-level-tab ${active ? 'disc-level-tab--active' : ''}`}
              style={active ? { borderColor: lv.color, color: lv.color, background: '#fff' } : {}}
              onClick={() => setActiveLevel(lv.key)}
              title={lv.label}
            >
              {lv.label}
              <span className="disc-level-tab-arabic arabic">{lv.arabic}</span>
            </button>
          )
        })}
      </div>

      {nextLockedLevel && (
        <p className="disc-next-level-teaser" data-a11y-label={`${nextLockedLevel.label} is locked. ${nextLockedCount} questions waiting once you unlock it.`}>
          <IconInline name="lock" /> {nextLockedLevel.label}: {nextLockedCount} Q&amp;A{nextLockedCount !== 1 ? 's' : ''} waiting —
          reach a 70% quiz average to unlock.
        </p>
      )}

      <div className="discipline-search">
        <input
          type="text"
          className="discipline-search-input"
          placeholder={`Search ${discipline.name}...`}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button className="discipline-search-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      <p className="discipline-count">
        {filtered.length} Q&amp;A{filtered.length !== 1 ? 's' : ''} — {LEVELS.find(l => l.key === activeLevel)?.label}
        {bookmarks.size > 0 && (
          <span className="discipline-bookmark-count"> · {bookmarks.size} saved</span>
        )}
      </p>

      {filtered.length === 0 ? (
        <div className="discipline-empty">
          <p>{search ? 'No results found. Try a different search.' : 'Content coming soon for this level.'}</p>
        </div>

      ) : (
        <>
          <div className="qa-list">
            {filtered.map((qa, i) => {
              const qid        = qa.id ?? i
              const bookmarked = bookmarks.has(qid)

              return (
                <Link
                  key={qid}
                  to={`/discipline/${id}/${activeLevel}/${qid}`}
                  className="qa-item qa-item--link"
                >
                  <span className="qa-num">{i + 1}</span>
                  <span className="qa-question-text">{qa.question}</span>
                  {user && (
                    <button
                      className={`qa-bookmark-btn qa-bookmark-btn--inline ${bookmarked ? 'qa-bookmark-btn--active' : ''}`}
                      onClick={(e) => toggleBookmark(e, qid)}
                      title={bookmarked ? 'Remove bookmark' : 'Save this Q&A'}
                    >
                      <IconInline name={bookmarked ? 'bookmarkFilled' : 'bookmark'} />
                    </button>
                  )}
                  <span className="qa-chevron">→</span>
                </Link>
              )
            })}
          </div>

          <div className="discipline-quiz-link">
            <Link to={`/quiz?discipline=${id}`} className="btn btn-primary">
              Take {discipline.name} Quiz →
            </Link>
          </div>
        </>
      )}

    </div>
  )
}
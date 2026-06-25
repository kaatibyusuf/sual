import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { DISCIPLINES, KNOWLEDGE_BASE } from '../data/knowledge.js'
import { supabase } from '../lib/supabase.js'
import {
  INTERMEDIATE_QA,
  INTERMEDIATE_SEERAH_QA,
  INTERMEDIATE_ARABIYYAH_QA,
  INTERMEDIATE_USUL_QA,
  INTERMEDIATE_SARF_QA,
  INTERMEDIATE_NAHW_QA,
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

const INTERMEDIATE_ALL = {
  fiqh:      INTERMEDIATE_QA?.fiqh || [],
  seerah:    INTERMEDIATE_SEERAH_QA || [],
  arabiyyah: INTERMEDIATE_ARABIYYAH_QA || [],
  usul:      INTERMEDIATE_USUL_QA || [],
  sarf:      INTERMEDIATE_SARF_QA || [],
  nahw:      INTERMEDIATE_NAHW_QA || [],
  tafseer:   [],
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

export default function Discipline({ userLevel = 'beginner', user = null }) {
  const { id } = useParams()
  const [expandedId,       setExpandedId]       = useState(null)
  const [search,           setSearch]           = useState('')
  const [activeLevel,      setActiveLevel]      = useState(userLevel)
  const [bookmarks,        setBookmarks]        = useState(new Set())
  const [bookmarkLoading,  setBookmarkLoading]  = useState(false)

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

  const toggleBookmark = useCallback(async (qaId) => {
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

  const beginnerQAs     = (KNOWLEDGE_BASE[id] || []).map(qa => ({ ...qa, level: 'beginner' }))
  const intermediateQAs = INTERMEDIATE_ALL[id] || []
  const advancedQAs     = ADVANCED_ALL[id] || []

  const levelMap = {
    beginner:     beginnerQAs,
    intermediate: intermediateQAs,
    advanced:     advancedQAs,
  }

  const isLocked = (key) => {
    if (key === 'intermediate') return userLevel === 'beginner'
    if (key === 'advanced')     return userLevel !== 'advanced'
    return false
  }

  const allQAs = levelMap[activeLevel] || []

  const filtered = allQAs.filter(qa =>
    search === '' ||
    qa.question.toLowerCase().includes(search.toLowerCase()) ||
    qa.answer.toLowerCase().includes(search.toLowerCase())
  )

  const toggle = (qid) => setExpandedId(prev => prev === qid ? null : qid)

  return (
    <div className="page-content discipline-page">

      <Link to="/" className="discipline-back">← Back to Home</Link>

      <div className="discipline-header">
        <div className="discipline-header-inner">
          <div className="discipline-header-icon">{discipline.icon}</div>
          <div>
            <p className="discipline-header-arabic arabic">{discipline.arabicName}</p>
            <h1 className="page-title" style={{ marginBottom: 4 }}>{discipline.name}</h1>
            <p className="page-subtitle" style={{ marginTop: 0 }}>{discipline.description}</p>
          </div>
        </div>
      </div>

      <div className="disc-level-tabs">
        {LEVELS.map(lv => {
          const locked = isLocked(lv.key)
          const active = activeLevel === lv.key
          return (
            <button
              key={lv.key}
              className={[
                'disc-level-tab',
                active ? 'disc-level-tab--active' : '',
                locked ? 'disc-level-tab--locked' : '',
              ].join(' ').trim()}
              style={active ? { borderColor: lv.color, color: lv.color, background: '#fff' } : {}}
              onClick={() => { if (!locked) { setActiveLevel(lv.key); setExpandedId(null) } }}
              title={locked ? 'Complete previous level to unlock' : lv.label}
            >
              {locked ? '🔒 ' : ''}{lv.label}
              <span className="disc-level-tab-arabic arabic">{lv.arabic}</span>
            </button>
          )
        })}
      </div>

      <div className="discipline-search">
        <input
          type="text"
          className="discipline-search-input"
          placeholder={`Search ${discipline.name}...`}
          value={search}
          onChange={e => { setSearch(e.target.value); setExpandedId(null) }}
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

      {isLocked(activeLevel) ? (
        <div className="disc-locked-msg">
          <div className="disc-locked-icon">🔒</div>
          <h3>Level Locked</h3>
          <p>
            Complete all Beginner content and achieve a 70% quiz average
            to unlock {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)}.
          </p>
        </div>

      ) : filtered.length === 0 ? (
        <div className="discipline-empty">
          <p>{search ? 'No results found. Try a different search.' : 'Content coming soon for this level.'}</p>
        </div>

      ) : (
        <>
          <div className="qa-list">
            {filtered.map((qa, i) => {
              const qid        = qa.id || i
              const open       = expandedId === qid
              const bookmarked = bookmarks.has(qid)

              return (
                <div key={qid} className={`qa-item${open ? ' qa-item--open' : ''}`}>

                  <button className="qa-question-btn" onClick={() => toggle(qid)}>
                    <span className="qa-num">{i + 1}</span>
                    <span className="qa-question-text">{qa.question}</span>
                    <span className="qa-chevron">{open ? '▲' : '▼'}</span>
                  </button>

                  {open && (
                    <div className="qa-answer">
                      <div className="qa-answer-body">
                        <p>{qa.answer}</p>
                      </div>

                      {qa.source && (
                        <p className="qa-source">
                          <span className="qa-source-label">📚 Source:</span>
                          {qa.source}
                        </p>
                      )}

                      {qa.tags?.length > 0 && (
                        <div className="qa-tags">
                          {qa.tags.map(t => (
                            <span key={t} className="qa-tag">{t}</span>
                          ))}
                        </div>
                      )}

                      {user && (
                        <button
                          className={`qa-bookmark-btn ${bookmarked ? 'qa-bookmark-btn--active' : ''}`}
                          onClick={(e) => { e.stopPropagation(); toggleBookmark(qid) }}
                          title={bookmarked ? 'Remove bookmark' : 'Save this Q&A'}
                        >
                          {bookmarked ? '🔖 Saved' : '🔖 Save'}
                        </button>
                      )}
                    </div>
                  )}

                </div>
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
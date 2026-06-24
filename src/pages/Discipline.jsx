import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { DISCIPLINES, KNOWLEDGE_BASE } from '../data/knowledge.js'
import {
  INTERMEDIATE_QA,
  INTERMEDIATE_SEERAH_QA,
  INTERMEDIATE_ARABIYYAH_QA,
  INTERMEDIATE_USUL_QA,
  INTERMEDIATE_SARF_QA,
  INTERMEDIATE_NAHW_QA,
} from '../data/knowledge_intermediate.js'
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

const LEVELS = [
  { key: 'beginner',     label: 'Beginner',     arabic: 'مُبْتَدِئ',  color: '#2e7d32' },
  { key: 'intermediate', label: 'Intermediate', arabic: 'مُتَوَسِّط', color: '#e65100' },
  { key: 'advanced',     label: 'Advanced',     arabic: 'مُتَقَدِّم', color: '#6a1b9a' },
]

export default function Discipline({ userLevel = 'beginner' }) {
  const { id } = useParams()
  const [expandedId,  setExpandedId]  = useState(null)
  const [search,      setSearch]      = useState('')
  const [activeLevel, setActiveLevel] = useState(userLevel)

  const discipline = DISCIPLINES.find(d => d.id === id)
  if (!discipline) return <Navigate to="/" replace />

  const beginnerQAs     = (KNOWLEDGE_BASE[id] || []).map(qa => ({ ...qa, level: 'beginner' }))
  const intermediateQAs = INTERMEDIATE_ALL[id] || []
  const advancedQAs     = []

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

      {/* Back */}
      <Link to="/" className="discipline-back">← Back to Home</Link>

      {/* Header */}
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

      {/* Level tabs */}
      <div className="disc-level-tabs">
        {LEVELS.map(lv => {
          const locked = isLocked(lv.key)
          const active = activeLevel === lv.key
          return (
            <button
              key={lv.key}
              className={[
                'disc-level-tab',
                active  ? 'disc-level-tab--active' : '',
                locked  ? 'disc-level-tab--locked' : '',
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

      {/* Search */}
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
      </p>

      {/* Locked state */}
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
              const qid  = qa.id || i
              const open = expandedId === qid
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
                    </div>
                  )}

                </div>
              )
            })}
          </div>

          {/* Quiz CTA */}
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
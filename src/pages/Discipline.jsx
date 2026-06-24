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
  fiqh: INTERMEDIATE_QA.fiqh || [],
  seerah: INTERMEDIATE_SEERAH_QA || [],
  arabiyyah: INTERMEDIATE_ARABIYYAH_QA || [],
  usul: INTERMEDIATE_USUL_QA || [],
  sarf: INTERMEDIATE_SARF_QA || [],
  nahw: INTERMEDIATE_NAHW_QA || [],
  tafseer: [],
}

export default function Discipline({ userLevel = 'beginner' }) {
  const { id } = useParams()
  const [expandedId, setExpandedId] = useState(null)
  const [search, setSearch] = useState('')
  const [activeLevel, setActiveLevel] = useState(userLevel)

  const discipline = DISCIPLINES.find(d => d.id === id)
  if (!discipline) return <Navigate to="/" replace />

  const beginnerQAs = (KNOWLEDGE_BASE[id] || []).map(qa => ({ ...qa, level: 'beginner' }))
  const intermediateQAs = INTERMEDIATE_ALL[id] || []
  const advancedQAs = []

  const levelMap = {
    beginner: beginnerQAs,
    intermediate: intermediateQAs,
    advanced: advancedQAs,
  }

  const levels = [
    { key: 'beginner',     label: 'Beginner',     arabic: 'مُبْتَدِئ',  color: '#2e7d32', locked: false },
    { key: 'intermediate', label: 'Intermediate', arabic: 'مُتَوَسِّط', color: '#e65100', locked: userLevel === 'beginner' },
    { key: 'advanced',     label: 'Advanced',     arabic: 'مُتَقَدِّم', color: '#6a1b9a', locked: userLevel !== 'advanced' },
  ]

  const activeLevelMeta = levels.find(l => l.key === activeLevel)

  const allQAs = levelMap[activeLevel] || []

  const filtered = allQAs.filter(qa =>
    search === '' ||
    qa.question.toLowerCase().includes(search.toLowerCase()) ||
    qa.answer.toLowerCase().includes(search.toLowerCase())
  )

  const toggle = (qid) => setExpandedId(prev => prev === qid ? null : qid)

  return (
    <div className="page-content discipline-page">

      {/* Header */}
      <div className="disc-header">
        <Link to="/" className="disc-back">← Back</Link>
        <div className="disc-header-meta">
          <div className="disc-header-icon">{discipline.icon}</div>
          <div>
            <p className="disc-header-arabic arabic">{discipline.arabicName}</p>
            <h1 className="page-title">{discipline.name}</h1>
            <p className="page-subtitle">{discipline.description}</p>
          </div>
        </div>
      </div>

      {/* Level tabs */}
      <div className="disc-level-tabs">
        {levels.map(lv => (
          <button
            key={lv.key}
            className={[
              'disc-level-tab',
              activeLevel === lv.key ? 'disc-level-tab--active' : '',
              lv.locked ? 'disc-level-tab--locked' : '',
            ].join(' ').trim()}
            style={activeLevel === lv.key ? { borderColor: lv.color } : {}}
            onClick={() => !lv.locked && setActiveLevel(lv.key)}
            title={lv.locked ? 'Complete previous level to unlock' : ''}
          >
            <span className="disc-level-dot" style={{ background: lv.color }} />
            <span
              className="disc-level-label"
              style={activeLevel === lv.key ? { color: lv.color } : {}}
            >
              {lv.locked ? '🔒 ' : ''}{lv.label}
            </span>
            <span className="disc-level-tab-arabic arabic">{lv.arabic}</span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="disc-search-wrapper">
        <div className="disc-search-inner">
          <span className="disc-search-icon">🔍</span>
          <input
            type="text"
            className="disc-search"
            placeholder={`Search ${discipline.name}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="disc-search-clear" onClick={() => setSearch('')}>✕</button>
          )}
        </div>
        <span className="disc-count">{filtered.length} Q&amp;As</span>
      </div>

      {/* Locked state */}
      {activeLevelMeta?.locked ? (
        <div className="disc-locked-msg">
          <div className="disc-locked-icon">🔒</div>
          <h3>Level Locked</h3>
          <p>Complete all Beginner content and achieve a 70% quiz average to unlock {activeLevelMeta.label}.</p>
        </div>

      ) : filtered.length === 0 ? (
        <div className="disc-empty">
          <p>{search ? 'No results found.' : 'Content coming soon for this level.'}</p>
        </div>

      ) : (
        <div className="disc-list">
          {filtered.map((qa, i) => {
            const qid  = qa.id || i
            const open = expandedId === qid
            return (
              <div
                key={qid}
                className={`disc-card${open ? ' disc-card--open' : ''}`}
                style={open ? { borderLeftColor: activeLevelMeta.color } : {}}
              >
                <button className="disc-card-q" onClick={() => toggle(qid)} aria-expanded={open}>
                  <span
                    className="disc-card-num"
                    style={{ background: activeLevelMeta.color }}
                  >
                    {i + 1}
                  </span>
                  <span className="disc-card-question">{qa.question}</span>
                  <span className={`disc-card-chevron${open ? ' disc-card-chevron--open' : ''}`}>▼</span>
                </button>

                {open && (
                  <div className="disc-card-answer">
                    <p className="disc-card-answer-text">{qa.answer}</p>

                    {qa.source && (
                      <div className="disc-card-source-block">
                        <span className="disc-card-source-label">📚 Source</span>
                        <span className="disc-card-source-text">{qa.source}</span>
                      </div>
                    )}

                    {qa.tags?.length > 0 && (
                      <div className="disc-card-tags">
                        {qa.tags.map(t => (
                          <span key={t} className="disc-card-tag">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Quiz CTA */}
      <div className="disc-quiz-link">
        <Link to={`/quiz?discipline=${id}`} className="btn btn-primary">
          Take {discipline.name} Quiz →
        </Link>
      </div>

    </div>
  )
}
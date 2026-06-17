import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { DISCIPLINES, KNOWLEDGE_BASE } from '../data/knowledge.js'
import './Discipline.css'

export default function Discipline() {
  const { id } = useParams()
  const [expandedId, setExpandedId] = useState(null)
  const [search, setSearch] = useState('')

  const discipline = DISCIPLINES.find(d => d.id === id)
  const allQAs = KNOWLEDGE_BASE[id] || []

  if (!discipline) return <Navigate to="/" replace />

  const filtered = allQAs.filter(qa =>
    search === '' ||
    qa.question.toLowerCase().includes(search.toLowerCase()) ||
    qa.answer.toLowerCase().includes(search.toLowerCase()) ||
    qa.tags?.some(t => t.toLowerCase().includes(search.toLowerCase()))
  )

  const toggle = (qid) => {
    setExpandedId(prev => prev === qid ? null : qid)
  }

  return (
    <div className="page-content discipline-page">
      <div className="discipline-header">
        <Link to="/" className="discipline-back">← Back to home</Link>
        <div className="discipline-header-inner">
          <span className="discipline-header-icon">{discipline.icon}</span>
          <div>
            <div className="discipline-header-arabic arabic-lg">{discipline.arabicName}</div>
            <h1 className="page-title">{discipline.name}</h1>
            <p className="page-subtitle">{discipline.description}</p>
          </div>
        </div>
      </div>

      <div className="discipline-search">
        <input
          type="text"
          placeholder={`Search ${discipline.name} questions…`}
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="discipline-search-input"
        />
        {search && (
          <button className="discipline-search-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      <p className="discipline-count">
        {filtered.length} question{filtered.length !== 1 ? 's' : ''}{search ? ' matching your search' : ''}
      </p>

      {filtered.length === 0 ? (
        <div className="discipline-empty">
          <p>No questions found for "<strong>{search}</strong>".</p>
          <button className="btn btn-ghost" onClick={() => setSearch('')}>Clear search</button>
        </div>
      ) : (
        <div className="qa-list">
          {filtered.map((qa, idx) => (
            <div
              key={qa.id}
              className={`qa-item card ${expandedId === qa.id ? 'qa-item--open' : ''}`}
            >
              <button
                className="qa-question-btn"
                onClick={() => toggle(qa.id)}
                aria-expanded={expandedId === qa.id}
              >
                <span className="qa-num">{String(idx + 1).padStart(2, '0')}</span>
                <span className="qa-question-text">{qa.question}</span>
                <span className="qa-chevron">{expandedId === qa.id ? '▲' : '▼'}</span>
              </button>

              {expandedId === qa.id && (
                <div className="qa-answer">
                  <div className="qa-answer-body">
                    <p>{qa.answer}</p>
                  </div>
                  {qa.source && (
                    <div className="qa-source">
                      <span className="qa-source-label">Source:</span>
                      <span className="qa-source-text">{qa.source}</span>
                    </div>
                  )}
                  {qa.tags && (
                    <div className="qa-tags">
                      {qa.tags.map(t => (
                        <span key={t} className="badge badge-blue qa-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="discipline-quiz-link">
        <Link to={`/quiz?discipline=${id}`} className="btn btn-secondary">
          🎯 Test yourself on {discipline.name}
        </Link>
      </div>
    </div>
  )
}
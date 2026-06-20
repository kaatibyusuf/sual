import React, { useState } from 'react'
import { DUAS } from '../data/duas.js'
import './Duas.css'

const CATEGORIES = [
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

export default function Duas() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [copied, setCopied] = useState(false)

  const filtered = DUAS.filter(d => {
    const matchCat = category === 'all' || d.category === category
    const matchSearch = search === '' ||
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.arabic.includes(search) ||
      d.translation.toLowerCase().includes(search.toLowerCase()) ||
      d.when.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const gradeStyle = (grade) => GRADE_COLORS[grade] || GRADE_COLORS['Hasan']

  if (selected) {
    const d = selected
    const gs = gradeStyle(d.grade)
    return (
      <div className="page-content duas-page">
        <button className="duas-back" onClick={() => setSelected(null)}>
          ← Back to Duas
        </button>

        <div className="dua-detail">
          {/* Header */}
          <div className="dua-detail-header card">
            <div className="dua-detail-meta">
              <span
                className="dua-grade-badge"
                style={{ background: gs.bg, color: gs.color, border: `1px solid ${gs.border}` }}
              >
                {d.grade}
              </span>
              <span className="dua-category-badge">{d.category}</span>
            </div>
            <h1 className="dua-detail-title">{d.title}</h1>
            <p className="dua-detail-arabic-title arabic">{d.arabicTitle}</p>
            <p className="dua-detail-when">⏰ {d.when}</p>
          </div>

          {/* Arabic Text */}
          <div className="dua-detail-arabic-card card">
            <div className="dua-detail-arabic-header">
              <h2 className="dua-section-title">Arabic</h2>
              <button
                className="dua-copy-btn"
                onClick={() => handleCopy(d.arabic)}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <p className="dua-arabic-text arabic-lg">{d.arabic}</p>
          </div>

          {/* Transliteration */}
          <div className="dua-detail-section card">
            <h2 className="dua-section-title">Transliteration</h2>
            <p className="dua-translit-text">{d.transliteration}</p>
          </div>

          {/* Translation */}
          <div className="dua-detail-section card">
            <h2 className="dua-section-title">Translation</h2>
            <p className="dua-translation-text">{d.translation}</p>
          </div>

          {/* Context */}
          <div className="dua-detail-section card dua-context-card">
            <h2 className="dua-section-title">📖 Context and Virtue</h2>
            <p className="dua-context-text">{d.context}</p>
          </div>

          {/* Source */}
          <div className="dua-detail-section card">
            <h2 className="dua-section-title">📚 Source</h2>
            <p className="dua-source-text">{d.source}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-content duas-page">
      <h1 className="page-title">Dua Collection</h1>
      <p className="page-subtitle">أَدْعِيَة مَأْثُورَة — Authenticated supplications from the Quran and Sunnah</p>

      {/* Search */}
      <div className="duas-search">
        <input
          type="text"
          className="duas-search-input"
          placeholder="Search duas by title, meaning, or occasion..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button className="duas-search-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      {/* Categories */}
      <div className="duas-categories">
        {CATEGORIES.map(c => (
          <button
            key={c.key}
            className={`duas-cat-btn ${category === c.key ? 'duas-cat-btn--active' : ''}`}
            onClick={() => setCategory(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <p className="duas-count">{filtered.length} {filtered.length === 1 ? 'dua' : 'duas'}</p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="duas-empty">
          <p>No duas found. Try a different search or category.</p>
        </div>
      ) : (
        <div className="duas-grid">
          {filtered.map(d => {
            const gs = gradeStyle(d.grade)
            return (
              <button
                key={d.id}
                className="dua-card card"
                onClick={() => setSelected(d)}
              >
                <div className="dua-card-top">
                  <span
                    className="dua-grade-badge"
                    style={{ background: gs.bg, color: gs.color, border: `1px solid ${gs.border}` }}
                  >
                    {d.grade}
                  </span>
                </div>
                <h3 className="dua-card-title">{d.title}</h3>
                <p className="dua-card-arabic-title arabic">{d.arabicTitle}</p>
                <p className="dua-card-arabic arabic">{d.arabic.length > 80 ? d.arabic.slice(0, 80) + '...' : d.arabic}</p>
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
  )
}
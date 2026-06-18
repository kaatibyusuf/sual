import React, { useState } from 'react'
import { STORIES } from '../data/stories.js'
import './Stories.css'

export default function Stories() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = STORIES.filter(s => {
    const matchEra = filter === 'all' || s.era === filter
    const matchSearch = search === '' ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.arabicName.includes(search) ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase())
    return matchEra && matchSearch
  })

  if (selected) {
    const s = selected
    return (
      <div className="page-content stories-page">
        <button className="stories-back" onClick={() => setSelected(null)}>
          ← Back to Stories
        </button>

        <div className="story-detail">
          {/* Header */}
          <div className="story-detail-header card">
            <div className="story-detail-icon">{s.image}</div>
            <div className="story-detail-meta">
              <span className={`stories-badge ${s.era === 'sahabah' ? 'badge-sahabah' : 'badge-tabieen'}`}>
                {s.era === 'sahabah' ? 'Sahabah' : "Tabii'een"}
              </span>
              <span className="stories-badge badge-category">{s.category}</span>
            </div>
            <h1 className="story-detail-name">{s.name}</h1>
            <p className="story-detail-arabic arabic">{s.arabicName}</p>
            <p className="story-detail-title">{s.title}</p>
            <p className="story-detail-lifespan">{s.lifespan}</p>
            <p className="story-detail-summary">{s.summary}</p>
          </div>

          {/* Full Story */}
          <div className="story-detail-body card">
            <h2 className="story-section-title">📜 Biography</h2>
            {s.story.split('\n\n').map((para, i) => (
              <p key={i} className="story-para">{para}</p>
            ))}
          </div>

          {/* Lessons */}
          <div className="story-detail-lessons card">
            <h2 className="story-section-title">💡 Lessons</h2>
            <ul className="story-lessons-list">
              {s.lessons.map((lesson, i) => (
                <li key={i} className="story-lesson-item">
                  <span className="story-lesson-num">{String(i + 1).padStart(2, '0')}</span>
                  <p>{lesson}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div className="story-detail-sources card">
            <h2 className="story-section-title">📚 Primary Sources</h2>
            <div className="story-sources-list">
              {s.sources.map((src, i) => (
                <span key={i} className="story-source-chip">{src}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-content stories-page">
      <h1 className="page-title">Stories of the Salaf</h1>
      <p className="page-subtitle">سِيَر السَّلَف الصَّالِح — The lives of the Companions and their Successors</p>

      {/* Filters */}
      <div className="stories-filters">
        <div className="stories-filter-group">
          {[
            { key: 'all', label: 'All' },
            { key: 'sahabah', label: 'Sahabah' },
            { key: 'tabieen', label: "Tabii'een" },
          ].map(f => (
            <button
              key={f.key}
              className={`stories-filter-btn ${filter === f.key ? 'stories-filter-btn--active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="stories-search">
          <input
            type="text"
            className="stories-search-input"
            placeholder="Search by name, era, or category..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="stories-search-clear" onClick={() => setSearch('')}>✕</button>
          )}
        </div>
      </div>

      <p className="stories-count">{filtered.length} {filtered.length === 1 ? 'story' : 'stories'}</p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="stories-empty">
          <p>No stories found for your search.</p>
        </div>
      ) : (
        <div className="stories-grid">
          {filtered.map(s => (
            <button
              key={s.id}
              className="story-card card"
              onClick={() => setSelected(s)}
            >
              <div className="story-card-top">
                <div className="story-card-icon">{s.image}</div>
                <div className="story-card-badges">
                  <span className={`stories-badge ${s.era === 'sahabah' ? 'badge-sahabah' : 'badge-tabieen'}`}>
                    {s.era === 'sahabah' ? 'Sahabah' : "Tabii'een"}
                  </span>
                </div>
              </div>
              <h3 className="story-card-name">{s.name}</h3>
              <p className="story-card-arabic arabic">{s.arabicName}</p>
              <p className="story-card-title">{s.title}</p>
              <p className="story-card-lifespan">{s.lifespan}</p>
              <p className="story-card-summary">{s.summary}</p>
              <div className="story-card-footer">
                <span className="story-card-read">Read Story →</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
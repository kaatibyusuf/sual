import React, { useState } from 'react'
import { TAWHEED_SECTIONS, TAWHEED_SCHOLARS } from '../data/tawheed.js'
import './Tawheed.css'

const LEVEL_COLORS = {
  foundation: { bg: '#e8f4ff', color: '#094570', border: '#c0ddf5', label: 'Foundation' },
  beginner: { bg: '#e8f5e9', color: '#2e7d32', border: '#a5d6a7', label: 'Beginner' },
  intermediate: { bg: '#fff8e1', color: '#e65100', border: '#ffcc02', label: 'Intermediate' },
  advanced: { bg: '#f3e5f5', color: '#6a1b9a', border: '#ce93d8', label: 'Advanced' },
}

export default function Tawheed() {
  const [activeSection, setActiveSection] = useState(null)
  const [activeRule, setActiveRule] = useState(null)
  const [filter, setFilter] = useState('all')

  const levels = ['all', 'foundation', 'beginner', 'intermediate', 'advanced']

  if (activeRule && activeSection) {
    const section = TAWHEED_SECTIONS.find(s => s.id === activeSection)
    const rule = section?.rules.find(r => r.id === activeRule)
    if (!rule) return null
    const lc = LEVEL_COLORS[rule.level]

    return (
      <div className="page-content tw-page">
        <button className="tw-back" onClick={() => setActiveRule(null)}>
          ← Back to {section.title}
        </button>

        <div className="tw-rule-detail">
          {/* Header */}
          <div className="tw-rule-header card">
            <div className="tw-rule-header-top">
              <span
                className="tw-level-badge"
                style={{ background: lc.bg, color: lc.color, border: `1px solid ${lc.border}` }}
              >
                {lc.label}
              </span>
              <span className="tw-section-ref">{section.title}</span>
            </div>
            <h1 className="tw-rule-name">{rule.name}</h1>
            <p className="tw-rule-arabic arabic">{rule.arabic}</p>
          </div>

          {/* Explanation */}
          <div className="tw-rule-body card">
            <h2 className="tw-section-label">📖 Explanation</h2>
            {rule.explanation.split('\n').map((para, i) => (
              <p key={i} className="tw-rule-para">{para}</p>
            ))}
          </div>

          {/* Examples */}
          {rule.examples && rule.examples.length > 0 && (
            <div className="tw-rule-examples card">
              <h2 className="tw-section-label">✍️ Examples & Evidences</h2>
              <div className="tw-examples-grid">
                {rule.examples.map((ex, i) => (
                  <div key={i} className="tw-example-item">
                    <div className="tw-example-arabic arabic-lg">{ex.arabic}</div>
                    <div className="tw-example-translit">{ex.transliteration}</div>
                    <div className="tw-example-note">{ex.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Source */}
          <div className="tw-rule-source card">
            <h2 className="tw-section-label">📚 Source</h2>
            <p className="tw-source-text">{rule.source}</p>
          </div>
        </div>
      </div>
    )
  }

  if (activeSection) {
    const section = TAWHEED_SECTIONS.find(s => s.id === activeSection)
    if (!section) return null

    const filteredRules = filter === 'all'
      ? section.rules
      : section.rules.filter(r => r.level === filter)

    return (
      <div className="page-content tw-page">
        <button className="tw-back" onClick={() => setActiveSection(null)}>
          ← Back to Tawheed
        </button>

        <div className="tw-section-header">
          <div className="tw-section-icon">{section.icon}</div>
          <div>
            <h1 className="tw-section-title">{section.title}</h1>
            <p className="tw-section-arabic arabic">{section.arabicTitle}</p>
          </div>
        </div>

        <div className="tw-section-overview card">
          <p className="tw-overview-text">{section.overview}</p>
        </div>

        {/* Level filter */}
        <div className="tw-filter-row">
          {levels.map(l => (
            <button
              key={l}
              className={`tw-filter-btn ${filter === l ? 'tw-filter-btn--active' : ''}`}
              onClick={() => setFilter(l)}
              style={filter === l && l !== 'all' ? {
                background: LEVEL_COLORS[l]?.bg,
                color: LEVEL_COLORS[l]?.color,
                borderColor: LEVEL_COLORS[l]?.border,
              } : {}}
            >
              {l === 'all' ? 'All' : LEVEL_COLORS[l].label}
            </button>
          ))}
        </div>

        <div className="tw-rules-list">
          {filteredRules.map(rule => {
            const lc = LEVEL_COLORS[rule.level]
            return (
              <button
                key={rule.id}
                className="tw-rule-card card"
                onClick={() => setActiveRule(rule.id)}
              >
                <div className="tw-rule-card-top">
                  <span
                    className="tw-level-badge"
                    style={{ background: lc.bg, color: lc.color, border: `1px solid ${lc.border}` }}
                  >
                    {lc.label}
                  </span>
                  {rule.examples?.length > 0 && (
                    <span className="tw-examples-count">{rule.examples.length} examples</span>
                  )}
                </div>
                <h3 className="tw-rule-card-name">{rule.name}</h3>
                <p className="tw-rule-card-arabic arabic">{rule.arabic}</p>
                <p className="tw-rule-card-preview">
                  {rule.explanation.slice(0, 150)}...
                </p>
                <div className="tw-rule-card-footer">
                  <span className="tw-rule-card-read">Read Rule →</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="page-content tw-page">
      <h1 className="page-title">Tawheed</h1>
      <p className="page-subtitle">عِلْمُ التَّوْحِيد — The Science of Allah's Oneness</p>

      {/* Intro banner */}
      <div className="tw-intro-banner">
        <div className="tw-intro-ayah arabic-lg">
          قُلْ هُوَ اللَّهُ أَحَدٌ
        </div>
        <p className="tw-intro-trans">"Say: He is Allah, the One." — Quran 112:1</p>
        <p className="tw-intro-note">
          The Prophet Muhammad ﷺ said to Mu'adh ibn Jabal: "The right of Allah upon His servants is
          that they worship Him and not associate anything with Him." (Sahih al-Bukhari 2856, Sahih Muslim 30)
        </p>
      </div>

      {/* Level guide */}
      <div className="tw-level-guide">
        {Object.entries(LEVEL_COLORS).map(([key, lc]) => (
          <div
            key={key}
            className="tw-level-item"
            style={{ background: lc.bg, border: `1px solid ${lc.border}` }}
          >
            <span className="tw-level-dot" style={{ background: lc.color }} />
            <span style={{ color: lc.color, fontWeight: 700, fontSize: '0.78rem' }}>{lc.label}</span>
          </div>
        ))}
      </div>

      {/* Sections grid */}
      <div className="tw-sections-grid">
        {TAWHEED_SECTIONS.map(section => {
          const totalRules = section.rules.length
          const levels = [...new Set(section.rules.map(r => r.level))]
          return (
            <button
              key={section.id}
              className="tw-section-card card"
              onClick={() => { setActiveSection(section.id); setActiveRule(null); setFilter('all') }}
            >
              <div className="tw-section-card-icon">{section.icon}</div>
              <h3 className="tw-section-card-title">{section.title}</h3>
              <p className="tw-section-card-arabic arabic">{section.arabicTitle}</p>
              <p className="tw-section-card-overview">
                {section.overview.slice(0, 120)}...
              </p>
              <div className="tw-section-card-footer">
                <span className="tw-section-card-count">{totalRules} {totalRules === 1 ? 'rule' : 'rules'}</span>
                <div className="tw-section-card-levels">
                  {levels.map(l => (
                    <span
                      key={l}
                      className="tw-section-level-dot"
                      style={{ background: LEVEL_COLORS[l]?.color }}
                      title={LEVEL_COLORS[l]?.label}
                    />
                  ))}
                </div>
                <span className="tw-section-card-read">Explore →</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Scholars */}
      <div className="tw-scholars-section">
        <h2 className="tw-scholars-title">Foundational Scholars of Tawheed</h2>
        <div className="tw-scholars-grid">
          {TAWHEED_SCHOLARS.map((s, i) => (
            <div key={i} className="tw-scholar-card card">
              <h3 className="tw-scholar-name">{s.name}</h3>
              <p className="tw-scholar-arabic arabic">{s.arabicName}</p>
              <p className="tw-scholar-lifespan">{s.lifespan}</p>
              <p className="tw-scholar-contribution">{s.contribution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
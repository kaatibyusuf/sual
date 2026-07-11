import React, { useState } from 'react'
import { FIQH_SECTIONS, FIQH_SCHOLARS } from '../data/fiqh.js'
import './Fiqh.css'

const LEVEL_COLORS = {
  foundation: { bg: '#e8f4ff', color: '#094570', border: '#c0ddf5', label: 'Foundation' },
  beginner: { bg: '#e8f5e9', color: '#2e7d32', border: '#a5d6a7', label: 'Beginner' },
  intermediate: { bg: '#fff8e1', color: '#e65100', border: '#ffcc02', label: 'Intermediate' },
  advanced: { bg: '#f3e5f5', color: '#6a1b9a', border: '#ce93d8', label: 'Advanced' },
}

export default function Fiqh() {
  const [activeSection, setActiveSection] = useState(null)
  const [activeRule, setActiveRule] = useState(null)
  const [filter, setFilter] = useState('all')

  const levels = ['all', 'foundation', 'beginner', 'intermediate', 'advanced']

  if (activeRule && activeSection) {
    const section = FIQH_SECTIONS.find(s => s.id === activeSection)
    const rule = section?.rules.find(r => r.id === activeRule)
    if (!rule) return null
    const lc = LEVEL_COLORS[rule.level]

    return (
      <div className="page-content fq-page">
        <button className="fq-back" onClick={() => setActiveRule(null)}>
          ← Back to {section.title}
        </button>

        <div className="fq-rule-detail">
          {/* Header */}
          <div className="fq-rule-header card">
            <div className="fq-rule-header-top">
              <span
                className="fq-level-badge"
                style={{ background: lc.bg, color: lc.color, border: `1px solid ${lc.border}` }}
              >
                {lc.label}
              </span>
              <span className="fq-section-ref">{section.title}</span>
            </div>
            <h1 className="fq-rule-name">{rule.name}</h1>
            <p className="fq-rule-arabic arabic">{rule.arabic}</p>
          </div>

          {/* Explanation */}
          <div className="fq-rule-body card">
            <h2 className="fq-section-label">📖 Explanation</h2>
            {rule.explanation.split('\n').map((para, i) => (
              <p key={i} className="fq-rule-para">{para}</p>
            ))}
          </div>

          {/* Examples */}
          {rule.examples && rule.examples.length > 0 && (
            <div className="fq-rule-examples card">
              <h2 className="fq-section-label">✍️ Examples & Evidences</h2>
              <div className="fq-examples-grid">
                {rule.examples.map((ex, i) => (
                  <div key={i} className="fq-example-item">
                    <div className="fq-example-arabic arabic-lg">{ex.arabic}</div>
                    <div className="fq-example-translit">{ex.transliteration}</div>
                    <div className="fq-example-note">{ex.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Source */}
          <div className="fq-rule-source card">
            <h2 className="fq-section-label">📚 Source</h2>
            <p className="fq-source-text">{rule.source}</p>
          </div>
        </div>
      </div>
    )
  }

  if (activeSection) {
    const section = FIQH_SECTIONS.find(s => s.id === activeSection)
    if (!section) return null

    const filteredRules = filter === 'all'
      ? section.rules
      : section.rules.filter(r => r.level === filter)

    return (
      <div className="page-content fq-page">
        <button className="fq-back" onClick={() => setActiveSection(null)}>
          ← Back to Fiqh
        </button>

        <div className="fq-section-header">
          <div className="fq-section-icon">{section.icon}</div>
          <div>
            <h1 className="fq-section-title">{section.title}</h1>
            <p className="fq-section-arabic arabic">{section.arabicTitle}</p>
          </div>
        </div>

        <div className="fq-section-overview card">
          <p className="fq-overview-text">{section.overview}</p>
        </div>

        {/* Level filter */}
        <div className="fq-filter-row">
          {levels.map(l => (
            <button
              key={l}
              className={`fq-filter-btn ${filter === l ? 'fq-filter-btn--active' : ''}`}
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

        <div className="fq-rules-list">
          {filteredRules.map(rule => {
            const lc = LEVEL_COLORS[rule.level]
            return (
              <button
                key={rule.id}
                className="fq-rule-card card"
                onClick={() => setActiveRule(rule.id)}
              >
                <div className="fq-rule-card-top">
                  <span
                    className="fq-level-badge"
                    style={{ background: lc.bg, color: lc.color, border: `1px solid ${lc.border}` }}
                  >
                    {lc.label}
                  </span>
                  {rule.examples?.length > 0 && (
                    <span className="fq-examples-count">{rule.examples.length} examples</span>
                  )}
                </div>
                <h3 className="fq-rule-card-name">{rule.name}</h3>
                <p className="fq-rule-card-arabic arabic">{rule.arabic}</p>
                <p className="fq-rule-card-preview">
                  {rule.explanation.slice(0, 150)}...
                </p>
                <div className="fq-rule-card-footer">
                  <span className="fq-rule-card-read">Read Rule →</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="page-content fq-page">
      <h1 className="page-title">Fiqh</h1>
      <p className="page-subtitle">عِلْمُ الفِقْه — The Science of Islamic Jurisprudence</p>

      {/* Intro banner */}
      <div className="fq-intro-banner">
        <div className="fq-intro-ayah arabic-lg">
          وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ
        </div>
        <p className="fq-intro-trans">"And I did not create the jinn and mankind except to worship Me." — Quran 51:56</p>
        <p className="fq-intro-note">
          The Prophet Muhammad ﷺ said: "Whoever Allah wishes good for, He grants him deep understanding
          of the religion (fiqh fid-din)." (Sahih al-Bukhari 71, Sahih Muslim 1037)
        </p>
      </div>

      {/* Level guide */}
      <div className="fq-level-guide">
        {Object.entries(LEVEL_COLORS).map(([key, lc]) => (
          <div
            key={key}
            className="fq-level-item"
            style={{ background: lc.bg, border: `1px solid ${lc.border}` }}
          >
            <span className="fq-level-dot" style={{ background: lc.color }} />
            <span style={{ color: lc.color, fontWeight: 700, fontSize: '0.78rem' }}>{lc.label}</span>
          </div>
        ))}
      </div>

      {/* Sections grid */}
      <div className="fq-sections-grid">
        {FIQH_SECTIONS.map(section => {
          const totalRules = section.rules.length
          const levels = [...new Set(section.rules.map(r => r.level))]
          return (
            <button
              key={section.id}
              className="fq-section-card card"
              onClick={() => { setActiveSection(section.id); setActiveRule(null); setFilter('all') }}
            >
              <div className="fq-section-card-icon">{section.icon}</div>
              <h3 className="fq-section-card-title">{section.title}</h3>
              <p className="fq-section-card-arabic arabic">{section.arabicTitle}</p>
              <p className="fq-section-card-overview">
                {section.overview.slice(0, 120)}...
              </p>
              <div className="fq-section-card-footer">
                <span className="fq-section-card-count">{totalRules} {totalRules === 1 ? 'rule' : 'rules'}</span>
                <div className="fq-section-card-levels">
                  {levels.map(l => (
                    <span
                      key={l}
                      className="fq-section-level-dot"
                      style={{ background: LEVEL_COLORS[l]?.color }}
                      title={LEVEL_COLORS[l]?.label}
                    />
                  ))}
                </div>
                <span className="fq-section-card-read">Explore →</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Scholars */}
      <div className="fq-scholars-section">
        <h2 className="fq-scholars-title">Foundational Scholars of Fiqh</h2>
        <div className="fq-scholars-grid">
          {FIQH_SCHOLARS.map((s, i) => (
            <div key={i} className="fq-scholar-card card">
              <h3 className="fq-scholar-name">{s.name}</h3>
              <p className="fq-scholar-arabic arabic">{s.arabicName}</p>
              <p className="fq-scholar-lifespan">{s.lifespan}</p>
              <p className="fq-scholar-contribution">{s.contribution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
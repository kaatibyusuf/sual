import React, { useState } from 'react'
import { supabase } from '../lib/supabase.js'
import './LevelSelect.css'

const LEVELS = [
  {
    key: 'beginner',
    label: 'Beginner',
    arabic: 'مُبْتَدِئ',
    icon: '🌱',
    color: '#2e7d32',
    bg: 'rgba(46,125,50,0.08)',
    border: 'rgba(46,125,50,0.25)',
    description: 'You are new to the Islamic sciences or want to build a solid foundation. Start here with the essentials of Fiqh, Seerah, and Arabic.',
    includes: [
      'Core Fiqh — Taharah, Salah, Zakah, Sawm, Hajj',
      'Foundational Seerah — Birth to Hijrah',
      'Basic Arabic — Root system, verb forms',
      'Introduction to Tajweed',
      '50 beginner Q&As per discipline',
    ],
    requirement: 'No prior requirement — start immediately',
  },
  {
    key: 'intermediate',
    label: 'Intermediate',
    arabic: 'مُتَوَسِّط',
    icon: '📚',
    color: '#e65100',
    bg: 'rgba(230,81,0,0.08)',
    border: 'rgba(230,81,0,0.25)',
    description: 'You have studied the basics and are ready to go deeper. Engage with scholarly opinions, complex rulings, and classical texts.',
    includes: [
      'Advanced Fiqh — Khilaf, Maqasid, Muamalat',
      'Detailed Seerah — Madinah period, Battles, Companions',
      'Nahw and Sarf — Intermediate grammar',
      'Usul al-Fiqh — Principles of jurisprudence',
      '50 intermediate Q&As per discipline',
    ],
    requirement: 'Complete all Beginner content with 70% quiz average',
  },
  {
    key: 'advanced',
    label: 'Advanced',
    arabic: 'مُتَقَدِّم',
    icon: '🎓',
    color: '#6a1b9a',
    bg: 'rgba(106,27,154,0.08)',
    border: 'rgba(106,27,154,0.25)',
    description: 'You are a serious student of knowledge engaging with classical texts, scholarly methodology, and deep analysis of the Islamic sciences.',
    includes: [
      'Fiqh al-Nawazil — Contemporary rulings',
      'Tafseer — Classical and analytical methodology',
      'Advanced Usul — Ijtihad, Qiyas, Maslaha',
      'Hadith Sciences — Mustalah, Rijal, Takhrij',
      '50 advanced Q&As per discipline',
    ],
    requirement: 'Complete all Intermediate content with 75% quiz average',
  },
]

export default function LevelSelect({ user, onLevelSelected }) {
  const [saving, setSaving] = useState(null)
  const [error, setError] = useState(null)

  const choose = async (levelKey) => {
    if (saving) return
    setSaving(levelKey)
    setError(null)
    try {
      const { error } = await supabase.from('user_levels').upsert({
        user_id: user.id,
        current_level: levelKey,
        level_selected: true,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id' })
      if (error) throw error
      onLevelSelected(levelKey)
    } catch (err) {
      setError(err.message)
      setSaving(null)
    }
  }

  return (
    <div className="level-select-page">
      <div className="level-select-bg">
        <div className="level-select-bg-arabic">سُؤَال</div>
      </div>

      <div className="level-select-inner">
        <div className="level-select-header">
          <div className="level-select-logo arabic">سُؤَال</div>
          <h1 className="level-select-title">Choose Your Level</h1>
          <p className="level-select-subtitle">
            اِخْتَرْ مُسْتَوَاكَ — Select the level that best describes where you are in your journey of Islamic knowledge.
            You can advance to higher levels as you progress. Tapping a level saves it immediately.
          </p>
        </div>

        {error && (
          <div className="level-select-error">⚠️ {error}</div>
        )}

        <div className="level-select-cards">
          {LEVELS.map(level => {
            const isSaving = saving === level.key
            return (
              <button
                key={level.key}
                className={`level-card ${isSaving ? 'level-card--selected' : ''}`}
                onClick={() => choose(level.key)}
                disabled={!!saving}
                style={{
                  '--level-color': level.color,
                  '--level-bg': level.bg,
                  '--level-border': level.border,
                  opacity: saving && !isSaving ? 0.5 : 1,
                }}
              >
                <div className="level-card-top">
                  <span className="level-card-icon">{level.icon}</span>
                  <div className="level-card-titles">
                    <h2 className="level-card-label">{level.label}</h2>
                    <p className="level-card-arabic arabic">{level.arabic}</p>
                  </div>
                  <div className={`level-card-check ${isSaving ? 'level-card-check--active' : ''}`}>
                    {isSaving ? '…' : ''}
                  </div>
                </div>

                <p className="level-card-desc">{level.description}</p>

                <div className="level-card-includes">
                  <p className="level-card-includes-title">What you will study:</p>
                  {level.includes.map((item, i) => (
                    <div key={i} className="level-card-include-item">
                      <span className="level-card-include-dot" style={{ background: level.color }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="level-card-req" style={{ borderColor: level.border, background: level.bg }}>
                  <span className="level-card-req-label">Requirement:</span>
                  <span className="level-card-req-text">{level.requirement}</span>
                </div>

                <div className="level-card-cta" style={{ color: level.color }}>
                  {isSaving ? 'Saving...' : `Begin as ${level.label} →`}
                </div>
              </button>
            )
          })}
        </div>

        <p className="level-select-note">
          The Prophet ﷺ said: "Whoever Allah wants good for, He gives him understanding of the religion."
          <br /><span>Sahih al-Bukhari 71</span>
        </p>
      </div>
    </div>
  )
}
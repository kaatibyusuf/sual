import React, { useState } from 'react'
import { supabase } from '../lib/supabase.js'
import './LevelSelect.css'

const ICONS = {
  beginner: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21V10" />
      <path d="M12 14c0-4-3-6-7-6 0 4 3 6 7 6z" />
      <path d="M12 10c0-4 3-6 7-6 0 4-3 6-7 6z" />
    </svg>
  ),
  intermediate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="15" y2="11" />
    </svg>
  ),
  advanced: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9l10-5 10 5-10 5-10-5z" />
      <path d="M6 11.5v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
      <path d="M22 9v6" />
    </svg>
  ),
}

// Beginner is displayed in English throughout, as before. Intermediate
// and Advanced are displayed fully in Arabic (description, curriculum,
// requirement, CTA) — only the top-level `label` (used elsewhere in the
// app, e.g. Home's level badge) and the stored `key` stay in English,
// since those aren't user-facing translation targets and other parts
// of the app key off `key`/`label` directly.
const LEVELS = [
  {
    key: 'beginner',
    label: 'Beginner',
    arabic: 'مُبْتَدِئ',
    icon: 'beginner',
    color: '#2e7d32',
    bg: 'rgba(46,125,50,0.08)',
    border: 'rgba(46,125,50,0.25)',
    rtl: false,
    description: 'New to the Islamic sciences? Start here with the essentials of Fiqh, Seerah, and Arabic.',
    includesTitle: 'What you will study:',
    includes: [
      'Core Fiqh — Taharah, Salah, Zakah, Sawm, Hajj',
      'Foundational Seerah — Birth to Hijrah',
      'Basic Arabic — Root system, verb forms',
    ],
    requirementLabel: 'Requirement:',
    requirement: 'No prior requirement — start immediately',
    cta: 'Begin as Beginner →',
  },
  {
    key: 'intermediate',
    label: 'Intermediate',
    arabic: 'مُتَوَسِّط',
    icon: 'intermediate',
    color: '#e65100',
    bg: 'rgba(230,81,0,0.08)',
    border: 'rgba(230,81,0,0.25)',
    rtl: true,
    description: 'لمن أتمّ الأساسيات ويريد التعمّق في أقوال العلماء والنصوص الكلاسيكية.',
    includesTitle: 'ما ستدرسه:',
    includes: [
      'الفقه المتقدم — الخلاف، المقاصد، المعاملات',
      'السيرة التفصيلية — العهد المدني، الغزوات، الصحابة',
      'أصول الفقه — مبادئ الاجتهاد والاستنباط',
    ],
    requirementLabel: 'الشرط:',
    requirement: 'إتمام جميع محتوى المستوى المبتدئ بمعدل ٧٠٪ في الاختبارات',
    cta: '← ابدأ كمتوسط',
  },
  {
    key: 'advanced',
    label: 'Advanced',
    arabic: 'مُتَقَدِّم',
    icon: 'advanced',
    color: '#6a1b9a',
    bg: 'rgba(106,27,154,0.08)',
    border: 'rgba(106,27,154,0.25)',
    rtl: true,
    description: 'أنت طالب علم جاد تتعامل مع النصوص الكلاسيكية، ومناهج العلماء، والتحليل العميق للعلوم الإسلامية.',
    includesTitle: 'ما ستدرسه:',
    includes: [
      'فقه النوازل — الأحكام المعاصرة',
      'التفسير — المنهج الكلاسيكي والتحليلي',
      'علوم الحديث — المصطلح، الرجال، التخريج',
    ],
    requirementLabel: 'الشرط:',
    requirement: 'إتمام جميع محتوى المستوى المتوسط بمعدل ٧٥٪ في الاختبارات',
    cta: '← ابدأ كمتقدم',
  },
]

// Saved locally in public/images/level-select/ — no longer hotlinked
// to Unsplash's CDN.
const LEVEL_SELECT_BG = '/images/level-select/bg.jpg'

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
      {/* Real photo background (crescent moon over mountain) replacing
          the old giant faint "سُؤَال" text watermark. Gradient overlay
          plus text-shadow on the header text below — learned from
          Home's hero that either alone isn't reliable across a photo
          with variable brightness; using both together this time
          instead of re-tuning one repeatedly. */}
      <div
        className="level-select-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(6,47,74,0.72), rgba(9,69,112,0.68)), url(${LEVEL_SELECT_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />

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
            const spokenName = level.rtl ? level.arabic : level.label
            return (
              <button
                key={level.key}
                className={`level-card ${isSaving ? 'level-card--selected' : ''} ${level.rtl ? 'level-card--rtl' : ''}`}
                onClick={() => choose(level.key)}
                disabled={!!saving}
                dir={level.rtl ? 'rtl' : 'ltr'}
                data-a11y-label={`${spokenName}. ${level.description} ${level.requirementLabel} ${level.requirement}`}
                style={{
                  '--level-color': level.color,
                  '--level-bg': level.bg,
                  '--level-border': level.border,
                  opacity: saving && !isSaving ? 0.5 : 1,
                }}
              >
                <div className="level-card-top">
                  <span className="level-card-icon">{ICONS[level.icon]}</span>
                  <div className="level-card-titles">
                    <h2 className={`level-card-label ${level.rtl ? 'arabic' : ''}`}>
                      {level.rtl ? level.arabic : level.label}
                    </h2>
                    {!level.rtl && <p className="level-card-arabic arabic">{level.arabic}</p>}
                  </div>
                  <div className={`level-card-check ${isSaving ? 'level-card-check--active' : ''}`}>
                    {isSaving ? '…' : ''}
                  </div>
                </div>

                <p className={`level-card-desc ${level.rtl ? 'arabic' : ''}`}>{level.description}</p>

                <div className="level-card-includes">
                  <p className={`level-card-includes-title ${level.rtl ? 'arabic' : ''}`}>{level.includesTitle}</p>
                  {level.includes.map((item, i) => (
                    <div key={i} className="level-card-include-item">
                      <span className="level-card-include-dot" style={{ background: level.color }} />
                      <span className={level.rtl ? 'arabic' : ''}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="level-card-req" style={{ borderColor: level.border, background: level.bg }}>
                  <span className={`level-card-req-label ${level.rtl ? 'arabic' : ''}`}>{level.requirementLabel}</span>
                  <span className={`level-card-req-text ${level.rtl ? 'arabic' : ''}`}>{level.requirement}</span>
                </div>

                <div className={`level-card-cta ${level.rtl ? 'arabic' : ''}`} style={{ color: level.color }}>
                  {isSaving ? (level.rtl ? '...جارٍ الحفظ' : 'Saving...') : level.cta}
                </div>
              </button>
            )
          })}
        </div>

        <p className="level-select-note">
          The Prophet ﷺ said: "Whoever Allah wants good for, He gives him understanding of the religion."
          <br /><span>Sahih Bukhari 71</span>
        </p>
      </div>
    </div>
  )
}
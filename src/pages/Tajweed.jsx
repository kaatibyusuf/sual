import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { supabase } from '../lib/supabase.js'
import { TAJWEED_SECTIONS, TAJWEED_SCHOLARS } from '../data/tajweed.js'
import './Tajweed.css'

const LEVEL_COLORS = {
  foundation: { bg: '#e8f4ff', color: '#094570', border: '#c0ddf5', label: 'Foundation' },
  beginner: { bg: '#e8f5e9', color: '#2e7d32', border: '#a5d6a7', label: 'Beginner' },
  intermediate: { bg: '#fff8e1', color: '#e65100', border: '#ffcc02', label: 'Intermediate' },
  advanced: { bg: '#f3e5f5', color: '#6a1b9a', border: '#ce93d8', label: 'Advanced' },
}

// tj1 (Introduction/Makharij/Sifaat) and tj2 (Noon Sakinah rules) are
// free for every signed-in user. tj3 onward requires an active
// tajweed_subscriptions row. Kept as a plain array (not derived from
// TAJWEED_SECTIONS) so the free/paid line is explicit and easy to
// audit at a glance, rather than implied by array position.
const FREE_SECTION_IDS = ['tj1', 'tj2']

export default function Tajweed({ user }) {
  const [activeSection, setActiveSection] = useState(null)
  const [activeRule, setActiveRule] = useState(null)
  const [filter, setFilter] = useState('all')

  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)
  const [confirmingPayment, setConfirmingPayment] = useState(false)
  const [payError, setPayError] = useState(null)

  const levels = ['all', 'foundation', 'beginner', 'intermediate', 'advanced']

  const checkSubscription = useCallback(async () => {
    if (!user) { setSubLoading(false); return }
    setSubLoading(true)
    try {
      const { data } = await supabase
        .from('tajweed_subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle()
      setSubscription(data)
    } catch {
      setSubscription(null)
    } finally {
      setSubLoading(false)
    }
  }, [user])

  useEffect(() => { checkSubscription() }, [checkSubscription])

  useEffect(() => {
    if (!user) return
    const params = new URLSearchParams(window.location.search)
    if (params.get('payment') === 'success') {
      window.history.replaceState({}, '', '/tajweed')
      setConfirmingPayment(true)
      let attempts = 0
      const poll = setInterval(async () => {
        attempts++
        const { data } = await supabase
          .from('tajweed_subscriptions')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle()
        if (data?.status === 'active') {
          setSubscription(data)
          setConfirmingPayment(false)
          clearInterval(poll)
        } else if (attempts >= 8) {
          setConfirmingPayment(false)
          clearInterval(poll)
        }
      }, 5000)
      return () => clearInterval(poll)
    }
  }, [user])

  const isPaid = useMemo(() => {
    if (!subscription) return false
    return subscription.status === 'active' &&
      subscription.expires_at &&
      new Date(subscription.expires_at) > new Date()
  }, [subscription])

  const isSectionLocked = (sectionId) => !FREE_SECTION_IDS.includes(sectionId) && !isPaid

  const handlePaystack = async (plan) => {
    setPayError(null)
    try {
      const { data, error } = await supabase.functions.invoke('initialize-payment', {
        body: { product: 'tajweed', plan },
      })
      if (error || data?.error) throw new Error(data?.error || error.message)
      window.location.href = data.authorization_url
    } catch (err) {
      setPayError(err.message)
    }
  }

  const openSection = (sectionId) => {
    setActiveSection(sectionId)
    setActiveRule(null)
    setFilter('all')
  }

  const renderPaywall = (section) => (
    <div className="tj-paywall card">
      <span className="tj-paywall-icon">🔒</span>
      <h2 className="tj-paywall-title">{section.title} is part of the full Tajweed course</h2>
      <p className="tj-paywall-text">
        {section.title} is available to Tajweed course subscribers. Introduction to Tajweed
        (Makharij and Sifaat) and Noon Sakinah &amp; Tanween remain free for everyone.
      </p>

      {confirmingPayment ? (
        <p className="tj-paywall-confirming">Confirming your payment — this can take up to a minute.</p>
      ) : (
        <div className="tj-paywall-plans">
          <div className="tj-paywall-plan" data-a11y-label="Monthly plan, 1,500 naira per month">
            <p className="tj-paywall-plan-name">Monthly</p>
            <p className="tj-paywall-plan-price">₦1,500<span>/month</span></p>
            <button className="tj-paywall-btn tj-paywall-btn--secondary" onClick={() => handlePaystack('monthly')}>
              Subscribe →
            </button>
          </div>
          <div className="tj-paywall-plan tj-paywall-plan--featured" data-a11y-label="Annual plan, 10,000 naira per year, best value, saves 8,000 naira a year">
            <span className="tj-paywall-badge">Best Value</span>
            <p className="tj-paywall-plan-name">Annual</p>
            <p className="tj-paywall-plan-price">₦10,000<span>/year</span></p>
            <p className="tj-paywall-plan-note">₦833/month · save ₦8,000 a year</p>
            <button className="tj-paywall-btn" onClick={() => handlePaystack('annual')}>
              Subscribe →
            </button>
          </div>
        </div>
      )}

      {payError && <div className="tj-paywall-error">{payError}</div>}
    </div>
  )

  if (activeRule && activeSection) {
    const section = TAJWEED_SECTIONS.find(s => s.id === activeSection)
    const rule = section?.rules.find(r => r.id === activeRule)
    if (!rule) return null
    const lc = LEVEL_COLORS[rule.level]

    return (
      <div className="page-content tj-page">
        <button className="tj-back" onClick={() => setActiveRule(null)}>
          ← Back to {section.title}
        </button>

        <div className="tj-rule-detail">
          {/* Header */}
          <div className="tj-rule-header card" data-a11y-label={`${rule.name}, ${lc.label} level.`}>
            <div className="tj-rule-header-top">
              <span
                className="tj-level-badge"
                style={{ background: lc.bg, color: lc.color, border: `1px solid ${lc.border}` }}
              >
                {lc.label}
              </span>
              <span className="tj-section-ref">{section.title}</span>
            </div>
            <h1 className="tj-rule-name">{rule.name}</h1>
            <p className="tj-rule-arabic arabic">{rule.arabic}</p>
          </div>

          {/* Explanation */}
          <div className="tj-rule-body card">
            <h2 className="tj-section-label">📖 Explanation</h2>
            {rule.explanation.split('\n').map((para, i) => (
              <p key={i} className="tj-rule-para" data-a11y-label={para}>{para}</p>
            ))}
          </div>

          {/* Examples */}
          {rule.examples && rule.examples.length > 0 && (
            <div className="tj-rule-examples card">
              <h2 className="tj-section-label">✍️ Examples from the Quran</h2>
              <div className="tj-examples-grid">
                {rule.examples.map((ex, i) => (
                  <div
                    key={i}
                    className="tj-example-item"
                    data-a11y-label={`${ex.transliteration}. ${ex.note}`}
                  >
                    <div className="tj-example-arabic arabic-lg">{ex.arabic}</div>
                    <div className="tj-example-translit">{ex.transliteration}</div>
                    <div className="tj-example-note">{ex.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Source */}
          <div className="tj-rule-source card" data-a11y-label={`Source: ${rule.source}`}>
            <h2 className="tj-section-label">📚 Source</h2>
            <p className="tj-source-text">{rule.source}</p>
          </div>
        </div>
      </div>
    )
  }

  if (activeSection) {
    const section = TAJWEED_SECTIONS.find(s => s.id === activeSection)
    if (!section) return null

    const locked = isSectionLocked(section.id)

    const filteredRules = filter === 'all'
      ? section.rules
      : section.rules.filter(r => r.level === filter)

    return (
      <div className="page-content tj-page">
        <button className="tj-back" onClick={() => setActiveSection(null)}>
          ← Back to Tajweed
        </button>

        <div className="tj-section-header" data-a11y-label={`${section.title}: ${section.overview}`}>
          <div className="tj-section-icon">{section.icon}</div>
          <div>
            <h1 className="tj-section-title">{section.title}</h1>
            <p className="tj-section-arabic arabic">{section.arabicTitle}</p>
          </div>
        </div>

        <div className="tj-section-overview card">
          <p className="tj-overview-text">{section.overview}</p>
        </div>

        {subLoading ? (
          <div className="tj-paywall card">
            <p className="tj-paywall-confirming">Checking your access…</p>
          </div>
        ) : locked ? (
          renderPaywall(section)
        ) : (
          <>
            {/* Level filter */}
            <div className="tj-filter-row">
              {levels.map(l => (
                <button
                  key={l}
                  className={`tj-filter-btn ${filter === l ? 'tj-filter-btn--active' : ''}`}
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

            <div className="tj-rules-list">
              {filteredRules.map(rule => {
                const lc = LEVEL_COLORS[rule.level]
                return (
                  <button
                    key={rule.id}
                    className="tj-rule-card card"
                    onClick={() => setActiveRule(rule.id)}
                    data-a11y-label={`${rule.name}, ${lc.label} level. ${rule.explanation.slice(0, 150)}`}
                  >
                    <div className="tj-rule-card-top">
                      <span
                        className="tj-level-badge"
                        style={{ background: lc.bg, color: lc.color, border: `1px solid ${lc.border}` }}
                      >
                        {lc.label}
                      </span>
                      {rule.examples?.length > 0 && (
                        <span className="tj-examples-count">{rule.examples.length} examples</span>
                      )}
                    </div>
                    <h3 className="tj-rule-card-name">{rule.name}</h3>
                    <p className="tj-rule-card-arabic arabic">{rule.arabic}</p>
                    <p className="tj-rule-card-preview">
                      {rule.explanation.slice(0, 150)}...
                    </p>
                    <div className="tj-rule-card-footer">
                      <span className="tj-rule-card-read">Read Rule →</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="page-content tj-page">
      <h1 className="page-title">Tajweed</h1>
      <p className="page-subtitle">عِلْمُ التَّجْوِيد — The Science of Quranic Recitation</p>

      {/* Intro banner */}
      <div
        className="tj-intro-banner"
        data-a11y-label={`"And recite the Quran with measured recitation." Quran 73:4. The Prophet Muhammad said: "The one who is proficient in the Quran will be with the noble and righteous scribes, and the one who recites it with difficulty will have two rewards." Sahih al-Bukhari 4937.`}
      >
        <div className="tj-intro-ayah arabic-lg">
          وَرَتِّلِ القُرْآنَ تَرْتِيلًا
        </div>
        <p className="tj-intro-trans">"And recite the Quran with measured recitation." — Quran 73:4</p>
        <p className="tj-intro-note">
          The Prophet Muhammad ﷺ said: "The one who is proficient in the Quran will be with the noble
          and righteous scribes, and the one who recites it with difficulty will have two rewards."
          (Sahih al-Bukhari 4937)
        </p>
      </div>

      {/* Level guide */}
      <div className="tj-level-guide">
        {Object.entries(LEVEL_COLORS).map(([key, lc]) => (
          <div
            key={key}
            className="tj-level-item"
            style={{ background: lc.bg, border: `1px solid ${lc.border}` }}
          >
            <span className="tj-level-dot" style={{ background: lc.color }} />
            <span style={{ color: lc.color, fontWeight: 700, fontSize: '0.78rem' }}>{lc.label}</span>
          </div>
        ))}
      </div>

      {/* Sections grid */}
      <div className="tj-sections-grid">
        {TAJWEED_SECTIONS.map(section => {
          const totalRules = section.rules.length
          const sectionLevels = [...new Set(section.rules.map(r => r.level))]
          const locked = isSectionLocked(section.id)
          return (
            <button
              key={section.id}
              className={`tj-section-card card ${locked ? 'tj-section-card--locked' : ''}`}
              onClick={() => openSection(section.id)}
              data-a11y-label={`${section.title}${locked ? ', paid' : ''}. ${totalRules} ${totalRules === 1 ? 'rule' : 'rules'}. ${section.overview.slice(0, 120)}`}
            >
              <div className="tj-section-card-icon">{locked ? '🔒' : section.icon}</div>
              <h3 className="tj-section-card-title">{section.title}</h3>
              <p className="tj-section-card-arabic arabic">{section.arabicTitle}</p>
              <p className="tj-section-card-overview">
                {section.overview.slice(0, 120)}...
              </p>
              <div className="tj-section-card-footer">
                <span className="tj-section-card-count">{totalRules} {totalRules === 1 ? 'rule' : 'rules'}</span>
                <div className="tj-section-card-levels">
                  {sectionLevels.map(l => (
                    <span
                      key={l}
                      className="tj-section-level-dot"
                      style={{ background: LEVEL_COLORS[l]?.color }}
                      title={LEVEL_COLORS[l]?.label}
                    />
                  ))}
                </div>
                {locked ? (
                  <span className="tj-section-card-locked-badge">Paid</span>
                ) : (
                  <span className="tj-section-card-read">Explore →</span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Scholars */}
      <div className="tj-scholars-section">
        <h2 className="tj-scholars-title">Foundational Scholars of Tajweed</h2>
        <div className="tj-scholars-grid">
          {TAJWEED_SCHOLARS.map((s, i) => (
            <div
              key={i}
              className="tj-scholar-card card"
              data-a11y-label={`${s.name}, ${s.lifespan}. ${s.contribution}`}
            >
              <h3 className="tj-scholar-name">{s.name}</h3>
              <p className="tj-scholar-arabic arabic">{s.arabicName}</p>
              <p className="tj-scholar-lifespan">{s.lifespan}</p>
              <p className="tj-scholar-contribution">{s.contribution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
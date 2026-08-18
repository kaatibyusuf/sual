import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { supabase } from '../lib/supabase.js'
import { TAJWEED_CONTENT, TAJWEED_FREE_TOPIC_KEYS } from '../data/tajweed.js'
import './Tajweed2.css'

const ICONS = {
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1z" />
      <line x1="12" y1="6" x2="12" y2="19" />
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  ),
  waves: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
      <path d="M2 18c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
    </svg>
  ),
  nun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 10a6 6 0 0 1 12 0v6" />
      <circle cx="6" cy="16" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5c3.5 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3.5-8 7-13z" />
    </svg>
  ),
  bounce: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2" />
      <path d="M8 8l4 4" />
      <circle cx="14" cy="14" r="2" />
      <path d="M16 16l3 3" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  arrows: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M5 7h14" />
      <path d="M5 7l-3 7a3 3 0 0 0 6 0z" />
      <path d="M19 7l-3 7a3 3 0 0 0 6 0z" />
    </svg>
  ),
  nose: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3c0 4-3 6-3 10a6 6 0 0 0 12 0c0-4-3-6-3-10" />
    </svg>
  ),
  pause: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l10 18H2z" />
      <line x1="12" y1="9" x2="12" y2="14" />
      <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  scroll: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h11a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H6a2 2 0 0 1 0-4h11" />
      <path d="M6 4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2" />
    </svg>
  ),
  cases: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3v4a1 1 0 0 1-1 1H4" />
      <path d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9l4-7Z" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  ),
  question: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 0 1 4.6-1.4c.6.9.4 1.9-.4 2.6-.9.8-1.7 1.2-1.7 2.3" />
      <circle cx="12" cy="16.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  ),
}

const Icon = ({ name }) => <span className="tj-icon" aria-hidden="true">{ICONS[name]}</span>

const TOPICS = [
  { key: 'introduction', label: 'Introduction to Tajweed', arabic: 'مُقَدِّمَة', icon: 'book' },
  { key: 'makharij', label: 'Makharij al-Huruf', arabic: 'مَخَارِجُ الحُرُوف', icon: 'mic' },
  { key: 'sifaat', label: 'Sifaat al-Huruf', arabic: 'صِفَاتُ الحُرُوف', icon: 'waves' },
  { key: 'noon_sakinah', label: 'Noon Sakinah & Tanween', arabic: 'أَحْكَامُ النُّون', icon: 'nun' },
  { key: 'meem_sakinah', label: 'Meem Sakinah Rules', arabic: 'أَحْكَامُ المِيم', icon: 'droplet' },
  { key: 'qalqalah', label: 'Qalqalah', arabic: 'القَلْقَلَة', icon: 'bounce' },
  { key: 'rules_of_laam', label: 'Rules of Laam', arabic: 'أَحْكَامُ اللَّام', icon: 'moon' },
  { key: 'madd', label: 'Madd — Elongation', arabic: 'المَدّ', icon: 'arrows' },
  { key: 'tafkheem_tarqeeq', label: 'Tafkheem & Tarqeeq', arabic: 'التَّفْخِيمُ وَالتَّرْقِيق', icon: 'scale' },
  { key: 'ghunnah', label: 'Ghunnah', arabic: 'الغُنَّة', icon: 'nose' },
  { key: 'waqf', label: 'Waqf — Rules of Stopping', arabic: 'أَحْكَامُ الوَقْف', icon: 'pause' },
  { key: 'common_mistakes', label: 'Common Mistakes', arabic: 'أَخْطَاءٌ شَائِعَة', icon: 'warning' },
]

const SECTION_ICONS = { definition: 'book', scope: 'scroll', rulings: 'scroll' }

export default function Tajweed2({ user }) {
  const [activeTopic, setActiveTopic] = useState(null)
  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)
  const [confirmingPayment, setConfirmingPayment] = useState(false)
  const [payError, setPayError] = useState(null)

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
      window.history.replaceState({}, '', '/tajweed-course')
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

  const isTopicLocked = (key) => !TAJWEED_FREE_TOPIC_KEYS.includes(key) && !isPaid

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

  const openTopic = (key) => setActiveTopic(key)
  const closeTopic = () => setActiveTopic(null)

  const renderPaywall = (meta) => (
    <div className="tj-paywall card">
      <span className="tj-paywall-icon"><Icon name="lock" /></span>
      <h3 className="tj-paywall-title">This topic is part of the full course</h3>
      <p className="tj-paywall-text">
        {meta.label} is available to Tajweed course subscribers. The first three topics —
        Introduction, Makharij al-Huruf, and Sifaat al-Huruf — remain free for everyone.
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

      {payError && <div className="tj-error" style={{ marginTop: 12 }}>{payError}</div>}
    </div>
  )

  const renderDetail = () => {
    const meta = TOPICS.find(t => t.key === activeTopic)
    const entry = TAJWEED_CONTENT[activeTopic]
    const locked = isTopicLocked(activeTopic)

    return (
      <>
        <button className="tj-back" onClick={closeTopic}>← Back to Tajweed Course</button>

        <div className="tj-detail-header card" data-a11y-label={`${entry.title}.`}>
          <span className="tj-detail-icon"><Icon name={meta.icon} /></span>
          <div>
            <h2 className="tj-detail-title">{entry.title}</h2>
            <p className="tj-detail-arabic arabic">{entry.arabic_title}</p>
          </div>
        </div>

        {subLoading ? (
          <div className="tj-loading"><div className="tj-spinner" /></div>
        ) : locked ? (
          renderPaywall(meta)
        ) : (
          <>
            {['definition', 'scope', 'rulings'].map(section => (
              entry[section] ? (
                <div key={section} className="tj-section card" data-a11y-label={`${section}: ${entry[section]}`}>
                  <h3 className="tj-section-title">
                    <Icon name={SECTION_ICONS[section]} /> {section.charAt(0).toUpperCase() + section.slice(1)}
                  </h3>
                  <p className="tj-section-body">{entry[section]}</p>
                </div>
              ) : null
            ))}

            {Array.isArray(entry.cases) && entry.cases.length > 0 && (
              <div className="tj-section card">
                <h3 className="tj-section-title"><Icon name="cases" /> Cases</h3>
                <div className="tj-cases">
                  {entry.cases.map((c, i) => (
                    <div
                      key={i}
                      className="tj-case"
                      data-a11y-label={`Case: ${c.title}. ${c.scenario}. Ruling: ${c.ruling}`}
                    >
                      <p className="tj-case-title">{c.title}</p>
                      <p className="tj-case-scenario">{c.scenario}</p>
                      <p className="tj-case-ruling"><strong>Ruling:</strong> {c.ruling}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {Array.isArray(entry.faq) && entry.faq.length > 0 && (
              <div className="tj-section card">
                <h3 className="tj-section-title"><Icon name="question" /> Common Questions</h3>
                <div className="tj-faq">
                  {entry.faq.map((f, i) => (
                    <div
                      key={i}
                      className="tj-faq-item"
                      data-a11y-label={`Question: ${f.question}. Answer: ${f.answer}`}
                    >
                      <p className="tj-faq-q">{f.question}</p>
                      <p className="tj-faq-a">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </>
    )
  }

  if (activeTopic) return <div className="page-content tj-page">{renderDetail()}</div>

  return (
    <div className="page-content tj-page">
      <h1 className="page-title">Tajweed Course</h1>
      <p className="page-subtitle">التَّجْوِيد — Learning to recite the Qur'an correctly</p>

      <div className="tj-note card">
        <p className="tj-note-text">
          This course is a careful written guide, not a substitute for a qualified teacher —
          precise pronunciation is best confirmed through listening and direct correction,
          especially for the Makharij and Sifaat topics.
        </p>
      </div>

      <div className="tj-cards">
        {TOPICS.map(t => {
          const entry = TAJWEED_CONTENT[t.key]
          const locked = isTopicLocked(t.key)
          return (
            <button
              key={t.key}
              className="tj-topic-card card"
              onClick={() => openTopic(t.key)}
              data-a11y-label={`${t.label}${locked ? ', paid' : ''}. ${entry.quick_fact}`}
            >
              <span className={`tj-topic-icon ${locked ? 'tj-topic-icon--locked' : ''}`}>
                <Icon name={locked ? 'lock' : t.icon} />
              </span>
              <div className="tj-topic-text">
                <h3 className="tj-topic-label">{t.label}</h3>
                <p className="tj-topic-arabic arabic">{t.arabic}</p>
                <p className="tj-topic-desc">{entry.quick_fact}</p>
              </div>
              {locked ? (
                <span className="tj-topic-badge">Paid</span>
              ) : (
                <span className="tj-topic-arrow">→</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
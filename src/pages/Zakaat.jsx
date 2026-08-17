import React, { useState, useEffect, useCallback } from 'react'
import { ZAKAAT_CONTENT } from '../data/zakaat.js'
import './Zakaat.css'

const ICONS = {
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M5 7h14" />
      <path d="M5 7l-3 7a3 3 0 0 0 6 0z" />
      <path d="M19 7l-3 7a3 3 0 0 0 6 0z" />
    </svg>
  ),
  coins: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
  wallet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3" />
      <path d="M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-4a2 2 0 0 0 0 4h4" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  question: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 0 1 4.6-1.4c.6.9.4 1.9-.4 2.6-.9.8-1.7 1.2-1.7 2.3" />
      <circle cx="12" cy="16.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1z" />
      <line x1="12" y1="6" x2="12" y2="19" />
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
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
}

const Icon = ({ name }) => <span className="zk-icon" aria-hidden="true">{ICONS[name]}</span>

const TOPICS = [
  { key: 'fundamentals', label: 'The Fundamentals', arabic: 'أَسَاسِيَّات', icon: 'scale' },
  { key: 'nisab_rates', label: 'Nisab & Rates', arabic: 'النِّصَاب', icon: 'coins' },
  { key: 'zakatable_wealth', label: 'Zakatable Wealth', arabic: 'الأَمْوَال', icon: 'wallet' },
  { key: 'recipients', label: 'Who Receives Zakat', arabic: 'المَصَارِف', icon: 'people' },
  { key: 'zakat_al_fitr', label: 'Zakat al-Fitr', arabic: 'زَكَاةُ الفِطْر', icon: 'moon' },
  { key: 'common_questions', label: 'Common Questions', arabic: 'مَسَائِل', icon: 'question' },
]

const SECTION_ICONS = { definition: 'book', scope: 'scroll', rulings: 'scroll' }

// Silver nisab: 612.36 grams — the classical, widely-cited figure
// (roughly 200 dirhams). Using silver rather than gold nisab, since
// it's the more commonly recommended standard for cash-equivalent
// nisab (a lower threshold, generally considered more cautious/
// inclusive of the poor) — see the "Nisab & Rates" topic for the
// scholarly discussion on gold vs silver nisab.
const SILVER_NISAB_GRAMS = 612.36
const TROY_OUNCE_GRAMS = 31.1035

// Static fallback estimates, used ONLY if the live price fetch fails
// (no internet, API down, etc). Same caveat as before — these are
// rough placeholders and will go stale; the live fetch below is what
// actually keeps this accurate day to day.
const FALLBACK_NISAB = {
  NGN: 800000, USD: 520, GBP: 410, EUR: 480, SAR: 1950,
  AED: 1910, PKR: 145000, INR: 43000, EGP: 25000, MYR: 2300,
}

const CURRENCIES = [
  { code: 'NGN', symbol: '₦', label: 'Naira' },
  { code: 'USD', symbol: '$', label: 'US Dollar' },
  { code: 'GBP', symbol: '£', label: 'British Pound' },
  { code: 'EUR', symbol: '€', label: 'Euro' },
  { code: 'SAR', symbol: '﷼', label: 'Saudi Riyal' },
  { code: 'AED', symbol: 'د.إ', label: 'UAE Dirham' },
  { code: 'PKR', symbol: '₨', label: 'Pakistani Rupee' },
  { code: 'INR', symbol: '₹', label: 'Indian Rupee' },
  { code: 'EGP', symbol: 'E£', label: 'Egyptian Pound' },
  { code: 'MYR', symbol: 'RM', label: 'Malaysian Ringgit' },
]

const NISAB_CACHE_KEY = 'sual-zakaat-nisab-cache'
const NISAB_CACHE_MAX_AGE_MS = 24 * 60 * 60 * 1000 // 1 day

// Fetches silver spot price (USD/troy oz) from Gold-API — free, no
// key required — then converts to USD nisab value, then converts
// that to the requested currency via Frankfurter (ECB daily rates,
// free, no key). Caches the whole result in localStorage for a day
// so we're not hitting either API on every render/tab switch.
async function fetchLiveNisab(currencyCode) {
  const cached = readNisabCache()
  if (cached && cached.currencyCode === currencyCode && Date.now() - cached.fetchedAt < NISAB_CACHE_MAX_AGE_MS) {
    return cached
  }

  const silverRes = await fetch('https://api.gold-api.com/price/XAG')
  if (!silverRes.ok) throw new Error('Could not reach the silver price feed')
  const silverData = await silverRes.json()
  const silverUsdPerGram = silverData.price / TROY_OUNCE_GRAMS
  const nisabUsd = silverUsdPerGram * SILVER_NISAB_GRAMS

  let nisabInCurrency = nisabUsd
  if (currencyCode !== 'USD') {
    const rateRes = await fetch(`https://api.frankfurter.dev/v1/latest?base=USD&symbols=${currencyCode}`)
    if (!rateRes.ok) throw new Error('Could not reach the currency conversion feed')
    const rateData = await rateRes.json()
    const rate = rateData.rates?.[currencyCode]
    if (!rate) throw new Error(`No conversion rate available for ${currencyCode}`)
    nisabInCurrency = nisabUsd * rate
  }

  const result = {
    currencyCode,
    nisabValue: nisabInCurrency,
    fetchedAt: Date.now(),
    source: 'live',
  }
  writeNisabCache(result)
  return result
}

function readNisabCache() {
  try {
    const raw = localStorage.getItem(NISAB_CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function writeNisabCache(result) {
  try {
    localStorage.setItem(NISAB_CACHE_KEY, JSON.stringify(result))
  } catch {
    // localStorage unavailable — non-fatal, just means no caching this session
  }
}

export default function Zakaat({ user }) {
  const [tab, setTab] = useState('learn')
  const [activeTopic, setActiveTopic] = useState(null)

  // ── Calculator state ─────────────────────────────────────────
  const [currencyCode, setCurrencyCode] = useState('NGN')
  const [cash, setCash] = useState('')
  const [gold, setGold] = useState('')
  const [silver, setSilver] = useState('')
  const [business, setBusiness] = useState('')
  const [otherAssets, setOtherAssets] = useState('')
  const [debtsOwedToYou, setDebtsOwedToYou] = useState('')
  const [debtsYouOwe, setDebtsYouOwe] = useState('')
  const [showResult, setShowResult] = useState(false)

  // ── Live nisab state ─────────────────────────────────────────
  // nisabValue starts null and MUST be treated as "not ready yet"
  // everywhere it's read (the Calculate button, the result render,
  // and fmt()) — it's only guaranteed non-null once loadNisab
  // finishes, whether via a live fetch or the fallback estimate.
  const [nisabValue, setNisabValue] = useState(null)
  const [nisabSource, setNisabSource] = useState(null) // 'live' | 'fallback' | null
  const [nisabFetchedAt, setNisabFetchedAt] = useState(null)
  const [nisabLoading, setNisabLoading] = useState(false)
  const [nisabError, setNisabError] = useState(null)

  const currency = CURRENCIES.find(c => c.code === currencyCode) || CURRENCIES[0]

  const loadNisab = useCallback(async (code, { force = false } = {}) => {
    setNisabLoading(true)
    setNisabError(null)
    try {
      if (force) localStorage.removeItem(NISAB_CACHE_KEY)
      const result = await fetchLiveNisab(code)
      setNisabValue(result.nisabValue)
      setNisabSource('live')
      setNisabFetchedAt(result.fetchedAt)
    } catch (err) {
      console.error('Failed to fetch live nisab, using fallback estimate:', err)
      setNisabValue(FALLBACK_NISAB[code] ?? FALLBACK_NISAB.USD)
      setNisabSource('fallback')
      setNisabFetchedAt(null)
      setNisabError(err.message)
    } finally {
      setNisabLoading(false)
    }
  }, [])

  // Fetch nisab as soon as the Calculator tab is first opened, not
  // only after the user picks a currency — otherwise nisabValue can
  // stay null indefinitely if someone lands on this tab and clicks
  // Calculate before ever changing the currency dropdown.
  useEffect(() => {
    if (tab === 'calculator' && nisabValue === null && !nisabLoading) {
      loadNisab(currencyCode)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  useEffect(() => {
    if (tab === 'calculator') loadNisab(currencyCode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyCode])

  const openTopic = (key) => setActiveTopic(key)
  const closeTopic = () => setActiveTopic(null)

  const renderLearn = () => {
    if (activeTopic) {
      const meta = TOPICS.find(t => t.key === activeTopic)
      const entry = ZAKAAT_CONTENT[activeTopic]
      return (
        <>
          <button className="zk-back" onClick={closeTopic}>← Back to Everything Zakaat</button>

          <div className="zk-detail-header card">
            <span className="zk-detail-icon"><Icon name={meta.icon} /></span>
            <div>
              <h2 className="zk-detail-title">{entry.title}</h2>
              <p className="zk-detail-arabic arabic">{entry.arabic_title}</p>
            </div>
          </div>

          {['definition', 'scope', 'rulings'].map(section => (
            entry[section] ? (
              <div key={section} className="zk-section card">
                <h3 className="zk-section-title">
                  <Icon name={SECTION_ICONS[section]} /> {section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                <p className="zk-section-body">{entry[section]}</p>
              </div>
            ) : null
          ))}

          {Array.isArray(entry.cases) && entry.cases.length > 0 && (
            <div className="zk-section card">
              <h3 className="zk-section-title"><Icon name="cases" /> Cases</h3>
              <div className="zk-cases">
                {entry.cases.map((c, i) => (
                  <div key={i} className="zk-case">
                    <p className="zk-case-title">{c.title}</p>
                    <p className="zk-case-scenario">{c.scenario}</p>
                    <p className="zk-case-ruling"><strong>Ruling:</strong> {c.ruling}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {Array.isArray(entry.faq) && entry.faq.length > 0 && (
            <div className="zk-section card">
              <h3 className="zk-section-title"><Icon name="question" /> Common Questions</h3>
              <div className="zk-faq">
                {entry.faq.map((f, i) => (
                  <div key={i} className="zk-faq-item">
                    <p className="zk-faq-q">{f.question}</p>
                    <p className="zk-faq-a">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )
    }

    return (
      <div className="zk-cards">
        {TOPICS.map(t => {
          const entry = ZAKAAT_CONTENT[t.key]
          return (
            <button key={t.key} className="zk-topic-card card" onClick={() => openTopic(t.key)}>
              <span className="zk-topic-icon"><Icon name={t.icon} /></span>
              <div className="zk-topic-text">
                <h3 className="zk-topic-label">{t.label}</h3>
                <p className="zk-topic-arabic arabic">{t.arabic}</p>
                <p className="zk-topic-desc">{entry.quick_fact}</p>
              </div>
              <span className="zk-topic-arrow">→</span>
            </button>
          )
        })}
      </div>
    )
  }

  const num = (v) => parseFloat(v) || 0
  const totalAssets = num(cash) + num(gold) + num(silver) + num(business) + num(otherAssets) + num(debtsOwedToYou)
  const netZakatable = Math.max(0, totalAssets - num(debtsYouOwe))
  const meetsNisab = nisabValue != null && netZakatable >= nisabValue
  const zakatDue = meetsNisab ? netZakatable * 0.025 : 0

  // Null-safe formatter — nisabValue (and by extension anything
  // derived from it) can legitimately be null while the live fetch
  // is still in flight or hasn't been triggered yet. Never assume a
  // number here; render a neutral placeholder instead of crashing.
  const fmt = (n) => {
    if (n == null || Number.isNaN(n)) return '—'
    return `${currency.symbol}${n.toLocaleString(undefined, { maximumFractionDigits: 2 })}`
  }

  const resetCalculator = () => {
    setCash(''); setGold(''); setSilver(''); setBusiness(''); setOtherAssets('')
    setDebtsOwedToYou(''); setDebtsYouOwe(''); setShowResult(false)
  }

  const nisabAgeLabel = (() => {
    if (!nisabFetchedAt) return null
    const mins = Math.round((Date.now() - nisabFetchedAt) / 60000)
    if (mins < 1) return 'just now'
    if (mins < 60) return `${mins}m ago`
    const hrs = Math.round(mins / 60)
    return `${hrs}h ago`
  })()

  const renderCalculator = () => (
    <>
      <div className="zk-section-intro card">
        <h3 className="zk-section-intro-title">Zakat Calculator</h3>
        <p className="zk-section-intro-text">
          This gives you a quick estimate. It doesn't replace properly checking your specific
          situation against the guidance in "Nisab & Rates" and "Zakatable Wealth" above,
          especially for jewelry, cryptocurrency, or business assets.
        </p>
      </div>

      <div className="zk-nisab-status card">
        {nisabLoading ? (
          <p className="zk-nisab-status-text">Fetching current nisab based on live silver price…</p>
        ) : nisabSource === 'live' ? (
          <p className="zk-nisab-status-text">
            <strong>Live nisab: {fmt(nisabValue)}</strong> based on today's silver spot price
            {nisabAgeLabel ? ` (updated ${nisabAgeLabel})` : ''}.
          </p>
        ) : nisabSource === 'fallback' ? (
          <p className="zk-nisab-status-text zk-nisab-status-text--warn">
            Using a fallback estimate ({fmt(nisabValue)}) — {nisabError ? 'live price data was unavailable.' : ''} This is a placeholder, not current market data.
          </p>
        ) : (
          <p className="zk-nisab-status-text">Preparing nisab estimate…</p>
        )}
        <button className="zk-nisab-refresh" onClick={() => loadNisab(currencyCode, { force: true })} disabled={nisabLoading}>
          <Icon name="refresh" /> Refresh
        </button>
      </div>

      <div className="zk-calc-card card">
        <label className="zk-calc-field">
          <span className="zk-calc-label">Currency</span>
          <select className="zk-calc-select" value={currencyCode} onChange={e => setCurrencyCode(e.target.value)}>
            {CURRENCIES.map(c => (
              <option key={c.code} value={c.code}>{c.symbol} — {c.label} ({c.code})</option>
            ))}
          </select>
        </label>

        <label className="zk-calc-field">
          <span className="zk-calc-label">Cash & bank savings ({currency.symbol})</span>
          <input type="number" min="0" className="zk-calc-input" value={cash} onChange={e => setCash(e.target.value)} placeholder="0" />
        </label>
        <label className="zk-calc-field">
          <span className="zk-calc-label">Gold value ({currency.symbol}, current market price)</span>
          <input type="number" min="0" className="zk-calc-input" value={gold} onChange={e => setGold(e.target.value)} placeholder="0" />
        </label>
        <label className="zk-calc-field">
          <span className="zk-calc-label">Silver value ({currency.symbol}, current market price)</span>
          <input type="number" min="0" className="zk-calc-input" value={silver} onChange={e => setSilver(e.target.value)} placeholder="0" />
        </label>
        <label className="zk-calc-field">
          <span className="zk-calc-label">Business / trade goods value ({currency.symbol})</span>
          <input type="number" min="0" className="zk-calc-input" value={business} onChange={e => setBusiness(e.target.value)} placeholder="0" />
        </label>
        <label className="zk-calc-field">
          <span className="zk-calc-label">Other zakatable assets ({currency.symbol}, shares, crypto, etc.)</span>
          <input type="number" min="0" className="zk-calc-input" value={otherAssets} onChange={e => setOtherAssets(e.target.value)} placeholder="0" />
        </label>
        <label className="zk-calc-field">
          <span className="zk-calc-label">Money owed to you ({currency.symbol}, expected to be repaid)</span>
          <input type="number" min="0" className="zk-calc-input" value={debtsOwedToYou} onChange={e => setDebtsOwedToYou(e.target.value)} placeholder="0" />
        </label>
        <label className="zk-calc-field">
          <span className="zk-calc-label">Debts you owe ({currency.symbol}, deductible)</span>
          <input type="number" min="0" className="zk-calc-input" value={debtsYouOwe} onChange={e => setDebtsYouOwe(e.target.value)} placeholder="0" />
        </label>

        <div className="zk-calc-actions">
          <button className="zk-calc-btn-secondary" onClick={resetCalculator}>Reset</button>
          <button className="zk-calc-btn" onClick={() => setShowResult(true)} disabled={nisabLoading || nisabValue == null}>
            {nisabLoading || nisabValue == null ? 'Loading nisab…' : 'Calculate'}
          </button>
        </div>
      </div>

      {showResult && nisabValue != null && (
        <div className={`zk-result-card card ${meetsNisab ? '' : 'zk-result-card--below'}`}>
          <p className="zk-result-label">Net zakatable wealth</p>
          <p className="zk-result-value">{fmt(netZakatable)}</p>

          {meetsNisab ? (
            <>
              <p className="zk-result-note">Above the {nisabSource === 'live' ? 'current' : 'estimated'} nisab threshold. Zakat is due on this amount if you've held it (or its equivalent) for a full lunar year.</p>
              <div className="zk-result-due">
                <span className="zk-result-due-label">Estimated zakat due (2.5%)</span>
                <span className="zk-result-due-value">{fmt(zakatDue)}</span>
              </div>
            </>
          ) : (
            <p className="zk-result-note">This is below the {nisabSource === 'live' ? 'current' : 'estimated'} nisab threshold ({fmt(nisabValue)}) — no zakat is due on this amount right now, based on what you entered.</p>
          )}

          <p className="zk-result-disclaimer">
            {nisabSource === 'live'
              ? `Nisab is based on today's silver spot price, converted to ${currency.label} — `
              : `The nisab figure used here is a placeholder estimate, not live market data — `}
            treat this whole calculation as a starting point, and confirm any genuinely uncertain
            assets (jewelry, crypto, business partnerships) against the content above or with a
            knowledgeable person before finalizing what you pay.
          </p>
        </div>
      )}
    </>
  )

  return (
    <div className="page-content zk-page">
      <h1 className="page-title">Everything Zakaat</h1>
      <p className="page-subtitle">الزَّكَاة — Purification of wealth, and what's owed</p>

      <div className="zk-tabs">
        <button className={`zk-tab ${tab === 'learn' ? 'zk-tab--active' : ''}`} onClick={() => { setTab('learn'); setActiveTopic(null) }}>
          Learn
        </button>
        <button className={`zk-tab ${tab === 'calculator' ? 'zk-tab--active' : ''}`} onClick={() => setTab('calculator')}>
          Calculator
        </button>
      </div>

      {tab === 'learn' ? renderLearn() : renderCalculator()}
    </div>
  )
}
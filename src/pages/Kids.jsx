import React, { useState } from 'react'
import { KIDS_CATEGORIES, getKidsCategory } from '../data/kidsContent.js'
import './Kids.css'

// Same icon-wrapper pattern as WomensFiqh's <Icon name="..." />.
const ICONS = {
  seerah: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h9a3 3 0 0 1 3 3v13H8a2 2 0 0 1-2-2V4z" />
      <path d="M6 4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2" />
    </svg>
  ),
  adhkar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  fiqh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M5 8l-3 6a4 4 0 0 0 6 0l-3-6zM19 8l-3 6a4 4 0 0 0 6 0l-3-6zM5 8h14M9 21h6" />
    </svg>
  ),
  hadeeth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  tawheed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.9 6.3 6.9.9-5 4.8 1.2 6.8L12 17.5l-6 3.3 1.2-6.8-5-4.8 6.9-.9z" />
    </svg>
  ),
}

const Icon = ({ name }) => <span className="kids-icon" aria-hidden="true">{ICONS[name]}</span>

export default function Kids({ user, onSignOut }) {
  const [activeCategory, setActiveCategory] = useState(null)

  const openCategory = (id) => setActiveCategory(id)
  const closeCategory = () => setActiveCategory(null)

  const firstName = user?.user_metadata?.full_name
    ? user.user_metadata.full_name.trim().split(/\s+/)[0]
    : null

  // ── Detail view: one category's items, rendered exactly the way
  // WomensFiqh renders entry.sections — a title+body card per entry,
  // just generalized from a fixed 4-key shape to however many items
  // a category has. Adhkar/hadeeth items carry a couple of extra
  // fields (Arabic text, source) layered into the same card rather
  // than a different card type. ──
  if (activeCategory) {
    const cat = getKidsCategory(activeCategory)
    if (!cat) { closeCategory(); return null }

    return (
      <div className="kids-page">
        <button className="kids-back" onClick={closeCategory}>← Back to Sual for Kids</button>

        <div className="kids-detail-header card" data-a11y-label={`${cat.title}. ${cat.subtitle}`}>
          <span className="kids-detail-icon"><Icon name={cat.icon} /></span>
          <div>
            <h2 className="kids-detail-title">{cat.title}</h2>
            <p className="kids-detail-arabic arabic">{cat.arabicTitle}</p>
          </div>
        </div>

        {cat.items.map((item, i) => (
          <div
            key={i}
            className="kids-section card"
            data-a11y-label={`${item.title}. ${item.text}${item.source ? `. Source: ${item.source}` : ''}`}
          >
            <h3 className="kids-section-title">
              <span className="kids-section-num">{i + 1}</span> {item.title}
            </h3>
            {item.arabic && <p className="kids-section-arabic arabic">{item.arabic}</p>}
            {item.transliteration && <p className="kids-section-translit">{item.transliteration}</p>}
            <p className="kids-section-body">{item.text}</p>
            {item.source && (
              <p className="kids-section-source">
                Source: {item.source}
                {item.verified === false && ' — not yet checked against a print edition'}
              </p>
            )}
          </div>
        ))}
      </div>
    )
  }

  // ── Landing: a hero card (matching Home's .hm-hero — navy
  // gradient, greeting, sign-out as a translucent pill button) plus
  // an icon-tile grid below it (matching Home's .hm-tiles — icon
  // centered top, label below, not a horizontal list row). The
  // per-category color still shows on each tile's icon circle. ──
  return (
    <div className="kids-page">
      <div className="kids-hero">
        <div className="kids-hero-top">
          <span className="kids-hero-eyebrow">Sual for Kids</span>
          <button className="kids-hero-signout" onClick={onSignOut}>
            Sign Out
          </button>
        </div>
        <p className="kids-hero-title">
          {firstName ? `Assalamu Alaikum, ${firstName}!` : 'Assalamu Alaikum!'}
        </p>
        <p className="kids-hero-sub">What would you like to learn today?</p>
      </div>

      <div className="kids-tiles">
        {KIDS_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className="kids-tile"
            onClick={() => openCategory(cat.id)}
            data-a11y-label={`${cat.title}. ${cat.subtitle}`}
          >
            <span className="kids-tile-icon"><Icon name={cat.icon} /></span>
            <span className="kids-tile-label">{cat.title}</span>
            <span className="kids-tile-arabic arabic">{cat.arabicTitle}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
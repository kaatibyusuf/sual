import React, { useState, useRef } from 'react'
import './WelcomeCarousel.css'

// Original geometric/object illustrations, drawn directly as SVG —
// deliberately no human figures anywhere, per direct instruction.
// Leans into Islamic geometric pattern art (the eight-pointed star,
// khatam) rather than generic stock-illustration figures, which also
// sidesteps any licensing question entirely since nothing here is
// sourced from an external library.
const ILLUSTRATIONS = {
  // Slide 1: an open book with rays of understanding rising from it,
  // bordered by a small eight-pointed star.
  book: (
    <svg viewBox="0 0 200 200" className="wc-illustration-svg">
      <circle cx="100" cy="100" r="92" fill="var(--wc-illus-bg)" />
      {/* Rays of light/understanding */}
      <g stroke="var(--wc-illus-accent)" strokeWidth="3" strokeLinecap="round" opacity="0.55">
        <line x1="100" y1="30" x2="100" y2="14" />
        <line x1="70" y1="38" x2="60" y2="25" />
        <line x1="130" y1="38" x2="140" y2="25" />
        <line x1="48" y1="58" x2="34" y2="50" />
        <line x1="152" y1="58" x2="166" y2="50" />
      </g>
      {/* Open book */}
      <path
        d="M100 70 C82 58 60 55 44 60 V128 C60 123 82 126 100 138 C118 126 140 123 156 128 V60 C140 55 118 58 100 70 Z"
        fill="var(--wc-illus-primary)"
      />
      <path d="M100 70 V138" stroke="var(--wc-illus-bg)" strokeWidth="2.5" />
      <path d="M52 68 C64 64 78 65 92 74" stroke="var(--wc-illus-bg)" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M52 84 C64 80 78 81 92 90" stroke="var(--wc-illus-bg)" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M52 100 C64 96 78 97 92 106" stroke="var(--wc-illus-bg)" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M148 68 C136 64 122 65 108 74" stroke="var(--wc-illus-bg)" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M148 84 C136 80 122 81 108 90" stroke="var(--wc-illus-bg)" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M148 100 C136 96 122 97 108 106" stroke="var(--wc-illus-bg)" strokeWidth="2" fill="none" opacity="0.6" />
      {/* Small eight-pointed star accent, bottom right */}
      <g transform="translate(150,155) scale(0.9)">
        <path d="M0,-14 L4,-4 14,0 4,4 0,14 -4,4 -14,0 -4,-4 Z" fill="var(--wc-illus-accent)" />
        <path d="M0,-14 L4,-4 14,0 4,4 0,14 -4,4 -14,0 -4,-4 Z" fill="var(--wc-illus-accent)" transform="rotate(45)" opacity="0.75" />
      </g>
    </svg>
  ),

  // Slide 2: a traditional lantern (fanous) with its flame, and a
  // crescent moon — matching the flame icon already used for Hifdh
  // elsewhere in the app.
  lantern: (
    <svg viewBox="0 0 200 200" className="wc-illustration-svg">
      <circle cx="100" cy="100" r="92" fill="var(--wc-illus-bg)" />
      {/* Crescent moon */}
      <path
        d="M148 55a22 22 0 1 0 0 30 27 27 0 0 1 0-30z"
        fill="var(--wc-illus-accent)"
        opacity="0.8"
      />
      {/* Lantern hanging loop and top */}
      <line x1="100" y1="35" x2="100" y2="48" stroke="var(--wc-illus-primary)" strokeWidth="3" strokeLinecap="round" />
      <path d="M88 48 h24 l-6 12 h-12 z" fill="var(--wc-illus-primary)" />
      {/* Lantern body */}
      <path
        d="M78 60 h44 v18 c10 8 10 60 0 68 h-44 c-10-8-10-60 0-68 z"
        fill="var(--wc-illus-primary)"
      />
      <rect x="82" y="78" width="36" height="52" rx="4" fill="var(--wc-illus-bg)" opacity="0.9" />
      {/* Flame glow inside */}
      <path
        d="M100 92c6 8 8 14 5 20-2 4-8 4-10 0-3-6-1-12 5-20z"
        fill="var(--wc-illus-accent)"
      />
      {/* Lantern base */}
      <path d="M84 128 h32 l-5 10 h-22 z" fill="var(--wc-illus-primary)" />
      <line x1="100" y1="138" x2="100" y2="150" stroke="var(--wc-illus-primary)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),

  // Slide 3: a cluster of interlocking eight-pointed stars, several
  // individual shapes forming one unified pattern — togetherness
  // expressed geometrically rather than through figures.
  starCluster: (
    <svg viewBox="0 0 200 200" className="wc-illustration-svg">
      <circle cx="100" cy="100" r="92" fill="var(--wc-illus-bg)" />
      {(() => {
        const star = (cx, cy, scale, fill, opacity) => (
          <g key={`${cx}-${cy}`} transform={`translate(${cx},${cy}) scale(${scale})`}>
            <path d="M0,-18 L5,-5 18,0 5,5 0,18 -5,5 -18,0 -5,-5 Z" fill={fill} opacity={opacity} />
            <path d="M0,-18 L5,-5 18,0 5,5 0,18 -5,5 -18,0 -5,-5 Z" fill={fill} opacity={opacity} transform="rotate(45)" />
          </g>
        )
        return (
          <>
            {star(72, 78, 1.1, 'var(--wc-illus-primary)', 1)}
            {star(128, 78, 1.1, 'var(--wc-illus-primary)', 1)}
            {star(100, 122, 1.3, 'var(--wc-illus-accent)', 1)}
            {star(60, 128, 0.7, 'var(--wc-illus-accent)', 0.6)}
            {star(140, 128, 0.7, 'var(--wc-illus-accent)', 0.6)}
          </>
        )
      })()}
    </svg>
  ),
}

const SLIDES = [
  {
    illustration: 'book',
    title: 'Ask, and understand',
    body: 'Every question answered with real evidence, across Fiqh, Seerah, Arabiyyah, and more.',
  },
  {
    illustration: 'lantern',
    title: "Guard what you've memorized",
    body: "The Hifdh Simulator keeps your Qur'an and hadith memorization strong with nine different review drills.",
  },
  {
    illustration: 'starCluster',
    title: 'Learn together',
    body: 'Join a growing community in Spaces — ask scholars, find an accountability partner, and grow together.',
  },
]

const SWIPE_THRESHOLD = 50 // px — matches typical native carousel swipe sensitivity

export default function WelcomeCarousel({ onDone }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)
  const isLast = index === SLIDES.length - 1
  const slide = SLIDES[index]

  const goNext = () => {
    if (isLast) onDone()
    else setIndex(i => i + 1)
  }

  const goPrev = () => {
    if (index > 0) setIndex(i => i - 1)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta <= -SWIPE_THRESHOLD) goNext()
    else if (delta >= SWIPE_THRESHOLD) goPrev()
    touchStartX.current = null
  }

  return (
    <div className="wc-page" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="wc-hero">
        <button className="wc-skip" onClick={onDone} data-a11y-label="Skip introduction">
          Skip <span aria-hidden="true">→</span>
        </button>

        <div className="wc-illustration-frame">
          {ILLUSTRATIONS[slide.illustration]}
        </div>
      </div>

      <div className="wc-sheet">
        <div className="wc-dots" role="tablist" aria-label="Onboarding progress">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
              className={`wc-dot ${i === index ? 'wc-dot--active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <h1 className="wc-title">{slide.title}</h1>
        <p className="wc-body">{slide.body}</p>

        <button className="wc-next" onClick={goNext}>
          {isLast ? 'Get Started' : 'Next'}
        </button>
      </div>
    </div>
  )
}
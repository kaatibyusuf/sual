import React, { useState, useMemo } from 'react'
import { FLASHCARD_DECKS } from '../data/flashcards.js'
import {
  storageKey,
  loadProgress,
  saveProgress,
  isDue,
  advanceBox,
} from '../lib/spacedRepetition.js'
import './Flashcards.css'

const STORAGE_PREFIX = 'sual-flashcards'

export default function Flashcards() {
  const [selectedDeck, setSelectedDeck] = useState(null)
  const [mode, setMode] = useState(null)          // 'browse' | 'review'
  const [sessionCards, setSessionCards] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [completed, setCompleted] = useState([])
  const [progress, setProgress] = useState({})
  const [reviewedCount, setReviewedCount] = useState(0)
  const [reviewFinished, setReviewFinished] = useState(false)

  // Recomputed each render on the deck list so due counts stay fresh
  // when coming back from a session.
  const dueCounts = useMemo(() => {
    const counts = {}
    FLASHCARD_DECKS.forEach(deck => {
      const p = loadProgress(storageKey(STORAGE_PREFIX, deck.id))
      counts[deck.id] = deck.cards.filter(c => isDue(p[c.id])).length
    })
    return counts
  }, [selectedDeck]) // recompute whenever we return to the deck list

  const startDeck = (deck, chosenMode) => {
    const key = storageKey(STORAGE_PREFIX, deck.id)
    const p = loadProgress(key)
    setProgress(p)
    setSelectedDeck(deck)
    setMode(chosenMode)
    setSessionCards(chosenMode === 'review' ? deck.cards.filter(c => isDue(p[c.id])) : deck.cards)
    setCurrentIdx(0)
    setFlipped(false)
    setCompleted([])
    setReviewedCount(0)
    setReviewFinished(false)
  }

  const backToDecks = () => {
    setSelectedDeck(null)
    setMode(null)
    setSessionCards([])
  }

  // ---- Browse mode controls (unchanged behavior) ----
  const next = () => {
    if (currentIdx + 1 >= sessionCards.length) {
      backToDecks()
      return
    }
    setCompleted(prev => [...prev, currentIdx])
    setCurrentIdx(i => i + 1)
    setFlipped(false)
  }

  const prev = () => {
    if (currentIdx === 0) return
    setCurrentIdx(i => i - 1)
    setFlipped(false)
  }

  const restart = () => {
    setCurrentIdx(0)
    setFlipped(false)
    setCompleted([])
  }

  // ---- Review mode: mark the card, advance its Leitner box, move on ----
  const markCard = (correct) => {
    const card = sessionCards[currentIdx]
    const key = storageKey(STORAGE_PREFIX, selectedDeck.id)
    const updated = advanceBox(progress, card.id, correct)
    saveProgress(key, updated)
    setProgress(updated)
    setReviewedCount(c => c + 1)

    if (currentIdx + 1 >= sessionCards.length) {
      setReviewFinished(true)
    } else {
      setCurrentIdx(i => i + 1)
      setFlipped(false)
    }
  }

  // ---- DECK SELECTION ----
  if (!selectedDeck) {
    return (
      <div className="page-content flashcards-page">
        <h1 className="page-title">Flashcards</h1>
        <p className="page-subtitle">بِطَاقَات — Select a deck and drill your Islamic vocabulary</p>

        <div className="fc-decks-grid">
          {FLASHCARD_DECKS.map(deck => {
            const due = dueCounts[deck.id] || 0
            return (
              <div key={deck.id} className="fc-deck-card card">
                <span className="fc-deck-icon">{deck.icon}</span>
                <div className="fc-deck-info">
                  <h3 className="fc-deck-name">{deck.name}</h3>
                  <p className="fc-deck-arabic arabic">{deck.arabicName}</p>
                  <p className="fc-deck-count">{deck.cards.length} cards · {due} due</p>
                </div>
                <div className="fc-deck-actions">
                  <button
                    className="btn btn-ghost fc-deck-action"
                    onClick={() => startDeck(deck, 'browse')}
                    data-a11y-label={`Browse all ${deck.cards.length} cards in ${deck.name}`}
                  >
                    Browse All
                  </button>
                  <button
                    className="btn btn-primary fc-deck-action"
                    onClick={() => startDeck(deck, 'review')}
                    disabled={due === 0}
                    data-a11y-label={due > 0 ? `Review ${due} due cards in ${deck.name}` : `Nothing due in ${deck.name}`}
                  >
                    Review Due{due > 0 ? ` (${due})` : ''}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // ---- REVIEW SESSION FINISHED ----
  if (mode === 'review' && reviewFinished) {
    return (
      <div className="page-content flashcards-page">
        <h1 className="page-title">{selectedDeck.name} Review</h1>
        <div className="fc-done card" data-a11y-label={`Review complete. ${reviewedCount} card${reviewedCount !== 1 ? 's' : ''} reviewed.`}>
          <div className="fc-done-icon">📚</div>
          <h2 className="fc-done-title">Review complete</h2>
          <p className="fc-done-score">{reviewedCount} card{reviewedCount !== 1 ? 's' : ''} reviewed</p>
          <p className="fc-done-note">
            Cards you marked "Still learning" will come back sooner. Strong cards return after a longer gap.
          </p>
          <button className="btn btn-primary" onClick={backToDecks}>Back to Decks</button>
        </div>
      </div>
    )
  }

  // ---- Nothing due when Review was somehow opened with zero cards ----
  if (mode === 'review' && sessionCards.length === 0) {
    return (
      <div className="page-content flashcards-page">
        <button className="discipline-back" onClick={backToDecks}>← Back to decks</button>
        <div className="fc-done card">
          <p>Nothing due in {selectedDeck.name} right now. Come back later, or Browse All to study ahead of schedule.</p>
        </div>
      </div>
    )
  }

  // ---- ACTIVE CARD (both modes share the flip card itself) ----
  const card = sessionCards[currentIdx]
  const progressPct = (currentIdx / sessionCards.length) * 100
  const isLast = currentIdx + 1 >= sessionCards.length

  // The flip card is the core interaction on this page and isn't a
  // native button, so — same as everywhere else — it's silent to
  // touch-explore without an explicit label. This one changes with
  // `flipped`, so a first tap always announces whichever face is
  // currently showing, and a second tap on the same face flips it
  // (the real onClick), at which point the NEXT first tap announces
  // the new face. That double-tap-to-flip rhythm mirrors exactly how
  // this card already works visually for a sighted user tapping it.
  const cardSpokenLabel = flipped
    ? `Definition: ${card.back}`
    : `Term: ${card.frontTranslit}. Tap again to reveal the definition.`

  return (
    <div className="page-content flashcards-page">
      {/* Header */}
      <div className="fc-header">
        <button className="discipline-back" onClick={backToDecks}>
          ← Back to decks
        </button>
        <div className="fc-header-info">
          <span className="fc-deck-label">
            {selectedDeck.icon} {selectedDeck.name} {mode === 'review' ? '· Review' : '· Browse'}
          </span>
          <span className="badge badge-regal">
            {currentIdx + 1} / {sessionCards.length}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="quiz-progress-bar" style={{ marginBottom: '28px' }}>
        <div className="quiz-progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Card */}
      <div
        className={`fc-card-wrapper ${flipped ? 'fc-card-wrapper--flipped' : ''}`}
        onClick={() => setFlipped(f => !f)}
        data-a11y-label={cardSpokenLabel}
      >
        <div className="fc-card">
          {/* Front */}
          <div className="fc-card-face fc-card-front">
            <p className="fc-card-hint">Term</p>
            <div className="fc-card-arabic">{card.front}</div>
            <div className="fc-card-translit">{card.frontTranslit}</div>
            <p className="fc-card-tap">Tap to reveal definition →</p>
          </div>
          {/* Back */}
          <div className="fc-card-face fc-card-back">
            <p className="fc-card-hint">Definition</p>
            <div className="fc-card-arabic fc-card-arabic--sm">{card.front}</div>
            <div className="fc-card-definition">{card.back}</div>
          </div>
        </div>
      </div>

      {/* Controls: review mode asks for a correctness judgment once
          flipped; browse mode keeps the original prev/next/restart. */}
      {mode === 'review' ? (
        flipped ? (
          <div className="fc-review-controls">
            <button className="btn btn-ghost fc-review-btn" onClick={() => markCard(false)}>
              Still learning
            </button>
            <button className="btn btn-primary fc-review-btn" onClick={() => markCard(true)}>
              Got it
            </button>
          </div>
        ) : (
          <p className="fc-review-hint">Tap the card, then judge yourself honestly.</p>
        )
      ) : (
        <div className="fc-controls">
          <button className="btn btn-ghost" onClick={prev} disabled={currentIdx === 0}>
            ← Prev
          </button>
          <button className="btn btn-ghost" onClick={restart}>
            ↺ Restart
          </button>
          <button className="btn btn-primary" onClick={next}>
            {isLast ? 'Finish ✓' : 'Next →'}
          </button>
        </div>
      )}

      {/* Completed dots (browse mode only — review mode has no notion
          of "completed vs remaining" beyond the progress bar) */}
      {mode === 'browse' && (
        <div className="fc-dots">
          {sessionCards.map((_, i) => (
            <span
              key={i}
              className={`fc-dot ${i === currentIdx ? 'fc-dot--active' : ''} ${completed.includes(i) ? 'fc-dot--done' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
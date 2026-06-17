import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FLASHCARD_DECKS } from '../data/flashcards.js'
import './Flashcards.css'

export default function Flashcards() {
  const [selectedDeck, setSelectedDeck] = useState(null)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [completed, setCompleted] = useState([])

  const startDeck = (deck) => {
    setSelectedDeck(deck)
    setCurrentIdx(0)
    setFlipped(false)
    setCompleted([])
  }

  const next = () => {
    if (currentIdx + 1 >= selectedDeck.cards.length) {
      setSelectedDeck(null)
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

  // ---- DECK SELECTION ----
  if (!selectedDeck) {
    return (
      <div className="page-content flashcards-page">
        <h1 className="page-title">Flashcards</h1>
        <p className="page-subtitle">بِطَاقَات — Select a deck and drill your Islamic vocabulary</p>

        <div className="fc-decks-grid">
          {FLASHCARD_DECKS.map(deck => (
            <button
              key={deck.id}
              className="fc-deck-card card"
              onClick={() => startDeck(deck)}
            >
              <span className="fc-deck-icon">{deck.icon}</span>
              <div className="fc-deck-info">
                <h3 className="fc-deck-name">{deck.name}</h3>
                <p className="fc-deck-arabic arabic">{deck.arabicName}</p>
                <p className="fc-deck-count">{deck.cards.length} cards</p>
              </div>
              <span className="fc-deck-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ---- ACTIVE DECK ----
  const card = selectedDeck.cards[currentIdx]
  const progress = ((currentIdx) / selectedDeck.cards.length) * 100
  const isLast = currentIdx + 1 >= selectedDeck.cards.length

  return (
    <div className="page-content flashcards-page">
      {/* Header */}
      <div className="fc-header">
        <button className="discipline-back" onClick={() => setSelectedDeck(null)}>
          ← Back to decks
        </button>
        <div className="fc-header-info">
          <span className="fc-deck-label">{selectedDeck.icon} {selectedDeck.name}</span>
          <span className="badge badge-regal">
            {currentIdx + 1} / {selectedDeck.cards.length}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="quiz-progress-bar" style={{ marginBottom: '28px' }}>
        <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Card */}
      <div
        className={`fc-card-wrapper ${flipped ? 'fc-card-wrapper--flipped' : ''}`}
        onClick={() => setFlipped(f => !f)}
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

      {/* Controls */}
      <div className="fc-controls">
        <button
          className="btn btn-ghost"
          onClick={prev}
          disabled={currentIdx === 0}
        >
          ← Prev
        </button>

        <button className="btn btn-ghost" onClick={restart}>
          ↺ Restart
        </button>

        <button className="btn btn-primary" onClick={next}>
          {isLast ? 'Finish ✓' : 'Next →'}
        </button>
      </div>

      {/* Completed dots */}
      <div className="fc-dots">
        {selectedDeck.cards.map((_, i) => (
          <span
            key={i}
            className={`fc-dot ${i === currentIdx ? 'fc-dot--active' : ''} ${completed.includes(i) ? 'fc-dot--done' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
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
  arabiyyah: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
    </svg>
  ),
  prophets: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3" />
      <circle cx="16" cy="10" r="3" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <path d="M13 20c0-2 1.5-4 4-4s5 2 5 4" />
    </svg>
  ),
  wives: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M12 4a4 4 0 0 1 0 8" />
      <path d="M8 8a4 4 0 0 1 8 0" />
      <path d="M12 12v9" />
      <path d="M8 17h8" />
    </svg>
  ),
  surahs: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1z" />
      <line x1="12" y1="6" x2="12" y2="19" />
    </svg>
  ),
}

const Icon = ({ name }) => <span className="kids-icon" aria-hidden="true">{ICONS[name]}</span>

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Builds a fresh set of multiple-choice questions from a category's
// own items — no separate question data needed. Two shapes:
// Arabiyyah ("tap the right meaning": prompt is the Arabic word,
// options are meanings) and every other category ("which one is
// this": prompt is a snippet of the item's own text, options are
// titles from the same category) — the same generic "which X is
// this" pattern the adult Hifdh Simulator already uses, reusing
// fields every item already has rather than needing dedicated
// quiz-question data written per category.
function buildQuiz(cat) {
  const isArabiyyah = cat.type === 'flashcards'
  const pool = cat.items

  return shuffle(pool).map(item => {
    const correctText = isArabiyyah ? item.meaning : item.title
    const distractors = shuffle(pool.filter(p => p !== item))
      .slice(0, 3)
      .map(d => (isArabiyyah ? d.meaning : d.title))
    const options = shuffle([
      { text: correctText, correct: true },
      ...distractors.map(text => ({ text, correct: false })),
    ])
    return {
      prompt: isArabiyyah ? item.arabic : item.text,
      promptTranslit: isArabiyyah ? item.transliteration : null,
      options,
    }
  })
}

// One card at a time, tap to flip — matches the existing Flashcards
// page's double-tap-to-flip interaction, simplified for a younger
// audience: no deck browsing, just Previous/Next through a fixed
// list plus a progress count.
function KidsFlashcards({ cards, cardIndex, setCardIndex, flipped, setFlipped }) {
  const card = cards[cardIndex]

  const goPrev = () => {
    setFlipped(false)
    setCardIndex(i => Math.max(0, i - 1))
  }
  const goNext = () => {
    setFlipped(false)
    setCardIndex(i => Math.min(cards.length - 1, i + 1))
  }

  return (
    <div className="kids-flashcards">
      <p className="kids-flashcard-progress">{cardIndex + 1} / {cards.length}</p>

      <button
        className={`kids-flashcard ${flipped ? 'kids-flashcard--flipped' : ''}`}
        onClick={() => setFlipped(f => !f)}
        data-a11y-label={
          flipped
            ? `${card.meaning}. Tap again to see the Arabic.`
            : `${card.arabic}, ${card.transliteration}. Tap to reveal the meaning.`
        }
      >
        {!flipped ? (
          <>
            {card.image && (
              <img className="kids-flashcard-image" src={card.image} alt={card.meaning} loading="lazy" />
            )}
            <span className="kids-flashcard-arabic arabic">{card.arabic}</span>
            <span className="kids-flashcard-translit">{card.transliteration}</span>
            <span className="kids-flashcard-hint">Tap to reveal meaning</span>
          </>
        ) : (
          <>
            <span className="kids-flashcard-meaning">{card.meaning}</span>
            <span className="kids-flashcard-hint">Tap to see the Arabic again</span>
          </>
        )}
      </button>

      <div className="kids-flashcard-nav">
        <button className="kids-flashcard-navbtn" onClick={goPrev} disabled={cardIndex === 0}>
          ← Previous
        </button>
        <button className="kids-flashcard-navbtn" onClick={goNext} disabled={cardIndex === cards.length - 1}>
          Next →
        </button>
      </div>
    </div>
  )
}

// One question at a time. Tapping an option locks it in and reveals
// correct/wrong (reuses the app's existing established pass/fail
// green/red — the same colors the adult Quiz and Hifdh Simulator
// already use for this exact purpose, not a new color introduced
// here). A results screen with a "Play Again" (fresh shuffle) caps
// it off.
function KidsQuiz({ cat, onExit }) {
  const [questions, setQuestions] = useState(() => buildQuiz(cat))
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = questions[qIndex]

  const pick = (i) => {
    if (selected !== null) return
    setSelected(i)
    if (questions[qIndex].options[i].correct) setCorrectCount(c => c + 1)
  }

  const next = () => {
    if (qIndex + 1 < questions.length) {
      setQIndex(qIndex + 1)
      setSelected(null)
    } else {
      setFinished(true)
    }
  }

  const playAgain = () => {
    setQuestions(buildQuiz(cat))
    setQIndex(0)
    setSelected(null)
    setCorrectCount(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="kids-quiz-done">
        <p className="kids-quiz-done-score">{correctCount} / {questions.length}</p>
        <p className="kids-quiz-done-text">
          {correctCount === questions.length ? 'Perfect! Ma sha Allah!' : 'Good try! Play again to do even better.'}
        </p>
        <div className="kids-quiz-done-actions">
          <button className="kids-flashcard-navbtn" onClick={onExit}>Back to Lessons</button>
          <button className="kids-quiz-primary" onClick={playAgain}>Play Again</button>
        </div>
      </div>
    )
  }

  return (
    <div className="kids-quiz">
      <p className="kids-flashcard-progress">{qIndex + 1} / {questions.length}</p>

      <div className="kids-quiz-prompt">
        <p className="kids-quiz-prompt-arabic arabic">{q.prompt}</p>
        {q.promptTranslit && <p className="kids-quiz-prompt-translit">{q.promptTranslit}</p>}
      </div>

      <div className="kids-quiz-options">
        {q.options.map((opt, i) => {
          let cls = 'kids-quiz-option'
          if (selected !== null) {
            if (opt.correct) cls += ' kids-quiz-option--correct'
            else if (i === selected) cls += ' kids-quiz-option--wrong'
            else cls += ' kids-quiz-option--faded'
          }
          return (
            <button key={i} className={cls} onClick={() => pick(i)} disabled={selected !== null}>
              {opt.text}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <button className="kids-quiz-primary" onClick={next}>
          {qIndex + 1 < questions.length ? 'Next →' : 'See My Score'}
        </button>
      )}
    </div>
  )
}

export default function Kids({ user, onSignOut }) {
  const [activeCategory, setActiveCategory] = useState(null)
  const [cardIndex, setCardIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [quizzing, setQuizzing] = useState(false)

  const openCategory = (id) => {
    setActiveCategory(id)
    setCardIndex(0)
    setFlipped(false)
    setQuizzing(false)
  }
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

        {!quizzing && (
          <button className="kids-quiz-toggle" onClick={() => setQuizzing(true)}>
            🎯 Quiz Me
          </button>
        )}

        {quizzing ? (
          <KidsQuiz cat={cat} onExit={() => setQuizzing(false)} />
        ) : cat.type === 'flashcards' ? (
          <KidsFlashcards
            cards={cat.items}
            cardIndex={cardIndex}
            setCardIndex={setCardIndex}
            flipped={flipped}
            setFlipped={setFlipped}
          />
        ) : (
          cat.items.map((item, i) => (
            <div
              key={i}
              className="kids-section card"
              data-a11y-label={`${item.title}. ${item.text}${item.source ? `. Source: ${item.source}` : ''}`}
            >
              <h3 className="kids-section-title">
                <span className="kids-section-num">{i + 1}</span> {item.title}
              </h3>
              {item.image && (
                <img className="kids-section-image" src={item.image} alt={item.title} loading="lazy" />
              )}
              {item.arabic && <p className="kids-section-arabic arabic">{item.arabic}</p>}
              {item.transliteration && <p className="kids-section-translit">{item.transliteration}</p>}
              <p className="kids-section-body">{item.text}</p>
              {item.source && (
                <p className="kids-section-source">
                  Source: {item.source}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    )
  }

  // ── Landing: a hero card (matching Home's .hm-hero — navy
  // gradient, greeting, sign-out as a translucent pill button) plus
  // an icon-tile grid below it (matching Home's .hm-tiles — icon
  // centered top, label below, not a horizontal list row). ──
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
            <span className="kids-tile-icon">
              {cat.image ? (
                <img className="kids-tile-image" src={cat.image} alt="" loading="lazy" />
              ) : (
                <Icon name={cat.icon} />
              )}
            </span>
            <span className="kids-tile-label">{cat.title}</span>
            <span className="kids-tile-arabic arabic">{cat.arabicTitle}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
import React, { useState, useEffect, useMemo } from 'react'
import { NAWAWI_HADITH, NAWAWI_TOTAL } from '../data/hifdh_nawawi.js'
import './Hifdh.css'

// ── Spaced repetition (Leitner boxes, stored in localStorage) ──
// box 0 = new/failed (due now), 1 = 1 day, 2 = 3 days, 3 = 7 days, 4 = 14 days
const BOX_INTERVALS_DAYS = [0, 1, 3, 7, 14]
const STORAGE_KEY = 'sual-hifdh-nawawi'

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

function isDue(entry) {
  if (!entry) return true // never reviewed
  return new Date(entry.due) <= new Date()
}

function nextDue(box) {
  const d = new Date()
  d.setDate(d.getDate() + BOX_INTERVALS_DAYS[box])
  return d.toISOString()
}

// ── Helpers ─────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function words(text) {
  return text.split(/\s+/).filter(Boolean)
}

// ── Question generators ─────────────────────────────────────────
// Each returns { type, hadithNum, prompt, arabicPrompt, options: [{text, correct}] }

// Type 1: fill the blank — one word removed, distractors from other hadith
function makeFillBlank(hadith, pool) {
  const w = words(hadith.arabic)
  const candidates = w
    .map((word, i) => ({ word, i }))
    .filter(({ word, i }) => i > 0 && word.length >= 4)
  if (candidates.length === 0) return null
  const target = candidates[Math.floor(Math.random() * candidates.length)]

  const blanked = w.map((word, i) => (i === target.i ? '______' : word)).join(' ')

  const distractorWords = shuffle(
    pool
      .filter(h => h.num !== hadith.num)
      .flatMap(h => words(h.arabic))
      .filter(word => word.length >= 4 && word !== target.word)
  ).slice(0, 3)

  if (distractorWords.length < 3) return null

  return {
    type: 'blank',
    hadithNum: hadith.num,
    prompt: 'Which word completes this hadith?',
    arabicPrompt: blanked,
    options: shuffle([
      { text: target.word, correct: true },
      ...distractorWords.map(word => ({ text: word, correct: false })),
    ]),
  }
}

// Type 2: what comes next — first half shown, pick the true continuation
function makeContinuation(hadith, pool) {
  const w = words(hadith.arabic)
  if (w.length < 10) return null
  const split = Math.floor(w.length / 2)
  const firstHalf = w.slice(0, split).join(' ')
  const continuation = w.slice(split, split + 5).join(' ') + '...'

  const distractors = shuffle(
    pool.filter(h => h.num !== hadith.num && words(h.arabic).length >= 10)
  )
    .slice(0, 3)
    .map(h => {
      const hw = words(h.arabic)
      const s = Math.floor(hw.length / 2)
      return { text: hw.slice(s, s + 5).join(' ') + '...', correct: false }
    })

  if (distractors.length < 3) return null

  return {
    type: 'continue',
    hadithNum: hadith.num,
    prompt: 'How does this hadith continue?',
    arabicPrompt: firstHalf + ' ...',
    options: shuffle([{ text: continuation, correct: true }, ...distractors]),
  }
}

// Type 3: which number — locate the hadith in the collection
function makeWhichNumber(hadith) {
  const wrongNums = shuffle(
    Array.from({ length: NAWAWI_TOTAL }, (_, i) => i + 1).filter(n => n !== hadith.num)
  ).slice(0, 3)

  return {
    type: 'number',
    hadithNum: hadith.num,
    prompt: 'Which hadith of the Arba\'in is this?',
    arabicPrompt: hadith.arabic,
    options: shuffle([
      { text: `Hadith ${hadith.num}`, correct: true },
      ...wrongNums.map(n => ({ text: `Hadith ${n}`, correct: false })),
    ]),
  }
}

function buildSession(dueHadith, pool) {
  const questions = []
  dueHadith.forEach(h => {
    const makers = shuffle([
      () => makeFillBlank(h, pool),
      () => makeContinuation(h, pool),
      () => makeWhichNumber(h),
    ])
    // two question types per due hadith
    let added = 0
    for (const make of makers) {
      if (added >= 2) break
      const q = make()
      if (q) { questions.push(q); added++ }
    }
  })
  return shuffle(questions)
}

// ── Component ───────────────────────────────────────────────────
export default function Hifdh() {
  const [progress, setProgress] = useState(loadProgress)
  const [session, setSession] = useState(null)   // array of questions
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState(null) // option index picked
  const [results, setResults] = useState({})     // hadithNum -> all-correct boolean
  const [finished, setFinished] = useState(false)

  const dueHadith = useMemo(
    () => NAWAWI_HADITH.filter(h => isDue(progress[h.num])),
    [progress]
  )

  const startSession = () => {
    const due = shuffle(dueHadith).slice(0, 6)
    const qs = buildSession(due, NAWAWI_HADITH)
    if (qs.length === 0) return
    setSession(qs)
    setQIndex(0)
    setSelected(null)
    setResults({})
    setFinished(false)
  }

  const currentQ = session ? session[qIndex] : null

  const pick = (optionIndex) => {
    if (selected !== null) return
    setSelected(optionIndex)
    const correct = currentQ.options[optionIndex].correct
    setResults(prev => ({
      ...prev,
      [currentQ.hadithNum]: (prev[currentQ.hadithNum] ?? true) && correct,
    }))
  }

  const next = () => {
    if (qIndex + 1 < session.length) {
      setQIndex(qIndex + 1)
      setSelected(null)
    } else {
      // Session over: move boxes and save
      const updated = { ...progress }
      Object.entries(results).forEach(([numStr, allCorrect]) => {
        const num = Number(numStr)
        const entry = updated[num] || { box: 0 }
        const box = allCorrect
          ? Math.min(entry.box + 1, BOX_INTERVALS_DAYS.length - 1)
          : Math.max(entry.box - 1, 0)
        updated[num] = { box, due: nextDue(box) }
      })
      saveProgress(updated)
      setProgress(updated)
      setFinished(true)
    }
  }

  const resetAll = () => {
    if (!window.confirm('Reset all hifdh progress? This cannot be undone.')) return
    localStorage.removeItem(STORAGE_KEY)
    setProgress({})
    setSession(null)
    setFinished(false)
  }

  const strengthOf = (num) => {
    const entry = progress[num]
    if (!entry) return 'new'
    if (entry.box >= 3) return 'strong'
    if (entry.box >= 1) return 'building'
    return 'weak'
  }

  const sessionScore = session
    ? Object.values(results).filter(Boolean).length + ' / ' + Object.keys(results).length
    : null

  // ── Session finished screen ──
  if (session && finished) {
    const strong = Object.values(results).filter(Boolean).length
    const total = Object.keys(results).length
    return (
      <div className="page-content hifdh-page">
        <h1 className="page-title">Hifdh Review</h1>
        <div className="hifdh-done card">
          <div className="hifdh-done-icon">{strong === total ? '🌟' : '📚'}</div>
          <h2 className="hifdh-done-title">
            {strong === total ? 'Ma shaa Allah — perfect review' : 'Review complete'}
          </h2>
          <p className="hifdh-done-score">{strong} of {total} hadith held firm</p>
          <p className="hifdh-done-note">
            {strong === total
              ? 'Strong hadith return after a longer gap. Keep the streak.'
              : 'Weak hadith will return sooner. Repetition is the whole secret of hifdh.'}
          </p>
          <div className="hifdh-done-actions">
            <button className="hifdh-btn hifdh-btn--primary" onClick={() => setSession(null)}>
              Back to Overview
            </button>
            {dueHadith.length > 0 && (
              <button className="hifdh-btn" onClick={startSession}>
                Review Again
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ── Active question screen ──
  if (session && currentQ) {
    return (
      <div className="page-content hifdh-page">
        <div className="hifdh-session-top">
          <button className="hifdh-quit" onClick={() => setSession(null)}>✕ End session</button>
          <span className="hifdh-progress-text">{qIndex + 1} / {session.length}</span>
        </div>
        <div className="hifdh-progress-bar">
          <div className="hifdh-progress-fill" style={{ width: `${((qIndex + 1) / session.length) * 100}%` }} />
        </div>

        <div className="hifdh-question card">
          <p className="hifdh-question-prompt">{currentQ.prompt}</p>
          <p className="hifdh-question-arabic arabic">{currentQ.arabicPrompt}</p>
        </div>

        <div className="hifdh-options">
          {currentQ.options.map((opt, i) => {
            let cls = 'hifdh-option'
            if (selected !== null) {
              if (opt.correct) cls += ' hifdh-option--correct'
              else if (i === selected) cls += ' hifdh-option--wrong'
              else cls += ' hifdh-option--faded'
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => pick(i)}
                disabled={selected !== null}
              >
                <span className={currentQ.type === 'number' ? '' : 'arabic'}>{opt.text}</span>
              </button>
            )
          })}
        </div>

        {selected !== null && (
          <button className="hifdh-btn hifdh-btn--primary hifdh-next" onClick={next}>
            {qIndex + 1 < session.length ? 'Next →' : 'Finish Review'}
          </button>
        )}
      </div>
    )
  }

  // ── Overview screen ──
  return (
    <div className="page-content hifdh-page">
      <h1 className="page-title">Hifdh Simulator</h1>
      <p className="page-subtitle">مُحَاكِي الحِفْظ — Guard what you have memorized of the Arba'in An-Nawawiyyah</p>

      <div className="hifdh-stats">
        <div className="hifdh-stat card">
          <span className="hifdh-stat-value">{NAWAWI_HADITH.length}</span>
          <span className="hifdh-stat-label">Hadith loaded</span>
        </div>
        <div className="hifdh-stat card">
          <span className="hifdh-stat-value" style={{ color: dueHadith.length > 0 ? '#e65100' : '#2e7d32' }}>
            {dueHadith.length}
          </span>
          <span className="hifdh-stat-label">Due for review</span>
        </div>
        <div className="hifdh-stat card">
          <span className="hifdh-stat-value" style={{ color: '#2e7d32' }}>
            {NAWAWI_HADITH.filter(h => strengthOf(h.num) === 'strong').length}
          </span>
          <span className="hifdh-stat-label">Strong</span>
        </div>
      </div>

      {dueHadith.length > 0 ? (
        <button className="hifdh-btn hifdh-btn--primary hifdh-start" onClick={startSession}>
          Start Review — {Math.min(dueHadith.length, 6)} hadith →
        </button>
      ) : (
        <div className="hifdh-alldone card">
          <p>Nothing due right now. Every reviewed hadith is resting until its next appearance, in shaa Allah.</p>
        </div>
      )}

      <h2 className="hifdh-section-title">Your Memorization Map</h2>
      <p className="hifdh-legend">
        <span><span className="hifdh-dot hifdh-dot--strong" /> Strong</span>
        <span><span className="hifdh-dot hifdh-dot--building" /> Building</span>
        <span><span className="hifdh-dot hifdh-dot--weak" /> Weak</span>
        <span><span className="hifdh-dot hifdh-dot--new" /> Not yet reviewed</span>
      </p>
      <div className="hifdh-map">
        {NAWAWI_HADITH.map(h => (
          <div key={h.num} className={`hifdh-map-cell hifdh-map-cell--${strengthOf(h.num)}`} title={`Hadith ${h.num} — ${h.narrator}`}>
            {h.num}
          </div>
        ))}
        {Array.from({ length: NAWAWI_TOTAL - NAWAWI_HADITH.length }, (_, i) => (
          <div key={`soon-${i}`} className="hifdh-map-cell hifdh-map-cell--locked" title="Coming soon">
            {NAWAWI_HADITH.length + i + 1}
          </div>
        ))}
      </div>
      <p className="hifdh-coming">Hadith 11–42 are being prepared. Review deepens as the collection grows.</p>

      <button className="hifdh-reset" onClick={resetAll}>Reset all progress</button>
    </div>
  )
}
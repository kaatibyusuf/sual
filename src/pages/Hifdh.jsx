import React, { useState, useEffect, useMemo } from 'react'
import { COLLECTIONS } from '../data/hifdh_collections.js'
import './Hifdh.css'

// ── Spaced repetition (Leitner boxes, per collection, in localStorage) ──
const BOX_INTERVALS_DAYS = [0, 1, 3, 7, 14]
const MODE_KEY = 'sual-hifdh-mode'
const storageKey = (collectionId) => `sual-hifdh-${collectionId}`

function loadProgress(collectionId) {
  try { return JSON.parse(localStorage.getItem(storageKey(collectionId))) || {} } catch { return {} }
}
function saveProgress(collectionId, p) {
  localStorage.setItem(storageKey(collectionId), JSON.stringify(p))
}
function isDue(entry) { return !entry || new Date(entry.due) <= new Date() }
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
function words(text) { return text.split(/\s+/).filter(Boolean) }
function skeleton(word) { return word.replace(/[\u064B-\u0652\u0670]/g, '') }

// ── Question generators ─────────────────────────────────────────

function makeFillBlank(item, collection, hard) {
  const w = words(item.arabic)
  const candidates = w.map((word, i) => ({ word, i })).filter(({ word, i }) => i > 0 && word.length >= 4)
  if (candidates.length === 0) return null
  const target = candidates[Math.floor(Math.random() * candidates.length)]
  const blanked = w.map((word, i) => (i === target.i ? '______' : word)).join(' ')

  let distractors = []
  if (hard) {
    distractors = shuffle(
      w.filter((word, i) => i !== target.i && word.length >= 4 && skeleton(word) !== skeleton(target.word))
    ).slice(0, 3)
    if (distractors.length < 3) {
      const tLen = skeleton(target.word).length
      const extra = shuffle(
        collection.items.filter(x => x.num !== item.num).flatMap(x => words(x.arabic))
          .filter(word => Math.abs(skeleton(word).length - tLen) <= 1 && skeleton(word) !== skeleton(target.word))
      )
      for (const word of extra) {
        if (distractors.length >= 3) break
        if (!distractors.some(d => skeleton(d) === skeleton(word))) distractors.push(word)
      }
    }
  } else {
    const source = shuffle(
      collection.items.filter(x => x.num !== item.num).flatMap(x => words(x.arabic))
        .filter(word => word.length >= 4 && skeleton(word) !== skeleton(target.word))
    )
    for (const word of source) {
      if (distractors.length >= 3) break
      if (!distractors.some(d => skeleton(d) === skeleton(word))) distractors.push(word)
    }
  }
  if (distractors.length < 3) return null

  return {
    type: 'blank',
    itemNum: item.num,
    prompt: `Which word completes this ${collection.itemNoun}?`,
    arabicPrompt: blanked,
    options: shuffle([{ text: target.word, correct: true }, ...distractors.map(t => ({ text: t, correct: false }))]),
  }
}

// Triple-gap drill: three words removed at once, filled from a word bank.
// The deepest of the tap drills — partial familiarity cannot survive it.
function makeMultiBlank(item, collection, hard) {
  const w = words(item.arabic)
  const candidateIdx = w
    .map((word, i) => ({ word, i }))
    .filter(({ word, i }) => i > 0 && word.length >= 4)
    .map(({ i }) => i)
  if (candidateIdx.length < 3) return null

  // pick 3 gap positions, spaced at least 2 words apart where possible
  const gaps = []
  const pool = shuffle(candidateIdx)
  for (const i of pool) {
    if (gaps.length >= 3) break
    if (gaps.every(g => Math.abs(g - i) >= 2)) gaps.push(i)
  }
  if (gaps.length < 3) {
    for (const i of pool) {
      if (gaps.length >= 3) break
      if (!gaps.includes(i)) gaps.push(i)
    }
  }
  if (gaps.length < 3) return null
  gaps.sort((a, b) => a - b)

  const gapWords = gaps.map(i => w[i])

  // word bank: the 3 answers + 4 distractors
  let distractors = []
  const notAnswer = (word) => !gapWords.some(g => skeleton(g) === skeleton(word))
  if (hard) {
    distractors = shuffle(
      w.filter((word, i) => !gaps.includes(i) && word.length >= 4 && notAnswer(word))
    ).slice(0, 4)
  }
  if (distractors.length < 4) {
    const extra = shuffle(
      collection.items.filter(x => x.num !== item.num).flatMap(x => words(x.arabic))
        .filter(word => word.length >= 4 && notAnswer(word))
    )
    for (const word of extra) {
      if (distractors.length >= 4) break
      if (!distractors.some(d => skeleton(d) === skeleton(word))) distractors.push(word)
    }
  }
  if (distractors.length < 4) return null

  const bank = shuffle(
    [...gapWords, ...distractors].map((text, id) => ({ id, text }))
  )

  return {
    type: 'multiblank',
    itemNum: item.num,
    prompt: `Three words are missing from this ${collection.itemNoun}. Fill them in order.`,
    textWords: w,
    gaps,          // indices into textWords, in text order
    gapWords,      // the answers, in text order
    bank,          // shuffled word bank of 7
  }
}

function makeContinuation(item, collection, hard) {
  const w = words(item.arabic)
  if (w.length < 12) return null
  const cut = Math.max(4, Math.floor(w.length * 0.35))
  const shown = w.slice(0, cut).join(' ')
  const correct = w.slice(cut, cut + 5).join(' ') + '...'

  let distractors = []
  if (hard) {
    const windows = []
    for (let s = 0; s + 5 <= w.length; s++) {
      if (Math.abs(s - cut) < 4) continue
      windows.push(w.slice(s, s + 5).join(' ') + '...')
    }
    distractors = shuffle([...new Set(windows)]).slice(0, 3)
  }
  if (distractors.length < 3) {
    const extra = shuffle(collection.items.filter(x => x.num !== item.num && words(x.arabic).length >= 10))
      .map(x => {
        const xw = words(x.arabic)
        const s = Math.floor(xw.length * 0.35)
        return xw.slice(s, s + 5).join(' ') + '...'
      })
    for (const d of extra) {
      if (distractors.length >= 3) break
      if (!distractors.includes(d) && d !== correct) distractors.push(d)
    }
  }
  if (distractors.length < 3) return null

  return {
    type: 'continue',
    itemNum: item.num,
    prompt: `How does this ${collection.itemNoun} continue?`,
    arabicPrompt: shown + ' ...',
    options: shuffle([{ text: correct, correct: true }, ...distractors.map(t => ({ text: t, correct: false }))]),
  }
}

function makeWhichItem(item, collection, hard) {
  const others = collection.items.filter(x => x.num !== item.num)
  let wrong
  if (hard) {
    wrong = shuffle(others.filter(x => Math.abs(x.num - item.num) <= 3)).slice(0, 3)
    if (wrong.length < 3) {
      const rest = shuffle(others.filter(x => !wrong.includes(x)))
      wrong = [...wrong, ...rest].slice(0, 3)
    }
  } else {
    wrong = shuffle(others).slice(0, 3)
  }
  if (wrong.length < 3) return null
  return {
    type: 'which',
    itemNum: item.num,
    latinOptions: true,
    prompt: `Which ${collection.itemNoun} is this?`,
    arabicPrompt: item.arabic,
    options: shuffle([
      { text: item.label, correct: true },
      ...wrong.map(x => ({ text: x.label, correct: false })),
    ]),
  }
}

function makeAfter(item, collection) {
  const nextItem = collection.items.find(x => x.num === item.num + 1)
  if (!nextItem) return null
  const opening = (x) => words(x.arabic).slice(0, 5).join(' ') + '...'
  const distractors = shuffle(collection.items.filter(x => x.num !== item.num && x.num !== nextItem.num))
    .slice(0, 3)
    .map(x => ({ text: opening(x), correct: false }))
  if (distractors.length < 3) return null
  return {
    type: 'after',
    itemNum: item.num,
    prompt: `${item.label} is shown. Which ${collection.itemNoun} comes NEXT in ${collection.collectionName}?`,
    arabicPrompt: item.arabic,
    options: shuffle([{ text: opening(nextItem), correct: true }, ...distractors]),
  }
}

function makeOrder(item, collection) {
  const w = words(item.arabic)
  if (w.length < 12) return null
  const n = 4
  const size = Math.ceil(w.length / n)
  const segments = []
  for (let i = 0; i < w.length; i += size) {
    segments.push(w.slice(i, i + size).join(' '))
  }
  if (segments.length < 3) return null
  return {
    type: 'order',
    itemNum: item.num,
    prompt: `Rebuild this ${collection.itemNoun}. Tap the segments in their correct order.`,
    segments: segments.map((text, i) => ({ text, position: i })),
    shuffled: shuffle(segments.map((text, i) => ({ text, position: i }))),
  }
}

function buildSession(dueItems, collection, hard) {
  const questions = []
  const perItem = hard ? 3 : 2
  dueItems.forEach(item => {
    const makers = shuffle([
      () => makeFillBlank(item, collection, hard),
      () => makeMultiBlank(item, collection, hard),
      () => makeContinuation(item, collection, hard),
      () => makeWhichItem(item, collection, hard),
      ...(hard ? [() => makeAfter(item, collection), () => makeOrder(item, collection)] : []),
    ])
    let added = 0
    for (const make of makers) {
      if (added >= perItem) break
      const q = make()
      if (q) { questions.push(q); added++ }
    }
  })
  return shuffle(questions)
}

// ── Component ───────────────────────────────────────────────────
export default function Hifdh() {
  const [collection, setCollection] = useState(null)
  const [progress, setProgress] = useState({})
  const [mode, setMode] = useState(() => localStorage.getItem(MODE_KEY) || 'normal')
  const [session, setSession] = useState(null)
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [orderPicks, setOrderPicks] = useState([])
  const [orderDone, setOrderDone] = useState(false)
  const [multiPicks, setMultiPicks] = useState([])   // bank entries chosen, in gap order
  const [multiDone, setMultiDone] = useState(false)
  const [results, setResults] = useState({})
  const [finished, setFinished] = useState(false)

  const hard = mode === 'hard'

  useEffect(() => { localStorage.setItem(MODE_KEY, mode) }, [mode])

  const chooseCollection = (col) => {
    setCollection(col)
    setProgress(loadProgress(col.id))
    setSession(null)
    setFinished(false)
  }

  const dueItems = useMemo(
    () => (collection ? collection.items.filter(x => isDue(progress[x.num])) : []),
    [collection, progress]
  )

  const sessionSize = hard ? 10 : 6

  const clearQuestionState = () => {
    setSelected(null)
    setOrderPicks([])
    setOrderDone(false)
    setMultiPicks([])
    setMultiDone(false)
  }

  const startSession = () => {
    const due = shuffle(dueItems).slice(0, sessionSize)
    const qs = buildSession(due, collection, hard)
    if (qs.length === 0) return
    setSession(qs)
    setQIndex(0)
    clearQuestionState()
    setResults({})
    setFinished(false)
  }

  const currentQ = session ? session[qIndex] : null

  const recordResult = (itemNum, correct) => {
    setResults(prev => ({ ...prev, [itemNum]: (prev[itemNum] ?? true) && correct }))
  }

  const pick = (optionIndex) => {
    if (selected !== null) return
    setSelected(optionIndex)
    recordResult(currentQ.itemNum, currentQ.options[optionIndex].correct)
  }

  const pickSegment = (seg) => {
    if (orderDone) return
    if (orderPicks.some(p => p.position === seg.position)) return
    const next = [...orderPicks, seg]
    setOrderPicks(next)
    if (next.length === currentQ.segments.length) {
      const correct = next.every((p, i) => p.position === i)
      recordResult(currentQ.itemNum, correct)
      setOrderDone(true)
    }
  }

  const pickBankWord = (entry) => {
    if (multiDone) return
    if (multiPicks.some(p => p.id === entry.id)) return
    const next = [...multiPicks, entry]
    setMultiPicks(next)
    if (next.length === currentQ.gaps.length) {
      const correct = next.every((p, i) => p.text === currentQ.gapWords[i])
      recordResult(currentQ.itemNum, correct)
      setMultiDone(true)
    }
  }

  const undoSegment = () => { if (!orderDone) setOrderPicks(orderPicks.slice(0, -1)) }
  const undoBank = () => { if (!multiDone) setMultiPicks(multiPicks.slice(0, -1)) }

  const advance = () => {
    if (qIndex + 1 < session.length) {
      setQIndex(qIndex + 1)
      clearQuestionState()
    } else {
      const updated = { ...progress }
      Object.entries(results).forEach(([numStr, allCorrect]) => {
        const num = Number(numStr)
        const entry = updated[num] || { box: 0 }
        const box = allCorrect
          ? Math.min(entry.box + 1, BOX_INTERVALS_DAYS.length - 1)
          : Math.max(entry.box - 1, 0)
        updated[num] = { box, due: nextDue(box) }
      })
      saveProgress(collection.id, updated)
      setProgress(updated)
      setFinished(true)
    }
  }

  const resetCollection = () => {
    if (!window.confirm(`Reset all ${collection.title} progress? This cannot be undone.`)) return
    localStorage.removeItem(storageKey(collection.id))
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

  // Render the multiblank text with picks filled in so far
  const renderMultiText = () => {
    const pieces = []
    let gapCounter = 0
    currentQ.textWords.forEach((word, i) => {
      const gapIdx = currentQ.gaps.indexOf(i)
      if (gapIdx !== -1) {
        const picked = multiPicks[gapIdx]
        if (picked) {
          const rightAnswer = picked.text === currentQ.gapWords[gapIdx]
          pieces.push(
            <span
              key={`g${i}`}
              className={`hifdh-gap-filled ${multiDone ? (rightAnswer ? 'hifdh-gap-filled--correct' : 'hifdh-gap-filled--wrong') : ''}`}
            >
              {picked.text}
            </span>
          )
        } else {
          pieces.push(<span key={`g${i}`} className="hifdh-gap-empty">______</span>)
        }
        gapCounter++
      } else {
        pieces.push(<span key={i}> {word} </span>)
      }
    })
    return pieces
  }

  // ── Collection chooser ──
  if (!collection) {
    return (
      <div className="page-content hifdh-page">
        <h1 className="page-title">Hifdh Simulator</h1>
        <p className="page-subtitle">مُحَاكِي الحِفْظ — Guard what you have memorized. Choose what to review.</p>

        <div className="hifdh-collections">
          {COLLECTIONS.map(col => {
            const prog = loadProgress(col.id)
            const strong = col.items.filter(x => prog[x.num]?.box >= 3).length
            const due = col.items.filter(x => isDue(prog[x.num])).length
            return (
              <button key={col.id} className="hifdh-collection card" onClick={() => chooseCollection(col)}>
                <div className="hifdh-collection-top">
                  <span className="hifdh-collection-icon">{col.icon}</span>
                  <span className="hifdh-collection-arabic arabic">{col.arabicTitle}</span>
                </div>
                <h2 className="hifdh-collection-title">{col.title}</h2>
                <p className="hifdh-collection-sub">{col.subtitle}</p>
                <div className="hifdh-collection-stats">
                  <span>{col.items.length} {col.itemNounPlural} loaded</span>
                  <span className="hifdh-collection-due">{due > 0 ? `${due} due` : 'All rested'}</span>
                  <span style={{ color: '#2e7d32' }}>{strong} strong</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // ── Finished ──
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
          <p className="hifdh-done-score">
            {strong} of {total} {collection.itemNounPlural} held firm{hard ? ' · Hard mode' : ''}
          </p>
          <p className="hifdh-done-note">
            {strong === total
              ? `Strong ${collection.itemNounPlural} return after a longer gap. Keep the streak.`
              : `Weak ${collection.itemNounPlural} will return sooner. Repetition is the whole secret of hifdh.`}
          </p>
          <div className="hifdh-done-actions">
            <button className="hifdh-btn hifdh-btn--primary" onClick={() => setSession(null)}>
              Back to Overview
            </button>
            {dueItems.length > 0 && (
              <button className="hifdh-btn" onClick={startSession}>Review Again</button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ── Active question ──
  if (session && currentQ) {
    const isOrder = currentQ.type === 'order'
    const isMulti = currentQ.type === 'multiblank'
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
          {!isOrder && !isMulti && <p className="hifdh-question-arabic arabic">{currentQ.arabicPrompt}</p>}
          {isOrder && (
            <div className={`hifdh-order-built ${orderDone ? (orderPicks.every((p, i) => p.position === i) ? 'hifdh-order-built--correct' : 'hifdh-order-built--wrong') : ''}`}>
              {orderPicks.length === 0
                ? <span className="hifdh-order-hint">Tap segments below in order...</span>
                : <span className="arabic">{orderPicks.map(p => p.text).join(' ')}</span>}
            </div>
          )}
          {isMulti && (
            <p className="hifdh-question-arabic arabic">{renderMultiText()}</p>
          )}
        </div>

        {!isOrder && !isMulti && (
          <div className="hifdh-options">
            {currentQ.options.map((opt, i) => {
              let cls = 'hifdh-option'
              if (currentQ.latinOptions) cls += ' hifdh-option--latin'
              if (selected !== null) {
                if (opt.correct) cls += ' hifdh-option--correct'
                else if (i === selected) cls += ' hifdh-option--wrong'
                else cls += ' hifdh-option--faded'
              }
              return (
                <button key={i} className={cls} onClick={() => pick(i)} disabled={selected !== null}>
                  <span className={currentQ.latinOptions ? '' : 'arabic'}>{opt.text}</span>
                </button>
              )
            })}
          </div>
        )}

        {isMulti && (
          <>
            <div className="hifdh-bank">
              {currentQ.bank.map((entry) => {
                const used = multiPicks.some(p => p.id === entry.id)
                return (
                  <button
                    key={entry.id}
                    className={`hifdh-bank-word ${used ? 'hifdh-option--faded' : ''}`}
                    onClick={() => pickBankWord(entry)}
                    disabled={used || multiDone}
                  >
                    <span className="arabic">{entry.text}</span>
                  </button>
                )
              })}
            </div>
            {!multiDone && multiPicks.length > 0 && (
              <button className="hifdh-btn hifdh-undo" onClick={undoBank}>↩ Undo last</button>
            )}
            {multiDone && !multiPicks.every((p, i) => p.text === currentQ.gapWords[i]) && (
              <div className="hifdh-order-answer">
                <p className="hifdh-order-answer-label">Correct words in order:</p>
                <p className="arabic">{currentQ.gapWords.join(' — ')}</p>
              </div>
            )}
          </>
        )}

        {isOrder && (
          <>
            <div className="hifdh-options">
              {currentQ.shuffled.map((seg) => {
                const used = orderPicks.some(p => p.position === seg.position)
                return (
                  <button
                    key={seg.position}
                    className={`hifdh-option hifdh-option--segment ${used ? 'hifdh-option--faded' : ''}`}
                    onClick={() => pickSegment(seg)}
                    disabled={used || orderDone}
                  >
                    <span className="arabic">{seg.text}</span>
                  </button>
                )
              })}
            </div>
            {!orderDone && orderPicks.length > 0 && (
              <button className="hifdh-btn hifdh-undo" onClick={undoSegment}>↩ Undo last</button>
            )}
            {orderDone && !orderPicks.every((p, i) => p.position === i) && (
              <div className="hifdh-order-answer">
                <p className="hifdh-order-answer-label">Correct order:</p>
                <p className="arabic">{currentQ.segments.map(s => s.text).join(' ')}</p>
              </div>
            )}
          </>
        )}

        {(selected !== null || orderDone || multiDone) && (
          <button className="hifdh-btn hifdh-btn--primary hifdh-next" onClick={advance}>
            {qIndex + 1 < session.length ? 'Next →' : 'Finish Review'}
          </button>
        )}
      </div>
    )
  }

  // ── Collection overview ──
  return (
    <div className="page-content hifdh-page">
      <button className="hifdh-quit hifdh-back-choose" onClick={() => setCollection(null)}>
        ← All collections
      </button>
      <h1 className="page-title">{collection.icon} {collection.title}</h1>
      <p className="page-subtitle">{collection.subtitle}</p>

      <div className="hifdh-mode">
        <span className="hifdh-mode-label">Difficulty</span>
        <div className="hifdh-mode-toggle">
          <button
            className={`hifdh-mode-btn ${!hard ? 'hifdh-mode-btn--active' : ''}`}
            onClick={() => setMode('normal')}
          >
            Normal
          </button>
          <button
            className={`hifdh-mode-btn ${hard ? 'hifdh-mode-btn--active hifdh-mode-btn--hard' : ''}`}
            onClick={() => setMode('hard')}
          >
            🔥 Hard
          </button>
        </div>
      </div>
      {hard && (
        <p className="hifdh-mode-note">
          Hard mode: distractors come from inside the same {collection.itemNoun}, identification options
          are neighbors, segment-ordering and sequence drills join the mix, and sessions run longer.
        </p>
      )}

      <div className="hifdh-stats">
        <div className="hifdh-stat card">
          <span className="hifdh-stat-value">{collection.items.length}</span>
          <span className="hifdh-stat-label">{collection.itemNounPlural} loaded</span>
        </div>
        <div className="hifdh-stat card">
          <span className="hifdh-stat-value" style={{ color: dueItems.length > 0 ? '#e65100' : '#2e7d32' }}>
            {dueItems.length}
          </span>
          <span className="hifdh-stat-label">Due for review</span>
        </div>
        <div className="hifdh-stat card">
          <span className="hifdh-stat-value" style={{ color: '#2e7d32' }}>
            {collection.items.filter(x => strengthOf(x.num) === 'strong').length}
          </span>
          <span className="hifdh-stat-label">Strong</span>
        </div>
      </div>

      {dueItems.length > 0 ? (
        <button className="hifdh-btn hifdh-btn--primary hifdh-start" onClick={startSession}>
          Start {hard ? 'Hard ' : ''}Review — {Math.min(dueItems.length, sessionSize)} {collection.itemNounPlural} →
        </button>
      ) : (
        <div className="hifdh-alldone card">
          <p>Nothing due right now. Every reviewed {collection.itemNoun} is resting until its next appearance, in shaa Allah.</p>
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
        {collection.items.map(x => (
          <div key={x.num} className={`hifdh-map-cell hifdh-map-cell--${strengthOf(x.num)}`} title={`${x.label} — ${x.meta}`}>
            {x.num}
          </div>
        ))}
        {Array.from({ length: Math.max(0, collection.total - collection.items.length) }, (_, i) => (
          <div key={`soon-${i}`} className="hifdh-map-cell hifdh-map-cell--locked" title="Coming soon">
            {collection.items.length + i + 1}
          </div>
        ))}
      </div>
      {collection.total > collection.items.length && (
        <p className="hifdh-coming">
          More of {collection.collectionName} is being prepared. Review deepens as the collection grows.
        </p>
      )}

      <button className="hifdh-reset" onClick={resetCollection}>Reset {collection.title} progress</button>
    </div>
  )
}
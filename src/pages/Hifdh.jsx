import React, { useState, useEffect, useMemo } from 'react'
import { COLLECTIONS } from '../data/collections.js'
import {
  isDue,
  advanceBox,
  strengthOf,
  shuffle,
} from '../lib/spacedRepetition.js'
import { getHifdhProgress, saveHifdhProgress } from '../lib/hifdhProgress.js'
import { getScope, setScope, clearScope } from '../lib/hifdhScope.js'
import { supabase } from '../lib/supabase.js'
import './Hifdh.css'

// How many items go into one review batch, and how many questions
// each due item gets.
const SESSION_SIZE = 10
const QUESTIONS_PER_ITEM = 3

// Every MCQ question type below produces exactly 1 correct answer +
// 4 distractors, so the position cycler is fixed at 5 slots.
const MCQ_OPTION_COUNT = 5

// ── Helpers ─────────────────────────────────────────────────────
function words(text) {
  return (text || '').split(/\s+/).filter(Boolean)
}

// Strip Arabic diacritics (tashkeel) and normalize alef/ya/ta-marbuta
// variants so typed answers can be checked without requiring the
// person to type harakat, which almost nobody does on a keyboard.
function normalizeArabic(str) {
  return (str || '')
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, '') // diacritics + tatweel
    .replace(/[إأآا]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim()
}

// A pure random shuffle is statistically unbiased over the long run,
// but over a short 10-30 question session it can easily clump — the
// correct answer landing in the same slot 3-4 times in a row is
// common by chance, and it reads as a bug even though it isn't one.
// This cycler guarantees every slot (0..size-1) is used exactly once
// before any slot repeats, so the position feels evenly distributed
// across a session instead of merely "random on average."
function createPositionCycler(size) {
  let queue = []
  return function next() {
    if (queue.length === 0) {
      queue = shuffle(Array.from({ length: size }, (_, i) => i))
    }
    return queue.pop()
  }
}

// Places `correct` at `position` and fills the remaining slots with a
// shuffled order of `distractors`.
function assembleOptions(correct, distractors, position) {
  const shuffledDistractors = shuffle(distractors)
  const options = new Array(distractors.length + 1)
  options[position] = { ...correct, correct: true }
  let d = 0
  for (let i = 0; i < options.length; i++) {
    if (i === position) continue
    options[i] = { ...shuffledDistractors[d], correct: false }
    d++
  }
  return options
}

// ── Question generators ─────────────────────────────────────────
// These all operate on the generic item shape produced by
// collections.js: { key, num, label, meta, arabic }. Nothing here
// assumes "hadith" specifically, so the same generators serve the
// Qur'an, the Arba'in, and Umdatul-Ahkam alike.
//
// MCQ makers return { type, itemKey, prompt, arabicPrompt, correct,
// distractors } — raw, unpositioned — so buildSession can assign the
// correct answer's slot via the position cycler at assembly time.

// Type 1: fill the blank — one word removed, distractors matched by
// word length so the blank can't be guessed by shape alone.
function makeFillBlank(item, pool) {
  const w = words(item.arabic)
  const candidates = w
    .map((word, i) => ({ word, i }))
    .filter(({ word, i }) => i > 0 && word.length >= 4)
  if (candidates.length === 0) return null
  const target = candidates[Math.floor(Math.random() * candidates.length)]

  const blanked = w.map((word, i) => (i === target.i ? '______' : word)).join(' ')

  const otherWords = pool
    .filter(it => it.key !== item.key)
    .flatMap(it => words(it.arabic))
    .filter(word => word !== target.word)

  const closeLength = shuffle(
    otherWords.filter(word => Math.abs(word.length - target.word.length) <= 1)
  )
  const fallback = shuffle(otherWords.filter(word => word.length >= 4))
  const distractorWords = [...new Set([...closeLength, ...fallback])].slice(0, 4)

  if (distractorWords.length < 4) return null

  return {
    type: 'blank',
    itemKey: item.key,
    prompt: 'Which word completes this passage?',
    arabicPrompt: blanked,
    correct: { text: target.word },
    distractors: distractorWords.map(word => ({ text: word })),
  }
}

// Type 2: what comes next — only the first third is shown, and
// distractors are pulled from numerically nearby items so they're
// thematically closer and easier to confuse.
function makeContinuation(item, pool) {
  const w = words(item.arabic)
  if (w.length < 12) return null
  const split = Math.max(4, Math.floor(w.length / 3))
  const shown = w.slice(0, split).join(' ')
  const continuation = w.slice(split, split + 6).join(' ') + '...'

  const nearby = pool.filter(
    it => it.key !== item.key && Math.abs(it.num - item.num) <= 4 && words(it.arabic).length >= 12
  )
  const far = pool.filter(
    it => it.key !== item.key && Math.abs(it.num - item.num) > 4 && words(it.arabic).length >= 12
  )
  const sourcePool = [...shuffle(nearby), ...shuffle(far)]

  const distractors = sourcePool.slice(0, 4).map(it => {
    const iw = words(it.arabic)
    const s = Math.max(2, Math.floor(iw.length / 3))
    return { text: iw.slice(s, s + 6).join(' ') + '...' }
  })

  if (distractors.length < 4) return null

  return {
    type: 'continue',
    itemKey: item.key,
    prompt: 'How does this passage continue?',
    arabicPrompt: shown + ' ...',
    correct: { text: continuation },
    distractors,
  }
}

// Type 3: which item — locate this item within the collection by its
// label (e.g. "Hadith 12", "Surah An-Nas").
function makeWhichItem(item, pool, collection) {
  const wrongLabels = shuffle(
    pool.filter(it => it.key !== item.key && it.label !== item.label)
  ).slice(0, 4)

  if (wrongLabels.length < 4) return null

  return {
    type: 'number',
    itemKey: item.key,
    prompt: `Which ${collection.itemNoun} of ${collection.collectionName} is this?`,
    arabicPrompt: item.arabic,
    correct: { text: item.label },
    distractors: wrongLabels.map(it => ({ text: it.label })),
  }
}

// Type 4: meta detail — narrator/source for hadith collections,
// whatever descriptive tag the collection provides otherwise (e.g. a
// Qur'an surah's theme or juz). Generic on purpose: it only reads
// item.meta, so it needs no per-collection special-casing.
function makeMeta(item, pool, collection) {
  const otherMeta = shuffle(
    [...new Set(pool.filter(it => it.key !== item.key).map(it => it.meta))]
      .filter(m => m && m !== item.meta)
  ).slice(0, 4)

  if (!item.meta || otherMeta.length < 4) return null

  return {
    type: 'meta',
    itemKey: item.key,
    prompt: `What is associated with this ${collection.itemNoun}?`,
    arabicPrompt: item.arabic,
    correct: { text: item.meta },
    distractors: otherMeta.map(m => ({ text: m })),
  }
}

// Type 5 (typed, no multiple choice): the real hifdh test. Shows a
// lead-in and requires typing the rest of the passage from memory.
function makeCompleteRecall(item) {
  const w = words(item.arabic)
  if (w.length < 8) return null
  const cut = Math.max(4, Math.floor(w.length * 0.55))
  const lead = w.slice(0, cut).join(' ')
  const tail = w.slice(cut).join(' ')
  if (words(tail).length < 2) return null

  return {
    type: 'complete',
    itemKey: item.key,
    prompt: 'Type the rest of this passage from memory (no diacritics needed).',
    arabicPrompt: lead + ' ...',
    answer: tail,
  }
}

function buildSession(dueItems, pool, collection) {
  const raw = []
  dueItems.forEach(item => {
    const makers = shuffle([
      () => makeFillBlank(item, pool),
      () => makeContinuation(item, pool),
      () => makeWhichItem(item, pool, collection),
      () => makeMeta(item, pool, collection),
      () => makeCompleteRecall(item),
    ])
    let added = 0
    for (const make of makers) {
      if (added >= QUESTIONS_PER_ITEM) break
      const q = make()
      if (q) { raw.push(q); added++ }
    }
  })

  const ordered = shuffle(raw)

  // Assign the correct answer's slot via the position cycler so it's
  // evenly spread across the session instead of left to raw chance.
  const cyclePosition = createPositionCycler(MCQ_OPTION_COUNT)
  return ordered.map(q => {
    if (q.type === 'complete') return q
    const position = cyclePosition()
    return {
      ...q,
      options: assembleOptions(q.correct, q.distractors, position),
    }
  })
}

// ── Component ───────────────────────────────────────────────────
export default function Hifdh({ user = null }) {
  const [collectionId, setCollectionId] = useState(null)
  const collection = useMemo(
    () => COLLECTIONS.find(c => c.id === collectionId) || null,
    [collectionId]
  )

  const [progress, setProgress] = useState({})
  const [progressLoading, setProgressLoading] = useState(false)
  // Progress for every collection, used only on the picker screen to
  // show due/strong counts without opening each collection.
  const [allProgress, setAllProgress] = useState({})

  // Declared memorization scope for the open collection — null means
  // unrestricted (full collection), matching today's behavior until
  // someone actually sets one.
  const [scope, setScopeState] = useState(null)
  const [scopeLoading, setScopeLoading] = useState(false)

  const [session, setSession] = useState(null)   // array of questions
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState(null) // option index picked (MCQ types)
  const [typedAnswer, setTypedAnswer] = useState('')
  const [typedSubmitted, setTypedSubmitted] = useState(false)
  const [typedCorrect, setTypedCorrect] = useState(false)
  const [results, setResults] = useState({})     // itemKey -> all-correct boolean
  const [finished, setFinished] = useState(false)

  // Load this collection's saved progress whenever the selected
  // collection changes.
  useEffect(() => {
    if (!collectionId) return
    let cancelled = false
    setProgressLoading(true)
    getHifdhProgress(user, collectionId).then(p => {
      if (!cancelled) {
        setProgress(p)
        setProgressLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [collectionId, user])

  // Load the declared memorization scope for this collection.
  useEffect(() => {
    if (!collectionId) return
    let cancelled = false
    setScopeLoading(true)
    getScope(user, collectionId).then(s => {
      if (!cancelled) {
        setScopeState(s)
        setScopeLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [collectionId, user])

  // Load a lightweight progress summary for every collection up
  // front, for the picker screen's due/strong counts.
  useEffect(() => {
    let cancelled = false
    Promise.all(COLLECTIONS.map(c => getHifdhProgress(user, c.id).then(p => [c.id, p])))
      .then(entries => {
        if (cancelled) return
        const map = {}
        entries.forEach(([id, p]) => { map[id] = p })
        setAllProgress(map)
      })
    return () => { cancelled = true }
  }, [user])

  // The items actually in play — everything if no scope is set, or
  // only what's within the declared "memorized up to" boundary.
  // Distractors, due-counting, and stats all derive from this rather
  // than the raw collection, so nothing outside a user's own
  // memorization scope leaks into their review session.
  const scopedItems = useMemo(() => {
    if (!collection) return []
    if (scope === null) return collection.items
    return collection.items.filter(it => it.num <= scope)
  }, [collection, scope])

  const handleScopeChange = async (newScope) => {
    setScopeState(newScope)
    if (newScope === null) {
      await clearScope(user, collectionId)
    } else {
      await setScope(user, collectionId, newScope)
    }
  }

  const dueItems = useMemo(
    () => scopedItems.filter(it => isDue(progress[it.key])),
    [scopedItems, progress]
  )

  const openCollection = (id) => {
    setCollectionId(id)
    setSession(null)
    setFinished(false)
  }

  const backToCollections = () => {
    setCollectionId(null)
    setSession(null)
    setFinished(false)
  }

  const startSession = () => {
    const due = shuffle(dueItems).slice(0, SESSION_SIZE)
    const qs = buildSession(due, scopedItems, collection)
    if (qs.length === 0) return
    setSession(qs)
    setQIndex(0)
    setSelected(null)
    setTypedAnswer('')
    setTypedSubmitted(false)
    setTypedCorrect(false)
    setResults({})
    setFinished(false)
  }

  const currentQ = session ? session[qIndex] : null

  const recordResult = (itemKey, correct) => {
    setResults(prev => ({
      ...prev,
      [itemKey]: (prev[itemKey] ?? true) && correct,
    }))
  }

  const pick = (optionIndex) => {
    if (selected !== null) return
    setSelected(optionIndex)
    const correct = currentQ.options[optionIndex].correct
    recordResult(currentQ.itemKey, correct)
  }

  const submitTyped = () => {
    if (typedSubmitted) return
    const correct = normalizeArabic(typedAnswer) === normalizeArabic(currentQ.answer)
    setTypedCorrect(correct)
    setTypedSubmitted(true)
    recordResult(currentQ.itemKey, correct)
  }

  const answered = selected !== null || typedSubmitted

  const next = () => {
    if (qIndex + 1 < session.length) {
      setQIndex(qIndex + 1)
      setSelected(null)
      setTypedAnswer('')
      setTypedSubmitted(false)
      setTypedCorrect(false)
    } else {
      // Session over: move boxes and save
      let updated = progress
      Object.entries(results).forEach(([key, allCorrect]) => {
        updated = advanceBox(updated, key, allCorrect)
      })
      setProgress(updated)
      setFinished(true)
      saveHifdhProgress(user, collectionId, updated).then(() => {
        setAllProgress(prev => ({ ...prev, [collectionId]: updated }))
      })
    }
  }

  const resetAll = async () => {
    if (!window.confirm(`Reset all ${collection.title} progress? This cannot be undone.`)) return
    localStorage.removeItem(`sual-hifdh-${collectionId}`)
    if (user) {
      const { error } = await supabase
        .from('hifdh_progress')
        .delete()
        .eq('user_id', user.id)
        .eq('collection_id', collectionId)
      if (error) console.error('Failed to clear remote hifdh progress:', error)
    }
    setProgress({})
    setAllProgress(prev => ({ ...prev, [collectionId]: {} }))
    setSession(null)
    setFinished(false)
  }

  // ── Collection picker screen ──
  if (!collection) {
    return (
      <div className="page-content hifdh-page">
        <h1 className="page-title">Hifdh Simulator</h1>
        <p className="page-subtitle">مُحَاكِي الحِفْظ — Choose what to guard today</p>
        <div className="hifdh-collections">
          {COLLECTIONS.map(c => {
            const p = allProgress[c.id] || {}
            const due = c.items.filter(it => isDue(p[it.key])).length
            const strong = c.items.filter(it => {
              const e = p[it.key]
              return e && e.box >= 3
            }).length
            return (
              <button key={c.id} className="hifdh-collection-card card" onClick={() => openCollection(c.id)}>
                <div className="hifdh-collection-icon">{c.icon}</div>
                <div className="hifdh-collection-body">
                  <h3 className="hifdh-collection-title">{c.title}</h3>
                  <p className="hifdh-collection-arabic arabic">{c.arabicTitle}</p>
                  <p className="hifdh-collection-subtitle">{c.subtitle}</p>
                  <p className="hifdh-collection-stats">
                    {strong}/{c.total} strong · {due} due
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // ── Session finished screen ──
  if (session && finished) {
    const strong = Object.values(results).filter(Boolean).length
    const total = Object.keys(results).length
    return (
      <div className="page-content hifdh-page">
        <h1 className="page-title">{collection.title} Review</h1>
        <div className="hifdh-done card">
          <div className="hifdh-done-icon">{strong === total ? '🌟' : '📚'}</div>
          <h2 className="hifdh-done-title">
            {strong === total ? 'Ma shaa Allah — perfect review' : 'Review complete'}
          </h2>
          <p className="hifdh-done-score">{strong} of {total} {collection.itemNounPlural} held firm</p>
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

        {currentQ.type === 'complete' ? (
          <div className="hifdh-typed">
            <textarea
              className="hifdh-typed-input arabic"
              dir="rtl"
              rows={2}
              placeholder="اكتب البقية هنا..."
              value={typedAnswer}
              onChange={e => setTypedAnswer(e.target.value)}
              disabled={typedSubmitted}
            />
            {!typedSubmitted ? (
              <button
                className="hifdh-btn hifdh-btn--primary"
                onClick={submitTyped}
                disabled={typedAnswer.trim().length === 0}
              >
                Check
              </button>
            ) : (
              <div className={`hifdh-typed-feedback ${typedCorrect ? 'hifdh-typed-feedback--correct' : 'hifdh-typed-feedback--wrong'}`}>
                <p>{typedCorrect ? 'Correct — exact recall.' : 'Not quite. The correct continuation is:'}</p>
                {!typedCorrect && <p className="arabic hifdh-typed-answer">{currentQ.answer}</p>}
              </div>
            )}
          </div>
        ) : (
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
                  <span className={currentQ.type === 'number' || currentQ.type === 'meta' ? '' : 'arabic'}>
                    {opt.text}
                  </span>
                </button>
              )
            })}
          </div>
        )}

        {answered && (
          <button className="hifdh-btn hifdh-btn--primary hifdh-next" onClick={next}>
            {qIndex + 1 < session.length ? 'Next →' : 'Finish Review'}
          </button>
        )}
      </div>
    )
  }

  // ── Overview screen (per selected collection) ──
  return (
    <div className="page-content hifdh-page">
      <div className="hifdh-session-top">
        <button className="hifdh-quit" onClick={backToCollections}>← Collections</button>
      </div>
      <h1 className="page-title">{collection.title}</h1>
      <p className="page-subtitle">{collection.arabicTitle} — {collection.subtitle}</p>

      {progressLoading || scopeLoading ? (
        <div className="hifdh-alldone card"><p>Loading your progress…</p></div>
      ) : (
      <>
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
            {scopedItems.filter(it => strengthOf(progress, it.key) === 'strong').length}
          </span>
          <span className="hifdh-stat-label">Strong</span>
        </div>
      </div>

      {/* Memorization scope — "I've memorized up to here". No row in
          hifdh_scope means unrestricted, same as before this existed;
          setting it restricts review and distractors to what's
          actually been memorized, and dims the rest on the map below. */}
      {(() => {
        const nums = collection.items.map(it => it.num)
        const minNum = nums.length ? Math.min(...nums) : 0
        const maxNum = nums.length ? Math.max(...nums) : 0
        const sliderValue = scope === null ? maxNum : scope
        const currentItem = collection.items.find(it => it.num === sliderValue)
        const label = sliderValue < minNum ? 'None yet' : (currentItem?.label || sliderValue)

        return (
          <div className="card" style={{ padding: '18px 20px', marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#094570' }}>
                I've memorized up to: <span style={{ fontWeight: 800 }}>{label}</span>
              </p>
              <p style={{ fontSize: '0.78rem', color: '#8a9ab0' }}>
                {scopedItems.length} of {collection.items.length} in scope
              </p>
            </div>
            <input
              type="range"
              min={minNum - 1}
              max={maxNum}
              value={sliderValue}
              onChange={e => {
                const v = Number(e.target.value)
                handleScopeChange(v >= maxNum ? null : v)
              }}
              style={{ width: '100%' }}
            />
            <p style={{ fontSize: '0.78rem', color: '#8a9ab0', marginTop: 6 }}>
              Reviews, distractors, and the map below only draw from what's in scope.
            </p>
          </div>
        )
      })()}

      {dueItems.length > 0 ? (
        <button className="hifdh-btn hifdh-btn--primary hifdh-start" onClick={startSession}>
          Start Review — {Math.min(dueItems.length, SESSION_SIZE)} {collection.itemNounPlural} →
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
        {collection.items.map(it => {
          const outOfScope = scope !== null && it.num > scope
          return (
            <div
              key={it.key}
              className={`hifdh-map-cell hifdh-map-cell--${strengthOf(progress, it.key)}`}
              title={outOfScope ? `${it.label} — outside your memorization scope` : `${it.label} — ${it.meta}`}
              style={outOfScope ? { opacity: 0.25 } : undefined}
            >
              {it.num}
            </div>
          )
        })}
      </div>
      <p className="hifdh-coming">
        All {collection.total} {collection.itemNounPlural} are loaded. Reviews mix blanks, detail drills, and full-line recall typing — recognition alone won't carry you through.
      </p>
      </>
      )}

      <button className="hifdh-reset" onClick={resetAll}>Reset all progress</button>
    </div>
  )
}
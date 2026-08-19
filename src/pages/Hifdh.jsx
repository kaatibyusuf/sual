import React, { useState, useEffect, useMemo, useRef } from 'react'
import { COLLECTIONS } from '../data/collections.js'
import {
  isDue,
  advanceBox,
  strengthOf,
  shuffle,
} from '../lib/spacedRepetition.js'
import { getHifdhProgress, saveHifdhProgress } from '../lib/hifdhProgress.js'
import { getScopeSet, setScopeSet, clearScopeSet } from '../lib/hifdhScope.js'
import { surahToJuz, ayahToJuz } from '../lib/quranJuz.js'
import { supabase } from '../lib/supabase.js'
import './Hifdh.css'

const SESSION_SIZE = 10
const QUESTIONS_PER_ITEM = 3
const MCQ_OPTION_COUNT = 5

// How much gets shown before the blank, and how much has to be
// typed from memory, is capped rather than left as a straight 55/45
// split of the whole passage. For a short hadith or short ayah that
// changes nothing. For a long one (a full Umdatul-Ahkam entry can run
// well past 50 words), an uncapped split means a long wall of Arabic
// to read through before reaching the input, and then a long
// remainder to type — both of which get worse the longer the source
// passage is, which is backwards: the point is testing whether the
// next few words come to mind, not reproducing an entire hadith.
const MAX_RECALL_LEAD_WORDS = 18
const MAX_RECALL_TAIL_WORDS = 14

function words(text) {
  return (text || '').split(/\s+/).filter(Boolean)
}

function normalizeArabic(str) {
  return (str || '')
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim()
}

function createPositionCycler(size) {
  let queue = []
  return function next() {
    if (queue.length === 0) {
      queue = shuffle(Array.from({ length: size }, (_, i) => i))
    }
    return queue.pop()
  }
}

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
  const idealCut = Math.max(4, Math.floor(w.length * 0.55))
  const cut = Math.min(idealCut, MAX_RECALL_LEAD_WORDS)
  const lead = w.slice(0, cut).join(' ')
  const tail = w.slice(cut, cut + MAX_RECALL_TAIL_WORDS).join(' ')
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

export default function Hifdh({ user = null }) {
  const [collectionId, setCollectionId] = useState(null)
  const collection = useMemo(
    () => COLLECTIONS.find(c => c.id === collectionId) || null,
    [collectionId]
  )

  const [progress, setProgress] = useState({})
  const [progressLoading, setProgressLoading] = useState(false)
  const [allProgress, setAllProgress] = useState({})

  const [scopeSet, setScopeSetState] = useState(null)
  const [scopeLoading, setScopeLoading] = useState(false)

  const [session, setSession] = useState(null)
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [typedAnswer, setTypedAnswer] = useState('')
  const [typedSubmitted, setTypedSubmitted] = useState(false)
  const [typedCorrect, setTypedCorrect] = useState(false)
  const [results, setResults] = useState({})
  const [finished, setFinished] = useState(false)

  const [voiceSupported] = useState(() => typeof window !== 'undefined' && !!(navigator.mediaDevices && window.MediaRecorder))
  const [isRecording, setIsRecording] = useState(false)
  const [hasRecording, setHasRecording] = useState(false) // stopped, not yet submitted — lets the take be discarded and redone
  const [voiceChecking, setVoiceChecking] = useState(false)
  const [voiceResult, setVoiceResult] = useState(null)
  const [voiceError, setVoiceError] = useState(null)
  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])
  const recordedBlobRef = useRef(null)

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

  useEffect(() => {
    if (!collectionId) return
    let cancelled = false
    setScopeLoading(true)
    getScopeSet(user, collectionId).then(s => {
      if (!cancelled) {
        setScopeSetState(s)
        setScopeLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [collectionId, user])

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

  const scopedItems = useMemo(() => {
    if (!collection) return []
    if (scopeSet === null) return collection.items
    return collection.items.filter(it => scopeSet.has(it.key))
  }, [collection, scopeSet])

  const persistScopeSet = async (newSetOrNull) => {
    setScopeSetState(newSetOrNull)
    if (newSetOrNull === null) {
      await clearScopeSet(user, collectionId)
    } else {
      await setScopeSet(user, collectionId, [...newSetOrNull])
    }
  }

  const toggleItemKeys = (keys, forceState) => {
    const current = scopeSet === null ? new Set() : new Set(scopeSet)
    const allCurrentlyIn = keys.every(k => current.has(k))
    const shouldAdd = forceState !== undefined ? forceState : !allCurrentlyIn
    keys.forEach(k => shouldAdd ? current.add(k) : current.delete(k))
    persistScopeSet(current)
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
    setVoiceResult(null)
    setVoiceError(null)
    setHasRecording(false)
    recordedBlobRef.current = null
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

  const startRecording = async () => {
    setVoiceError(null)
    setVoiceResult(null)
    setHasRecording(false)
    recordedBlobRef.current = null
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mimeType = MediaRecorder.isTypeSupported('audio/webm')
        ? 'audio/webm'
        : (MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '')
      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream)
      audioChunksRef.current = []
      recorder.ondataavailable = e => { if (e.data.size > 0) audioChunksRef.current.push(e.data) }
      // FIX: this used to call checkRecitation() here immediately,
      // meaning the instant you tapped stop, that single take was
      // final — no way to discard a flubbed attempt (e.g. having to
      // back up mid-recitation to re-say a phrase) before it got
      // scored. Now stopping just ends capture; the person reviews
      // and explicitly chooses to submit or re-record.
      recorder.onstop = () => {
        stream.getTracks().forEach(t => t.stop())
        recordedBlobRef.current = new Blob(audioChunksRef.current, { type: recorder.mimeType || 'audio/webm' })
        setHasRecording(true)
      }
      mediaRecorderRef.current = recorder
      recorder.start()
      setIsRecording(true)
    } catch (err) {
      console.error('Microphone access failed:', err)
      setVoiceError('Could not access your microphone. Check your browser permissions, or type your answer instead.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  // Discards the just-recorded take without submitting it for
  // checking, so a messy attempt never gets scored — the direct fix
  // for "going back to re-recite makes your answer wrong": now there
  // was never a wrong answer recorded in the first place, just a
  // discarded take.
  const discardRecording = () => {
    recordedBlobRef.current = null
    setHasRecording(false)
    setVoiceError(null)
  }

  const submitRecording = () => {
    if (recordedBlobRef.current) checkRecitation(recordedBlobRef.current)
  }

  const blobToBase64 = (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(String(reader.result).split(',')[1] || '')
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })

  const checkRecitation = async (blob) => {
    setVoiceChecking(true)
    try {
      const base64 = await blobToBase64(blob)
      const { data, error } = await supabase.functions.invoke('hifdh-voice-check', {
        body: {
          audio: base64,
          mimeType: blob.type || 'audio/webm',
          expectedText: currentQ.answer,
        },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setVoiceResult({ correct: data.correct, transcript: data.transcript })
      setTypedCorrect(data.correct)
      setTypedSubmitted(true)
      recordResult(currentQ.itemKey, data.correct)
    } catch (err) {
      console.error('Voice check failed:', err)
      setVoiceError(err.message || 'Could not check your recitation. Try typing instead.')
    } finally {
      setVoiceChecking(false)
    }
  }

  const answered = selected !== null || typedSubmitted

  const next = () => {
    if (qIndex + 1 < session.length) {
      setQIndex(qIndex + 1)
      setSelected(null)
      setTypedAnswer('')
      setTypedSubmitted(false)
      setTypedCorrect(false)
      setVoiceResult(null)
      setVoiceError(null)
      setHasRecording(false)
      recordedBlobRef.current = null
    } else {
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

            {voiceSupported && !typedSubmitted && (
              <div style={{ marginTop: 10 }}>
                {voiceError && <p style={{ color: '#c0392b', fontSize: '0.82rem', marginBottom: 6 }}>{voiceError}</p>}

                {hasRecording ? (
                  // Reviewing a stopped take before it's scored — this
                  // is the actual fix for "going back to re-recite
                  // makes your answer wrong": a flubbed attempt is
                  // discarded here, never submitted, never scored.
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                    <p style={{ fontSize: '0.82rem', color: '#4a6080', width: '100%', margin: 0 }}>
                      Recording ready. Not happy with it? Re-record instead of submitting.
                    </p>
                    <button className="hifdh-btn" onClick={discardRecording} disabled={voiceChecking}>
                      🔄 Re-record
                    </button>
                    <button className="hifdh-btn hifdh-btn--primary" onClick={submitRecording} disabled={voiceChecking}>
                      {voiceChecking ? 'Checking your recitation…' : '✓ Submit Recitation'}
                    </button>
                  </div>
                ) : (
                  <button
                    className="hifdh-btn"
                    onClick={isRecording ? stopRecording : startRecording}
                    disabled={voiceChecking}
                  >
                    {isRecording ? '⏹ Stop Recording' : '🎤 Recite Instead'}
                  </button>
                )}
              </div>
            )}

            {!typedSubmitted ? (
              <button
                className="hifdh-btn hifdh-btn--primary"
                onClick={submitTyped}
                disabled={typedAnswer.trim().length === 0}
                style={{ marginTop: 10 }}
              >
                Check
              </button>
            ) : (
              <div className={`hifdh-typed-feedback ${typedCorrect ? 'hifdh-typed-feedback--correct' : 'hifdh-typed-feedback--wrong'}`}>
                <p>{typedCorrect ? 'Correct — exact recall.' : 'Not quite. The correct continuation is:'}</p>
                {!typedCorrect && <p className="arabic hifdh-typed-answer">{currentQ.answer}</p>}
                {voiceResult && (
                  <p style={{ fontSize: '0.8rem', color: '#8a9ab0', marginTop: 6 }}>
                    Heard: <span className="arabic">{voiceResult.transcript}</span>
                  </p>
                )}
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

      {(() => {
        const isQuranCollection = collection.id === 'quran-starter'
        const isUnrestricted = scopeSet === null
        const scopeCount = isUnrestricted ? collection.items.length : scopeSet.size

        const realSurah = (it) => parseInt(String(it.key).replace(/^q/, ''), 10)

        if (isQuranCollection) {
          const totalAyatOf = (it) => {
            const m = String(it.meta || '').match(/(\d+)\s*ayat/i)
            return m ? parseInt(m[1], 10) : 1
          }

          const juzGroups = {}
          collection.items.forEach(it => {
            const j = surahToJuz(realSurah(it))
            if (!juzGroups[j]) juzGroups[j] = []
            juzGroups[j].push(it)
          })
          const startJuzNumbers = Object.keys(juzGroups).map(Number).sort((a, b) => a - b)

          const juzRanges = startJuzNumbers.map(startJ => {
            const items = juzGroups[startJ]
            const endJ = Math.max(...items.map(it => ayahToJuz(realSurah(it), totalAyatOf(it))))
            return { startJ, endJ, items }
          })

          return (
            <div className="card" style={{ padding: '18px 20px', marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#094570' }}>
                  {isUnrestricted
                    ? 'Reviewing everything — scope not set yet'
                    : `${scopeCount} of ${collection.items.length} surahs marked memorized`}
                </p>
                {!isUnrestricted && (
                  <button
                    onClick={() => persistScopeSet(null)}
                    style={{ fontSize: '0.75rem', color: '#8a9ab0', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Reset — review everything
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                {juzRanges.map(({ startJ, endJ, items }) => {
                  const keysInJuz = items.map(it => it.key)
                  const filled = !isUnrestricted && keysInJuz.every(k => scopeSet.has(k))
                  const label = endJ > startJ ? `Juz ${startJ}–${endJ}` : `Juz ${startJ}`
                  return (
                    <button
                      key={startJ}
                      onClick={() => toggleItemKeys(keysInJuz)}
                      title={endJ > startJ ? `Spans Juz ${startJ} through ${endJ} — tracked as one surah` : undefined}
                      style={{
                        padding: '6px 10px',
                        borderRadius: 8,
                        border: filled ? '2px solid #2e7d32' : '2px solid #c8d8e8',
                        background: filled ? '#eaf5ea' : '#f5f8fb',
                        color: filled ? '#2e7d32' : '#6a8090',
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                      }}
                    >
                      {filled ? '✓ ' : ''}{label}
                    </button>
                  )
                })}
              </div>
              <p style={{ fontSize: '0.78rem', color: '#8a9ab0' }}>
                Tap any Juz you've memorized — any combination, any order. Memorized Juz
                Amma first? Start there. Reviews and quiz distractors only draw from
                what's marked.
              </p>
            </div>
          )
        }

        const nums = collection.items.map(it => it.num)
        const minNum = nums.length ? Math.min(...nums) : 0
        const maxNum = nums.length ? Math.max(...nums) : 0
        const scopedNums = isUnrestricted
          ? []
          : collection.items.filter(it => scopeSet.has(it.key)).map(it => it.num)
        const sliderValue = isUnrestricted ? maxNum : (scopedNums.length ? Math.max(...scopedNums) : minNum - 1)
        const currentItem = collection.items.find(it => it.num === sliderValue)
        const label = sliderValue < minNum ? 'None yet' : (currentItem?.label || sliderValue)

        return (
          <div className="card" style={{ padding: '18px 20px', marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#094570' }}>
                I've memorized up to: <span style={{ fontWeight: 800 }}>{label}</span>
              </p>
              <p style={{ fontSize: '0.78rem', color: '#8a9ab0' }}>
                {scopeCount} of {collection.items.length} in scope
              </p>
            </div>
            <input
              type="range"
              min={minNum - 1}
              max={maxNum}
              value={sliderValue}
              onChange={e => {
                const v = Number(e.target.value)
                if (v >= maxNum) {
                  persistScopeSet(null)
                } else {
                  const keys = collection.items.filter(it => it.num <= v).map(it => it.key)
                  persistScopeSet(new Set(keys))
                }
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
          const outOfScope = scopeSet !== null && !scopeSet.has(it.key)
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
        All {collection.items.length} {collection.itemNounPlural} are loaded. Reviews mix blanks, detail drills, and full-line recall typing — recognition alone won't carry you through.
      </p>
      </>
      )}

      <button className="hifdh-reset" onClick={resetAll}>Reset all progress</button>
    </div>
  )
}
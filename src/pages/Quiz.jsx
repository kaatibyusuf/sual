import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { DISCIPLINES, QUIZ_QUESTIONS, BEGINNER_DISCIPLINE_IDS } from '../data/knowledge.js'
import { useSearchParams, Link } from 'react-router-dom'
import { DISCIPLINE_ICONS } from '../components/disciplineIcons.jsx'
import { supabase } from '../lib/supabase.js'
import { useAccessibility } from '../accessibility/AccessibilityContext.jsx'
import './Quiz.css'
import {
  INTERMEDIATE_QUIZ,
  INTERMEDIATE_SEERAH_QUIZ,
  INTERMEDIATE_ARABIYYAH_QUIZ,
  INTERMEDIATE_USUL_QUIZ,
  INTERMEDIATE_SARF_QUIZ,
  INTERMEDIATE_NAHW_QUIZ,
  INTERMEDIATE_TAFSEER_QUIZ,
  INTERMEDIATE_TAJWEED_QUIZ,
} from '../data/knowledge_intermediate.js'

import {
  ADVANCED_FIQH_QUIZ,
  ADVANCED_SEERAH_QUIZ,
  ADVANCED_ARABIYYAH_QUIZ,
  ADVANCED_USUL_QUIZ,
  ADVANCED_SARF_QUIZ,
  ADVANCED_NAHW_QUIZ,
  ADVANCED_TAFSEER_QUIZ,
} from '../data/knowledge_advanced.js'

const ICONS = {
  mixed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  cross: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    </svg>
  ),
  coin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9 9.5a2.5 2.5 0 0 1 2.5-1.5h1a2 2 0 0 1 0 4h-1a2 2 0 0 0 0 4h1a2.5 2.5 0 0 0 2.5-1.5" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
}

const IconInline = ({ name }) => <span className="icon-inline">{ICONS[name]}</span>

const INTERMEDIATE_QUIZ_ALL = {
  // NOTE: INTERMEDIATE_QUIZ is exported as `{ fiqh: [...] }`, not a flat
  // array like every other intermediate discipline export. Using it
  // directly here made INTERMEDIATE_QUIZ_ALL.fiqh resolve to that whole
  // object instead of an array, so buildQuizPool's pool.sort() crashed
  // for Fiqh + Intermediate specifically. Unwrap .fiqh to match the flat
  // shape everything else uses.
  fiqh:      INTERMEDIATE_QUIZ.fiqh || [],
  seerah:    INTERMEDIATE_SEERAH_QUIZ || [],
  arabiyyah: INTERMEDIATE_ARABIYYAH_QUIZ || [],
  usul:      INTERMEDIATE_USUL_QUIZ || [],
  sarf:      INTERMEDIATE_SARF_QUIZ || [],
  nahw:      INTERMEDIATE_NAHW_QUIZ || [],
  tafseer:   INTERMEDIATE_TAFSEER_QUIZ || [],
  tajweed:   INTERMEDIATE_TAJWEED_QUIZ || [],
}

const ADVANCED_QUIZ_ALL = {
  fiqh:      ADVANCED_FIQH_QUIZ || [],
  seerah:    ADVANCED_SEERAH_QUIZ || [],
  arabiyyah: ADVANCED_ARABIYYAH_QUIZ || [],
  usul:      ADVANCED_USUL_QUIZ || [],
  sarf:      ADVANCED_SARF_QUIZ || [],
  nahw:      ADVANCED_NAHW_QUIZ || [],
  tafseer:   ADVANCED_TAFSEER_QUIZ || [],
}

const LEVEL_ORDER = ['beginner', 'intermediate', 'advanced']

const saveProgress = (quizKey, state) => {
  try {
    localStorage.setItem(`sual-quiz-progress-${quizKey}`, JSON.stringify({
      ...state, savedAt: Date.now(),
    }))
  } catch {}
}

const loadSavedProgress = (quizKey) => {
  try {
    const raw = localStorage.getItem(`sual-quiz-progress-${quizKey}`)
    if (!raw) return null
    const saved = JSON.parse(raw)
    if (Date.now() - saved.savedAt > 6 * 60 * 60 * 1000) return null
    return saved
  } catch {
    return null
  }
}

const clearProgress = (quizKey) => {
  try {
    localStorage.removeItem(`sual-quiz-progress-${quizKey}`)
  } catch {}
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
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

function randomizeQuestionOptions(q, position) {
  const correctText = q.options[q.correct]
  const others = q.options.filter((_, i) => i !== q.correct)
  const shuffledOthers = shuffle(others)
  const options = new Array(q.options.length)
  options[position] = correctText
  let d = 0
  for (let i = 0; i < options.length; i++) {
    if (i === position) continue
    options[i] = shuffledOthers[d]
    d++
  }
  return { ...q, options, correct: position }
}

function randomizeSession(questions) {
  const cyclers = {}
  return questions.map(q => {
    const size = q.options.length
    if (!cyclers[size]) cyclers[size] = createPositionCycler(size)
    const position = cyclers[size]()
    return randomizeQuestionOptions(q, position)
  })
}

function buildQuizPool(disciplineId, level = 'beginner') {
  const beginner     = QUIZ_QUESTIONS
  const intermediate = INTERMEDIATE_QUIZ_ALL
  const advanced     = ADVANCED_QUIZ_ALL

  const pool = disciplineId && disciplineId !== 'mixed'
    ? level === 'advanced'
      ? (advanced[disciplineId] || [])
      : level === 'intermediate'
        ? (intermediate[disciplineId] || [])
        : (beginner[disciplineId] || [])
    : level === 'advanced'
      ? Object.values(advanced).flat()
      : level === 'intermediate'
        ? Object.values(intermediate).flat()
        : Object.values(beginner).flat()

  // FIX: some discipline/level combinations resolve to a truthy but
  // non-array value (a data-shape mismatch in one of the imported
  // quiz files, not something this function can control) — calling
  // .sort() on that threw "pool.sort is not a function" and crashed
  // the whole component with no error boundary, leaving a blank page
  // that only a full reload could recover from. Every caller
  // (beginQuizWith AND nextQuizSuggestions' filter check) goes
  // through this one function, so guarding here protects both call
  // sites at once. A bad shape now degrades to the existing "no
  // questions available" handling instead of crashing.
  const safePool = Array.isArray(pool) ? pool : []
  return safePool.sort(() => Math.random() - 0.5)
}

export default function Quiz({ user, userLevel = 'beginner' }) {
  const { announce } = useAccessibility()
  const [searchParams] = useSearchParams()
  const preselect = searchParams.get('discipline') || 'mixed'

  const [selectedDiscipline, setSelectedDiscipline] = useState(preselect)
  const [selectedLevel,      setSelectedLevel]      = useState(userLevel)
  const [phase,              setPhase]              = useState('select')
  const [questions,          setQuestions]          = useState([])
  const [currentIdx,         setCurrentIdx]         = useState(0)
  const [chosen,             setChosen]             = useState(null)
  const [revealed,           setRevealed]           = useState(false)
  const [score,              setScore]              = useState(0)
  const [answers,            setAnswers]            = useState([])
  const [unlockMsg,          setUnlockMsg]          = useState(null)

  const [coinsEarned, setCoinsEarned] = useState(0)
  const [merchCodeUnlocked, setMerchCodeUnlocked] = useState(null)

  const [saveError, setSaveError] = useState(null)
  const [retryingSave, setRetryingSave] = useState(false)

  const [noQuestionsMsg, setNoQuestionsMsg] = useState(null)
  const [savedProgress,  setSavedProgress]  = useState(null)

  useEffect(() => {
    if (phase !== 'select') return
    const quizKey = `${selectedDiscipline}-${selectedLevel}`
    setSavedProgress(loadSavedProgress(quizKey))
  }, [phase, selectedDiscipline, selectedLevel])

  useEffect(() => {
    if (phase !== 'active' || questions.length === 0) return
    const quizKey = `${selectedDiscipline}-${selectedLevel}`
    saveProgress(quizKey, { questionIndex: currentIdx, answers, questions, score, chosen, revealed })
  }, [phase, currentIdx, answers, score, chosen, revealed, questions, selectedDiscipline, selectedLevel])

  const beginQuizWith = useCallback((disciplineId, level) => {
    const pool = buildQuizPool(disciplineId, level)
    if (pool.length === 0) {
      setSelectedDiscipline(disciplineId)
      setSelectedLevel(level)
      setNoQuestionsMsg(
        `No questions available yet for this discipline at ${level} level. Try a different level or discipline.`
      )
      setPhase('select')
      return
    }
    setNoQuestionsMsg(null)
    setSelectedDiscipline(disciplineId)
    setSelectedLevel(level)
    const picked = pool.slice(0, Math.min(10, pool.length))
    const shuffled = randomizeSession(picked)
    setQuestions(shuffled)
    setCurrentIdx(0)
    setScore(0)
    setAnswers([])
    setChosen(null)
    setRevealed(false)
    setUnlockMsg(null)
    setCoinsEarned(0)
    setMerchCodeUnlocked(null)
    setSaveError(null)
    setPhase('active')
  }, [])

  const startQuiz = useCallback(() => {
    beginQuizWith(selectedDiscipline, selectedLevel)
  }, [selectedDiscipline, selectedLevel, beginQuizWith])

  const resumeQuiz = useCallback(() => {
    if (!savedProgress) return
    setQuestions(savedProgress.questions)
    setCurrentIdx(savedProgress.questionIndex)
    setAnswers(savedProgress.answers)
    setScore(savedProgress.score)
    setChosen(savedProgress.chosen)
    setRevealed(savedProgress.revealed)
    setUnlockMsg(null)
    setNoQuestionsMsg(null)
    setPhase('active')
  }, [savedProgress])

  const discardSavedProgress = useCallback(() => {
    const quizKey = `${selectedDiscipline}-${selectedLevel}`
    clearProgress(quizKey)
    setSavedProgress(null)
  }, [selectedDiscipline, selectedLevel])

  const saveScore = async (finalScore, total) => {
    if (!user) return false
    const percentage = Math.round((finalScore / total) * 100)
    setSaveError(null)

    let beforeBalance = 0
    let hadCodeBefore = false
    try {
      const { data } = await supabase.rpc('get_my_coins_and_code')
      const row = Array.isArray(data) ? data[0] : data
      beforeBalance = row?.balance || 0
      hadCodeBefore = !!row?.merch_code
    } catch (err) {
      console.error('Failed to snapshot coin balance:', err)
    }

    const { error: insertError } = await supabase.from('quiz_history').insert({
      user_id:    user.id,
      discipline: selectedDiscipline,
      score:      finalScore,
      total,
      percentage,
    })

    if (insertError) {
      console.error('Failed to save score:', insertError)
      setSaveError(insertError.message || 'Your score could not be saved. Please try again.')
      return false
    }

    try {
      const { data } = await supabase.rpc('get_my_coins_and_code')
      const row = Array.isArray(data) ? data[0] : data
      const afterBalance = row?.balance || 0
      setCoinsEarned(Math.max(0, afterBalance - beforeBalance))
      if (row?.merch_code && !hadCodeBefore) {
        setMerchCodeUnlocked(row.merch_code)
      }
    } catch (err) {
      console.error('Failed to load updated coin balance:', err)
    }

    try {
      const { data: history } = await supabase
        .from('quiz_history')
        .select('percentage')
        .eq('user_id', user.id)
        .eq('discipline', selectedDiscipline)
        .order('taken_at', { ascending: false })
        .limit(5)

      if (!history || history.length < 1) return true

      const avg = history.reduce((sum, r) => sum + r.percentage, 0) / history.length
      if (avg < 70) return true

      const { data: levelData } = await supabase
        .from('user_levels')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (!levelData) return true

      const currentIdx = LEVEL_ORDER.indexOf(levelData.current_level)
      if (currentIdx >= LEVEL_ORDER.length - 1) return true

      const nextLevel = LEVEL_ORDER[currentIdx + 1]

      await supabase
        .from('user_levels')
        .update({ current_level: nextLevel, level_selected: true })
        .eq('user_id', user.id)

      setUnlockMsg(
        `You've unlocked ${nextLevel.charAt(0).toUpperCase() + nextLevel.slice(1)} level!`
      )
    } catch (err) {
      console.error('Level unlock check failed:', err)
    }

    return true
  }

  const retrySave = async () => {
    if (retryingSave) return
    setRetryingSave(true)
    await saveScore(score, questions.length)
    setRetryingSave(false)
  }

  const selectAnswer = (idx) => {
    if (revealed) return
    setChosen(idx)
    setRevealed(true)
    const q = questions[currentIdx]
    const isCorrect = idx === q.correct
    if (isCorrect) setScore(s => s + 1)
    announce(isCorrect
      ? 'Correct.'
      : `Incorrect. The correct answer was: ${q.options[q.correct]}`)
  }

  const nextQuestion = () => {
    const q = questions[currentIdx]
    const newAnswers = [...answers, {
      question:    q.question,
      chosen,
      correct:     q.correct,
      explanation: q.explanation,
      options:     q.options,
    }]
    setAnswers(newAnswers)

    if (currentIdx + 1 >= questions.length) {
      saveScore(score, questions.length)
      clearProgress(`${selectedDiscipline}-${selectedLevel}`)
      setPhase('result')
      const finalPercent = Math.round((score / questions.length) * 100)
      announce(`Quiz complete. Score: ${score} out of ${questions.length}, ${finalPercent} percent.`)
    } else {
      setCurrentIdx(i => i + 1)
      setChosen(null)
      setRevealed(false)
    }
  }

  const discInfo = (id) => {
    if (id === 'mixed') return { icon: ICONS.mixed, name: 'All Disciplines (Mixed)' }
    const d = DISCIPLINES.find(x => x.id === id)
    return d ? { icon: DISCIPLINE_ICONS[d.icon], name: d.name } : { icon: null, name: id }
  }

  const nextQuizSuggestions = useMemo(() => {
  if (phase !== 'result') return []
  const pool = userLevel === 'beginner'
    ? DISCIPLINES.filter(d => BEGINNER_DISCIPLINE_IDS.includes(d.id))
    : DISCIPLINES
  const candidates = ['mixed', ...pool.map(d => d.id)].filter(id => id !== selectedDiscipline)
  const withQuestions = candidates.filter(id => buildQuizPool(id, selectedLevel).length > 0)
  return shuffle(withQuestions).slice(0, 3)
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [phase, selectedDiscipline, selectedLevel, userLevel])

  const scorePercent = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0
  const scoreMsg = () => {
    if (scorePercent >= 90) return { msg: 'Excellent! ممتاز',               color: '#0a7c4e' }
    if (scorePercent >= 70) return { msg: 'Well done! أحسنتَ',              color: '#2e7d9e' }
    if (scorePercent >= 50) return { msg: 'Good effort! جيد',               color: '#b06d00' }
    return                         { msg: 'Keep studying! استمر في الدراسة', color: '#c0392b' }
  }

  if (phase === 'select') {
    const selectedInfo = discInfo(selectedDiscipline)
    const visibleDisciplines = userLevel === 'beginner'
      ? DISCIPLINES.filter(d => BEGINNER_DISCIPLINE_IDS.includes(d.id))
      : DISCIPLINES
    return (
      <div className="page-content quiz-page">
        <h1 className="page-title">Quiz</h1>
        <p className="page-subtitle">اِخْتِبَار — Test your knowledge across the Islamic sciences</p>

        <div className="quiz-select-card card">
          <h2 className="quiz-select-title">Choose a discipline</h2>
          <div className="quiz-discipline-options">
            <button
              className={`quiz-disc-btn ${selectedDiscipline === 'mixed' ? 'quiz-disc-btn--active' : ''}`}
              onClick={() => setSelectedDiscipline('mixed')}
              data-a11y-label="Mixed, all disciplines"
            >
              <span className="quiz-disc-icon"><IconInline name="mixed" /></span>
              <span className="quiz-disc-name">Mixed</span>
              <span className="quiz-disc-arabic arabic">كُلّ العُلُوم</span>
            </button>
            {visibleDisciplines.map(d => (
              <button
                key={d.id}
                className={`quiz-disc-btn ${selectedDiscipline === d.id ? 'quiz-disc-btn--active' : ''}`}
                onClick={() => setSelectedDiscipline(d.id)}
                data-a11y-label={d.name}
              >
                <span className="quiz-disc-icon">{DISCIPLINE_ICONS[d.icon]}</span>
                <span className="quiz-disc-name">{d.name}</span>
                <span className="quiz-disc-arabic arabic">{d.arabicName}</span>
              </button>
            ))}
          </div>

          <div className="quiz-level-row">
            {[
              { key: 'beginner',     label: 'Beginner',     arabic: 'مُبْتَدِئ',  color: '#2e7d32' },
              { key: 'intermediate', label: 'Intermediate', arabic: 'مُتَوَسِّط', color: '#e65100', locked: userLevel === 'beginner' },
              { key: 'advanced',     label: 'Advanced',     arabic: 'مُتَقَدِّم', color: '#6a1b9a', locked: userLevel !== 'advanced' },
            ].map(lv => (
              <button
                key={lv.key}
                className={`quiz-level-btn ${selectedLevel === lv.key ? 'quiz-level-btn--active' : ''} ${lv.locked ? 'quiz-level-btn--locked' : ''}`}
                style={selectedLevel === lv.key ? { borderColor: lv.color, color: lv.color } : {}}
                onClick={() => !lv.locked && setSelectedLevel(lv.key)}
                title={lv.locked ? 'Complete previous level to unlock' : ''}
                data-a11y-label={`${lv.label}${lv.locked ? ', locked, complete the previous level to unlock' : ''}`}
              >
                {lv.locked ? <IconInline name="lock" /> : ''}{lv.label}
                <span className="quiz-level-arabic arabic">{lv.arabic}</span>
              </button>
            ))}
          </div>

          {savedProgress && (
            <div className="quiz-select-error" style={{
              padding: '10px 14px',
              marginBottom: 12,
              background: 'rgba(46,125,50,0.08)',
              border: '1px solid rgba(46,125,50,0.25)',
              borderRadius: 10,
              fontSize: '0.85rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 10,
              flexWrap: 'wrap',
            }}>
              <span>You have an unfinished attempt at question {savedProgress.questionIndex + 1} of {savedProgress.questions.length}.</span>
              <span style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-primary" onClick={resumeQuiz}>Resume</button>
                <button className="btn btn-ghost" onClick={discardSavedProgress}>Discard</button>
              </span>
            </div>
          )}

          {noQuestionsMsg && (
            <div className="quiz-select-error" style={{
              padding: '10px 14px',
              marginBottom: 12,
              background: 'rgba(231,76,60,0.08)',
              border: '1px solid rgba(231,76,60,0.25)',
              borderRadius: 10,
              color: '#c0392b',
              fontSize: '0.85rem',
            }}>
              {noQuestionsMsg}
            </div>
          )}

          <div className="quiz-start-row">
            <p className="quiz-start-label">
  Selected: <strong className="quiz-selected-inline">
    <span className="icon-inline">{selectedInfo.icon}</span> {selectedInfo.name}
  </strong> · <strong>
                {selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}
              </strong>
            </p>
            <button className="btn btn-primary" onClick={startQuiz} data-a11y-label={`Begin quiz: ${selectedInfo.name}, ${selectedLevel} level`}>Begin Quiz →</button>
          </div>
        </div>
      </div>
    )
  }

  if (phase === 'active') {
    const q        = questions[currentIdx]
    const progress = (currentIdx / questions.length) * 100

    return (
      <div className="page-content quiz-page">
        <div className="quiz-progress-header">
          <span className="quiz-progress-label">Question {currentIdx + 1} of {questions.length}</span>
          <span className="quiz-score-badge badge badge-regal">Score: {score}</span>
        </div>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="quiz-question-card card" data-a11y-label={`Question ${currentIdx + 1} of ${questions.length}: ${q.question}`}>
          <p className="quiz-question-text">{q.question}</p>

          <div className="quiz-options">
            {q.options.map((opt, idx) => {
              let cls = 'quiz-option'
              let status = ''
              if (revealed) {
                if (idx === q.correct) { cls += ' quiz-option--correct'; status = ', correct answer' }
                else if (idx === chosen && idx !== q.correct) { cls += ' quiz-option--wrong'; status = ', your answer, incorrect' }
              } else if (chosen === idx) {
                cls += ' quiz-option--selected'
              }
              return (
                <button
                  key={idx}
                  className={cls}
                  onClick={() => selectAnswer(idx)}
                  disabled={revealed}
                  data-a11y-label={`Option ${String.fromCharCode(65 + idx)}: ${opt}${status}`}
                >
                  <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
                  <span>{opt}</span>
                </button>
              )
            })}
          </div>

          {revealed && (
            <div className={`quiz-explanation ${chosen === q.correct ? 'quiz-explanation--correct' : 'quiz-explanation--wrong'}`} data-a11y-label={`Explanation: ${q.explanation}`}>
              <span className="quiz-explanation-icon">
                <IconInline name={chosen === q.correct ? 'check' : 'cross'} />
              </span>
              <p>{q.explanation}</p>
            </div>
          )}

          {revealed && (
            <div className="quiz-next-row">
              <button className="btn btn-primary" onClick={nextQuestion}>
                {currentIdx + 1 < questions.length ? 'Next Question →' : 'See Results →'}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  const { msg, color } = scoreMsg()

  return (
    <div className="page-content quiz-page">
      <div className="quiz-result-card card">
        <div className="quiz-result-header" data-a11y-label={`Quiz complete. Score: ${score} out of ${questions.length}, ${scorePercent} percent. ${msg}`}>
          <span className="quiz-result-icon"><IconInline name="target" /></span>
          <h2 className="quiz-result-title">Quiz Complete</h2>
          <div className="quiz-result-score"  style={{ color }}>{score} / {questions.length}</div>
          <div className="quiz-result-percent" style={{ color }}>{scorePercent}%</div>
          <div className="quiz-result-msg">{msg}</div>
        </div>

        {saveError && (
          <div
            className="quiz-unlock-banner"
            style={{
              background: 'rgba(231,76,60,0.08)',
              border: '1px solid rgba(231,76,60,0.25)',
              color: '#c0392b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              flexWrap: 'wrap',
            }}
            data-a11y-label={`This quiz was not saved. ${saveError}`}
          >
            <span><IconInline name="warning" /> This quiz wasn't saved — it won't count toward your quizzes taken or your streak. {saveError}</span>
            <button className="btn btn-ghost" onClick={retrySave} disabled={retryingSave} style={{ color: '#c0392b', borderColor: 'rgba(231,76,60,0.4)' }}>
              {retryingSave ? 'Retrying…' : 'Retry Save'}
            </button>
          </div>
        )}

        {coinsEarned > 0 && (
          <div className="quiz-unlock-banner" data-a11y-label={`You earned ${coinsEarned} coin${coinsEarned !== 1 ? 's' : ''} from this quiz.`}>
            <IconInline name="coin" /> +{coinsEarned} coin{coinsEarned !== 1 ? 's' : ''} earned
          </div>
        )}

        {merchCodeUnlocked && (
          <div className="quiz-unlock-banner" data-a11y-label="You have reached 5,000 coins and unlocked a merchandise redemption code.">
            <IconInline name="sparkle" /> You've reached 5,000 coins! Your redemption code is waiting in your{' '}
            <Link to="/profile" style={{ textDecoration: 'underline' }}>Profile</Link>.
          </div>
        )}

        {unlockMsg && (
          <div className="quiz-unlock-banner">
            <IconInline name="sparkle" /> {unlockMsg}
          </div>
        )}

        <div className="quiz-review">
          <h3 className="quiz-review-title">Review</h3>
          {answers.map((a, i) => {
            const wasCorrect = a.chosen === a.correct
            return (
              <div
                key={i}
                className={`quiz-review-item ${wasCorrect ? 'quiz-review-item--correct' : 'quiz-review-item--wrong'}`}
                data-a11y-label={`Question ${i + 1}: ${a.question}. ${wasCorrect ? 'You answered correctly.' : `You answered ${a.options[a.chosen]}, incorrect. Correct answer: ${a.options[a.correct]}.`} ${a.explanation}`}
              >
                <div className="quiz-review-q">
                  <span className="quiz-review-icon">
                    <IconInline name={wasCorrect ? 'check' : 'cross'} />
                  </span>
                  <strong>Q{i + 1}:</strong> {a.question}
                </div>
                <div className="quiz-review-ans">
                  Your answer: <em className={wasCorrect ? 'correct-text' : 'wrong-text'}>{a.options[a.chosen]}</em>
                  {!wasCorrect && (
                    <> &nbsp;|&nbsp; Correct: <em className="correct-text">{a.options[a.correct]}</em></>
                  )}
                </div>
                <div className="quiz-review-exp">{a.explanation}</div>
              </div>
            )
          })}
        </div>

        {nextQuizSuggestions.length > 0 && (
          <div className="quiz-review" style={{ marginTop: 4 }}>
            <h3 className="quiz-review-title">Next Quiz</h3>
            <p style={{ fontSize: '0.82rem', color: '#6a8090', marginTop: -8, marginBottom: 14 }}>
              مَزِيدٌ مِنَ التَّعَلُّم — Keep the momentum going with another discipline.
            </p>
            <div className="quiz-discipline-options">
              {nextQuizSuggestions.map(id => {
                const info = discInfo(id)
                return (
                  <button
                    key={id}
                    className="quiz-disc-btn"
                    onClick={() => beginQuizWith(id, selectedLevel)}
                    data-a11y-label={`Start a ${info.name} quiz, ${selectedLevel} level`}
                  >
                    <span className="quiz-disc-icon"><span className="icon-inline">{info.icon}</span></span>
                    <span className="quiz-disc-name">{info.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <div className="quiz-result-actions">
          <button className="btn btn-primary" onClick={startQuiz}>Retry Quiz</button>
          <button className="btn btn-ghost"   onClick={() => setPhase('select')}>Change Discipline</button>
          <Link   to="/dashboard" className="btn btn-ghost">
            <IconInline name="chart" /> View Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
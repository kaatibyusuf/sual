import React, { useState, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { DISCIPLINES, QUIZ_QUESTIONS } from '../data/knowledge.js'
import { DISCIPLINE_ICONS } from '../components/disciplineIcons.jsx'
import { supabase } from '../lib/supabase.js'
import './Quiz.css'
import {
  INTERMEDIATE_QUIZ,
  INTERMEDIATE_SEERAH_QUIZ,
  INTERMEDIATE_ARABIYYAH_QUIZ,
  INTERMEDIATE_USUL_QUIZ,
  INTERMEDIATE_SARF_QUIZ,
  INTERMEDIATE_NAHW_QUIZ,
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
}

const IconInline = ({ name }) => <span className="icon-inline">{ICONS[name]}</span>

const INTERMEDIATE_QUIZ_ALL = {
  fiqh:      INTERMEDIATE_QUIZ || [],
  seerah:    INTERMEDIATE_SEERAH_QUIZ || [],
  arabiyyah: INTERMEDIATE_ARABIYYAH_QUIZ || [],
  usul:      INTERMEDIATE_USUL_QUIZ || [],
  sarf:      INTERMEDIATE_SARF_QUIZ || [],
  nahw:      INTERMEDIATE_NAHW_QUIZ || [],
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

// ── Answer-position shuffling ─────────────────────────────────
// The question data has a fixed `correct` index baked in per
// question (e.g. many were authored with the right answer at index
// 1 / option B). Shuffling the *order of questions* does nothing to
// fix that — the correct answer still lands on the same letter every
// time a given question appears. These helpers reshuffle each
// question's own options at quiz-start time and remap `correct` to
// match, using a position cycler so the correct slot is spread
// evenly across a 10-question session instead of left to chance
// (plain per-question randomness can still clump on one letter over
// a short session).
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

// Moves the correct option to `position`, shuffling the rest into the
// remaining slots, and returns a new question object with `correct`
// updated to match.
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

// One cycler per distinct option-count (almost always 4, but this
// stays correct even if some question sets use a different count).
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

  return pool.sort(() => Math.random() - 0.5)
}

export default function Quiz({ user, userLevel = 'beginner' }) {
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

  const [noQuestionsMsg, setNoQuestionsMsg] = useState(null)

  const startQuiz = useCallback(() => {
    const pool = buildQuizPool(selectedDiscipline, selectedLevel)
    if (pool.length === 0) {
      setNoQuestionsMsg(
        `No questions available yet for this discipline at ${selectedLevel} level. Try a different level or discipline.`
      )
      return
    }
    setNoQuestionsMsg(null)
    const picked = pool.slice(0, Math.min(10, pool.length))
    const shuffled = randomizeSession(picked)
    setQuestions(shuffled)
    setCurrentIdx(0)
    setScore(0)
    setAnswers([])
    setChosen(null)
    setRevealed(false)
    setUnlockMsg(null)
    setPhase('active')
  }, [selectedDiscipline, selectedLevel])

  const saveScore = async (finalScore, total) => {
    if (!user) return
    const percentage = Math.round((finalScore / total) * 100)

    try {
      await supabase.from('quiz_history').insert({
        user_id:    user.id,
        discipline: selectedDiscipline,
        score:      finalScore,
        total,
        percentage,
      })
    } catch (err) {
      console.error('Failed to save score:', err)
      return
    }

    try {
      const { data: history } = await supabase
        .from('quiz_history')
        .select('percentage')
        .eq('user_id', user.id)
        .eq('discipline', selectedDiscipline)
        .order('taken_at', { ascending: false })
        .limit(5)

      if (!history || history.length < 1) return

      const avg = history.reduce((sum, r) => sum + r.percentage, 0) / history.length
      if (avg < 70) return

      const { data: levelData } = await supabase
        .from('user_levels')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (!levelData) return

      const currentIdx = LEVEL_ORDER.indexOf(levelData.current_level)
      if (currentIdx >= LEVEL_ORDER.length - 1) return

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
  }

  const selectAnswer = (idx) => {
    if (revealed) return
    setChosen(idx)
    setRevealed(true)
    const q = questions[currentIdx]
    if (idx === q.correct) setScore(s => s + 1)
  }

  // FIX: this previously recomputed and added credit for the final
  // question a second time on top of what selectAnswer() already
  // added the moment it was answered — score is the single source of
  // truth for every question by the time this runs, including the
  // last one, so the finishing branch now just trusts it instead of
  // adding another point when the last question was correct. That
  // extra point was exactly why an all-correct run showed 11/10, and
  // any run showed one more than the true count whenever the final
  // question specifically was answered correctly.
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
      setPhase('result')
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

  const scorePercent = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0
  const scoreMsg = () => {
    if (scorePercent >= 90) return { msg: 'Excellent! ممتاز',               color: '#0a7c4e' }
    if (scorePercent >= 70) return { msg: 'Well done! أحسنتَ',              color: '#2e7d9e' }
    if (scorePercent >= 50) return { msg: 'Good effort! جيد',               color: '#b06d00' }
    return                         { msg: 'Keep studying! استمر في الدراسة', color: '#c0392b' }
  }

  // ── SELECT ───────────────────────────────────────────────────
  if (phase === 'select') {
    const selectedInfo = discInfo(selectedDiscipline)
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
            >
              <span className="quiz-disc-icon"><IconInline name="mixed" /></span>
              <span className="quiz-disc-name">Mixed</span>
              <span className="quiz-disc-arabic arabic">كُلّ العُلُوم</span>
            </button>
            {DISCIPLINES.map(d => (
              <button
                key={d.id}
                className={`quiz-disc-btn ${selectedDiscipline === d.id ? 'quiz-disc-btn--active' : ''}`}
                onClick={() => setSelectedDiscipline(d.id)}
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
              >
                {lv.locked ? <IconInline name="lock" /> : ''}{lv.label}
                <span className="quiz-level-arabic arabic">{lv.arabic}</span>
              </button>
            ))}
          </div>

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
            <button className="btn btn-primary" onClick={startQuiz}>Begin Quiz →</button>
          </div>
        </div>
      </div>
    )
  }

  // ── ACTIVE ───────────────────────────────────────────────────
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

        <div className="quiz-question-card card">
          <p className="quiz-question-text">{q.question}</p>

          <div className="quiz-options">
            {q.options.map((opt, idx) => {
              let cls = 'quiz-option'
              if (revealed) {
                if (idx === q.correct)                        cls += ' quiz-option--correct'
                else if (idx === chosen && idx !== q.correct) cls += ' quiz-option--wrong'
              } else if (chosen === idx) {
                cls += ' quiz-option--selected'
              }
              return (
                <button
                  key={idx}
                  className={cls}
                  onClick={() => selectAnswer(idx)}
                  disabled={revealed}
                >
                  <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
                  <span>{opt}</span>
                </button>
              )
            })}
          </div>

          {revealed && (
            <div className={`quiz-explanation ${chosen === q.correct ? 'quiz-explanation--correct' : 'quiz-explanation--wrong'}`}>
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

  // ── RESULT ───────────────────────────────────────────────────
  const { msg, color } = scoreMsg()

  return (
    <div className="page-content quiz-page">
      <div className="quiz-result-card card">
        <div className="quiz-result-header">
          <span className="quiz-result-icon"><IconInline name="target" /></span>
          <h2 className="quiz-result-title">Quiz Complete</h2>
          <div className="quiz-result-score"  style={{ color }}>{score} / {questions.length}</div>
          <div className="quiz-result-percent" style={{ color }}>{scorePercent}%</div>
          <div className="quiz-result-msg">{msg}</div>
        </div>

        {unlockMsg && (
          <div className="quiz-unlock-banner">
            <IconInline name="sparkle" /> {unlockMsg}
          </div>
        )}

        <div className="quiz-review">
          <h3 className="quiz-review-title">Review</h3>
          {answers.map((a, i) => (
            <div
              key={i}
              className={`quiz-review-item ${a.chosen === a.correct ? 'quiz-review-item--correct' : 'quiz-review-item--wrong'}`}
            >
              <div className="quiz-review-q">
                <span className="quiz-review-icon">
                  <IconInline name={a.chosen === a.correct ? 'check' : 'cross'} />
                </span>
                <strong>Q{i + 1}:</strong> {a.question}
              </div>
              <div className="quiz-review-ans">
                Your answer: <em className={a.chosen === a.correct ? 'correct-text' : 'wrong-text'}>{a.options[a.chosen]}</em>
                {a.chosen !== a.correct && (
                  <> &nbsp;|&nbsp; Correct: <em className="correct-text">{a.options[a.correct]}</em></>
                )}
              </div>
              <div className="quiz-review-exp">{a.explanation}</div>
            </div>
          ))}
        </div>

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
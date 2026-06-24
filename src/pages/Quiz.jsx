import React, { useState, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { DISCIPLINES, QUIZ_QUESTIONS } from '../data/knowledge.js'
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
const INTERMEDIATE_QUIZ_ALL = {
  fiqh: INTERMEDIATE_QUIZ?.fiqh || [],
  seerah: INTERMEDIATE_SEERAH_QUIZ || [],
  arabiyyah: INTERMEDIATE_ARABIYYAH_QUIZ || [],
  usul: INTERMEDIATE_USUL_QUIZ || [],
  sarf: INTERMEDIATE_SARF_QUIZ || [],
  nahw: INTERMEDIATE_NAHW_QUIZ || [],
  tafseer: [],
}

function buildQuizPool(disciplineId, level = 'beginner') {
  const beginner = QUIZ_QUESTIONS
  const intermediate = INTERMEDIATE_QUIZ_ALL

  if (disciplineId && disciplineId !== 'mixed') {
    if (level === 'intermediate') {
      return [...(intermediate[disciplineId] || [])]
    }
    return [...(beginner[disciplineId] || [])]
  }

  if (level === 'intermediate') {
    return Object.values(intermediate).flat().sort(() => Math.random() - 0.5)
  }
  return Object.values(beginner).flat().sort(() => Math.random() - 0.5)
}

export default function Quiz({ user, userLevel = 'beginner' }) {
  const [searchParams] = useSearchParams()
  const preselect = searchParams.get('discipline') || 'mixed'

  const [selectedDiscipline, setSelectedDiscipline] = useState(preselect)
  const [selectedLevel, setSelectedLevel] = useState(userLevel)
  const [phase, setPhase] = useState('select')
  const [questions, setQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const startQuiz = useCallback(() => {
    const pool = buildQuizPool(selectedDiscipline, selectedLevel)
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, Math.min(10, pool.length))
    setQuestions(shuffled)
    setCurrentIdx(0)
    setScore(0)
    setAnswers([])
    setChosen(null)
    setRevealed(false)
    setPhase('active')
  }, [selectedDiscipline])

  const saveScore = async (finalScore, total) => {
    if (!user) return
    const percentage = Math.round((finalScore / total) * 100)
    try {
      await supabase.from('quiz_history').insert({
        user_id: user.id,
        discipline: selectedDiscipline,
        score: finalScore,
        total,
        percentage,
      })
    } catch (err) {
      console.error('Failed to save score:', err)
    }
  }

  const selectAnswer = (idx) => {
    if (revealed) return
    setChosen(idx)
    setRevealed(true)
    const q = questions[currentIdx]
    if (idx === q.correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    const q = questions[currentIdx]
    const newAnswers = [...answers, {
      question: q.question,
      chosen,
      correct: q.correct,
      explanation: q.explanation,
      options: q.options,
    }]
    setAnswers(newAnswers)

    if (currentIdx + 1 >= questions.length) {
      const finalScore = chosen === q.correct ? score + 1 : score
      saveScore(finalScore, questions.length)
      setScore(finalScore)
      setPhase('result')
    } else {
      setCurrentIdx(i => i + 1)
      setChosen(null)
      setRevealed(false)
    }
  }

  const discLabel = (id) => {
    if (id === 'mixed') return 'All Disciplines (Mixed)'
    const d = DISCIPLINES.find(x => x.id === id)
    return d ? `${d.icon} ${d.name}` : id
  }

  const scorePercent = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0
  const scoreMsg = () => {
    if (scorePercent >= 90) return { msg: 'Excellent! ممتاز', color: '#0a7c4e' }
    if (scorePercent >= 70) return { msg: 'Well done! أحسنتَ', color: '#2e7d9e' }
    if (scorePercent >= 50) return { msg: 'Good effort! جيد', color: '#b06d00' }
    return { msg: 'Keep studying! استمر في الدراسة', color: '#c0392b' }
  }

  if (phase === 'select') {
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
              <span className="quiz-disc-icon">🎲</span>
              <span className="quiz-disc-name">Mixed</span>
              <span className="quiz-disc-arabic arabic">كُلّ العُلُوم</span>
            </button>
            {DISCIPLINES.map(d => (
              <button
                key={d.id}
                className={`quiz-disc-btn ${selectedDiscipline === d.id ? 'quiz-disc-btn--active' : ''}`}
                onClick={() => setSelectedDiscipline(d.id)}
              >
                <span className="quiz-disc-icon">{d.icon}</span>
                <span className="quiz-disc-name">{d.name}</span>
                <span className="quiz-disc-arabic arabic">{d.arabicName}</span>
              </button>
            ))}
          </div>

          <div className="quiz-level-row">
            {[
              { key: 'beginner', label: 'Beginner', arabic: 'مُبْتَدِئ', color: '#2e7d32' },
              { key: 'intermediate', label: 'Intermediate', arabic: 'مُتَوَسِّط', color: '#e65100', locked: userLevel === 'beginner' },
              { key: 'advanced', label: 'Advanced', arabic: 'مُتَقَدِّم', color: '#6a1b9a', locked: userLevel !== 'advanced' },
            ].map(lv => (
              <button
                key={lv.key}
                className={`quiz-level-btn ${selectedLevel === lv.key ? 'quiz-level-btn--active' : ''} ${lv.locked ? 'quiz-level-btn--locked' : ''}`}
                style={selectedLevel === lv.key ? { borderColor: lv.color, color: lv.color } : {}}
                onClick={() => !lv.locked && setSelectedLevel(lv.key)}
                title={lv.locked ? 'Complete previous level to unlock' : ''}
              >
                {lv.locked ? '🔒 ' : ''}{lv.label}
                <span className="quiz-level-arabic arabic">{lv.arabic}</span>
              </button>
            ))}
          </div>
          <div className="quiz-start-row">
            <p className="quiz-start-label">Selected: <strong>{discLabel(selectedDiscipline)}</strong> · <strong>{selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}</strong></p>
            <button className="btn btn-primary" onClick={startQuiz}>Begin Quiz →</button>
          </div>
        </div>
      </div>
    )
  }

  if (phase === 'active') {
    const q = questions[currentIdx]
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
                if (idx === q.correct) cls += ' quiz-option--correct'
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
              <span className="quiz-explanation-icon">{chosen === q.correct ? '✓' : '✗'}</span>
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
        <div className="quiz-result-header">
          <span className="quiz-result-icon">🎯</span>
          <h2 className="quiz-result-title">Quiz Complete</h2>
          <div className="quiz-result-score" style={{ color }}>{score} / {questions.length}</div>
          <div className="quiz-result-percent" style={{ color }}>{scorePercent}%</div>
          <div className="quiz-result-msg">{msg}</div>
        </div>

        <div className="quiz-review">
          <h3 className="quiz-review-title">Review</h3>
          {answers.map((a, i) => (
            <div key={i} className={`quiz-review-item ${a.chosen === a.correct ? 'quiz-review-item--correct' : 'quiz-review-item--wrong'}`}>
              <div className="quiz-review-q">
                <span className="quiz-review-icon">{a.chosen === a.correct ? '✓' : '✗'}</span>
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
          <button className="btn btn-ghost" onClick={() => setPhase('select')}>Change Discipline</button>
          <Link to="/dashboard" className="btn btn-ghost">📊 View Dashboard</Link>
        </div>
      </div>
    </div>
  )
}
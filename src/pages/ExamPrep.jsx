import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'
import './Quiz.css'

const SUBJECTS = [
  { key: 'islamic_studies', label: 'Islamic Studies', arabic: 'التربية الإسلامية' },
  { key: 'arabic', label: 'Arabic', arabic: 'اللغة العربية' },
]

const MOCK_EXAM_LENGTH = 40 // approximate — verify against JAMB's current CBT format
const MOCK_EXAM_MINUTES = 30 // approximate default, adjust once confirmed

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function ExamPrep({ user }) {
  const [phase, setPhase] = useState('subjects') // subjects | topics | topic | quiz | result
  const [subject, setSubject] = useState(null)
  const [topics, setTopics] = useState([])
  const [topicsLoading, setTopicsLoading] = useState(false)
  const [activeTopic, setActiveTopic] = useState(null)
  const [notes, setNotes] = useState([])
  const [questions, setQuestions] = useState([])
  const [contentLoading, setContentLoading] = useState(false)

  const [session, setSession] = useState(null)
  const [qIndex, setQIndex] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([]) // { question, chosen, correct_index, options, explanation } — powers the post-exam review
  const [isMock, setIsMock] = useState(false)
  const [timeLeft, setTimeLeft] = useState(null)
  const [timedOut, setTimedOut] = useState(false)

  useEffect(() => {
    if (!isMock || timeLeft === null || phase !== 'quiz') return
    if (timeLeft <= 0) {
      setTimedOut(true)
      finishSession()
      return
    }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, isMock, phase])

  const openSubject = async (s) => {
    setSubject(s)
    setTopicsLoading(true)
    setPhase('topics')
    try {
      const { data, error } = await supabase
        .from('exam_prep_topics')
        .select('*')
        .eq('subject', s.key)
        .order('sort_order')
      if (error) throw error
      setTopics(data || [])
    } catch (err) {
      console.error('Failed to load topics:', err)
      setTopics([])
    } finally {
      setTopicsLoading(false)
    }
  }

  const openTopic = async (topic) => {
    setActiveTopic(topic)
    setContentLoading(true)
    setPhase('topic')
    try {
      const [{ data: n }, { data: q }] = await Promise.all([
        supabase.from('exam_prep_notes').select('*').eq('topic_id', topic.id).eq('status', 'published').order('created_at'),
        supabase.from('exam_prep_questions').select('*').eq('topic_id', topic.id).eq('status', 'published'),
      ])
      setNotes(n || [])
      setQuestions(q || [])
    } catch (err) {
      console.error('Failed to load topic content:', err)
      setNotes([])
      setQuestions([])
    } finally {
      setContentLoading(false)
    }
  }

  const startTopicQuiz = () => {
    if (questions.length === 0) return
    setSession(shuffle(questions))
    setIsMock(false)
    setTimeLeft(null)
    setTimedOut(false)
    setQIndex(0)
    setChosen(null)
    setRevealed(false)
    setScore(0)
    setAnswers([])
    setPhase('quiz')
  }

  const startMockExam = async () => {
    setContentLoading(true)
    try {
      const { data, error } = await supabase
        .from('exam_prep_questions')
        .select('*, exam_prep_topics!inner(subject)')
        .eq('status', 'published')
        .eq('exam_prep_topics.subject', subject.key)
      if (error) throw error
      const pool = shuffle(data || []).slice(0, MOCK_EXAM_LENGTH)
      if (pool.length === 0) {
        setContentLoading(false)
        return
      }
      setSession(pool)
      setIsMock(true)
      setTimeLeft(MOCK_EXAM_MINUTES * 60)
      setTimedOut(false)
      setQIndex(0)
      setChosen(null)
      setRevealed(false)
      setScore(0)
      setAnswers([])
      setPhase('quiz')
    } catch (err) {
      console.error('Failed to start mock exam:', err)
    } finally {
      setContentLoading(false)
    }
  }

  const currentQ = session ? session[qIndex] : null

  const pick = (idx) => {
    if (revealed) return
    setChosen(idx)
    if (!isMock) setRevealed(true)
    if (idx === currentQ.correct_index) setScore(s => s + 1)
  }

  // Records this question into the answers log regardless of mode —
  // this is what makes the post-exam review possible for mock exams,
  // which otherwise never show per-question feedback until the end.
  const recordAnswer = (chosenIdx) => {
    setAnswers(prev => [...prev, {
      question: currentQ.question,
      chosen: chosenIdx,
      correct_index: currentQ.correct_index,
      options: currentQ.options,
      explanation: currentQ.explanation,
    }])
  }

  const finishSession = () => {
    // If the timer ran out mid-question with something selected but
    // not yet advanced, still record it before showing results.
    setAnswers(prev => {
      if (chosen !== null && prev.length < qIndex + 1 && currentQ) {
        return [...prev, {
          question: currentQ.question,
          chosen,
          correct_index: currentQ.correct_index,
          options: currentQ.options,
          explanation: currentQ.explanation,
        }]
      }
      return prev
    })
    setPhase('result')
  }

  const nextQ = () => {
    recordAnswer(chosen)
    if (qIndex + 1 < session.length) {
      setQIndex(i => i + 1)
      setChosen(null)
      setRevealed(false)
    } else {
      setPhase('result')
    }
  }

  const formatTime = (s) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m}:${String(sec).padStart(2, '0')}`
  }

  if (!user) return null

  // ── Subjects ──────────────────────────────────────────────
  if (phase === 'subjects') {
    return (
      <div className="page-content quiz-page">
        <h1 className="page-title">UTME Exam Prep</h1>
        <p className="page-subtitle">إعداد امتحان الجامعة — Study notes and practice questions by topic</p>
        <div className="quiz-select-card card">
          <h2 className="quiz-select-title">Choose a subject</h2>
          <div className="quiz-discipline-options">
            {SUBJECTS.map(s => (
              <button key={s.key} className="quiz-disc-btn" onClick={() => openSubject(s)}>
                <span className="quiz-disc-name">{s.label}</span>
                <span className="quiz-disc-arabic arabic">{s.arabic}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Topics ────────────────────────────────────────────────
  if (phase === 'topics') {
    return (
      <div className="page-content quiz-page">
        <div className="quiz-session-top" style={{ marginBottom: 12 }}>
          <button className="hifdh-quit" onClick={() => setPhase('subjects')}>← Subjects</button>
        </div>
        <h1 className="page-title">{subject.label}</h1>
        <p className="page-subtitle">Choose a topic, or take a full mock exam</p>

        <button className="btn btn-primary" style={{ marginBottom: 20 }} onClick={startMockExam} disabled={contentLoading}>
          {contentLoading ? 'Loading…' : `Start Mock Exam (${MOCK_EXAM_LENGTH} questions, ${MOCK_EXAM_MINUTES} min) →`}
        </button>

        {topicsLoading ? (
          <p className="book-quiz-status">Loading topics…</p>
        ) : topics.length === 0 ? (
          <div className="quiz-select-card card"><p>No topics published for this subject yet.</p></div>
        ) : (
          <div className="book-quiz-past-list">
            {topics.map(t => (
              <button key={t.id} className="quiz-disc-btn book-quiz-past-btn" onClick={() => openTopic(t)}>
                <strong>{t.title}</strong>
                {t.syllabus_section && <div className="book-quiz-status" style={{ marginBottom: 0 }}>{t.syllabus_section}</div>}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  // ── Topic detail (notes + practice quiz entry) ────────────
  if (phase === 'topic') {
    return (
      <div className="page-content quiz-page">
        <div className="quiz-session-top" style={{ marginBottom: 12 }}>
          <button className="hifdh-quit" onClick={() => setPhase('topics')}>← Topics</button>
        </div>
        <h1 className="page-title">{activeTopic.title}</h1>
        {activeTopic.syllabus_section && <p className="page-subtitle">{activeTopic.syllabus_section}</p>}

        {contentLoading ? (
          <p className="book-quiz-status">Loading…</p>
        ) : (
          <>
            {notes.map(n => (
              <div key={n.id} className="quiz-select-card card" style={{ marginBottom: 16 }}>
                <p style={{ whiteSpace: 'pre-wrap', color: 'var(--text-primary)', lineHeight: 1.7 }}>{n.body}</p>
              </div>
            ))}
            {notes.length === 0 && <p className="book-quiz-status">No study notes published for this topic yet.</p>}

            {questions.length > 0 ? (
              <button className="btn btn-primary" onClick={startTopicQuiz}>
                Practice — {questions.length} questions →
              </button>
            ) : (
              <p className="book-quiz-status">No practice questions published for this topic yet.</p>
            )}
          </>
        )}
      </div>
    )
  }

  // ── Quiz / mock exam session ───────────────────────────────
  if (phase === 'quiz' && currentQ) {
    const progress = (qIndex / session.length) * 100
    return (
      <div className="page-content quiz-page">
        <div className="quiz-progress-header">
          <span className="quiz-progress-label">Question {qIndex + 1} of {session.length}</span>
          {isMock ? (
            <span className="quiz-score-badge badge badge-regal">⏱ {formatTime(timeLeft)}</span>
          ) : (
            <span className="quiz-score-badge badge badge-regal">Score: {score}</span>
          )}
        </div>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="quiz-question-card card">
          <p className="quiz-question-text">{currentQ.question}</p>
          <div className="quiz-options">
            {currentQ.options.map((opt, idx) => {
              let cls = 'quiz-option'
              if (!isMock && revealed) {
                if (idx === currentQ.correct_index) cls += ' quiz-option--correct'
                else if (idx === chosen) cls += ' quiz-option--wrong'
              } else if (chosen === idx) {
                cls += ' quiz-option--selected'
              }
              return (
                <button key={idx} className={cls} onClick={() => pick(idx)} disabled={!isMock && revealed}>
                  <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
                  <span>{opt}</span>
                </button>
              )
            })}
          </div>
          {!isMock && revealed && currentQ.explanation && (
            <div className="quiz-explanation quiz-explanation--correct"><p>{currentQ.explanation}</p></div>
          )}
          {(isMock ? chosen !== null : revealed) && (
            <div className="quiz-next-row">
              <button className="btn btn-primary" onClick={nextQ}>
                {qIndex + 1 < session.length ? 'Next Question →' : 'Finish →'}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── Result — with full per-question review, powered by `answers` ──
  if (phase === 'result') {
    const percent = Math.round((score / session.length) * 100)
    return (
      <div className="page-content quiz-page">
        <div className="quiz-result-card card">
          <div className="quiz-result-header">
            <h2 className="quiz-result-title">{isMock ? 'Mock Exam Complete' : activeTopic?.title}</h2>
            {timedOut && <p style={{ color: '#e65100', fontSize: '0.85rem', marginBottom: 8 }}>Time ran out — unanswered questions were scored as incorrect.</p>}
            <div className="quiz-result-score">{score} / {session.length}</div>
            <div className="quiz-result-percent">{percent}%</div>
          </div>

          {isMock && answers.length > 0 && (
            <div className="quiz-review">
              <h3 className="quiz-review-title">Review</h3>
              {answers.map((a, i) => (
                <div
                  key={i}
                  className={`quiz-review-item ${a.chosen === a.correct_index ? 'quiz-review-item--correct' : 'quiz-review-item--wrong'}`}
                >
                  <div className="quiz-review-q">
                    <strong>Q{i + 1}:</strong> {a.question}
                  </div>
                  <div className="quiz-review-ans">
                    Your answer: <em className={a.chosen === a.correct_index ? 'correct-text' : 'wrong-text'}>
                      {a.chosen === null || a.chosen === undefined ? 'Not answered' : a.options[a.chosen]}
                    </em>
                    {a.chosen !== a.correct_index && (
                      <> &nbsp;|&nbsp; Correct: <em className="correct-text">{a.options[a.correct_index]}</em></>
                    )}
                  </div>
                  {a.explanation && <div className="quiz-review-exp">{a.explanation}</div>}
                </div>
              ))}
            </div>
          )}

          <div className="quiz-result-actions">
            <button className="btn btn-primary" onClick={() => setPhase('subjects')}>Back to Subjects</button>
            {!isMock && <button className="btn btn-ghost" onClick={startTopicQuiz}>Retry Topic</button>}
          </div>
        </div>
      </div>
    )
  }

  return null
}
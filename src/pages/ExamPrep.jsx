import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'
import './Quiz.css'

const BOARDS = [
  { key: 'utme', label: 'UTME (JAMB)', arabic: 'امتحان الجامعة' },
  { key: 'jupeb', label: 'JUPEB', arabic: 'الالتحاق المباشر' },
]

const SUBJECTS = [
  { key: 'islamic_studies', label: 'Islamic Studies', arabic: 'التربية الإسلامية' },
  { key: 'arabic', label: 'Arabic', arabic: 'اللغة العربية' },
]

const MOCK_EXAM_LENGTH = 40 // approximate — verify against each board's actual format
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
  const [phase, setPhase] = useState('boards') // boards | subjects | topics | topic | quiz | result
  const [board, setBoard] = useState(null)
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
  const [answers, setAnswers] = useState([])
  const [isMock, setIsMock] = useState(false)
  const [timeLeft, setTimeLeft] = useState(null)
  const [timedOut, setTimedOut] = useState(false)

  // Theory question — self-review only, never auto-graded
  const [theoryRevealed, setTheoryRevealed] = useState(false)

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

  const openBoard = (b) => {
    setBoard(b)
    setPhase('subjects')
  }

  const openSubject = async (s) => {
    setSubject(s)
    setTopicsLoading(true)
    setPhase('topics')
    try {
      const { data, error } = await supabase
        .from('exam_prep_topics')
        .select('*')
        .eq('board', board.key)
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
    setTheoryRevealed(false)
    setScore(0)
    setAnswers([])
    setPhase('quiz')
  }

  const startMockExam = async () => {
    setContentLoading(true)
    try {
      const { data, error } = await supabase
        .from('exam_prep_questions')
        .select('*, exam_prep_topics!inner(subject, board)')
        .eq('status', 'published')
        .eq('question_type', 'mcq') // mock exam timing/scoring only applies to auto-gradable MCQ
        .eq('exam_prep_topics.subject', subject.key)
        .eq('exam_prep_topics.board', board.key)
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
    if (currentQ.question_type === 'mcq') recordAnswer(chosen)
    if (qIndex + 1 < session.length) {
      setQIndex(i => i + 1)
      setChosen(null)
      setRevealed(false)
      setTheoryRevealed(false)
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

  // ── Boards ────────────────────────────────────────────────
  if (phase === 'boards') {
    return (
      <div className="page-content quiz-page">
        <h1 className="page-title">Exam Prep</h1>
        <p className="page-subtitle">إعداد الامتحان — Choose which exam you're preparing for</p>
        <div className="quiz-select-card card">
          <div className="quiz-discipline-options">
            {BOARDS.map(b => (
              <button key={b.key} className="quiz-disc-btn" onClick={() => openBoard(b)}>
                <span className="quiz-disc-name">{b.label}</span>
                <span className="quiz-disc-arabic arabic">{b.arabic}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Subjects ──────────────────────────────────────────────
  if (phase === 'subjects') {
    return (
      <div className="page-content quiz-page">
        <div className="quiz-session-top" style={{ marginBottom: 12 }}>
          <button className="hifdh-quit" onClick={() => setPhase('boards')}>← Change Exam</button>
        </div>
        <h1 className="page-title">{board.label}</h1>
        <p className="page-subtitle">Choose a subject</p>
        <div className="quiz-select-card card">
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
        <h1 className="page-title">{board.label} — {subject.label}</h1>
        <p className="page-subtitle">Choose a topic, or take a full mock exam</p>

        <button className="btn btn-primary" style={{ marginBottom: 20 }} onClick={startMockExam} disabled={contentLoading}>
          {contentLoading ? 'Loading…' : `Start Mock Exam (${MOCK_EXAM_LENGTH} questions, ${MOCK_EXAM_MINUTES} min) →`}
        </button>
        <p className="book-quiz-status" style={{ marginTop: -14, marginBottom: 16 }}>
          Mock exam covers published multiple-choice questions only — theory/essay questions are studied per-topic below.
        </p>

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

  // ── Topic detail ────────────────────────────────────────────
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
    const isTheory = currentQ.question_type === 'theory'
    return (
      <div className="page-content quiz-page">
        <div className="quiz-progress-header">
          <span className="quiz-progress-label">Question {qIndex + 1} of {session.length}</span>
          {isMock ? (
            <span className="quiz-score-badge badge badge-regal">⏱ {formatTime(timeLeft)}</span>
          ) : !isTheory ? (
            <span className="quiz-score-badge badge badge-regal">Score: {score}</span>
          ) : null}
        </div>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="quiz-question-card card">
          {isTheory ? (
            <>
              <p className="quiz-question-text">{currentQ.question}</p>
              <p className="book-quiz-status" style={{ marginTop: 8 }}>
                Think through your own answer, then compare it against the model answer below — this is a study aid, not an auto-graded score.
              </p>
              {!theoryRevealed ? (
                <button className="btn btn-primary" style={{ marginTop: 10 }} onClick={() => setTheoryRevealed(true)}>
                  Show Model Answer
                </button>
              ) : (
                <div className="quiz-explanation quiz-explanation--correct" style={{ whiteSpace: 'pre-wrap' }}>
                  <p><strong>Model answer:</strong></p>
                  <p>{currentQ.model_answer}</p>
                </div>
              )}
            </>
          ) : (
            <>
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
            </>
          )}

          {(isTheory ? theoryRevealed : (isMock ? chosen !== null : revealed)) && (
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

  // ── Result ──────────────────────────────────────────────────
  if (phase === 'result') {
    const mcqCount = session.filter(q => q.question_type !== 'theory').length
    const percent = mcqCount > 0 ? Math.round((score / mcqCount) * 100) : null
    return (
      <div className="page-content quiz-page">
        <div className="quiz-result-card card">
          <div className="quiz-result-header">
            <h2 className="quiz-result-title">{isMock ? 'Mock Exam Complete' : activeTopic?.title}</h2>
            {timedOut && <p style={{ color: '#e65100', fontSize: '0.85rem', marginBottom: 8 }}>Time ran out — unanswered questions were scored as incorrect.</p>}
            {percent !== null && (
              <>
                <div className="quiz-result-score">{score} / {mcqCount}</div>
                <div className="quiz-result-percent">{percent}%</div>
              </>
            )}
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
            <button className="btn btn-primary" onClick={() => setPhase('boards')}>Back to Exams</button>
            {!isMock && <button className="btn btn-ghost" onClick={startTopicQuiz}>Retry Topic</button>}
          </div>
        </div>
      </div>
    )
  }

  return null
}
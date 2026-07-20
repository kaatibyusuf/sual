import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './Lms.css'

function normalizeArabic(str) {
  return (str || '')
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, '')
    .replace(/[إأآا]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ').trim()
}

const ITEM_ICON = { audio: '🎧', reading: '📖', quiz: '📝', discussion: '💬' }

export default function LmsCourseDetail({ user }) {
  const { courseId } = useParams()
  const navigate = useNavigate()

  const [course, setCourse] = useState(null)
  const [sections, setSections] = useState([])
  const [itemsBySection, setItemsBySection] = useState({})
  const [expandedSections, setExpandedSections] = useState({})
  const [progressMap, setProgressMap] = useState({})
  const [activeItem, setActiveItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const [quizQuestions, setQuizQuestions] = useState([])
  const [quizPhase, setQuizPhase] = useState('view') // view | quiz | result
  const [qIndex, setQIndex] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)

  const [showDiscussion, setShowDiscussion] = useState(false)
  const [discussionPosts, setDiscussionPosts] = useState([])
  const [activeDiscussionPost, setActiveDiscussionPost] = useState(null)
  const [discussionReplies, setDiscussionReplies] = useState([])
  const [newDiscussionPost, setNewDiscussionPost] = useState({ title: '', body: '' })
  const [newDiscussionReply, setNewDiscussionReply] = useState('')
  const [showNewDiscussionPost, setShowNewDiscussionPost] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const { data: courseData } = await supabase.from('lms_courses').select('*').eq('id', courseId).maybeSingle()
      setCourse(courseData)

      const { data: sectionData } = await supabase.from('lms_sections').select('*').eq('course_id', courseId).eq('status', 'published').order('section_number')
      setSections(sectionData || [])

      const itemsMap = {}
      let allItemIds = []
      for (const s of sectionData || []) {
        const { data: itemData } = await supabase.from('lms_items').select('*').eq('section_id', s.id).eq('status', 'published').order('item_number')
        itemsMap[s.id] = itemData || []
        allItemIds = allItemIds.concat((itemData || []).map(i => i.id))
      }
      setItemsBySection(itemsMap)
      setExpandedSections(Object.fromEntries((sectionData || []).map(s => [s.id, true])))

      if (user && allItemIds.length > 0) {
        const { data: progressData } = await supabase.from('lms_item_progress').select('*').eq('user_id', user.id).in('item_id', allItemIds)
        const map = {}
        ;(progressData || []).forEach(p => { map[p.item_id] = p })
        setProgressMap(map)
      }

      const { data: discData } = await supabase.from('lms_discussion_posts').select('*').eq('course_id', courseId).order('created_at', { ascending: false })
      setDiscussionPosts(discData || [])
    } catch (err) {
      console.error('Failed to load course:', err)
    } finally {
      setLoading(false)
    }
  }, [courseId, user])

  useEffect(() => { load() }, [load])

  const openItem = async (item) => {
    setActiveItem(item)
    setShowDiscussion(false)
    setQuizPhase('view')
    if (item.item_type === 'quiz') {
      const { data } = await supabase.from('lms_item_questions').select('*').eq('item_id', item.id).eq('status', 'published')
      setQuizQuestions(data || [])
    }
  }

  const markComplete = async (item) => {
    if (!user) return
    try {
      await supabase.from('lms_item_progress').upsert({
        user_id: user.id, item_id: item.id, completed_at: new Date().toISOString(),
      }, { onConflict: 'user_id,item_id' })
      setProgressMap(prev => ({ ...prev, [item.id]: { ...prev[item.id], completed_at: new Date().toISOString() } }))
    } catch (err) {
      console.error('Failed to mark complete:', err)
    }
  }

  const startQuiz = () => {
    setQIndex(0); setChosen(null); setRevealed(false); setScore(0)
    setQuizPhase('quiz')
  }

  const currentQ = quizQuestions[qIndex]

  const pickAnswer = (idx) => {
    if (revealed) return
    setChosen(idx); setRevealed(true)
    if (idx === currentQ.correct_index) setScore(s => s + 1)
  }

  const nextQuizQuestion = async () => {
    if (qIndex + 1 < quizQuestions.length) {
      setQIndex(i => i + 1); setChosen(null); setRevealed(false)
    } else {
      if (user) {
        await supabase.from('lms_item_progress').upsert({
          user_id: user.id, item_id: activeItem.id, completed_at: new Date().toISOString(),
          quiz_score: score, quiz_total: quizQuestions.length,
        }, { onConflict: 'user_id,item_id' })
        setProgressMap(prev => ({ ...prev, [activeItem.id]: { completed_at: new Date().toISOString(), quiz_score: score, quiz_total: quizQuestions.length } }))
      }
      setQuizPhase('result')
    }
  }

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }))
  }

  const openDiscussionPost = async (post) => {
    setActiveDiscussionPost(post)
    const { data } = await supabase.from('lms_discussion_replies').select('*').eq('post_id', post.id).order('created_at', { ascending: true })
    setDiscussionReplies(data || [])
  }

  const submitDiscussionPost = async () => {
    if (!newDiscussionPost.title.trim() || !newDiscussionPost.body.trim() || !user) return
    await supabase.from('lms_discussion_posts').insert({ course_id: courseId, user_id: user.id, title: newDiscussionPost.title.trim(), body: newDiscussionPost.body.trim() })
    setNewDiscussionPost({ title: '', body: '' })
    setShowNewDiscussionPost(false)
    const { data } = await supabase.from('lms_discussion_posts').select('*').eq('course_id', courseId).order('created_at', { ascending: false })
    setDiscussionPosts(data || [])
  }

  const submitDiscussionReply = async () => {
    if (!newDiscussionReply.trim() || !user) return
    await supabase.from('lms_discussion_replies').insert({ post_id: activeDiscussionPost.id, user_id: user.id, body: newDiscussionReply.trim() })
    setNewDiscussionReply('')
    openDiscussionPost(activeDiscussionPost)
  }

  if (!user) return null
  if (loading) return <div className="page-content"><p>Loading…</p></div>
  if (!course) return <div className="page-content"><p>Course not found.</p></div>

  const totalItems = Object.values(itemsBySection).flat().length
  const completedItems = Object.values(itemsBySection).flat().filter(i => progressMap[i.id]?.completed_at).length

  return (
    <div className="page-content">
      <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => navigate('/lms')}>← My Courses</button>
      <h1 className="page-title">{course.title}</h1>
      {course.arabic_title && <p className="page-subtitle arabic">{course.arabic_title}</p>}
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
        {completedItems} of {totalItems} items completed
      </p>

      <div className="lms-detail-layout">
        <div className="lms-detail-sidebar">
          <button
            className="lms-section-header"
            style={{ width: '100%', background: showDiscussion ? 'rgba(9,69,112,0.08)' : 'transparent', marginBottom: 8 }}
            onClick={() => { setShowDiscussion(true); setActiveItem(null) }}
          >
            💬 Course Discussion ({discussionPosts.length})
          </button>

          {sections.map(s => (
            <div key={s.id} className="lms-section-group">
              <div className="lms-section-header" onClick={() => toggleSection(s.id)}>
                <span>{s.title}</span>
                <span>{expandedSections[s.id] ? '▾' : '▸'}</span>
              </div>
              {expandedSections[s.id] && (itemsBySection[s.id] || []).map(item => {
                const done = !!progressMap[item.id]?.completed_at
                return (
                  <div
                    key={item.id}
                    className={`lms-item-row ${activeItem?.id === item.id ? 'lms-item-row--active' : ''}`}
                    onClick={() => openItem(item)}
                  >
                    <span>{done ? '✅' : ITEM_ICON[item.item_type]}</span>
                    <span>{item.title}</span>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div className="lms-detail-main">
          {showDiscussion ? (
            activeDiscussionPost ? (
              <div className="spaces-class-section card">
                <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => setActiveDiscussionPost(null)}>← Back to discussion</button>
                <h4 className="spaces-class-section-title">{activeDiscussionPost.title}</h4>
                <p style={{ whiteSpace: 'pre-wrap', marginBottom: 16 }}>{activeDiscussionPost.body}</p>
                {discussionReplies.map(r => (
                  <div key={r.id} className="spaces-reply card" style={{ marginBottom: 8 }}>
                    <p className="spaces-reply-body" style={{ whiteSpace: 'pre-wrap' }}>{r.body}</p>
                  </div>
                ))}
                <textarea className="spaces-textarea" placeholder="Write a reply..." value={newDiscussionReply} onChange={e => setNewDiscussionReply(e.target.value)} rows={3} />
                <button className="spaces-submit-btn" onClick={submitDiscussionReply} disabled={!newDiscussionReply.trim()}>Reply →</button>
              </div>
            ) : (
              <div className="spaces-class-section card">
                <h4 className="spaces-class-section-title">💬 Course Discussion</h4>
                <button className="btn btn-primary" style={{ marginBottom: 16 }} onClick={() => setShowNewDiscussionPost(v => !v)}>
                  {showNewDiscussionPost ? 'Cancel' : '+ New Post'}
                </button>
                {showNewDiscussionPost && (
                  <div style={{ marginBottom: 16 }}>
                    <input type="text" placeholder="Title" value={newDiscussionPost.title} onChange={e => setNewDiscussionPost(p => ({ ...p, title: e.target.value }))} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid var(--border)', marginBottom: 8 }} />
                    <textarea className="spaces-textarea" placeholder="Your question or comment..." value={newDiscussionPost.body} onChange={e => setNewDiscussionPost(p => ({ ...p, body: e.target.value }))} rows={4} />
                    <button className="spaces-submit-btn" onClick={submitDiscussionPost} disabled={!newDiscussionPost.title.trim() || !newDiscussionPost.body.trim()}>Post →</button>
                  </div>
                )}
                {discussionPosts.length === 0 ? (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>No discussion yet. Be the first to ask something.</p>
                ) : discussionPosts.map(p => (
                  <button key={p.id} className="quiz-disc-btn" style={{ textAlign: 'left', padding: '10px 14px', display: 'block', width: '100%', marginBottom: 6 }} onClick={() => openDiscussionPost(p)}>
                    <strong>{p.title}</strong>
                  </button>
                ))}
              </div>
            )
          ) : !activeItem ? (
            <div className="quiz-select-card card">
              <p>Select an item from the sidebar to begin.</p>
            </div>
          ) : activeItem.item_type === 'audio' ? (
            <div className="spaces-tafseer-card card">
              <h4 className="spaces-class-section-title">🎧 {activeItem.title}</h4>
              {activeItem.audio_url ? (
                <audio controls src={activeItem.audio_url} style={{ width: '100%', marginTop: 12 }} />
              ) : (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>No recording uploaded yet for this item.</p>
              )}
              <button className="btn btn-ghost" style={{ marginTop: 16 }} onClick={() => markComplete(activeItem)} disabled={!!progressMap[activeItem.id]?.completed_at}>
                {progressMap[activeItem.id]?.completed_at ? '✅ Marked Complete' : 'Mark as Complete'}
              </button>
            </div>
          ) : activeItem.item_type === 'reading' ? (
            <div className="spaces-tafseer-card card">
              <h4 className="spaces-class-section-title">📖 {activeItem.title}</h4>
              {activeItem.arabic_text && <p className="spaces-tafseer-arabic arabic-lg" style={{ marginTop: 12 }}>{activeItem.arabic_text}</p>}
              {activeItem.transliteration && <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: 8 }}>{activeItem.transliteration}</p>}
              {activeItem.translation && <p className="spaces-tafseer-translation" style={{ marginTop: 8 }}>"{activeItem.translation}"</p>}
              {activeItem.notes && <p className="spaces-tafseer-body" style={{ whiteSpace: 'pre-wrap', marginTop: 12 }}>{activeItem.notes}</p>}
              <button className="btn btn-ghost" style={{ marginTop: 16 }} onClick={() => markComplete(activeItem)} disabled={!!progressMap[activeItem.id]?.completed_at}>
                {progressMap[activeItem.id]?.completed_at ? '✅ Marked Complete' : 'Mark as Complete'}
              </button>
            </div>
          ) : activeItem.item_type === 'quiz' ? (
            quizPhase === 'view' ? (
              <div className="quiz-select-card card">
                <h4 className="spaces-class-section-title">📝 {activeItem.title}</h4>
                <p style={{ marginBottom: 16 }}>{quizQuestions.length} questions</p>
                {progressMap[activeItem.id]?.quiz_score !== undefined && progressMap[activeItem.id]?.quiz_score !== null && (
                  <p style={{ marginBottom: 16, color: 'var(--text-secondary)' }}>
                    Last attempt: {progressMap[activeItem.id].quiz_score} / {progressMap[activeItem.id].quiz_total}
                  </p>
                )}
                <button className="btn btn-primary" onClick={startQuiz} disabled={quizQuestions.length === 0}>Start Quiz →</button>
              </div>
            ) : quizPhase === 'quiz' && currentQ ? (
              <div className="quiz-question-card card">
                <div className="quiz-progress-header">
                  <span className="quiz-progress-label">Question {qIndex + 1} of {quizQuestions.length}</span>
                  <span className="quiz-score-badge badge badge-regal">Score: {score}</span>
                </div>
                <p className="quiz-question-text">{currentQ.question}</p>
                <div className="quiz-options">
                  {currentQ.options.map((opt, idx) => {
                    let cls = 'quiz-option'
                    if (revealed) {
                      if (idx === currentQ.correct_index) cls += ' quiz-option--correct'
                      else if (idx === chosen) cls += ' quiz-option--wrong'
                    } else if (chosen === idx) cls += ' quiz-option--selected'
                    return (
                      <button key={idx} className={cls} onClick={() => pickAnswer(idx)} disabled={revealed}>
                        <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
                        <span>{opt}</span>
                      </button>
                    )
                  })}
                </div>
                {revealed && currentQ.explanation && <div className="quiz-explanation quiz-explanation--correct"><p>{currentQ.explanation}</p></div>}
                {revealed && (
                  <div className="quiz-next-row">
                    <button className="btn btn-primary" onClick={nextQuizQuestion}>
                      {qIndex + 1 < quizQuestions.length ? 'Next Question →' : 'Finish →'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="quiz-result-card card" style={{ textAlign: 'center' }}>
                <h4 className="spaces-class-section-title">Quiz Complete</h4>
                <div className="quiz-result-score">{score} / {quizQuestions.length}</div>
                <div className="quiz-result-percent">{Math.round((score / quizQuestions.length) * 100)}%</div>
                <button className="btn btn-ghost" style={{ marginTop: 16 }} onClick={() => setQuizPhase('view')}>Back</button>
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  )
}
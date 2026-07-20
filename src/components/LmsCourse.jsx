import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase.js'
import '../pages/Spaces.css'

function normalizeArabic(str) {
  return (str || '')
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim()
}

export default function LmsCourse({ classId, level, user }) {
  const [phase, setPhase] = useState('courses') // courses | chapters | chapter | quiz | result | discussion
  const [courses, setCourses] = useState([])
  const [coursesLoading, setCoursesLoading] = useState(false)
  const [activeCourse, setActiveCourse] = useState(null)
  const [chapters, setChapters] = useState([])
  const [chaptersLoading, setChaptersLoading] = useState(false)
  const [progressMap, setProgressMap] = useState({}) // chapter_id -> progress row
  const [activeChapter, setActiveChapter] = useState(null)
  const [questions, setQuestions] = useState([])

  const [qIndex, setQIndex] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)

  // Course-scoped discussion — separate from the general Community
  // feed in Spaces, tied specifically to whoever's taking this course.
  const [discussionPosts, setDiscussionPosts] = useState([])
  const [discussionLoading, setDiscussionLoading] = useState(false)
  const [activeDiscussionPost, setActiveDiscussionPost] = useState(null)
  const [discussionReplies, setDiscussionReplies] = useState([])
  const [newDiscussionPost, setNewDiscussionPost] = useState({ title: '', body: '' })
  const [newDiscussionReply, setNewDiscussionReply] = useState('')
  const [showNewDiscussionPost, setShowNewDiscussionPost] = useState(false)
  const [postingDiscussion, setPostingDiscussion] = useState(false)

  const fetchCourses = useCallback(async () => {
    setCoursesLoading(true)
    try {
      const { data, error } = await supabase
        .from('lms_courses')
        .select('*')
        .eq('class_id', classId)
        .eq('level', level)
        .order('sort_order')
      if (error) throw error
      setCourses(data || [])
    } catch (err) {
      console.error('Failed to load LMS courses:', err)
      setCourses([])
    } finally {
      setCoursesLoading(false)
    }
  }, [classId, level])

  useEffect(() => { fetchCourses() }, [fetchCourses])

  const fetchDiscussion = async (courseId) => {
    setDiscussionLoading(true)
    try {
      const { data, error } = await supabase
        .from('lms_discussion_posts')
        .select('*')
        .eq('course_id', courseId)
        .order('created_at', { ascending: false })
      if (error) throw error
      setDiscussionPosts(data || [])
    } catch (err) {
      console.error('Failed to load course discussion:', err)
      setDiscussionPosts([])
    } finally {
      setDiscussionLoading(false)
    }
  }

  const openCourse = async (course) => {
    setActiveCourse(course)
    setChaptersLoading(true)
    setPhase('chapters')
    try {
      const { data: chapterData, error } = await supabase
        .from('lms_chapters')
        .select('*')
        .eq('course_id', course.id)
        .eq('status', 'published')
        .order('chapter_number')
      if (error) throw error
      setChapters(chapterData || [])

      if (user && chapterData?.length > 0) {
        const { data: progressData } = await supabase
          .from('lms_progress')
          .select('*')
          .eq('user_id', user.id)
          .in('chapter_id', chapterData.map(c => c.id))
        const map = {}
        ;(progressData || []).forEach(p => { map[p.chapter_id] = p })
        setProgressMap(map)
      }
    } catch (err) {
      console.error('Failed to load chapters:', err)
      setChapters([])
    } finally {
      setChaptersLoading(false)
    }

    fetchDiscussion(course.id)
  }

  const openChapter = async (chapter) => {
    setActiveChapter(chapter)
    setPhase('chapter')
    try {
      const { data, error } = await supabase
        .from('lms_chapter_questions')
        .select('*')
        .eq('chapter_id', chapter.id)
        .eq('status', 'published')
      if (error) throw error
      setQuestions(data || [])
    } catch (err) {
      console.error('Failed to load chapter questions:', err)
      setQuestions([])
    }
  }

  const markComplete = async () => {
    if (!user) return
    try {
      const { error } = await supabase.from('lms_progress').upsert({
        user_id: user.id,
        chapter_id: activeChapter.id,
        completed_at: new Date().toISOString(),
      }, { onConflict: 'user_id,chapter_id' })
      if (error) throw error
      setProgressMap(prev => ({ ...prev, [activeChapter.id]: { ...prev[activeChapter.id], completed_at: new Date().toISOString() } }))
    } catch (err) {
      console.error('Failed to mark chapter complete:', err)
    }
  }

  const startQuiz = () => {
    setQIndex(0)
    setChosen(null)
    setRevealed(false)
    setScore(0)
    setPhase('quiz')
  }

  const currentQ = questions[qIndex]

  const pick = (idx) => {
    if (revealed) return
    setChosen(idx)
    setRevealed(true)
    if (idx === currentQ.correct_index) setScore(s => s + 1)
  }

  const nextQ = async () => {
    if (qIndex + 1 < questions.length) {
      setQIndex(i => i + 1)
      setChosen(null)
      setRevealed(false)
    } else {
      const finalScore = chosen === currentQ.correct_index ? score : score
      if (user) {
        await supabase.from('lms_progress').upsert({
          user_id: user.id,
          chapter_id: activeChapter.id,
          completed_at: new Date().toISOString(),
          quiz_score: finalScore,
          quiz_total: questions.length,
        }, { onConflict: 'user_id,chapter_id' })
        setProgressMap(prev => ({
          ...prev,
          [activeChapter.id]: { completed_at: new Date().toISOString(), quiz_score: finalScore, quiz_total: questions.length },
        }))
      }
      setPhase('result')
    }
  }

  const goToNextChapter = () => {
    const idx = chapters.findIndex(c => c.id === activeChapter.id)
    if (idx >= 0 && idx + 1 < chapters.length) {
      openChapter(chapters[idx + 1])
    } else {
      setPhase('chapters')
    }
  }

  const openDiscussionPost = async (post) => {
    setActiveDiscussionPost(post)
    try {
      const { data, error } = await supabase
        .from('lms_discussion_replies')
        .select('*')
        .eq('post_id', post.id)
        .order('created_at', { ascending: true })
      if (error) throw error
      setDiscussionReplies(data || [])
    } catch (err) {
      console.error('Failed to load discussion replies:', err)
      setDiscussionReplies([])
    }
  }

  const submitDiscussionPost = async () => {
    if (!newDiscussionPost.title.trim() || !newDiscussionPost.body.trim() || !user) return
    setPostingDiscussion(true)
    try {
      const { error } = await supabase.from('lms_discussion_posts').insert({
        course_id: activeCourse.id,
        user_id: user.id,
        title: newDiscussionPost.title.trim(),
        body: newDiscussionPost.body.trim(),
      })
      if (error) throw error
      setNewDiscussionPost({ title: '', body: '' })
      setShowNewDiscussionPost(false)
      fetchDiscussion(activeCourse.id)
    } catch (err) {
      console.error('Failed to post to course discussion:', err)
    } finally {
      setPostingDiscussion(false)
    }
  }

  const submitDiscussionReply = async () => {
    if (!newDiscussionReply.trim() || !user) return
    setPostingDiscussion(true)
    try {
      const { error } = await supabase.from('lms_discussion_replies').insert({
        post_id: activeDiscussionPost.id,
        user_id: user.id,
        body: newDiscussionReply.trim(),
      })
      if (error) throw error
      setNewDiscussionReply('')
      openDiscussionPost(activeDiscussionPost)
    } catch (err) {
      console.error('Failed to post reply:', err)
    } finally {
      setPostingDiscussion(false)
    }
  }

  // ── Course list ─────────────────────────────────────────────
  if (phase === 'courses') {
    return (
      <div className="spaces-class-section card">
        <h4 className="spaces-class-section-title">🎓 Courses</h4>
        {coursesLoading ? (
          <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>Loading…</p>
        ) : courses.length === 0 ? (
          <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>No courses published yet for this level.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {courses.map(c => (
              <button
                key={c.id}
                className="quiz-disc-btn"
                style={{ textAlign: 'left', padding: '12px 16px' }}
                onClick={() => openCourse(c)}
              >
                <strong>{c.title}</strong>
                {c.arabic_title && <span className="arabic" style={{ marginLeft: 8, color: '#6a8090' }}>{c.arabic_title}</span>}
                {c.teacher_name && <div style={{ fontSize: '0.78rem', color: '#8a9ab0', marginTop: 2 }}>Taught by {c.teacher_name}</div>}
                {c.description && <div style={{ fontSize: '0.82rem', color: '#6a8090', marginTop: 4 }}>{c.description}</div>}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  // ── Chapter list ────────────────────────────────────────────
  if (phase === 'chapters') {
    const completedCount = chapters.filter(c => progressMap[c.id]?.completed_at).length
    return (
      <div className="spaces-class-section card">
        <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => setPhase('courses')}>← Courses</button>
        <h4 className="spaces-class-section-title">{activeCourse.title}</h4>
        {chapters.length > 0 && (
          <p style={{ fontSize: '0.82rem', color: '#6a8090', marginBottom: 12 }}>
            {completedCount} of {chapters.length} chapters completed
          </p>
        )}

        <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => setPhase('discussion')}>
          💬 Course Discussion ({discussionPosts.length})
        </button>

        {chaptersLoading ? (
          <p>Loading…</p>
        ) : chapters.length === 0 ? (
          <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>No chapters published yet for this course.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {chapters.map(ch => {
              const done = !!progressMap[ch.id]?.completed_at
              return (
                <button
                  key={ch.id}
                  className="quiz-disc-btn"
                  style={{ textAlign: 'left', padding: '10px 14px', opacity: done ? 0.85 : 1 }}
                  onClick={() => openChapter(ch)}
                >
                  <span style={{ marginRight: 8 }}>{done ? '✅' : '⬜'}</span>
                  <strong>Chapter {ch.chapter_number}</strong> — {ch.title}
                </button>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  // ── Chapter content ─────────────────────────────────────────
  if (phase === 'chapter' && activeChapter) {
    return (
      <div className="spaces-class-section card">
        <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => setPhase('chapters')}>← Chapters</button>
        <h4 className="spaces-class-section-title">Chapter {activeChapter.chapter_number} — {activeChapter.title}</h4>

        {activeChapter.audio_url && (
          <audio controls src={activeChapter.audio_url} style={{ width: '100%', marginBottom: 16 }} />
        )}

        {activeChapter.arabic_text && (
          <p className="spaces-tafseer-arabic arabic-lg" style={{ marginBottom: 8 }}>{activeChapter.arabic_text}</p>
        )}
        {activeChapter.transliteration && (
          <p style={{ fontStyle: 'italic', color: '#6a8090', fontSize: '0.9rem', marginBottom: 8 }}>{activeChapter.transliteration}</p>
        )}
        {activeChapter.translation && (
          <p className="spaces-tafseer-translation" style={{ marginBottom: 16 }}>"{activeChapter.translation}"</p>
        )}
        {activeChapter.notes && (
          <p className="spaces-tafseer-body" style={{ whiteSpace: 'pre-wrap', marginBottom: 16 }}>{activeChapter.notes}</p>
        )}

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {questions.length > 0 && (
            <button className="btn btn-primary" onClick={startQuiz}>Take Chapter Quiz →</button>
          )}
          <button className="btn btn-ghost" onClick={markComplete} disabled={!!progressMap[activeChapter.id]?.completed_at}>
            {progressMap[activeChapter.id]?.completed_at ? '✅ Marked Complete' : 'Mark as Complete'}
          </button>
        </div>
      </div>
    )
  }

  // ── Chapter quiz ────────────────────────────────────────────
  if (phase === 'quiz' && currentQ) {
    return (
      <div className="spaces-class-section card">
        <div className="quiz-progress-header">
          <span className="quiz-progress-label">Question {qIndex + 1} of {questions.length}</span>
          <span className="quiz-score-badge badge badge-regal">Score: {score}</span>
        </div>
        <div className="quiz-question-card card">
          <p className="quiz-question-text">{currentQ.question}</p>
          <div className="quiz-options">
            {currentQ.options.map((opt, idx) => {
              let cls = 'quiz-option'
              if (revealed) {
                if (idx === currentQ.correct_index) cls += ' quiz-option--correct'
                else if (idx === chosen) cls += ' quiz-option--wrong'
              } else if (chosen === idx) cls += ' quiz-option--selected'
              return (
                <button key={idx} className={cls} onClick={() => pick(idx)} disabled={revealed}>
                  <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
                  <span>{opt}</span>
                </button>
              )
            })}
          </div>
          {revealed && currentQ.explanation && (
            <div className="quiz-explanation quiz-explanation--correct"><p>{currentQ.explanation}</p></div>
          )}
          {revealed && (
            <div className="quiz-next-row">
              <button className="btn btn-primary" onClick={nextQ}>
                {qIndex + 1 < questions.length ? 'Next Question →' : 'Finish →'}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── Result ──────────────────────────────────────────────────
  if (phase === 'result') {
    const percent = Math.round((score / questions.length) * 100)
    return (
      <div className="spaces-class-section card" style={{ textAlign: 'center' }}>
        <h4 className="spaces-class-section-title">Chapter Quiz Complete</h4>
        <div className="quiz-result-score">{score} / {questions.length}</div>
        <div className="quiz-result-percent">{percent}%</div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={goToNextChapter}>Next Chapter →</button>
          <button className="btn btn-ghost" onClick={() => setPhase('chapters')}>Back to Chapters</button>
        </div>
      </div>
    )
  }

  // ── Course-scoped discussion ────────────────────────────────
  if (phase === 'discussion') {
    if (activeDiscussionPost) {
      return (
        <div className="spaces-class-section card">
          <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => setActiveDiscussionPost(null)}>← Back to discussion</button>
          <h4 className="spaces-class-section-title">{activeDiscussionPost.title}</h4>
          <p style={{ whiteSpace: 'pre-wrap', marginBottom: 16 }}>{activeDiscussionPost.body}</p>

          <div style={{ marginBottom: 16 }}>
            {discussionReplies.length === 0 ? (
              <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>No replies yet.</p>
            ) : discussionReplies.map(r => (
              <div key={r.id} className="spaces-reply card" style={{ marginBottom: 8 }}>
                <p className="spaces-reply-body" style={{ whiteSpace: 'pre-wrap' }}>{r.body}</p>
              </div>
            ))}
          </div>

          <textarea
            className="spaces-textarea"
            placeholder="Write a reply..."
            value={newDiscussionReply}
            onChange={e => setNewDiscussionReply(e.target.value)}
            rows={3}
          />
          <button className="spaces-submit-btn" onClick={submitDiscussionReply} disabled={postingDiscussion || !newDiscussionReply.trim()}>
            {postingDiscussion ? 'Posting...' : 'Reply →'}
          </button>
        </div>
      )
    }

    return (
      <div className="spaces-class-section card">
        <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => setPhase('chapters')}>← Chapters</button>
        <h4 className="spaces-class-section-title">💬 {activeCourse.title} — Discussion</h4>

        <button className="btn btn-primary" style={{ marginBottom: 16 }} onClick={() => setShowNewDiscussionPost(v => !v)}>
          {showNewDiscussionPost ? 'Cancel' : '+ New Post'}
        </button>

        {showNewDiscussionPost && (
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              placeholder="Title"
              value={newDiscussionPost.title}
              onChange={e => setNewDiscussionPost(p => ({ ...p, title: e.target.value }))}
              style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d0e0ec', marginBottom: 8 }}
            />
            <textarea
              className="spaces-textarea"
              placeholder="Your question or comment..."
              value={newDiscussionPost.body}
              onChange={e => setNewDiscussionPost(p => ({ ...p, body: e.target.value }))}
              rows={4}
            />
            <button className="spaces-submit-btn" onClick={submitDiscussionPost} disabled={postingDiscussion || !newDiscussionPost.title.trim() || !newDiscussionPost.body.trim()}>
              {postingDiscussion ? 'Posting...' : 'Post →'}
            </button>
          </div>
        )}

        {discussionLoading ? (
          <p>Loading…</p>
        ) : discussionPosts.length === 0 ? (
          <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>No discussion yet for this course. Be the first to ask something.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {discussionPosts.map(p => (
              <button
                key={p.id}
                className="quiz-disc-btn"
                style={{ textAlign: 'left', padding: '10px 14px' }}
                onClick={() => openDiscussionPost(p)}
              >
                <strong>{p.title}</strong>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return null
}
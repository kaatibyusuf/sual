import React, { useEffect, useState, useCallback } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './MarketplaceLearn.css'

function formatLessonDuration(seconds) {
  if (!seconds) return null
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

export default function MarketplaceLearn({ user }) {
  const { slug } = useParams()

  const [course, setCourse] = useState(null)
  const [sections, setSections] = useState([])
  const [notEnrolled, setNotEnrolled] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [activeLessonId, setActiveLessonId] = useState(null)
  const [videoUrl, setVideoUrl] = useState(null)
  const [videoLoading, setVideoLoading] = useState(false)
  const [videoError, setVideoError] = useState(null)

  const [completedLessonIds, setCompletedLessonIds] = useState(new Set())
  const [certificate, setCertificate] = useState(null)
  const [justCompleted, setJustCompleted] = useState(false)

  const load = async () => {
    if (!user) return
    setLoading(true)
    setError(null)
    try {
      const [{ data: courses, error: coursesError }, { data: curriculum, error: curriculumError }] = await Promise.all([
        supabase.rpc('get_public_marketplace_courses'),
        supabase.rpc('get_public_marketplace_course_detail', { course_slug: slug }),
      ])
      if (coursesError) throw coursesError
      if (curriculumError) throw curriculumError

      const found = (courses || []).find(c => c.slug === slug)
      if (!found) {
        setError('This course could not be found.')
        return
      }

      const { data: enrollment } = await supabase
        .from('marketplace_enrollments')
        .select('id')
        .eq('user_id', user.id)
        .eq('course_id', found.id)
        .maybeSingle()
      if (!enrollment) {
        setNotEnrolled(true)
        return
      }

      setCourse(found)

      const sectionMap = new Map()
      for (const row of curriculum || []) {
        if (!sectionMap.has(row.section_id)) {
          sectionMap.set(row.section_id, { id: row.section_id, number: row.section_number, title: row.section_title, lessons: [] })
        }
        sectionMap.get(row.section_id).lessons.push({
          id: row.lesson_id,
          number: row.lesson_number,
          title: row.lesson_title,
          durationSeconds: row.duration_seconds,
        })
      }
      const sortedSections = Array.from(sectionMap.values())
        .sort((a, b) => a.number - b.number)
        .map(s => ({ ...s, lessons: s.lessons.sort((a, b) => a.number - b.number) }))
      setSections(sortedSections)

      const { data: progressData, error: progressError } = await supabase.functions.invoke('marketplace-player', {
        body: { action: 'get_course_progress', course_id: found.id },
      })
      if (progressError) throw progressError
      if (progressData?.error) throw new Error(progressData.error)

      const completedSet = new Set(progressData.completedLessonIds || [])
      setCompletedLessonIds(completedSet)
      setCertificate(progressData.certificate || null)

      // Land on the first not-yet-completed lesson, or the very
      // first lesson if everything (or nothing) is done — picking
      // up where they left off rather than always restarting at
      // lesson one.
      const allLessons = sortedSections.flatMap(s => s.lessons)
      const firstIncomplete = allLessons.find(l => !completedSet.has(l.id))
      setActiveLessonId((firstIncomplete || allLessons[0])?.id ?? null)
    } catch (err) {
      console.error('Failed to load course player:', err)
      setError('Could not load this course right now.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, user])

  const loadVideo = useCallback(async (lessonId) => {
    if (!lessonId) return
    setVideoLoading(true)
    setVideoError(null)
    setVideoUrl(null)
    try {
      const { data, error } = await supabase.functions.invoke('marketplace-player', {
        body: { action: 'get_lesson_url', lesson_id: lessonId },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setVideoUrl(data.url)
    } catch (err) {
      setVideoError(err.message)
    } finally {
      setVideoLoading(false)
    }
  }, [])

  useEffect(() => {
    if (activeLessonId) loadVideo(activeLessonId)
  }, [activeLessonId, loadVideo])

  const handleVideoEnded = async () => {
    if (!activeLessonId || completedLessonIds.has(activeLessonId)) return
    try {
      const { data, error } = await supabase.functions.invoke('marketplace-player', {
        body: { action: 'mark_complete', lesson_id: activeLessonId },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)

      setCompletedLessonIds(prev => new Set(prev).add(activeLessonId))
      if (data.completed && data.certificate) {
        setCertificate(data.certificate)
        setJustCompleted(true)
      }
    } catch (err) {
      console.error('Failed to mark lesson complete:', err)
    }
  }

  if (!user) return <Navigate to="/marketplace" replace />
  if (loading) return <div className="page-content"><p style={{ color: '#8a9ab0' }}>Loading…</p></div>
  if (notEnrolled) return <Navigate to={`/marketplace/course/${slug}`} replace />
  if (error || !course) return <div className="page-content"><p style={{ color: '#c0392b' }}>{error}</p></div>

  const allLessons = sections.flatMap(s => s.lessons)
  const activeLesson = allLessons.find(l => l.id === activeLessonId)

  return (
    <div className="marketplace-learn-page">
      {justCompleted && certificate && (
        <div className="marketplace-completion-banner">
          <span>🎉 You've completed <strong>{course.title}</strong>!</span>
          <span className="marketplace-completion-actions">
            {certificate.url && (
              <a href={certificate.url} target="_blank" rel="noreferrer" className="btn btn-primary">Download Certificate</a>
            )}
            <button className="btn btn-ghost" onClick={() => setJustCompleted(false)}>Dismiss</button>
          </span>
        </div>
      )}

      <div className="marketplace-learn-layout">
        <div className="marketplace-learn-main">
          <Link to={`/marketplace/course/${slug}`} className="marketplace-learn-back">← {course.title}</Link>

          {videoLoading ? (
            <div className="marketplace-learn-video-placeholder"><p>Loading video…</p></div>
          ) : videoError ? (
            <div className="marketplace-learn-video-placeholder"><p style={{ color: '#c0392b' }}>{videoError}</p></div>
          ) : videoUrl ? (
            <video
              key={activeLessonId}
              src={videoUrl}
              controls
              autoPlay
              onEnded={handleVideoEnded}
              className="marketplace-learn-video"
            />
          ) : (
            <div className="marketplace-learn-video-placeholder"><p>No video for this lesson yet.</p></div>
          )}

          {activeLesson && (
            <div className="marketplace-learn-lesson-info">
              <h2>{activeLesson.title}</h2>
              {!completedLessonIds.has(activeLesson.id) && (
                <button className="btn btn-ghost" onClick={handleVideoEnded}>Mark as complete</button>
              )}
            </div>
          )}

          {certificate && !justCompleted && (
            <div className="marketplace-learn-cert-note card">
              <span>You've already earned a certificate for this course.</span>
              {certificate.url && <a href={certificate.url} target="_blank" rel="noreferrer" className="btn btn-ghost">Download</a>}
            </div>
          )}
        </div>

        <div className="marketplace-learn-sidebar">
          {sections.map(section => (
            <div key={section.id} className="marketplace-learn-section">
              <p className="marketplace-learn-section-title">Section {section.number} — {section.title}</p>
              {section.lessons.map(lesson => {
                const done = completedLessonIds.has(lesson.id)
                const active = lesson.id === activeLessonId
                return (
                  <button
                    key={lesson.id}
                    className={`marketplace-learn-lesson-btn ${active ? 'marketplace-learn-lesson-btn--active' : ''}`}
                    onClick={() => setActiveLessonId(lesson.id)}
                  >
                    <span className={`marketplace-learn-check ${done ? 'marketplace-learn-check--done' : ''}`}>
                      {done ? '✓' : lesson.number}
                    </span>
                    <span className="marketplace-learn-lesson-btn-title">{lesson.title}</span>
                    {lesson.durationSeconds && (
                      <span className="marketplace-learn-lesson-btn-duration">{formatLessonDuration(lesson.durationSeconds)}</span>
                    )}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
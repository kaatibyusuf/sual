import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './MarketplaceCourseDetail.css'

function formatDuration(totalSeconds) {
  if (!totalSeconds) return null
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.round((totalSeconds % 3600) / 60)
  if (hours === 0) return `${minutes}m`
  if (minutes === 0) return `${hours}h`
  return `${hours}h ${minutes}m`
}

function formatLessonDuration(seconds) {
  if (!seconds) return null
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

function formatPrice(kobo, currency) {
  const major = kobo / 100
  const symbol = currency === 'NGN' ? '₦' : currency + ' '
  return `${symbol}${major.toLocaleString()}`
}

export default function MarketplaceCourseDetail({ user }) {
  const { slug } = useParams()

  const [course, setCourse] = useState(null)
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [inCart, setInCart] = useState(false)
  const [owned, setOwned] = useState(false)
  const [cartBusy, setCartBusy] = useState(false)

  const [previewLesson, setPreviewLesson] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [previewLoading, setPreviewLoading] = useState(false)
  const [previewError, setPreviewError] = useState(null)

  const load = async () => {
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
      setCourse(found)

      const sectionMap = new Map()
      for (const row of curriculum || []) {
        if (!sectionMap.has(row.section_id)) {
          sectionMap.set(row.section_id, {
            id: row.section_id,
            number: row.section_number,
            title: row.section_title,
            lessons: [],
          })
        }
        sectionMap.get(row.section_id).lessons.push({
          id: row.lesson_id,
          number: row.lesson_number,
          title: row.lesson_title,
          description: row.lesson_description,
          durationSeconds: row.duration_seconds,
          isPreview: row.is_preview,
        })
      }
      setSections(
        Array.from(sectionMap.values())
          .sort((a, b) => a.number - b.number)
          .map(s => ({ ...s, lessons: s.lessons.sort((a, b) => a.number - b.number) }))
      )

      if (user) {
        const [{ data: cartRow }, { data: enrollmentRow }] = await Promise.all([
          supabase.from('marketplace_cart_items').select('id').eq('user_id', user.id).eq('course_id', found.id).maybeSingle(),
          supabase.from('marketplace_enrollments').select('id').eq('user_id', user.id).eq('course_id', found.id).maybeSingle(),
        ])
        setInCart(!!cartRow)
        setOwned(!!enrollmentRow)
      }
    } catch (err) {
      console.error('Failed to load course:', err)
      setError('Could not load this course right now.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, user])

  const toggleCart = async () => {
    if (!user || !course) return
    setCartBusy(true)
    try {
      if (inCart) {
        await supabase.from('marketplace_cart_items').delete().eq('user_id', user.id).eq('course_id', course.id)
        setInCart(false)
      } else {
        await supabase.from('marketplace_cart_items').insert({ user_id: user.id, course_id: course.id })
        setInCart(true)
      }
    } catch (err) {
      console.error('Failed to update cart:', err)
    } finally {
      setCartBusy(false)
    }
  }

  const openPreview = async (lesson) => {
    setPreviewLesson(lesson)
    setPreviewUrl(null)
    setPreviewError(null)
    setPreviewLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('marketplace-player', {
        body: { action: 'get_lesson_url', lesson_id: lesson.id },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setPreviewUrl(data.url)
    } catch (err) {
      setPreviewError(err.message)
    } finally {
      setPreviewLoading(false)
    }
  }

  if (loading) return <div className="page-content"><p style={{ color: '#8a9ab0' }}>Loading…</p></div>
  if (error || !course) return <div className="page-content"><p style={{ color: '#c0392b' }}>{error}</p></div>

  const duration = formatDuration(course.total_duration_seconds)
  const totalLessons = sections.reduce((sum, s) => sum + s.lessons.length, 0)

  return (
    <div className="page-content marketplace-detail-page">
      {previewLesson && (
        <div className="marketplace-preview-overlay" onClick={() => setPreviewLesson(null)}>
          <div className="marketplace-preview-modal" onClick={e => e.stopPropagation()}>
            <div className="marketplace-preview-header">
              <p>{previewLesson.title}</p>
              <button className="btn btn-ghost" onClick={() => setPreviewLesson(null)}>✕</button>
            </div>
            {previewLoading ? (
              <p style={{ padding: 20, color: '#8a9ab0' }}>Loading preview…</p>
            ) : previewError ? (
              <p style={{ padding: 20, color: '#c0392b' }}>{previewError}</p>
            ) : (
              <video src={previewUrl} controls autoPlay style={{ width: '100%', borderRadius: 8 }} />
            )}
          </div>
        </div>
      )}

      <div className="marketplace-detail-hero">
        <div className="marketplace-detail-main">
          <span className={`marketplace-level-badge marketplace-level-badge--${course.level}`}>{course.level}</span>
          <h1 className="marketplace-detail-title">{course.title}</h1>
          {course.arabic_title && <p className="marketplace-detail-arabic">{course.arabic_title}</p>}
          <p className="marketplace-detail-desc">{course.description}</p>
          <p className="marketplace-detail-meta">
            By {course.creator_name} · {totalLessons} lesson{totalLessons === 1 ? '' : 's'}{duration && <> · {duration}</>}
          </p>

          {Array.isArray(course.what_you_will_learn) && course.what_you_will_learn.length > 0 && (
            <div className="marketplace-learn-box">
              <p className="marketplace-learn-title">What you'll learn</p>
              <ul className="marketplace-learn-list">
                {course.what_you_will_learn.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          )}
        </div>

        <div className="marketplace-detail-buy-card">
          {course.thumbnail_url && <img src={course.thumbnail_url} alt={course.title} className="marketplace-detail-thumb" />}
          <p className="marketplace-detail-price">{formatPrice(course.price_kobo, course.currency)}</p>
          {owned ? (
            <Link to={`/marketplace/learn/${course.slug}`} className="btn btn-primary marketplace-detail-buy-btn">Go to Course</Link>
          ) : user ? (
            <button className={`btn ${inCart ? 'btn-ghost' : 'btn-primary'} marketplace-detail-buy-btn`} onClick={toggleCart} disabled={cartBusy}>
              {cartBusy ? '…' : inCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          ) : (
            <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>Sign in to purchase this course.</p>
          )}
          {inCart && !owned && (
            <Link to="/marketplace/cart" className="btn btn-ghost marketplace-detail-buy-btn">Go to Cart</Link>
          )}
        </div>
      </div>

      <div className="marketplace-curriculum">
        <h2 className="marketplace-curriculum-title">Curriculum</h2>
        {sections.length === 0 ? (
          <p style={{ color: '#8a9ab0' }}>Curriculum coming soon.</p>
        ) : (
          sections.map(section => (
            <div key={section.id} className="marketplace-section-card">
              <p className="marketplace-section-heading">Section {section.number} — {section.title}</p>
              {section.lessons.map(lesson => (
                <div key={lesson.id} className="marketplace-lesson-row">
                  <span className="marketplace-lesson-title">
                    {lesson.number}. {lesson.title}
                  </span>
                  <span className="marketplace-lesson-right">
                    {lesson.durationSeconds && <span className="marketplace-lesson-duration">{formatLessonDuration(lesson.durationSeconds)}</span>}
                    {lesson.isPreview && (
                      <button className="marketplace-preview-btn" onClick={() => openPreview(lesson)}>▶ Preview</button>
                    )}
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './MarketplaceMyCourses.css'

export default function MarketplaceMyCourses({ user }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const load = async () => {
    if (!user) return
    setLoading(true)
    setError(null)
    try {
      const [{ data: enrollments, error: enrollError }, { data: courses, error: coursesError }] = await Promise.all([
        supabase.from('marketplace_enrollments').select('id, course_id, enrolled_at, completed_at').eq('user_id', user.id).order('enrolled_at', { ascending: false }),
        supabase.rpc('get_public_marketplace_courses'),
      ])
      if (enrollError) throw enrollError
      if (coursesError) throw coursesError

      const courseById = new Map((courses || []).map(c => [c.id, c]))

      // One get_course_progress call per enrolled course — fine at
      // the scale a single student's course list realistically
      // reaches, and it's the only way to get completed-lesson
      // counts, since the underlying lesson tables have no public
      // read policy of their own (by design — see the marketplace
      // schema's RLS notes).
      const withProgress = await Promise.all(
        (enrollments || []).map(async (enrollment) => {
          const course = courseById.get(enrollment.course_id)
          if (!course) return null
          const { data: progressData } = await supabase.functions.invoke('marketplace-player', {
            body: { action: 'get_course_progress', course_id: enrollment.course_id },
          })
          return {
            ...enrollment,
            course,
            completedCount: progressData?.completedLessonIds?.length ?? 0,
            certificate: progressData?.certificate ?? null,
          }
        })
      )

      setItems(withProgress.filter(Boolean))
    } catch (err) {
      console.error('Failed to load my courses:', err)
      setError('Could not load your courses right now.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  if (!user) return <div className="page-content"><p style={{ color: '#8a9ab0' }}>Sign in to see your courses.</p></div>

  return (
    <div className="page-content marketplace-my-courses-page">
      <h1 className="page-title">My Courses</h1>
      <p className="page-subtitle">Everything you've purchased from Sual Marketplace.</p>

      {loading ? (
        <p style={{ color: '#8a9ab0' }}>Loading…</p>
      ) : error ? (
        <p style={{ color: '#c0392b' }}>{error}</p>
      ) : items.length === 0 ? (
        <div className="marketplace-my-courses-empty card">
          <p>You haven't enrolled in any courses yet.</p>
          <Link to="/marketplace" className="btn btn-primary" style={{ marginTop: 12 }}>Browse Courses</Link>
        </div>
      ) : (
        <div className="marketplace-my-courses-list">
          {items.map(item => {
            const total = item.course.lesson_count || 1
            const percent = Math.round((item.completedCount / total) * 100)
            const complete = !!item.completed_at
            return (
              <div key={item.id} className="marketplace-my-course-card">
                {item.course.thumbnail_url && (
                  <img src={item.course.thumbnail_url} alt={item.course.title} className="marketplace-my-course-thumb" />
                )}
                <div className="marketplace-my-course-body">
                  <p className="marketplace-my-course-title">{item.course.title}</p>
                  <p className="marketplace-my-course-creator">By {item.course.creator_name}</p>
                  <div className="marketplace-my-course-progress-track">
                    <div className="marketplace-my-course-progress-fill" style={{ width: `${percent}%` }} />
                  </div>
                  <p className="marketplace-my-course-progress-label">
                    {complete ? 'Completed' : `${item.completedCount}/${total} lessons · ${percent}%`}
                  </p>
                </div>
                <div className="marketplace-my-course-actions">
                  <Link to={`/marketplace/learn/${item.course.slug}`} className="btn btn-primary">
                    {complete ? 'Review' : 'Continue'}
                  </Link>
                  {item.certificate?.url && (
                    <a href={item.certificate.url} target="_blank" rel="noreferrer" className="btn btn-ghost">Certificate</a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}